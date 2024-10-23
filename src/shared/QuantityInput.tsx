import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="relative w-[120px]">
      <button className="absolute top-1/2 -translate-y-1/2 left-2">
        <Minus className="w-4 h-4" onClick={() => setQuantity(quantity - 1)} />
      </button>
      <input
        type="number"
        value={quantity}
        className="w-full p-3 rounded-3xl text-center border border-gray-300"
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-2">
        <Plus className="w-4 h-4" onClick={() => setQuantity(quantity + 1)} />
      </button>
    </div>
  );
}
