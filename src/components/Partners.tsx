import Image from "next/image";

const partners = [
  { name: "Vodafone", logo: "/brands/vodafone.png" },
  { name: "Intel", logo: "/brands/intel.png" },
  { name: "Tesla", logo: "/brands/tesla.png" },
  { name: "AMD", logo: "/brands/amd.png" },
  { name: "Talkit", logo: "/brands/talkit.png" },
];

export function Partners() {
  return (
    <section className="py-16">
      <h2 className="text-lg text-gray-400 mb-8">Companies we helped grow</h2>
      <div className="flex flex-wrap items-center justify-start gap-8 md:gap-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              className="object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

