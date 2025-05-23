'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { language, setLanguage } = useLanguage();
  const [message, setMessage] = useState('');

  return (
    <>
      <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          {language === 'khmer' ? 'ទំនាក់ទំនង' : 'Contact'}
        </h1>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <textarea
            placeholder={language === 'khmer' ? 'សារ​របស់​អ្នក...' : 'Your message...'}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border rounded-lg resize-none h-40 focus:outline-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            {language === 'khmer' ? 'ផ្ញើសារ' : 'Send Message'}
          </button>
        </form>
      </section>
    </>
  );
}
