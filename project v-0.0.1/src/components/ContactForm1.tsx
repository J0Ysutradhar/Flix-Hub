import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CreditCard, Wallet, Building2, Bitcoin, Copy } from 'lucide-react';
import { FaCopy } from 'react-icons/fa';
import './ContactForm1.css';

interface ContactFormProps {
  cart: Array<{id: string; name: string; price: number}>;
  total: number;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ cart, total, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    paymentMethod: '',
    transactionId: ''
  });
  const [copied, setCopied] = useState('');

  const paymentMethods = [
    { 
      id: 'bkash', 
      name: 'Bkash', 
      icon: Wallet,
      accountInfo: {
        number: '01402244819',
        type: 'Personal'
      }
    },
    { 
      id: 'nagad', 
      name: 'Nagad', 
      icon: Wallet,
      accountInfo: {
        number: '01402244819',
        type: 'Personal'
      }
    },
    // { 
    //   id: 'upay', 
    //   name: 'Upay', 
    //   icon: Wallet,
    //   accountInfo: {
    //     number: '01402244819',
    //     type: 'Personal'
    //   }
    // },
    { 
      id: 'rocket', 
      name: 'Rocket', 
      icon: Wallet,
      accountInfo: {
        number: '01402244819',
        type: 'Personal'
      }
    },
    { 
      id: 'binance', 
      name: 'Binance', 
      icon: Bitcoin,
      accountInfo: {
        UID: '723873940',
        token: 'USDT',
        // network: 'BNB Smart Chain (BSC)'
      }
    },
    { 
      id: 'bitget', 
      name: 'Bitget', 
      icon: Bitcoin,
      accountInfo: {
        UID: '7679790019',
        token: 'USDT',
        // network: 'BNB Smart Chain (BSC)'
      }
    },
    // { 
    //   id: 'bank', 
    //   name: 'Bank Transfer', 
    //   icon: Building2,
    //   accountInfo: {
    //     bankName: 'Example Bank',
    //     accountName: 'John Doe',
    //     accountNumber: 'XXXX-XXXX-XXXX-XXXX',
    //     routingNumber: 'XXXXXXXX'
    //   }
    // }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderDetails = cart.map(item => `${item.name}: $${item.price}`).join('\n');
    const fullMessage = `
Order Details:
${orderDetails}
Total: $${total.toFixed(2)}

Payment Method: ${formData.paymentMethod}
Transaction ID: ${formData.transactionId}

Customer Message:
${formData.message}
    `;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '03ee764e-3438-4e22-90b9-49c6ce95eb09', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: fullMessage,
        }),
      });

      if (response.ok) {
        alert('Order submitted successfully!');
        onClose();
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (error) {
      alert('Failed to submit order. Please try again.');
    }
  };

  const getTransactionLabel = () => {
    switch (formData.paymentMethod) {
      case 'binance':
      case 'bitget':
        return 'Transaction Hash';
      case 'bank':
        return 'Transfer Reference';
      default:
        return 'Transaction ID';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000); // Reset copied state after 2 seconds
  };

  const renderAccountInfo = () => {
    const selectedMethod = paymentMethods.find(method => method.id === formData.paymentMethod);
    if (!selectedMethod) return null;

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.3 }}
        className="p-4 rounded-lg bg-light-50 dark:bg-dark-800 border border-light-200 dark:border-gray-700 space-y-2"
      >
        <h4 className="font-medium text-sm text-light-900 dark:text-white-100">Payment Details</h4>
        {selectedMethod.id === 'bank' ? (
          <>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text-white-400">Bank Name:</span>
              {/* <span className="font-medium">{selectedMethod.accountInfo.bankName}</span> */}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text.white-400">Account Name:</span>
              {/* <span className="font-medium">{selectedMethod.accountInfo.accountName}</span> */}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text-gray-400">Account Number:</span>
              <div className="flex items-center gap-2">
                {/* <span className="font-medium">{selectedMethod.accountInfo.accountNumber}</span> */}
                <button
                  type="button"
                  onClick={() => copyToClipboard("01402244819")}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text-gray-400">Routing Number:</span>
              <div className="flex items-center gap-2">
                {/* <span className="font-medium">{selectedMethod.accountInfo.routingNumber}</span> */}
                <button
                  type="button"
                  // onClick={() => copyToClipboard(selectedMethod.accountInfo.routingNumber)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </>
        ) : selectedMethod.id === 'binance' || selectedMethod.id === 'bitget' ? (
          <>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text-white-400">Coin:</span>
              <span className="font-medium">{selectedMethod.accountInfo.token}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text-white-400">Address/UID:</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{selectedMethod.accountInfo.UID}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(selectedMethod.accountInfo.UID)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
            {/* <div>
              <label>Binance Address:</label>
              <span onClick={() => handleCopy('BINANCE_ADDRESS')}>
                <FaCopy /> {copied === 'BINANCE_ADDRESS' ? 'Copied!' : 'Copy'}
              </span>
            </div>
            <div>
              <label>Bitget Address:</label>
              <span onClick={() => handleCopy('BITGET_ADDRESS')}>
                <FaCopy /> {copied === 'BITGET_ADDRESS' ? 'Copied!' : 'Copy'}
              </span>
            </div> */}
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text-white-400">Account Type:</span>
              <span className="font-medium">{selectedMethod.accountInfo.type}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-white-600 dark:text.white-400">Number:</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{selectedMethod.accountInfo.number}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(selectedMethod.accountInfo.number)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <div className="contact-form-container">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="space-y-4 contact-form"
      >
        <div>
          <label htmlFor="name" className="block text-light  font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 rounded-lg border dark:border-light-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none input-white-bg input-field"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-light font-medium mb-1">
            Email/whatsapp Number
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none input-white-bg input-field"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Payment Method
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  type="button"
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                    formData.paymentMethod === method.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-light-600 dark:text-light-400'
                      : 'border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600'
                  }`}
                  onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                >
                  <Icon size={18} />
                  {method.name}
                </button>
              );
            })}
          </div>
        </div>
        {formData.paymentMethod && (
          <>
            {renderAccountInfo()}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="transactionId" className="block text-sm font-medium mb-1">
                {getTransactionLabel()}
              </label>
              <input
                type="text"
                id="transactionId"
                required
                placeholder="Enter Transaction ID and Mobile number"
                className="w-full px-4 py-2 rounded-lg border light:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none input-white-bg input-field"
                value={formData.transactionId}
                onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
              />
            </motion.div>
          </>
        )}
        {/* <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none textarea-field"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div> */}
        <button
          type="submit"
          disabled={!formData.paymentMethod || !formData.transactionId}
          className="w-full px-6 py-3 bg-blue-500 text-light rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed submit-button"
        >
          <Send size={20} />
          Submit Order
        </button>
        {/* <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
          <h2 className="font-bold mb-2">Payment </h2>
          <ul className="list-disc list-inside">
            <li>Please double-check your Email, transaction ID and mobile number before submitting.</li>
          </ul>
        </div> */}
      </motion.form>
    </div>
  );
};

export default ContactForm;