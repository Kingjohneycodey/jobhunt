import Image from "next/image";

export function HeroImage() {
  return (
    <div className="flex-1 flex justify-center lg:justify-end">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
        alt="Professional team working together"
        width={600}
        height={600}
        className="w-full max-w-md rounded-lg object-cover"
        priority
      />
    </div>
  );
}

