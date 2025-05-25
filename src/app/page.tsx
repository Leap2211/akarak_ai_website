"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "./context/LanguageContext";
import { PredictionResponse } from "./types/api";
import SymptomForm from "./components/SymptomForm";
import PredictionResult from "./components/prediction/PredictionResult";

const heroImage = "/images/medical.jpg";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const toggleForm = () => {
    setFormVisible((v) => !v);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section
        className={`max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-4 drop-shadow-lg leading-tight">
            {language === "khmer"
              ? "ស្វាគមន៍មកកាន់កម្មវិធីព្យាករណ៍ជំងឺ"
              : "Welcome to AI Health Prediction"}
          </h1>
          <p className="text-indigo-700 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            {language === "khmer"
              ? "បញ្ចូលរោគសញ្ញារបស់អ្នកដើម្បីទទួលបានការព្យាករណ៍ជំងឺ"
              : "Enter your symptoms to get disease prediction powered by AI."}
          </p>

          {/* Toggle Button */}
          <button
            onClick={toggleForm}
            className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
            aria-expanded={formVisible}
            aria-controls="symptom-form"
          >
            {formVisible
              ? language === "khmer"
                ? "បិទបែបបទ"
                : "Close Form"
              : language === "khmer"
              ? "ចាប់ផ្តើមព្យាករណ៍"
              : "Start Prediction"}
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={heroImage}
            alt="AI health illustration"
            width={400}
            height={320}
            className="rounded-xl shadow-2xl animate-float"
            priority
          />
        </div>
      </section>

      {/* SVG Wave */}
      <div className="w-full max-w-7xl">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-24 text-indigo-100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,40 C360,140 1080,-60 1440,40 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      {/* Collapsible Form Section */}
      <section
        id="symptom-form"
        className={`w-full max-w-3xl bg-white p-10 rounded-2xl shadow-lg transform origin-top transition-all duration-700 ease-in-out
          ${formVisible ? "opacity-100 max-h-[1000px] mt-0" : "opacity-0 max-h-0 mt-0 overflow-hidden"}`}
        style={{ overflow: "hidden" }}
      >
        <SymptomForm
          onPredict={setPrediction}
          language={language}
          setLanguage={setLanguage}
        />
      </section>

      {/* Prediction Result Section */}
      {prediction && (
        <section
          className={`w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg transition-transform duration-700 ease-out hover:shadow-indigo-500/40 hover:scale-[1.02] transform origin-center ${
            fadeIn ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <PredictionResult result={prediction} language={language} />
        </section>
      )}

      {/* Float animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
