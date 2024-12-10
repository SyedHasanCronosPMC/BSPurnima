import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Schedule() {
  return (
    <section id="schedule" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Schedule Your Interview
          </h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl">
            <Calendar className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <p className="text-gray-300 mb-8">
              Ready to start your journey? Schedule a personal interview with our team to discuss your goals and how we can help you achieve them.
            </p>
            <Link 
              to="/apply"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all"
            >
              Book Your Interview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}