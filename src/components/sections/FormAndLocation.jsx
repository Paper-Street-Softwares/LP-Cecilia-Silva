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

export default function Steps() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="bg-bgSectionDark " paddingtop={false}>
      {/* <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color=""
      /> */}
      {/* <SectionShapeDiv shapeDivArrow shapeColor="text-colorWhite"/> */}
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between desktop1:items-start">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            // miniTitle={content.texts.formandlocation.miniTag}
            sectionHeaderTitle={content.texts.contactForm.title}
            sectionHeaderSubtitle={content.texts.contactForm.subtitle}
            color=""
            type=""
            miniTitleBgColor={false}
          />
          <WhatsappForm />
        </MotionDivDownToUp>
        {/* //centralizar textos dos dois sectionheaders */}

        <MotionDivDownToUp className="w-full flex-col desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            // miniTitle={content.texts.formandlocation.miniTag}
            sectionHeaderTitle={content.texts.maps.title}
            sectionHeaderSubtitle={content.texts.maps.subtitle}
            color=""
            type=""
            miniTitleBgColor={false}
          />
          <div className="relative w-full h-auto bg-no-repeat bg-cover shadow-custom-opacity shadow-darker/25 desktop1:bg-center tablet1:w-full rounded-xl">
            {/* <p className="font-bold mt-[32px] mb-[16px]">
              Nos encontre no Google Maps
            </p> */}
            <div className="opacity-90">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31496.286939401998!2d-49.4966658!3d-16.6489271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e67f49e245171%3A0xe8acb6a48ae5cc5e!2sM%C3%A1rcio%20Assis%20Advogados!5e1!3m2!1spt-BR!2sbr!4v1733161783119!5m2!1spt-BR!2sbr"
                width="100%"
                height=""
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px] h-[350px] desktop1:h-[420px]"
              />
            </div>
            {/* <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img> */}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
