import useEmblaCarousel from "embla-carousel-react";
import Brand from "../components/Brand";

export default function Brands() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="container mx-auto p-7">
      <div className="section-header">
        <h2 className="text-4xl font-bold my-5">Featured Brands</h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="min-w-[100%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%]">
              <Brand
                key={i}
                bgImage={`/assets/brand-${((i + 1) % 4) + 1}.jpg`}
                brandImage="/assets/logo.jpg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
