import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart: React.FC = () => {
  const { items, totalAmount, removeFromCart, updateQuantity } = useCart();

  const handleRazorpayPayment = () => {
    if (items.length === 0) return;
    
    // This is where you would integrate with Razorpay
    // For now, we'll just show an alert
    alert('Razorpay integration will be implemented here');
    
    // Actual Razorpay implementation would look something like:
    /*
    const options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: totalAmount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      name: 'BookStore',
      description: 'Purchase of digital books',
      handler: function(response: any) {
        // Handle successful payment
        console.log(response);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
      },
      theme: {
        color: '#9C1A1C',
      },
    };
    
    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
    */
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any books to your cart yet.</p>
            <Link 
              to="/download" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md inline-flex items-center"
            >
              Browse Material
            </Link>
          </motion.div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Material
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {items.map((item) => (
                    <motion.tr 
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0">
                            <img className="h-16 w-16 rounded object-cover" src={item.image} alt={item.title} />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{item.price}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="mx-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          ₹{(item.priceValue * item.quantity).toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">Subtotal</p>
                  <p className="text-sm text-gray-500">Shipping and taxes calculated at checkout</p>
                </div>
                <div className="text-2xl font-bold text-red-600">₹{totalAmount.toFixed(2)}</div>
              </div>
              
              <div className="mt-6 flex justify-between">
                <Link 
                  to="/download" 
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md"
                >
                  Continue Shopping
                </Link>
                <button 
                  onClick={handleRazorpayPayment}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;