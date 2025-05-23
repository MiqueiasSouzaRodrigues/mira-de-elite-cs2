
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-gaming text-xl">
            <a href="#hero" className="text-gray-400 hover:text-neon transition-colors">
              Início
            </a>
            <a href="#benefits" className="text-gray-400 hover:text-neon transition-colors">
              Recursos
            </a>
            <a href="#demo" className="text-gray-400 hover:text-neon transition-colors">
              Demo
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-neon transition-colors">
              Preços
            </a>
            <a href="#faq" className="text-gray-400 hover:text-neon transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <a
  href="https://pay.hotmart.com/D99892524U?off=czdpgkvw"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:flex"
>
  <Button className="cta-button">COMPRAR AGORA</Button>
</a>


          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4 font-gaming text-center">
              <a 
                href="#hero" 
                className="text-gray-300 hover:text-neon py-2 text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#benefits" 
                className="text-gray-300 hover:text-neon py-2 text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#demo" 
                className="text-gray-300 hover:text-neon py-2 text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-neon py-2 text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preços
              </a>
              <a 
                href="#faq" 
                className="text-gray-300 hover:text-neon py-2 text-xl"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
<a
  href="https://pay.hotmart.com/D99892524U?off=czdpgkvw"
  target="_blank"
  rel="noopener noreferrer"
  className="mx-auto mt-2 w-fit"
  onClick={() => setMobileMenuOpen(false)}
>
  <Button className="cta-button w-full">COMPRAR AGORA</Button>
</a>

            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
