import { FC } from "react";
import RightColumnHeader from "./RightColumnHeader";
import ChatBlock from "./ChatBlock/ChatBlock";

interface RightColumnProps {}

const RightColumn: FC<RightColumnProps> = () => {
  return (
    <div className="hidden sm:flex flex-col items-center w-full h-full relative overflow-hidden">
      <RightColumnHeader />
      <ChatBlock></ChatBlock>
    </div>
  );
};

export default RightColumn;
