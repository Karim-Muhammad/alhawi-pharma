type StatProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Stat({ icon, title, description }: StatProps) {
  return (
    <div className="card">
      <img src={icon} className="w-16 h-1w-16" />
      <h5 className="text-4xl font-bold my-1">{title}</h5>
      <p className="font-medium text-gray-400">{description}</p>
    </div>
  );
}
