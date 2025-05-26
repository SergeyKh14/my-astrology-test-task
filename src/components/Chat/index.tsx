"use client";
import ChatHeader from "./ChatHeader";
import { useChat } from "@/context/ChatContext";
import UserInfo from "./UserInfo";
import Message from "./Message";
import { cn } from "@/lib/utils";
import InputBox from "./InputBox";
import { useRef } from "react";

export default function Chat() {
  const lastElRef = useRef<HTMLDivElement>(null);
  const { groupedMessages } = useChat();

  const scrollDown = () => {
    setTimeout(() => {
      lastElRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        ...(window.innerWidth < 768 && {
          block: "end",
        }),
      });
    }, 0);
  };

  return (
    <div className="w-full h-[calc(100%-76px)] md:h-[calc(100%-80px)] xl:max-w-[986px] mx-auto md:p-6 md:rounded-3xl bg-surface-navy max-md:flex max-md:flex-col max-md:justify-between">
      <ChatHeader />
      <div className="flex h-[calc(100%-85px)] md:h-[calc(100%-167px)] overflow-auto no-scrollbar flex-col gap-8 py-4 max-md:p-6">
        {groupedMessages.map((group, idx) => (
          <div
            className={cn(
              "w-full flex justify-start",
              group.isMe ? "justify-end" : "justify-start"
            )}
            key={idx}
          >
            <div
              className={cn(
                "w-2/3 max-w-[450px] flex flex-col items-start gap-3",
                group.isMe ? "items-end" : "items-start"
              )}
            >
              <UserInfo group={group} />
              <div
                className={cn(
                  "flex flex-col gap-1 w-full",
                  group.isMe ? "items-end" : "items-start"
                )}
              >
                {group.messages.map((msg, idx) => (
                  <Message isMe={group.isMe} msg={msg} key={idx} />
                ))}
              </div>
            </div>
          </div>
        ))}
        <div ref={lastElRef} />
      </div>
      <InputBox scrollDown={scrollDown} />
    </div>
  );
}
