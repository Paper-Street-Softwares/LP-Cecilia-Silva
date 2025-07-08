import React from "react";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import XAbout from "../sectionElements/aboutInstagram/XAbout";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SocialPrint from "../sectionElements/aboutInstagram/SocialPrint";
import FacebookAbout from "../sectionElements/aboutInstagram/FacebookAbout";
import LinkedInAbout from "../sectionElements/aboutInstagram/LinkedInAbout";
import InstagramAbout from "../sectionElements/aboutInstagram/InstagramAbout";
import DefaultInstagram from "../sectionElements/aboutInstagram/DefaultInstagram";
import ParagraphsAboutSocial from "../sectionElements/aboutInstagram/ParagraphsAboutSocial";
import TikTokAbout from "../sectionElements/aboutInstagram/TiktokAbout";
import InstagramSecundaryAbout from "../sectionElements/aboutInstagram/InstagramSecundaryAbout";

export default function AboutInstagram({
  instagram,
  facebook,
  x,
  linkedin,
  tiktok,
  socialPrint,
  colorMode,
  instagramSecundary,
}) {
  // Definir classes de tema
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
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="about" className={`${bgClass}`} paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop1:justify-between ">
        {socialPrint ? (
          <SocialPrint colorMode={colorMode} />
        ) : (
          <DefaultInstagram colorMode={colorMode} />
        )}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              // className={`text-center ${textClass}`}
              className={`text-center`}
              miniTitle={content.texts.about.aboutSocial.miniTag}
              sectionHeaderTitle={content.texts.about.aboutSocial.title}
              sectionHeaderSubtitle={content.texts.about.aboutSocial.subtitle}
              type="article"
              titleColorSet={textClass}
              subtitleColorSet={textClass}
            />
          </MotionDivDownToUp>
          <ParagraphsAboutSocial colorMode={colorMode} />
          <div className="flex flex-col gap-4">
            {instagram && <InstagramAbout colorMode={colorMode} />}
            {facebook && <FacebookAbout colorMode={colorMode} />}
            {x && <XAbout colorMode={colorMode} />}
            {linkedin && <LinkedInAbout colorMode={colorMode} />}
            {tiktok && <TikTokAbout />}
            {instagramSecundary && <InstagramSecundaryAbout />}
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
