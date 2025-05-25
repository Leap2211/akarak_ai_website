'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartPulse, UserCheck, Wrench } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <section className="min-h-[60vh] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <motion.div
          className="relative h-64 md:h-auto w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/images/medical.jpg"
            alt="AI in Healthcare"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="p-6 md:p-10 flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h1 className="flex items-center text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 gap-3">
            <HeartPulse className="w-8 h-8 text-blue-600" />
            {language === 'khmer' ? 'អំពីយើង' : 'About Us'}
          </h1>

          <p className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed">
            <UserCheck className="w-6 h-6 mt-1 text-blue-500 flex-shrink-0" />
            {language === 'khmer'
              ? 'សូមស្វាគមន៍​មកកាន់គេហទំព័ររបស់យើង! យើងគឺជាក្រុមការងារដែលមានបំណងចង់ជួយឲ្យមនុស្សមានសុខភាពល្អប្រសើរជាមួយបច្ចេកវិទ្យា AI។'
              : 'Welcome to our website! We are a dedicated team passionate about improving people\'s health through AI technology.'}
          </p>

          <p className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
            <Wrench className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
            {language === 'khmer'
              ? 'គេហទំព័រនេះបង្កើតឡើងដើម្បីផ្ដល់ព័ត៌មាន និងឧបករណ៍ជំនួយក្នុងការវិភាគរោគសញ្ញាសម្រាប់អ្នក។'
              : 'This site is built to provide information and assistive tools for symptom analysis.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
