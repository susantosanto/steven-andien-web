import { motion } from 'motion/react';
import { Globe2, HeartHandshake, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/animations/variants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FCFAF8] pt-32 pb-20 md:pb-24"
    >
      {/* Soft Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#FFECD9_0%,transparent_70%)] opacity-30" />
      </div>

      <div className="container-custom relative z-10 w-full text-center flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Crisp Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-10 text-orange-600 text-[10px] md:text-xs font-extrabold uppercase tracking-widest"
          >
            P3MI & LPPRT Authorized Institution
          </motion.div>

          {/* Instrument Serif Heading */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-10 md:mb-12"
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] font-normal text-gray-900 leading-[0.9] md:leading-[0.85] tracking-tighter">
              Empowering the <br className="hidden md:block" />
              <span className="italic text-orange-600">Global Workforce</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-sm md:text-xl font-medium tracking-tight mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Bridging talent to international opportunity through 
            <span className="text-gray-900 font-bold"> elite vocational training</span> and legal security.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 md:mb-20"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-elite w-full sm:w-auto h-14 flex items-center justify-center gap-3 px-12 cursor-pointer"
            >
               Explore Ecosystem <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-all duration-300 cursor-pointer"
            >
              View Portfolio
            </button>
          </motion.div>

          {/* Minimalist Sector Row */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto border-t border-orange-100 pt-10 md:pt-12 px-4"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.45 }}
          >
            {[
              { icon: Globe2, label: 'International' },
              { icon: HeartHandshake, label: 'Domestic' },
              { icon: Building2, label: 'Vocational' },
              { icon: ShieldCheck, label: 'Compliance' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 md:gap-3 group">
                 <div className="text-gray-300 group-hover:text-orange-500 transition-all duration-500">
                    <item.icon strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7" />
                 </div>
                 <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tight text-gray-400 group-hover:text-gray-900 transition-colors">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}