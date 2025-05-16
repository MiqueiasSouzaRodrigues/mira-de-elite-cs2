
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Posso ser banido usando esse bot?",
      answer:
        "Nosso bot utiliza tecnologia avançada para evitar detecção. Desenvolvemos métodos exclusivos que contornam os sistemas anti-cheat. No entanto, recomendamos sempre jogar com configurações realistas para minimizar qualquer risco.",
    },
    {
      question: "Funciona com FACEIT ou só matchmaking?",
      answer:
        "O bot funciona perfeitamente no matchmaking oficial da Valve. Para FACEIT, oferecemos uma versão especial com segurança reforçada disponível nos planos Mensal e Vitalício. Essa versão possui limitações em algumas funcionalidades para garantir maior segurança.",
    },
    {
      question: "Posso usar com Windows 11?",
      answer:
        "Sim, nosso software é totalmente compatível com Windows 10 e Windows 11. Também funciona em versões anteriores como Windows 8 e 7, mas recomendamos sistemas operacionais atualizados para melhor desempenho.",
    },
    {
      question: "Como recebo o bot após a compra?",
      answer:
        "Após a confirmação do pagamento, você receberá imediatamente um email com instruções de download e ativação. Nosso suporte também entrará em contato via WhatsApp para ajudar na instalação e configuração inicial.",
    },
    {
      question: "O que acontece quando o CS2 é atualizado?",
      answer:
        "Sempre que há uma atualização do CS2, nossa equipe trabalha rapidamente para garantir compatibilidade. Clientes ativos recebem atualizações gratuitas do bot, geralmente em menos de 24 horas após updates do jogo.",
    },
    {
      question: "Posso transferir o bot para outra conta?",
      answer:
        "Sim. Os planos Mensal e Vitalício permitem a transferência do bot para outra conta Steam sem custo adicional. O plano de teste não oferece essa opção.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gaming-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <HelpCircle className="h-8 w-8 text-neon mr-2" />
          <h2 className="section-heading">
            Perguntas <span className="neon-text">Frequentes</span>
          </h2>
        </div>
        <p className="section-subheading text-center">
          Tire suas dúvidas sobre nosso bot de CS2
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gaming-darker rounded-lg overflow-hidden border border-gray-800 text-xl"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-gaming hover:no-underline text-white hover:text-neon text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-300 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-gaming text-2xl mb-4">
            Ainda tem dúvidas? Fale diretamente com nosso suporte
          </h3>
          <Button
            size="lg"
            variant="outline"
            className="text-neon border-neon hover:bg-neon hover:bg-opacity 10 gap-2 text-xl"
          >
            <WhatsappIcon />
            Tirar Dúvidas com Suporte
          </Button>
        </div>
      </div>
    </section>
  );
};

const WhatsappIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
  </svg>
);

export default FaqSection;
