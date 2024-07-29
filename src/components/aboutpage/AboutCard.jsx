const AboutCard = ({ img, label, title }) => {
  return (
    <div className="relative w-[min(300px,100%)] rounded-xl bg-white pb-6">
      <div className="flex w-full items-center justify-center px-6 py-8">
        <img
          src={img}
          alt="service-1"
          className="aspect-square h-[200px] w-[200px] rounded-full border-4 border-green object-cover"
        />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <div className="h-2 w-2 rounded-full bg-green"></div>
        <p className="font-medium uppercase text-gray-400">{label}</p>
      </div>
      <div className="flex items-center justify-center">
        <h3 className="text-center text-3xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default AboutCard;
