
import React from 'react';

import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

export const metadata = {
  title: 'AI Health Website',
  description: 'Disease prediction for Khmer users',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="km">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow py-8">{children}</main>
          <Footer  />
        </LanguageProvider>
      </body>
    </html>
  );
}