import ImagesGallery2Slides from "../components/interactives/ImagesGallery2Slides";
import imgAtendimentoPhone from "../../assets/banners/bannersCarousel/atendimento-phone.webp";
import imgEntregasPhone from "../../assets/banners/bannersCarousel/entregas-phone.webp";
import MotionDivLeftToRight from "../components/animation/MotionDivLeftToRight";

export default function PhoneBannersCarousel() {
  return (
    <MotionDivLeftToRight>
      <div className="full py-[26px] phone3:py-[48px] flex justify-center">
        <div className="w-[88%] max-w-[1110px]">
          <ImagesGallery2Slides
            slide1={imgAtendimentoPhone}
            slide2={imgEntregasPhone}
          />
        </div>
      </div>
    </MotionDivLeftToRight>
  );
}
