import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { FaWhatsapp } from "react-icons/fa";
import content from "../../../content/content";

const whatsappContactLink = `${content.texts.links.phoneTerciario}`;

function PhoneTerciario({ colorMode }) {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <FaWhatsapp size={24} color={colorMode ? "black" : "white"} />

        <a
          href={whatsappContactLink}
          target="_blank"
          className="hover:underline"
        >
          {content.texts.infos.phoneTerciario}
        </a>
      </div>
    </MotionDivDownToUp>
  );
}

export default PhoneTerciario;
