import contentLp03 from "../../../content/contentLp03";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div>
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="w-full text-center font-mainFont py-[36px] opacity-70">
            <p>
              {contentLp03.footer.copyrightLine}
              <br />
              <br />
              {/* {contentLp03.footer.disclaimer} */}
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
