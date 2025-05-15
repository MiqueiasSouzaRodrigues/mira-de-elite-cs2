
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="/logo.png"
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
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#hero" className="text-gray-300 hover:text-neon">
              Início
            </a>
            <a href="#benefits" className="text-gray-300 hover:text-neon">
              Recursos
            </a>
            <a href="#demo" className="text-gray-300 hover:text-neon">
              Demo
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-neon">
              Preços
            </a>
            <a href="#faq" className="text-gray-300 hover:text-neon">
              FAQ
            </a>
          </nav>
          <Button className="cta-button hidden md:flex">COMPRAR AGORA</Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
