import {
  ShieldCheckIcon,
  ShoppingBasketIcon,
  TractorIcon,
  WheatIcon,
} from "lucide-react";
import LinkBox from "../other/LinkBox";
const wwoList = [
  {
    icon: <TractorIcon size={36} strokeWidth={1} />,
    name: "Professional Farmers",
    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
  },
  {
    icon: <WheatIcon size={36} strokeWidth={1} />,
    name: "Agriculture Products",
    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
  },
  {
    icon: <ShieldCheckIcon size={36} strokeWidth={1} />,
    name: "100% Guaranteed",
    dis: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas necessitatibus laboriosam laborum quibusdam non cum magni est quos",
  },
];

const HeroWwoSection = () => {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-4 p-6">
      {wwoList.map((wwo, i) => (
        <LinkBox key={i} dis={wwo.dis} icon={wwo.icon} name={wwo.name} />
      ))}
    </section>
  );
};

export default HeroWwoSection;
