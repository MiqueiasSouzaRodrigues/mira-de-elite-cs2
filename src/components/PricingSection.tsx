
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleCheck, CalendarDays, Infinity } from "lucide-react";

interface PlanProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ReactNode;
   link: string;
}

const PricingPlan: React.FC<PlanProps> = ({
  title,
  price,
  duration,
  features,
  isPopular = false,
  icon,
  link, // ✅ adiciona aqui
}) => {
  return (
    <div
      className={`bg-gaming-darker rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
        isPopular ? "border-2 border-neon shadow-[0_0_15px_rgba(57,255,20,0.5)]" : "border border-gray-800"
      }`}
    >
      {isPopular && (
        <div className="bg-neon text-black text-center py-1 font-bold text-sm uppercase">
          Melhor Custo-Benefício
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gaming-dark mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-gaming font-bold text-center mb-2">
          {title}
        </h3>
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-400 ml-2">{duration}</span>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CircleCheck className="h-5 w-5 text-neon mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <Button className={`w-full ${isPopular ? "cta-button" : "bg-gaming-dark hover:bg-gray-800"}`}>
    COMPRAR AGORA
  </Button>
</a>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const plans = [
     {
    title: "TKZ External",
    price: "R$ 229,90",
    duration: "/único",
    icon: <CalendarDays className="h-8 w-8 text-neon" />,
    features: [
      "Aimbot leve e Triggerbot externos",
      "Safe para jogadores legit",
      "Baixo consumo de CPU",
      "Suporte por 15 dias via WhatsApp",
    ],
    link:"https://pay.hotmart.com/J99891192E?off=hwqswccwE",
  },
{
    title: "DuneCore v3.2",
    price: "R$ 229,90",
    duration: "/único",
    icon: <CalendarDays className="h-8 w-8 text-neon" />,
    features: [
      "Triggerbot, Aim Assist, AudioRadar",
      "Humanizer + configuração personalizada",
      "Atualizações manuais de offsets incluídas",
      "Suporte por 15 dias via Discord",
    ],
    link:"https://pay.hotmart.com/P99892495B?off=k1l1pghw",
      isPopular: false,
    },
    {
    title: "Combo Elite (TKZ + DuneCore)",
    price: "R$ 429,90",
    duration: "/único",
    icon: <Infinity className="h-8 w-8 text-neon" />,
    features: [
      "Acesso aos dois cheats (TKZ + DuneCore)",
      "Instalação guiada e configs otimizadas",
      "Atualizações mensais incluídas por 30 dias",
      "Suporte completo via Discord ou WhatsApp",

      ],
      link:"https://pay.hotmart.com/D99892524U?off=czdpgkvw",
      isPopular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gaming-gradient">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="neon-text">Planos</span> de Acesso
        </h2>
        <p className="section-subheading text-center">
          Escolha o melhor plano para suas necessidades
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 bg-gaming-darker p-6 rounded-lg text-center">
          <h3 className="font-gaming font-bold text-2xl mb-4">
            Garantias e Segurança
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-xl">
            <div className="flex items-center justify-center">
              <CircleCheck className="h-5 w-5 text-neon mr-2" />
              <span>Atualizações constantes</span>
            </div>
            <div className="flex items-center justify-center">
              <CircleCheck className="h-5 w-5 text-neon mr-2" />
              <span>100% funcional após updates do CS2</span>
            </div>
            <div className="flex items-center justify-center">
              <CircleCheck className="h-5 w-5 text-neon mr-2" />
              <span>Garantia de reembolso de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
