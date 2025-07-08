import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lp03/AboutParalaxeLP";
import ContactLP from "../components/sections/lp03/ContactLP";
import CtaLP from "../components/sections/lp03/CtaLP";
import FeaturesLP from "../components/sections/lp03/FeaturesLP";
import FooterLP from "../components/sections/lp03/FooterLP";
import HeroLP from "../components/sections/lp03/HeroLP";
import WhyUs from "../components/sections/lp03/WhyUs";

import contentLp03 from "../content/contentLp03";

import { useEffect } from "react";

export default function Lp03() {
  useEffect(() => {
    document.title = contentLp03.infos.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", contentLp03.infos.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = contentLp03.infos.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", contentLp03.infos.keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = contentLp03.infos.keywords;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <ContactLP />
      <FooterLP />
      <LPFloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
