import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { Link } from "react-scroll";

function LinksNavegationFooter() {
  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          <div className="h-[36px] hover:underline">
            <Link
              to="home"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              href="#"
            >
              <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                {content.texts.navbar.menuItems[0]}
              </span>
            </Link>
          </div>
          <div className="h-[36px] hover:underline">
            <Link
              to="about"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              href="#"
            >
              <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                {content.texts.navbar.menuItems[2]}
              </span>
            </Link>
          </div>
        </div>
        <div className=" w-[46%] flex flex-col gap-y-[16px]">
          <div className="h-[36px] hover:underline">
            <Link
              to="service"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              href="#"
            >
              <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                {content.texts.navbar.menuItems[1]}
              </span>
            </Link>
          </div>
          <div className="h-[36px] hover:underline">
            <Link
              to="faq"
              className="cursor-pointer"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              href="#"
            >
              <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                {content.texts.navbar.menuItems[3]}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default LinksNavegationFooter;
