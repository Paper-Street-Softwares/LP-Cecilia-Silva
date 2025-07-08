import React, { useState, useEffect, useRef } from "react";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import imgProfilePicture from "../../assets/favico/android-icon-192x192.png";
import "../../../src/index.css";
import { infos } from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

const whatsNumber = `${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}`;

export default function WhatsChat() {
  const [isVisible, setIsVisible] = useState(false); // Controla a visibilidade do chat
  const tooltipTextRef = useRef(null); // Referência para o texto da tooltip

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      // Torna o chat visível se o usuário rolar mais de 100px
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseChat = () => {
    // Oculta o chat e o exibe novamente após um curto intervalo
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 100); // Ajuste o tempo conforme necessário
  };

  return (
    <div>
      {isVisible && ( // Exibe o chat apenas se isVisible for true
        <FloatingWhatsApp
          className="custom-whatsapp-button"
          status="w-3"
          chatboxHeight="auto"
          phoneNumber={whatsNumber}
          notification={true}
          notificationDelay={2}
          notificationLoop={2}
          accountName={infos.name}
          avatar={imgProfilePicture}
          initialMessageByServer={infos.whatsChatDefaultMessage}
          initialMessageByClient={infos.whatsappDefaultMessage}
          statusMessage="Disponível"
          startChatText="Falar no whatsapp"
          tooltipText={
            <p ref={tooltipTextRef} className="_tooltip_181xn_903">
              WhatsApp
              <br />
            </p>
          }
          allowEsc={true}
          onClose={handleCloseChat} // Aciona ao fechar o chat
        />
      )}
    </div>
  );
}
