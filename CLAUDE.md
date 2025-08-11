# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a Next.js 15 application built with PayloadCMS 3.0 as a headless CMS, using TypeScript and Tailwind CSS v4. The project serves as a digital product development company portfolio website for Trymblink.

### Key Technologies
- **Frontend**: Next.js 15 with React 19, Tailwind CSS v4
- **CMS**: PayloadCMS 3.0 with MongoDB (Mongoose adapter)
- **Animations**: Framer Motion, Embla Carousel, Lottie animations
- **Testing**: Vitest (integration), Playwright (e2e)
- **Package Manager**: pnpm

### Project Structure
- `src/app/(frontend)/` - Next.js App Router frontend pages and components
- `src/app/(payload)/` - PayloadCMS admin interface and API routes
- `src/collections/` - PayloadCMS collection schemas (Users, Media)
- `src/payload.config.ts` - PayloadCMS configuration
- Path aliases: `@/*` maps to `./src/app/(frontend)/*`

### Component Architecture
Components are organized by type:
- `components/layout/` - Header, Footer
- `components/molecules/` - Page-specific sections (home/, about/, contact/)
- `components/icons/` - Organized by category (business/, social/, navigation/, etc.)

## Common Development Commands

### Development
- `pnpm dev` - Start development server (uses NODE_OPTIONS=--no-deprecation)
- `pnpm devsafe` - Clean start (removes .next folder first)
- `http://localhost:3000` - Frontend application
- PayloadCMS admin is accessible at `/admin`

### Build & Production
- `pnpm build` - Production build (uses max-old-space-size=8000)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Testing
- `pnpm test` - Run all tests (integration + e2e)
- `pnpm test:int` - Run Vitest integration tests only
- `pnpm test:e2e` - Run Playwright e2e tests only
- Integration tests: `tests/int/**/*.int.spec.ts`

### PayloadCMS Commands
- `pnpm payload generate:types` - Generate TypeScript types from collections
- `pnpm payload generate:importmap` - Generate import map
- `pnpm payload` - PayloadCMS CLI

## Environment Setup

Required environment variables:
- `DATABASE_URI` - MongoDB connection string
- `PAYLOAD_SECRET` - PayloadCMS secret key
- `RESEND_API_KEY` - Email service API key

## Development Notes

- Uses cross-env for cross-platform NODE_OPTIONS compatibility
- All commands include `--no-deprecation` flag to suppress Node.js warnings
- Build process requires increased memory allocation (8GB)
- TypeScript paths configured for clean imports with `@/` prefix