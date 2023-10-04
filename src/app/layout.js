import Navbar from "@/components/Navbar";
import "./globals.css";
import "@/styles/banner.css";
import "@/styles/style.css";
import "@/styles/stylesheet.css";
import "@/styles/site.css";

import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import { Box, styled } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to my portfolio",
  description: "Hello, i am anubhav kumar ray.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#f7c8bd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        {/* <Link 
            rel="stylesheet" href="/font-awesome/css/all.css"

        /> */}
      </Head>

      <body className={inter.className}>
        <header>
          <Box className="navbar_margin">
            <Navbar />
          </Box>
        </header>

        {children}
        <footer>
          <Footer />
        </footer>
      </body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
    </html>
  );
}
