import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Premium Auto Sales</h3>
            <p className="text-gray-400 dark:text-gray-300 mb-4">
              Your trusted partner in finding the perfect vehicle since 1970.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-400 dark:text-gray-300">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 dark:text-gray-300">
                <Mail size={20} />
                <span>contact@premiumauto.com</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 dark:text-gray-300">
                <MapPin size={20} />
                <span>123 Auto Drive, Car City, CC 12345</span>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-400 dark:text-gray-300">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 dark:text-gray-300">
          <p>© 2024 Premium Auto Sales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};