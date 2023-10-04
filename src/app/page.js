"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#f7c8bd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className=" min-h-screen  items-center justify-between">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        <Banner />
        {/* <About /> */}
        <Education />
        <Skills />
        <Work />
        <Project />
        <Service />
        <Contact />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
