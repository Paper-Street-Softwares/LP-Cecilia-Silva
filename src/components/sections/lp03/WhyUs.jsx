import contentLp03 from "../../../content/contentLp03";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp03.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentLp03.whyUs.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={contentLp03.whyUs.cards.card1.icon}
              title={contentLp03.whyUs.cards.card1.title}
              description={contentLp03.whyUs.cards.card1.description}
            />
            <FeatureCardLP
              icon={contentLp03.whyUs.cards.card2.icon}
              title={contentLp03.whyUs.cards.card2.title}
              description={contentLp03.whyUs.cards.card2.description}
            />
            <FeatureCardLP
              icon={contentLp03.whyUs.cards.card3.icon}
              title={contentLp03.whyUs.cards.card3.title}
              description={contentLp03.whyUs.cards.card3.description}
            />
            <FeatureCardLP
              icon={contentLp03.whyUs.cards.card4.icon}
              title={contentLp03.whyUs.cards.card4.title}
              description={contentLp03.whyUs.cards.card4.description}
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
