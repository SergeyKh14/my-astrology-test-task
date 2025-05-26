"use client";

import { P } from "@/components/ui/typography";
import { useUser } from "@/context/UserContext";
import Image from "next/image";

export default function Credits() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-2">
      <P className="text-text-accent" weight="bold">
        {user.credits}
      </P>
      <P className="text-white">credits</P>
      <Image alt="" src="/images/icons/coin.svg" width={20} height={20} />
    </div>
  );
}
