import { FC } from "react";

interface MessageProps {
  isOwn: boolean;
}

const Message: FC<MessageProps> = ({ isOwn }) => {
  return (
    <>
      {isOwn ? (
        <div className="flex items-end flex-row-reverse">
          <div className="bg-sky-300 max-w-[35rem] p-1 rounded-tr-md rounded-br-md rounded-tl-2xl rounded-bl-2xl ">
            govno
          </div>
        </div>
      ) : (
        <div className="flex items-end">
          <div className=" bg-white max-w-[35rem] p-1 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl ">
            govno
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
