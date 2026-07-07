"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicePillars from "@/components/ServicePillars";
import InteractiveTool from "@/components/InteractiveTool";
import ConversionLadder from "@/components/ConversionLadder";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import BlogPreview from "@/components/BlogPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [activePersona, setActivePersona] = useState<string | null>(null);

  const handleSelectPersona = (persona: string) => {
    setActivePersona(persona);
  };

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-card-white">
        <Hero onSelectPersona={handleSelectPersona} />
        <TrustBar />
        <ServicePillars />
        <InteractiveTool />
        <ConversionLadder
          activePersona={activePersona}
          onSelectPersona={handleSelectPersona}
        />
        <CaseStudies />
        <Testimonials />
        <AboutPreview />
        <BlogPreview />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
