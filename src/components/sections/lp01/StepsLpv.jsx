import React, { useState } from "react";
import HowItWorksCard from "../../cards/HowItWorksCard";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import contentLp01 from "../../../content/contentLp01";
import Button from "../../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import content from "../../../content/content";

export default function StepsLpv() {
  return (
    <SectionArea className="bg-neutral-100" paddingtop={true}>
      <SectionWrapper className="flex flex-col gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <div className="w-[90%]">
          <SectionHeader
            className="justify-center hidden text-center desktop1:flex "
            miniTitle={contentLp01.steps.miniTag}
            sectionHeaderTitle={contentLp01.steps.title}
            sectionHeaderSubtitle={contentLp01.steps.subtitle}
            color=""
            type=""
            titleColorSet="text-colorBlack"
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={contentLp01.steps.miniTag}
            sectionHeaderTitle={contentLp01.steps.title}
            sectionHeaderSubtitle={contentLp01.steps.subtitle}
            color=""
            type=""
            titleColorSet="text-colorBlack"
          />

          <div className="flex flex-col desktop1:flex-row items-center  w-full justify-center gap-[32px] mt-[28px] desktop1:mt-0 ">
            <HowItWorksCard
              number={contentLp01.steps.cards.card1.stepNumber}
              title={contentLp01.steps.cards.card1.cardTitle}
              description={contentLp01.steps.cards.card1.cardDescription}
              animation
            />
            <HowItWorksCard
              number={contentLp01.steps.cards.card2.stepNumber}
              title={contentLp01.steps.cards.card2.cardTitle}
              description={contentLp01.steps.cards.card2.cardDescription}
              animation
            />
            <HowItWorksCard
              number={contentLp01.steps.cards.card3.stepNumber}
              title={contentLp01.steps.cards.card3.cardTitle}
              description={contentLp01.steps.cards.card3.cardDescription}
              animation
            />
          </div>
        </div>
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center desktop1:pt-12">
          <div className="">
            <Button
              aria-label={contentLp01.steps.cards.ariaLabel}
              label={contentLp01.steps.cards.buttonLabel}
              // onClick={() => navigate("/whatsapp")}
              buttonLink={content.texts.links.ctaWhatsapp}
              animation
              icon={<FaWhatsapp size={24} />}
              color="bg-bgSectionDark"
            />
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
