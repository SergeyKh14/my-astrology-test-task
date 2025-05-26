"use client";

import { useUser } from "@/context/UserContext";
import { P } from "../ui/typography";
import { useChat } from "@/context/ChatContext";

export default function ChatCredits() {
  const { user } = useUser();
  const { creditsUsed } = useChat();

  return (
    <div className="flex justify-end gap-2">
      <P
        size="2xl"
        weight="bold"
        className="text-text-accent font-montserrat max-md:text-base max-md:leading-none"
      >
        {(user?.credits || creditsUsed) - creditsUsed}
      </P>
      <P size="lg" className="text-white max-md:text-sm max-md:leading-none">
        credits
      </P>
    </div>
  );
}
