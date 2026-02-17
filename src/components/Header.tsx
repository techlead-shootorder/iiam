'use client';

import { useState } from "react";
import { Search, Menu, X, ChevronRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ isShrunk = false }: { isShrunk?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: "Membership", slug: "membership" },
    { title: "Meetings & Events", slug: "meetings-events" },
    { title: "Innovation & Sustainability", slug: "innovation-sustainability" },
    { title: "Journal & Proceedings", slug: "journals-proceedings" },
    { title: "Awards & Recognitions", slug: "awards-recognitions" },
    { title: "Discover IAAM", slug: "discover-iaam" },
  ];

  const quickLinks = [
    { label: "The Association", href: "/the-association" },
    { label: "Society", href: "/society" },
    { label: "Councils", href: "/councils" },
    { label: "Join IAAM", href: "/join-iaam" },
    { label: "Programs", href: "/programs" },
    { label: "Charters", href: "/charters" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[30px]">
          <div
            className={`flex items-center justify-between transition-all duration-200 ${
              isShrunk ? 'py-1.5' : 'py-4'
            }`}
          >

            {/* LEFT - Logo + Title */}
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <div
                className={`flex-shrink-0 transition-all duration-200 ${
                  isShrunk ? 'w-[46px] sm:w-[56px] lg:w-[64px]' : 'w-[80px] sm:w-[110px] lg:w-[140px]'
                }`}
              >
                <Image
                  src="/1704818354IAAM-Logo-SVG 1.svg"
                  alt="IAAM Logo"
                  width={120}
                  height={120}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              <div className="min-w-0">
                <h1
                  className={
                    `font-bold text-[#1e40af] leading-tight transition-all duration-200 ` +
                    (isShrunk
                      ? 'text-[13px] sm:text-[15px] lg:text-[18px] xl:text-[20px]'
                      : 'text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[30px]')
                  }
                >
                  International Association <br className="hidden sm:block" />
                  of Advanced Materials
                </h1>

                <p
                  className={
                    `text-gray-600 transition-all duration-200 ` +
                    (isShrunk ? 'hidden lg:block lg:text-[11px] mt-0' : 'text-[10px] lg:text-[16px] mt-1')
                  }
                >
                  Integrating materials knowledge to achieve a sustainable planet.
                </p>
              </div>
            </div>

            {/* ================= DESKTOP RIGHT SIDE ================= */}
            <div className={`hidden lg:flex items-center ml-4 transition-all duration-200 ${isShrunk ? 'gap-3' : 'gap-4'}`}>
              <Link
                href="/web-talks"
                className={
                  `border border-[#1e40af] text-[#1e40af] rounded hover:bg-[#1e40af] hover:text-white transition ` +
                  (isShrunk ? 'px-3 py-1 text-[13px]' : 'px-4 py-1.5')
                }
              >
                Web Talks
              </Link>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className={
                    `border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] ` +
                    (isShrunk ? 'w-[170px] xl:w-[190px] px-3 py-1.5 pr-9' : 'w-[200px] xl:w-[220px] px-3 py-2 pr-10')
                  }
                />
                <Search
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={isShrunk ? 14 : 16}
                />
              </div>
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} color="#1e40af" />
            </button>

          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] max-w-[420px] bg-[#f3f4f6] z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Drawer Header with Back */}
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-300">
          <button
            onClick={closeDrawer}
            className="flex items-center gap-2 text-gray-700"
          >
            <ArrowLeft size={20} className="text-gray-800" />
            <span className="text-sm">Back</span>
          </button>
        </div>

        {/* MAIN NAV */}
        <div>
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={`/${item.slug}`}
              onClick={closeDrawer}
              className="w-full flex justify-between items-center px-5 py-4 bg-[#e5e7eb] border-b border-gray-400 text-gray-800 text-[15px] font-medium"
            >
              {item.title}
              <ChevronRight size={18} />
            </Link>
          ))}
        </div>

        {/* QUICK LINKS SECTION */}
        <div className="mt-6">
          <div className="px-5 py-3 text-gray-800 font-semibold text-[15px]">
            Quick Links
          </div>

          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeDrawer}
              className="w-full flex justify-between items-center px-5 py-4 bg-[#e5e7eb] border-b border-gray-400 text-gray-800 text-[14px]"
            >
              {link.label}
              <ChevronRight size={16} />
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}



























































// 'use client'

// import { useEffect, useState } from 'react'
// import LazyImage from "@/components/common/LazyImage";
// import Link from 'next/link'
// import { Home, Menu, X, Search } from 'lucide-react'
// import { getMainMenu, getTopMenu } from '@/lib/api'
// import MainDropdown from './MainDropdown'

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [mainNav, setMainNav] = useState<any[]>([])
//   const [topLeft, setTopLeft] = useState<any[]>([])
//   const [topRight, setTopRight] = useState<any[]>([])

//   useEffect(() => {
//     getMainMenu().then((res) => {
//       setMainNav(res || [])
//     })

//     getTopMenu().then((res) => {
//       setTopLeft(res.left || [])
//       setTopRight(res.right || [])
//     })
//   }, [])

//   return (
//     <header className="w-full sticky top-0 z-[999] bg-white">

//       {/* ================= TOP BAR ================= */}
//       <div className="hidden md:block bg-gray-300 text-[hsl(197,63%,22%)] h-8 font-semibold text-xs">
//         <div className="container mx-auto px-4 py-2 flex justify-between">

//           {/* LEFT */}
//           <div className="flex items-center gap-1">
//             <Link href="/" className="px-2">
//               <Home className="h-3 w-3 text-black" />
//             </Link>

//             {topLeft.map((l, i) => (
//               <span key={`top-left-${l.label}-${i}`} className="flex items-center">
//                 {i > 0 && <span className="mx-1 opacity-50">|</span>}
//                 <Link href={l.href} className="px-2 hover:underline">
//                   {l.label}
//                 </Link>
//               </span>
//             ))}
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-2">
//             {topRight.map((l, i) => (
//               <span key={`top-right-${l.label}-${i}`} className="flex items-center">
//                 {i > 0 && <span className="mx-1 opacity-50">|</span>}
//                 <Link href={l.href} className="px-2 hover:underline">
//                   {l.label}
//                 </Link>
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ================= LOGO + SEARCH ================= */}
//       <div className="border-b bg-white">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">

//           {/* LOGO */}
//           <Link href="/">
//             <LazyImage
//               src="/iaam-logo.png"
//               alt="IAAM"
//               width={180}
//               height={60}
//               className="h-12 w-auto"
//               priority
//             />
//           </Link>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">

//             {/* WEB TALKS */}
//             <Link
//               href="#"
//               className="hidden md:inline-flex border border-black px-4 py-2 text-sm rounded hover:bg-gray-100 text-black"
//             >
//               Web Talks
//             </Link>

//             {/* SEARCH */}
//             <div className="hidden md:block relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-72 px-4 py-2 pr-10 border rounded text-sm text-gray-400"
//               />
//               <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//             </div>

//             {/* MOBILE BUTTON */}
//             <button
//               className="md:hidden p-2 text-black"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ================= MAIN NAV ================= */}
//       <nav className="hidden md:block bg-[hsl(197,63%,22%)] text-white text-sm font-bold">
//         <div className="container mx-auto px-4 flex justify-center gap-4 h-[44px] items-center">
//           {mainNav.map((section, index) => (
//             <MainDropdown
//               key={section.Identifier || `nav-${index}`}
//               section={section}
//             />
//           ))}
//         </div>
//       </nav>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileMenuOpen && (
//         <div className="md:hidden absolute left-0 right-0 top-full text-black bg-white shadow-lg z-[999]">
//           <div className="container mx-auto px-4 py-4 space-y-4">

//             {/* SEARCH */}
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full px-4 py-2 border rounded text-sm"
//             />

//             {/* MAIN NAV */}
//             <div className="space-y-2">
//               {mainNav.map((s, index) => (
//                 <Link
//                   key={s.Identifier || `mobile-nav-${index}`}
//                   href={s.slug ? `/${s.slug}` : '#'}
//                   className="block px-3 py-2 font-semibold hover:bg-gray-100"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {s.Title}
//                 </Link>
//               ))}
//             </div>

//             {/* TOP LINKS */}
//             <div className="border-t pt-3 space-y-2 text-sm">
//               {[...topLeft, ...topRight].map((l, i) => (
//                 <Link
//                   key={`mobile-${l.label}-${i}`}
//                   href={l.href}
//                   className="block px-3 py-1"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {l.label}
//                 </Link>
//               ))}
//             </div>

//           </div>
//         </div>
//       )}
//     </header>
//   )
// }