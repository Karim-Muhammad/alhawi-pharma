import { MenuIcon } from "lucide-react";

type MenuItemProps = {
  name: string;
  nested?: boolean;
};

export default function MenuItem({ name, nested }: MenuItemProps) {
  return (
    <div className="menu-item p-2 relative border-y border-gray-300">
      {name}

      {nested && (
        <span className="absolute inset-y-0 right-0 border-l border-l-gray-300 grid place-content-center p-3">
          <MenuIcon className="w-3 h-3 text-black font-extrabold" />
        </span>
      )}
    </div>
  );
}
