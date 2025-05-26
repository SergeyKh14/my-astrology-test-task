"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { P } from "../ui/typography";
import Image from "next/image";
import { useChat } from "@/context/ChatContext";
import { useUser } from "@/context/UserContext";
import Plans from "../Plans";
import { Button } from "../ui/button";
import { useModal } from "@/context/ModalContext";

export default function AddCredits() {
  const { user } = useUser();
  const { creditsUsed } = useChat();
  const { addCreditsModalVisible } = useModal();

  return (
    <Dialog open={addCreditsModalVisible}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="max-md:text-[28px]">
            You&apos;ve Run Out of Credits!
          </DialogTitle>
        </DialogHeader>
        <P className="text-white text-center hidden md:block" size="lg">
          =
        </P>
        <P className="md:hidden text-text-secondary text-center" size="sm">
          Refill now to keep your conversation going.
        </P>
        <div className="flex flex-col gap-10 mt-6">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white/5 py-1 px-5 rounded-full gap-[6px] flex items-center max-md:pt-[5px]">
              <Image
                alt="coin"
                src="/images/icons/coin.svg"
                className="max-md:w-[16px] max-md:h-[16px]"
                width={20}
                height={18}
              />
              <P
                size="xs"
                weight="bold"
                className="text-text-gold uppercase max-md:text-[10px] leading-[14px]"
              >
                ON YOUR ACCOUINT NOW
              </P>
            </div>
            <div className="flex items-center gap-[6px]">
              <P
                size="4xl"
                weight="thin"
                className="text-text-accent !leading-10 max-md:text-lg max-md:font-normal"
              >
                {(user.credits || creditsUsed) - creditsUsed}
              </P>
              <P size="lg" className="text-white max-md:text-sm">
                credits
              </P>
            </div>
          </div>
          <Plans />
          <div className="flex flex-col gap-5 md:gap-6 items-center pb-2">
            <Button
              className="w-full h-[60px] md:w-[228px] md:h-[68px] rounded-full"
              variant="default"
            >
              <P size="md">Buy more credits</P>
            </Button>
            <Button className="hover:no-underline" variant="link">
              <P className="text-accent" size="md">
                Finish
              </P>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
