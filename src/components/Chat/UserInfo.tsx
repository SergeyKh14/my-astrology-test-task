import { GroupedMessage } from "@/context/types";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { P } from "../ui/typography";
import Image from "next/image";

interface Props {
  group: GroupedMessage;
}

export default function UserInfo({ group }: Props) {
  return (
    <div
      className={cn(
        "flex gap-4 items-center",
        group.isMe ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar
        className={cn(
          "w-10 h-10",
          group.isMe ? "overflow-visible" : "overflow-hidden"
        )}
      >
        <AvatarImage
          className="object-cover"
          src={group.user.image}
          alt="avatar"
        />
        <AvatarFallback className={cn("relative", group.isMe && "bg-white/5")}>
          {group.isMe ? (
            <>
              <div className="absolute top-0 right-0 -translate-x-1/4 translate-y-1/4 w-[9px] h-[9px] rounded-full bg-green-500 border-[1.5px] border-surface-navy" />
              <Image
                width={13}
                height={13}
                alt=""
                src="/images/aries-image.svg"
              />
            </>
          ) : (
            getInitials(group.user.name)
          )}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "flex flex-col gap-[6px]",
          group.isMe ? "items-end" : "items-start"
        )}
      >
        <P size="xxs" className="text-text-treatry leading-none">
          {group.timeAgo}
        </P>
        <P size="xs" className="text-white leading-none">
          {group.user.name}
        </P>
      </div>
    </div>
  );
}
