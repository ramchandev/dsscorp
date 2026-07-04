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

export default function Home() {
  // Shared state to coordinate active persona between Hero buttons and Conversion Ladder rows
  const [activePersona, setActivePersona] = useState<string | null>(null);

  const handleSelectPersona = (persona: string) => {
    setActivePersona(persona);
  };

  return (
    <>
      <Navigation />
      
      <main className="flex-1 bg-card-white">
        {/* Hero Section with interactive persona selection */}
        <Hero onSelectPersona={handleSelectPersona} />
        
        {/* Trust credentials bar immediately visible below the fold */}
        <TrustBar />
        
        {/* Two-zone Service Pillars grid */}
        <ServicePillars />
        
        {/* Dynamic Interactive Calculators */}
        <InteractiveTool />
        
        {/* Core Conversion Ladder specific to target personas */}
        <ConversionLadder
          activePersona={activePersona}
          onSelectPersona={handleSelectPersona}
        />
        
        {/* Metrics-driven Case Outcomes Carousel */}
        <CaseStudies />
        
        {/* Client feedback deck */}
        <Testimonials />
        
        {/* Partner bios and positioning preview */}
        <AboutPreview />
        
        {/* Latest Blog Articles */}
        <BlogPreview />
        
        {/* High-conversion final scoping CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
