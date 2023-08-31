import { FC, useEffect, useRef } from "react";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

interface ChatBlockProps {}

const ChatBlock: FC<ChatBlockProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end"
    });
  }, []);

  return (
    <div className="w-full max-h-full h-[calc(100%-81px)] bg-sky-200 flex flex-col pb-4 px-2">
      <div className=" flex flex-col items-center justify-between overflow-y-scroll mb-5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className=" w-full max-w-[50em] my-0 mx-auto flex flex-col items-stretch justify-end p-[1rem_1rem_0_1rem] ">
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
          <Message isOwn={false} />
          <Message isOwn={true} />
        </div>
        <div ref={scrollRef}></div>
      </div>
      <ChatFooter />
    </div>
  );
};

export default ChatBlock;
