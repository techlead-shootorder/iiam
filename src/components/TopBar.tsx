'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getTopMenu } from '@/lib/api';

interface MenuItem {
  label: string;
  href: string;
}

const DEFAULT_LEFT = [
  { label: 'The Association', href: '#' },
  { label: 'Society', href: '#' },
  { label: 'Councils', href: '#' },
  { label: 'Join IAAM', href: '#' },
];

const DEFAULT_RIGHT = [
  { label: 'Programs', href: '#' },
  { label: 'Charters', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact us', href: '#' },
];

export default function TopBar() {
  const [topLeft, setTopLeft] = useState<MenuItem[]>(DEFAULT_LEFT);
  const [topRight, setTopRight] = useState<MenuItem[]>(DEFAULT_RIGHT);

  useEffect(() => {
    try {
      getTopMenu().then((res) => {
        if (res?.left && res.left.length > 0) {
          setTopLeft(res.left);
        }
        if (res?.right && res.right.length > 0) {
          setTopRight(res.right);
        }
      }).catch(() => {
        // Keep defaults if API fails
      });
    } catch {
      // Keep defaults if API fails
    }
  }, []);

  return (
    <div className="w-full bg-iaam-bg-gray hidden md:block">
      <div className="max-w-[1440px] mx-auto px-[30px] flex items-center justify-between h-[36px]">
        <div className="flex items-center">
          {/* Home Icon */}
          <Link href="/" className="mr-3 flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/Frame 2.svg"
              alt="Home"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
            />
          </Link>
          
          {topLeft.map((link, i) => (
            <span key={`top-left-${link.label}-${i}`} className="flex items-center">
              {i > 0 && <span className="mx-2 text-gray-400">|</span>}
              <Link href={link.href} className="font-roboto text-[14px] font-semibold text-iaam-text-dark hover:text-iaam-primary transition-colors">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
        <div className="flex items-center">
          {topRight.map((link, i) => (
            <span key={`top-right-${link.label}-${i}`} className="flex items-center">
              {i > 0 && <span className="mx-2 text-gray-400">|</span>}
              <Link href={link.href} className="font-roboto text-[14px] font-semibold text-iaam-text-dark hover:text-iaam-primary transition-colors">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
