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
import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, title: "Главная", href: "/" },
  { id: 2, title: "О компаний", href: "/" },
  { id: 3, title: "ру / узб", href: "/" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      id: 1,
      name: "Поиск актера",
      href: "/search",
      icon: (
        <IconSearch
          className={`size-3 fill-white ${
            pathname === "/search" ? "size-5" : ""
          }`}
        />
      ),
    },
    {
      id: 2,
      name: "Заполнить анкету",
      href: "/form",
      icon: (
        <IconArrowTopRight
          className={`size-3 fill-white ${
            pathname === "/form" ? "size-5" : ""
          }`}
        />
      ),
    },
    {
      id: 3,
      name: "Вход/регистрация",
      href: "/login",
      icon: (
        <IconUser
          className={`size-3 fill-white ${
            pathname === "/login" ? "size-5" : ""
          }`}
        />
      ),
    },
  ];

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
                <Button
                  className={`flexCenter gap-3 group myBtn ${
                    pathname === item.href ? "bg-primary border-none" : ""
                  }`}
                >
                  <span>{item.name}</span>
                  {item.icon && (
                    <span
                      className={`rounded-full p-[5px] ${
                        pathname === item.href ? "" : "bg-primary"
                      }`}
                    >
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
              <Button
                className={`flexCenter gap-3 group myBtn ${
                  pathname === item.href ? "bg-primary border-none" : ""
                }`}
              >
                <span>{item.name}</span>
                {item.icon && (
                  <span
                    className={`rounded-full p-[5px] ${
                      pathname === item.href ? "" : "bg-primary"
                    }`}
                  >
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
