import axios from 'axios';
import { ChatRequest } from '../components/chatAssistant/types';

const API_BASE_URL = 'http://localhost:8000';

export const chatApi = {
  sendMessage: async (request: ChatRequest) => {
    const response = await axios.post(`${API_BASE_URL}/chat`, request);
    return response.data;
  },

  processPdf: async (file: File, apiKey: string) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await axios.post(`${API_BASE_URL}/process-pdf`, formData, {
      params: { groq_api_key: apiKey },
    });
    return response.data;
  },
};