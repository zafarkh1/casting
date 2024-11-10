import { IconArrowTopRight, IconSearch, IconUser } from "./icons/icons";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Главная",
    href: "/",
  },
  {
    id: 2,
    title: "О компаний",
    href: "/about",
  },
  {
    id: 3,
    title: "ру/узб",
    href: "/",
  },
];

const contacts = [
  {
    id: 1,
    text: "605 Dog Hill Lane, Topeka, KS 66603",
  },
  {
    id: 2,
    text: "rodger913@aol.com",
  },
  {
    id: 3,
    text: "(813) 752-5611",
  },
];

const buttons = [
  {
    id: 1,
    name: "Поиск актера",
    href: "/search",
    icon: <IconSearch className="size-3 fill-white" />,
  },
  {
    id: 2,
    name: "Заполнить анкету",
    href: "/form",
    icon: <IconArrowTopRight className="size-3 fill-white" />,
  },
  {
    id: 3,
    name: "Вход/регистрация",
    href: "/login",
    icon: <IconUser className="size-3 fill-white" />,
  },
];

function Footer() {
  return (
    <footer className="myContainer">
      {/*       Mobile logo */}
      <div className="lg:py-8 lg:hidden py-10 border-t border-t-[#FFFFFF1A]">
        <Link href="/" className="">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/*      Menu     */}
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:pt-12 pt-6 lg:pb-20 border-y border-y-[#FFFFFF1A]">
        {/*     Menu     */}
        <div className="col-span-1 space-y-5 ">
          <h6 className="heading6">МЕНЮ</h6>
          <ul className="xl:space-y-5 sm:space-y-4 space-y-3">
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
        </div>

        {/*    Contacts    */}
        <div className="space-y-5 lg:pb-0 pb-8">
          <h6 className="heading6">КОНТАКТЫ</h6>
          <ul className="xl:space-y-5 sm:space-y-4 space-y-3">
            {contacts.map((contact) => (
              <li
                key={contact.id}
                className="text-secondary hover:text-white transition-all duration-300"
              >
                {contact.text}
              </li>
            ))}
          </ul>
        </div>

        {/*    Buttons     */}
        <nav className="xl:col-span-1 col-span-2 xl:col-start-4 xl:space-y-5 space-y-4 lg:py-0 py-10 border-t lg:border-t-0 border-t-[#FFFFFF1A]">
          {buttons.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flexCenter gap-3 myBtn"
            >
              <span>{item.name}</span>
              {item.icon && (
                <span className="bg-primary rounded-full p-[6px]">
                  {item.icon}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/*      Logo       */}
      <div className="lg:py-8 hidden lg:flex justify-center items-center">
        <Link href="/" className="">
          <Image
            src="/assets/logo/logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
