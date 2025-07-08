import SectionArea from "../SectionArea";
import SectionWrapper from "../SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../../content/content";
function DefaultInstagram() {
  return (
    <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
      <div
        style={{
          backgroundImage: `url(${content.texts.about.aboutSocial.img.imgSocial})`,
        }}
        className="relative bg-top bg-no-repeat bg-cover h-[450px] w-full tablet1:h-[800px] desktop1:h-[467px] rounded-xl shadow-custom-opacity shadow-secondary/25"
      ></div>
    </MotionDivDownToUp>
  );
}

export default DefaultInstagram;
