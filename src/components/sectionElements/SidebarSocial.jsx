import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import "primeicons/primeicons.css";
import {
  HelpCircle,
  HomeIcon,
  ServerIcon,
  UserSearch,
  AlignJustify,
} from "lucide-react";
import { Link } from "react-scroll";
import content from "../../content/content";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";

export default function SidebarSocial({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="inset-0 z-10 flex">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-darker opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            colorMode
              ? scrolled
                ? "text-primary"
                : "text-primary"
              : "text-primary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />

        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className={`${
                colorMode
                  ? "bg-bgSectionDark"
                  : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark surface-section lg:hidden lg:static z-1 surface-border border-neutral-700"
              }`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6 ">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-auto h-auto p-[5px] "
                    />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className={`${
                        colorMode
                          ? "text-primary"
                          : "h-2rem w-2rem p-[5px] text-white"
                      }`}
                    ></Button>
                  </span>
                </div>
                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border border-primary" />
                  <ul className="p-3 m-0 list-none">
                    <li>
                      {submenuVisible && (
                        <ul
                          className={`${
                            colorMode
                              ? "text-primary"
                              : "p-0 m-0 -mt-[16px] overflow-hidden font-medium text-white"
                          } list-none text-paragraph3 font-mainFont`}
                        >
                          <li>
                            <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                              <HomeIcon />
                              <span className="ml-[8px] ">
                                <Link
                                  to="home"
                                  className="align-text-top cursor-pointer"
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  offset={-100}
                                  href="#"
                                >
                                  {content.texts.navbar.menuItems[0]}
                                </Link>
                              </span>
                              <Ripple />
                            </a>
                          </li>
                          <ul className="p-0 m-0 list-none">
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <UserSearch />
                                <span className="ml-[8px]">
                                  <Link
                                    to="service"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[1]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <ServerIcon />
                                <span className="ml-[8px]">
                                  <Link
                                    to="about"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-50}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[2]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>

                            <li>
                              <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                <HelpCircle />
                                <span className="ml-[8px]">
                                  <Link
                                    to="faq"
                                    className="align-text-top cursor-pointer"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    href="#"
                                  >
                                    {content.texts.navbar.menuItems[3]}
                                  </Link>
                                </span>
                                <Ripple />
                              </a>
                            </li>
                          </ul>
                        </ul>
                      )}
                    </li>

                    {/* Início Botões sociais */}

                    {/* <hr className="m-5 mx-3 mb-8 border-top-1 surface-border" />
                    <div className=" flex flex-col gap-[16px] w-full px-[2px]">
                      <ButtonWithIconNavbar
                        className="w-full"
                        link={content.texts.infos.instagramProfile}
                        label="Siga a gente no Instagram"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-instagram"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        }
                      />

                      <ButtonWithIconNavbar
                        className="w-full"
                        link={content.texts.infos.facebookProfile}
                        label="Siga a gente no Facebook"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-facebook"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        }
                      />

                      <ButtonWithIconNavbar
                        className="w-full"
                        link={content.texts.infos.linkedInProfile}
                        label="Siga a gente no Linkedin"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        }
                      />
                    </div> */}

                    {/* Fim Botões sociais */}

                    {/* Início Foto do About */}

                    {/* <a
                      v-ripple
                      className="bottom-0 left-0 flex items-center justify-center gap-2 p-3 m-3 transition-colors cursor-pointer phone2:absolute border-round text-700 hover:surface-100 transition-duration-150 p-ripple"
                    >
                      <img
                        src={content.texts.about.imagem.img}
                        alt={content.texts.about.imagem.alt}
                        className="w-[100%]"
                      />
                    </a> */}

                    {/* Início Foto do About */}
                  </ul>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
