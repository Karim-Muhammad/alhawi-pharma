type CategoryProps = {
  image: string;
  name: string;
  className?: string;
};

export default function Category({ image, name, className }: CategoryProps) {
  return (
    <div className={"flex flex-col space-y-3 max-w-[200px] " + className}>
      <div className="img-wrapper">
        <img src={image} />
      </div>
      <p className="font-bold text-center">{name}</p>
    </div>
  );
}
