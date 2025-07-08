import "../styles/shapeDivs.css";
import Cta from "../components/sections/Cta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";
import TeamCards from "../components/sections/TeamCards";
import BlogPosts from "../components/sections/BlogPosts";
import CtaSecondary from "../components/sections/CtaSecondary";

export default function Index() {
  // Altere esta constante para: 'default', 'light' ou 'dark'
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} />

      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      {/* <BlogPosts /> */}
      <Features
        colorMode={colorMode}
        defaultFeature={false}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={true}
      />
      <About modal={true} showGallery={false} colorMode={colorMode} />
      <AboutInstagram
        colorMode={colorMode}
        instagram={true}
        socialPrint={true}
        facebook={true}
      />
      {/* <Cta colorMode={colorMode} /> */}
      <CtaSecondary />
      <Steps colorMode={colorMode} />
      {/* <Maps colorMode={colorMode} /> */}
      <Faq colorMode={colorMode} />
      <FooterSocial
        colorMode={colorMode}
        addresSecundario={false}
        phoneSecundario={false}
        phoneTerciario={false}
        expedientesecond={false}
        instagram={true}
        facebook={true}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
