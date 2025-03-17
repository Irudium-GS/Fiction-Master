import React from 'react';
import { Construction, Hammer, Clock, ChevronDown } from 'lucide-react';

function WorkUnderConstruction() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              <Construction className="text-white/10 w-12 h-12" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="animate-bounce-slow mb-6">
            <Hammer className="w-20 h-20 text-white mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Work Under Construction
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-delay">
            We're building something amazing. Stay tuned for the grand reveal!
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Estimated Time",
              icon: <Clock className="w-8 h-8 text-red-600" />,
              description: "Our team is working hard to complete the project within the next few weeks."
            },
            {
              title: "What's Happening",
              icon: <Construction className="w-8 h-8 text-red-600" />,
              description: "We're upgrading our infrastructure and implementing new features."
            },
            {
              title: "Stay Updated",
              icon: <Hammer className="w-8 h-8 text-red-600" />,
              description: "Check back regularly for updates on our progress."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                {item.icon}
                <h2 className="text-xl font-semibold ml-3 text-gray-900">{item.title}</h2>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkUnderConstruction;