import Chat from "@/components/Chat";
import ChatHeaderMobile from "@/components/Chat/ChatHeaderMobile";
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
          <div className="flex justify-end gap-2">
            <P
              size="2xl"
              weight="bold"
              className="text-text-accent font-montserrat"
            >
              550
            </P>
            <P size="lg" className="text-white">
              credits
            </P>
          </div>
        </div>
      </div>
      <ChatHeaderMobile />
      <Chat />
    </div>
  );
}
