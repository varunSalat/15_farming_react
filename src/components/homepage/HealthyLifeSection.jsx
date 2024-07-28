import { SmallHeader } from "../general";

const HealthyLifeSection = () => {
  return (
    <section className="mx-auto my-8 flex max-w-[1400px] overflow-hidden rounded-2xl">
      <figure className="w-1/2">
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/img-03.jpg"
          alt="img"
        />
      </figure>
      <div className="relative w-1/2 -translate-x-3 rounded-2xl bg-primary p-8">
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/img-04.png"
          alt="sd"
          className="absolute bottom-0 -z-10"
        />
        <div>
          <SmallHeader text="What We Do" />
          <h1 className="mb-8 mt-4 text-5xl font-medium text-black-2">
            Healthy life with fresh <br /> products
          </h1>
          <p className="max-w-[500px] text-black-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even.
          </p>
        </div>
        <div className="mt-6 flex gap-16">
          <div className="flex items-center gap-4">
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white before:absolute before:h-[115%] before:w-[115%] before:rounded-full before:border before:border-white">
              <p className="text-2xl">90%</p>
            </div>
            <h2 className="text-2xl text-black-3">
              Eco Farms <br /> Worldwide
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white before:absolute before:h-[115%] before:w-[115%] before:rounded-full before:border before:border-white">
              <p className="text-2xl">90%</p>
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
