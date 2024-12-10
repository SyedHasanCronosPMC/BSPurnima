import { Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface InterviewSchedulerProps {
  onSchedule: (date: Date, time: string) => void;
}

declare global {
  interface Window {
    Calendly: any;
  }
}

export function InterviewScheduler({ onSchedule }: InterviewSchedulerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCalendly = async () => {
      try {
        // Add Calendly styling
        const link = document.createElement('link');
        link.href = '/api/calendly/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Add Calendly script with error handling
        const script = document.createElement('script');
        script.src = '/api/calendly/assets/external/widget.js';
        script.async = true;
        
        script.onload = () => {
          if (containerRef.current && window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/syed-hasan-cronospmc/15min',
              parentElement: containerRef.current,
              prefill: {},
              utm: {}
            });
            setIsLoading(false);
          }
        };
        
        script.onerror = () => {
          setError('Failed to load scheduling widget');
          setIsLoading(false);
        };

        document.body.appendChild(script);

        return () => {
          document.head.removeChild(link);
          document.body.removeChild(script);
        };
      } catch (err) {
        setError('Failed to initialize scheduling widget');
        setIsLoading(false);
      }
    };

    loadCalendly();
  }, []);

  if (error) {
    return (
      <div className="p-8 bg-gray-800 rounded-xl text-center">
        <p className="text-red-400 mb-4">{error}</p>
        <p className="text-gray-400 mb-6">Please try scheduling directly through our Calendly page:</p>
        <a
          href="https://calendly.com/syed-hasan-cronospmc/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
        >
          Schedule on Calendly Website
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div
        ref={containerRef}
        className="calendly-inline-widget rounded-xl overflow-hidden relative"
        style={{
          minWidth: '320px',
          height: '700px',
          backgroundColor: 'rgb(17, 24, 39)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-400">Loading scheduling widget...</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-400">
        <Calendar className="w-5 h-5" />
        <span>15 minutes interview session</span>
      </div>
    </div>
  );
}