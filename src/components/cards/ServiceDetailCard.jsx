/* eslint-disable react/prop-types */
import Button from "../interactives/Button";

export default function ServiceDetailCard(props) {
  const {
    img,
    subtitle,
    description,
    buttonLabel,
    buttonIcon,
    buttonLink,
    bgPosition,
  } = props;

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <div className="w-full">
        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className={`w-[100%] h-[250px] phone2:h-[300px] phone3:h-[400px] desktop1:h-[400px] desktop2:min-h-[500px] bg-no-repeat bg-cover ${bgPosition}`}
        />
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[12px]">
          <h1 className="font-bold text-paragraph5 text-secondary opacity-70">
            {subtitle}
          </h1>
          <p className="text-paragraph3">{description}</p>
        </div>
        <div className="">
          <Button
            label={buttonLabel}
            icon={buttonIcon}
            buttonLink={buttonLink}
            animation={false}
          />
        </div>
      </div>
    </div>
  );
}
