import PlanItem from "./PlanItem";

export type Plan = {
  name: string;
  oldPrice?: number;
  price: number;
  credits: number;
  best?: boolean;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Mega",
    oldPrice: 49,
    price: 197,
    credits: 2500,
    best: true,
  },
  {
    name: "Astro",
    oldPrice: 49,
    price: 97,
    credits: 1200,
  },
  {
    name: "Premium",
    price: 149,
    credits: 500,
    popular: true,
  },
  {
    name: "Mega",
    oldPrice: 49,
    price: 19,
    credits: 150,
  },
];

export default function Plans() {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-md:gap-y-4">
      {plans.map((plan, idx) => (
        <PlanItem key={idx} {...plan} />
      ))}
    </div>
  );
}
