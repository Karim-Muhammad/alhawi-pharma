import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="container mx-auto p-7 bg-white">
      <div className="flex flex-wrap gap-5">
        <div className="min-w-[calc(90%/4)] grow">
          <Stat
            icon="/assets/home.svg"
            title="100 Lakh+"
            description="Families Saved"
            className="mx-auto text-center"
          />
        </div>
        <div className="min-w-[calc(90%/4)] grow">
          <Stat
            icon="/assets/ambulance.svg"
            title="1.5 Crore+"
            description="Orders Delivered"
            className="mx-auto text-center"
          />
        </div>
        <div className="min-w-[calc(90%/4)] grow">
          <Stat
            icon="/assets/map.svg"
            title="22000 +"
            description="Pincodes Served"
            className="mx-auto text-center"
          />
        </div>
        <div className="min-w-[calc(90%/4)] grow">
          <Stat
            icon="/assets/medicine.svg"
            title="10 Lakl +"
            description="Medicines Available"
            className="mx-auto text-center"
          />
        </div>
      </div>
    </section>
  );
}
