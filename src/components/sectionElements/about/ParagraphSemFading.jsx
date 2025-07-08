import Paragraphs from "../Paragraphs";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../../content/content";
export default function ParagraphSemFading() {
  return (
    <Paragraphs className="text-colorWhite text-opacity-80">
      {content.texts.about.paragraph}
    </Paragraphs>
  );
}
