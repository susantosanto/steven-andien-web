import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Mail, Globe, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
} from '@/components/ui/sheet';
import logoImg from '@/assets/logo.jpg';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Philosophy', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSheetOpen]);

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.2, duration: 0.5 }
    })
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 md:h-24 flex items-center ${
        isScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-orange-50' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between w-full">
        {/* Logo & Brand */}
        <motion.div
          className="flex items-center gap-3.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 overflow-hidden rounded-full border border-orange-100 shadow-sm">
            <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading text-xl md:text-2xl font-medium tracking-tighter text-gray-900 leading-none">
              Steven Andien
            </span>
            <span className="text-[10px] font-bold text-orange-600 mt-0.5 tracking-tight uppercase">
              Group Indonesia
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm font-semibold tracking-tight"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.name}
            </motion.a>
          ))}
          <button className="btn-elite px-7 py-2.5">
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="flex flex-col items-end gap-1.5 p-3 -mr-2"
            onClick={() => setIsSheetOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-6 h-0.5 bg-gray-900" />
            <div className="w-6 h-0.5 bg-gray-900" />
            <div className="w-4 h-0.5 bg-gray-900" />
          </button>
          
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent className="bg-white rounded-[2.5rem] shadow-2xl border-0 overflow-hidden ring-1 ring-black/5">
               <div className="flex flex-col h-[70vh] md:h-[60vh] bg-[#FCFAF8]">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-orange-100/50">
                     <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-orange-100 shadow-md">
                           <img src={logoImg} className="w-full h-full object-cover" alt="Logo" />
                        </div>
                        <div>
                           <span className="font-heading text-lg font-medium tracking-tight text-gray-900 block">Steven Andien</span>
                           <span className="text-[9px] font-bold text-orange-500 uppercase tracking-wider">Group Indonesia</span>
                        </div>
                     </div>
                     <button 
                        onClick={() => setIsSheetOpen(false)}
                        className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 hover:bg-orange-100 active:scale-95 transition-all"
                     >
                        <X className="w-4 h-4" />
                     </button>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 flex flex-col justify-center px-6 py-6 overflow-y-auto min-h-0">
                    {navItems.map((item, i) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        custom={i}
                        initial="closed"
                        animate={isSheetOpen ? "open" : "closed"}
                        variants={itemVariants}
                        className="group flex items-center justify-between py-4 border-b border-gray-100/50 last:border-0"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <div className="flex items-center gap-4">
                           <span className="text-xs font-black text-orange-400 uppercase tracking-widest w-5">0{i+1}</span>
                           <span className="text-2xl font-heading font-normal text-gray-800 tracking-tight group-hover:text-orange-600 transition-colors">
                              {item.name}
                           </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-white/80 backdrop-blur-sm border-t border-orange-100/50">
                     <div className="mb-5">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-4">Connect with us</div>
                        <div className="flex gap-4">
                            <a href="mailto:info@stevenandien.com" className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-all">
                               <Mail className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 hover:bg-orange-100 transition-all">
                               <Globe className="w-4 h-4" />
                            </a>
                         </div>
                     </div>
                     <button 
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xs uppercase tracking-[0.15em] py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 active:scale-[0.98] transition-all shadow-lg shadow-orange-200"
                        onClick={() => { setIsSheetOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                     >
                        Start Conversation
                     </button>
                  </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}