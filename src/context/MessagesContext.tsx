import { groupMessages } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { GroupedMessage, Message, User } from "./types";

interface MessagesContextType {
  messages: Message[];
  groupedMessages: GroupedMessage[];
  addMessage: (message: string) => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(
  undefined
);

const user: User = {
  name: "User",
};

export const MessagesProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "I've had a good experience!",
      createdAt: "Sat May 24 2025 22:09:19 GMT+0400 (Armenia Standard Time)",
      user: {
        name: "Emilia Solntseva",
        image: "/images/avatar.png",
      },
      isMe: false,
    },
    {
      text: "I've had a good experience!\" I signed up for a 7-day trial and have already received many helpful tips and predictions. The reports are very accurate and personalized. Definitely recommend it!",
      createdAt: "Sat May 24 2025 22:09:19 GMT+0400 (Armenia Standard Time)",
      user: {
        name: "Emilia Solntseva",
        image: "/images/avatar.png",
      },
      isMe: false,
    },
    {
      text: "Will I get married? If yes - when?",
      createdAt: "Sat May 24 2025 22:09:19 GMT+0400 (Armenia Standard Time)",
      user: {
        name: "User",
      },
      isMe: true,
    },
  ]);

  const addMessage = (message: string) => {
    setMessages((prev) => [
      ...prev,
      {
        text: message,
        id: message.length,
        user,
        isMe: true,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const groupedMessages = useMemo(() => groupMessages(messages), [messages]);

  return (
    <MessagesContext.Provider value={{ messages, groupedMessages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = (): MessagesContextType => {
  const context = useContext(MessagesContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessagesProvider");
  }
  return context;
};
