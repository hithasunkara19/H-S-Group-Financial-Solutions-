import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { LifeInsurance } from './pages/LifeInsurance';
import { IUL } from './pages/IUL';
import { Contact } from './pages/Contact';
import { WillTrust, EstatePlanning, About, Blog } from './pages/OtherPages';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          <Route path="/iul" element={<IUL />} />
          <Route path="/will-trust" element={<WillTrust />} />
          <Route path="/estate-planning" element={<EstatePlanning />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
