const popularSearches = ["UI Designer", "UX Researcher", "Android", "Admin"];

export function PopularSearches() {
  return (
    <div className="text-center text-sm text-[#171717] text-opacity-70">
      Popular :{" "}
      {popularSearches.map((search, index) => (
        <span key={search}>
          <span className="text-[#26A4FF] cursor-pointer hover:underline">
            {search}
          </span>
          {index < popularSearches.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}

