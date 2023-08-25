import { FC } from "react";
import Avatar from "../../../assets/Avatar.jpg";

interface ChatItemProps {}

const ChatItem: FC<ChatItemProps> = () => {
  return (
    <div className="px-2 py-3 rounded-xl flex items-center gap-x-2 w-full h-full max-h-16 cursor-pointer">
      <div className=" min-w-[2.5rem] max-w-full w-10 h-10 rounded-[50%] bg-gray-300">
        <img
          src={Avatar}
          alt=""
          className="w-full max-w-full h-auto object-contain rounded-[50%]"
        />
      </div>
      <div className="leading-none flex flex-col overflow-clip ">
        <span className="font-medium ">kllzn.</span>
        <span className=" min-h-[20px] overflow-clip whitespace-nowrap text-ellipsis w-[calc((100%-5px))]">
          ya
          dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </span>
      </div>
    </div>
  );
};

export default ChatItem;
