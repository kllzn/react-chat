import { FC } from "react";
import ChatItem from "./ChatItem";

interface LeftColumnBodyProps {}

const LeftColumnBody: FC<LeftColumnBodyProps> = () => {
  return (
    <div className=" bg-white p-2 overflow-y-scroll overflow-x-hidden flex flex-col flex-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
};

export default LeftColumnBody;
