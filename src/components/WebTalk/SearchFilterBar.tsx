import { ChevronDown, Search } from "lucide-react";

const CATEGORIES = [
  'All',
  'Research Highlights',
  'Keynote Lectures',
  'Panel Discussions',
  'Workshops',
  'Member Spotlights',
  'Conferences',
];

export default function SearchFilterBar({
  search, setSearch, filterCategory, setFilterCategory, filterSort, setFilterSort, isShrunk = false,
}: {
  search: string;
  setSearch: (v: string) => void;
  filterCategory: string;
  setFilterCategory: (v: string) => void;
  filterSort: string;
  setFilterSort: (v: string) => void;
  isShrunk?: boolean;
}) {
  return (
    <div className="w-full bg-[#F6F6F6] border-b border-[#E7E7E7] fixed z-20">
      <div className={`max-w-[1440px] mx-auto px-4 lg:px-[30px] transition-all duration-200 ${isShrunk ? 'py-[8px]' : 'py-[14px]'}`}>
        <div className="flex flex-col sm:flex-row items-stretch gap-3">

          {/* Search input */}
          <div
            className={
              `flex items-center gap-3 bg-white rounded-[5px] border border-[#D1CFCF] flex-1 min-w-0 transition-all duration-200 ` +
              (isShrunk ? 'px-[10px] py-[6px] h-[40px]' : 'px-[11px] py-[8px] h-[52px]')
            }
          >
            <Search size={isShrunk ? 18 : 20} className="text-[#696969] flex-shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className={
                `flex-1 bg-transparent outline-none text-[#1E1E1E] placeholder-[#696969] min-w-0 ` +
                (isShrunk ? 'text-[15px]' : 'text-[18px]')
              }
            />
          </div>

          {/* Dropdowns */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {/* Category — All */}
            <div
              className={
                `relative flex items-center bg-white rounded-[5px] border border-[#D1CFCF] w-[48%] sm:w-[160px] lg:w-[203px] transition-all duration-200 ` +
                (isShrunk ? 'px-[10px] h-[40px]' : 'px-[11px] h-[52px]')
              }
            >
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={
                  `w-full bg-transparent outline-none text-[#1E1E1E] appearance-none cursor-pointer pr-5 ` +
                  (isShrunk ? 'text-[14px]' : 'text-[16px]')
                }
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
              <ChevronDown size={isShrunk ? 12 : 14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#696969] pointer-events-none" />
            </div>

            {/* Sort — Newest */}
            <div
              className={
                `relative flex items-center bg-white rounded-[5px] border border-[#D1CFCF] w-[48%] sm:w-[160px] lg:w-[203px] transition-all duration-200 ` +
                (isShrunk ? 'px-[10px] h-[40px]' : 'px-[11px] h-[52px]')
              }
            >
              <select
                value={filterSort}
                onChange={(e) => setFilterSort(e.target.value)}
                className={
                  `w-full bg-transparent outline-none text-[#1E1E1E] appearance-none cursor-pointer pr-5 ` +
                  (isShrunk ? 'text-[14px]' : 'text-[16px]')
                }
              >
                <option>Newest</option>
                <option>Oldest</option>
                <option>Most Viewed</option>
                <option>A–Z</option>
              </select>
              <ChevronDown size={isShrunk ? 12 : 14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#696969] pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}