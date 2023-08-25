import { FC } from "react";
import Avatar from "../../../assets/Avatar.jpg";
import { AiOutlineSearch } from "react-icons/ai";

interface RightColumnHeaderProps {}

const RightColumnHeader: FC<RightColumnHeaderProps> = () => {
  return (
    <div className="w-full flex items-center p-4 border-b-2">
      <div className="flex items-center gap-4 grow">
        <div className="w-12 h-12 rounded-[50%] bg-gray-300">
          <img
            src={Avatar}
            alt=""
            className="w-full max-w-full h-auto object-contain rounded-[50%]"
          />
        </div>
        <span className=" text-xl font-bold">kllzn.</span>
      </div>
      <div>
        <AiOutlineSearch size="1.5em" />
      </div>
    </div>
  );
};

export default RightColumnHeader;
