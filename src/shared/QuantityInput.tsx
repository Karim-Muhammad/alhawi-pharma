import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Minus className="w-4 h-4" onClick={() => setQuantity(quantity - 1)} />
      <input type="number" />
      <Plus className="w-4 h-4" onClick={() => setQuantity(quantity + 1)} />
    </div>
  );
}
