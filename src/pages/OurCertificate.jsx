import { MainHeader } from "../components/general";
import { OurCertificatesSection } from "../components/homepage";

const OurCertificates = () => {
  return (
    <main>
      <MainHeader
        img={"/images/header-images/certificate.jpg"}
        link={"/our-certificates/"}
        title={"Our Certificates"}
      />
      <div className="mx-auto my-12 w-full max-w-[1400px] p-2">
        <div className="flex w-full flex-col items-center justify-center gap-y-4 rounded-md bg-white p-6 shadow-md">
          <h2 className="text-center text-3xl font-medium md:text-5xl">
            Our Certificate
          </h2>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
            <img
              src={`/images/cert/cert ${i}.jpg`}
              alt="Certificate"
              className="object-contain"
              key={i}
            />
          ))}
        </div>
      </div>
      <OurCertificatesSection />
    </main>
  );
};

export default OurCertificates;
