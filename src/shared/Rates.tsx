import { Star } from "lucide-react";

export default function Rates() {
  return (
    <div className="rates flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3" color="orange" />
      ))}
    </div>
  );
}
