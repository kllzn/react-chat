import LeftColumnBody from "./LeftColumnBody";
import LeftColumnHeader from "./LeftColumnHeader";

const LeftColumn = () => {
  return (
    <div className="max-h-full w-[100vw] sm:w-[40vw] sm:max-w-[50vw]  lg:w-[30vw] lg:max-w-[40vw] xl:w-[25vw] xl:max-w-[33vw] bg-sky-200">
      <div className="h-full relative flex flex-col overflow-hidden">
        <LeftColumnHeader />
        <LeftColumnBody />
      </div>
    </div>
  );
};

export default LeftColumn;
