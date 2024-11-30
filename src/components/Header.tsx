"use client";

import Link from "next/link";
import Button from "./Button";
import {
  IconArrowDown,
  IconArrowTopRight,
  IconLogo,
  IconMobileLogo,
  IconSearch,
  IconUser,
} from "./icons/icons";
import { MouseEvent, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useLoginModalStore } from "./utils/zustand/useLoginModalStore";
import LoginModal from "./sections/Form/LoginModal";
import Cookies from "js-cookie";

const links = [
  { id: 1, title: "Главная", href: "/" },
  { id: 2, title: "О компаний", href: "/about" },
];

function Header() {
  const { isOpen, onOpen, onClose } = useLoginModalStore();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const hasCookie = Cookies.get("refresh_token_casting");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on pathname change (indicating navigation)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Check authentication status on mount
  useEffect(() => {
    setIsAuthenticated(!!hasCookie);

    const handleStorageChange = () => {
      setIsAuthenticated(!!hasCookie);
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [hasCookie]);

  const handleFormClick = (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (!isAuthenticated) {
      e.preventDefault();
      onOpen();
    } else {
      router.push("/form");
    }
  };

  useEffect(() => {
    document.body.style.overflow = open || isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isOpen]);

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
      onClick: handleFormClick,
    },
    {
      id: 3,
      name: "Вход/регистрация",
      href: hasCookie ? "/profile" : "/login",
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-linear lg:pt-10 lg:pb-4 py-4 ${
          scrolled ? "bg-[#131313] backdrop-blur-sm" : ""
        }`}
      >
        <div className="myContainer relative lg:mt-4 flex justify-between lg:items-center">
          {/* Logo */}
          <Link href="/">
            <IconLogo className="w-[130px] h-[26px] hidden md:inline-block" />
            <IconMobileLogo className="md:hidden w-12 h-12" />
          </Link>

          {/* Menubar icon */}
          <div className="lg:hidden flex items-center">
            <Button className="lg:hidden flex items-center gap-3 py-1 px-4 rounded-full border border-white mr-10">
              Рус
              <IconArrowDown className="size-6" />
            </Button>
            <button
              onClick={() => setOpen(!open)}
              className={`text-4xl absolute top-2 md:right-8 sm:right-6 right-3 cursor-pointer z-50`}
            >
              <MdOutlineMenu className="size-8" />
            </button>
          </div>

          {/* Overlay */}
          {open && (
            <div
              className="fixed inset-0 lg:bg-transparent bg-[#00000099] z-40"
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
                  <IconMobileLogo className="lg:hidden w-20 h-20" />
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
                <Link key={item.id} href={item.href} onClick={item.onClick}>
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
              <Link key={item.id} href={item.href} onClick={item.onClick}>
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
      {isOpen && (
        <>
          <LoginModal />
          <div className="fixed inset-0 bg-[#00000099] z-40" />
        </>
      )}
    </>
  );
}

export default Header;
