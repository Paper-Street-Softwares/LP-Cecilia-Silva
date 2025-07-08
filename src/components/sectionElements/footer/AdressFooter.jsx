import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { MapPin } from "lucide-react";

function AdressFooter() {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <div>
          <MapPin />
        </div>
        <p>{content.texts.infos.adress}</p>
      </div>
    </MotionDivDownToUp>
  );
}

export default AdressFooter;
