type ProductScaleProps = {
  children: React.ReactNode;
};

export default function ProductScale({ children }: ProductScaleProps) {
  return <div className="group-hover:scale-110 transition-all">{children}</div>;
}
