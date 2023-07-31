import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Montserrat} from "next/font/google" 
import '@/app/globals.css'

const montserrat = Montserrat({
  subsets:["latin"],
  variable:"--font-mont"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
