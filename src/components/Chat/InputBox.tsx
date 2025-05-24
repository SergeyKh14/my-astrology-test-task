"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { FormEvent, useState } from "react";
import { useMessages } from "@/context/MessagesContext";

interface Props {
  scrollDown: () => void;
}

export default function InputBox({ scrollDown }: Props) {
  const { addMessage } = useMessages();
  const [text, setText] = useState("");

  const handleSendMessage = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (text.trim()) {
      addMessage(text.trim());
      setText("");
      scrollDown();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex items-start bg-background min-h-16 rounded-[32px] mt-3 px-2 max-md:m-6"
    >
      <Textarea
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
        className="min-h-12 max-h-[128px] w-full my-2 pt-[14px] pb-3 border-0 !outline-0 !ring-0 text-white"
        placeholder="Type your text here"
        rows={1}
      />
      <Button className="mt-2 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-white/10">
        <Image alt="send" width={16} height={16} src="/images/icons/send.svg" />
      </Button>
    </form>
  );
}
