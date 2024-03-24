import { Analytics } from "@vercel/analytics/react"
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
      <ScrollToTopButton/>
      </main>
      <br/>
      <Footer />
    </>
  )
}