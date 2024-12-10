import { useEffect } from 'react';
import { ApplicationForm } from '../components/ApplicationForm';

export function ApplicationPage() {
  // Ensure smooth scrolling to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ApplicationForm onClose={() => window.history.back()} />
      </div>
    </div>
  );
}