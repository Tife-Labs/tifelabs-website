'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Uses environment variable or falls back directly to your measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-ZJNNMTSKF3'

function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const url = `${pathname}${searchParams?.toString() ? `?${searchParams}` : ''}`
    
    // Custom console logging (for debugging)
    if (process.env.NODE_ENV !== 'production') {
      console.log(`📊 Page viewed: ${url}`)
    }
    
    // Google Analytics page view tracking
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
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  )
}
