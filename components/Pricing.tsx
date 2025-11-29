import React from 'react';
import { Target, Heart, Zap, Search, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PrincipleItem } from '../types';

const principles: PrincipleItem[] = [
  { title: "Foco no Cliente", description: "Priorizo entender o cliente e seu público, adaptando a escrita para conectar e gerar valor.", icon: Target },
  { title: "Empatia", description: "Entendo as dores, desejos e necessidades do público como se fossem meus.", icon: Heart },
  { title: "Objetividade", description: "Vou direto ao ponto, pra causar impacto fácil e rápido.", icon: Zap },
  { title: "Pesquisa", description: "Estudo público-alvo, mercado e concorrentes, para criar uma copy relevante que converta.", icon: Search },
];

// Values for mobile and tablet (with "Compromisso")
const valuesMobileTablet: string[] = [
  "Disciplina", "Gratidão", "Honestidade", "Compromisso",
  "Verdade", "Respeito ao Próximo", "Compromisso", "Flexibilidade"
];

// Values for desktop (with "Comprometimento")
const valuesDesktop: string[] = [
  "Disciplina", "Gratidão", "Honestidade", "Comprometimento",
  "Verdade", "Respeito ao Próximo", "Compromisso", "Flexibilidade"
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 relative" id="principles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Princípios & Valores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Acredito que um bom trabalho é construído sobre bases sólidas. Estes são os pilares que guiam minha conduta profissional.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((item, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 hover:border-wope-primary/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-wope-accent mb-6 group-hover:bg-wope-primary/20 transition-colors">
                {item.icon && <item.icon size={24} />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Values List */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wope-primary to-transparent opacity-50"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-2">Meus Valores</h3>
              <p className="text-gray-400 text-sm">A base ética de cada entrega.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Mobile and Tablet version (with "Compromisso") */}
              {valuesMobileTablet.map((val, i) => (
                <div key={`mobile-${i}`} className="lg:hidden flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-wope-primary flex-shrink-0" />
                  <span className="text-sm text-gray-200 font-medium">{val}</span>
                </div>
              ))}
              {/* Desktop version (with "Comprometimento") */}
              {valuesDesktop.map((val, i) => (
                <div key={`desktop-${i}`} className="hidden lg:flex items-center gap-2 p-2 rounded bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-wope-primary flex-shrink-0" />
                  <span className="text-sm text-gray-200 font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};