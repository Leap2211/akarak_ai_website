import axios, { AxiosError } from 'axios';
import { ValidInputsResponse, PredictionResponse, SymptomInput } from '../types/api';

const API_URL = 'http://127.0.0.1:8000'; // Replace with deployed URL

export const fetchValidInputs = async (language: 'khmer' | 'english'): Promise<ValidInputsResponse> => {
  try {
    const response = await axios.get<ValidInputsResponse>(`${API_URL}/valid_inputs?language=${language}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error?: string }>;
    throw new Error(axiosError.response?.data?.error || 'Failed to fetch valid inputs');
  }
};

export const predictDisease = async (
  symptoms: SymptomInput,
  language: 'khmer' | 'english'
): Promise<PredictionResponse> => {
  try {
    const response = await axios.post<PredictionResponse>(
      `${API_URL}/predict?language=${language}`,
      symptoms
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error?: string }>;
    throw new Error(axiosError.response?.data?.error || 'Prediction failed');
  }
};