export interface NewsletterFormData {
  email: string
}

export interface NewsletterFormErrors {
  email?: string
  general?: string
}

export interface NewsletterAPIResponse {
  success: boolean
  message: string
  data?: {
    id: number
    email: string
    subscribedAt: string
    isActive: boolean
  }
  error?: string
}