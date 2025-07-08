import SectionArea from "../SectionArea";
import SectionWrapper from "../SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../../content/content";
function SocialPrint() {
  return (
    <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center ">
      <img
        src={content.texts.about.aboutSocial.img.img}
        alt={content.texts.about.aboutSocial.img.alt}
        className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
      />
    </MotionDivDownToUp>
  );
}

export default SocialPrint;
