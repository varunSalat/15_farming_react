// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation CSS

// Import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules"; // Import Navigation
import { SmallHeader } from "../general";
import { QuoteIcon, StarIcon } from "lucide-react";

const TestimonialsSection = () => {
  const testimonialsList = [
    {
      star: 4,
      dis: "Apexrim International's grains and spices exceeded our expectations. Exceptional quality and fast delivery have made them our go-to supplier globally.",
      name: "Michael Thompson",
      designation: "Head of Procurement, Global Foods Inc.",
    },
    {
      star: 4,
      dis: "The quality of Apexrim's oil seeds is unmatched. Our production has improved significantly, and our customers are thrilled with the results.",
      name: "Sarah Johnson",
      designation: "CEO, Healthy Oils Co",
    },
    {
      star: 4,
      dis: "We trust Apexrim International for all our agricultural needs. Their commitment to sustainability and quality is truly impressive and reliable.",
      name: "Raj Patel",
      designation: "Patel Organic Farms",
    },
    {
      star: 4,
      dis: "Apexrim's customer service is outstanding. They addressed our concerns promptly, ensuring a seamless experience from order to delivery every time.",
      name: "Emily Chen",
      designation: "Fresh Harvest Corp.",
    },
    {
      star: 4,
      dis: "Our partnership with Apexrim International has boosted our business. Their consistent quality and timely deliveries have been game-changers for us.",
      name: "Carlos Ramirez",
      designation: "Green Valley Imports",
    },
  ];
  return (
    <section className="mx-auto my-16 max-w-[1400px] p-4">
      <div>
        <SmallHeader text="testimonial" />
        <h1 className="mt-6 text-3xl font-medium text-black-2 md:text-5xl">
          What our customers say
        </h1>
      </div>
      <div className="relative mx-auto mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after interactions
          }}
          breakpoints={{
            // when window width is >= 600px
            600: {
              slidesPerView: 2, // Show only 2 slide
              spaceBetween: 10, // Adjust space between slides if needed
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // Show 3 slides
              spaceBetween: 20, // Adjust space between slides if needed
            },
          }}
          modules={[FreeMode, Pagination, Navigation]} // Include Navigation here
          className="mySwiper"
        >
          {testimonialsList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testi-card relative h-[370px] w-[min(400px,100%)] bg-transparent">
                <div className="absolute right-0 grid h-14 w-14 place-items-center rounded-full bg-primary text-black-3">
                  <QuoteIcon />
                </div>
                <div className="p-10">
                  {/* stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((star, i) => (
                      <StarIcon
                        key={i}
                        size={18}
                        className={`border-none text-primary ${i < item.star ? "fill-primary" : ""}`}
                      />
                    ))}
                  </div>
                  {/* dis */}
                  <div className="my-8 text-xl text-black-3">
                    <p>&quot;{item.dis}&quot;</p>
                  </div>
                  {/* Customer */}
                  <div>
                    <h3 className="text-xl">{item.name}</h3>
                    <p className="text-sm text-black-3">{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
