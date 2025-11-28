import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Section, Container, Button, Card } from '../components/UI';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Life Insurance',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to send data to backend would go here
    alert("Thank you! An advisor will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', service: 'Life Insurance', message: '' });
  };

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-serif mb-4">Get in Touch</h1>
            <p className="text-slate-600">Start your journey to financial security. Contact us for a free quote or consultation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri 9am-6pm EST</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600">advisor@hsgroup.com</p>
                    <p className="text-xs text-slate-400 mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900">Office</h3>
                    <p className="text-slate-600">123 Financial District Blvd<br />Suite 400<br />New York, NY 10005</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Interested In</label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option>Life Insurance</option>
                        <option>IUL (Retirement)</option>
                        <option>Estate Planning</option>
                        <option>Will & Trust</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary-800 hover:bg-primary-900">Request Consultation</Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
  );
};