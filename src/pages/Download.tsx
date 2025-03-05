import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types/';
import { toast } from 'react-hot-toast';
import FullStack from '../components/Assets/Full-Stack.jpg'
import Ecommerce from '../components/Assets/E-commerce.jpg'
import UI from '../components/Assets/UI-Design.jpg'
import DropShip from '../components/Assets/Shipping.jpg'
import DigitalMarket from '../components/Assets/Digital-Marketing.jpg'

// Import images
// const FullStack = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
// const Ecommerce = 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
// const UI = 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
// const DropShip = 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
// const DigitalMarket = 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const booksData = [
  {
    category: 'Business',
    books: [
      {
        id: 'ecommerce-solutions',
        title: 'E-Commerce Solutions',
        image: Ecommerce,
        duration: '12 weeks',
        students: '250+',
        rating: '4.9',
        price: '₹299',
        priceValue: 299,
      },
      {
        id: 'drop-shipping',
        title: 'Drop Shipping',
        image: DropShip,
        duration: '6 weeks',
        students: '180+',
        rating: '4.8',
        price: '₹149',
        priceValue: 149,
      },
    ],
  },
  {
    category: 'Non-Coding',
    books: [
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        image: UI,
        duration: '8 weeks',
        students: '150+',
        rating: '4.7',
        price: '₹199',
        priceValue: 199,
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        image: DigitalMarket,
        duration: '4 weeks',
        students: '120+',
        rating: '4.8',
        price: '₹99',
        priceValue: 99,
      },
    ],
  },
  {
    category: 'Programming',
    books: [
      {
        id: 'full-stack-development',
        title: 'Full Stack Development',
        image: FullStack,
        duration: '16 weeks',
        students: '200+',
        rating: '4.9',
        price: '₹299',
        priceValue: 299,
      },
    ],
  },
];

const Download: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="pt-16">
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Books</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your skills with our comprehensive product catalog.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksData.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.books.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600 truncate">{product.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600 truncate">{product.students}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600 truncate">{product.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                          <span className="text-2xl font-bold text-red-600">{product.price}</span>
                          <button 
                            onClick={() => handleAddToCart(product)}
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Books?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Expert Authors',
                description: 'Learn from published authors and industry professionals',
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'Join our community for discussions and feedback',
              },
              {
                icon: Clock,
                title: 'Lifetime Access',
                description: 'Buy once and access your books forever',
              },
              {
                icon: Star,
                title: 'Proven Results',
                description: 'Join our successful alumni of industry professionals',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;