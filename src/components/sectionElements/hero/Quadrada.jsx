import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import Button from "../../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import "../../../styles/shapeDivs.css";

export default function Quadrada({ appDownloadButtons, colorMode }) {
  // Definindo cores de fundo com base no tema
  const backgroundClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "from-bgSectionDark to-darker",
  };

  const bgGradient = backgroundClasses[colorMode] || backgroundClasses.default;
  const titleColor = colorMode === "light" ? "text-black" : "text-white";
  const subtitleColor = colorMode === "light" ? "text-black" : "text-white";
  const obsTextColor = colorMode === "light" ? "text-black" : "text-white";
  const descriptionColor = colorMode === "light" ? "text-black" : "text-white";

  return (
    <div
      className={`w-full bg-center bg-repeat font-mainFont bg-gradient-to-b ${bgGradient}`}
      id="home"
    >
      <div className="relative z-10 flex w-full items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[140px] phone2:h-[140px] phone3:h-[140px] tablet1:h-[150px] desktop3:h-[120px] " />{" "}
          <div className="flex flex-col-reverse gap-[40px] desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1215px] items-center pb-[64px]  desktop1:pt-[68px] desktop1:pb-[96px]">
            <div className="flex flex-col w-full desktop1:w-[50%] desktop1:mr-[20px]">
              {/* MiniTag preta */}
              <MotionDivDownToUp>
                <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4 text-labelButtons">
                  <p className="mb-[16px] bg-minititle text-paragraph2 rounded-md px-[16px] py-[6px] inline-block">
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp>

              <MotionDivDownToUp>
                <div
                  className={`flex justify-center desktop1:justify-start font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title6 ${titleColor}`}
                >
                  <h1>{content.texts.hero.title}</h1>
                </div>
              </MotionDivDownToUp>

              {/* Subtítulo */}
              <MotionDivDownToUp>
                <div
                  className={`flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5 ${subtitleColor}`}
                >
                  <p className="mb-[32px]">{content.texts.hero.subtitle}</p>
                </div>
              </MotionDivDownToUp>

              {/* Botão */}
              <div className="w-full phone2:w-full tablet2:w-auto">
                <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                  <Button
                    aria-label={content.texts.hero.ctaButtonAriaLabel}
                    label={content.texts.hero.ctaButtonText}
                    animation
                    className="w-[100%]"
                    icon={<FaWhatsapp size={24} />}
                    colorMode={colorMode}
                  />
                </div>

                {/* Observação */}
                <MotionDivDownToUp>
                  <div className="flex justify-center desktop1:justify-start">
                    <div className="flex flex-col items-center desktop1:flex-row text-white">
                      {content.texts.hero.obsHero.icon}

                      <p
                        className={`ml-[10px] text-center desktop1:text-start mt-[12px] desktop1:mt-0 ${obsTextColor}`}
                      >
                        {content.texts.hero.obsHero.text}
                      </p>
                    </div>
                  </div>
                </MotionDivDownToUp>

                {/* Botões de download */}
                {appDownloadButtons && (
                  <MotionDivDownToUp>
                    <div className="flex flex-col items-center desktop1:items-start">
                      <p
                        className={`mb-[20px] mt-[60px] text-center ${descriptionColor}`}
                      >
                        {content.texts.hero.app.description}
                      </p>
                      <div className="flex items-start gap-[20px]">
                        <a
                          href={content.texts.hero.app.imgs.appStore.link}
                          target="_blank"
                          className="transition hover:scale-110 invert"
                        >
                          <img
                            src={content.texts.hero.app.imgs.appStore.img}
                            alt={content.texts.hero.app.imgs.appStore.alt}
                          />
                        </a>
                        <a
                          href={content.texts.hero.app.imgs.playStore.link}
                          target="_blank"
                          className="transition hover:scale-110 invert"
                        >
                          <img
                            src={content.texts.hero.app.imgs.playStore.img}
                            alt={content.texts.hero.app.imgs.playStore.alt}
                          />
                        </a>
                      </div>
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>
            </div>

            {/* Imagem principal */}
            <div className="flex justify-center w-full tablet1:w-[450px] desktop1:w-[42%] desktop2:w-[42.8%]">
              <MotionDivDownToUp className="relative flex justify-center w-full">
                <div
                  className="bg-top mt-[20px] desktop1:mt-0 rounded-xl w-full phone1:h-[300px] phone1:max-w-[300px] phone2:h-[355px] phone2:max-w-[355px] phone3:h-[405px] phone3:max-w-[405px] tablet1:h-[576px] tablet1:min-w-[576px] tablet2:h-[690px] tablet2:min-w-[690px] desktop1:h-[400px] desktop1:min-w-[200px] desktop2:h-[400px] desktop2:min-w-[400px] bg-cover bg-no-repeat shadow-custom-opacity shadow-shadowAbouts/0"
                  style={{
                    backgroundImage: `url(${content.texts.hero.heroDefaultImage})`,
                  }}
                />
              </MotionDivDownToUp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
