type ProductShuffleProps = {
  children: React.ReactNode;
  first?: boolean;
};

export default function ProductShuffle({
  children,
  first = true,
}: ProductShuffleProps) {
  return (
    <div
      className={`transition-all ${
        first ? "group-hover:translate-y-full" : "group-hover:-translate-y-full"
      } ${
        !first
          ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
          : ""
      }`}
    >
      {children}
    </div>
  );
}
