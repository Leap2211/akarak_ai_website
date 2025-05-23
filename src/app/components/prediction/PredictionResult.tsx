import React from 'react';
import { PredictionResponse } from '../../types/api';

interface PredictionResultProps {
  result: PredictionResponse | null;
  language: 'khmer' | 'english';
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result, language }) => {
  if (!result || result.status !== 'success') return null;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-green-100 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">
        {language === 'khmer' ? 'លទ្ធផលព្យាករណ៍' : 'Prediction Result'}
      </h3>
      <p className="text-lg">
        <strong>{language === 'khmer' ? 'ជំងឺ៖' : 'Disease:'}</strong> {result.predicted_disease}
      </p>
      <p className="text-lg">
        <strong>{language === 'khmer' ? 'ទំនុកចិត្ត៖' : 'Confidence:'}</strong>{' '}
        {(result.confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default PredictionResult;