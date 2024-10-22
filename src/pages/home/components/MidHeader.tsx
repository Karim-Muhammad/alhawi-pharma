import { Heart, MenuIcon, Search } from "lucide-react";
import SideDrawer from "./SideDrawer";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";

export default function MidHeader() {
  return (
    <header>
      <div className="container mx-auto py-4 flex justify-between">
        <div className="lg:basis-1/12">
          <h2>Al-Hawi</h2>
        </div>

        {/* Large Screen */}
        <div className="hidden lg:flex website-header basis-11 grow flex-col">
          <div className="top flex">
            {/* Search */}
            <div className="hidden lg:block lg:basis-8/12">
              {/* Search input */}
              <div className="border border-gray-300 flex">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="border-none p-2 w-full"
                />

                <button className="text-white bg-primary py-2 px-6">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Account + Wishlist + Cart */}
            <div className="hidden lg:flex lg:items-center basis-4/12 lg:justify-end space-x-4">
              {/* User */}
              <div className="user-auth">
                <a href="#" className="text-gray-800 text-sm text-center">
                  Sign up / Sign in
                </a>
              </div>

              {/* Wishlist */}
              <div className="wishlist">
                <a href="#" className="grid place-content-center">
                  <Heart className="w-6 h-6" />
                </a>
              </div>

              {/* Cart */}
              <ShoppingCart />
            </div>
          </div>
          <div className="bottom">
            {/* links */}
            <nav className="flex space-x-4 mt-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-primary transition-colors font-semibold"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-gray-800 hover:text-primary transition-colors font-semibold"
              >
                Shop
              </Link>
              <Link
                to="/"
                className="text-gray-800 hover:text-primary transition-colors font-semibold"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-gray-800 hover:text-primary transition-colors font-semibold"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Small Screen */}
        {/* Hamburger Menu for small screen */}
        <div className="icon lg:hidden">
          <MenuIcon className="w-6 h-6 text-gray-800" />
        </div>
      </div>

      <SideDrawer />
    </header>
  );
}