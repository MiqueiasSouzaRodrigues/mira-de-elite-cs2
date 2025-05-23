
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface Notification {
  name: string;
  location: string;
  plan: string;
}

const PopupNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<Notification>({
    name: "Lucas",
    location: "SP",
    plan: "vitalício",
  });

  const notifications: Notification[] = [
    { name: "Lucas", location: "SP", plan: "vitalício" },
    { name: "Rafael", location: "RJ", plan: "mensal" },
    { name: "Ana", location: "MG", plan: "vitalício" },
    { name: "Gabriel", location: "PR", plan: "mensal" },
    { name: "Juliana", location: "RS", plan: "teste" },
  ];

  useEffect(() => {
    // First notification after 3 seconds
    const timeout = setTimeout(() => {
      showNotification();
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const showNotification = () => {
    setIsVisible(true);
    const randomNotification =
      notifications[Math.floor(Math.random() * notifications.length)];
    setCurrentNotification(randomNotification);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Show another notification after random interval (20-40 seconds)
      const nextTimeout = setTimeout(() => {
        showNotification();
      }, Math.random() * 20000 + 20000);
      
      return () => clearTimeout(nextTimeout);
    }, 5000);
  };

  return (
<div
  className={`fixed bottom-4 left-4 z-40 bg-gaming-darker border border-neon shadow-lg rounded-lg 
  p-4 sm:p-6 max-w-xs sm:max-w-sm 
  transform transition-all duration-300
  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`}
>

  <div className="flex items-center">
    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
    <p className="text-base">
      <span className="font-bold">{currentNotification.name}</span> de{" "}
      <span className="font-bold">{currentNotification.location}</span>{" "}
      acabou de adquirir o plano{" "}
      <span className="font-bold">{currentNotification.plan}</span>
      <button 
        className="ml-2 text-neon font-medium inline-flex items-center text-base"
        onClick={() => window.location.href = "#pricing"}
      >
        Ver planos <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </p>
  </div>
</div>
  );
};

export default PopupNotification;
