import { FenceIcon, ShieldCheckIcon } from "lucide-react";
import { SmallHeader } from "../general";
const WhoWeAreSection = () => {
  return (
    <section className="mx-auto my-16 flex max-w-[1400px] flex-col items-start justify-between gap-4 p-4 lg:flex-row">
      <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl bg-danger lg:w-1/2">
        <img
          src="/images/other/who we are.jpg"
          alt="who we are"
          className="max-h-[550px] w-full object-cover object-center"
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

      <div className="w-full lg:w-1/2">
        <SmallHeader text="Who We Are" />
        <div>
          <h1 className="my-4 text-3xl font-bold text-black-2 md:text-4xl">
            Apex Rim International is the one of the{" "}
            <br className="hidden md:block" /> Leading global Spices and
            Agriculture Exporter.
          </h1>
          <p className="text-black">
            <strong>Apex Rim International</strong> is an Spices and Agriculture
            exporter of{" "}
            <strong>
              Cumin Seed , Fennal Seed , Psyllium Seed , Psyllium Husk , Dill
              Seed , Coriander Seed , Fenugreek Seed , Turmeric Powder ,
              Turmeric Finger , Corom Seed ( Ajwan Seed ), Peanut Seed , Hulled
              Sesame seed , Natural Sesame seed , Mustard Seed , Castor Seed ,
              Ground nut , ensure rich , Healthy oil seed, Pearl millet, White
              Sorghum and Wheat.
            </strong>
            <br />
            <br /> We are well supported by our team of highly skilled vendors
            who possess rich industry experience in their respective domains of
            business operations. <br />
            <br /> We have a team of highly experienced professionals, and their
            strong support makes us able to provide the utmost level of
            satisfaction to our clients. <br />
            <br /> We believe in continuously improving our products through
            scientific research to deliver effective solutions to organic
            farmers for increasing the yield of their lands.
          </p>
          {/* <div className="mt-8 flex justify-between gap-6">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
