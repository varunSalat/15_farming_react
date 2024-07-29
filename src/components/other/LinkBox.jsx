import { ArrowUpRight } from "lucide-react";

const LinkBox = ({ icon: Icon, name, dis }) => {
  return (
    <div className="curv group relative min-h-[210px] w-[min(450px,100%)] cursor-pointer justify-between rounded-xl p-6 px-8 transition-three-all before:shadow-sm hover:-translate-y-3">
      <div className="flex items-center gap-4 border-b border-black-5 pb-4">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-black-2">
          {Icon}
        </div>
        <h2 className="text-2xl font-medium text-black-2">{name}</h2>
      </div>
      <p className="mt-4 max-w-[360px] text-black-3">{dis}</p>
      <div className="absolute -bottom-2 right-2 grid h-12 w-12 place-items-center rounded-full bg-white text-black-3 transition-three-all group-hover:bg-secondary group-hover:text-white">
        <ArrowUpRight />
      </div>
    </div>
  );
};

export default LinkBox;
