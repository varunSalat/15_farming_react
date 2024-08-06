import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainHeader, SmallHeader } from "../components/general";
import { OurCertificatesSection } from "../components/homepage";

const SingleProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch("https://apexriminternational.com/api/products.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug: id,
        }),
      }).then((res) =>
        res.json().then((res) => {
          setData(res.data);
        }),
      );
    }
  }, [id]);

  if (!data) return;

  return (
    <main>
      <MainHeader
        img={"/images/header-images/product.jpg"}
        link={"/products/" + data.url}
        title={data.name}
      />

      <div className="mx-auto my-12 w-full max-w-[1400px] p-2">
        <div className="flex w-full flex-col items-start justify-center gap-y-4 rounded-md bg-white p-6 shadow-md">
          <SmallHeader text="Product Details" />
          <h2 className="text-left text-4xl font-semibold text-secondary">
            {data.name}
          </h2>
          <img
            src={"/images/single/" + data.img}
            alt={data.name}
            className="aspect-video h-full w-full max-w-xl rounded-md object-cover shadow-md"
          />
          {/* <p
            className="text-justify text-lg font-medium leading-8"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p> */}
          <h3 className="mt-6 text-2xl font-semibold text-gray-700">
            Physical Property
          </h3>
          <ul className="ml-8 list-disc space-y-2 text-lg">
            <li>{data.shape}</li>
            <li>{data.appearance}</li>
            <li>{data.taste}</li>
          </ul>
          <h3 className="mt-6 text-2xl font-semibold text-gray-700">
            Chemical Property
          </h3>
          <ul className="ml-8 list-disc space-y-2 text-lg">
            <li>{data.odor}</li>
            <li>{data.solubility}</li>
            <li>{data.density}</li>
          </ul>
          {/* <h3 className="mt-6 text-2xl font-semibold text-gray-700">
            Other Details
          </h3>
          <p className="text-justify text-lg">{data.details}</p> */}
        </div>
      </div>

      <OurCertificatesSection />
    </main>
  );
};

export default SingleProductPage;
