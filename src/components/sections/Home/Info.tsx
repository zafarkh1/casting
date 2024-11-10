"use client";

import { IconArrowTopRight } from "@/components/icons/icons";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Предложить кандидатуру",
    bg: "/assets/info/info_bg_4.png",
    img: "/assets/info/info_1.png",
    link: "/form",
  },
  {
    id: 2,
    title: "ПОИСК АКТЕРОВ",
    bg: "/assets/info/info_bg_2.png",
    img: "/assets/info/info_2.png",
    link: "/search",
  },
  {
    id: 3,
    title: "подробнее о нас",
    bg: "/assets/info/info_bg_3.png",
    img: "/assets/info/info_3.png",
    link: "/about",
  },
];

function Info() {
  const [hoveredItemId, setHoveredItemId] = useState(0);
  return (
    <section className="lg:py-32 pt-20 pb-12 border-b border-y-[#FFFFFF1A]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-24">
        {items.map((item) => (
          <Link key={item.id} href={item.link}>
            <div
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = `url("/assets/info/info_bg_hover.png")`;
                setHoveredItemId(item.id);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = `url(${item.bg})`;
                setHoveredItemId(0);
              }}
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="relative h-[295px] flex flex-col items-start justify-end px-5 py-8 hover:py-14 lg:hover:scale-105
              transition-all duration-500 group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute right-5 -top-24 mb-auto transform lg:group-hover:rotate-[25deg] transition-all duration-700"
              />
              <h3 className="heading3 uppercase w-3/4 transition-all duration-700">
                {hoveredItemId === item.id ? "ПЕРЕЙТИ" : item.title}
              </h3>
              <span
                className="absolute right-5 bottom-9 w-10 h-10 group-hover:bg-white 
                group-hover:rounded-full group-hover:w-20 group-hover:h-20 group-hover:p-5 transition-all duration-500"
              >
                <IconArrowTopRight className="fill-primary " />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Info;
