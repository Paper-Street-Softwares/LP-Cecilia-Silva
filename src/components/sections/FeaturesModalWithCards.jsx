import "primeicons/primeicons.css";
import content from "../../content/content";
import ServicesModal from "./ServicesModal";
import "primereact/resources/primereact.min.css";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeaturesModalWithCards({ colorMode }) {
  // Classes de tema
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-bgSectionDark",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;
  return (
    <SectionArea id="service" className={`${bgClass}`}>
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />
      <SectionWrapper>
        <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
          <div className="col1 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className="tablet1:mb-[26px] desktop1:mb-0 desktop2:mb-[46px]"
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
            <div
              className="hidden desktop1:h-[730px] desktop2:h-[770px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            ></div>
          </MotionDivDownToUp>
          <div className="col3 desktop1:w-[28%] flex flex-col items-center">
            <MotionDivDownToUp className=" flex items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className="tablet1:mb-[26px] desktop1:mb-0 desktop2:mb-[46px]"
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp className=" flex flex-col items-center w-full tablet1:w-[290px] desktop1:w-[250px] ">
              <IconFeatureCard
                icon={content.texts.features.card4.icon}
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
                colorMode={colorMode}
              >
                <ServicesModal />
              </IconFeatureCard>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
