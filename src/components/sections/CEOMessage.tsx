import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { fadeInUp } from '@/animations/variants';
import ceoPhoto from '@/assets/ceo.jpeg';

export default function CEOMessage() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Minimalist Quote Icon with subtle float */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12"
          >
            <div className="relative">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-orange-300 mx-auto" />
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Quote className="w-12 h-12 md:w-16 md:h-16 text-orange-400 opacity-50 blur-[2px]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Quote - Staggered reveal per paragraph */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-2xl md:text-5xl font-normal text-gray-900 leading-relaxed md:leading-[1.4] mb-8 md:mb-16 italic px-4"
            >
              "Di PT Steven Andien Group, kami meyakini bahwa setiap tenaga kerja adalah 
              {" "}<span className="font-semibold text-orange-600 not-italic underline decoration-orange-200 underline-offset-8 decoration-4">talenta strategis</span>{" "} 
              dan representasi langsung dari martabat bangsa di kancah global."
            </motion.h2>

            <motion.div 
              variants={fadeInUp}
              className="space-y-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-loose font-light mb-16 md:mb-24 px-4"
            >
              <p>
                Kesuksesan sejati perusahaan kami tidak diukur dari sekadar angka penempatan, melainkan dari seberapa nyata kami mampu 
                <span className="text-gray-900 font-semibold"> meningkatkan kesejahteraan ekonomi dan kualitas hidup setiap individu</span>.
              </p>
              <p className="text-orange-600 font-medium">
                — Kami adalah partner strategis seumur hidup.
              </p>
            </motion.div>
          </motion.div>

          {/* CEO Portrait - Enhanced for Mobile */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              initial: { opacity: 0, scale: 0.9 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }
            }}
            className="flex flex-col items-center"
          >
            {/* Glow Ring Behind Photo */}
            <div className="relative mb-8">
              <motion.div 
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(251, 146, 60, 0.4)',
                    '0 0 0 20px rgba(251, 146, 60, 0)',
                    '0 0 0 0 rgba(251, 146, 60, 0)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
              />
              
              {/* Photo Frame */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 shadow-2xl">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={ceoPhoto} 
                    alt="Melan Esawati" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            {/* CEO Info with staggered reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-6" />
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-gray-900 tracking-tighter text-center mb-2">
                Melan Esawati
              </h3>
              <span className="text-[10px] md:text-xs font-bold text-orange-600 uppercase tracking-[0.3em]">
                Chief Executive Officer
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/30 to-transparent pointer-events-none" />
    </section>
  );
}
