
import React from "react";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";

interface TestimonialProps {
  text: string;
  author: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, image }) => (
  <div className="bg-gaming-darker p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={author}
        className="w-12 h-12 rounded-full mr-4 border-2 border-neon"
      />
      <div>
        <p className="text-lg font-medium">{author}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-300 italic">"{text}"</p>
  </div>
);

const Star = () => (
  <svg
    className="w-4 h-4 text-yellow-300 fill-current"
    xmlns=""
    viewBox="0 0 24 24"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const DemoSection: React.FC = () => {
  const testimonials = [
    {
      text: "Subi do Prata para Global em 1 semana. Vale cada centavo.",
      author: "Rafael M.",
      image: "person1.jpg",
    },
    {
      text: "O melhor investimento que fiz. Agora sou respeitado em todas as partidas.",
      author: "Lucas S.",
      image: "person2.jpg",
    },
    {
      text: "O suporte é incrível e o bot é muito fácil de configurar.",
      author: "Gustavo R.",
      image: "person3.jpg",
    },
  ];

  return (
    <section
      id="demo"
      className="py-20 bg-gaming-gradient-dark"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          <span className="neon-text">Veja</span> em Ação
        </h2>
        <p className="section-subheading text-center">
          Resultados reais de quem já usa nosso bot
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-center mt-12">
          <div className="mb-6 lg:mb-0">
            <div className="rounded-lg overflow-hidden neon-border">
              <div className="relative pb-[56.25%] h-0">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/videoplayback (1).mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    />
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button size="lg" className="cta-button">
                Adquirir Acesso
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
