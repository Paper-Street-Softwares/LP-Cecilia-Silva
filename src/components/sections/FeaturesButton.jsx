import { useState } from "react";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import content from "../../content/content";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import SectionArea from "../sectionElements/SectionArea";
import ServiceDetailCard from "../cards/ServiceDetailCard";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureImgOnBgCardButton from "../cards/FeatureImgOnBgCardButton";

export default function FeaturesButton({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  // Definir classes de cor para SectionArea
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-transparent",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea
        id={"service"}
        className={`py-[40px] tablet1:py-[64px] desktop1:py-[96px] desktop1:pb-[0px] ${bgClass}`}
      >
        <SectionHeader
          className={`text-center ${textClass}`}
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          titleColorSet={textClass}
          subtitleColorSet={textClass}
        />
        <SectionWrapper>
          <div className="flex flex-wrap justify-center desktop1:justify-evenly w-full gap-[36px] tablet1:gap-[24px] desktop1:w-[90%]">
            {[1, 2, 3].map((i) => {
              const card = content.texts.features[`card${i}`];
              return (
                <FeatureImgOnBgCardButton
                  key={i}
                  bgImg={card.img}
                  title={card.title}
                  description={card.subtitle}
                  buttonLabel={card.buttonLabel}
                  animation
                  onClick={() =>
                    onClick(
                      card.title,
                      <div>
                        <ServiceDetailCard
                          img={card.img}
                          description={card.description}
                          buttonIcon={card.icon}
                          buttonLabel={card.buttonLabelModal}
                          buttonLink={content.texts.links.ctaWhatsapp}
                          bgPosition="bg-top"
                        />
                      </div>
                    )
                  }
                  colorMode={colorMode}
                />
              );
            })}
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className={`font-secondFont ${bgClass} ${textClass}`}
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "30vw" }}
        breakpoints={{
          "1440px": "25vw",
          "1024px": "35vw",
          "768px": "50vw",
          "640px": "60vw",
          "639px": "80vw",
          "425px": "90vw",
        }}
      >
        <div className={textClass}>{modalSubtitle}</div>
        <div className={`m-0 ${textClass}`}>{modalContent}</div>
      </Dialog>
    </>
  );
}
