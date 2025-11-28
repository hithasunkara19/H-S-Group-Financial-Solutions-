import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Umbrella, Clock, Heart } from 'lucide-react';
import { Section, Container, Button, Card } from '../components/UI';

const insuranceTypes = [
  {
    title: 'Term Life',
    icon: Clock,
    desc: 'Affordable coverage for a specific period (10, 20, 30 years). Ideal for covering mortgages and raising children.',
    features: ['Lowest premiums', 'Fixed rates for the term', 'Convertible options available']
  },
  {
    title: 'Whole Life',
    icon: Heart,
    desc: 'Permanent protection that lasts your entire life. Builds cash value that you can borrow against.',
    features: ['Guaranteed death benefit', 'Cash value accumulation', 'Premiums never increase']
  },
  {
    title: 'Universal Life',
    icon: Umbrella,
    desc: 'Flexible permanent coverage. Adjust your premium payments and death benefit as your life changes.',
    features: ['Flexible premiums', 'Adjustable coverage', 'Interest accumulation']
  }
];

export const LifeInsurance: React.FC = () => {
  return (
    <>
      <div className="bg-primary-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Core Service</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6 font-serif">Life Insurance Solutions</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Life insurance is the foundation of a sound financial plan. It provides the liquidity your family needs when they need it most.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type) => (
              <Card key={type.title} className="border-t-4 border-t-primary-600">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                    <type.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{type.title}</h3>
                  <p className="text-slate-600 mb-6 min-h-[80px]">{type.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-secondary-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">Request Quote</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-900 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who needs life insurance?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 text-xl font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Parents with Minors</h4>
                    <p className="text-slate-400">Replace lost income to ensure your children can maintain their standard of living and attend college.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 text-xl font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Homeowners with a Mortgage</h4>
                    <p className="text-slate-400">Ensure your spouse isn't burdened with debt. A policy can pay off the house entirely.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 text-xl font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Business Owners</h4>
                    <p className="text-slate-400">Protect your business partners and ensure succession with Key Person insurance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
               <img 
                src="https://picsum.photos/id/1025/600/800" 
                alt="Protection" 
                className="rounded-lg shadow-2xl opacity-90"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
