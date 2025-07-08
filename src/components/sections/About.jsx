import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import content from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../assets/imgs/about/imgGaleria1.webp";
import img2 from "../../assets/imgs/about/imgGaleria2.webp";
import img3 from "../../assets/imgs/about/imgGaleria3.webp";

export default function About({
  modal = true,
  showGallery = false,
  colorMode,
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
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor = colorMode === "light" ? "text-black/80" : "text-white";

  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
  ];

  return (
    <SectionArea
      id="about"
      className={`${bgClass} transition-colors duration-1000`}
    >
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          <img
            src={content.texts.about.imagem.img}
            alt={content.texts.about.imagem.alt}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/30"
          />
        </MotionDivDownToUp>
        {/* <MotionDivDownToUp className=" w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <div className="shadow-custom-opacity shadow-secondary/25 relative bg-center bg-no-repeat bg-cover h-[350px] w-[90%] tablet1:w-full tablet1:h-auto desktop1:h-[467px] rounded-xl">
            <ImageGallery
              items={images}
              showNav={false} // Ativando a navegação
              showFullscreenButton={false} // Desativando botão de tela cheia
              useBrowserFullscreen={false} // Desativando o uso de tela cheia do navegador
              showBullets={true}
              showThumbnails={false}
              additionalClass="custom-gallery"
              autoPlay={true}
            />
            <style>
              {`
                    .custom-gallery .image-gallery-slide img {
                      height: 350px; 
                      width: 100%;
                      object-fit: cover;
                      border-radius: 10px;
                    }

                     @media (min-width: 640px) and (max-width: 1023px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 740px;
                        }
                      }

                      @media (min-width: 1024px) {
                        .custom-gallery .image-gallery-slide img {
                          height: 470px;
                        }
                      }


                    .custom-gallery .image-gallery-thumbnails img {
                      height: 60px;  
                      width: 100px;  
                      object-fit: cover; 
                    }
                  `}
            </style>
          </div>
        </MotionDivDownToUp> */}
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.about.miniTag}
            sectionHeaderTitle={content.texts.about.title}
            sectionHeaderSubtitle={content.texts.about.subtitle}
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <MotionDivDownToUp>
            {modal ? (
              <ParagraphWithFading colorMode={colorMode} />
            ) : (
              <ParagraphSemFading colorMode={colorMode} />
            )}
            {modal && <AboutModal colorMode={colorMode} />}
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
