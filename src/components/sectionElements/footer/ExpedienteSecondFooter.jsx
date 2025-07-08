import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { CalendarCheck2 } from "lucide-react";
import content from "../../../content/content";


function ExpedienteSecondFooter() {
  return (
    <MotionDivDownToUp>
      <div className="flex full gap-x-[12px] items-center opacity-90">
        <div>
          <CalendarCheck2 />
        </div>
        <p>{content.texts.infos.footerexpedientesecond}</p>
      </div>
    </MotionDivDownToUp>
  );
}

export default ExpedienteSecondFooter;
