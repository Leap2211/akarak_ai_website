'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';
import { FaFacebookF, FaTelegram, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-blue-800 text-white p-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <Link href="/about" className="mx-2 hover:underline">
            {language === 'khmer' ? 'អំពី' : 'About'}
          </Link>
          <Link href="/contact" className="mx-2 hover:underline">
            {language === 'khmer' ? 'ទំនាក់ទំនង' : 'Contact'}
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/leapjr11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://telegram.me/thengleap2211"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTelegram size={24} />
          </a>
          <a
            href="https://www.instagram.com/leap_thxng/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-400 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/theng-leap-77339b29b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/leap2211"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <p className="text-sm">
          {language === 'khmer'
            ? 'រក្សាសិទ្ធិ © ២០២៥ អាការៈ AI'
            : 'Copyright © 2025 អាការៈ AI Website'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
