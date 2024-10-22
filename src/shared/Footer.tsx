export default function Footer() {
  return (
    <div className="container mx-auto p-7 my-10 bg-white">
      <section className="ft-1">
        <div className="wrapper p-7 flex flex-col md:flex-row space-x-3">
          <div className="address-card flex items-start space-x-3">
            <div className="p-2 shadow-lg w-fit rounded-full">
              <img className="w-20 h-20" src="/assets/map-address.svg" />
            </div>
            <div className="flex flex-col h-full justify-between py-3">
              <p className="text-lg font-semibold">Address</p>
              <p className="text-gray-400">
                9066 Green Lake Drive Chevy Chase, MD 20815
              </p>
            </div>
          </div>
          {/* ./Address Card */}

          <div className="phone-card flex items-start space-x-3">
            <div className="p-2 shadow-lg w-fit rounded-full">
              <img className="w-20 h-w-20" src="/assets/phone.svg" />
            </div>
            <div className="flex flex-col h-full justify-between py-3">
              <p className="text-lg font-semibold uppercase">whatsapp us</p>
              <p className="text-primary font-bold text-2xl">
                (1800)-88-66-990
              </p>
              <p className="text-gray-400">contact@example.com</p>
            </div>
          </div>
          {/* ./Phone Card */}
        </div>
      </section>
      <section className="ft-2"></section>
    </div>
  );
}
