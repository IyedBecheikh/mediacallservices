"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ITServices from "@/components/ITServices";
import DataProcessing from "@/components/DataProcessing";
import WebDevelopment from "@/components/WebDevelopment";
import Telecommunication from "@/components/Telecommunication";
import VoipServices from "@/components/VoipServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="it-services">
        <ITServices />
      </section>
      <section id="data-processing">
        <DataProcessing />
      </section>
      <section id="web-development">
        <WebDevelopment />
      </section>
      <section id="telecommunication">
        <Telecommunication />
      </section>
      <section id="voip">
        <VoipServices />
      </section>
      <Footer />
    </main>
  );
}
