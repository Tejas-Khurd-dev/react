import Page1LeftContent from "./page left content/PageLeftContent";
import Page1RightContent from "./page right content/RightContent";

const Page1Content = (props) => {
  return (
    <div className="pb-16 pt-6 px-18 h-[90vh] bg-white  flex items-center justify-between gap-10">
      <Page1LeftContent />
      <Page1RightContent users={props.users} />
    </div>
  );
};

export default Page1Content;
