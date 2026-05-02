import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Handshake } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/animations/variants';

export default function Philosophy() {
  const values = [
    {
      icon: Heart,
      title: 'Mahakarya SDM',
      description: 'Kami meyakini setiap tenaga kerja adalah mahakarya dan representasi langsung dari martabat bangsa di kancah global.',
    },
    {
      icon: Users,
      title: 'Partner Strategis',
      description: 'Bukan sekadar agen penempatan, kami adalah partner strategis seumur hidup dalam pengembangan karir berkelanjutan.',
    },
    {
      icon: TrendingUp,
      title: 'Kesejahteraan Nyata',
      description: 'Kesuksesan diukur dari seberapa nyata kami mampu meningkatkan kesejahteraan ekonomi dan kualitas hidup keluarga pekerja.',
    },
    {
      icon: Handshake,
      title: 'Perlindungan Paripurna',
      description: 'Menjamin perlindungan hak asasi dan keamanan setiap individu yang kami berangkatkan dengan integritas hukum tertinggi.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-[#FFFBF7] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6">
            Filosofi <span className="italic text-orange-600 font-light">Mahakarya SDM</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Keyakinan mendalam bahwa setiap individu adalah representasi martabat bangsa menjadi fondasi utama seluruh pergerakan bisnis kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-50px' }}
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(255,107,53,0.05)] border border-orange-50 hover:border-orange-200 transition-all duration-500 text-center h-full flex flex-col items-center justify-start relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                
                <div className="w-24 h-24 mb-10 bg-orange-600 rounded-[32px] flex items-center justify-center text-white shadow-xl shadow-orange-200/50 group-hover:rotate-6 transition-all duration-500 relative z-10">
                  <value.icon className="h-10 w-10" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-5 tracking-tight relative z-10">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-semibold text-base relative z-10 break-words">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}