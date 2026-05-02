import { motion } from 'motion/react';
import { Shield, BookOpen, Lock, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeInUp, scaleIn, staggerContainer } from '@/animations/variants';

export default function WhyChooseUs() {
  const values = [
    {
      icon: Shield,
      title: '100% Legal & Certified',
      description: 'Fully authorized by Indonesian authorities. Kami beroperasi dengan legalitas penuh sesuai KBLI 78102 dan 78103, tanpa praktik ilegal atau pungutan liar.',
      color: 'bg-orange-500',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Training',
      description: 'Pembekalan keterampilan teknis, bahasa asing, dan pemahaman lintas budaya. Kami memastikan setiap kandidat siap adaptif di pasar kerja global.',
      color: 'bg-orange-400',
    },
    {
      icon: Lock,
      title: '360° Protection',
      description: 'Pendampingan hukum, psikologis, dan jaminan sosial yang berkelanjutan dari pendaftaran hingga reintegrasi pasca-kerja.',
      color: 'bg-orange-600',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Helpline beroperasi 24 jam non-stop melalui sistem telekomunikasi canggih yang terhubung langsung dengan perwakilan hukum di setiap negara penempatan.',
      color: 'bg-orange-300',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          animate="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-600">
            Keunggulan yang membedakan kami dari kompetitor
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={scaleIn}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="p-6 bg-orange-50 border-orange-200 hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                <div className={`w-20 h-20 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}