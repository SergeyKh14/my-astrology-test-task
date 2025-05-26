import Chat from "@/components/Chat";
import ChatCredits from "@/components/Chat/ChatCredits";
import ChatHeaderMobile from "@/components/Chat/ChatHeaderMobile";
import AddCredits from "@/components/modals/add-credits";
import { H4, P } from "@/components/ui/typography";

export default function Home() {
  return (
    <div className="md:container h-full mx-auto flex flex-col md:gap-6">
      <div className="hidden md:flex items-center justify-between">
        <H4 size="4xl" weight="thin" className="text-white">
          Chatroom
        </H4>
        <div>
          <P className="text-text-secondary text-right">In your account now</P>
          <ChatCredits />
        </div>
      </div>
      <ChatHeaderMobile />
      <Chat />
      <AddCredits />
    </div>
  );
}
