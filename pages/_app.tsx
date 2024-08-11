import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";

import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') { // checks that we are client-side
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
    },
  })
}

export default function App({ Component, pageProps }: AppProps) {

  return (
      <>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-MWCFC4M33J"/>
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MWCFC4M33J', {
page_path: window.location.pathname,
});
`,
            }}
        />
        <PostHogProvider client={posthog}>
        <Component {...pageProps} />
        </PostHogProvider>

      </>
  )
}
