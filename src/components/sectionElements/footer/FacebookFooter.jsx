import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton";
import content from "../../../content/content";

function FacebookFooter() {
  return (
    <MotionDivDownToUp>
      {" "}
      <a
        href={content.texts.links.facebook}
        target="_blank"
        aria-label="Link para o Facebook"
      >
        <IconButton
          ariaLabel="Botão para o Facebook"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="transparent"
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
      </a>
    </MotionDivDownToUp>
  );
}

export default FacebookFooter;
