import ContactForm from "../components/contactpage/ContactForm";
import { SmallHeader } from "../components/general";
import MainHeader from "../components/general/MainHeader";
import OurCertificatesSection from "../components/homepage/OurCertificatesSection";
import LinkBox from "../components/other/LinkBox";
import { Mail, MapPin, PhoneCall } from "lucide-react";

export const contactData = [
  {
    icon: <Mail size={36} strokeWidth={1} />,
    name: "Mail us 24/7",
    dis: "info@apexriminternational.com",
  },
  {
    icon: <PhoneCall size={36} strokeWidth={1} />,
    name: "Call us 24/7",
    dis: "Phone: +91 720 106 5314 ",
  },
  {
    icon: <MapPin size={36} strokeWidth={1} />,
    name: "Our Location",
    dis: "208,Second Floor, Suyash Solitaire, Near Podar International School, Kudasan, Gandhinagar, State: Gujarat,pincode: 382421",
  },
];

const ContactUsPage = () => {
  return (
    <main>
      <MainHeader
        img={"/images/header-images/contact.png"}
        link={"/contact-us"}
        title="Contact Us"
      />
      <div className="mx-auto mt-12 w-full max-w-[1400px]">
        <div className="flex flex-wrap items-center justify-center gap-4 p-2">
          {contactData.map((c, i) => (
            <LinkBox key={i} dis={c.dis} icon={c.icon} name={c.name} />
          ))}
        </div>
        <div className="mt-12 w-full p-2">
          <div className="grid w-full rounded-2xl bg-white md:grid-cols-5">
            <div className="w-full rounded-l-2xl md:col-span-2">
              <img
                src="/images/other/contact-form-side.png"
                className="h-full w-full rounded-l-2xl object-cover"
              />
            </div>
            <div className="w-full rounded-r-2xl md:col-span-3 md:pl-12">
              <div className="flex min-h-[500px] flex-col items-start justify-center bg-[url('/images/other/contact.png')] bg-contain bg-bottom bg-no-repeat px-4 md:min-h-[800px]">
                <SmallHeader text="Get to Contact us" />
                <h2 className="my-2 max-w-[80%] text-left text-3xl font-medium md:text-5xl">
                  Have a any Questions? Get in Touch!
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8224278001276!2d72.62864237601121!3d23.17668021055834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b2c3ddf6e27%3A0x870d5acb226b7b5a!2sApex%20RIm%20International!5e0!3m2!1sen!2sin!4v1722150092092!5m2!1sen!2sin"
          width="600"
          height="450"
          className="my-12 min-h-[600px] w-full border-none"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <OurCertificatesSection />
    </main>
  );
};

export default ContactUsPage;
