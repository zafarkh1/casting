import { IconArrowTopRight } from "@/components/icons/icons";

function Contact({ heading }: { heading: string }) {
  return (
    <section className="xl:my-20 flexCenter xl:gap-8 gap-4 xl:py-6 py-6 border-y lg:border-y-secondary border-y-[#FFFFFF1A]">
      <h1 className="heading1">{heading}</h1>
      <div className="xl:h-20 h-6 xl:w-20 w-6 rounded-full bg-primary hover:scale-110 transition-all duration-300 cursor-pointer">
        <IconArrowTopRight className="h-full w-full xl:p-5 p-1 fill-white" />
      </div>
    </section>
  );
}

export default Contact;
