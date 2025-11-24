import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  console.log(props);

  return (
    <div className="h-full w-70 rounded-4xl overflow-hidden relative shrink-0  ">
      <img className="h-full  w-full object-cover " src={props.img} />
      <RightCardContent
        tag={props.tag}
        intro={props.intro}
        id={props.id}
        color={props.color}
      />
    </div>
  );
};

export default RightCard;
