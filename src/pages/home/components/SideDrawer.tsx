import { X } from "lucide-react";
import MenuItem from "./MenuItem";

export default function SideDrawer() {
  return (
    <div className="w-80 lg:hidden">
      <div className="top-menu-item bg-gray-300 p-2">
        <X className="w-3 h-3 text-black ml-auto font-bold" />
      </div>

      <MenuItem name="Home" />
      <MenuItem name="About us" />
      <MenuItem name="Products" nested />
    </div>
  );
}
