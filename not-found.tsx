import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '404: Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
}

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="mx-auto max-w-md">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Error 404
        </span>
        
        <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-primary sm:text-7xl">
          404
        </h1>
        
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page Not Found
        </h2>
        
        <p className="mt-4 text-base text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist or may have been relocated.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="/contact">
              <HelpCircle className="h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
