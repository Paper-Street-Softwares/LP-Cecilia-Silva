import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

function PhoneFooter({ colorMode }) {
  // Define a cor do ícone com base no modo
  let iconColor = "";

  switch (colorMode) {
    case "light":
      iconColor = "text-black";
      break;
    case "dark":
      iconColor = "text-white";
      break;
    default:
      iconColor = "text-white";
      break;
  }

  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <FaWhatsapp size={24} className={iconColor} />
        <a
          href={whatsappContactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {content.texts.infos.phone}
        </a>
      </div>
    </MotionDivDownToUp>
  );
}

export default PhoneFooter;
