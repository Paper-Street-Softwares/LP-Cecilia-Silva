import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../../cards/IconButtonFeatureCard";
import Button from "../../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import contentLp01 from "../../../content/contentLp01";
import content from "../../../content/content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function FeatureWithModalsLp({ modals }) {
  const navigate = useNavigate();
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
  return (
    <div>
      <SectionArea id="service" className="squares">
        <SectionHeader
          className="text-center"
          miniTitle={contentLp01.features.sectionHeader.miniTag}
          sectionHeaderTitle={contentLp01.features.sectionHeader.title}
          color=""
          titleColorSet="text-black"
        />

        <SectionWrapper>
          <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
            <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-bgSectionLight rounded-xl">
                <IconButtonFeatureCard
                  icon={contentLp01.features.cards.card1.icon}
                  title={contentLp01.features.cards.card1.title}
                  paragraph={contentLp01.features.cards.card1.description}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button
                  size="small"
                  label="Confira as doenças"
                  onClick={() =>
                    onClick(
                      contentLp01.features.cards.card1.title,
                      contentLp01.features.cards.card1.modal1.subtitle,
                      <>
                        <p className="mb-[20px] pt-6">
                          Quer saber mais sobre nós? Clique abaixo 👇
                        </p>
                        <div>
                          <Button
                            aria-label={content.texts.about.ctaButtonAriaLabel}
                            label={content.texts.about.ctaButtonText}
                            onClick={() => navigate("/whatsapp")}
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
              </MotionDivDownToUp>
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-bgSectionLight rounded-xl">
                <IconButtonFeatureCard
                  icon={contentLp01.features.cards.card2.icon}
                  title={contentLp01.features.cards.card2.title}
                  paragraph={contentLp01.features.cards.card2.description}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-bgSectionLight rounded-xl">
                <IconButtonFeatureCard
                  icon={contentLp01.features.cards.card3.icon}
                  title={contentLp01.features.cards.card3.title}
                  paragraph={contentLp01.features.cards.card3.description}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-bgSectionLight rounded-xl">
                <IconButtonFeatureCard
                  icon={contentLp01.features.cards.card4.icon}
                  title={contentLp01.features.cards.card4.title}
                  paragraph={contentLp01.features.cards.card4.description}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
              </MotionDivDownToUp>{" "}
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
    </div>
  );
}
