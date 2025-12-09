import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
      <HeroContent />
      <HeroImage />
    </div>
  );
}

