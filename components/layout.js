import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from './navbar'
import Footer from './footer'
import ScrollToTopButton from './ScrollToTop'
export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <br/>
      <main>{children}
      <Analytics/>
      <SpeedInsights/>
      <ScrollToTopButton/>
      </main>
      <br/>
      <Footer />
    </>
  )
}
