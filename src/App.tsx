/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Smartphone, 
  Stethoscope, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  MessageCircle,
  ChevronDown,
  Star,
  Award,
  Zap,
  Car,
  Bike,
  Dog,
  Briefcase,
  Key,
  Baby,
  Accessibility,
  Truck,
  Ship
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <TrendingUp className="text-dark w-6 h-6" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight">VALOR<span className="text-gold">NOBRE</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Franquias', 'Diferenciais', 'Sobre', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-gold transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <a 
            href="https://wa.link/m1flig" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gold text-dark px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Seja Franqueado
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass p-6 md:hidden flex flex-col gap-4"
          >
            {['Home', 'Franquias', 'Diferenciais', 'Sobre', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">
                {item}
              </a>
            ))}
            <a 
              href="https://wa.link/m1flig" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-dark px-6 py-4 rounded-xl font-bold text-center"
            >
              Seja Franqueado
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30"
          alt="Business background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Award className="text-gold w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Líder em Franquias Digitais 2025</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.9] mb-8 tracking-tighter">
            A LIBERDADE <br />
            <span className="text-gold italic">DIGITAL</span> AO <br />
            SEU ALCANCE.
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Transforme sua carreira com modelos de negócios validados, baixo investimento e suporte 24h. O futuro do empreendedorismo home office começa aqui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.link/m1flig" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold text-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              QUERO COMEÇAR AGORA <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#franquias"
              className="glass px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              VER MODELOS
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
              alt="Entrepreneur working"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl z-20 max-w-[280px]">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
            </div>
            <p className="text-sm italic mb-4">"A melhor decisão que tomei para minha transição de carreira. Suporte impecável."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20"></div>
              <div>
                <p className="text-xs font-bold">Ricardo Santos</p>
                <p className="text-[10px] opacity-50 uppercase tracking-widest">Franqueado Master</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-12 border-y border-white/5 overflow-hidden bg-white/[0.02]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 mx-12">
            <span className="text-2xl font-display font-bold opacity-20 uppercase tracking-[0.4em]">Pronto Saúde 24hs</span>
            <span className="text-2xl font-display font-bold opacity-20 uppercase tracking-[0.4em]">Pronto Chip</span>
            <span className="text-2xl font-display font-bold opacity-20 uppercase tracking-[0.4em]">Protetor 360</span>
            <span className="text-2xl font-display font-bold opacity-20 uppercase tracking-[0.4em]">Infra Afiliados</span>
            <span className="text-2xl font-display font-bold opacity-20 uppercase tracking-[0.4em]">Federal Associados</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl mb-6">Por que escolher a <span className="text-gold italic">Valor Nobre</span>?</h2>
          <p className="text-white/50 max-w-2xl mx-auto">Combinamos tecnologia de ponta com um modelo de negócios simplificado para garantir seu sucesso desde o primeiro dia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bento-item"
          >
            <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="text-gold w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Atendimento 24 Horas</h3>
            <p className="text-white/50 leading-relaxed">Diferente de qualquer outra franquia, oferecemos atendimento total e ininterrupto para você e seus clientes finais. Você nunca estará sozinho.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bento-item">
            <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="text-gold w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Baixo Investimento</h3>
            <p className="text-white/50 leading-relaxed">Modelos a partir de R$ 29,90. Democratizamos o acesso ao empreendedorismo de alto nível.</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bento-item">
            <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-gold w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Escalabilidade Real</h3>
            <p className="text-white/50 leading-relaxed">Ganhe sobre vendas diretas e recorrentes. Crie sua própria rede de microfranqueados.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bento-item md:col-span-2 flex flex-col md:flex-row-reverse gap-8 items-center"
          >
            <div className="flex-1">
              <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-gold w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Segurança e Suporte</h3>
              <p className="text-white/50 leading-relaxed">Modelos validados com milhares de associados. Treinamento completo para iniciantes sem qualquer experiência prévia.</p>
            </div>
            <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Security" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-surface border border-white/10 rounded-[2.5rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-8 md:p-12 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="mb-8">
            <h3 className="text-3xl font-display font-bold text-gold mb-2">{title}</h3>
            <div className="h-1 w-20 bg-gold rounded-full"></div>
          </div>
          
          <div className="text-white/80 leading-relaxed">
            {children}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const FranchiseCard = ({ title, product, price, features, icon: Icon, image, bgColor = "bg-dark", popupContent }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-[2.5rem] overflow-hidden group h-full flex flex-col"
      >
        <div className={`h-64 overflow-hidden relative ${bgColor}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
          <div className="absolute bottom-6 left-8">
            <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center mb-2 shadow-lg shadow-gold/20">
              <Icon className="text-dark w-6 h-6" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <p className="text-white/60 mb-6 line-clamp-2 text-sm leading-relaxed">{product}</p>
          <div className="space-y-4 mb-8 flex-1">
            {features.map((f: string, i: number) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="text-gold w-4 h-4 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Investimento</p>
              <p className="text-2xl font-bold text-gold">{price}</p>
            </div>
            {popupContent ? (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors"
              >
                DETALHES
              </button>
            ) : (
              <a 
                href="https://wa.link/m1flig"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-gold transition-colors"
              >
                DETALHES
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {popupContent && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={title}
        >
          {popupContent}
        </Modal>
      )}
    </>
  );
};

const Franchises = () => {
  const data = [
    {
      title: "Protetor 360",
      product: "Franquia de Mini Rastreadores parceira da Infra Afiliados. Tecnologia de ponta para proteção total.",
      price: "R$ 300,00",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop",
      bgColor: "bg-dark",
      icon: Shield,
      features: [
        "Parceira Infra Afiliados",
        "2 Mini Rastreadores inclusos",
        "6 meses de rastreamento grátis (paga R$ 30,00 a cada semestre licenciamento do software)",
        "Protege carros, motos e pets"
      ],
      popupContent: (
        <div className="space-y-8">
          <div className="bg-gold/10 p-6 rounded-2xl border border-gold/20">
            <h4 className="text-2xl font-bold text-gold mb-2 flex items-center gap-2">
              <Zap className="w-6 h-6" /> MINI RASTREADOR 100% LUCRO!
            </h4>
            <p className="text-xs font-bold text-gold/60 uppercase tracking-widest mb-4">Parceira Infra Afiliados</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-white/80">
                <Car className="w-4 h-4 text-gold" /> <span>Linha Veicular</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Bike className="w-4 h-4 text-gold" /> <span>Linha Motocicleta</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Bike className="w-4 h-4 text-gold" /> <span>Linha Bike</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Dog className="w-4 h-4 text-gold" /> <span>Linha Pet</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-bold text-white">Controle total na palma da sua mão pelo APP.</p>
            <p className="text-gold font-bold">Seja um Afiliado e Ganhe dinheiro revendendo nossos rastreadores!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-gold" /> BÔNUS INDICAÇÃO</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-gold" /> BÔNUS DE 5 NÍVEIS</li>
                  <li className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-gold" /> BÔNUS DE COMPRA</li>
                  <li className="flex items-center gap-2 text-sm font-bold text-gold"><Award className="w-4 h-4" /> REVENDA 100% DE LUCRO</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-sm font-bold mb-2">🚀 Por que escolher o Protetor360?</p>
                <ul className="space-y-1 text-xs text-white/60">
                  <li>✔️ Tecnologia de ponta com precisão GPS</li>
                  <li>✔️ Interface fácil de usar</li>
                  <li>✔️ Cobertura nacional e suporte confiável</li>
                  <li>✔️ Segurança e tranquilidade ao seu alcance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-center font-display text-2xl">Proteja qualquer coisa que você <span className="text-gold italic">valoriza</span></h5>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 text-center">
              {[
                { icon: Car, label: "Carros" },
                { icon: Bike, label: "Motos" },
                { icon: Truck, label: "Cargas" },
                { icon: Ship, label: "Jet Skis" },
                { icon: Bike, label: "Bicicletas" },
                { icon: Briefcase, label: "Malas" },
                { icon: Dog, label: "Pets" },
                { icon: Zap, label: "Patinetes" },
                { icon: Accessibility, label: "Pessoas" },
                { icon: Baby, label: "Crianças" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <a 
              href="https://wa.link/m1flig" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 text-white py-6 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-6 h-6" /> QUERO ESSA OPORTUNIDADE
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Pronto Saúde 24hs",
      product: "Telemedicina avançada: Compre o produto e ganhe o negócio próprio.",
      price: "A partir de R$ 299,90",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
      bgColor: "bg-dark",
      icon: Stethoscope,
      features: [
        "Renda mensal recorrente",
        "Atendimento 24 horas",
        "Ganhos em até 3 gerações",
        "Crescimento escalável"
      ],
      popupContent: (
        <div className="space-y-6">
          <p className="text-xl font-bold text-white italic">Esta é uma oportunidade limitada. Invista na sua saúde e ganhe o negócio!</p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-gold w-5 h-5 mt-1 flex-shrink-0" />
              <span>Microfranquia</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-gold w-5 h-5 mt-1 flex-shrink-0" />
              <span>Treinamento completo</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-gold w-5 h-5 mt-1 flex-shrink-0" />
              <span>1 ano de telemedicina que pode ser individual ou familiar.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-gold w-5 h-5 mt-1 flex-shrink-0" />
              <span>Telemedicina para Famílias — Transforme Saúde em Renda!</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-gold w-5 h-5 mt-1 flex-shrink-0" />
              <span>Compre o Produto e Ganhe o Negócio!</span>
            </li>
          </ul>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="mb-4">Na Pronto Saúde 24hs, você constrói uma renda fixa mensal crescente com um sistema inteligente e escalável, onde cada novo cliente também se tornará seu novo microfranqueado.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <p><span className="font-bold text-gold">65% de comissão</span> na adesão, <span className="font-bold text-gold">20% sobre mensalidades</span> diretas (1° geração)</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="font-bold text-gold mb-2">Master</p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <p><span className="font-bold text-gold">20% das mensalidades</span> diretas, <span className="font-bold text-gold">10% dos indiretos</span> (2° geração)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <a 
              href="https://wa.link/m1flig" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 text-white py-6 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-6 h-6" /> QUERO ESSA OPORTUNIDADE
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Pronto Chip",
      product: "Conectividade 4G/5G com planos Vivo, TIM e Claro.",
      price: "A partir de R$ 49,90",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop",
      bgColor: "bg-dark",
      icon: Smartphone,
      features: [
        "+20 mil associados ativos",
        "Internet de alta velocidade",
        "Mercado de necessidade básica",
        "Baixo risco e alta aceitação"
      ]
    }
  ];

  return (
    <section id="franquias" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl mb-4">Nossas <span className="text-gold italic">Oportunidades</span></h2>
            <p className="text-white/50 max-w-xl">Três caminhos distintos para sua liberdade financeira. <span className="text-gold font-bold">As 3 franquias saem a partir de R$ 379,80.</span></p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 glass rounded-full text-sm font-bold">3 Modelos Ativos</div>
            <div className="px-6 py-3 glass rounded-full text-sm font-bold text-gold">Atendimento 24h</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, i) => <FranchiseCard key={i} {...item} />)}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[3rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Team" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-8 -right-8 glass p-10 rounded-3xl hidden md:block">
            <p className="text-5xl font-display font-bold text-gold mb-2">10k+</p>
            <p className="text-xs uppercase tracking-[0.2em] font-bold">Franqueados Felizes</p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-5xl mb-8">Nossa Missão é o Seu <span className="text-gold italic">Sucesso</span>.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Nascemos com o propósito de democratizar o acesso ao empreendedorismo digital de alto nível. Acreditamos que todos, independentemente da experiência prévia, merecem a chance de construir um patrimônio sólido trabalhando de casa.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="font-bold text-gold mb-2">Visão</h4>
              <p className="text-sm text-white/50">Ser a maior rede de microfranquias digitais da América Latina até 2027.</p>
            </div>
            <div>
              <h4 className="font-bold text-gold mb-2">Valores</h4>
              <p className="text-sm text-white/50">Transparência, suporte incondicional e inovação constante.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    { q: "Preciso de experiência prévia?", a: "Não. Nossas franquias são desenhadas para iniciantes, com treinamento completo e suporte 24h." },
    { q: "Quanto tempo preciso dedicar por dia?", a: "O modelo é flexível. Você pode começar com 2 horas diárias e escalar conforme seus resultados." },
    { q: "Como recebo meus lucros?", a: "Os pagamentos são realizados mensalmente de forma automática via PIX ou transferência bancária." },
    { q: "Posso ter mais de uma franquia?", a: "Sim! Muitos de nossos franqueados de sucesso operam os três modelos simultaneamente." }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-5xl text-center mb-16">Dúvidas <span className="text-gold italic">Frequentes</span></h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{item.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/50 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">PRONTO PARA <br /> <span className="text-gold italic">TRANSFORMAR</span> SUA VIDA?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Nossos consultores estão prontos para te guiar na escolha do melhor modelo para o seu perfil. Fale conosco agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.link/m1flig" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-12 py-6 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-6 h-6" /> CHAMAR NO WHATSAPP
            </a>
          </div>
          <p className="mt-8 text-sm text-white/40 uppercase tracking-widest">Atendimento imediato • Vagas limitadas por região</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
            <TrendingUp className="text-dark w-4 h-4" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">VALOR<span className="text-gold">NOBRE</span></span>
        </div>
        
        <div className="text-white/40 text-sm">
          © 2026 Site de Franquias Barata. Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/in/anderson-silva-valornobre?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-gold transition-colors text-sm font-medium uppercase tracking-widest"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-dark relative overflow-x-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[55%] h-[55%] bg-gold/5 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px] animate-blob animation-delay-6000"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[45%] h-[45%] bg-gold/5 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Differentials />
          <Franchises />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.link/m1flig" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
