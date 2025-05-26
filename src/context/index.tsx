"use client";

import { PropsWithChildren } from "react";
import { ChatProvider } from "./ChatContext";
import { UserProvider } from "./UserContext";
import { ModalProvider } from "./ModalContext";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ModalProvider>
      <UserProvider>
        <ChatProvider>{children}</ChatProvider>
      </UserProvider>
    </ModalProvider>
  );
}
