import { useState } from 'react';
import { X, Send, Calendar } from 'lucide-react';
import { InterviewScheduler } from './InterviewScheduler';

export function ApplicationForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    motivation: '',
    interviewDate: null as Date | null,
    interviewTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSchedule = (date: Date, time: string) => {
    setFormData({
      ...formData,
      interviewDate: date,
      interviewTime: time,
    });
    // Here you would typically send the complete form data to your backend
    console.log('Scheduled interview:', { ...formData, date, time });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-2xl relative">
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <button 
            onClick={onClose}
            className="group bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg flex items-center gap-2"
          >
            Cancel
            <X size={20} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Join BuildSchool
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-300 mb-2">Why should you be part of BuildSchool?</label>
                <textarea
                  required
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-8 py-4 rounded-lg text-lg font-semibold border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
              >
                Cancel Application
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
              >
                Continue
                <Send className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Schedule Your Interview
            </h2>
            <p className="text-gray-300 mb-8">Choose a time that works best for you.</p>
            
            <InterviewScheduler onSchedule={handleSchedule} />

            <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>15 minutes interview session</span>
            </div>

            <button
              onClick={() => setStep(1)}
              className="mt-6 w-full px-6 py-3 rounded-lg text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 transition-colors"
            >
              Back to Application Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}