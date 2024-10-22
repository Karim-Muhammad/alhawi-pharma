import Carousel from "../../shared/Carousel";
import CarouselItem from "../../shared/CarouselItem2";
import Footer from "../../shared/Footer";
import Stats from "../../shared/Stats";
import Benefits from "./components/Benefits";
import QuickBottomMenu from "./components/QuickBottomMenu";
import slides from "./mocks/slides";
import Banners from "./sections/Banners";
import Benefits2 from "./sections/Benefits2";
import Brands from "./sections/Brands";
import Categories from "./sections/Categories";
import Headers from "./sections/Headers";
import ProductsSliders from "./sections/ProductsSliders";

export default function HomePage() {
  return (
    <div className="bg-mute">
      <Headers />
      <Benefits />

      <Carousel
        slides={slides.map((s) => (
          <CarouselItem
            mainImage={s.mainImage}
            bgImage={s.bgImage}
            Content={s.Content}
          />
        ))}
      />

      <Banners />
      <Benefits2 />

      <ProductsSliders title="Daily Deal Of The Day" />
      <Brands />
      <ProductsSliders title="Health Products" />
      <Categories />
      <Stats />

      <Footer />
      <QuickBottomMenu />
    </div>
  );
}
