import { Message as TMessage } from "@/context/types";
import { P } from "../ui/typography";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const messageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface Props {
  msg: Partial<TMessage>;
  isMe: boolean;
}

export default function Message({ msg, isMe }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        variants={messageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          "w-max max-w-full py-[14px] px-5 rounded-3xl",
          !isMe
            ? "bg-white/5 first:rounded-tl-none"
            : "bg-purple first:rounded-tr-none"
        )}
      >
        <P
          size="xs"
          className={cn(
            "inline-block whitespace-pre-line leading-[20px]",
            isMe ? "text-white" : "text-text-secondary"
          )}
        >
          {msg.text}
        </P>
      </motion.div>
    </AnimatePresence>
  );
}
