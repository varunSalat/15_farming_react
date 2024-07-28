import { ArrowUpRight } from "lucide-react";
import { SmallHeader } from "../general";
import { services } from "../../constant/constant";

const HeroOurServicesSection = () => {
  return (
    <section className="relative my-16 min-h-[600px] bg-secondary px-4 py-8">
      <div className="mx-auto max-w-[1400px]">
        <div>
          <SmallHeader text="Our Services" />
          <h1 className="mt-2 text-4xl font-medium text-white">
            What We Offer
          </h1>
        </div>
        <img
          src="https://agrimo-demo.pbminfotech.com/html-demo/images/homepage-1/bg/staticbox-bg-img.png"
          className="absolute bottom-0 left-0"
          alt="grass"
        />

        {/* SERVICES LIST */}
        <div className="mt-12 flex flex-wrap justify-between gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="our-service-card group relative z-10 w-[min(400px,100%)] bg-transparent p-[20px]"
            >
              <figure className="h-[250px] overflow-hidden rounded-md">
                <img
                  src={service.img}
                  alt={service.name}
                  className="h-full w-full transition-six-all group-hover:scale-110"
                />
              </figure>
              <div className="mt-2 max-w-[350px] border-b border-black-5 pb-2">
                <p className="flex items-center gap-2 text-sm text-black-3">
                  <span className="block h-2 w-2 rounded-full bg-primary" />
                  {service.category}
                </p>
                <h2 className="my-1 text-2xl font-medium text-black-2">
                  {service.name}
                </h2>
              </div>
              <p className="mt-2 max-w-[300px] text-black-3">{service.dis}</p>
              <div className="absolute -bottom-2 right-2 grid h-12 w-12 place-items-center rounded-full bg-primary text-black-3 transition-three-all group-hover:bg-black-3 group-hover:text-white">
                <ArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroOurServicesSection;
