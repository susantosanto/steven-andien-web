import { motion } from 'motion/react';
import { Eye, Target, CheckCircle } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/animations/variants';

export default function VisionMission() {
  const visionPoints = [
    "Menjadi korporasi penempatan tenaga kerja paling terpercaya di Asia Tenggara",
    "Reputasi tinggi dan menjadi barometer keunggulan",
    "Mengintegrasikan kurikulum kecakapan vokasi bertaraf internasional",
    "Sistem perlindungan hukum yang komprehensif dan paripurna",
  ];

  const missionPoints = [
    "Transparansi & Integritas: Rekrutmen jujur, terbuka, bebas pungli",
    "Pelatihan Komprehensif: Keterampilan teknis dan bahasa asing",
    "Perlindungan 360°: Pendampingan hukum dan psikologis berkelanjutan",
    "Inovasi Digital: Pemantauan kesejahteraan real-time",
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Direction & Purpose</div>
          <h2 className="font-heading text-4xl md:text-7xl font-normal text-gray-900 mb-6 leading-tight">
            Visi & <span className="text-orange-600">Misi</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 font-medium leading-relaxed px-2">
            Komitmen kami untuk menghadirkan standar keunggulan baru dalam industri penempatan tenaga kerja global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Vision Card */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInLeft}
            className="flex h-full"
          >
            <div className="p-8 md:p-14 bg-[#FCFAF8] rounded-[40px] md:rounded-[60px] border border-orange-100 w-full shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col items-center md:items-start relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-orange-100/20 rounded-full blur-3xl -mb-20 -mr-20" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-[24px] md:rounded-3xl flex items-center justify-center shadow-xl mb-8 md:mb-10 relative z-10">
                <Eye className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl font-normal text-gray-900 mb-6 md:mb-10 relative z-10 text-center md:text-left w-full">Visi</h3>
              <p className="text-base md:text-lg text-gray-600 font-semibold leading-relaxed mb-8 md:mb-12 relative z-10 text-center md:text-left">
                Menjadi korporasi penempatan tenaga kerja paling terpercaya, bereputasi tinggi, dan menjadi barometer keunggulan di Asia Tenggara.
              </p>
              <ul className="space-y-4 md:space-y-6 relative z-10 w-full">
                {visionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <div className="mt-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-orange-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-200">
                       <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-gray-700 font-bold text-sm md:text-base leading-relaxed break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInRight}
            className="flex h-full"
          >
            <div className="p-8 md:p-14 bg-gray-900 rounded-[40px] md:rounded-[60px] w-full shadow-2xl flex flex-col items-center md:items-start relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-orange-600/5 rounded-full blur-3xl -mt-20 -mr-20" />
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-[24px] md:rounded-3xl flex items-center justify-center shadow-2xl mb-8 md:mb-10 relative z-10">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-orange-600" />
              </div>
              <h3 className="font-heading text-3xl md:text-5xl font-normal text-white mb-8 md:mb-10 relative z-10 text-center md:text-left w-full">Misi</h3>
              <ul className="space-y-5 md:space-y-8 relative z-10 w-full flex-1">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-4 md:gap-5 pb-5 md:pb-6 border-b border-white/5 last:border-0 last:pb-0">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-semibold text-sm md:text-base leading-relaxed break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}