

interface PredictionResponse {
  status: string;
  predicted_disease: string;
  confidence: number;
}

interface PredictionResultProps {
  result: PredictionResponse | null;
  language: 'khmer' | 'english';
}

export interface TranslationMap {
  diseases: {
    [key: string]: {
      english: string;
      khmer: string;
    };
  };
  labels: {
    [key: string]: {
      english: string;
      khmer: string;
    };
  };
  options?: {
    [key: string]: {
      english: string;
      khmer: string;
    }[];
  };
}

export const translationMap: TranslationMap = {
  labels: {
    Fever: { english: "Fever", khmer: "គ្រុន" },
    Cough: { english: "Cough", khmer: "ក្អក" },
    Fatigue: { english: "Fatigue", khmer: "អស់កម្លាំង" },
    Difficulty_Breathing: { english: "Difficulty Breathing", khmer: "ពិបាកដកដង្ហើម" },
    Age: { english: "Age", khmer: "អាយុ" },
    Gender: { english: "Gender", khmer: "ភេទ" },
    Blood_Pressure: { english: "Blood Pressure", khmer: "សម្ពាធឈាម" },
    Cholesterol_Level: { english: "Cholesterol Level", khmer: "កម្រិតកូឡេស្តេរ៉ុល" },
  },
  options: {
    Gender: [
      { english: "Male", khmer: "ប្រុស" },
      { english: "Female", khmer: "ស្រី" },
    ],
  },
  diseases: {
    fever: { english: "Fever", khmer: "គ្រុន" },
    cough: { english: "Cough", khmer: "ក្អក" },
    fatigue: { english: "Fatigue", khmer: "អស់កម្លាំង" },
    difficulty_breathing: { english: "Difficulty Breathing", khmer: "ពិបាកដកដង្ហើម" },
    cold: { english: "Cold", khmer: "រលាកក្រពះ" },
    age: { english: "Age", khmer: "អាយុ" },
    covid: { english: "Covid 19", khmer: "ជំងឺកូវីដ 19"},
    flu: { english: "Flu", khmer: "ជំងឺផ្តាសាយ" },
    gender: { english: "Gender", khmer: "ភេទ" },
    blood_pressure: { english: "Blood Pressure", khmer: "សម្ពាធឈាម" },
    cholesterol_level: { english: "Cholesterol Level", khmer: "កម្រិតកូឡេស្តេរ៉ុល" },
  },
}