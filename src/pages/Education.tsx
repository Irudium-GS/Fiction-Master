import React from 'react';
import { Code, ShoppingBag, Megaphone, Palette } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-black">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Professional Education</h1>
            <p className="text-xl">
              Advance your career with our industry-focused courses
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard
              icon={<Code className="w-12 h-12" />}
              title="Full Stack Development"
              description="Master both front-end and back-end development with modern technologies."
              duration="24 weeks"
              level="Intermediate to Advanced"
              topics={[
                "HTML, CSS, JavaScript",
                "React & Node.js",
                "Database Management",
                "API Development",
                "DevOps & Deployment"
              ]}
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            />

            <CourseCard
              icon={<ShoppingBag className="w-12 h-12" />}
              title="E-commerce Development"
              description="Learn to build and manage modern e-commerce platforms."
              duration="16 weeks"
              level="Intermediate"
              topics={[
                "E-commerce Platforms",
                "Payment Integration",
                "Inventory Management",
                "Security Best Practices",
                "Analytics & Optimization"
              ]}
              image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
            />

            <CourseCard
              icon={<Megaphone className="w-12 h-12" />}
              title="Digital Marketing Course"
              description="Master the art of digital marketing and grow online presence."
              duration="12 weeks"
              level="Beginner to Intermediate"
              topics={[
                "SEO & Content Marketing",
                "Social Media Strategy",
                "Email Marketing",
                "PPC Advertising",
                "Analytics & Reporting"
              ]}
              image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"
            />

            <CourseCard
              icon={<Palette className="w-12 h-12" />}
              title="UI/UX Design Course"
              description="Create beautiful and functional user interfaces."
              duration="16 weeks"
              level="Beginner to Intermediate"
              topics={[
                "Design Principles",
                "User Research",
                "Wireframing & Prototyping",
                "Design Systems",
                "User Testing"
              ]}
              image="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Industry Experts"
              description="Learn from professionals with years of real-world experience"
            />
            <FeatureCard
              title="Practical Projects"
              description="Build a portfolio with real-world projects and case studies"
            />
            <FeatureCard
              title="Career Support"
              description="Get guidance on job placement and career advancement"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Learning Journey Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            Transform your career with our professional courses
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}

function CourseCard({ icon, title, description, duration, level, topics, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="text-red-600 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="text-sm text-gray-500">Duration: {duration}</div>
          <div className="text-sm text-gray-500">Level: {level}</div>
        </div>
        <div className="space-y-2">
          {topics.map((topic, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}