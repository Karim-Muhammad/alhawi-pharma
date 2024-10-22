import { Percent, Ship } from "lucide-react";
import LeftToRight from "../../../shared/animations/LeftToRight";
import BottomToUp from "../../../shared/animations/BottomToUp";
import UpToBottom from "../../../shared/animations/UpToBottom";
import ShopButton from "../../../shared/ShopButton";

export default function CarouselContent() {
  return (
    <div className="text-center md:text-left w-2/3 mx-auto md:py-7 overflow-hidden">
      <LeftToRight>
        <h2 className="text-[6vw] md:text-3xl lg:text-[4vw] lg:leading-tight font-bold mb-2 md:mb-6">
          Flat 25% Off Medicine order
        </h2>
      </LeftToRight>

      <div className="hidden lg:flex gap-3 flex-wrap mb-2 md:mb-6">
        <BottomToUp>
          <div className="flex items-center gap-1">
            <Percent
              className="w-12 h-12 bg-white rounded-full p-3 mr-1"
              color="black"
            />
            <p className="font-semibold text-md text-sm lg:text-md">
              Win big offers <br /> Every Day
            </p>
          </div>
        </BottomToUp>
        <BottomToUp>
          <div className="flex items-center gap-1">
            <Ship
              className="w-12 h-12 bg-white rounded-full p-2 mr-1"
              color="black"
            />
            <p className="font-semibold text-md text-sm lg:text-md">
              Free Dilvery
            </p>
          </div>
        </BottomToUp>
      </div>

      <div className="discount-coupon mb-2 md:mb-6">
        <p className="text-sm font-semibold">
          Code: <span className="font-bold">SAVE18</span>
        </p>
      </div>

      <UpToBottom>
        <ShopButton />
      </UpToBottom>
    </div>
  );
}
