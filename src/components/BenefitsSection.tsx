
import React from "react";
import { Button } from "@/components/ui/button";
import { Target, Eye, Brain, Shield, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitProps> = ({
  icon,
  title,
  description,
  imageUrl,
  delay,
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-gaming-darker p-6 rounded-lg neon-border card-hover">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="mr-3">{icon}</div>
            <h3 className="text-xl font-gaming font-bold">{title}</h3>
          </div>
          <p className="text-gray-300 mb-4">{description}</p>
          {/* <div className="mt-auto">
            <div className="bg-black bg-opacity-70 p-1 rounded-lg mb-4">
              <img
                src='512x512.png'
                alt={title}
                className="rounded w-full h-32 object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </ScrollReveal>
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
      delay: 0,
    },
    {
      icon: <Eye className="feature-icon" />,
      title: "Wallhack invisível",
      description:
        "Veja inimigos através de paredes sem modificar arquivos do jogo.",
      imageUrl: "/feature-wallhack.jpg",
      delay: 150,
    },
    {
      icon: <Brain className="feature-icon" />,
      title: "Detecção de movimento para auto-trigger",
      description:
        "Dispare automaticamente quando um inimigo entrar na sua mira.",
      imageUrl: "/feature-trigger.jpg",
      delay: 300,
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Indetectável por anti-cheats",
      description:
        "Tecnologia exclusiva que contorna VAC, FACEIT* e outros sistemas.",
      imageUrl: "/feature-undetected.jpg",
      delay: 450,
    },
    {
      icon: <Wrench className="feature-icon" />,
      title: "Configuração fácil e suporte em tempo real",
      description:
        "Interface intuitiva e atendimento 24/7 em português pelo WhatsApp.",
      imageUrl: "/feature-support.jpg",
      delay: 600,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gaming-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="section-heading text-center">
            <span className="neon-text">Recursos</span> Exclusivos
          </h2>
          <p className="section-subheading text-center">
            Vantagens que transformam sua gameplay
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <ScrollReveal delay={800}>
          <div className="mt-12 text-center">
<a
  href="https://pay.hotmart.com/D99892524U"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button size="lg" className="cta-button">
    Quero Vencer Mais Partidas
  </Button>
</a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BenefitsSection;
