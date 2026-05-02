import { motion } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/animations/variants';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Alamat',
      value: 'Kp. Baru, Kel. Mandalamukti, Kec. Cikalongwetan, Kabupaten Bandung Barat 40556, Jawa Barat, Indonesia',
    },
    {
      icon: Phone,
      label: 'Telepon/WhatsApp',
      value: '0852-1232-3102',
      href: 'tel:085212323102',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'official@stevenandien.co.id',
      href: 'mailto:official@stevenandien.co.id',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.stevenandien.co.id',
      href: 'https://www.stevenandien.co.id',
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      value: '24/7 - Selalu tersedia untuk layanan konsumen',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-orange-100">
      <div className="container-custom mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          animate="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600">
            Siap membantu Anda dengan solusi tenaga kerja terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="initial"
            animate="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInLeft}
          >
            <Card className="p-8 bg-white border-orange-200">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@domain.com"
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    placeholder="Apa yang bisa kami bantu?"
                    className="border-orange-200 focus:border-orange-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={6}
                    className="border-orange-200 focus:border-orange-500 resize-none"
                  />
                </div>
                <Button type="submit" className="btn-primary w-full">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            animate="animate"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInRight}
          >
            <div className="space-y-6">
              <Card className="p-6 bg-orange-50 border-orange-200">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {info.label}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-700 hover:text-orange-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-700">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="p-6 bg-white border-orange-200">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  Lokasi Kami
                </h3>
                <div className="aspect-video bg-orange-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                    <p className="text-gray-600">Kabupaten Bandung Barat, Jawa Barat</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline text-sm"
                    >
                      Buka di Google Maps
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}