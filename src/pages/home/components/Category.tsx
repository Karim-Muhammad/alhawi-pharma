type CategoryProps = {
  image: string;
  name: string;
};

export default function Category({ image, name }: CategoryProps) {
  return (
    <div className="flex flex-col space-y-3 max-w-[200px]">
      <div className="img-wrapper p-5 bg-slate-100">
        <img src={image} />
      </div>
      <p className="font-bold text-center">{name}</p>
    </div>
  );
}
