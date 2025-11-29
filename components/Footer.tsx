import React from 'react';
import { Instagram, Linkedin, Mail, Phone, PenTool } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050410] pt-20 pb-10 border-t border-white/5 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-16">
            
            {/* Brand */}
            <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <PenTool className="text-white w-6 h-6" />
                    <span className="font-bold text-xl text-white">Anderson Santos</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Copywriter estratégico. Ajudando negócios a venderem mais através de palavras que convertem.
                </p>
            </div>

            {/* Links Columns */}
            <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-8">
                <div>
                    <h4 className="text-white font-semibold mb-6 text-sm">Navegação</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
                        <li><a href="#principles" className="hover:text-white transition-colors">Princípios</a></li>
                        <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6 text-sm">Serviços</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><span className="cursor-default">Funis de Vendas</span></li>
                        <li><span className="cursor-default">Lançamentos</span></li>
                        <li><span className="cursor-default">Copywriting</span></li>
                    </ul>
                </div>
            </div>

            {/* Contact Box */}
            <div className="lg:col-span-1">
                <h4 className="text-white font-bold text-lg mb-6">Contatos</h4>
                <div className="space-y-4 text-sm text-gray-400">
                     <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-wope-primary" />
                        <a href="mailto:anderson.copywriter1@gmail.com" className="hover:text-white transition-colors">anderson.copywriter1@gmail.com</a>
                     </div>
                     <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-wope-primary" />
                        <a href="https://wa.me/5511982844434" className="hover:text-white transition-colors">(11) 98284-4434</a>
                     </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                    <a href="https://www.instagram.com/anderson.copy" target="_blank" rel="noreferrer">
                        <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">© 2025 Anderson Santos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};