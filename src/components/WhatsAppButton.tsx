
import React from "react";
import { Button } from "@/components/ui/button";

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
    className="text-white"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
  </svg>
);

const WhatsAppButton: React.FC = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
      onClick={() => window.open("https://wa.me/5511912345678", "_blank")}
    >
      <WhatsappIcon />
    </Button>
  );
};

export default WhatsAppButton;
