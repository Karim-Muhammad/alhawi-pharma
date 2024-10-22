import { Eye, Heart, Share, Star } from "lucide-react";
import CartButton from "./CartButton";
import ProductShuffle from "./animations/ProductShuffle";

export default function Product() {
  return (
    <div className="bg-white mx-auto max-w-[320px] group overflow-hidden hover:shadow-xl transition-all">
      <div className="image-preview max-h-[250px] group relative p-4 overflow-hidden">
        {/* <ProductScale> */}
        <ProductShuffle first={true}>
          <img src="/public/assets/product-1.jpg" />
        </ProductShuffle>
        <ProductShuffle first={false}>
          <img src="/public/assets/product-2.jpg" />
        </ProductShuffle>
        {/* </ProductScale> */}

        <div className="image-actions flex flex-col absolute top-1 right-1">
          <div className="p-2 bg-gray-100 rounded-full">
            <Heart className="w-4 h-4" />
          </div>
          <div className="p-2 bg-gray-100 rounded-full translate-x-[100%] group-hover:translate-x-0 transition-all">
            <Share className="w-4 h-4" />
          </div>
          <div className="p-2 bg-gray-100 rounded-full translate-x-[100%] group-hover:translate-x-0 transition-all">
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="content p-4">
        <div className="product-brand text-sm font-semibold text-gray-500">
          Fitness Sexual willness
        </div>

        <h3 className="text-lg font-bold">High Quality Topical</h3>

        <div className="rates flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3" color="orange" />
          ))}
        </div>

        <div className="price flex items-center space-x-1">
          <div className="pure">
            <span className="text-lg font-bold text-red-500">$49.99</span>
          </div>
          <div className="discount">
            <span className="text-sm text-gray-500 line-through font-medium">
              $99.99
            </span>
          </div>
        </div>

        <CartButton />
      </div>
    </div>
  );
}
