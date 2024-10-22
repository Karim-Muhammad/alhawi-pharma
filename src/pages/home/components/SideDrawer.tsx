import { X } from "lucide-react";
import MenuItem from "./MenuItem";
import { cn } from "../../../shared/utils";

type SideDrawerProps = {
  open: boolean;
  closeHandler: () => void;
};

export default function SideDrawer({ open, closeHandler }: SideDrawerProps) {
  return (
    <div
      className={cn([
        {
          "absolute bg-white lg:hidden transition-all": true,
          "translate-x-0 opacity-100 visible block sticky": open,
          "-translate-x-full opacity-0 invisible": !open,
        },
      ])}
    >
      <div className="top-menu-item bg-gray-300 p-2">
        <X
          className="w-3 h-3 text-black ml-auto font-bold"
          onClick={closeHandler}
        />
      </div>

      <MenuItem name="Home" />
      <MenuItem name="About us" />
      <MenuItem name="Products" nested />
    </div>
  );
}
