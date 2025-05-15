
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Auto-play the background video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <section id="hero" className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fullscreen video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/hero-bg.jpg" // Fallback image while video loads
        >
          <source src="smokes_vid2.mp4" type="video/mp4" />
          {/* Fallback if video can't play */}
          <img src="header_ctt.png" alt="CS2 Gameplay" className="absolute inset-0 w-full h-full object-cover" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-filter backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 text-center lg:text-left relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-4">
              Domine o CS2 com{" "}
              <span className="neon-text">Precisão Impossível.</span> Sem Ser
              Detectado.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Nosso bot inteligente oferece mira automática, trigger e wallhack
              com tecnologia indetectável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="cta-button animate-pulse-neon text-lg"
              >
                COMPRE AGORA
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-neon border-neon hover:bg-neon hover:bg-opacity-10 text-lg"
              >
                TESTE GRÁTIS
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-8 text-gray-300">
              <span className="text-lg mr-2">+ de 10.000 jogadores usando</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          {/* <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
            <div className="relative w-full max-w-md">
              <img
                src="header_ctt.png"
                alt="CS2 Gameplay com Bot"
                className="rounded-lg shadow-2xl neon-border"
              />
              <div className="absolute top-3 right-3 bg-gaming-red px-4 py-1 rounded-full text-xs font-bold">
                PREMIUM
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
