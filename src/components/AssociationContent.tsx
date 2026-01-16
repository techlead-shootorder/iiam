"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

export default function AssociationContent({ sections }: any) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s: any) => {
      const id = s.Title.replace(/\s+/g, "-");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] lg:sticky lg:top-28 self-start">
            <div className="flex items-center gap-2 mb-6 text-[15px] font-medium text-gray-900">
              <List size={18} />
              Page contents
            </div>

            <div className="relative border-l border-gray-300">
              <ul className="space-y-1">
                {sections.map((s: any, i: number) => {
                  const id = s.Title.replace(/\s+/g, "-");
                  const isActive = active === id;

                  return (
                    <li key={i} className="relative">
                      {isActive && (
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 rounded-full" />
                      )}

                      <button
                        onClick={() => scrollToSection(id)}
                        className={`w-full text-left pl-6 pr-3 py-2 transition text-[18px] 
                          ${
                            isActive
                              ? "bg-blue-50 text-blue-900 font-medium"
                              : "text-gray-800 hover:bg-gray-100"
                          }
                        `}
                      >
                        {s.Title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 space-y-12">
            {sections.map((s: any, i: number) => {
              const id = s.Title.replace(/\s+/g, "-");

              return (
                <section id={id} key={i} className="scroll-mt-32">
                  <h2 className="text-[40px] leading-[48px] font-light mb-6">
                    {s.Title}
                  </h2>

                  <div className="max-w-3xl text-[18px] leading-[28px] font-normal text-gray-800 space-y-4">
                    {s.Description.map((block: any, idx: number) => (
                      <p key={idx}>{block.children[0]?.text}</p>
                    ))}
                  </div>
                </section>
              );
            })}
          </main>

        </div>
      </div>
    </div>
  );
}
