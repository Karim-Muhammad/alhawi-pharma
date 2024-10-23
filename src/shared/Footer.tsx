import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="container mx-auto p-7 my-10">
      <section className="ft-1 bg-white">
        <div className="wrapper p-7 flex md:flex-wrap flex-col md:flex-row space-x-3">
          <div className="address-card basis-full sm:basis-1/2 md:basis-1/3 grow flex items-start space-x-3">
            <img
              className="w-16 h-16 p-2 shadow-lg rounded-full"
              src="/assets/map-address.svg"
            />
            <div className="flex flex-col h-full justify-between py-3">
              <p className="text-lg font-medium">Address</p>
              <p className="text-gray-400">
                9066 Green Lake Drive Chevy Chase, MD 20815
              </p>
            </div>
          </div>
          {/* ./Address Card */}

          <div className="phone-card basis-full sm:basis-1/2 md:basis-1/3 grow flex flex-wrap items-start space-x-3">
            <img
              className="w-16 h-16 p-2 shadow-lg rounded-full"
              src="/assets/phone.svg"
            />
            <div className="flex flex-col h-full justify-between py-3">
              <p className="text-md font-medium uppercase">whatsapp us</p>
              <p className="text-primary font-bold text-lg lg:text-2xl">
                (1800)-88-66-990
              </p>
              <p className="text-gray-400">contact@example.com</p>
            </div>
          </div>
          {/* ./Phone Card */}
        </div>
      </section>
      <section className="ft-2 bg-white flex flex-wrap">
        <div className="col p-5 my-5 grow basis-full md:basis-1/3 lg:basis-1/4 sm:basis-2/3">
          <img src="/assets/logo.jpg" alt="logo" className="w-32 mb-5" />
          <p className="text-gray-400">
            Medilazar Shop is proud of being a best Pharmacy Online shops in USA
            with high-quality medicines, supplements, healthcare product, …
          </p>
        </div>
        <div className="col p-5 grow basis-full md:basis-1/3 lg:basis-1/4 sm:basis-1/3 text-center">
          <h5 className="uppercase font-bold my-5">information</h5>
          <ul className="leading-9">
            <li className="text-gray-500">Newsroom</li>
            <li className="text-gray-500">Sell your Pharmacy</li>
            <li className="text-gray-500">Careers</li>
            <li className="text-gray-500">Investor relationship</li>
          </ul>
        </div>

        <div className="col p-5 grow basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center">
          <h5 className="uppercase font-bold my-5">categories</h5>
          <ul className="leading-9">
            <li className="text-gray-500">Devices</li>
            <li className="text-gray-500">Family care</li>
            <li className="text-gray-500">Fitness</li>
            <li className="text-gray-500">Life Style</li>
          </ul>
        </div>
        <div className="col p-5 grow basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center">
          <h5 className="uppercase font-bold my-5">Our services</h5>
          <ul className="leading-9">
            <li className="text-gray-500">Shipping</li>
            <li className="text-gray-500">Returns</li>
            <li className="text-gray-500">Product recalls</li>
            <li className="text-gray-500">Contact us</li>
          </ul>
        </div>
        <div className="col p-5 grow basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center">
          <h5 className="uppercase font-bold my-5">Socials</h5>
          <ul className="leading-9 mx-auto grid place-content-center">
            <li className="text-gray-500 flex items-center gap-1">
              <Facebook /> Facebook
            </li>
            <li className="text-gray-500 flex items-center gap-1">
              <Instagram /> Instagram
            </li>
            <li className="text-gray-500 flex items-center gap-1">
              <Twitter /> Twitter
            </li>
            <li className="text-gray-500 flex items-center gap-1">
              <Youtube /> Youtube
            </li>
          </ul>
        </div>
      </section>
      <p className="text-center">
        Copyrights &copy; 2024 Alhawi. All rights Reserved
      </p>
    </div>
  );
}
