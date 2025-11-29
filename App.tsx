import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Support } from './components/Support';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050410] text-white selection:bg-wope-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default App;