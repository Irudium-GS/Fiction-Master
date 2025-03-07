import React from 'react';
import { Megaphone, BarChart, Users, Target, Search, Share2, Mail, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DigitalMarketing() {
  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}

      <section className="relative py-20 bg-gradient-to-r from-red-600 to-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Digital Marketing
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Transform your online presence and reach your target audience effectively
                  </p>
                </motion.div>
              </div>
            </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Search />}
              title="SEO Optimization"
              description="Improve your search engine rankings and drive organic traffic"
            />
            <ServiceCard
              icon={<Share2 />}
              title="Social Media Marketing"
              description="Engage with your audience across all social platforms"
            />
            <ServiceCard
              icon={<Mail />}
              title="Email Marketing"
              description="Create targeted email campaigns that convert"
            />
            <ServiceCard
              icon={<TrendingUp />}
              title="PPC Advertising"
              description="Maximize ROI with targeted paid advertising campaigns"
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Digital Marketing Services</h2>
          
          <div className="space-y-12">
            <DetailedService
              icon={<Megaphone className="w-12 h-12" />}
              title="Content Marketing"
              description="Create engaging content that resonates with your audience and drives conversions."
              features={[
                "Content Strategy Development",
                "Blog Writing and Management",
                "Content Distribution",
                "Performance Analytics"
              ]}
              image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80"
            />

            <DetailedService
              icon={<BarChart className="w-12 h-12" />}
              title="Analytics and Reporting"
              description="Make data-driven decisions with comprehensive analytics and reporting."
              features={[
                "Performance Tracking",
                "Conversion Analysis",
                "ROI Measurement",
                "Custom Reports"
              ]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            />

            <DetailedService
              icon={<Users className="w-12 h-12" />}
              title="Social Media Marketing"
              description="Build and engage with your community across social platforms."
              features={[
                "Platform Strategy",
                "Content Creation",
                "Community Management",
                "Paid Social Campaigns"
              ]}
              image="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80"
            />

            <DetailedService
              icon={<Target className="w-12 h-12" />}
              title="PPC and Display Advertising"
              description="Reach your target audience with precision through paid advertising."
              features={[
                "Campaign Strategy",
                "Ad Creation",
                "Budget Management",
                "Performance Optimization"
              ]}
              image="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Digital Presence?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create a digital marketing strategy that works for your business
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <div className="text-red-600 flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function DetailedService({ icon, title, description, features, image }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1">
        <div className="text-red-600 mb-4">{icon}</div>
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
      <div className="order-1 md:order-2">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-xl w-full h-64 object-cover"
        />
      </div>
    </div>
  );
}