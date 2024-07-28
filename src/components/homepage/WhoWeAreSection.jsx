import { FenceIcon, ShieldCheckIcon } from "lucide-react";
import { SmallHeader } from "../general";
const WhoWeAreSection = () => {
  return (
    <section className="mx-auto my-16 flex max-w-[1400px] items-center justify-between gap-4 p-4">
      <div className="relative w-1/2 max-w-[600px] overflow-hidden rounded-xl bg-danger">
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/img-01.jpg"
          alt=""
        />
        <div className="absolute bottom-0 right-0 z-10 rounded-tl-xl bg-primary p-6">
          <div className="text-center">
            <h3 className="mb-2 border-b pb-2 text-4xl text-black-3">
              <span className="text-secondary">*</span>435<span>+</span>
            </h3>
            <p className="text-sm text-black-2">Growth Tons&apos; of Harvest</p>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <SmallHeader text="Who We Are" />
        <div>
          <h1 className="my-4 text-4xl font-medium text-black-2">
            Apexrim International is the one of the <br /> Leading global
            organic farm.
          </h1>
          <p className="text-black-3">
            Based in India, we handle all the processes from processing to
            packaging to deliver the quality products grown from the best
            fertile soil of Gujarat to foreign markets. <br />
            <br /> Our identity is the quality of our various products with
            which we do not compromise and want to farm to foreign i.e. process
            and package quality products and deliver them directly to the global
            market at competitive rates.
          </p>
          <div className="mt-8 flex justify-between gap-6">
            <div className="w-1/2">
              <FenceIcon size={90} className="text-secondary" strokeWidth={1} />
              <h3 className="my-2 text-2xl font-medium text-black-2">
                Eco Farms Worldwide
              </h3>
              <p className="text-sm text-black-3">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div>
            <div className="w-1/2">
              <ShieldCheckIcon
                size={90}
                className="text-secondary"
                strokeWidth={1}
              />
              <h3 className="my-2 text-2xl font-medium text-black-2">
                Eco Farms Worldwide
              </h3>
              <p className="text-sm text-black-3">
                There are many variations of pass ages of lorem ipsum available
                majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
