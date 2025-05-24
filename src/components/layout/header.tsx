import Image from "next/image";
import { P } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Chatroom",
    link: "/",
    badge: 2,
    active: true,
  },
];

export default function Header() {
  return (
    <header className="container hidden md:flex mx-auto justify-between pt-6 mb-10">
      <div className="flex items-center gap-10">
        <div className="relative w-20 h-20">
          <Image fill src="/images/logo.svg" alt="logo" />
        </div>
        <div className="items-center gap-14 hidden lg:flex">
          {links.map(({ name, link, badge, active }) => (
            <Link className="flex items-center gap-2" key={name} href={link}>
              <P
                weight={active ? "bold" : "normal"}
                size="xs"
                className={active ? "text-text-accent" : "text-white"}
              >
                {name}
              </P>
              {badge && (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                  <P size="xs" className="text-text-treatry">
                    8
                  </P>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center h-[68px] bg-white/5 pl-5 pr-2 rounded-full gap-2">
          <div className="flex items-center gap-2">
            <P className="text-text-accent" weight="bold">
              500
            </P>
            <P className="text-white">credits</P>
            <Image alt="" src="/images/icons/coin.svg" width={20} height={20} />
          </div>
          <Button
            variant="link"
            className="flex items-center gap-2 hover:no-underline"
          >
            <Image alt="" src="/images/icons/plus.svg" width={20} height={20} />
            <P className="text-white">Add</P>
          </Button>
        </div>
        <Button className="h-[68px] rounded-full px-6">
          <P size="md" className="text-white">
            Chat now with psychic
          </P>
        </Button>
        <Button
          variant="link"
          className="relative h-16 p-0 hover:no-underline gap-3"
        >
          <div className="flex items-center justify-center w-16 h-full rounded-full bg-white/5">
            <Image
              width={17}
              height={17}
              alt=""
              src="/images/icons/aries.svg"
            />
            <div className="absolute lef-1/2 top-0 -translate-y-1/2">
              <Image
                width={20}
                height={12}
                alt=""
                src="/images/icons/crown.svg"
              />
            </div>
          </div>
          <Image width={24} height={24} alt="" src="/images/icons/down.svg" />
        </Button>
      </div>
    </header>
  );
}
