import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton"
import content from "../../../content/content";

function XFooter() {
  return (
    <MotionDivDownToUp>
      {" "}
      <a
        href={content.texts.links.x}
        target="_blank"
        aria-label="Link para o Facebook"
      >
        <IconButton
          ariaLabel="Botão para o Facebook"
          icon={
            <svg
              viewBox="0 0 21.573 19.5"
              version="1.1"
              id="svg4"
              width="20"
              height="20"
            >
              <defs id="defs8" />
              <path
                d="m 16.998462,0 h 3.308 l -7.227,8.26 8.502,11.24 h -6.657 l -5.2139994,-6.817 -5.966,6.817 H 0.43446256 L 8.1644626,10.665 0.00846256,0 H 6.8344626 l 4.7129994,6.231 z m -1.161,17.52 h 1.833 L 5.8384626,1.876 h -1.967 z"
                id="path2"
              />
            </svg>
          }
        />
      </a>
    </MotionDivDownToUp>
  );
}

export default XFooter;
