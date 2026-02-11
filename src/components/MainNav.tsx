'use client';

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { dropdownData, DropdownDataItem } from "@/lib/dropdownData";

interface MainNavProps {
  mobileMenuOpen: boolean;
}

export default function MainNav({ mobileMenuOpen }: MainNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    "Membership",
    "Meetings & Events",
    "Innovation & Sustainability",
    "Journals & Proceedings",
    "Awards & Recognitions",
    "Discover IAAM",
  ];

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:block w-full bg-white border-b border-border relative">
        <div className="max-w-[1440px] mx-auto px-[30px]">
          <ul className="flex items-center justify-between h-[48px]">
            {navItems.map((item, index) => (
              <li
                key={item}
                className="relative h-full flex items-center group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-roboto font-semibold text-[15px] text-iaam-text-dark hover:text-iaam-primary transition-colors flex items-center gap-1 px-2 py-2">
                  {item}
                  <ChevronDown size={14} className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Dropdown Panel */}
        {activeDropdown !== null && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setActiveDropdown(null)}
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                pointerEvents: 'auto'
              }}
            />
            {/* Dropdown Content */}
            <div
              className="absolute left-0 right-0 top-full w-screen lg:w-full bg-white z-50 shadow-2xl border-b border-border dropdown-scroll"
              style={{
                maxHeight: 'calc(100vh - 200px)',
                overflowY: 'auto',
                overflowX: 'hidden',
                marginLeft: 'calc(-50vw + 50%)'
              }}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setActiveDropdown(activeDropdown);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1440px] mx-auto px-[30px] py-[25px]">
                <DropdownContent data={dropdownData[activeDropdown]} />
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-b border-border">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <MobileNavItem key={item} title={item} data={dropdownData[index]} />
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

/* Desktop dropdown content */
const DropdownContent = ({ data }: { data: DropdownDataItem }) => {
  return (
    <div className="flex gap-[30px] pb-4 items-stretch">
      {/* Left Card */}
      <div className="w-[30%] flex-shrink-0 bg-iaam-bg-gray rounded overflow-hidden">
        <div className="h-[300px] bg-white overflow-hidden relative">
          <Image 
            src={`/${data.card.image}`} 
            alt={data.card.title} 
            fill
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="p-[10px] pt-[24px] flex flex-col gap-6">
          <div>
            <h3 className="font-montserrat font-bold text-[24px] text-iaam-text-dark leading-tight tracking-[0.36px]">
              {data.card.title}
            </h3>
            <p className="font-roboto text-[18px] text-iaam-text-body capitalize leading-[25px] mt-2">
              {data.card.description}
            </p>
          </div>
          <button className="w-full py-[10px] px-[8px] bg-iaam-primary text-white cursor-pointer font-roboto font-medium text-[18px] rounded-[3px] shadow-[2px_4px_13px_rgba(0,0,0,0.20)] text-center hover:brightness-110 transition">
            {data.card.cta}
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col gap-8 min-w-0">
        {/* Title & Description */}
        <div>
          <h2 className="font-roboto font-bold text-[24px] text-iaam-text-dark tracking-[0.36px]">
            {data.title}
          </h2>
          <p className="font-roboto text-[18px] text-iaam-text-body capitalize leading-[25px] mt-4 max-w-full">
            {data.description}
          </p>
        </div>

        {/* Outline CTA & Right Links */}
        {(data.outlineCta || data.rightLinks) && (
          <div className="flex justify-between items-start w-full">
            {data.outlineCta && (
              <button className="py-[10px] px-[8px] border border-iaam-primary cursor-pointer text-iaam-primary font-roboto font-medium text-[18px] rounded-[3px] shadow-[2px_4px_13px_rgba(0,0,0,0.20)] hover:bg-iaam-primary hover:text-white transition">
                {data.outlineCta}
              </button>
            )}
            {data.rightLinks && (
              <div className="flex flex-col gap-4 text-right">
                {data.rightLinks.map((rl) => (
                  <a key={rl.header} href="#" className="font-roboto font-bold text-[18px] text-iaam-primary capitalize tracking-[0.27px] hover:underline">
                    {rl.header}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Guideline bar (Meetings dropdown specific) */}
        {data.title === "Meeting & Events" && (
          <div className="w-full py-[9px] px-[8px] bg-iaam-primary">
            <span className="font-roboto font-semibold text-[18px] text-white tracking-[0.27px]">
              Guideline for Abstract Submission & Conference Registration​
            </span>
          </div>
        )}

        {/* Multi-column links */}
        <div className="flex gap-7 w-full">
          {data.columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-7 flex-1 min-w-0">
              {column.map((section, secIdx) => (
                <div key={secIdx} className="flex flex-col gap-3">
                  <h4 className="font-roboto font-bold text-[18px] text-iaam-section-header capitalize tracking-[0.27px]">
                    {section.header}
                  </h4>
                  {section.links && section.links.length > 0 && (
                    <div className="flex flex-col gap-4">
                      {section.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href="#"
                          className="font-roboto text-[16px] text-iaam-link-light capitalize tracking-[0.24px] hover:underline hover:text-iaam-primary transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* Mobile accordion nav item */
const MobileNavItem = ({ title, data }: { title: string; data: DropdownDataItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-3 px-2 font-roboto font-semibold text-[16px] text-iaam-text-dark"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-2 pb-4 space-y-4">
          <p className="font-roboto text-[14px] text-iaam-text-body">{data.description}</p>
          {data.columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {column.map((section, secIdx) => (
                <div key={secIdx}>
                  <h5 className="font-roboto font-bold text-[14px] text-iaam-section-header capitalize">{section.header}</h5>
                  {section.links && (
                    <div className="ml-2 mt-1 space-y-1">
                      {section.links.map((link, i) => (
                        <a key={i} href="#" className="block font-roboto text-[13px] text-iaam-link-light capitalize hover:underline">
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
