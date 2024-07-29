const Timeline = () => {
  return (
    <section className="my-6">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center">
        {Array.from({ length: 4 }).map((_item, i) => (
          <div key={i} className="w-[min(400px,80%)]">
            <div className="relative mb-4 border-b pb-4 before:absolute before:-bottom-2 before:-left-4 before:z-10 before:block before:h-4 before:w-4 before:rounded-full before:bg-secondary before:content-['']">
              <p className="timeline-text text-4xl md:text-7xl">1987</p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-black-2 md:text-3xl">
                Open My Farm
              </h2>
              <p className="mt-2 text-sm text-black-3">
                Corrupti ut consequatur magni minus! Iusto eos consectetur
                similique minus culpa odio temporibus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
