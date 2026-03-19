import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../sectionElements/Navbar";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import SidebarSocial from "../sectionElements/SidebarSocial";
import ListGroupSocial from "../sectionElements/ListGroupSocial";

export default function NavbarSocial({ colorMode }) {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navbarBgWhite, setNavbarBgWhite] = useState(false);

  const sidebarRef = useRef(null);

  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    setScrolling(isScrolling);
    setNavbarBgWhite(isScrolling);
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon((prev) => !prev);
      setShowSidebarContent((prev) => !prev);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 940);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    setShowListGroup(window.innerWidth >= 768);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  const handleSidebarItemClick = () => {
    handleCloseSidebar();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getNavbarClasses = () => {
    if (colorMode === "light") {
      return scrolling
        ? "bg-bgSectionDark shadow-md"
        : "bg-bgSectionDark desktop1:bg-bgSectionDark";
    }
    if (colorMode === "dark") {
      return scrolling
        ? "bg-gradient-to-b from-black to-bgFixedDark shadow-lg border-b-[1px] border-primary"
        : "bg-gradient-to-b from-black to-transparent border-b-[1px] border-none";
    }
    // default
    return scrolling
      ? "bg-gradient-to-b from-black to-bgSectionDark bg-opacity-100 shadow-lg border-b-[1px] border-primary"
      : "bg-gradient-to-b from-black to-transparent border-b-[1px] border-none";
  };

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 w-full transition-colors duration-1000 ${getNavbarClasses()}`}
      >
        <Navbar>
          <ScrollLink
            to="home"
            className="cursor-pointer w-[400px]"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            href="#"
          >
            <img
              src={content.texts.navbar.logo.img}
              alt={content.texts.navbar.logo.alt}
              className={`bg-transparent ${
                scrolling ? " w-[50%]" : " my-[0px] w-[70%] phone3:w-[60%]"
              } transition-all duration-1000`}
            />
          </ScrollLink>

          <div className="flex items-center justify-between gap-[16px]">
            <div className="hidden tablet1:flex desktop1:hidden">
              <Button
                aria-label={content.texts.hero.ctaButtonAriaLabel}
                label={content.texts.navbar.ctaButtonTextResponsive}
                size="small"
                color={`bg-bgSectionLight`}
                labelColor={`text-black`}
                textclassName="text-paragraph3"
                icon={<FaWhatsapp className="text-black" />}
                colorMode={colorMode}
              />
            </div>
            <div className="flex items-center desktop1:hidden">
              <SidebarSocial colorMode={colorMode} />
            </div>
          </div>

          {showListGroup && <ListGroupSocial colorMode={colorMode} />}
        </Navbar>
      </div>
    </div>
  );
}
