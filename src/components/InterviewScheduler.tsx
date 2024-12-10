declare global {
  interface Window {
    Calendly: any;
  }
}

import { useCallback, useEffect, useState } from 'react';

interface InterviewSchedulerProps {
  onSchedule?: (date: Date, time: string) => void;
  onClose?: () => void;
}

export const InterviewScheduler: React.FC<InterviewSchedulerProps> = ({ onSchedule, onClose }) => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Check if Calendly is already loaded
    if (window.Calendly) {
      setIsCalendlyLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      setIsCalendlyLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleScheduleInterview = useCallback(() => {
    const calendlyUrl = 'https://calendly.com/syed-hasan-cronospmc/build-school-interview';
    
    // Simple direct URL open if Calendly isn't loaded
    if (!isCalendlyLoaded || !window.Calendly) {
      window.open(calendlyUrl, '_blank');
      return;
    }

    try {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        prefill: {},
        hideEventTypeDetails: false,
        hideGdprBanner: true,
        callbacks: {
          date_and_time_selected: (event: any) => {
            const selectedDate = new Date(event.event.start_time);
            const timeString = selectedDate.toLocaleTimeString();
            onSchedule?.(selectedDate, timeString);
          }
        }
      });
    } catch (error) {
      console.error('Error initializing Calendly:', error);
      // Fallback to direct URL
      window.open(calendlyUrl, '_blank');
    }
  }, [isCalendlyLoaded, onSchedule]);

  return (
    <div className="flex flex-col space-y-6 p-6 bg-[#1a1b1e] rounded-lg max-w-md w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[#6b7aff] text-2xl font-semibold">
          Schedule Your Interview
        </h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          Cancel ✕
        </button>
      </div>

      <p className="text-gray-300">
        Choose a time that works best for you.
      </p>

      <button
        onClick={handleScheduleInterview}
        className="w-full py-3 px-4 bg-gradient-to-r from-[#6b7aff] to-[#a855f7] 
                 text-white rounded-lg flex items-center justify-center space-x-2
                 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-purple-500 focus:outline-none"
        aria-label="Open schedule interview calendar"
      >
        Schedule Now
      </button>
    </div>
  );
};