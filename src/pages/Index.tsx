import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsBaluno from "@/components/WhatIsBaluno";
import Features from "@/components/Features";
import WhyItWorks from "@/components/WhyItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Baluno",
  url: "https://baluno.me",
  logo: "https://baluno.me/favicon.ico",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@baluno.me",
    contactType: "customer support",
  },
  sameAs: [
    "https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584",
  ],
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Baluno — ADHD Daily Planner",
  operatingSystem: "iOS",
  applicationCategory: "HealthApplication",
  description:
    "A gentle, ADHD-friendly planner that adapts to your energy, mood, and real capacity. Plan calm, doable days without burnout.",
  url: "https://apps.apple.com/us/app/baluno-adhd-daily-planner/id6755287584",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Baluno",
  url: "https://baluno.me",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Baluno — Gentle ADHD Planner & Energy-Based Day Planning</title>
        <meta
          name="description"
          content="Baluno is a gentle, ADHD-friendly planner that adapts to your energy, mood, and real capacity. Plan calm, doable days without burnout."
        />
        <meta property="og:title" content="Baluno — Gentle ADHD Planner & Energy-Based Day Planning" />
        <meta property="og:description" content="Baluno is a gentle, ADHD-friendly planner that adapts to your energy, mood, and real capacity. Plan calm, doable days without burnout." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baluno.me/" />
        <meta name="twitter:title" content="Baluno — Gentle ADHD Planner & Energy-Based Day Planning" />
        <meta name="twitter:description" content="Baluno is a gentle, ADHD-friendly planner that adapts to your energy, mood, and real capacity." />
        <link rel="canonical" href="https://baluno.me/" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareAppSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <WhatIsBaluno />
        <div id="features">
          <Features />
        </div>
        <WhyItWorks />
        <Testimonials />
      </main>
      <div id="footer">
        <Footer />
      </div>
      <CookieConsent />
    </div>
  );
};

export default Index;
