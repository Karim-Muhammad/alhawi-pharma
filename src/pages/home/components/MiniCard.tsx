type MiniCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  title: string;
  description: string;
  className?: string;
};

export default function MiniCard(props: MiniCardProps) {
  return (
    <div className={`flex gap-2 p-4 ${props.className} basis-1/3 lg:basis-1/5`}>
      <div className={`card-icon ${props.color} self-start p-2 rounded-full`}>
        <props.Icon className="w-6 h-6 rounded-full" />
      </div>

      <div className="card-info">
        <h3 className="text-lg font-semibold mt-4">{props.title}</h3>
        <p className="text-gray-500 mt-2">{props.description}</p>
      </div>
    </div>
  );
}
