'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';


const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-blue-800 text-white p-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-2">
          <Link href="/about" className="mx-2 hover:underline">
            {language === 'khmer' ? 'អំពី' : 'About'}
          </Link>
          <Link href="/contact" className="mx-2 hover:underline">
            {language === 'khmer' ? 'ទំនាក់ទំនង' : 'Contact'}
          </Link>
        </div>
        <p>
          {language === 'khmer'
            ? 'រក្សាសិទ្ធិ © ២០២៥ អាការៈ AI'
            : 'Copyright © 2025  អាការៈ AI Website'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
