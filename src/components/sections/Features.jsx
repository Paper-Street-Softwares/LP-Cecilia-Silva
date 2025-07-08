import "../../index.css";
import "primeicons/primeicons.css";
import DefaultModals from "./DefaultModals";
import FeaturesButton from "./FeaturesButton";
import Features6cards from "./Features6cards";
import "primereact/resources/primereact.min.css";
import FeaturesWithIcons from "./FeaturesWithIcons";
import FeaturesParagraphs from "./FeaturesParagraphs";
import FeaturesModalWithCards from "./FeaturesModalWithCards";

export default function Features({
  colorMode,
  modalWithCards,
  sixCards,
  paragraphs,
  button,
  paragraphsModal,
  defaultFeature,
}) {
  return (
    <>
      {modalWithCards && <FeaturesModalWithCards colorMode={colorMode} />}
      {sixCards && <Features6cards colorMode={colorMode} />}
      {paragraphs && <FeaturesParagraphs colorMode={colorMode} />}
      {button && <FeaturesButton colorMode={colorMode} />}
      {paragraphsModal && <DefaultModals colorMode={colorMode} />}
      {defaultFeature && <FeaturesWithIcons colorMode={colorMode} />}
    </>
  );
}
