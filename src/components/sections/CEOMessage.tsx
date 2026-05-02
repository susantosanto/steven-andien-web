import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/animations/variants';
import ceoPhoto from '@/assets/ceo.jpeg';

export default function CEOMessage() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Minimalist Message */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex justify-center mb-8 md:mb-12">
               <Quote className="w-8 h-8 md:w-12 md:h-12 text-orange-200" />
            </div>
            
            <h2 className="font-heading text-2xl md:text-5xl font-normal text-gray-900 leading-relaxed md:leading-[1.4] mb-12 md:mb-20 italic px-4">
              "Di PT Steven Andien Group, kami meyakini bahwa setiap tenaga kerja adalah <span className="font-semibold text-orange-600 not-italic underline decoration-orange-100 underline-offset-8">mahakarya</span> dan representasi langsung dari martabat bangsa di kancah global."
            </h2>

            <div className="space-y-6 text-base md:text-xl text-gray-500 max-w-2xl mx-auto leading-loose font-normal mb-16 md:mb-24 px-4">
              <p>
                Kesuksesan sejati perusahaan kami tidak diukur dari sekadar angka penempatan, melainkan dari seberapa nyata kami mampu meningkatkan kesejahteraan ekonomi dan kualitas hidup setiap individu.
              </p>
            </div>

            {/* CEO Circular Portrait */}
            <div className="flex flex-col items-center">
              <motion.div
                variants={scaleIn}
                className="mb-6"
              >
                <div className="relative p-1 rounded-full border border-orange-100">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-xl">
                    <img 
                      src={ceoPhoto} 
                      alt="Melan Esawati" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="h-[1px] w-12 bg-orange-200 mb-6" />
              
              <div className="flex flex-col items-center">
                 <span className="font-heading text-2xl md:text-3xl font-medium text-gray-900 tracking-tighter text-center">Melan Esawati</span>
                 <span className="text-[10px] md:text-xs font-bold text-orange-600 uppercase tracking-[0.2em] mt-2">Chief Executive Officer</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}