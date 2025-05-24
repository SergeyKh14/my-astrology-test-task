import { PropsWithChildren } from "react";
import Header from "./header";
import Image from "next/image";
import Footer from "./footer";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="relative max-md:h-screen max-md:overflow-hidden w-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-screen h-screen -translate-x-1/3">
        <Image fill alt="" src="/images/light-left.svg" />
      </div>
      <div className="absolute bottom-0 right-0 w-screen h-screen translate-x-1/4">
        <Image fill alt="" src="/images/light-right.svg" />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <Header />
        <div className="h-screen md:h-[calc(100vh-275px)] md:min-h-[800px]">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
