import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "./utils";

export default function LoveButton() {
  const [active, setActive] = useState(false);
  return (
    <div className="favourite">
      <Heart
        className={cn([
          {
            "w-8 h-8 p-2 rounded-full": true,
            "text-primary bg-white": active,
            "text-white bg-primary": !active,
          },
        ])}
        onClick={() => setActive((p) => !p)}
      />
    </div>
  );
}
