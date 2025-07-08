import { Link } from "react-scroll";
import content from "../../content/content";
import { useState, useEffect } from "react";
import IconButton from "../interactives/IconButton";
import Button from "../interactives/Button";
import { useNavigate } from "react-router-dom";

export default function ListGroupSocial({ colorMode = "default" }) {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define cores baseadas no modo atual
  const getTextColor = () => {
    if (colorMode === "light") return "text-black";
    if (colorMode === "dark") return "text-white";
    return "text-white"; // default
  };

  const getHoverTextColor = () => {
    if (colorMode === "light") return "hover:text-black";
    if (colorMode === "dark") return "hover:text-white";
    return "hover:text-white";
  };

  const getBorderColor = () => {
    if (colorMode === "light") return "bg-black";
    if (colorMode === "dark") return "bg-white";
    return "bg-white";
  };

  const textShadow =
    colorMode === "dark" || colorMode === "default"
      ? "[text-shadow:_2px_2px_3px_rgb(0_0_0_/_0%)]"
      : "";

  return (
    <ul
      className={`h-14 hidden desktop1:flex my-auto items-center justify-end tablet1:items-center desktop1:gap-8 desktop2:gap-8 w-auto font-normal text-paragraph3 font-secondFont ${getTextColor()}`}
    >
      {["home", "service", "about", "faq"].map((section, index) => (
        <li key={section} className="transition group h-[24px]">
          <Link
            to={section}
            className="relative font-semibold cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <span
              className={`h-[24px] inline-block ${getHoverTextColor()} ${textShadow}`}
            >
              {content.texts.navbar.menuItems[index]}
            </span>
            <div
              className={`absolute -bottom-2 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${getBorderColor()}`}
            />
          </Link>
        </li>
      ))}

      <li>
        <div className="flex gap-[10px] items-center">
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label="Contato"
            className=""
            textclassName="text-paragraph3"
            size="small"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 18 18"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            }
          />
        </div>
      </li>
    </ul>
  );
}
