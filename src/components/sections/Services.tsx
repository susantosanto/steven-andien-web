import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Home, Building2, Baby, Heart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { fadeInUp, scaleIn } from '@/animations/variants';

export default function Services() {
  const [value, setValue] = useState('item-1');

  const mainServices = [
    {
      id: 'p3mi',
      title: 'Penempatan Pekerja Migran (P3MI)',
      kbli: 'KBLI 78102',
      description: 'Layanan penempatan resmi tenaga kerja Indonesia ke mancanegara dengan standar perlindungan hukum internasional.',
      icon: Globe,
      points: ['Proses 100% Legal', 'Pelatihan Vokasi Elit', 'Asuransi Komprehensif']
    },
    {
      id: 'lpprt',
      title: 'Layanan Domestik (LPPRT)',
      kbli: 'KBLI 78103',
      description: 'Penyedia pekerja rumah tangga profesional untuk pasar domestik dengan kualifikasi spesialis yang teruji.',
      icon: Home,
      points: ['Standar Hospitality', 'Verifikasi Keamanan', 'Kontrak Profesional']
    }
  ];

  const categories = [
    {
      id: 'housekeeper',
      title: 'Professional Housekeeper',
      icon: Building2,
      description: 'Pengelola rumah tangga dengan keahlian tata kelola inventaris, kebersihan presisi, dan etika pelayanan hospitality tinggi.',
    },
    {
      id: 'nanny',
      title: 'Certified Nanny Specialist',
      icon: Baby,
      description: 'Pengasuh profesional dengan pemahaman tumbuh kembang anak, manajemen nutrisi, dan sertifikasi keselamatan dasar.',
    },
    {
      id: 'senior',
      title: 'Senior Care Specialist',
      icon: Heart,
      description: 'Pendamping lansia yang terlatih dalam pemantauan kesehatan dasar, aktivitas kognitif, dan perawatan penuh empati.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-[#FCFAF8] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="text-orange-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4">Service Ecosystem</div>
          <h2 className="font-heading text-4xl md:text-7xl font-normal text-gray-900 mb-6 leading-tight">
            Layanan <span className="text-orange-600">Utama</span>
          </h2>
          <p className="text-base md:text-xl text-gray-500 font-medium px-4">
            Integrasi pendidikan vokasi dan penempatan tenaga kerja dengan standar kualitas global.
          </p>
        </motion.div>

        {/* Main Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-32 px-4 md:px-0">
          {mainServices.map((service) => (
            <motion.div key={service.id} initial="initial" whileInView="animate" viewport={{ once: true }} variants={scaleIn}>
              <div className="p-8 md:p-12 bg-white rounded-[40px] border border-orange-100 shadow-[0_30px_70px_-20px_rgba(249,115,22,0.1)] hover:shadow-2xl transition-all duration-700 h-full flex flex-col relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-orange-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                 
                 <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 md:mb-10 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-600 rounded-[20px] md:rounded-3xl flex items-center justify-center text-white shadow-xl">
                       <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div>
                       <div className="text-orange-600 font-black text-[10px] uppercase mb-1 tracking-tighter">{service.kbli}</div>
                       <h3 className="font-heading text-2xl md:text-3xl font-normal text-gray-900 leading-tight">{service.title}</h3>
                    </div>
                 </div>

                 <p className="text-base md:text-lg text-gray-600 font-semibold mb-8 md:mb-10 leading-relaxed relative z-10">
                    {service.description}
                 </p>

                 <div className="space-y-4 relative z-10 flex-1">
                    {service.points.map((p) => (
                      <div key={p} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-500" />
                         <span className="text-gray-800 font-bold text-sm md:text-base">{p}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories Bento/Accordion */}
        <div className="max-w-4xl mx-auto px-4 md:px-0">
           <motion.h3 
              className="font-heading text-3xl md:text-5xl font-normal text-gray-900 text-center mb-10 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Kategori <span className="text-orange-600 italic underline decoration-orange-100 underline-offset-8">Spesialisasi</span>
           </motion.h3>

           <Accordion type="single" value={value} onValueChange={setValue} className="space-y-4 md:space-y-6">
              {categories.map((cat, index) => (
                <AccordionItem key={cat.id} value={`item-${index + 1}`} className="border-0">
                  <div className={`rounded-[30px] transition-all duration-500 overflow-hidden ${value === `item-${index+1}` ? 'bg-orange-600 text-white shadow-2xl shadow-orange-300' : 'bg-orange-50 text-gray-900 hover:bg-orange-100'}`}>
                    <AccordionTrigger className="px-6 md:px-10 py-5 md:py-8 hover:no-underline">
                      <div className="flex items-center gap-4 md:gap-8">
                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-colors ${value === `item-${index+1}` ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                          <cat.icon className={`w-5 h-5 md:w-7 md:h-7 ${value === `item-${index+1}` ? 'text-white' : 'text-orange-600'}`} />
                        </div>
                        <span className="font-heading text-lg md:text-2xl font-normal tracking-tight">{cat.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 md:px-10 pb-8 pt-0">
                      <div className="pl-0 md:pl-[88px]">
                        <p className={`text-sm md:text-xl font-medium leading-relaxed max-w-2xl ${value === `item-${index+1}` ? 'text-white/90' : 'text-gray-600'}`}>
                          {cat.description}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
           </Accordion>
        </div>
      </div>
    </section>
  );
}