export interface ValidInputsResponse {
    valid_inputs: {
      [key: string]: string[] | { type: string; example: number };
    };
  }
  
  export interface PredictionResponse {
    predicted_disease: string;
    confidence: number;
    status: 'success' | 'error';
    error?: string;
  }
  
  export interface SymptomInput {
    [key: string]: string | number;
  }