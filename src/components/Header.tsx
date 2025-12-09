import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#9333EA] flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-xl">J</span>
        </div>
        <span className="text-xl font-semibold text-[#171717]">JobHunt</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-[#171717] hover:text-[#9333EA] transition-colors font-medium">
          Find Jobs
        </a>
        <a href="#" className="text-[#171717] hover:text-[#9333EA] transition-colors font-medium">
          Browse Companies
        </a>
      </nav>

      {/* Auth */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-[#171717] hover:text-[#9333EA] transition-colors font-medium">
          Login
        </a>
        <Button className="bg-[#26A4FF] hover:bg-[#1d4ed8] text-white px-6 rounded-md">
          Sign Up
        </Button>
      </div>
    </header>
  );
}

