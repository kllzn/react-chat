import Avatar from "../../../assets/Avatar.jpg";

const LeftColumnHeader = () => {
  return (
    <div className="flex items-center gap-4 p-4 border-b-2">
      <div className="w-12 h-12 rounded-[50%] bg-gray-300">
        <img
          src={Avatar}
          alt=""
          className="w-full max-w-full h-auto object-contain rounded-[50%]"
        />
      </div>
      <span className=" text-xl font-bold">kllzn.</span>
    </div>
  );
};

export default LeftColumnHeader;
