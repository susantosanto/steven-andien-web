import { motion } from 'motion/react';
import { ArrowUp, Phone, Mail, Globe, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, scaleIn } from '@/animations/variants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Keamanan', href: '#safeguard' },
    { label: 'Kontak', href: '#contact' },
  ];

  const services = [
    'P3MI (Penyelenggara Pelatihan Pemberantasan Buta Huruf)',
    'LPPRT (Lembaga Penyelenggara Pelatihan Kerja)',
    'Pelatihan Profesi & Vokasi',
    'Penempatan Tenaga Kerja',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-orange-500 mr-3" />
                <h3 className="font-heading text-2xl font-bold">
                  Steven Andien
                </h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                PT Steven Andien Group adalah penyelenggara pelatihan kerja terpercaya yang berizin P3MI dan LPPRT, berkomitmen menghadirkan tenaga kerja Indonesia yang terampil dan siap bersaing di pasar global.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Placeholders */}
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-heading text-xl font-semibold mb-4 text-orange-500">
                Navigasi Cepat
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-heading text-xl font-semibold mb-4 text-orange-500">
                Layanan Kami
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300">
                    • {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-heading text-xl font-semibold mb-4 text-orange-500">
                Hubungi Kami
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Kp. Baru, Kel. Mandalamukti, Kec. Cikalongwetan, Kabupaten Bandung Barat 40556, Jawa Barat, Indonesia
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a href="tel:085212323102" className="text-gray-300 hover:text-orange-500 transition-colors">
                    0852-1232-3102
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a href="mailto:official@stevenandien.co.id" className="text-gray-300 hover:text-orange-500 transition-colors">
                    official@stevenandien.co.id
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <a href="https://www.stevenandien.co.id" className="text-gray-300 hover:text-orange-500 transition-colors">
                    www.stevenandien.co.id
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              © {currentYear} PT Steven Andien Group. All rights reserved. | Sertifikasi P3MI & LPPRT
            </motion.p>
            <motion.div
              initial="initial"
              animate="animate"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <Button
                onClick={scrollToTop}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12 p-0"
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}