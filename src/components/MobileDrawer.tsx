import { X, ChevronRight } from "lucide-react";
import { dropdownData } from "@/lib/dropdownData";
import { useState } from "react";
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { title: "Membership", slug: "membership" },
  { title: "Meetings & Events", slug: "meetings-events" },
  { title: "Innovation & Sustainability", slug: "innovation-sustainability" },
  { title: "Journals & Proceedings", slug: "journals-proceedings" },
  { title: "Awards & Recognitions", slug: "awards-recognitions" },
  { title: "Discover IAAM", slug: "discover-iaam" },
];

function MobileDrawer({ open, onClose }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-semibold text-[#1e40af] text-lg">
            {activeIndex === null ? "Menu" : navItems[activeIndex].title}
          </span>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* LEVEL 1 */}
        {activeIndex === null && (
          <div className="divide-y">
            {navItems.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left text-gray-800 font-medium hover:bg-gray-50"
              >
                {item.title}
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        )}

        {/* LEVEL 2 */}
        {activeIndex !== null && (
          <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-70px)]">
            <button
              onClick={() => setActiveIndex(null)}
              className="text-sm text-gray-500 mb-2"
            >
              ← Back
            </button>

            {dropdownData[activeIndex].columns.map((column, colIdx) =>
              column.map((section, secIdx) => (
                <div key={`${colIdx}-${secIdx}`} className="space-y-2">
                  <h4 className="font-semibold text-[#1e40af]">
                    {section.header}
                  </h4>

                  {section.links?.map((link, i) => (
                    <Link
                      key={i}
                      href={`/${navItems[activeIndex].slug}${link.url}`}
                      className="block text-sm text-gray-700 hover:text-[#1e40af]"
                      onClick={onClose}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MobileDrawer;
