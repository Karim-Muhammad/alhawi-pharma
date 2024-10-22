import CarouselContent from "../components/CarouselContent";

const slides: {
  mainImage: string;
  bgImage: string;
  Content: React.FC;
}[] = [
  {
    mainImage: "/assets/carousel1.png",
    bgImage: "/assets/bg1.jpg",
    Content: CarouselContent,
  },

  {
    mainImage: "./../../../assets/carousel2.png",
    bgImage: "../../../assets/bg2.jpg",
    Content: CarouselContent,
  },
];

export default slides;
