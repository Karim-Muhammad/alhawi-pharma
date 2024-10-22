import {
  CreditCard,
  HandCoins,
  HeartHandshake,
  HelpCircle,
  Ship,
} from "lucide-react";
import MiniCard from "../components/MiniCard";

export default function Benefits2() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap container mx-auto">
      <MiniCard
        title="Free Shipping"
        description="For all orders over $100"
        Icon={Ship}
        color="bg-blue-100"
      />
      <MiniCard
        title="Safe Payment"
        description="100% secure payment"
        Icon={CreditCard}
        color="bg-pink-100"
      />
      <MiniCard
        title="Shop with Confidence"
        description="24/7 customer support"
        Icon={HandCoins}
        color="bg-green-100"
      />
      <MiniCard
        title="Help Center"
        description="Visit our support center"
        Icon={HeartHandshake}
        color="bg-purple-100"
      />
      <MiniCard
        title="Friendly Support"
        Icon={HelpCircle}
        description="More info"
        color="bg-yellow-100"
      />
    </div>
  );
}
