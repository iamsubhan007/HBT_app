'use client';

import { useState, useRef, useEffect } from 'react';

export default function HomePage() {
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const chatHistoryRef = useRef(null);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

  // Scroll to bottom of chat history
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handlePdfUpload = async () => {
    if (!pdfFile) {
      alert('Please select a PDF file to upload.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', pdfFile);

    try {
      const response = await fetch(`${backendUrl}/upload-pdf/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Success: ${data.message}`);
        setChatHistory(prev => [...prev, {
          role: 'assistant',
          content: `Successfully loaded document: ${data.filename}. I can now answer questions based on its content.`,
          is_relevant: true
        }]);
        setPdfFile(null); // Clear file input
      } else {
        const errorData = await response.json();
        alert(`Error uploading PDF: ${errorData.detail || response.statusText}`);
      }
    } catch (error) {
      console.error('PDF upload failed:', error);
      alert('Failed to connect to the backend for PDF upload. Check console for details and ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: 'user', content: chatInput };
    setChatHistory(prev => [...prev, userMessage]);
    setChatInput('');
    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userMessage.content }),
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage = {
          role: 'assistant',
          content: data.answer,
          sources: data.sources,
          rewritten_query: data.rewritten_query,
          is_relevant: data.is_relevant
        };
        setChatHistory(prev => [...prev, assistantMessage]);
      } else {
        const errorData = await response.json();
        const errorMessage = {
          role: 'assistant',
          content: `Error from chatbot: ${errorData.detail || response.statusText}`,
          is_relevant: false
        };
        setChatHistory(prev => [...prev, errorMessage]);
        console.error('Chat API error:', errorData);
      }
    } catch (error) {
      console.error('Chat request failed:', error);
      const errorMessage = {
        role: 'assistant',
        content: "I'm sorry, I am currently experiencing technical difficulties. Please try again in a moment. If the issue persists, kindly contact the restaurant owner.",
        is_relevant: false
      };
      setChatHistory(prev => [...prev, errorMessage]);
      alert('Failed to connect to the chatbot. Check console for details and ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-5 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🍽️ Restaurant Chat Support</h1>

      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Restaurant Documents (PDFs)</h2>
        <p className="text-gray-600 mb-4">Please upload your restaurant's menu, FAQs, policies, etc., in PDF format to train the chatbot.</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files ? e.target.files[0] : null)}
            disabled={loading}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
          <button
            onClick={handlePdfUpload}
            disabled={loading || !pdfFile}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md
                       hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75
                       disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? 'Uploading...' : 'Train Chatbot with PDF'}
          </button>
        </div>
        {pdfFile && <p className="mt-3 text-sm text-gray-600">Selected file: <span className="font-medium">{pdfFile.name}</span></p>}
      </div>

      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="h-[450px] overflow-y-auto p-4 bg-gray-50 border-b border-gray-200" ref={chatHistoryRef}>
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg max-w-[80%] shadow-sm text-sm break-words
                ${msg.role === 'user' ? 'bg-blue-100 ml-auto rounded-br-none' : 'bg-white mr-auto rounded-bl-none border border-gray-200'}`}
            >
              <strong className={`font-semibold ${msg.role === 'user' ? 'text-blue-800' : 'text-gray-800'}`}>
                {msg.role === 'user' ? 'You:' : 'Assistant:'}
              </strong>{' '}
              {msg.content}
              {msg.role === 'assistant' && msg.rewritten_query && (
                <details className="text-xs text-gray-600 mt-2 cursor-pointer">
                  <summary className="font-medium hover:text-gray-800">Rewritten Query</summary>
                  <p className="bg-gray-100 border-l-2 border-gray-300 pl-2 py-1 mt-1 rounded-sm italic">
                    {msg.rewritten_query}
                  </p>
                </details>
              )}
              {msg.role === 'assistant' && msg.sources && msg.sources.length > 0 && (
                <details className="text-xs text-gray-600 mt-2 cursor-pointer">
                  <summary className="font-medium hover:text-gray-800">Sources ({msg.sources.length})</summary>
                  <div className="bg-gray-100 border-l-2 border-blue-400 pl-2 py-1 mt-1 rounded-sm">
                    {msg.sources.map((source, sIdx) => (
                      <div key={sIdx} className="mb-1 last:mb-0">
                        <strong className="text-blue-700">{source.source_type === 'pdf' ? '📄 PDF' : '🌐 Web'}:</strong>{' '}
                        {source.source_name} (Page: {source.page})
                        <br />
                        <span className="italic">{source.content_preview}</span>
                      </div>
                    ))}
                  </div>
                </details>
              )}
              {msg.role === 'assistant' && msg.is_relevant === false && (
                  <p className="text-xs text-red-600 mt-2 font-medium">
                      (Note: This response is a fallback as relevant information was not found or query was outside scope.)
                  </p>
              )}
            </div>
          ))}
          {loading && (
            <div className="mb-4 p-3 rounded-lg max-w-[80%] shadow-sm text-sm bg-white mr-auto rounded-bl-none border border-gray-200">
              <strong className="font-semibold text-gray-800">Assistant:</strong> Thinking...
            </div>
          )}
        </div>

        <form onSubmit={handleChatSubmit} className="flex p-4 border-t border-gray-200 bg-white">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask a question about the restaurant..."
            disabled={loading}
            className="flex-grow p-3 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 text-base shadow-sm mr-3"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
                       disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}