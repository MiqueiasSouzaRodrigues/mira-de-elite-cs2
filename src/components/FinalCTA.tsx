
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-gradient-to-br from-neon/20 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-gaming font-bold mb-6">
            Seu time precisa de você jogando como nunca.{" "}
            <span className="neon-text">Chegou a hora de virar lenda.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se aos milhares de jogadores que já dominam suas partidas com nosso bot.
          </p>
          <Button
            size="lg"
            className="bg-gaming-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md uppercase tracking-wider text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            ADQUIRA AGORA
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            Garantia de satisfação ou seu dinheiro de volta em até 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
