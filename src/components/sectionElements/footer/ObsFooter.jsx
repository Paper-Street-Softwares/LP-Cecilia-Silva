import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";



function ObsFooter() {
  return (
    <MotionDivDownToUp>
      {" "}
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clock"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>

        <p>{content.texts.infos.obsFooter}</p>
      </div>
    </MotionDivDownToUp>
  );
}

export default ObsFooter;
