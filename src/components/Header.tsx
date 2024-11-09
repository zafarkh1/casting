"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import {
  IconArrowDown,
  IconArrowTopRight,
  IconSearch,
  IconUser,
} from "./icons/icons";
import { useEffect, useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const items = [
  {
    id: 1,
    name: "Поиск актера",
    href: "/search",
    icon: <IconSearch className="size-3 fill-white group-hover:fill-primary" />,
  },
  {
    id: 2,
    name: "Заполнить анкету",
    href: "/",
    icon: (
      <IconArrowTopRight className="size-3 fill-white group-hover:fill-primary" />
    ),
  },
  {
    id: 3,
    name: "Вход/регистрация",
    href: "/",
    icon: <IconUser className="size-3 fill-white group-hover:fill-primary" />,
  },
];

const links = [
  { id: 1, title: "Главная", href: "/" },
  { id: 2, title: "О компаний", href: "/" },
  { id: 3, title: "ру / узб", href: "/" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-linear lg:py-0 py-4 ${
        scrolled ? "bg-[#131313] backdrop-blur-sm" : ""
      }`}
    >
      <div className="myContainer relative lg:my-4 flex lg:justify-between lg:items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={
              open ? "/assets/logo/mobile_logo.png" : "/assets/logo/logo.png"
            }
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        {/* Menubar icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={`text-4xl absolute top-2 md:right-8 sm:right-6 right-3 cursor-pointer z-50`}
          >
            {open ? null : <MdOutlineMenu />}
          </button>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-[#00000099] z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Links and Buttons */}
        <nav
          className={`lg:static fixed top-0 left-0 h-full lg:w-auto sm:w-1/3 w-4/5 flex lg:items-center lg:flex-row flex-col justify-between
            gap-3 lg:bg-transparent bg-[#131313] lg:px-0 px-6 lg:py-0 py-6 transition-transform duration-500 ${
              open
                ? "translate-x-0 text-white z-50"
                : "-translate-x-full lg:translate-x-0"
            }`}
        >
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-4xl absolute top-6 right-6 cursor-pointer z-50"
          >
            <FaTimes />
          </button>

          {/* Mobile Links */}
          {open && (
            <>
              <Link href="/">
                <Image
                  src={"/assets/logo/logo.png"}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </Link>
              <ul className="lg:hidden space-y-5 mt-6">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="uppercase text-secondary hover:text-white transition-all duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Mobile Buttons */}
          <div className="lg:hidden mt-auto flex flex-col gap-3">
            {items.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button key={item.id} className="flexCenter gap-3 group myBtn">
                  <span>{item.name}</span>
                  {item.icon && (
                    <span className="bg-primary rounded-full p-[6px] transition-opacity duration-300 group-hover:opacity-0">
                      {item.icon}
                    </span>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          {items.map((item) => (
            <Link key={item.id} href={item.href}>
              <Button className="flexCenter gap-3 myBtn hover:bg-primary hover:border-0 group">
                <span>{item.name}</span>
                {item.icon && (
                  <span className="bg-primary group-hover:bg-white group-hover:text-primary rounded-full p-[6px]">
                    {item.icon}
                  </span>
                )}
              </Button>
            </Link>
          ))}
        </div>

        {/* Language Selector */}
        <Button className="hidden lg:flex lg:items-center gap-3 myBtn">
          Рус
          <IconArrowDown className="size-6" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
