import { LeafIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MainHeader } from "../components/general";
import { OurCertificatesSection } from "../components/homepage";

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
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-fit items-center gap-x-1 rounded-full border border-black-5 bg-white p-2 md:px-6 md:py-4">
            <LeafIcon className="h-6 w-6 text-secondary md:h-12 md:w-12" />
            <h3 className="text-xl text-black-3 sm:text-2xl md:text-3xl lg:text-4xl">
              Our Products
            </h3>
          </div>
          <div className="flex w-full flex-wrap justify-between gap-12">
            {data &&
              data.map((d) => (
                <Link
                  key={d.id}
                  to={"/products/" + d.url}
                  className="group relative aspect-video w-full max-w-[30%] overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    alt={d.title}
                    src={"/images/products/" + d.img}
                    className="absolute w-full object-cover object-center transition-three-all group-hover:scale-110"
                  />
                  <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-30"></div>
                  <div className="transition-all absolute -bottom-60 left-1/2 z-20 flex w-[90%] -translate-x-1/2 scale-0 flex-col items-start justify-center gap-y-2 rounded-md bg-white px-4 py-2 duration-500 group-hover:bottom-5 group-hover:scale-100">
                    <div className="flex items-center justify-start gap-x-2">
                      <span className="block h-2 w-2 rounded-full bg-yellow-400"></span>
                      <p>{d.type}</p>
                    </div>
                    <p className="text-3xl">{d.title}</p>
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
