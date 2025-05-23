'use client';

import React, { useState, useEffect } from 'react';
import { fetchValidInputs, predictDisease } from '../../utils/utility';
import { ValidInputsResponse, PredictionResponse, SymptomInput } from '../../types/api';
import { translationMap } from '../../types/translation';
import { AxiosError } from 'axios';

interface SymptomFormProps {
  onPredict: (result: PredictionResponse) => void;
  language: 'khmer' | 'english';
}

const SymptomForm: React.FC<SymptomFormProps> = ({ onPredict, language }) => {
  const [validInputs, setValidInputs] = useState<ValidInputsResponse['valid_inputs']>({});
  const [formData, setFormData] = useState<SymptomInput>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchValidInputs(language);
        setValidInputs(data.valid_inputs);
        const initialData: SymptomInput = {};
        Object.keys(data.valid_inputs).forEach((key) => {
          initialData[key] = Array.isArray(data.valid_inputs[key])
            ? data.valid_inputs[key][0]
            : (data.valid_inputs[key] as { type: string; example: number }).example;
          if (key === 'Age') initialData[key] = 30;
        });
        setFormData(initialData);
      } catch (err) {
        const errorMessage =
          (err as AxiosError<{ error?: string }>).response?.data?.error ||
          (language === 'khmer' ? 'មិនអាចទាញទិន្នន័យបានទេ។' : 'Failed to fetch data.');
        setError(errorMessage);
      }
    };
    fetchData();
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await predictDisease(formData, language);
      onPredict(result);
    } catch (err) {
      const errorMessage =
        (err as AxiosError<{ error?: string }>).response?.data?.error ||
        (language === 'khmer' ? 'កំហុសក្នុងការព្យាករណ៍។' : 'Prediction failed.');
      setError(errorMessage);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'Age' ? parseInt(value) : value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          {language === 'khmer' ? 'ការព្យាករណ៍ជំងឺ' : 'Disease Prediction'}
        </h2>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        {Object.keys(validInputs).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              {language === 'khmer' ? translationMap.labels[key]?.khmer || key : key}
            </label>
            {key === 'Age' ? (
              <input
                type="number"
                name={key}
                value={(formData[key] as number) || 30}
                onChange={handleChange}
                className="w-full border rounded p-2"
                min="1"
                max="120"
                required
              />
            ) : (
              <select
                name={key}
                value={(formData[key] as string) || ''}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
              >
                <option value="">
                  {language === 'khmer' ? 'ជ្រើសរើស' : 'Select'}
                </option>
                {(validInputs[key] as string[])?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading
            ? language === 'khmer'
              ? 'កំពុងព្យាករណ៍...'
              : 'Predicting...'
            : language === 'khmer'
            ? 'ព្យាករណ៍'
            : 'Predict'}
        </button>
      </form>
    </div>
  );
};

export default SymptomForm;