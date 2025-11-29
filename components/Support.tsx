import React from 'react';
import { Send, Link, ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { PortfolioLink } from '../types';

const portfolioLinks: PortfolioLink[] = [
    { title: "Anúncios", url: "https://www.notion.so/AN-NCIOS-14f957ab7a1c80ada7ebd573bfe162a2?pvs=21", type: "Ads" },
    { title: "Página de Vendas", url: "https://www.notion.so/P-GINA-DE-VENDAS-14f957ab7a1c80c8b7dde83f1988e94e?pvs=21", type: "LP" },
    { title: "E-mail Marketing", url: "https://www.notion.so/E-MAIL-150957ab7a1c80728116ca6684a429da?pvs=21", type: "Email" },
    { title: "Página de Captura", url: "https://www.notion.so/P-GINA-DE-CAPTURA-150957ab7a1c807ebbe7eef43bd6e261?pvs=21", type: "LP" },
    { title: "Conteúdos", url: "https://www.notion.so/CONTE-DOS-176957ab7a1c80e5b2a0eb2aa0a09d2e?pvs=21", type: "Social" },
    { title: "Mensagem p/ WhatsApp", url: "https://www.notion.so/MENSAGEM-PARA-WHATSAPP-214957ab7a1c8096a120f8083e66beee?pvs=21", type: "Direct" },
    { title: "Roteiro para VSLs", url: "https://www.notion.so/ROTEIRO-PARA-VSLs-214957ab7a1c8045a40fd56766e81e61?pvs=21", type: "Video" },
];

const processSteps = [
    "Entendimento do projeto", "Pesquisa detalhada", "Aprovação do diagnóstico", 
    "Análise de concorrência", "Criação (Escrita)", "Revisão conjunta", 
    "Ajustes finais", "Avaliação de resultados"
];

export const Support: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Contato pelo Portfólio: ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nWhatsApp: ${phone}\n\nMensagem:\n${message}`
    );

    window.location.href = `mailto:anderson.copywriter1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
       {/* Portfolio Section */}
       <section className="py-24 relative bg-[#050410]" id="portfolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <span className="inline-block px-3 py-1 bg-wope-primary/10 rounded-full text-xs text-wope-accent border border-wope-primary/20 mb-4 uppercase tracking-wider">Portfólio</span>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Peças de Copy</h2>
                 <p className="text-gray-400">Alguns dos trabalhos que desenvolvi para diferentes funis, lançamentos e negócios.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {portfolioLinks.map((item, idx) => (
                    <a key={idx} href={item.url} target="_blank" rel="noreferrer" className="glass-card p-6 rounded-xl hover:bg-white/5 transition-all group cursor-pointer border border-white/5 hover:border-wope-primary/50 relative overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-wope-primary/20 blur-3xl rounded-full transition-all group-hover:bg-wope-primary/30 pointer-events-none"></div>
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-wope-accent relative z-10">
                            <Link size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-wope-primary transition-colors relative z-10">{item.title}</h3>
                        <div className="flex items-center text-xs text-gray-500 mt-4 group-hover:text-white transition-colors relative z-10">
                            Ver no Notion <ExternalLink className="ml-1 w-3 h-3" />
                        </div>
                    </a>
                ))}
            </div>
          </div>
       </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#050410] to-[#0F0E22]/30" id="process">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como funciona a entrega</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto">
                    Um trabalho personalizado, estratégico e totalmente alinhado com o que você precisa para alcançar os melhores resultados.
                 </p>
            </div>
            
            <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-wope-primary/30 to-transparent -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
                    {processSteps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-10 h-10 rounded-full bg-[#0F0E22] border border-wope-primary/50 flex items-center justify-center text-wope-accent text-sm font-bold mb-3 shadow-lg group-hover:bg-wope-primary group-hover:text-white transition-colors">
                                {idx + 1}
                            </div>
                            <p className="text-xs text-gray-400 font-medium px-1">{step}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="text-wope-accent w-5 h-5" />
                        Adaptação ao seu Processo
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Caso o seu projeto tenha um processo de entrega específico, estou totalmente aberto a me alinhar às suas necessidades.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Posso adaptar minha forma de trabalho conforme a dinâmica da sua equipe, prazos e ferramentas.
                    </p>
                </div>
                <div className="glass-card p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="text-wope-accent w-5 h-5" />
                        O Que Me Diferencia
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-wope-primary mt-1.5 shrink-0"></span>
                            Alinhamento total com as necessidades do negócio.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-wope-primary mt-1.5 shrink-0"></span>
                            Resposta rápida e comunicação ativa.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-wope-primary mt-1.5 shrink-0"></span>
                            Personalização total e flexibilidade.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative" id="contact">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
                 <p className="text-gray-400">Envie uma mensagem para discutirmos seu próximo projeto.</p>
             </div>

             <div className="glass-card p-8 rounded-2xl border border-white/10">
                 <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                            <input required type="text" name="name" placeholder="Seu nome" className="w-full bg-[#050410] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-wope-primary focus:outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">WhatsApp</label>
                            <input required type="tel" name="phone" placeholder="(11) 99999-9999" className="w-full bg-[#050410] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-wope-primary focus:outline-none" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input required type="email" name="email" placeholder="seu@email.com" className="w-full bg-[#050410] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-wope-primary focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                        <textarea required name="message" rows={4} placeholder="Fale um pouco sobre o projeto..." className="w-full bg-[#050410] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:ring-2 focus:ring-wope-primary focus:outline-none" />
                    </div>

                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-wope-primary to-wope-accent text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-wope-primary/20">
                        <Send size={18} />
                        Enviar Mensagem
                    </button>
                 </form>
             </div>
         </div>
      </section>
    </>
  );
};