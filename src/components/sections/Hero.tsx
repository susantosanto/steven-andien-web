import { motion } from 'motion/react';
import { Globe2, HeartHandshake, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/animations/variants';
import heroBg from '@/assets/hero.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FCFAF8] pt-32 pb-20 md:pb-24"
    >
      {/* 2026 Elite Minimalist Background System - High Visibility hero.png */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Full Image Background - High Definition Visibility & Mobile Optimization */}
        <div 
          className="absolute inset-0 bg-cover bg-[5%_center] md:bg-[center_25%] bg-no-repeat opacity-[0.35] mix-blend-darken transition-all duration-1000 ease-out"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Refined Mesh Gradients Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF8]/40 via-transparent to-[#FCFAF8]" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_50%_20%,#FFECD9_0%,transparent_60%)] opacity-40" />
        
        {/* Micro-texture Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-125" />
      </div>

      <div className="container-custom relative z-10 w-full text-center flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full">
          
          {/* Elite Institution Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-10 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-orange-200/50 bg-white/80 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Authorized P3MI & LPPRT Institution
            </span>
          </motion.div>

          {/* Master Typography */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-10 md:mb-14"
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-normal text-gray-950 leading-[0.85] tracking-[-0.04em]">
              Redefining <br className="hidden md:block" />
              <span className="italic text-orange-600 font-light">Global Mobility.</span>
            </h1>
          </motion.div>

          {/* Sophisticated Subtitle */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="text-gray-800 text-sm md:text-xl font-medium tracking-tight mb-14 md:mb-20 max-w-2xl mx-auto leading-relaxed px-6 drop-shadow-sm"
          >
            Strategic international talent placement through 
            <span className="text-gray-950 font-bold italic underline decoration-orange-200 underline-offset-4"> superior vocational ecosystems</span> and 
            unwavering legal integrity.
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 md:mb-24"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gray-950 text-white px-12 py-5 rounded-xl font-bold text-sm tracking-tight flex items-center gap-3 hover:bg-orange-600 transition-all duration-500 shadow-2xl shadow-gray-200 active:scale-95 cursor-pointer"
            >
               Explore Ecosystem 
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-bold text-gray-950 hover:text-orange-600 transition-all duration-300 underline underline-offset-8 decoration-orange-200 hover:decoration-orange-500 cursor-pointer"
            >
              Our Philosophy
            </button>
          </motion.div>

          {/* Strategic Sector Metrics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 max-w-4xl mx-auto border-t border-orange-200/50 pt-14 md:pt-16 px-6"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ delay: 0.45 }}
          >
            {[
              { icon: Globe2, label: 'Global Network' },
              { icon: HeartHandshake, label: 'Domestic Trust' },
              { icon: Building2, label: 'Elite Training' },
              { icon: ShieldCheck, label: 'Full Compliance' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-4 group">
                 <div className="text-gray-500 group-hover:text-orange-600 transition-all duration-500 transform group-hover:scale-110">
                    <item.icon strokeWidth={1.5} className="w-7 h-7 md:w-8 md:h-8" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-gray-950 transition-colors">
                    {item.label}
                 </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
