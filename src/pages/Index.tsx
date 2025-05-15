
import React, { useEffect } from "react";
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
  // Add smooth scroll effect when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hash = target.getAttribute('href') as string;
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

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
