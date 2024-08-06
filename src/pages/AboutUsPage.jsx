import { AboutCard } from "../components/aboutpage";
import Timeline from "../components/aboutpage/Timeline";
import { MainHeader, SmallHeader } from "../components/general";
import { OurCertificatesSection } from "../components/homepage";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import { aboutData, aboutData2 } from "../constant/constant";

const AboutUsPage = () => {
  return (
    <main>
      <MainHeader
        img={"/images/header-images/contact.png"}
        link={"/about-us"}
        title="About Us"
      />
      <div className="mx-auto my-12 w-full max-w-[1400px] p-2">
        <div className="flex flex-col items-start justify-center gap-y-4">
          <h2 className="text-left text-3xl font-semibold md:text-5xl">
            About Apex Rim International
          </h2>
          <p className="text-justify text-lg font-medium text-black">
            Apex Rim International Exporter is an exporter of Cumin Seed ,
            Fennal Seed , Psyllium Seed , Psyllium Husk , Dill Seed , Coriander
            Seed , Fenugreek Seed , Turmeric Powder , Turmeric Finger , Corom
            Seed ( Ajwan Seed ), Peanut Seed , Hulled Sesame seed , Natural
            Sesame seed , Mustard Seed , Castor Seed , Ground nut , ensure rich,
            Healthy oil seed, Pearl millet, White Sorghum and Wheat. We are well
            supported by our team of highly skilled vendors who possess rich
            industry experience in their respective domains of business
            operations. We have a team of highly experienced professionals, and
            their strong support makes us able to provide the utmost level of
            satisfaction to our clients.
          </p>
          <br />
          <br />
          <SmallHeader text="Who we are" />
          <p className="text-justify text-lg font-medium text-black">
            <strong>Location advantage </strong> We are glad that we are close
            to Kandla and Mundra port, major trading port of Gujarat (India) so
            that our products like Cumin Seed , Fennal Seed, castor seed,
            millet, Sorghum , groundnut, sesame Seed, psyllium Husk can be
            delivered to its destination quickly
          </p>{" "}
          <p className="text-justify text-lg font-medium text-black">
            <strong>Prime Port Locations</strong> We are glad that we are close
            to Kandla and Mundra port, major trading port of Gujarat (India).
          </p>
          {/* <SmallHeader text="Who we are" />
          <h2 className="text-center text-3xl font-medium md:text-5xl">
            Best Agriculture Service
          </h2>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 md:justify-between">
            {aboutData.map((a, i) => (
              <AboutCard img={a.img} label={a.label} title={a.title} key={i} />
            ))}
          </div> */}
          {/* <div className="mt-12 w-full rounded-xl bg-secondary p-6 lg:p-12">
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="col-span-1 flex flex-col items-start justify-center gap-y-8">
                <SmallHeader text="Get to know us" />
                <h2 className="text-left text-4xl font-semibold text-white">
                  Agriculture matters to the future of development
                </h2>
              </div>
              <div className="col-span-1 flex flex-col items-start justify-center gap-y-8">
                <p className="text-sm font-light text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even.
                </p>
              </div>
              <div className="col-span-1 flex flex-col items-start justify-center gap-y-8">
                <img
                  src="/images/about/get-to-know.png"
                  alt="get to know"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center gap-y-8 lg:pl-8">
                {aboutData2.map((a, i) => (
                  <div
                    key={i}
                    className="flex w-full flex-col justify-center gap-8 border-b border-white/40 py-6 lg:flex-row lg:items-center"
                  >
                    <span className="text-5xl font-medium text-white">
                      0{i + 1}
                    </span>
                    <h3 className="text-3xl font-semibold text-white">
                      {a.label}
                    </h3>
                    <p className="text-xl font-medium text-white/90">
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          {/* <div className="mt-12 flex w-full flex-col items-start justify-start">
            <SmallHeader text="Our History" />
            <div className="mt-6 flex w-full flex-col items-center justify-center gap-x-8 md:flex-row">
              <h1 className="w-full items-center justify-between text-3xl font-medium text-black-2 md:text-5xl">
                Farming have been since 1866
              </h1>
              <span className="flex-shrink text-left font-medium text-black-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even.
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* <Timeline /> */}
      <TestimonialsSection />
      <OurCertificatesSection />
    </main>
  );
};

export default AboutUsPage;
