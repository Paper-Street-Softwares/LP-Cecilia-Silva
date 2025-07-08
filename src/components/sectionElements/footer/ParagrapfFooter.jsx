import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";


function ParagrapfFooter() {
  return (
    <MotionDivDownToUp>
      <p className="opacity-90">{content.texts.footer.footerText}</p>
    </MotionDivDownToUp>
  );
}

export default ParagrapfFooter;
