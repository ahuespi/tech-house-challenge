"use client";
import { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@mui/base/Button';

import { menuItems } from '../constants';

import '@/app/styles/header.scss';

export const MenuScrollNav: React.FC = () => {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>('Mis tareas');

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === pathname);
    if (currentItem) {
      setActiveItem(currentItem.label);
    }
  }, [pathname]);

  return (
    <div className="relative flex md:justify-center gap-10 px-5 overflow-x-auto whitespace-nowrap scrollbar-hide shadow-md w-full">
      {menuItems.map(({ label, path }) => (
        <Link key={label} href={path} className={`${activeItem === label ? 'active' : ''}`}>
          <Button
            onClick={() => setActiveItem(label)}
            className={`flex items-center mx-2 h-[50px] text-base normal-case ${activeItem === label
              ? 'text-primary-main font-bold'
              : 'text-neutral-60 font-semibold'
              }`}
          >
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default MenuScrollNav;