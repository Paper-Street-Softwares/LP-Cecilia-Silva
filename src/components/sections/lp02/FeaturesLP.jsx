import contentLp02 from "../../../content/contentLp02";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp02.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentLp02.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentLp02.features.cards.card1.icon}
              title={contentLp02.features.cards.card1.title}
              description={contentLp02.features.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentLp02.features.cards.card2.icon}
              title={contentLp02.features.cards.card2.title}
              description={contentLp02.features.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentLp02.features.cards.card3.icon}
              title={contentLp02.features.cards.card3.title}
              description={contentLp02.features.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentLp02.features.cards.card4.icon}
              title={contentLp02.features.cards.card4.title}
              description={contentLp02.features.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
