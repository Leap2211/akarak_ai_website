import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  language: 'khmer' | 'english';
  setLanguage: (lang: 'khmer' | 'english') => void;
}

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow py-8">{children}</main>
      <Footer />
    </div>
  );
  

export default MainLayout;