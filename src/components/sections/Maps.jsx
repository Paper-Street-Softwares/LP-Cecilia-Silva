import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import WhatsappForm from "../interactives/WhatsappForm";

export default function Maps({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // Classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea className={`${bgClass}`}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-start">
        <MotionDivDownToUp className="flex flex-col justify-center w-full">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.maps.minitag}
            sectionHeaderTitle={content.texts.maps.title}
            sectionHeaderSubtitle={content.texts.maps.subtitle}
            color="dark"
            type=""
            titleColorSet={titleColor}
            subtitleColorSet={titleColor}
          />
          <div className="relative w-full h-auto bg-no-repeat bg-cover shadow-custom-opacity shadow-shadowMaps/50 desktop1:bg-center tablet1:w-full rounded-xl">
            <div className="opacity-90">
              <iframe
                src={content.texts.maps.embedsrc}
                width="100%"
                height=""
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px] h-[350px] desktop1:h-[420px]"
              />
            </div>
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
