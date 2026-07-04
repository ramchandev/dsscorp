import Link from "next/link";
import { ShieldCheck, Award, Users, BookOpen, Target, Eye, Settings, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import CTABand from "@/components/CTABand";

const corePillars = [
  {
    title: "Result Driven",
    description: "Backed by years of experienced practice across diverse corporate industries and domestic markets.",
    icon: <CheckCircle2 className="w-5 h-5 text-cyan" />,
  },
  {
    title: "End-to-End Solutions",
    description: "From statutory setup and compliance filings to capital restructuring, we cover your entire financial journey.",
    icon: <Settings className="w-5 h-5 text-chartreuse" />,
  },
  {
    title: "Global Perspective",
    description: "Trusted advisory for global NRIs and companies setting up subsidiaries or managing cross-border transactions in India.",
    icon: <Users className="w-5 h-5 text-steel" />,
  },
  {
    title: "Client Centric",
    description: "We don't just act as external advisors; we partner with you long-term to help you make smarter business decisions.",
    icon: <ShieldCheck className="w-5 h-5 text-navy" />,
  },
  {
    title: "Future-Ready Strategy",
    description: "We combine time-tested CA practices with forward-thinking regulatory and technology insights.",
    icon: <Award className="w-5 h-5 text-cyan" />,
  },
];

export const metadata = {
  title: "About Our Firm & Values | DSS Corp Advisory",
  description: "Learn about the mission, vision, core pillars, and professional credentials behind DSS Corp Advisory in Chennai.",
};

export default function AboutPage() {
  const crumbs = [
    { label: "About" },
  ];

  return (
    <>
      <Navigation />

      <main className="flex-1 bg-off-white pt-24 min-h-screen">
        <Breadcrumb crumbs={crumbs} />

        {/* Firm Positioning Hero - Dark Layout with happy CA Team thumbs up */}
        <section className="py-20 bg-navy text-card-white relative overflow-hidden border-b border-navy-secondary">
          {/* Decorative Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          
          {/* Glowing Soft Backdrop Accents */}
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full bg-cyan/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-chartreuse/5 blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                  About Us
                </span>
                <h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl text-card-white tracking-tight leading-tight">
                  Empowering Businesses.<br />
                  Enabling Growth. Elevating Success.
                </h1>
                <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed border-l-2 border-cyan/40 pl-4 py-1">
                  At DSS Corp Advisory, we believe every great business deserves a strong financial foundation and a clear path to growth. We are a team of experienced advisors, accountants, and strategists dedicated to simplifying complexity and delivering solutions that help businesses, startups, MSMEs, HNIs, and NRIs achieve their ambitions with confidence.
                </p>
              </div>

              {/* Right Column (Happy CA Team thumbs up) */}
              <div className="lg:col-span-5 flex justify-center mt-6 lg:mt-0">
                <div className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-2xl border border-navy-secondary">
                  <img
                    src="/about_ca_team.jpg"
                    alt="DSS Corp Chartered Accountancy team giving thumbs up in Chennai"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Credentials and Affiliations Row */}
        <section className="py-12 border-b border-border-hairline bg-off-white/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-cyan" />
                <span className="text-xs font-heading font-bold text-navy uppercase">Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-8 h-8 text-chartreuse" />
                <span className="text-xs font-heading font-bold text-navy uppercase">20+ Years Practice</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8 text-steel" />
                <span className="text-xs font-heading font-bold text-navy uppercase">150+ Corporate MSMEs</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BookOpen className="w-8 h-8 text-navy" />
                <span className="text-xs font-heading font-bold text-navy uppercase">FEMA Certifications</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-card-white border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Mission Card */}
              <div className="bg-off-white border border-border-hairline p-8 rounded-lg space-y-6 hover:shadow-xs transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan/10 text-cyan flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-heading font-semibold text-2xl text-navy">Our Mission</h2>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-cyan leading-snug">
                  To deliver end-to-end advisory and financial solutions that empower businesses to grow, scale, and succeed locally and globally.
                </h3>
                <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed pt-4 border-t border-border-hairline/60">
                  Our mission is to go beyond numbers. We aim to be long-term partners in your success helping you make smarter decisions, navigate regulatory landscapes, optimize your finances, and unlock new opportunities for growth.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-off-white border border-border-hairline p-8 rounded-lg space-y-6 hover:shadow-xs transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-chartreuse/10 text-chartreuse flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-heading font-semibold text-2xl text-navy">Our Vision</h2>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-chartreuse leading-snug">
                  To be the most trusted strategic advisory partner for businesses and individuals seeking sustainable success and global impact.
                </h3>
                <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed pt-4 border-t border-border-hairline/60">
                  We envision a world where financial clarity drives innovation and strategic guidance fuels growth. Our goal is to bridge that gap combining deep expertise with future-ready thinking to help clients thrive in a rapidly changing business landscape.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-off-white border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left text */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                  What We Do
                </span>
                <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-navy leading-tight">
                  Comprehensive Solutions.<br />
                  Seamless Execution.<br />
                  Strategic Insight.
                </h2>
              </div>

              {/* Right text */}
              <div className="lg:col-span-7">
                <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
                  We offer a full suite of advisory services including business consulting, accounting, taxation, audit, corporate finance, wealth management, and global structuring. Whether you’re launching a startup, scaling an MSME, managing cross-border operations, or planning family wealth, we bring the expertise, precision, and foresight to guide you every step of the way.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Our Advisory Partners / Team Section */}
        <section className="py-20 bg-card-white border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold text-cyan uppercase tracking-wider font-heading block">
                Leadership Team
              </span>
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy mt-2">
                Our Advisory Partners
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                Expert strategic advisors managing our corporate compliance, bank auditing, and wealth management desks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              
              {/* Profile 1: CA Madan Gopal Narayanan */}
              <div className="bg-off-white border border-border-hairline p-8 rounded-lg flex flex-col justify-between hover:border-cyan/50 hover:shadow-2xs transition-all">
                <div className="space-y-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-cyan/40 bg-navy/10 flex items-center justify-center font-heading font-bold text-lg text-navy">
                    <img
                      src="/madan-gopal-narayanan.png"
                      alt="CA Madan Gopal Narayanan"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy">
                      CA Madan Gopal Narayanan
                    </h3>
                    <span className="block text-xs font-body font-semibold text-cyan mt-0.5">
                      Senior Partner & Lead Advisor
                    </span>
                    <span className="block text-[10px] text-text-muted font-body mt-0.5">
                      FCA, CISA (USA), DISA, M.Phil, MFM
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed pt-2 border-t border-border-hairline/60">
                    Madan Gopal has massive practice experience in statutory bank audits, forex/treasury management, information systems, stock/credit audits, and corporate tax representation.
                  </p>
                </div>

                <div className="mt-6 pt-4">
                  <Link
                    href="/about/madan-gopal-narayanan"
                    className="inline-flex items-center gap-1 text-xs font-body font-semibold text-cyan hover:text-navy transition-colors"
                  >
                    View detailed credentials & timeline →
                  </Link>
                </div>
              </div>

              {/* Profile 2: Ms. Deepa */}
              <div className="bg-off-white border border-border-hairline p-8 rounded-lg flex flex-col justify-between hover:border-cyan/50 hover:shadow-2xs transition-all">
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-full border-2 border-chartreuse/40 bg-navy/10 flex items-center justify-center font-heading font-bold text-2xl text-navy">
                    D
                  </div>
                  
                  <div>
                    <h3 className="font-heading font-bold text-lg text-navy">
                      Ms. Deepa
                    </h3>
                    <span className="block text-xs font-body font-semibold text-chartreuse mt-0.5">
                      Managing Partner
                    </span>
                    <span className="block text-[10px] text-text-muted font-body mt-0.5">
                      Corporate Governance & Administration
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed pt-2 border-t border-border-hairline/60">
                    Deepa leads our corporate governance, administrative audit desks, and statutory filing operations, ensuring that the firm's compliance operations align with absolute regulatory standards.
                  </p>
                </div>
                
                {/* Empty block to align with sibling card */}
                <div className="mt-6 pt-4 h-4" />
              </div>

            </div>
          </div>
        </section>

        {/* Core Pillars / Approach Grid */}
        <section className="py-20 bg-card-white border-b border-border-hairline">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-navy">
                Our Strategic Value Approach
              </h2>
              <p className="font-body text-sm text-text-secondary mt-2">
                The core corporate values guiding how we partner with growth-focused businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-off-white border border-border-hairline p-6 rounded-lg hover:border-cyan/40 transition-all flex flex-col justify-between hover:shadow-2xs"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-full bg-navy/5 text-navy flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="font-heading font-semibold text-base text-navy">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reusable scoping trigger */}
        <CTABand />

      </main>

      <Footer />
    </>
  );
}
