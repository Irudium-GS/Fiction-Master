import React from 'react';
import { Monitor, Globe, Palette, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions to drive your business forward in the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Globe className="w-12 h-12" />}
              title="Digital Marketing Strategy"
              description="Develop comprehensive digital marketing strategies tailored to your business goals and target audience."
              features={[
                "Market Research & Analysis",
                "Competitor Analysis",
                "Target Audience Identification",
                "ROI-focused Campaigns"
              ]}
            />

            <ServiceCard
              icon={<Monitor className="w-12 h-12" />}
              title="Social Media Management"
              description="Expert social media management to boost your brand's online presence and engagement."
              features={[
                "Content Creation & Curation",
                "Community Management",
                "Analytics & Reporting",
                "Campaign Management"
              ]}
            />

            <ServiceCard
              icon={<Layout className="w-12 h-12" />}
              title="Brand Development"
              description="Create and evolve your brand identity to stand out in today's competitive market."
              features={[
                "Brand Strategy",
                "Visual Identity Design",
                "Brand Guidelines",
                "Brand Voice Development"
              ]}
            />

            <ServiceCard
              icon={<Palette className="w-12 h-12" />}
              title="Graphic Design Services"
              description="Professional graphic design services to enhance your visual communication."
              features={[
                "Logo Design",
                "Marketing Materials",
                "Social Media Graphics",
                "Website Design"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our IT solutions can help you achieve your business goals
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-red-600 mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}