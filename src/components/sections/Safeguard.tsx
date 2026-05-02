import { motion } from 'motion/react';
import { Shield, Phone, Wallet, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeInUp, scaleIn, staggerContainer } from '@/animations/variants';

export default function Safeguard() {
  const protections = [
    {
      icon: Shield,
      title: 'Asuransi Komprehensif',
      description: 'Setiap pekerja migran dilengkapi asuransi kesehatan dan kecelakaan tingkat atas yang mencakup perlindungan selama masa kontrak.',
    },
    {
      icon: Phone,
      title: '24/7 Helpline',
      description: 'Saluran pengaduan khusus yang beroperasi 24 jam non-stop, terhubung langsung dengan perwakilan hukum di setiap negara penempatan.',
    },
    {
      icon: Wallet,
      title: 'Literasi Finansial',
      description: 'Edukasi mendalam tentang manajemen keuangan dan remitansi untuk memastikan penghasilan dikelola dengan bijak.',
    },
    {
      icon: Heart,
      title: 'Pendampingan Psikologis',
      description: 'Dukungan psikologis berkelanjutan untuk membantu pekerja menyesuaikan diri di lingkungan baru.',
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
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center"
              variants={scaleIn}
              transition={{ delay: 0.2 }}
            >
              <Shield className="h-12 w-12 text-orange-500" />
            </motion.div>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sistem Perlindungan Internasional
          </h2>
          <p className="text-xl text-orange-600 font-medium mb-4">
            International Safeguard System
          </p>
          <p className="text-gray-600 leading-relaxed">
            Keamanan fisik dan jaminan finansial pekerja adalah prioritas yang tidak bisa ditawar. Setiap pekerja migran yang berangkat meniti karir di bawah naungan PT Steven Andien Group secara otomatis dibekali dengan jaminan asuransi komprehensif tingkat atas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {protections.map((item) => (
            <motion.div key={item.title} variants={scaleIn}>
              <Card className="p-6 bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 p-8 bg-orange-200 rounded-2xl"
          initial="initial"
          animate="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Tanggung Jawab yang Melampaui Keterbatasan
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Kami memberikan edukasi literasi finansial yang mendalam serta manajemen remitansi. Tujuannya adalah untuk memastikan bahwa setiap sen penghasilan yang mereka dapatkan dari hasil kerja keras di luar negeri dapat dikelola dengan sangat bijak, dialokasikan untuk kebutuhan yang tepat, dan diubah menjadi aset investasi masa depan yang akan mengangkat derajat ekonomi keluarga mereka secara permanen.
            </p>
            <div className="flex items-center justify-center space-x-4 text-orange-600 font-medium">
              <Phone className="h-5 w-5" />
              <span>Helpline 24/7: 0852-1232-3102</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}