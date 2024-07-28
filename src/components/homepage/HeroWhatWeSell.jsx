import Marquee from "react-fast-marquee";

const HeroWhatWeSell = () => {
  const sellList = ["Agriculture", "Farming", "Organic", "Vegetables", ""];
  return (
    <section className="my-8">
      <Marquee>
        {sellList.map((item, i) => (
          <p
            key={i}
            className="marque-text-effect mx-4 flex items-center gap-8 text-8xl font-bold transition-three-all"
          >
            {sellList.length - 1 !== i && (
              <span className="text-fill-color mt-8 text-secondary">*</span>
            )}
            {item}
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default HeroWhatWeSell;
