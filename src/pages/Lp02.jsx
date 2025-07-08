import BackToTopButton from "../components/interactives/BackToTopButton";
import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/lp02/AboutParalaxeLP";
import ContactLP from "../components/sections/lp02/ContactLP";
import CtaLP from "../components/sections/lp02/CtaLP";
import FeaturesLP from "../components/sections/lp02/FeaturesLP";
import FooterLP from "../components/sections/lp02/FooterLP";
import HeroLP from "../components/sections/lp02/HeroLP";
import WhyUs from "../components/sections/lp02/WhyUs";

import contentLp02 from "../content/contentLp02";

import { useEffect } from "react";

export default function Lp02() {
  useEffect(() => {
    document.title = contentLp02.infos.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", contentLp02.infos.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = contentLp02.infos.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute("content", contentLp02.infos.keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = contentLp02.infos.keywords;
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
