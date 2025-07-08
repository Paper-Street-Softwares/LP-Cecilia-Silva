export default function TeamMember(props) {
  const { img, alt, name, role, icon1, link1, icon2, link2, icon3, link3 } =
    props;

  return (
    <div className="flex flex-col items-center justify-center p-[20px] w-full tablet1:w-[45%] desktop1:w-[22%]">
      <img
        alt={alt}
        src={img}
        className="w-[215px] h-[215px] desktop1:w-full desktop1:h-full mb-[24px] bg-colorBlack rounded-full"
      ></img>
      <h1 className="mb-[8px] text-title1 font-bold">{name}</h1>
      <div className="desktop2:h-[48px] desktop2:mb-[20px] flex justify-center">
        <p className="text-center text-paragraphLight desktop2:mb-[20px] tablet1:w-[80%]">
          {role}
        </p>
      </div>
      <div className="flex gap-[16px] mt-[12px] desktop2:mt-[0px]">
        <a
          href={link1}
          target="_blank"
          className="hover:border-solid border-[1px] border-quinary hover:border-[1px] hover:border-black p-[6px] rounded-full transition hover:text-secondary"
        >
          {icon1}
        </a>
        <a
          href={link2}
          target="_blank"
          className="hover:border-solid border-[1px] border-quinary hover:border-[1px] hover:border-black p-[6px] rounded-full transition hover:text-secondary"
        >
          {icon2}
        </a>
        <a
          href={link3}
          target="_blank"
          className="hover:border-solid border-[1px] border-quinary hover:border-[1px] hover:border-black p-[6px] rounded-full transition hover:text-secondary"
        >
          {icon3}
        </a>
      </div>
    </div>
  );
}
