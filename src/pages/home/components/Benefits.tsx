import {
  BookPlus,
  Cross,
  HeartPulse,
  NotepadText,
  PillBottle,
} from "lucide-react";
import MiniCard from "./MiniCard";

export default function Benefits() {
  return (
    <div className="hidden md:flex flex-wrap container mx-auto justify-between my-3">
      <MiniCard
        title="Medicine"
        description="Over 25000 products"
        Icon={PillBottle}
        color="bg-blue-100"
      />
      <MiniCard
        title="Wellness"
        description="Health products"
        Icon={Cross}
        color="bg-pink-100"
      />
      <MiniCard
        title="Diagnostic"
        description="Book tests"
        Icon={NotepadText}
        color="bg-green-100"
      />
      <MiniCard
        title="Health Corner"
        description="Trending from health experts"
        Icon={HeartPulse}
        color="bg-purple-100"
      />
      <MiniCard
        title="Others"
        Icon={BookPlus}
        description="More info"
        color="bg-yellow-100"
      />
    </div>
  );
}
