import content from "../../content/content";

export default function AboutFading({ colorMode = "default" }) {
  // Classes de tema
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const fadeClasses = {
    dark: "to-bgFixedDark",
    light: "to-bgFixedLight",
    default: "to-bgSectionDark",
  };

  const textClass = textClasses[colorMode] || textClasses.default;
  const fadeClass = fadeClasses[colorMode] || fadeClasses.default;

  return (
    <div className={`relative font-secondFont text-paragraph4 ${textClass}`}>
      {content.texts.about.paragraph}
      <div
        className={`bottom-0 absolute w-full h-[80px] bg-gradient-to-b from-transparent ${fadeClass}`}
      ></div>
    </div>
  );
}
