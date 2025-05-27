import Image from "next/image";
import { P, Span } from "../ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useChat } from "@/context/ChatContext";
import { cn, formatTime } from "@/lib/utils";

export default function ChatHeader() {
  const {
    credits,
    elapsedSeconds,
    isSessionStopped,
    minsLeft,
    startTimer,
    stopTimer,
  } = useChat();

  return (
    <div className="hidden md:flex items-start justify-between pb-4 border-b border-white/10">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            className="object-cover"
            src="/images/avatar.png"
            alt="avatar"
          />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-4">
            <Image
              width={20}
              height={15}
              alt="flag"
              src="/images/flags/uae.svg"
            />
            <P className="text-white" size="lg">
              Emilia Solntseva
            </P>
          </div>
          <div className="flex items-center gap-2">
            <P weight="bold" className="text-accent">
              {credits}
            </P>
            <P size="xxs" className="text-text-secondary">
              credits/minute
            </P>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <div className="flex gap-2">
          <P className="text-white" weight="thin" size="4xl">
            {elapsedSeconds > 59 ? "XX:XX" : formatTime(elapsedSeconds)}
          </P>
          <div className="flex items-end">
            <P className="text-text-secondary leading-none">
              {elapsedSeconds > 59 ? "mins" : "secs"}
            </P>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5">
              <Image
                width={18}
                height={18}
                alt="clock"
                src="/images/icons/clock.svg"
              />
            </div>
            <P className="text-text-secondary">
              <Span weight="bold" className="text-white">
                {minsLeft} min{" "}
              </Span>
              left
            </P>
          </div>
          <Button
            onClick={() => (isSessionStopped ? startTimer() : stopTimer())}
            className={cn(
              "px-5 py-[10px] gap-3 h-auto rounded-full",
              isSessionStopped
                ? "bg-primary text-white"
                : "bg-white/5 hover:bg-white/10"
            )}
          >
            {isSessionStopped ? (
              <Image
                width={20}
                height={20}
                alt="stop"
                src="/images/icons/play.svg"
              />
            ) : (
              <Image
                width={12}
                height={12}
                alt="stop"
                src="/images/icons/stop.svg"
              />
            )}
            <P>{isSessionStopped ? "Continue" : "Stop chat"}</P>
          </Button>
        </div>
      </div>
    </div>
  );
}
