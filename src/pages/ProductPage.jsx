import { LeafIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MainHeader, SmallHeader } from "../components/general";
import { OurCertificatesSection } from "../components/homepage";
import { scrollToTop } from "../utils/generalFunctions";

const ProductPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://apexriminternational.com/api/products.php", {
      method: "GET",
    }).then((res) =>
      res.json().then((res) => {
        setData(res.data);
      }),
    );
  }, []);

  return (
    <main>
      <MainHeader
        img={"/images/header-images/contact.png"}
        link={"/products"}
        title="Product Page"
      />
      <div className="mx-auto my-12 w-full max-w-[1400px] p-2">
        <div className="flex w-full flex-col items-center justify-between gap-6">
          <SmallHeader text="Our Product" />
          <h1 className="text-center text-3xl font-medium text-black-2 md:text-5xl">
            What We Sell
          </h1>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-y-4 md:mt-20">
          <div className="flex w-full flex-wrap justify-center gap-12">
            {data &&
              data.map((d) => (
                <Link
                  key={d.id}
                  to={"/products/" + d.url}
                  onClick={() => scrollToTop()}
                  className="group relative aspect-video w-[min(400px,100%)] overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    alt={d.title}
                    src={"/images/products/" + d.img}
                    className="absolute w-full object-cover object-center transition-three-all group-hover:scale-110"
                  />
                  <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                  <div className="absolute bottom-0 z-20 flex flex-col items-start justify-center gap-y-2 rounded-md bg-white px-4 py-2 transition-all duration-500 group-hover:bottom-5 group-hover:scale-100 md:-bottom-60 md:left-1/2 md:w-[90%] md:-translate-x-1/2 md:scale-0">
                    <div className="hidden items-center justify-start gap-x-2 md:flex">
                      <span className="block h-2 w-2 rounded-full bg-yellow-400"></span>
                      <p>{d.type}</p>
                    </div>
                    <p className="text-md md:text-3xl">{d.title}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <OurCertificatesSection />
    </main>
  );
};

export default ProductPage;
