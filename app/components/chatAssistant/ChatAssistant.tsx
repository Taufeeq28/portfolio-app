'use client';

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FiSend, FiPaperclip, FiTrash2 } from 'react-icons/fi';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [language, setLanguage] = useState('English');
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async () => {
    if (!input.trim() || !apiKey) {
      alert('Please enter both a message and API key');
      return;
    }

    try {
        setLoading(true);
        const newMessages: Message[] = [
          ...messages,
          { 
            role: 'user' as const,  // Type assertion to narrow the type
            content: input 
          }
        ];
        
        setMessages(newMessages);
        setInput('');
  
        const response = await axios.post('http://localhost:8000/chat', {
          messages: newMessages,
          groq_api_key: apiKey,
          language,
        });
  
        setMessages([
          ...newMessages,
          { 
            role: 'assistant' as const, 
            content: response.data.content 
          }
        ]);

   

      if (response.data.sources) {
        setSources(response.data.sources);
      }
    } catch (error: unknown) {  // Type error as unknown
        if (axios.isAxiosError(error)) {  // Type guard for Axios error
          alert(error.response?.data?.detail || 'Something went wrong');
        } else {
          alert('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !apiKey) {
      alert('Please provide both a PDF file and API key');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      setLoading(true);
      await axios.post('http://localhost:8000/process-pdf', formData, {
        params: { groq_api_key: apiKey },
      });
      alert('PDF processed successfully');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.detail || 'Failed to process PDF');
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Failed to process PDF');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">AI Chat Assistant</h1>
        
        {/* Settings */}
        <div className="flex gap-4 mb-6">
          <input
            type="password"
            placeholder="Enter GROQ API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-32 p-2 border rounded"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            <FiPaperclip className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              setMessages([]);
              setSources([]);
            }}
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            <FiTrash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 h-[60vh] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 max-w-[80%] ${
                message.role === 'user' ? 'ml-auto' : ''
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        {/* Sources */}
        {sources.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="font-semibold mb-2">Sources</h2>
            {sources.map((source, index) => (
              <p key={index} className="text-sm text-gray-600 mb-1">
                {source}
              </p>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="flex gap-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 p-2 border rounded resize-none"
            rows={2}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className={`p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}