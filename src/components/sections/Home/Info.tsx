import { IconArrowTopRight } from "@/components/icons/icons";

const items = [
  {
    id: 1,
    title: "Предложить кандидатуру",
    bg: "/assets/info/info_bg_4.png",
    img: "/assets/info/info_1.png",
  },
  {
    id: 2,
    title: "ПОИСК АКТЕРОВ",
    bg: "/assets/info/info_bg_2.png",
    img: "/assets/info/info_2.png",
  },
  {
    id: 3,
    title: "подробнее о нас",
    bg: "/assets/info/info_bg_3.png",
    img: "/assets/info/info_3.png",
  },
];

function Info() {
  return (
    <section className="lg:py-32 pt-20 pb-12 border-b border-y-[#FFFFFF1A]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-24">
        {items.map((item) => (
          <div key={item.id}>
            <div
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="relative h-[295px] flex flex-col items-start justify-end px-5 py-8"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute right-5 -top-24 mb-auto"
              />
              <h3 className="heading3 uppercase w-3/4">{item.title}</h3>
              <IconArrowTopRight className="absolute right-5 bottom-7 size-8 fill-red-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Info;
