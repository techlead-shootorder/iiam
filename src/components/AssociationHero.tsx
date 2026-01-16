type Props = { data: any };

export default function AssociationHero({ data }: Props) {
  const image = data?.BannerImage?.url
    ? `http://127.0.0.1:1337${data.BannerImage.url}`
    : "";

  return (
    <section className="relative w-full h-[460px] overflow-hidden">
      <img
        src={image}
        alt={data?.PageTitle}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <span className="text-sm uppercase tracking-wider text-sky-300 mb-2">
          {data?.PageTitle}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl">
          {data?.BannerHeading}
        </h1>

        {data?.BannerDescription && (
          <p className="mt-4 text-lg max-w-2xl text-white/90">
            {data.BannerDescription}
          </p>
        )}
      </div>
    </section>
  );
}
