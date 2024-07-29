import { AboutCard } from "../components/aboutpage";
import Timeline from "../components/aboutpage/Timeline";
import { MainHeader, SmallHeader } from "../components/general";
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
        <div className="flex flex-col items-center justify-center gap-y-4">
          <SmallHeader text="Who we are" />
          <h2 className="text-center text-3xl font-medium md:text-5xl">
            Best Agriculture Service
          </h2>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 md:justify-between">
            {aboutData.map((a, i) => (
              <AboutCard img={a.img} label={a.label} title={a.title} key={i} />
            ))}
          </div>
          <div className="mt-12 w-full rounded-xl bg-secondary p-6 lg:p-12">
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
          </div>
          <div className="mt-12 flex w-full flex-col items-start justify-start">
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
          </div>
        </div>
      </div>
      <Timeline />
      <TestimonialsSection />
    </main>
  );
};

export default AboutUsPage;
