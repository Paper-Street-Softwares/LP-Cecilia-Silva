import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import Button from "../interactives/Button";

export default function Faq({ colorMode }) {
  const navigate = useNavigate();
  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea id="faq" className={`${bgClass}`}>
        <SectionHeader
          colorMode="dark"
          className="text-center"
          miniTitle={content.texts.faq.miniTag}
          sectionHeaderTitle={content.texts.faq.title}
          sectionHeaderSubtitle={content.texts.faq.subtitle}
          titleColorSet={titleColor}
          subtitleColorSet={titleColor}
        />
        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className="w-[90%] tablet1:w-[80%] desktop1:w-[80%] max-w-[860px] mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
              <AccordionExpandDefault />
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className={`text-center transition `}>
              <Button
                className="hoover:scale-0 desktop1:hover:scale-10 transition-all duration-300"
                color=""
                label={content.texts.faq.paragraph}
                colorMode={colorMode}
              />
            </Paragraphs>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
