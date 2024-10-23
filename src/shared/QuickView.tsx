import CartButton from "./CartButton";
import LoveButton from "./LoveButton";
import QuantityInput from "./QuantityInput";
import Rates from "./Rates";

export default function QuickView() {
  return (
    <article className="w-[90%] lg:w-[70%] h-[500px] mx-auto bg-white overflow-y-auto">
      <div className="container mx-auto p-7 flex flex-col lg:flex-row overflow-y-auto">
        <section className="lg:basis-1/2">
          <div className="image-preview">
            <img src="/assets/product-1.jpg" className="w-full" />
          </div>
        </section>

        <section className="lg:basis-1/2 flex flex-col space-y-3">
          <h4 className="text-3xl font-bold">Waterpik WP-100 - Dental Care</h4>
          <Rates />
          <p className="text-red-500 font-bold text-lg">$118.87</p>
          <p className="text-gray-500 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            itaque quasi corporis dolor, sed consequatur unde quaerat dolores
            vitae, natus voluptatem placeat. Doloremque eveniet necessitatibus
            est hic ad. Accusantium, dolor.
          </p>

          <div className="quantity p-5 my-7 rounded-xl flex flex-col md:flex-row flex-wrap md:items-center md:space-x-3 gap-3 border border-gray-300">
            <p className="font-bold">Quantity:</p>
            <QuantityInput />
            <CartButton full={true} />
            <LoveButton />
          </div>

          <div>
            <div className="sku flex items-center gap-1">
              <h6 className="font-bold uppercase">sku:</h6>
              <p className="text-gray-500">N/A-266</p>
            </div>
            <div className="categories flex items-center gap-1">
              <h6 className="font-bold uppercase">categories:</h6>
              <p className="text-gray-500">Covide Essentails, Devices</p>
            </div>
            <div className="tags flex items-center gap-1">
              <h6 className="font-bold uppercase">tags:</h6>
              <p className="text-gray-500">Juices, Organic</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
