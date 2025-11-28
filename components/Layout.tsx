import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Phone, Mail, MapPin, ChevronDown, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Container, Button } from './UI';
import { RouteItem } from '../types';

const navigation: RouteItem[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '#',
    dropdown: [
      { name: 'Life Insurance', path: '/life-insurance' },
      { name: 'Indexed Universal Life (IUL)', path: '/iul' },
      { name: 'Will & Trust', path: '/will-trust' },
      { name: 'Estate Planning', path: '/estate-planning' },
    ]
  },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary-900 text-slate-200 text-sm py-2 hidden md:block">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              <span className="flex items-center space-x-2"><Phone className="w-4 h-4 text-secondary-500" /> <span>(555) 123-4567</span></span>
              <span className="flex items-center space-x-2"><Mail className="w-4 h-4 text-secondary-500" /> <span>advisor@hsgroup.com</span></span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-400"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-secondary-400"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-secondary-400"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <Container>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <Shield className="w-8 h-8 text-primary-800 fill-secondary-500 group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight font-serif leading-none">H&S Group</span>
                <span className="text-xs text-primary-600 font-medium tracking-wide uppercase">Financial Solutions</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link 
                    to={item.dropdown ? '#' : item.path}
                    className="flex items-center text-slate-700 hover:text-primary-700 font-medium transition-colors py-2"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.name} 
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact">
                <Button size="sm" className="bg-secondary-600 hover:bg-secondary-700">Get a Quote</Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-2">
                {item.dropdown ? (
                  <>
                    <div className="font-semibold text-slate-900 mb-2">{item.name}</div>
                    <div className="pl-4 flex flex-col space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.path}
                          className="text-slate-600 py-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className="block font-semibold text-slate-900 text-lg"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="w-full">
              <Button className="w-full justify-center bg-secondary-600">Get a Free Consultation</Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-slate-300">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-8 h-8 text-secondary-500" />
                <span className="text-2xl font-bold text-white font-serif">H&S Group</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Empowering families to build generational wealth and secure their financial future through expert insurance and estate planning strategies.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/life-insurance" className="hover:text-secondary-400 transition-colors">Life Insurance</Link></li>
                <li><Link to="/iul" className="hover:text-secondary-400 transition-colors">Indexed Universal Life</Link></li>
                <li><Link to="/will-trust" className="hover:text-secondary-400 transition-colors">Will & Trust</Link></li>
                <li><Link to="/estate-planning" className="hover:text-secondary-400 transition-colors">Estate Planning</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-secondary-400 transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-secondary-400 transition-colors">Financial Resources</Link></li>
                <li><Link to="/contact" className="hover:text-secondary-400 transition-colors">Contact Advisor</Link></li>
                <li><a href="#" className="hover:text-secondary-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary-500 mt-0.5" />
                  <span>123 Financial District Blvd,<br/>Suite 400<br/>New York, NY 10005</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary-500" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary-500" />
                  <span>advisor@hsgroup.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} H&S Group Financial Solutions. All rights reserved.</p>
            <p className="mt-2">Disclaimer: This website provides general information and is not a substitute for professional legal or financial advice.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};