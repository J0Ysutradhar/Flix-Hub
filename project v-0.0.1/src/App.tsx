import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Network as Netflix, Play, Music, ShoppingCart, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Search } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiYoutube } from 'react-icons/ci';
import { FaAirbnb, FaAmazonPay, FaMoneyBill, FaYoutube } from 'react-icons/fa';
import { BsApp } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa6';
import ContactForm from './components/ContactForm1';
import WhatsAppSupport from './components/WhatsAppSupport';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState<Array<{ id: string, name: string, price: number }>>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const subscriptions = [
    {
      id: 'netflix',
      name: 'Netflix Premium',
      price: 350,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: Netflix,
      image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/08/netflix-icon.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5'
    },
    {
      id: 'youtube',
      name: 'Youtube Premium',
      price: 150,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaYoutube,
      image: 'https://images.unsplash.com/photo-1649180543887-158357417159?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'prime',
      name: 'Amazon Prime',
      price: 100,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaAmazonPay,
      image: 'https://i.pcmag.com/imagery/articles/05qp7E8Z6G2lM79Y6Epl0tl-11.fit_lim.size_768x.jpg'
    },
    {
      id: 'spotify',
      name: 'Spotify Premium',
      price: 170,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
      id: 'zee5',
      name: 'Zee5 Premium Subscription',
      price: 200,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaMoneyBill,
      image: 'https://images.hindustantimes.com/tech/img/2020/06/18/960x540/Untitled_design_(91)_1592490698203_1592490708715.png'
    },
    {
      id: 'capcut',
      name: 'Capcut Pro Premium Account',
      price: 299,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: BsApp,
      image: 'https://static.qustodio.com/public-site/uploads/2024/11/12112226/2024-11-Blog-Is-Capcut-safe-for-kids__Hero.jpg'
    },
    {
      id: 'hoichoi',
      name: 'Hoichoi Premium Subscription',
      price: 120,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaYoutube,
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Hoichoi-Logos-3.png'
    },
    {
      id: 'chorki',
      name: 'Chorki Premium Subscription',
      price: 120,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaVideo,
      image: 'https://43944323.fs1.hubspotusercontent-na1.net/hub/43944323/hubfs/Imported_Blog_Media/Download-Now-6.png?width=930&height=523&name=Download-Now-6.png'
    },
    {
      id: 'canva',
      name: 'Canva Pro',
      price: 50,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: Netflix,
      image: 'https://coursevania.com/wp-content/uploads/2023/08/5308280_ab92_2.jpg'
    },
    {
      id: 'ullu',
      name: 'UllU Premium Subscription',
      price: 120,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: Music,
      image: 'https://images.indianexpress.com/2023/06/ullu-logo.jpg?w=1500'
    },
    {
      id: 'sonyliv',
      name: 'SonyLiv Premium Subscription',
      price: 150,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: Music,
      image: 'https://www.nfbangladesh.com/wp-content/uploads/2022/06/sony-logo.jpg'
    },
    {
      id: 'tsport',
      name: 'T-Sports',
      price: 230,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaVideo,
      image: 'https://cdn.daily-sun.com/public/news_images/2022/02/01/01-02-2022.jpg'
    },
    {
      id: 'crunchyroll',
      name: 'Crunchyroll Premium Subscription',
      price: 180,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaYoutube,
      image: 'https://assets.aboutamazon.com/f8/2a/e21459814491b9aac0134bfffaf8/cr-1920x1080.jpg'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT Plus Subscription',
      price: 399,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: FaAirbnb,
      image: 'https://digitalfloats.com/wp-content/uploads/2023/10/ChatGPT.jpg'
    },
    {
      id: 'gemini',
      name: 'Gemini AI Advanced Subscription',
      price: 399,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: Play,
      image: 'https://cdn.mos.cms.futurecdn.net/cz7uBaDiAgNokpwpFSPPsS-650-80.jpg.webp'
    },
    {
      id: 'quillbot',
      name: 'Quillbot Premium',
      price: 180,
      description: 'Product Type: Subscribed Email & Password. Validity: 1 Month. Delevery time: 30 minutes',
      icon: CiYoutube,
      image: 'https://www.01net.com/en/app/uploads/2023/11/How-to-Unblock-Quillbot-896x596.jpg'
    }
  ];

  const filteredSubscriptions = subscriptions.filter(subscription =>
    subscription.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subscription.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (subscription: typeof subscriptions[0]) => {
    setCart([...cart, subscription]);
    setShowCart(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <nav className="fixed w-full z-50">
        <div className={`w-full transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Flix HUB
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-6"
              >
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full transition-colors duration-300 ${darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                >
                  {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                <button
                  onClick={() => setShowCart(true)}
                  className={`relative p-2 rounded-full transition-colors duration-300 ${darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-blue-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-blue-600'
                    }`}
                >
                  <ShoppingCart size={22} />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-12 px-6"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Discover the best subscription plans for your favorite services</h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className={`relative flex items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
              <Search className="absolute left-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search subscriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-lg outline-none ${
                  darkMode 
                    ? 'bg-gray-800 text-white placeholder-gray-400' 
                    : 'bg-white text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>

          <Slider {...sliderSettings}>
            <div className="p-6 bg-black-100 light:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">25 Item</h3>
              <p className="text-lg">Are available in our shop</p>
            </div>
            <div className="p-6 bg-black-100 light:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">2889 Sells</h3>
              <p className="text-lg">To our customers</p>
            </div>
            <div className="p-6 bg-black-100 light:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">830 Customers</h3>
              <p className="text-lg">In our believes</p>
            </div>
          </Slider>
        </div>
      </motion.section>

      <section className="px-6 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubscriptions.length > 0 ? (
            filteredSubscriptions.map((subscription, index) => (
              <motion.div
                key={subscription.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={subscription.image}
                    alt={subscription.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <subscription.icon size={24} className="text-blue-500" />
                    <h3 className="text-xl font-semibold">{subscription.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{subscription.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">BDT {subscription.price}</span>
                    <button
                      onClick={() => addToCart(subscription)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No subscriptions found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search query</p>
            </div>
          )}
        </div>
      </section>

      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                Flix HUB
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your one-stop destination for premium streaming subscriptions at competitive prices. <br />We are passionate about bringing you the best subscription services available. Our team works tirelessly to find and negotiate the best deals so you can enjoy premium content without breaking the bank.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">FAQs</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>flixhub000@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+8801402244819</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>568/3 Nuton Bazar, Dhaka</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61564992263994" target='_blank' className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                  <Facebook size={20} />
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                  <Twitter size={20} />
                </a>
                <a href="#" className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>© {new Date().getFullYear()} Flix HUB. All rights reserved.</p>
          </div>
          <span><p>Developed By</p><a href="https://www.facebook.com/J0ySutradhar" target="_blank">MetaXsouL</a></span>
        </div>
      </footer>

      {showCart && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className={`absolute right-0 top-0 h-full w-full max-w-md ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Your Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              {cart.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <div className="flex items-center gap-4">
                          <span>{item.price} BDT</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <span>Total:</span>
                      <span>{total.toFixed(2)} BDT</span>
                    </div>
                  </div>
                </>
              )}
              <ContactForm cart={cart} total={total} onClose={() => setShowCart(false)} />
            </div>
          </motion.div>
        </div>
      )}
      <WhatsAppSupport darkMode={darkMode} />
    </div>
  );
}

export default App;