import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall } from "lucide-react";

const whatsappContactLink = `${content.texts.links.phoneSecundario}`;

function PhoneSecundario({ colorMode }) {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        {/* <PhoneCall size={24} color={colorMode ? "black" : "white"} /> */}
        <FaWhatsapp size={24} color={colorMode ? "black" : "white"} />

        <a
          href={whatsappContactLink}
          target="_blank"
          className="hover:underline"
        >
          {content.texts.infos.phoneSecundario}
        </a>
      </div>
    </MotionDivDownToUp>
  );
}

export default PhoneSecundario;
