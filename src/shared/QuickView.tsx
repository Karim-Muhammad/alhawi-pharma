import QuantityInput from "./QuantityInput";
import Rates from "./Rates";

export default function QuickView() {
  return (
    <article className="flex flex-col">
      <section>
        <div className="image-preview">
          <img src="/assets/product-1.jpg" className="w-full" />
        </div>
      </section>
      <section>
        <h4 className="text-4xl text-bold">Waterpik WP-100 - Dental Care</h4>
        <Rates />
        <p className="text-red-500 tex-bold">$118.87</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque itaque
          quasi corporis dolor, sed consequatur unde quaerat dolores vitae,
          natus voluptatem placeat. Doloremque eveniet necessitatibus est hic
          ad. Accusantium, dolor.
        </p>

        <div className="quantity flex space-x-3">
          <p>
            Quantity: <QuantityInput />{" "}
          </p>
        </div>
      </section>
    </article>
  );
}
