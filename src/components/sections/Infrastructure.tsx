import { motion } from 'motion/react';
import { Building2, Scale, FileText, MapPin, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/animations/variants';

export default function Infrastructure() {
  const infrastructure = [
    {
      icon: Building2,
      title: 'Pusat Pelatihan & BLK Premium',
      description: 'PT Steven Andien Group membangun dan mengoperasikan Pusat Pelatihan serta Balai Latihan Kerja (BLK) mandiri yang berskala luas. Fasilitas ini didesain secara spesifik oleh para pakar industri untuk secara akurat mensimulasikan lingkungan kerja nyata dengan tingkat detail yang mengesankan.',
    },
  ];

  const legalDetails = [
    { label: 'Nama Entitas', value: 'PT Steven Andien Group' },
    { label: 'Izin Usaha Terdaftar', value: 'Lembaga P3MI & LPPRT Terverifikasi' },
    { label: 'Notaris Pengesah', value: 'Dhani Satria Wijaya, S.H., M.Kn.' },
    { label: 'Akta Pendirian', value: 'No. 59, Tanggal 11 April 2026' },
    { label: 'Alamat', value: 'Kabupaten Bandung Barat, Jawa Barat' },
    { label: 'Direktur Utama', value: 'Melan Esawati' },
  ];

  return (
    <section className="section-padding bg-orange-100">
      <div className="container-custom mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          animate="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Infrastruktur & Legal Integrity
          </h2>
          <p className="text-gray-600">
            Kepercayaan dari publik dan mitra adalah aset terbesar kami. Kami beroperasi di atas landasan kepatuhan hukum yang sangat kokoh, taat asas, dan mengedepankan transparansi tata kelola perseroan yang modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Training Infrastructure */}
          <motion.div
            initial="initial"
            animate="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInLeft}
          >
            <Card className="p-8 bg-white border-orange-200 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Pusat Pelatihan & BLK Premium
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kualitas prima dari tenaga kerja yang kami hasilkan tidak terjadi secara kebetulan; hal tersebut dibentuk dan ditempa secara sistematis dari infrastruktur pendidikan vokasi yang sangat unggul.
              </p>
              <ul className="space-y-3">
                {infrastructure.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{item.description}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Legal Credentials */}
          <motion.div
            initial="initial"
            animate="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInRight}
          >
            <Card className="p-8 bg-orange-50 border-orange-200 h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Legal Credentials
                </h3>
              </div>
              <div className="space-y-4">
                {legalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center py-2">
                      <span className="font-medium text-gray-700 sm:w-48 flex-shrink-0">
                        {detail.label}
                      </span>
                      <Separator className="hidden sm:block sm:w-8 mx-4" />
                      <span className="text-gray-900 font-semibold">{detail.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-orange-200">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                      Sertifikasi Resmi
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Kami memiliki izin P3MI (KBLI 78102) dan LPPRT (KBLI 78103) yang resmi dan terverifikasi oleh otoritas ketenagakerjaan Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Address Section */}
        <motion.div
          className="mt-12 p-6 bg-white rounded-xl border border-orange-200"
          initial="initial"
          animate="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="h-6 w-6 text-orange-500 mr-3" />
              <div>
                <h4 className="font-heading text-lg font-semibold text-gray-900">
                  Kantor Pusat & Pusat Pelatihan
                </h4>
                <p className="text-gray-600">
                  Kp. Baru, Kel. Mandalamukti, Kec. Cikalongwetan, Kabupaten Bandung Barat 40556, Jawa Barat, Indonesia.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <User className="h-6 w-6 text-orange-500 mr-3" />
              <div>
                <h4 className="font-heading text-lg font-semibold text-gray-900">
                  Direktur Utama
                </h4>
                <p className="text-gray-600">Melan Esawati</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}