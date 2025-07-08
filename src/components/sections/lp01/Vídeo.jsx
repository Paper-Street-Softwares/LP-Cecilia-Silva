import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";

export default function Vídeo({}) {
  return (
    <>
      <SectionArea className="bg-neutral-100">
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.video.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentLp01.video.sectionHeader.title}
            sectionHeaderSubtitle={contentLp01.video.sectionHeader.subtitle}
            color=""
            titleColorSet="text-secondary"
          />
          <div className="w-full desktop1:w-[70%] overflow-hidden aspect-video rounded-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GtR1VlvX6ZI?si=2dongXZ0xwgw5uSb"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          ``
        </SectionWrapper>
      </SectionArea>
    </>
  );
}

{
  /* <div className="pt-12 ">
<iframe
  class="rounded-xl"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/GtR1VlvX6ZI?si=2dongXZ0xwgw5uSb"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>
</div> */
}
