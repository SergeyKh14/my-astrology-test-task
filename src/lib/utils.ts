import { GroupedMessage, Message } from "@/context/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TIME_THRESHOLD_MINUTES = 1;

export function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const created = new Date(timestamp);
  const diffMs = now.getTime() - created.getTime();

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""}`;
  return `${days} day${days > 1 ? "s" : ""}`;
}

export function groupMessages(
  messages: Message[],
  thresholdMinutes: number = TIME_THRESHOLD_MINUTES
): GroupedMessage[] {
  const sorted = [...messages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const grouped: GroupedMessage[] = [];
  let currentGroup: GroupedMessage | null = null;

  sorted.forEach((msg, index) => {
    const msgTime = new Date(msg.createdAt);
    const prevMsg = index > 0 ? sorted[index - 1] : null;
    const prevTime = prevMsg ? new Date(prevMsg.createdAt) : null;

    const shouldStartNewGroup =
      !prevMsg ||
      msg.user.name !== prevMsg.user.name ||
      msg.isMe !== prevMsg.isMe ||
      Math.abs(msgTime.getTime() - (prevTime?.getTime() || 0)) >
        thresholdMinutes * 60 * 1000;

    if (shouldStartNewGroup) {
      currentGroup = {
        user: msg.user,
        isMe: msg.isMe,
        timeAgo: formatTimeAgo(msg.createdAt),
        messages: [],
      };
      grouped.push(currentGroup);
    }

    currentGroup!.messages.push({
      text: msg.text,
      createdAt: msg.createdAt,
    });
  });

  return grouped;
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}
