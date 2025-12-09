import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { JobSearchBar } from "@/components/JobSearchBar";
import { PopularSearches } from "@/components/PopularSearches";
import { Partners } from "@/components/Partners";
import { CategorySection } from "@/components/CategorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <JobSearchBar />
          <PopularSearches />
        </div>
      </main>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <Partners />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <CategorySection />
        </div>
      </div>
    </div>
  );
}
