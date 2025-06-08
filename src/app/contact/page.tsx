'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Inbox, SendHorizonal, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { language } = useLanguage();
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'khmer' ? 'សារត្រូវបានផ្ញើ!' : 'Message sent!');
    setMessage('');
  };

  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Animated Icon Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center h-64 md:h-auto w-full hidden md:flex bg-purple-100"
        >
          <Inbox className="text-purple-600 w-44 h-44 animate-bounce" />
        </motion.div>

        {/* Form and Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-14 flex flex-col justify-center space-y-8"
        >
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <Inbox className="text-purple-600 w-9 h-9" />
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-800">
              {language === 'khmer' ? 'ទំនាក់ទំនង' : 'Contact'}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <textarea
              placeholder={language === 'khmer' ? 'សារ​របស់​អ្នក...' : 'Your message...'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl resize-none h-36 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl w-full transition shadow-md"
            >
              <SendHorizonal className="w-5 h-5" />
              {language === 'khmer' ? 'ផ្ញើសារ' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <h2 className="text-xl font-semibold text-purple-800">{language === 'khmer' ? 'ព័ត៌មានទំនាក់ទំនង' : 'Contact Info'}</h2>

            <div className="flex items-center space-x-4 text-gray-700">
              <Phone className="w-6 h-6 text-purple-500" />
              <a href="tel:+1234567890" className="hover:text-purple-600 transition">
                +1 (234) 567-890
              </a>
            </div>

            <div className="flex items-center space-x-4 text-gray-700">
              <Mail className="w-6 h-6 text-purple-500" />
              <a href="mailto:contact@aihealth.com" className="hover:text-purple-600 transition">
                contact@aihealth.com
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-6 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-purple-600 hover:text-purple-800 transition"
              >
                <Facebook className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-purple-400 hover:text-purple-600 transition"
              >
                <Twitter className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-500 hover:text-pink-700 transition"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
