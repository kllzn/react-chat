import LeftColumn from "../components/Home/LeftColumn/LeftColumn";
import RightColumn from "../components/Home/RightColumn/RightColumn";

const Home = () => {
  return (
    <main className="h-[100vh] w-full overflow-hidden grid grid-cols-[auto_1fr] grid-rows-[100%]">
      <LeftColumn />
      <RightColumn />
    </main>
  );
};

export default Home;
