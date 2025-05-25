import React from 'react';
import { PredictionResponse } from '../../types/api';
import { translationMap } from '@/app/types/translation';


interface PredictionResultProps {
  result: PredictionResponse | null;
  language: 'khmer' | 'english';
}


const normalizeKey = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '_')     // spaces -> underscores
    .replace(/[^a-z0-9_]/g, ''); // remove all non-alphanumeric except underscore
};

const PredictionResult: React.FC<PredictionResultProps> = ({ result, language }) => {
  if (!result || result.status !== 'success') return null;

  // Log the original predicted disease
  console.log('Raw predicted disease:', result.predicted_disease);

  const diseaseKey = normalizeKey(result.predicted_disease);
  console.log('Normalized disease key:', diseaseKey);

  const translatedDisease =
    translationMap.diseases?.[diseaseKey]?.[language] || result.predicted_disease;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-green-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">
        {language === 'khmer' ? 'លទ្ធផលព្យាករណ៍' : 'Prediction Result'}
      </h3>
      <p className="text-lg">
        <strong>{language === 'khmer' ? 'ជំងឺ៖' : 'Disease:'}</strong> {translatedDisease}
      </p>
      <p className="text-lg">
        <strong>{language === 'khmer' ? 'ទំនុកចិត្ត៖' : 'Confidence:'}</strong>{' '}
        {(result.confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default PredictionResult;
