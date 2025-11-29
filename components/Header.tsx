import React, { useState } from 'react';
import { Menu, X, PenTool } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#050410]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-wope-primary to-wope-accent flex items-center justify-center">
              <PenTool className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Anderson Santos</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#principles" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Princípios</a>
              <a href="#portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Portfólio</a>
              <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contato</a>
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/5511982844434" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white">
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050410] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Sobre</a>
            <a href="#principles" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Princípios</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Portfólio</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10">Contato</a>
            <div className="pt-4">
              <a href="https://wa.me/5511982844434" target="_blank" rel="noreferrer" className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-wope-primary/20 hover:bg-wope-primary/30 rounded-md">WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};