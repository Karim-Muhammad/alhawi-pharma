import { ShoppingCart } from "lucide-react";
import { cn } from "./utils";

type CartButtonProps = {
  full?: boolean;
};

export default function CartButton({ full = false }: CartButtonProps) {
  return (
    <div
      className={cn([
        {
          "flex items-center space-x-2 mt-3 md:m-0": true,
          "bg-primary text-white px-5 py-3 rounded-full w-fit": full,
        },
      ])}
    >
      <div
        className={cn({
          "icon bg-primary p-2 rounded-full": !full,
        })}
      >
        <ShoppingCart className="w-5 h-5 text-white" />
      </div>

      <p className={full ? "uppercase font-medium text-sm" : ""}>Add to cart</p>
    </div>
  );
}
