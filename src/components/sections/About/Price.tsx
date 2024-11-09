import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";

const items = [
  {
    id: 1,
    title: "Начните что бы воспользоваться",
    img: "",
    bg: "/assets/price/price_bg_orange.png",
    price: "",
    number: "",
  },
  {
    id: 2,
    title: "Размещение анкеты",
    img: "/assets/price/price_2.png",
    bg: "/assets/price/price_bg.png",
    price: "Цена:",
    number: "200 000 СУМ",
  },
  {
    id: 3,
    title: "Просмотр контактов",
    img: "/assets/price/price_1.png",
    bg: "/assets/price/price_bg.png",
    price: "Цена:",
    number: "300 000 СУМ",
  },
];

function Price() {
  return (
    <section className="pt-5 xl:pb-24 sm:pb-16 pb-8 border-t border-t-[#FFFFFF1A]">
      <h2 className="heading2 uppercase">ценообразование</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-16 gap-4 lg:mt-10 mt-6">
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className={`relative h-[208px] w-full flex flex-col justify-between px-4 py-6 rounded-2xl`}
          >
            <h4 className="text-2xl w-3/5">{item.title}</h4>
            {item.img && (
              <img
                key={item.id}
                src={item.img}
                alt="partner"
                className="absolute right-5 top-10 w-40 h-32 object-contain"
              />
            )}
            {item.price ? (
              <div>
                <p className="text-secondary">{item.price}</p>
                <p className="text-primary">{item.number}</p>
              </div>
            ) : (
              <div className="gap-3">
                <Button
                  key={item.id}
                  className="flexCenter gap-3 group myBtn bg-white text-primary hover:"
                >
                  <span>Вход/регистрация</span>
                  <span className="bg-primary rounded-full p-[6px] transition-opacity duration-300 group-hover:opacity-0">
                    <IconArrowTopRight className="size-3 fill-white" />
                  </span>
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Price;
