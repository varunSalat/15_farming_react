import { SmallHeader } from "../general";

const HealthyLifeSection = () => {
  return (
    <section className="mx-auto my-8 flex max-w-[1400px] flex-col overflow-hidden rounded-2xl p-2 2xl:flex-row">
      <figure className="w-full 2xl:w-1/2">
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/img-03.jpg"
          alt="img"
          className="w-full"
        />
      </figure>
      <div className="relative w-full translate-y-[-8px] bg-primary p-8 2xl:w-1/2 2xl:-translate-x-3 2xl:translate-y-0 2xl:rounded-2xl">
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/img-04.png"
          alt="sd"
          className="absolute bottom-0 -z-10"
        />
        <div>
          <SmallHeader text="What We Do" />
          <h1 className="mb-4 mt-4 text-5xl font-medium text-black-2">
            Organic Spices
          </h1>
          <p className="max-w-[550px] text-justify text-black-3">
            As an exporter of organic food products, our commitment is to
            deliver high-quality, sustainably produced items to markets around
            the world. We source our products from certified organic farms that
            adhere to strict environmental and ethical standards. Our portfolio
            includes a diverse range of organic Spices . such as Cumin seed,
            Fennal Seed , fenugreek seed , coriander seed , all free from
            synthetic pesticides.
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div className="flex items-center gap-4">
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white before:absolute before:h-[115%] before:w-[115%] before:rounded-full before:border before:border-white">
              <p className="text-2xl">100%</p>
            </div>
            <h2 className="text-2xl text-black-3">
              Eco Farms <br /> Worldwide
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white before:absolute before:h-[115%] before:w-[115%] before:rounded-full before:border before:border-white">
              <p className="text-2xl">100%</p>
            </div>
            <h2 className="text-2xl text-black-3">
              Eco Farms <br /> Worldwide
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthyLifeSection;
