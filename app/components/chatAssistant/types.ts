export interface Message {
    role: 'user' | 'assistant';
    content: string;
  }
  
  export interface ChatRequest {
    messages: Message[];
    groq_api_key: string;
    language: string;
  }