import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TeamMember from "../cards/TeamMember";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Team() {
  return (
    <SectionArea className="quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.team.title}
        sectionHeaderSubtitle={content.texts.team.subtitle}
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <div className="flex flex-col gap-[20px] tablet1:flex-row tablet1:flex-wrap tablet1:justify-between">
            <TeamMember
              img={content.texts.team.members.member1.img.img}
              alt={content.texts.team.members.member1.img.alt}
              name={content.texts.team.members.member1.name}
              role={content.texts.team.members.member1.role}
              icon1={content.texts.team.members.member1.socialMedia.icon1}
              link1={content.texts.team.members.member1.socialMedia.link1}
              icon2={content.texts.team.members.member1.socialMedia.icon2}
              link2={content.texts.team.members.member1.socialMedia.link2}
              icon3={content.texts.team.members.member1.socialMedia.icon3}
              link3={content.texts.team.members.member1.socialMedia.link3}
            />
            <TeamMember
              img={content.texts.team.members.member2.img.img}
              alt={content.texts.team.members.member2.img.alt}
              name={content.texts.team.members.member2.name}
              role={content.texts.team.members.member2.role}
              icon1={content.texts.team.members.member2.socialMedia.icon1}
              link1={content.texts.team.members.member2.socialMedia.link1}
              icon2={content.texts.team.members.member2.socialMedia.icon2}
              link2={content.texts.team.members.member2.socialMedia.link2}
              icon3={content.texts.team.members.member2.socialMedia.icon3}
              link3={content.texts.team.members.member2.socialMedia.link3}
            />
            <TeamMember
              img={content.texts.team.members.member3.img.img}
              alt={content.texts.team.members.member3.img.alt}
              name={content.texts.team.members.member3.name}
              role={content.texts.team.members.member3.role}
              icon1={content.texts.team.members.member3.socialMedia.icon1}
              link1={content.texts.team.members.member3.socialMedia.link1}
              icon2={content.texts.team.members.member3.socialMedia.icon2}
              link2={content.texts.team.members.member3.socialMedia.link2}
              icon3={content.texts.team.members.member3.socialMedia.icon3}
              link3={content.texts.team.members.member3.socialMedia.link3}
            />
            <TeamMember
              img={content.texts.team.members.member4.img.img}
              alt={content.texts.team.members.member4.img.alt}
              name={content.texts.team.members.member4.name}
              role={content.texts.team.members.member4.role}
              icon1={content.texts.team.members.member4.socialMedia.icon1}
              link1={content.texts.team.members.member4.socialMedia.link1}
              icon2={content.texts.team.members.member4.socialMedia.icon2}
              link2={content.texts.team.members.member4.socialMedia.link2}
              icon3={content.texts.team.members.member4.socialMedia.icon3}
              link3={content.texts.team.members.member4.socialMedia.link3}
            />
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
