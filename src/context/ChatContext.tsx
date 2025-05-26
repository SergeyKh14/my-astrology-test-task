import { groupMessages } from "@/lib/utils";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { GroupedMessage, Message } from "./types";
import { useUser } from "./UserContext";
import { useModal } from "./ModalContext";

interface ChatContextType {
  messages: Message[];
  groupedMessages: GroupedMessage[];
  addMessage: (message: string) => void;
  credits: number;
  elapsedSeconds: number;
  isSessionStopped: boolean;
  creditsUsed: number;
  minsLeft: number;
  stopTimer: () => void;
  startTimer: () => void;
}

const CHAT_CREDITS = 30;

const ChatContext = createContext<ChatContextType | undefined>(undefined);

let sessionInterval: NodeJS.Timeout;

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const { setAddCreditsModalVisible, addCreditsModalVisible } = useModal();

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isSessionStopped, setIsSessionStopped] = useState(false);
  const creditsUsed = useMemo(() => {
    return Math.floor(elapsedSeconds / 60) * CHAT_CREDITS;
  }, [elapsedSeconds]);
  const minsLeft = useMemo(() => {
    if (!user.credits) return 1;

    return (
      Math.floor(user.credits / CHAT_CREDITS) - Math.floor(elapsedSeconds / 60)
    );
  }, [user, elapsedSeconds]);

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

  useEffect(() => {
    startTimer();

    return () => stopTimer();
  }, []);

  useEffect(() => {
    if (user.credits && creditsUsed + CHAT_CREDITS > user.credits) {
      setAddCreditsModalVisible(true);
      stopTimer();
    }
  }, [creditsUsed, setAddCreditsModalVisible, user.credits]);

  const startTimer = () => {
    if (addCreditsModalVisible) return;

    sessionInterval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    setIsSessionStopped(false);
  };

  const stopTimer = () => {
    clearInterval(sessionInterval);
    setIsSessionStopped(true);
  };

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
    <ChatContext.Provider
      value={{
        credits: CHAT_CREDITS,
        messages,
        groupedMessages,
        elapsedSeconds,
        isSessionStopped,
        creditsUsed,
        minsLeft,
        addMessage,
        stopTimer,
        startTimer,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
