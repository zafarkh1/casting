import About from "@/components/sections/About/About";
import Information from "@/components/sections/About/Information";
import Partners from "@/components/sections/About/Partners";
import Price from "@/components/sections/About/Price";
import Contact from "@/components/sections/Home/Contact";

function page() {
  return (
    <div className="myContainer">
      <About />
      <Information />
      <Partners />
      <Price />
      <Contact />
    </div>
  );
}

export default page;
