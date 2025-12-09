import Image from "next/image";

export function HeroContent() {
  return (
    <div className="flex-1">
      <h1 className="text-5xl lg:text-6xl font-bold text-[#171717] mb-4 leading-tight">
        Discover
        <br />
        more than
      </h1>
      <div className="mb-8">
        <span className="text-5xl lg:text-6xl font-bold text-[#26A4FF] relative inline-block">
          5000+ Jobs
          <Image
            src="/vector.png"
            alt="Job search illustration"
            width={500}
            height={500}
            className="w-full max-w-md mt-6"
            priority
          />
        </span>
      </div>
      <p className="text-base lg:text-lg text-[#171717] text-opacity-70 max-w-lg mb-12 leading-relaxed">
        Great platform for the job seeker that searching for new career heights and passionate about startups.
      </p>
    </div>
  );
}

