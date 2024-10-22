type StatProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export default function Stat({
  icon,
  title,
  description,
  className,
}: StatProps) {
  return (
    <div className={"card " + className}>
      <img src={icon} className="w-16 h-1w-16 text-center mx-auto" />
      <h5 className="text-4xl font-bold my-1">{title}</h5>
      <p className="font-medium text-gray-400">{description}</p>
    </div>
  );
}
