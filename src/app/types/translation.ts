export interface TranslationMap {
    labels: {
      [key: string]: { khmer: string };
    };
  }
  
  export const translationMap: TranslationMap = {
    labels: {
      Fever: { khmer: 'គ្រុន' },
      Cough: { khmer: 'ក្អក' },
      Fatigue: { khmer: 'អស់កម្លាំង' },
      Difficulty_Breathing: { khmer: 'ពិបាកដកដង្ហើម' },
      Age: { khmer: 'អាយុ' },
      Gender: { khmer: 'ភេទ' },
      Blood_Pressure: { khmer: 'សម្ពាធឈាម' },
      Cholesterol_Level: { khmer: 'កម្រិតកូឡេស្តេរ៉ុល' },
    },
  };