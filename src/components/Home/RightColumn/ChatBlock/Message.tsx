import { FC } from "react";

interface MessageProps {
  isOwn: boolean;
}

const Message: FC<MessageProps> = ({ isOwn }) => {
  const date = `${new Date().getHours()}:${new Date().getMinutes()}`;
  return (
    <>
      {isOwn ? (
        <div className="flex flex-row-reverse">
          <div className="bg-sky-300 max-w-[35rem] p-2 rounded-tr-md rounded-br-md rounded-tl-2xl rounded-bl-2xl break-words flex items-end">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
            reiciendis quas voluptate possimus sit consequatur pariatur,
            eligendi aspernatur vitae est eum culpa placeat incidunt nesciunt
            veniam excepturi et dolor debitis.
            <div className=" text-gray-500 text-sm">{date}</div>
          </div>
        </div>
      ) : (
        <div className="flex items-end">
          <div className=" bg-white max-w-[35rem] p-2 rounded-tl-md rounded-bl-md rounded-tr-2xl rounded-br-2xl break-words flex items-end">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            numquam. Iste culpa labore dolor voluptatem blanditiis maxime
            mollitia assumenda voluptatibus non, alias, esse odit harum unde
            illum distinctio, repudiandae voluptatum.
            <div className=" text-gray-500 text-sm">{date}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
