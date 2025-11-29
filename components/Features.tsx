import React from 'react';
import { BookOpen, Award, TrendingUp } from 'lucide-react';
import { Qualification } from '../types';

const qualifications: Qualification[] = [
    { name: "Portal Paulo Maccedo", mentor: "Paulo Maccedo" },
    { name: "Grupo CAC", mentor: "Davi Ferreira" },
    { name: "Advanced Copy", mentor: "Guilherme Kao" },
    { name: "O Método Russell Brunson", mentor: "Ícaro de Carvalho" },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0F0E22]/30" id="about">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             {/* Bio Section */}
            <div>
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-wope-accent border border-wope-primary/20 mb-6 uppercase tracking-wider">
                    Sobre mim
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    Copywriter Estratégico & <br/> Analítico
                </h2>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                        <strong className="text-white">Olá, que bom te ver por aqui!</strong><br/>
                        Muito prazer, me chamo Anderson dos Santos. Tenho 20 anos e moro em Salto (SP).
                        Nos últimos anos tenho dedicado boa parte do meu tempo à leitura, esporte e trabalho.
                    </p>
                    <p>
                        Já li mais de <span className="text-wope-primary font-bold">21 livros</span> que contribuíram diretamente para ampliar minha visão sobre comunicação, negócios e comportamento humano.
                        Acredito que o conhecimento transforma, e busco sempre evoluir tanto como pessoa quanto profissional.
                    </p>
                    <p>
                        Minha carreira até o momento tem sido marcada na construção de diferentes projetos, onde pude aprender que o sucesso de cada trabalho vai muito além de uma boa técnica de execução. Ele depende de estratégia, visão e alinhamento com os objetivos do cliente.
                    </p>
                    <p>
                        Copy de verdade é sobre <strong className="text-white">compreender quem está do outro lado</strong> — suas dores, sonhos e desejos — e construir uma mensagem que gere confiança, desperte emoção e leve à ação.
                    </p>
                </div>
            </div>

            {/* Qualifications & Summary */}
            <div className="space-y-8">
                 {/* Summary Card */}
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-wope-primary/10 blur-[50px] rounded-full"></div>
                    <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-white/5 rounded-xl text-wope-accent">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mt-2">Resumo Profissional</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Copywriter estratégico, com foco em lançamentos e construção de funis de vendas de alto faturamento.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Minha experiência inclui toda a arquitetura de mensagens que acompanha o lead desde a captação até a decisão de compra — páginas de vendas, VSLs, anúncios, e-mails e conteúdo.
                    </p>
                </div>

                {/* Certifications */}
                <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                     <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-white/5 rounded-xl text-wope-accent">
                            <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mt-2">Qualificações</h3>
                    </div>
                    
                    <div className="space-y-4">
                        {qualifications.map((q, i) => (
                            <div key={i} className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-wope-primary/30 transition-colors">
                                <BookOpen className="w-5 h-5 text-gray-500 mr-3" />
                                <div>
                                    <p className="text-white font-medium">{q.name}</p>
                                    <p className="text-xs text-gray-500">Mentor: {q.mentor}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </div>
       </div>
    </section>
  );
};