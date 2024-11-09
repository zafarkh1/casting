import Catalogue from "@/components/sections/Home/Catalogue/Catalogue";
import Contact from "@/components/sections/Home/Contact";
import Info from "@/components/sections/Home/Info";
import Showcase from "@/components/sections/Home/Showcase";

export default function Home() {
  return (
    <div className="myContainer">
      <Showcase />
      <Info />
      <Catalogue />
      <Contact />
    </div>
  );
}
