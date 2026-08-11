'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: Record<string, unknown>[]
  }
}

// Uses environment variable or falls back directly to your measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-ZJNNMTSKF3'

/**
 * Custom event tracking helper for Google Analytics
 */
export function trackEvent(
  action: string,
  category?: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const search = searchParams?.toString()
    const url = search ? `${pathname}?${search}` : pathname
    
    // Debug logging in development mode
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📊 Page viewed: ${url}`)
    }
    
    // Send pageview to Google Analytics on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>

      {/* Google Analytics Script - Only loads in production when ID is configured */}
      {isProduction && GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  send_page_view: false
                });
              `,
            }}
          />
        </>
      )}
    </>
  )
}
