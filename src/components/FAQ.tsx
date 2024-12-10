import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Clock, Users, Book, Rocket, Zap } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'How long does the program take?',
      icon: Clock,
      answer: [
        "Our program is designed to be both intensive and flexible, typically running for 3-6 months depending on your project's scope and your dedication. Here's how it breaks down:",
        "• First Month: Foundation building and project planning",
        "• Months 2-3: Core development and weekly mentorship sessions",
        "• Months 4-5: Advanced features and optimization",
        "• Final Month: Launch preparation and market strategy",
        "The beauty of BuildSchool is that you can accelerate or extend your journey based on your progress and goals. Some students have launched MVPs in just 8 weeks, while others take more time to perfect their products. Remember, we're not just building a project – we're building your future in tech! 🚀"
      ]
    },
    {
      question: 'Do I need prior coding experience?',
      icon: Book,
      answer: [
        "Absolutely not! We've designed BuildSchool to welcome both complete beginners and experienced developers. Here's why you shouldn't worry:",
        "• Our curriculum adapts to your skill level",
        "• We start with fundamentals and progress at your pace",
        "• You'll have access to beginner-friendly resources and tutorials",
        "• Our mentors are trained to explain complex concepts simply",
        "Fun fact: Some of our most successful graduates started with zero coding experience! We've had artists, marketers, and even a former chef transform into skilled developers. What matters most is your enthusiasm to learn and willingness to embrace challenges. Remember, every expert was once a beginner! 💡"
      ]
    },
    {
      question: 'What kind of support do you provide?',
      icon: Users,
      answer: [
        "At BuildSchool, support isn't just a feature – it's our core philosophy! You'll get:",
        "🎯 1-on-1 Mentorship",
        "• Weekly private sessions with industry experts",
        "• On-demand emergency debugging help",
        "• Career guidance and networking opportunities",
        "",
        "👥 Community Support",
        "• Access to our vibrant Discord community",
        "• Weekly group coding sessions",
        "• Peer review system for code feedback",
        "",
        "🛠️ Technical Resources",
        "• Comprehensive learning materials",
        "• Premium dev tool subscriptions",
        "• Cloud credits for your projects",
        "",
        "Think of us as your personal tech team, available 24/7 to help you overcome any challenge! We've got your back from 'Hello World' to your first production deployment. 🌟"
      ]
    },
    {
      question: 'Can I work on my own project idea?',
      icon: Rocket,
      answer: [
        "Not only can you work on your own project – we absolutely encourage it! Here's why this approach works so well:",
        "",
        "🎯 Personal Investment",
        "• You're more motivated when building something you're passionate about",
        "• Real-world problem-solving becomes more engaging",
        "• Your project can potentially become a viable business",
        "",
        "🛠️ Customized Learning Path",
        "• We adapt our curriculum to fit your project needs",
        "• Learn exactly the technologies your idea requires",
        "• Get industry insights specific to your domain",
        "",
        "Success Story: One of our students came in with an idea for a pet care app. By the end of the program, they had launched in 3 cities and secured seed funding! Your idea could be next! 🚀",
        "",
        "Remember: No idea is too big or too small. We'll help you scope it properly and build it step by step!"
      ]
    },
    {
      question: 'What makes BuildSchool different?',
      icon: Sparkles,
      answer: [
        "BuildSchool isn't just another coding bootcamp – we're a career transformation laboratory! Here's what sets us apart:",
        "",
        "🎯 Personalized Learning",
        "• Custom curriculum tailored to YOUR goals",
        "• Adaptive learning pace",
        "• Individual attention and mentorship",
        "",
        "🚀 Real-World Focus",
        "• Build actual products, not just tutorials",
        "• Industry-standard development practices",
        "• Launch-ready projects by graduation",
        "",
        "💡 Innovation-First Approach",
        "• Latest tech stack and best practices",
        "• Entrepreneurial mindset development",
        "• Focus on scalable, production-grade code",
        "",
        "🌟 Elite Network",
        "• Connect with successful founders",
        "• Join our alumni network of tech leaders",
        "• Exclusive industry events and workshops",
        "",
        "We don't just teach coding – we create the next generation of tech innovators! 🌈"
      ]
    },
    {
      question: 'What happens after graduation?',
      icon: Zap,
      answer: [
        "Graduation is just the beginning of your BuildSchool journey! Here's what you can expect:",
        "",
        "🚀 Immediate Benefits",
        "• Lifetime access to our learning resources",
        "• Continued mentorship opportunities",
        "• Priority access to new courses and workshops",
        "",
        "🌟 Career Support",
        "• Resume and portfolio review",
        "• Interview preparation sessions",
        "• Job referrals from our network",
        "",
        "💼 Entrepreneurship Track",
        "• Startup mentorship program",
        "• Investor networking events",
        "• Business development workshops",
        "",
        "🤝 Alumni Network",
        "• Join our active alumni community",
        "• Participate in alumni-exclusive events",
        "• Opportunity to become a mentor",
        "",
        "Our most successful graduates often say that finishing the program was just their first chapter in the BuildSchool story! 🌈"
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  {faq.answer.map((paragraph, i) => (
                    <p
                      key={i}
                      className={`text-gray-300 ${
                        paragraph.startsWith('•') ? 'ml-4' : ''
                      } ${i > 0 ? 'mt-2' : ''}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}