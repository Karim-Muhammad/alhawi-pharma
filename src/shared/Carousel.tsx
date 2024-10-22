import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

type CarouselProps = {
  slides: React.ReactElement[];
};

export default function Carousel(props: CarouselProps) {
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % props.slides.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + props.slides.length) % props.slides.length);
  };

  const Slide = props.slides[index];

  return (
    <div className="max-w-[1400px] w-full m-auto mb-7 relative group">
      <div key={index} className="slide">
        {Slide}
      </div>

      <div>
        <div
          className="hidden group-hover:block transition-all"
          onClick={handleNext}
        >
          <ChevronLeft className="w-8 h-8 text-white absolute top-1/2 left-4 transform -translate-y-1/2" />
        </div>

        <div
          className="hidden group-hover:block transition-all"
          onClick={handlePrev}
        >
          <ChevronRight className="w-8 h-8 text-white absolute top-1/2 right-4 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
