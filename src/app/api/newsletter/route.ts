import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { prisma } from '@/lib/prisma'
import { NewsletterAPIResponse } from '@/types/newsletter'

const resend = new Resend(process.env.RESEND_API_KEY)

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateNewsletterForm(data: unknown): { isValid: boolean; email?: string; error?: string } {
  // Type guard to ensure data is an object
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Invalid form data' }
  }

  const formData = data as Record<string, unknown>

  // Validate email
  if (!formData.email || typeof formData.email !== 'string') {
    return { isValid: false, error: 'Email is required' }
  }

  const email = formData.email.trim().toLowerCase()
  
  if (!validateEmail(email)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }

  return { isValid: true, email }
}

function createWelcomeEmailTemplate(): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome to Trymblink Newsletter</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #E64C27; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 40px; border-radius: 0 0 8px 8px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .welcome-text { font-size: 18px; margin-bottom: 20px; }
        .description { margin-bottom: 30px; line-height: 1.8; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        .unsubscribe { color: #999; text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="logo">Trymblink</div>
        <div class="welcome-text">Welcome to our newsletter! 🎉</div>
      </div>
      <div class="content">
        <h2>Thanks for subscribing!</h2>
        <div class="description">
          <p>You're now part of our exclusive community where we share:</p>
          <ul>
            <li>Latest product insights and industry trends</li>
            <li>Behind-the-scenes content and company updates</li>
            <li>Exclusive tips and best practices</li>
            <li>Early access to new features and announcements</li>
          </ul>
          <p>We promise to deliver valuable content directly to your inbox while respecting your time and privacy.</p>
        </div>
        
        <div class="footer">
          <p>You're receiving this email because you subscribed to our newsletter at trymblink.com</p>
          <p>If you no longer wish to receive these emails, you can <a href="#" class="unsubscribe">unsubscribe here</a></p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validation = validateNewsletterForm(body)
    
    if (!validation.isValid || !validation.email) {
      return NextResponse.json<NewsletterAPIResponse>(
        {
          success: false,
          message: validation.error || 'Validation failed',
          error: validation.error
        },
        { status: 400 }
      )
    }

    const email = validation.email

    try {
      // Try to create new subscription
      const subscription = await prisma.newsletter.create({
        data: { email }
      })

      // Send welcome email
      const emailHtml = createWelcomeEmailTemplate()
      
      const { error: emailError } = await resend.emails.send({
        from: 'Trymblink Newsletter <newsletter@trymblink.com>',
        to: [email],
        subject: 'Welcome to Trymblink Newsletter! 🎉',
        html: emailHtml
      })

      if (emailError) {
        console.error('Welcome email sending failed:', emailError)
        // Still return success since the subscription was saved
      }

      return NextResponse.json<NewsletterAPIResponse>({
        success: true,
        message: 'Successfully subscribed to newsletter! Check your email for confirmation.',
        data: {
          id: subscription.id,
          email: subscription.email,
          subscribedAt: subscription.subscribedAt.toISOString(),
          isActive: subscription.isActive
        }
      })

    } catch (error: unknown) {
      // Handle unique constraint violation (duplicate email)
      if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
        // Check if the subscription exists and is active
        const existingSubscription = await prisma.newsletter.findUnique({
          where: { email }
        })

        if (existingSubscription?.isActive) {
          return NextResponse.json<NewsletterAPIResponse>({
            success: false,
            message: 'You are already subscribed to our newsletter!',
            error: 'Email already subscribed'
          })
        } else if (existingSubscription && !existingSubscription.isActive) {
          // Reactivate inactive subscription
          const reactivatedSubscription = await prisma.newsletter.update({
            where: { email },
            data: { isActive: true, updatedAt: new Date() }
          })

          return NextResponse.json<NewsletterAPIResponse>({
            success: true,
            message: 'Welcome back! Your newsletter subscription has been reactivated.',
            data: {
              id: reactivatedSubscription.id,
              email: reactivatedSubscription.email,
              subscribedAt: reactivatedSubscription.subscribedAt.toISOString(),
              isActive: reactivatedSubscription.isActive
            }
          })
        }
      }

      // Re-throw other database errors
      throw error
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    return NextResponse.json<NewsletterAPIResponse>(
      {
        success: false,
        message: 'Internal server error. Please try again later.',
        error: 'Server error'
      },
      { status: 500 }
    )
  }
}