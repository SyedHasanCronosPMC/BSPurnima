import { Play, Quote, Star } from 'lucide-react';

export function TestimonialsPage() {
  const testimonials = [
    {
      type: 'text',
      name: 'Alex Thompson',
      role: 'Software Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'The mentorship at BuildSchool was transformative. I went from having a basic idea to launching a fully-functional SaaS product in just 4 months!',
    },
    {
      type: 'video',
      name: 'Jessica Lee',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=success-story',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    },
    {
      type: 'text',
      name: 'David Kumar',
      role: 'Startup Founder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      content: 'BuildSchool provided the perfect blend of technical expertise and business acumen. Their network of mentors is simply outstanding.',
    },
    {
      type: 'link',
      name: 'Maria Garcia',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      link: 'https://medium.com/@maria/my-buildschool-journey',
      title: 'From Idea to IPO: My BuildSchool Journey',
    },
    {
      type: 'text',
      name: 'James Wilson',
      role: 'AI Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'The AI curriculum at BuildSchool is cutting-edge. I learned more in 3 months than I did in a year of self-study.',
    },
    {
      type: 'video',
      name: 'Sophie Chen',
      role: 'Mobile Developer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=mobile-app-success',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Success Stories
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how BuildSchool has helped students and professionals transform their ideas into successful ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {testimonial.type === 'text' && (
                <div className="p-6">
                  <Quote className="w-10 h-10 text-blue-400 mb-4" />
                  <p className="text-gray-300 text-lg mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}

              {testimonial.type === 'video' && (
                <div className="relative group">
                  <img
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name}'s story`}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <div className="p-4 bg-gray-800">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="text-white font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {testimonial.type === 'link' && (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    {testimonial.title}
                    <Star className="w-5 h-5 text-yellow-400" />
                  </h3>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}