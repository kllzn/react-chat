import { FC } from "react";

interface ChatFooterProps {}

const ChatFooter: FC<ChatFooterProps> = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center px-3 py-1 min-h-[3.5rem] w-full rounded-2xl max-w-[50em] bg-white">
        <input
          type="text"
          className="w-full h-full outline-none"
          placeholder="govno"
        />
      </div>
    </div>
  );
};

export default ChatFooter;
