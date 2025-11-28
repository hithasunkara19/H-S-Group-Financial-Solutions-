import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, FileText, Users, Star } from 'lucide-react';
import { Section, Container, Button, Card, Badge } from '../components/UI';

const services = [
  {
    icon: Shield,
    title: 'Life Insurance',
    desc: 'Protect your loved ones with comprehensive term, whole, and universal life coverage tailored to your needs.',
    link: '/life-insurance',
    color: 'text-primary-700'
  },
  {
    icon: TrendingUp,
    title: 'Indexed Universal Life',
    desc: 'Grow your wealth tax-advantaged while ensuring permanent protection. Capture market gains without the losses.',
    link: '/iul',
    color: 'text-secondary-600'
  },
  {
    icon: FileText,
    title: 'Will & Trust',
    desc: 'Secure your legacy. Ensure your assets are distributed exactly as you wish with legally binding documents.',
    link: '/will-trust',
    color: 'text-primary-700'
  },
  {
    icon: Users,
    title: 'Estate Planning',
    desc: 'Comprehensive strategies to minimize taxes and ensure smooth asset transfer to the next generation.',
    link: '/estate-planning',
    color: 'text-secondary-600'
  }
];

const testimonials = [
  {
    id: 1,
    name: "Robert & Sarah Chen",
    role: "Business Owners",
    content: "H&S Group helped us structure an IUL that not only protects our kids but serves as a tax-free retirement vehicle. The expertise was unmatched.",
    image: "https://picsum.photos/id/1011/100/100"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Retired Teacher",
    content: "Setting up my Living Trust seemed daunting, but the team made it incredibly simple. I sleep better knowing my estate is in order.",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "New Parent",
    content: "Affordable term life insurance was a priority after our first child. The quote process was fast, and the agent was very patient.",
    image: "https://picsum.photos/id/64/100/100"
  }
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/453/1920/1080?grayscale&blur=2" 
            alt="Family background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <Badge variant="blue" className="mb-6 bg-primary-800 text-primary-100 border border-primary-700">Trusted by 10,000+ Families</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
              Protect What Matters Most, <br />
              <span className="text-secondary-500">Secure Your Legacy.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              We provide comprehensive life insurance and estate planning solutions designed to give you peace of mind and financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-secondary-600 hover:bg-secondary-700 text-white">Get a Free Quote</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary-900">
                  Learn About Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Section className="bg-slate-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Holistic Financial Protection</h2>
            <p className="text-slate-600">From immediate coverage to long-term wealth transfer, our services cover every stage of your life's journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:-translate-y-1 transition-transform h-full border-t-4 border-t-primary-800">
                <div className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-primary-50 ${service.color}`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                  <Link to={service.link} className="flex items-center text-primary-700 font-semibold hover:text-primary-800 mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission/Trust Section */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img 
                src="https://picsum.photos/id/1059/800/600" 
                alt="Financial Advisor" 
                className="relative rounded-2xl shadow-2xl w-full object-cover z-10"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Your Financial Peace of Mind is Our Mission</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At H&S Group, we believe that life insurance is more than just a policy—it's a promise to your family. It's about ensuring that no matter what life throws your way, your loved ones can maintain their lifestyle, pursue their dreams, and live without financial worry.
                </p>
                <p>
                  Our certified advisors work as fiduciaries, meaning we put your interests first. Whether you are looking for simple term coverage or sophisticated estate planning using indexed strategies, we are here to guide you every step of the way.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-3xl font-bold text-primary-700">98%</h4>
                  <p className="text-sm text-slate-500">Client Retention</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary-700">$2B+</h4>
                  <p className="text-sm text-slate-500">Coverage Placed</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-primary-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <Card key={item.id} className="border-none shadow-md">
                <div className="p-8">
                  <div className="flex text-secondary-500 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{item.content}"</p>
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                      <span className="text-xs text-slate-500 uppercase tracking-wide">{item.role}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Strip */}
      <section className="bg-primary-900 py-16 border-t border-primary-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Ready to secure your future?</h2>
              <p className="text-primary-200 text-lg">Schedule a free 15-minute consultation with an advisor today.</p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary-600 text-white hover:bg-secondary-700 hover:text-white">Get Started Now</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};