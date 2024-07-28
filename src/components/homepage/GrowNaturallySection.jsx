import { CarrotIcon, HandHeartIcon, LeafIcon, WheatIcon } from "lucide-react";
import { cornImg } from "../../assets";
import { SmallHeader } from "../general";

const GrowNaturallySection = () => {
  return (
    <section className="mx-auto my-16 max-w-[1400px] p-4">
      <div className="flex w-full flex-col items-center justify-between gap-6">
        <SmallHeader text="Grow Naturally" />
        <h1 className="text-center text-5xl font-medium text-black-2">
          Choose What&apos;s Perfect <br /> For Your Field
        </h1>
      </div>

      <div className="mt-16 flex items-center justify-center gap-4">
        {/* Left Div */}
        <div>
          <div className="flex max-w-[400px] items-center gap-4">
            <div className="grid h-20 w-20 min-w-20 place-items-center rounded-full bg-primary">
              <HandHeartIcon size={46} strokeWidth={1} />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-black-2">
                Agriculture Products
              </h2>
              <p className="mt-2 text-sm text-black-3">
                Nullam porta enim vel tellus commodo, eget laoreet odio
                ultrices.
              </p>
            </div>
          </div>
          <div className="mt-12 flex max-w-[400px] items-center gap-4">
            <div className="grid h-20 w-20 min-w-20 place-items-center rounded-full bg-primary">
              <WheatIcon size={46} strokeWidth={1} />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-black-2">
                Quality Products
              </h2>
              <p className="mt-2 text-sm text-black-3">
                Nullam porta enim vel tellus commodo, eget laoreet odio
                ultrices.
              </p>
            </div>
          </div>
        </div>
        {/* Center Div */}
        <figure>
          <img src={cornImg} alt="corn-img" />
        </figure>
        {/* Right Div */}
        <div>
          <div className="flex max-w-[400px] items-center gap-4">
            <div className="grid h-20 w-20 min-w-20 place-items-center rounded-full bg-primary">
              <CarrotIcon size={46} strokeWidth={1} />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-black-2">
                Fresh Vegetables
              </h2>
              <p className="mt-2 text-sm text-black-3">
                Nullam porta enim vel tellus commodo, eget laoreet odio
                ultrices.
              </p>
            </div>
          </div>
          <div className="mt-12 flex max-w-[400px] items-center gap-4">
            <div className="grid h-20 w-20 min-w-20 place-items-center rounded-full bg-primary">
              <LeafIcon size={46} strokeWidth={1} />
            </div>
            <div>
              <h2 className="text-2xl font-medium text-black-2">
                Pure & Organic
              </h2>
              <p className="mt-2 text-sm text-black-3">
                Nullam porta enim vel tellus commodo, eget laoreet odio
                ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowNaturallySection;
