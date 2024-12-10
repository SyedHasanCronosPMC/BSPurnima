import { Mail, Phone, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Talk to Us
          </h2>
          <p className="text-gray-400 mt-4">
            Choose your preferred way to connect with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="tel:+971585990150"
            className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300 group"
          >
            <Phone className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all" />
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+971 58 599 0150</p>
          </a>

          <a
            href="mailto:contact@buildschool.com"
            className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300 group"
          >
            <Mail className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all" />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">contact@buildschool.com</p>
          </a>

          <a
            href="https://wa.me/971585990150"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300 group"
          >
            <MessageSquare className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all" />
            <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400">Chat with us</p>
          </a>
        </div>
      </div>
    </section>
  );
}