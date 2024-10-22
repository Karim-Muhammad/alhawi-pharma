import useEmblaCarousel from "embla-carousel-react";
import Product from "../../../shared/Product";

type ProductsSlidersProps = {
  title: string;
};

export default function ProductsSliders({ title }: ProductsSlidersProps) {
  const [emblaRef] = useEmblaCarousel({});

  return (
    <section className="container mx-auto bg-white p-7 rounded-xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-5">{title}</h2>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              className="min-w-full sm:min-w-[50%] md:min-w-[30%] lg:min-w-[20%]"
              key={i}
            >
              <Product key={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
