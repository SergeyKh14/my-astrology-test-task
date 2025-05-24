import Link from "next/link";
import { P, Span } from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";

const links = [
  {
    name: "Privacy policy",
    link: "/",
  },
  {
    name: "Terms of use",
    link: "/",
  },
  {
    name: "Cookie policy",
    link: "/",
  },
  {
    name: "Help & Support",
    link: "/",
  },
];

export default function Footer() {
  return (
    <footer className="container mx-auto pb-10 hidden md:flex items-center justify-between mt-[35px]">
      <div className="grid grid-cols-2 gap-y-2 lg:grid-cols-4 gap-14">
        {links.map(({ name, link }) => (
          <Link key={name} href={link}>
            <P weight={"normal"} size="xs" className="text-white">
              {name}
            </P>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <P
          weight={"normal"}
          size="xs"
          className="text-neutral leading-5 text-right"
        >
          Download MyAstrology App
          <br />
          and get{" "}
          <Span
            weight={"bold"}
            size="xs"
            className="text-white inline leading-5"
          >
            100 free credits
          </Span>
        </P>
        <Button
          variant="link"
          className="w-[120px] h-[42px] rounded-sm bg-black"
        >
          <Image
            width={104}
            height={27}
            src="/images/apple-download.svg"
            alt="apple download"
          />
        </Button>
      </div>
    </footer>
  );
}
