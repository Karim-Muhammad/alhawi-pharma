import { Search, ShoppingBagIcon, User } from "lucide-react";

export default function QuickBottomMenu() {
  return (
    <div className="lg:hidden bg-gray-600 flex justify-between sticky bottom-0 inset-x-0">
      <User
        size="50"
        color="white"
        className="p-3 border border-white basis-1/3"
      />
      <Search
        size="50"
        color="white"
        className="p-3 border border-white basis-1/3"
      />
      <ShoppingBagIcon
        size="50"
        color="white"
        className="p-3 border border-white basis-1/3"
      />
    </div>
  );
}
