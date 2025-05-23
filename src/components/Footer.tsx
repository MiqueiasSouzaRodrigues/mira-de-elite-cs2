
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/512x512.png"
                alt="CS2 Bot Logo"
                className="h-10 mr-2"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                  e.currentTarget.className = "h-10 w-10 mr-2";
                }}
              />
              <span className="font-gaming font-bold text-xl">
                <span className="text-white">CS2</span>{" "}
                <span className="text-neon">Pro</span>
              </span>
            </div>
            <p className="text-gray-400">
              A melhor solução para aprimorar sua gameplay em Counter-Strike 2.
              Software de alta qualidade com suporte em Português.
            </p>
          </div>

          <div className="md:text-center">
            <h3 className="font-gaming font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#hero" className="hover:text-neon">
                  Início
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-neon">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-neon">
                  Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-neon">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="font-gaming font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-neon">
                  suporte@cs2probot.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5562992087765" className="hover:text-neon">
                  WhatsApp: +55 (62) 99208-7765
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon">
                  Discord: cs2probot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon">
                  Telegram: @cs2probot
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} CS2 Pro Bot. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            <small>
              *Este produto não é aprovado ou afiliado à Valve Corporation ou ao
              FACEIT. Use por sua conta e risco.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
