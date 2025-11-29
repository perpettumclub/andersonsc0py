import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-hero-glow blur-3xl opacity-60 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wope-primary/10 border border-wope-primary/20 text-wope-accent text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wope-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-wope-primary"></span>
                </span>
                Disponível para novos projetos
             </div>
             
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
              Anderson Santos <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-wope-accent to-wope-primary">
                Copywriter
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 font-light">
              Funis e Lançamentos
            </p>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-lg text-gray-400 mb-10 leading-relaxed">
              Minha missão é clara: ajudar negócios e pessoas a alcançarem seus objetivos por meio de uma comunicação estratégica e com propósito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#portfolio" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-wope-primary hover:bg-wope-primary/90 text-white font-medium transition-all shadow-lg shadow-wope-primary/25">
                <span>Ver Portfólio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                Entre em contato
              </a>
            </div>

            <div className="relative bg-[#0F0E22]/50 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
               <Quote className="absolute -top-3 -left-3 text-wope-primary fill-wope-primary w-8 h-8 opacity-50" />
               <p className="text-gray-300 italic mb-4 relative z-10">
                 "Se você está tentando persuadir as pessoas a fazer ou comprar algo, deve usar a linguagem delas, da maneira como elas pensam."
               </p>
               <div className="flex items-center gap-2">
                 <div className="w-6 h-[1px] bg-wope-primary"></div>
                 <span className="text-sm font-semibold text-wope-accent">David Ogilvy</span>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md mx-auto lg:mr-0 aspect-[3/4] md:aspect-square lg:aspect-[3/4] group">
                {/* Back glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-wope-primary to-wope-accent rounded-3xl transform rotate-6 scale-105 opacity-20 blur-2xl transition-all duration-500 group-hover:rotate-3 group-hover:opacity-30"></div>
                
                {/* Image Container */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <img 
                        src="/anderson-photo.jpg" 
                        alt="Anderson Santos" 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                     {/* Subtle overlay only at the very bottom for integration */}
                     <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050410] to-transparent opacity-40"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};