import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Us" 
          subtitle="Visit our shop or get in touch"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.8845714616735!2d-97.13153492337592!3d33.0986357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4bd78aaf2c2d%3A0x4a6e9db0c6aec5d2!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1718220428996!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Fama Barber Shop Location"
            ></iframe>
          </div>

          {/* Contact Info and Form */}
          <div>
            <div className="bg-stone-100 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="font-serif text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-stone-700">500 N Bell Ave #109, Denton, TX 76209, United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+19406129127" className="text-stone-700 hover:text-amber-600 transition-colors">
                      +1 940-612-9127
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@famabarber.com" className="text-stone-700 hover:text-amber-600 transition-colors">
                      info@famabarber.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-stone-700">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Appointment Form */}
            <div id="book" className="bg-stone-900 p-8 rounded-lg shadow-lg text-white">
              <h3 className="font-serif text-2xl font-bold mb-6">Book an Appointment</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">Service</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Classic Haircut</option>
                    <option value="beard">Beard Trim</option>
                    <option value="shave">Hot Towel Shave</option>
                    <option value="combo">Haircut & Beard Combo</option>
                    <option value="styling">Premium Styling</option>
                    <option value="kids">Kids Cut</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-1">Time</label>
                    <input 
                      type="time" 
                      id="time" 
                      className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-1">Special Requests</label>
                  <textarea 
                    id="notes" 
                    rows={3}
                    className="w-full px-4 py-2 rounded bg-stone-800 border border-stone-700 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Any special requests or notes..."
                  ></textarea>
                </div>
                
                <Button variant="primary" className="w-full">
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;