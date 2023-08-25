import { FC } from "react";
import RightColumnHeader from "./RightColumnHeader";

interface RightColumnProps {}

const RightColumn: FC<RightColumnProps> = () => {
  return (
    <div className="hidden sm:flex flex-col items-center w-full h-full relative overflow-hidden">
      <RightColumnHeader />
    </div>
  );
};

export default RightColumn;
