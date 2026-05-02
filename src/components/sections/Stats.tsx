import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Shield, Globe, Award, Zap, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/animations/variants';

const stats = [
  {
    icon: Shield,
    label: 'Legal Accuracy',
    value: 100,
    suffix: '%',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    description: 'P3MI & LPPRT Registered',
  },
  {
    icon: Zap,
    label: 'Skill Maturity',
    value: 12,
    suffix: ' Mo',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    description: 'Intensive Elite Training',
  },
  {
    icon: Globe,
    label: 'Global Network',
    value: 15,
    suffix: '+',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    description: 'Active Destination Countries',
  },
  {
    icon: Award,
    label: 'Client Trust',
    value: 99,
    suffix: '%',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    description: 'Partnership Retention Rate',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="bg-[#FFFBF7] py-24 lg:py-40 relative">
      {/* Decorative Text background */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none leading-none">
        <h2 className="text-[20vw] font-black font-heading whitespace-nowrap">STEVEN ANDIEN GROUP</h2>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-2xl mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">
             <div className="w-8 h-[2px] bg-orange-500" />
             Metric performance
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Proven Excellence in <br />
            <span className="text-orange-600">Vocational Human Capital.</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="group">
              <div className="relative glass-card rounded-[32px] p-8 lg:p-10 h-full transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_-10px_rgba(255,107,53,0.15)] flex flex-col border-white/80 overflow-hidden">
                {/* Background active glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/[0.03] group-hover:to-orange-500/[0.05] transition-all duration-700" />
                
                <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                
                <div className="flex-1">
                  <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-3 tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <div className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4 group-hover:text-orange-600 transition-colors">
                    {stat.label}
                  </div>
                  
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[10px] font-bold text-gray-400 uppercase">Verified Data</span>
                   <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}