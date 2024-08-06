import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/generalFunctions";

const Footer = () => {
  const socialLinks = [
    {
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/kalpesh-mali-47873a269",
    },
    {
      icon: YoutubeIcon,
      link: "https://youtube.com/@apexriminternational?si=bfdMeXf1Mnh_44Vu",
    },
    {
      icon: InstagramIcon,
      link: "https://www.instagram.com/apexriminternational",
    },
  ];

  return (
    <footer className="bg-white py-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-between gap-12 px-4 lg:flex-row">
        <div className="max-w-[350px]">
          <figure className="w-[120px]">
            <img src="/logo.png" alt="apexriminternational" />
          </figure>
          <p className="my-2 text-justify text-black-3">
            At Apex Rim International, we specialize in exporting the finest
            spices and agricultural products from around the world. Our
            commitment to quality and sustainability ensures that every shipment
            meets the highest standards. With a global network and a passion for
            excellence, we deliver unparalleled flavor and freshness to our
            clients.
          </p>
          <div className="mt-6 flex gap-4">
            {socialLinks.map((socialLink, i) => (
              <a
                key={i}
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-black-5 text-transparent"
              >
                {
                  <socialLink.icon
                    size={20}
                    className={
                      socialLink.icon !== LinkedinIcon
                        ? "text-secondary"
                        : "fill-secondary"
                    }
                  />
                }
              </a>
            ))}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-medium text-black-2">
            Elevate Your Global Reach with Premium Agricultural Products <br />
            from Apexrim International.
          </h1>
          <div className="mt-4 flex flex-wrap justify-between gap-12">
            <div>
              <h2 className="font-medium text-black-3">Useful Link</h2>
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  onClick={() => scrollToTop()}
                  to={"/privacy-policy"}
                  className="text-sm text-black-3 transition-three-all hover:text-black"
                >
                  Privacy Policy
                </Link>
                <Link
                  onClick={() => scrollToTop()}
                  to={"/terms-condition"}
                  className="text-sm text-black-3 transition-three-all hover:text-black"
                >
                  Terms & Conditions
                </Link>
                <Link
                  onClick={() => scrollToTop()}
                  to={"/products"}
                  className="text-sm text-black-3 transition-three-all hover:text-black"
                >
                  Sitemap
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-medium text-black-3">Working Time</h2>
              <div className="mt-2 flex flex-col gap-2 text-black-3">
                <p>Mon - Fri: 9.00am - 5.00pm </p>
                <p>Saturday: 10.00am - 6.00pm</p>
                <p>Sunday Closed</p>
              </div>
            </div>
            <div className="max-w-[400px]">
              <h2 className="font-medium text-black-3">Our Address</h2>
              <div className="mt-2 flex flex-col gap-2 text-black-3">
                <p>
                  Head Office :- 208, Second Floor , Suyash Solitaire , Near
                  Podar International School , Kudasan , Gandhinagar , Gujarat ,
                  India
                </p>
                <p>
                  warehouse Address :- Survey No -28 Thakorvas , Ogadnath Temple
                  Road ,Ogadpura , Deodar Banaskantha, Gujarat , India
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
