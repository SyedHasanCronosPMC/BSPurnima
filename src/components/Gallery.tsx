import { useState } from 'react';
import { Camera, Heart, X } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  comment: string;
  relatedPhotos: {
    image: string;
    caption: string;
  }[];
}

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      title: "Intense Coding Session",
      comment: "When your code works on the first try and you feel like a wizard! 🧙‍♂️ Plot twist: It had a semicolon missing.",
      relatedPhotos: [
        {
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
          caption: "The moment you realize you've been debugging for 4 hours straight! 🤓"
        },
        {
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
          caption: "When the code finally compiles but you're not sure why 😅"
        },
        {
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
          caption: "That 'in the zone' feeling when everything just clicks! ⚡"
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80",
      title: "Late Night Debugging",
      comment: "3 AM debugging session fueled by coffee and determination. The bug was a typo all along! 😅 Classic programmer moment.",
      relatedPhotos: [
        {
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
          caption: "The calm before the storm - setting up for an all-nighter 🌙"
        },
        {
          image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80",
          caption: "When the coffee kicks in and the code starts flowing! ☕"
        },
        {
          image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80",
          caption: "Victory lap after fixing that impossible bug 🏆"
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      title: "Team Collaboration",
      comment: "When the whole squad comes together to fix that one bug that's been haunting us for days. Spoiler: It was in the documentation! 📚",
      relatedPhotos: [
        {
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
          caption: "Brainstorming session that turned into a meme fest 🎭"
        },
        {
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
          caption: "Planning world domination (or just the next sprint) 🌍"
        },
        {
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
          caption: "When everyone's code works together perfectly! 🎯"
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      title: "Project Launch Day",
      comment: "That moment when you deploy to production and pray to the server gods! 🙏 No rollbacks needed (yet).",
      relatedPhotos: [
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          caption: "The calm before hitting the deploy button 😰"
        },
        {
          image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80",
          caption: "Monitoring those servers like a hawk 🦅"
        },
        {
          image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
          caption: "Success celebration - we're live! 🎉"
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&q=80",
      title: "Breakthrough Moment",
      comment: "When you finally understand that complex algorithm after staring at it for 3 hours. Brain: 1, Code: 0! 🧠",
      relatedPhotos: [
        {
          image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&q=80",
          caption: "The exact moment it all makes sense! 💡"
        },
        {
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
          caption: "Explaining your solution like a boss 🎓"
        },
        {
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80",
          caption: "When you realize you can optimize it even further 🚀"
        }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      title: "Mentorship Magic",
      comment: "Our mentor explaining why we shouldn't push directly to main. Meanwhile, someone just did! 😱 Plot twist incoming...",
      relatedPhotos: [
        {
          image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80",
          caption: "Learning from the best in the business 🌟"
        },
        {
          image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80",
          caption: "When the mentor drops some mind-blowing knowledge 🤯"
        },
        {
          image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
          caption: "Pair programming session turned life lesson 📚"
        }
      ]
    }
  ];

  return (
    <>
      <section id="gallery" className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Life at BuildSchool
            </h2>
            <p className="text-gray-400 mt-4">Capturing the moments that make coding awesome!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-gray-800 transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <Heart 
                      className={`w-6 h-6 transition-all duration-300 cursor-pointer ${
                        hoveredIndex === index ? 'text-red-500 scale-110' : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <p className="text-gray-300 text-sm italic">
                    {item.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Related Photos */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-6xl mx-auto relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-0 top-0 text-white p-2 hover:text-blue-400 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-3xl font-bold text-white mb-8">
                More from {selectedItem.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {selectedItem.relatedPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={photo.image}
                        alt={photo.caption}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-300 text-sm italic">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}