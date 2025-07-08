import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function CtaSecondary({ colorMode = "default" }) {
  const navigate = useNavigate();

  // Definir classes de tema
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
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea className={`${bgClass}`}>
        <SectionWrapper>
          <div className=" flex flex-col desktop1:flex-row justify-evenly">
            <div className=" desktop1:w-[45%] ">
              <SectionHeader
                colorMode="dark"
                className={`text-center desktop1:hidden ${textClass}`}
                sectionHeaderTitle={content.texts.ctaSecondary.title}
                titleColorSet={textClass}
                subtitleColorSet={textClass}
                miniTitleBgColor={false}
                type=""
              />
              <SectionHeader
                colorMode="dark"
                className={`text-center hidden desktop1:flex ${textClass}`}
                sectionHeaderTitle={content.texts.ctaSecondary.title}
                titleColorSet={textClass}
                subtitleColorSet={textClass}
                miniTitleBgColor={false}
                type="article"
              />
            </div>
            <div className=" desktop1:w-[45%] flex flex-col items-center justify-evenly">
              {" "}
              <FaWhatsapp size={54} className="text-bgSectionDark" />
              {content.texts.ctaSecondary.subtitleDireita}
              {content.texts.ctaSecondary.titleDireita}
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label={content.texts.ctaSecondary.ctaButtonText}
                animation
                icon={<FaWhatsapp size={24} color="white" />}
                color="bg-bgSectionDark"
                labelColor="text-white"
              />
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
