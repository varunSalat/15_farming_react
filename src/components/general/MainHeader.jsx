import { Link } from "react-router-dom";

const MainHeader = ({ img, title, link }) => {
  return (
    <section className="relative m-4">
      <div className="h-[400px] overflow-hidden rounded-2xl">
        <img
          src={img}
          className="aspect-video h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute top-1/2 p-2 text-white md:left-60 md:-translate-y-1/2">
        <h1 className="my-4 w-fit text-4xl font-medium">{title}</h1>
        <p className="flex items-center justify-start gap-x-2">
          <Link to={"/"} className="text-lg font-semibold uppercase">
            Apex
          </Link>
          <span className="text-lg font-semibold uppercase">{`>`}</span>
          <Link className="text-lg font-semibold uppercase" to={link}>
            {title}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default MainHeader;
