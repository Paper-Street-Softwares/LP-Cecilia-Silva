import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function FeatureCardLP({ icon, title, description, className }) {
  return (
    <MotionDivDownToUp
      className={`bg-neutral-100 rounded-xl w-full flex tablet2:w-[45%] flex-col items-center desktop1:hover:scale-110 px-[18px] py-[32px] ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center  text-colorBlack">
        {icon}
      </div>
      <h1 className="h-auto leading-[28px] font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-colorBlack opacity-70 font-mainFont w-[90%]">
        {description}
      </p>
    </MotionDivDownToUp>
  );
}
