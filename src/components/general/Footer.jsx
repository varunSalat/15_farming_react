import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      icon: FacebookIcon,
      link: "https://www.facebook.com/",
    },
    {
      icon: TwitterIcon,
      link: "https://www.facebook.com/",
    },
    {
      icon: LinkedinIcon,
      link: "https://www.facebook.com/",
    },
    {
      icon: InstagramIcon,
      link: "https://www.facebook.com/",
    },
  ];
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto flex w-full max-w-[1400px] justify-between gap-12 px-4">
        <div className="max-w-[350px]">
          <figure className="w-[120px]">
            <img
              src="https://apexriminternational.com/assets/logo_without_bg.png"
              alt="apexriminternational"
            />
          </figure>
          <p className="my-2 text-black-3">
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
            risus. In vitae sapien viverra est Duo ei ullum inani senserit.
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
                      socialLink.icon === InstagramIcon
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
                  to={"/"}
                  className="text-sm text-black-3 transition-three-all hover:text-black"
                >
                  Home
                </Link>
                <Link
                  to={"/about-us"}
                  className="text-sm text-black-3 transition-three-all hover:text-black"
                >
                  About Us
                </Link>
                <Link
                  to={"/products"}
                  className="text-sm text-black-3 transition-three-all hover:text-black"
                >
                  Products
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
                  208,Second Floor, Suyash Solitaire, Near Podar International
                  School, Kudasan, Gandhinagar, State: Gujarat, pincode: 382421
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
