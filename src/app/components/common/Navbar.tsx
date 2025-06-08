'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { Home, Info, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: language === 'khmer' ? 'ទំព័រដើម' : 'Home', icon: <Home className="w-5 h-5 inline-block mr-1" /> },
    { href: '/about', label: language === 'khmer' ? 'អំពី' : 'About', icon: <Info className="w-5 h-5 inline-block mr-1" /> },
    { href: '/contact', label: language === 'khmer' ? 'ទំនាក់ទំនង' : 'Contact', icon: <Phone className="w-5 h-5 inline-block mr-1" /> },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-purple-600 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          អាការៈ AI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'khmer' | 'english')}
            className="bg-purple-700 text-white border rounded p-2"
          >
            <option value="khmer">ភាសាខ្មែរ</option>
            <option value="english">English</option>
          </select>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-purple-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-purple-700 rounded p-4">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center hover:underline text-white"
              onClick={() => setMenuOpen(false)}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'khmer' | 'english')}
            className="bg-purple-800 text-white border rounded p-2 w-full"
          >
            <option value="khmer">ភាសាខ្មែរ</option>
            <option value="english">English</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
