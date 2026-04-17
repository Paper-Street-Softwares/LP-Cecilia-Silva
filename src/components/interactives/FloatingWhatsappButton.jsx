import Modal from "../util/Modal";
import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import whatsappWebm from "../../assets/importAssets/whatsappGif.webp";
import { getWhatsappLink } from "../util/WhatsappLink"; // Importando a função

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const FloatingWhatsappButton = ({ buttonType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100); // O botão aparece após rolar 100px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (buttonType === "form") {
      setOpenModal(!openModal);
    } else {
      // Usando a função getWhatsappLink para determinar o link
      const link = getWhatsappLink();
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className={`${
        isVisible ? "flex animate-fade-in" : "hidden"
      } fixed bottom-2 right-3 z-20 items-center group`}
    >
      {/* Balão de Texto */}
      {!openModal && (
        <div className="relative px-4 py-2 mr-2 text-sm font-semibold text-gray-800 transition-opacity duration-300 bg-white rounded-lg shadow-lg opacity-100 pointer-events-none group-hover:opacity-100">
          Entre em contato
          {/* Triângulo do balão */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
        </div>
      )}

      <button className="p-2 focus:outline-none" onClick={handleClick}>
        {openModal ? null : (
          <img
            className="w-16 transition focus:outline-none hover:scale-110"
            src={whatsappWebm}
            alt="Floating Button"
          />
        )}
        {buttonType === "form" && (
          <Modal isOpen={openModal} setCloseModal={setOpenModal} />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsappButton;
