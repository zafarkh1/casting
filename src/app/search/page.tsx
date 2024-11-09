import Contact from "@/components/sections/Home/Contact";
import Search from "@/components/sections/Search/Search";

function page() {
  return (
    <div className="myContainer">
      <h1 className="heading1 lg:mt-24 mt-20 pt-10 lg:pb-14 pb-10 border-y border-y-[#FFFFFF1A] border-b-0">
        поиск актеров
      </h1>
      <Search />
      <Contact />
    </div>
  );
}

export default page;
