"use client";

import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";

function Input({ searchKey, setSearchKey, onSearch }: any) {
  return (
    <div className="grid grid-cols-12 items-center gap-4 border-t border-secondary pt-7">
      <input
        type="text"
        placeholder="Введите имя актёра для поиска"
        className="myBtn bg-transparent lg:col-span-7 col-span-10 lg:text-2xl sm:text-base text-sm"
        style={{ textTransform: "initial", borderColor: "#333" }}
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <Button
        className="hidden lg:flex items-center gap-3 myBtn lg:hover:bg-primary lg:hover:border-primary group lg:col-span-2 transition-all duration-500"
        onClick={onSearch}
      >
        <span>Поиск</span>
        <span className="bg-primary rounded-full p-[6px]">
          <IconArrowTopRight className="size-4 fill-white" />
        </span>
      </Button>

      <span
        className="lg:hidden bg-primary rounded-full p-[10px] lg:col-span-0 col-span-2 flexCenter"
        onClick={onSearch}
      >
        <IconArrowTopRight className="size-5 fill-white" />
      </span>
      <p
        className="underline text-secondary text-lg uppercase lg:col-span-3 col-span-12 hover:text-white cursor-pointer"
        onClick={() => {
          setSearchKey("");
          onSearch();
        }}
      >
        сбросить фильтры
      </p>
    </div>
  );
}

export default Input;
