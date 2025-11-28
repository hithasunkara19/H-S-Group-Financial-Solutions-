import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Button, Card, Badge } from '../components/UI';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, ShieldCheck, DollarSign } from 'lucide-react';

const data = [
  { year: 'Year 0', sp500: 100000, iul: 100000 },
  { year: 'Year 5', sp500: 145000, iul: 135000 },
  { year: 'Year 10 (Crash)', sp500: 95000, iul: 135000 }, // S&P drops, IUL holds
  { year: 'Year 15', sp500: 160000, iul: 165000 },
  { year: 'Year 20', sp500: 220000, iul: 210000 },
];

export const IUL: React.FC = () => {
  return (
    <>
      <div className="bg-slate-900 text-white py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="green" className="mb-4">Retirement Strategy</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Indexed Universal Life (IUL)</h1>
            <p className="text-xl text-slate-300 mb-8">
              Upside potential with downside protection. The smart way to build tax-advantaged wealth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 border-none">Start Your IUL Plan</Button>
            </Link>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">How IUL Works</h2>
              <p className="text-lg text-slate-600 mb-6">
                An Indexed Universal Life policy links your cash value growth to a stock market index like the S&P 500.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Cap (Upside)</h3>
                    <p className="text-slate-600">You participate in market gains up to a cap (e.g., 10-12%). If the market goes up 8%, you get 8%. If it goes up 20%, you get the cap.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <ShieldCheck className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Floor (Protection)</h3>
                    <p className="text-slate-600">The most powerful feature. Your floor is usually 0%. If the market crashes -20%, your account value stays flat. <span className="font-bold text-slate-900">You lose nothing.</span></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <DollarSign className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tax-Free Access</h3>
                    <p className="text-slate-600">Access your cash value via policy loans, which are typically tax-free. Use it for college, real estate, or retirement income.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-4 text-center">Hypothetical Performance: IUL vs Market Crash</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" stroke="#64748b" fontSize={12} />
                    <YAxis stroke="#64748b" fontSize={12} tickFormatter={(value) => `$${value/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="sp500" name="S&P 500 (Risk)" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="iul" name="IUL (Floor Protection)" stroke="#10b981" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-slate-400 text-center mt-4">
                *For illustrative purposes only. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
