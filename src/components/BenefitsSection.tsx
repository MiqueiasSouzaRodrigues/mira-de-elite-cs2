
import React from "react";
import { Button } from "@/components/ui/button";
import { Target, Eye, Brain, Shield, Wrench } from "lucide-react";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const BenefitCard: React.FC<BenefitProps> = ({
  icon,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-gaming-darker p-6 rounded-lg neon-border card-hover">
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="mr-3">{icon}</div>
          <h3 className="text-xl font-gaming font-bold">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="mt-auto">
          <div className="bg-black bg-opacity-70 p-1 rounded-lg mb-4">
            <img
              src={imageUrl}
              alt={title}
              className="rounded w-full h-32 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="feature-icon" />,
      title: "Mira automática com precisão realista",
      description:
        "IA avançada que imita movimentos humanos para evitar detecção.",
      imageUrl: "/feature-aimbot.jpg",
    },
    {
      icon: <Eye className="feature-icon" />,
      title: "Wallhack invisível",
      description:
        "Veja inimigos através de paredes sem modificar arquivos do jogo.",
      imageUrl: "/feature-wallhack.jpg",
    },
    {
      icon: <Brain className="feature-icon" />,
      title: "Detecção de movimento para auto-trigger",
      description:
        "Dispare automaticamente quando um inimigo entrar na sua mira.",
      imageUrl: "/feature-trigger.jpg",
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Indetectável por anti-cheats",
      description:
        "Tecnologia exclusiva que contorna VAC, FACEIT* e outros sistemas.",
      imageUrl: "/feature-undetected.jpg",
    },
    {
      icon: <Wrench className="feature-icon" />,
      title: "Configuração fácil e suporte em tempo real",
      description:
        "Interface intuitiva e atendimento 24/7 em português pelo WhatsApp.",
      imageUrl: "/feature-support.jpg",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gaming-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="neon-text">Recursos</span> Exclusivos
        </h2>
        <p className="section-subheading text-center">
          Vantagens que transformam sua gameplay
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="cta-button">
            Quero Vencer Mais Partidas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
