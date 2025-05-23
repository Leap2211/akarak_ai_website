// src/app/components/common/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { href: '/', label: language === 'khmer' ? 'ទំព័រដើម' : 'Home' },
    { href: '/about', label: language === 'khmer' ? 'អំពី' : 'About' },
    { href: '/contact', label: language === 'khmer' ? 'ទំនាក់ទំនង' : 'Contact' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          អាការៈ AI
        </Link>
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'khmer' | 'english')}
            className="bg-blue-700 text-white border rounded p-2"
          >
            <option value="khmer">ភាសាខ្មែរ</option>
            <option value="english">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
