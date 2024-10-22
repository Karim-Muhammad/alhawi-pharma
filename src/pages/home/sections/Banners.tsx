import Banner from "../../../shared/Banner";
import ShopButton from "../../../shared/ShopButton";

export default function Banners() {
  return (
    <section className="flex flex-col md:flex-row flex-wrap w-full">
      <Banner bgImage="/assets/h1-banner01.jpg" className="basis-1/3 grow p-1">
        <div className="text-white space-y-2 flex flex-col justify-between gap-9">
          <div className="top">
            <h4 className="text-2xl font-bold font-cairo">طبيعي جداً</h4>
            <p className="uppercase font-bold">Up to 25% off</p>
          </div>
          <div className="shop-link mt-auto">
            <ShopButton className="block" />
          </div>
        </div>
      </Banner>
      <div className="flex flex-col basis-1/3 grow p-1">
        <Banner bgImage="/assets/h1-banner02.jpg">
          <div className="text-white space-y-2 flex flex-col justify-between gap-9">
            <div className="top leading-tight">
              <p className="uppercase font-bold">Daily Health</p>
              <h4 className="text-2xl font-bold">Essentials</h4>
            </div>
            <div className="shop-link mt-auto">
              <ShopButton className="block" />
            </div>
          </div>
        </Banner>
        <Banner bgImage="/assets/h1-banner03.jpg">
          <div className="text-white space-y-2 flex flex-col justify-between gap-9">
            <div className="top leading-tight">
              <p className="uppercase font-bold">Medicines</p>
              <h4 className="text-2xl font-bold">Medfinder</h4>
            </div>
            <p>
              Price: <sup>$</sup> 290 <sup>99</sup>
            </p>
          </div>
        </Banner>
      </div>
      <Banner bgImage="/assets/h1-banner04.jpg" className="basis-1/3 grow p-1">
        <div className="text-white space-y-2 flex flex-col justify-between gap-9">
          <div className="top">
            <h4 className="text-2xl font-bold">Health Products</h4>
            <p className="uppercase font-bold">
              Up to <span className="font-bold">25% off</span>
            </p>
          </div>
          <div className="shop-link mt-auto">
            <ShopButton className="block" />
          </div>
        </div>
      </Banner>
    </section>
  );
}
