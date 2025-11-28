import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Button, Card, Badge } from '../components/UI';
import { Scale, FileSignature, Briefcase, BookOpen, User } from 'lucide-react';

// --- Will & Trust Page ---
export const WillTrust: React.FC = () => (
  <>
    <div className="bg-primary-900 text-white py-16">
      <Container>
        <h1 className="text-4xl font-bold font-serif mb-4">Will & Trust Planning</h1>
        <p className="text-xl text-primary-100 max-w-2xl">Ensure your assets are distributed exactly as you wish. Avoid probate and protect your heirs.</p>
      </Container>
    </div>
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why do you need a Trust?</h2>
            <p className="text-slate-600 mb-4">
              A Living Trust is a legal document that holds your assets during your lifetime and distributes them after your death. Unlike a simple Will, a Trust often avoids probate—saving your family time, money, and privacy.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center text-slate-700"><Scale className="w-5 h-5 text-secondary-600 mr-2" /> Avoid Probate Court</li>
              <li className="flex items-center text-slate-700"><Scale className="w-5 h-5 text-secondary-600 mr-2" /> Maintain Family Privacy</li>
              <li className="flex items-center text-slate-700"><Scale className="w-5 h-5 text-secondary-600 mr-2" /> Protect Assets from Creditors</li>
            </ul>
            <Link to="/contact" className="inline-block mt-8">
               <Button className="bg-primary-700 hover:bg-primary-800">Schedule Legal Consult</Button>
            </Link>
          </div>
          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Will vs. Trust</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <span className="font-bold text-slate-900 block">Last Will</span>
                <span className="text-sm text-slate-500">Goes through probate. Public record. Takes effect only at death.</span>
              </div>
              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-secondary-600">
                <span className="font-bold text-slate-900 block">Living Trust</span>
                <span className="text-sm text-slate-500">Avoids probate. Private. Valid during life (incapacity) and after death.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </>
);

// --- Estate Planning Page ---
export const EstatePlanning: React.FC = () => (
  <>
    <div className="bg-slate-900 text-white py-16">
      <Container>
        <h1 className="text-4xl font-bold font-serif mb-4">Comprehensive Estate Planning</h1>
        <p className="text-xl text-slate-300 max-w-2xl">Minimizing taxes and maximizing the legacy you leave behind.</p>
      </Container>
    </div>
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <FileSignature className="w-10 h-10 text-secondary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Tax Strategies</h3>
            <p className="text-slate-600">Advanced strategies to reduce estate taxes, capital gains, and income taxes for your beneficiaries.</p>
          </Card>
          <Card className="p-6">
            <Briefcase className="w-10 h-10 text-secondary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Business Succession</h3>
            <p className="text-slate-600">Ensure your business continues to thrive or is sold profitably when you step down.</p>
          </Card>
          <Card className="p-6">
            <User className="w-10 h-10 text-secondary-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Power of Attorney</h3>
            <p className="text-slate-600">Designate trusted individuals to make financial and medical decisions if you cannot.</p>
          </Card>
        </div>
        <div className="text-center mt-12">
            <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">Plan Your Estate</Button>
            </Link>
        </div>
      </Container>
    </Section>
  </>
);

// --- About Us Page ---
export const About: React.FC = () => (
  <Section>
    <Container>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold font-serif mb-6">About H&S Group</h1>
        <p className="text-lg text-slate-600">
          Founded in 2005, H&S Group Financial Solutions was built on a simple premise: Everyone deserves a financial plan that provides security today and prosperity tomorrow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <img src="https://picsum.photos/id/3/800/600" alt="Team" className="rounded-xl shadow-lg" />
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
          <p className="text-slate-600 mb-4">
            We are independent brokers, meaning we don't work for an insurance company—we work for you. We shop dozens of top-rated carriers to find the best rates and products for your unique situation.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border-l-4 border-secondary-500 pl-4">
              <span className="font-bold text-2xl block text-slate-900">18+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div className="border-l-4 border-secondary-500 pl-4">
              <span className="font-bold text-2xl block text-slate-900">50+</span>
              <span className="text-sm text-slate-500">Partner Carriers</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

// --- Blog Page ---
export const Blog: React.FC = () => {
    const posts = [
        { id: 1, title: "Is Term or Whole Life Right for You?", category: "Insurance 101", date: "Oct 12, 2023" },
        { id: 2, title: "5 Ways to Lower Your Estate Taxes", category: "Estate Planning", date: "Sep 28, 2023" },
        { id: 3, title: "Understanding the IUL Cap & Floor", category: "Investing", date: "Sep 15, 2023" },
        { id: 4, title: "Why You Need a Living Trust", category: "Legal", date: "Aug 30, 2023" },
    ];

    return (
        <Section className="bg-slate-50">
            <Container>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif mb-4">Financial Resources</h1>
                    <p className="text-slate-600">Insights to help you make smarter financial decisions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <Card key={post.id} className="hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-slate-200 w-full overflow-hidden">
                                <img src={`https://picsum.photos/seed/${post.id}/400/250`} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <Badge variant="blue" className="mb-2">{post.category}</Badge>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h3>
                                <p className="text-sm text-slate-400 mb-4">{post.date}</p>
                                <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent hover:text-primary-700">Read Article &rarr;</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
};