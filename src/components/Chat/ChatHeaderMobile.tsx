import { P } from "../ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ChatCredits from "./ChatCredits";

export default function ChatHeaderMobile() {
  return (
    <div className="hidden max-md:flex items-start justify-between px-4 pb-4 pt-6">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage
            className="object-cover"
            src="/images/avatar.png"
            alt="avatar"
          />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center gap-1">
          <P className="text-white leading-none" size="xs">
            Emilia Solntseva
          </P>
          <P size="xxs" className="text-green-500 leading-none">
            Online
          </P>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <P size="xxs" className="text-text-secondary text-right leading-none">
          In your account now
        </P>
        <ChatCredits />
      </div>
    </div>
  );
}
