import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeaturesWithIcons({ colorMode }) {
  // Define background and text colors based on colorMode
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
    <SectionArea id="service" className={`${bgClass} `} paddingbot={true}>
      <SectionHeader
        className={`text-center ${textClass}`}
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
        
      />
      <SectionWrapper>
        <div className="flex desktop1:mt-[40px] flex-col items-center w-full tablet1:flex-row tablet1:justify-between desktop1:gap-x-0 desktop1:px-0">
          <div className="col1 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card1.icon}
                title={content.texts.features.card1.title}
                paragraph={content.texts.features.card1.subtitle}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card2.icon}
                title={content.texts.features.card2.title}
                paragraph={content.texts.features.card2.subtitle}
                className={textClass}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>

          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[35%]">
            <div
              className="hidden h-[640px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
              style={{
                backgroundImage: `url(${content.texts.features.imgFeatures})`,
              }}
            ></div>
          </MotionDivDownToUp>

          <div className="col3 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card3.icon}
                title={content.texts.features.card3.title}
                paragraph={content.texts.features.card3.subtitle}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconFeatureCard
                icon={content.texts.features.card4.icon}
                title={content.texts.features.card4.title}
                paragraph={content.texts.features.card4.subtitle}
                className={textClass}
                colorMode={colorMode}
              />
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
