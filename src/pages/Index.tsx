
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PopupNotification from "@/components/PopupNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <DemoSection />
      <PricingSection />
      <FaqSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <PopupNotification />
    </div>
  );
};

export default Index;
