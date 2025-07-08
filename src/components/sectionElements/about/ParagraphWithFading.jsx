import Paragraphs from "../Paragraphs";
import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AboutFading from "../AboutFading";


export default function ParagraphWithFading({ colorMode }) {
  return (
    <Paragraphs className="text-white text-opacity-80">
      <AboutFading colorMode={colorMode} />
    </Paragraphs>
  );
}
