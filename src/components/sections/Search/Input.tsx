"use client";

import { actors } from "@/api/data";
import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";
import { useState } from "react";

function Input({ setFilteredActors }: any) {
  const [searchItem, setSearchItem] = useState("");

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
    const filtered = actors.filter((actor) =>
      actor.firstName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredActors(filtered);
  };

  return (
    <div className="grid grid-cols-12 items-center gap-4 border-t border-secondary pt-7">
      <input
        type="text"
        placeholder="Введите имя актёра для поиска"
        className="myBtn bg-transparent lg:col-span-7 col-span-10 lg:text-2xl sm:text-base text-sm"
        style={{ textTransform: "initial", borderColor: "#333" }}
        value={searchItem}
        onChange={handleSearchFilter}
      />
      <Button className="hidden lg:flex items-center gap-3 myBtn lg:hover:bg-primary lg:hover:border-primary group lg:col-span-2 transition-all duration-500">
        <span>Поиск</span>
        <span className="bg-primary rounded-full p-[6px]">
          <IconArrowTopRight className="size-4 fill-white" />
        </span>
      </Button>

      <span className="lg:hidden bg-primary rounded-full p-[10px] lg:col-span-0 col-span-2 flexCenter">
        <IconArrowTopRight className="size-5 fill-white" />
      </span>
      <p className="underline text-secondary text-lg uppercase lg:col-span-3 col-span-12 hover:text-white cursor-pointer">
        сбросить фильтры
      </p>
    </div>
  );
}

export default Input;
