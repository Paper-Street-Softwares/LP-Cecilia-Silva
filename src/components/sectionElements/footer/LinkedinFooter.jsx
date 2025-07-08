import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton"
import content from "../../../content/content";


import React from "react";

function LinkedinFooter() {
  return (
    <MotionDivDownToUp>
      {" "}
      <a href={content.texts.links.linkedin} target="_blank">
        <IconButton
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill=""
              stroke=""
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
      </a>
    </MotionDivDownToUp>
  );
}

export default LinkedinFooter;
