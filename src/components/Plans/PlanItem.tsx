import { cn } from "@/lib/utils";
import { P } from "../ui/typography";
import Image from "next/image";

import { Plan } from "./";

export default function PlanItem({
  best,
  name,
  oldPrice,
  price,
  popular,
}: Plan) {
  return (
    <div
      className={cn(
        "relative w-full rounded-3xl border-4 bg-white/5 p-3 pt-[18px] md:pt-5 md:p-5 flex flex-col h-[166px] md:h-[176px] gap-4",
        best ? "border-border-gold bg-white/10" : "border-transparent",
        best && "md:gap-2"
      )}
    >
      {(best || popular) && (
        <div
          className={cn(
            "absolute flex items-center gap-2 py-[6px] px-3 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-max",
            best &&
              "bg-gradient-to-r from-[hsla(264,68%,67%,1)] to-[hsla(229,94%,79%,1)]",
            popular && "bg-[hsl(39,66%,89%)]"
          )}
        >
          {best && (
            <Image
              alt="sun"
              width={18}
              height={19}
              src="/images/icons/sun.svg"
            />
          )}
          <P
            size="xs"
            weight="bold"
            className="text-[hsl(228,59%,6%)] !leading-5"
          >
            {best ? "BEST VALUE" : "MOST POPULAR"}
          </P>
        </div>
      )}
      <div className={best ? "md:mt-2 md:mb-2" : ""}>
        <div className="flex items-center justify-between">
          <P
            size="2xl"
            weight="bold"
            className="text-white leading-8 max-md:text-xl max-md:leading-7"
          >
            {name}
          </P>
          {oldPrice && (
            <P size="xs" className="text-text-treatry !leading-5 max-md:hidden">
              €{oldPrice}
            </P>
          )}
        </div>
        <div className="flex items-center justify-between -mt-[2px]">
          <P className="text-text-secondary leading-6 max-md:leading-5">
            2500 credits
          </P>
          <P size="lg" className="text-accent leading-7 max-md:hidden">
            €{price}
          </P>
        </div>
      </div>
      <div className="w-full min-h-[1px] bg-white/10" />
      <div>
        <P size="md" className="text-accent leading-6 md:hidden">
          €{price}
        </P>
        <div className="flex items-center justify-between">
          <div className="md:w-10 md:h-10 flex items-center justify-center rounded-full md:bg-white/5">
            <Image
              className="max-md:w-[13px] max-md:h-[13px]"
              alt="coins"
              src="/images/icons/coins.svg"
              width={18}
              height={18}
            />
          </div>
          <div className="flex items-center gap-2">
            <P size="sm" weight="bold" className="text-text-accent">
              €0.08
            </P>
            <P size="xs" className="text-text-secondary">
              per credit
            </P>
          </div>
        </div>
      </div>
    </div>
  );
}
