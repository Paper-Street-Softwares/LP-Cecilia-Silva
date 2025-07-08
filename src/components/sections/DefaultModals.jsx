import "primeicons/primeicons.css";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import content from "../../content/content";
import "primereact/resources/primereact.min.css";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function DefaultModals({ modal = "true", colorMode }) {
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

  const bgClasses = {
    ddark: "bg-bgSectionOpacityDark",
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
    <>
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
            <div className="flex flex-wrap items-start justify-center tablet1:justify-evenly w-full gap-4">
              <div className="col3  desktop1:w-[28%] gap-4 flex flex-col justify-center items-center">
                {" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card1.icon}
                    title={content.texts.features.card1.title}
                    paragraph={content.texts.features.card1.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card1.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card1.title,
                          content.texts.features.card1.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={<FaWhatsapp size={24} />}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card3.icon}
                    title={content.texts.features.card3.title}
                    paragraph={content.texts.features.card3.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card3.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card3.title,
                          content.texts.features.card3.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={<FaWhatsapp size={24} />}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card5.icon}
                    title={content.texts.features.card5.title}
                    paragraph={content.texts.features.card5.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card5.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card5.title,
                          content.texts.features.card5.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={<FaWhatsapp size={24} />}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
              </div>

              <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
                <div
                  className="hidden h-[900px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
                  style={{
                    backgroundImage: `url(${content.texts.features.imgFeatures})`,
                  }}
                ></div>
              </MotionDivDownToUp>

              <div className="col3 desktop1:w-[28%] gap-4 flex flex-col justify-center items-center">
                {" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card4.icon}
                    title={content.texts.features.card4.title}
                    paragraph={content.texts.features.card4.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      size="small"
                      colorMode={colorMode}
                      label={content.texts.features.card4.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card4.title,
                          content.texts.features.card4.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={<FaWhatsapp size={24} />}
                                colorMode={colorMode}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card2.icon}
                    title={content.texts.features.card2.title}
                    paragraph={content.texts.features.card2.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card2.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card2.title,
                          content.texts.features.card2.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={<FaWhatsapp size={24} />}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card6.icon}
                    title={content.texts.features.card6.title}
                    paragraph={content.texts.features.card6.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card6.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card6.title,
                          content.texts.features.card6.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={<FaWhatsapp size={24} />}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        <h3>{modalSubtitle}</h3>
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </>
  );
}
