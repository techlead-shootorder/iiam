const API = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") || "http://admin.iaamonline.org";

import LazyImage from "@/components/common/LazyImage";

type Props = {
  data: any;
};

export default function HeroSection({ data }: Props) {
  const hero = data?.HeroBanner;

  const imageUrl = hero?.HeroBanner?.url? `${API}${hero.HeroBanner.url}`: "";
  const dynamicLabel = hero?.HeroBannerButtonLabel;
  const dynamicLink = hero?.HeroBannerButtonLink;

  const staticLabel = "Join or Renew Membership";
  const staticLink = "/membership";

  const ctaLabel = dynamicLabel || staticLabel;
  const ctaLink = dynamicLink || staticLink;

  return (
  <section className="relative w-full h-[460px] bg-black">

  {/* IMAGE */}
  {imageUrl && (
    <LazyImage
      src={imageUrl}
      alt={data?.PageTitle || "Hero"}
      fill
      className="object-cover"
      containerClassName="absolute inset-0"
      priority
    />
  )}

  {/* CONTENT */}
  <div className="absolute inset-0 flex items-start justify-start z-10">
    <div className="w-full max-w-7xl px-6 text-white pt-24">
      
      <span className="text-sm uppercase tracking-wider mb-3 block">
        {data?.PageTitle}
      </span>

      <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight">
        {hero?.HeroBannerTitle}
      </h1>

      {hero?.HeroBannerDescription && (
        <p className="mt-4 text-lg max-w-2xl">
          {hero.HeroBannerDescription}
        </p>
      )}

      <div className="mt-6">
        <a
          href={ctaLink}
          className="bg-blue-600 px-8 py-3 rounded-md font-semibold"
        >
          {ctaLabel}
        </a>
      </div>

    </div>
  </div>
</section>

  );
}
