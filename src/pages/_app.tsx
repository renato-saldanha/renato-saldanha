import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <section>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    <SocialBar/>
    </section>
  )
}
