import React from "react";
import { Mail } from "lucide-react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";

function EmailFooter() {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <Mail />

        <p className="text-paragraph2">{content.texts.infos.email}</p>
      </div>
    </MotionDivDownToUp>
  );
}

export default EmailFooter;
