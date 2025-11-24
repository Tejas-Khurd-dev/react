import RightCard from "./RightCard";

const Page1RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full w-2/3 mx-4 flex flex-nowrap gap-5 overflow-x-auto justify-between p-6 rounded-4xl "
    >
      {props.users.map(function (ele, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={ele.img}
            tag={ele.tag}
            intro={ele.intro}
            color={ele.color}
          />
        );
      })}
    </div>
  );
};

export default Page1RightContent;
