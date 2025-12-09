"use client";

import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function JobSearchBar() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 shadow-sm max-w-4xl mx-auto mb-4">
      {/* Job Search Input */}
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-md">
        <Search className="w-5 h-5 text-gray-400 shrink-0" />
        <Input
          type="text"
          placeholder="Job title or keyword"
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto bg-transparent"
        />
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 bg-gray-200" />

      {/* Location Select */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-md">
        <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
        <Select defaultValue="florence">
          <SelectTrigger className="border-0 focus:ring-0 w-auto p-0 h-auto bg-transparent shadow-none">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="florence">Florence, Italy</SelectItem>
            <SelectItem value="milan">Milan, Italy</SelectItem>
            <SelectItem value="rome">Rome, Italy</SelectItem>
            <SelectItem value="naples">Naples, Italy</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Button */}
      <Button className="bg-[#26A4FF] hover:bg-[#1d4ed8] text-white px-6 sm:px-8 py-3 sm:py-6 h-auto whitespace-nowrap rounded-md">
        Search my job
      </Button>
    </div>
  );
}

