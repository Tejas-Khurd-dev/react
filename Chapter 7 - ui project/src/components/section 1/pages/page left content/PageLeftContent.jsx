import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const Page1LeftContent = () => {
  return (
    <div className="bg-white h-full w-1/3 mx-4 flex flex-col justify-between">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default Page1LeftContent;
