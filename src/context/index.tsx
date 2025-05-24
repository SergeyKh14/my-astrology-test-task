"use client";

import { PropsWithChildren } from "react";
import { MessagesProvider } from "./MessagesContext";

export function Providers({ children }: PropsWithChildren) {
  return <MessagesProvider>{children}</MessagesProvider>;
}
