import useEmblaCarousel from "embla-carousel-react";
import Category from "../components/Category";

export default function Categories() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="container mx-auto p-7 bg-white my-10">
      <div className="section-header">
        <h2 className="text-4xl font-bold my-5">Popular Categories</h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="min-w-[100%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%]">
              <Category
                key={i}
                image={`/assets/categorios-${((i + 1) % 5) + 1}.jpg`}
                name="Category Name"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
