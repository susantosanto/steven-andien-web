import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Handshake } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/animations/variants';

export default function Philosophy() {
  const values = [
    {
      icon: Heart,
      title: 'Kekuatan Individual',
      description: 'Setiap tenaga kerja adalah mahakarya dan representasi langsung dari martabat bangsa.',
    },
    {
      icon: Users,
      title: 'Partner Seumur Hidup',
      description: 'Kami menempatkan diri sebagai partner strategis dalam pengembangan karir berkelanjutan.',
    },
    {
      icon: TrendingUp,
      title: 'Peningkatan Berkelanjutan',
      description: 'Kesuksesan diukur dari peningkatan kesejahteraan ekonomi dan kualitas hidup keluarga.',
    },
    {
      icon: Handshake,
      title: 'Hubungan Harmonis',
      description: 'Membangun hubungan kerja yang saling menguntungkan dengan empati dan profesionalisme.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-[#FFFBF7] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-orange-600 font-bold tracking-widest uppercase text-xs bg-orange-100/50 rounded-full border border-orange-200/50">
            Our Core Values
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Filosofi <span className="text-orange-600 underline decoration-orange-200 underline-offset-8">Pelayanan</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Landasan etika yang membimbing setiap langkah kami dalam memberdayakan potensi manusia secara global.
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