import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './public';
import { Menu, X, Phone, Mail, Instagram, Facebook, MapPin, ChevronRight, CheckCircle2, ShoppingCart, Activity as ActivityIcon, Users, Settings, ShieldCheck, HeartHandshake, MessageSquare } from 'lucide-react';

// --- Constants ---
const LOGO_URL = "https://iili.io/BUY42x2.png";
const CONTACT_INFO = {
  address: "Jl. Mesjid Al-Mujahidin No.13, Setiadarma, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17158",
  mapsLink: "https://maps.app.goo.gl/NJGFj5nhkeXqH8c57",
  phone: "+62 812-8310-4147",
  whatsapp: "https://wa.me/6281283104147",
  email: "yuvan.rajaalkesindo@gmail.com",
  instagram: "https://www.instagram.com/yuvan.alkesindo",
  facebook: "https://www.facebook.com/share/1NmazkrQPY"
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Produk', path: '/produk' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Hubungi Kami', path: '/hubungi-kami' },
];      

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'py-4 bg-primary-dark shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="PT Yuvan Raja Alkesindo" className={`h-10 md:h-12 w-auto transition-all`} />
          <span className="text-lg md:text-xl font-bold font-display tracking-tight transition-all text-white">
            PT YUVAN RAJA ALKESINDO
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'px-5 py-2 rounded-full bg-primary-dark text-primary-light' : (scrolled ? 'text-white' : 'text-primary-dark')}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md active:scale-95 ${scrolled ? 'bg-[#25D366] hover:bg-[#128C7E] text-white' : 'bg-[#25D366] hover:bg-[#128C7E] text-white'}`}
          >
            WhatsApp Kami
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary-dark shadow-xl md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="p-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium transition-colors text-white"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={CONTACT_INFO.whatsapp}
                className="w-full py-3 bg-[#25D366] text-white rounded-xl text-center font-medium shadow-lg hover:bg-[#128C7E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-12 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Navigation Row Moved Down */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="text-white hover:text-primary-light transition-colors font-medium uppercase tracking-wider text-xs">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm">
          <p className="opacity-60 text-center md:text-left tracking-wide">&copy; {new Date().getFullYear()} PT Yuvan Raja Alkesindo. All rights reserved.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-blue-300 transition-colors opacity-60">Privacy Policy</a>
             <a href="#" className="hover:text-blue-300 transition-colors opacity-60">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const Home = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070",
    "https://i.ibb.co.com/h6ZK5DK/pngtree-medical-operating-room-decorated.png",
    "https://i.ibb.co.com/KzzQwZZm/CH12.jpg"    
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-0 bg-primary-light">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentHeroImage}
              src={heroImages[currentHeroImage]} 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              alt="Medical equipment" 
              className="w-full h-full object-cover inset-0 bg-gradient-to-b from-primary-dark/30 to-black/70"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[0.9] font-slogan tracking-tighter">
              Best Product is <br /> <span className="text-primary-dark drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Best Service</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-light">
              Menghadirkan solusi kesehatan modern dengan integritas dan dedikasi tinggi untuk masa depan Indonesia yang lebih sehat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hubungi-kami" className="px-6 py-5 bg-primary-dark text-white rounded-full font-semibold hover:bg-[#25D366] hover:text-white transition-all">
                Hubungi Kami
              </Link>
              <a href="https://www.google.com/url?q=https%3A%2F%2Fkatalog.inaproc.id%2Fyuvan-raja-alkesindo&sa=D&sntz=1&usg=AOvVaw3lU-2ZtCCkS0NDFwLYl4QQ" target="_blank" rel="noreferrer" className="px-6 py-5 bg-white text-primary-dark rounded-full font-semibold hover:bg-[#25D366] hover:text-white transition-all">
                BUY
              </a>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentHeroImage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentHeroImage ? 'bg-blue-400 w-10' : 'bg-white/40'}`}
            />
          ))}
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
        >
          <ChevronRight size={32} className="rotate-90" />
        </motion.div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 bg-primary-light">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl px-6 py-5 bg-primary-dark text-white rounded-full font-semibold">SEJARAH</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="rounded-3xl overflow-hidden shadow-2xl relative"
          >            
            <img 
              src="https://i.ibb.co.com/LD6pzR0t/1601575881448.jpg" 
              alt="Professional Healthcare" 
              className="w-full aspect-square md:aspect-auto h-[500px] object-cover"
            />
            <div className="absolute inset-0 mix-blend-multiply"></div>
          </motion.div>
          
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}         
          >
            <div className="bg-primary-dark rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl text-white">
              <span className="px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">TRACKS OF TIME</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">PT Yuvan Raja Alkesindo</h2>
              <p className="text-lg text-white leading-relaxed mb-6">
                PT Yuvan Raja Alkesindo didirikan tahun 2020. Dimana saat itu Indonesia dan seluruh dunia sedang dilanda pandemi global yaitu covid 19. Perusahaan ini didirikan dengan tujuan membantu pemerintah untuk menghilangkan wabah virus covid 19.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Produk yang dijual saat itu adalah rapid antigen, masker dan barang habis pakai lainnya sebagai garda terdepan dalam penanganan kesehatan nasional.
              </p>
              <div className="mt-10 flex gap-12">
                <div>
                  <p className="text-4xl font-bold text-white">2020</p>
                  <p className="text-white font-medium">Tahun Berdiri</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">Garda</p>
                  <p className="text-white font-medium">Terdepan Covid-19</p>
                </div>
              </div>
            </div>
          </motion.div>          
        </div>
      </section>
    </div>
  );
};

const About = () => {
  return (
    <div className="pt-24 pb-24 bg-primary-light min-h-screen">
      {/* Header Section */}
      <section className="px-6 mb-16 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl px-6 py-5 bg-primary-dark text-white rounded-full font-semibold">Tentang Kami</h1>
        </div>
      </section>

      {/* Dedicated Services */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-primary-dark rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl text-white">
              <span className="px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Dedication in detail</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">PT Yuvan Raja Alkesindo</h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                Saat ini PT Yuvan Raja Alkesindo memberikan layanan perawatan alat – alat kesehatan baik pemeliharaan alat maupun servis perbaikan alat. Dimana perusahaan ini menggunakan standar WHO sebagai acuan dunia, sehingga hasil dan kualitas menjadi target utama.
              </p>
              <p className="text-white text-lg leading-relaxed">
                PT Yuvan Raja Alkesindo juga menjadi konsultan dalam pemilihan kebutuhan alat – alat kesehatan baik dalam bidang laboratorium maupun elektromedis lainnya. Sehingga customer dapat memilih barang – barang kesehatan sesuai dengan budget dan kebutuhan tanpa rasa khawatir.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://i.ibb.co.com/tPFZqC2X/unnamed-25-1024x574.png" 
                alt="Medical Services" 
                className="w-full h-80 md:h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background blobs for visual interest */}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            {/* Visi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-primary-dark p-12 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center border border-white/10"
            >
              <h3 className="text-4xl font-bold mb-8">Visi Kami</h3>
              <p className="text-xl leading-relaxed text-white font-medium italic">
                "Menjadi perusahaan Kesehatan No 1 di Indonesia Membantu pemerintah dalam progam menciptakan masyarakat yang sehat dan sejahtera"
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-primary-dark p-12 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center border border-white/10"
            >
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white uppercase">Misi Perusahaan</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <p className="text-white font-medium text-lg leading-snug">- Menyediakan kebutuhan medis yang terbaik dan sesuai standar WHO</p>
                </div>
                <div className="flex gap-4">
                  <p className="text-white font-medium text-lg leading-snug">- Memberikan pelayanan purna jual yang terbaik kepada customer</p>
                </div>
                <div className="flex gap-4 md:col-span-2">
                  <p className="text-white font-medium text-lg leading-snug">- Menjadi sahabat untuk customer dengan memberikan konsultasi dalam pemenuhan kebutuhan produk Kesehatan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Product = () => {
  const products = [
    { name: "Rapid test", url: "https://i.ibb.co.com/rGDCpfkd/rapid-test.jpg" },
    { name: "Immunology", url: "https://i.ibb.co.com/jPxMdq54/Immunology.jpg" },
    { name: "Coagulation", url: "https://i.ibb.co.com/W4gfXB46/Coagulation.jpg" },
    { name: "Urinalysis", url: "https://i.ibb.co.com/TM6t49mM/Urinalysiss.jpg" },
    { name: "Chemistry", url: "https://i.ibb.co.com/DPWtPD08/Chemistry.jpg" },
    { name: "Serology", url: "https://i.ibb.co.com/9k1x8ZQG/Serology.jpg" },
    { name: "Hematology", url: "https://i.ibb.co.com/LXX6YZcx/Hematology.jpg" },
    { name: "Hospital Furniture", url: "https://i.ibb.co.com/8gwsDK40/Hospital-Furniture.jpg" },
    { name: "BHP", url: "https://i.ibb.co.com/x83VB9Pk/bhp.jpg" },
    { name: "ICU", url: "https://i.ibb.co.com/Y7qvNCLh/icu.jpg" },
    { name: "Kalibrasi", url: "https://i.ibb.co.com/mrRh4hbG/kalibrasi.jpg" },
    { name: "POLI", url: "https://i.ibb.co.com/r2bk7NdR/poli.jpg" },
  ];

  return (
    <div className="pt-24 pb-24 bg-primary-light min-h-screen">
      {/* Header Section */}
      <section className="px-6 mb-12 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl px-6 py-5 bg-primary-dark text-white rounded-full font-semibold">Produk Kami</h1>
        </div>
      </section>
      
      {/* Jual Beli */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-dark rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl text-white">
            <div className="max-w-3xl">
              <span className="px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Service Excellence</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Jual/Beli Alat 100% Original</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Kami menyediakan Jual Beli bermacam alat kesehatan (Baru/Bekas) standar medis dengan kualitas terbaik dan harga kompetitif. Mulai dari kebutuhan bidang laboratorium maupun elektromedis lainnya, kami memberikan kepuasan customer dan produk original untuk pelayanan prioritas kami.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="text-blue-400" size={20} /> Produk Original
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="text-blue-400" size={20} /> Harga Kompetitif
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="text-blue-400" size={20} /> Standar Medis
                </div>
                <div className="flex items-center gap-2 text-white font-medium">
                  <CheckCircle2 className="text-blue-400" size={20} /> Bergaransi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">          
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-36 w-auto md:h-50 rounded-2xl overflow-hidden shadow-md"
              >
                <img src={p.url} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-1">
                  <p className="text-white font-bold size={12}">{p.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Legal & Inaproc */}
      <section className="px-6 space-y-12 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Keamanan & Legalitas */}
           <div className="bg-primary-dark border border-white/5 p-10 rounded-3xl shadow-2xl flex flex-col h-full text-white">
             <div className="mb-8">
                 <img src="https://i.ibb.co.com/wN7C74kH/Dokumen-Legalitas.jpg" alt="Legalitas Logo" className="h-auto w-full" />
                 <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded text-xs font-bold">Legalitas Resmi</span>
              </div>
             <h3 className="text-2xl font-bold mb-6 text-white">Keamanan & Legalitas</h3>
             <p className="text-white/80 leading-relaxed">
               Di PT Yuvan Raja Alkesindo kualitas dan keamanan produk adalah prioritas utama kami. Kami memahami bahwa kepercayaan customer berawal dari transparansi dan kepatuhan terhadap regulasi yang berlaku. Oleh karena itu, seluruh lini produk kami telah melalui serangkaian pengujian dan memiliki Izin Edar Resmi dari otoritas berwenang.
             </p>
           </div>
          
            {/* Inaproc */}
            <div className="bg-primary-dark border border-white/5 p-10 rounded-3xl shadow-2xl flex flex-col h-full text-white">
              <div className="mb-8">
                 <img src="https://i.ibb.co.com/YT8fs7Dp/inaproc.png" alt="Inaproc Logo" className="h-auto w-full" />
                 <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded text-xs font-bold">Terdaftar di E-Katalog</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Tersedia di E-Katalog Inaproc</h3>
              <p className="text-white/80 leading-relaxed mb-10 grow">
                Temukan berbagai kebutuhan alat laboratorium maupun elektromedis lainnya dari PT Yuvan Raja Alkesindo di E-Katalog Inaproc. Kami menyediakan produk unggulan dengan harga transparan, proses pengadaan yang mudah, dan jaminan keaslian barang.
              </p>
             <a 
               href="https://www.google.com/url?q=https%3A%2F%2Fkatalog.inaproc.id%2Fyuvan-raja-alkesindo&sa=D&sntz=1&usg=AOvVaw3lU-2ZtCCkS0NDFwLYl4QQ" 
               target="_blank"
               rel="noreferrer"
               className="w-full flex justify-between items-center py-4 px-6 bg-white text-primary-dark rounded-2xl hover:bg-[#25D366] hover:text-white transition-all group shadow-lg shadow-blue-900/20"
             >
               <span className="font-semibold uppercase tracking-wider">Buy</span>
               <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
             </a>
           </div>
        </div>
      </section>
    </div>
  );
};

const Activity = () => {
  const activities = [
    "https://i.ibb.co.com/Fkm1WWqD/activity1.png", 
    "https://i.ibb.co.com/6RMGnyXh/activity2.png", 
    "https://i.ibb.co.com/nsP6nKwm/activity3.png", 
    "https://i.ibb.co.com/pvQW0hmG/activity4.png", 
    "https://i.ibb.co.com/DfZxHcCm/activity5.png", 
    "https://i.ibb.co.com/XxPLNm3n/activity6.png", 
    "https://i.ibb.co.com/GfLCQLK5/activity7.png", 
    "https://i.ibb.co.com/T9b2Gxj/activity8.png",
    "https://i.ibb.co.com/4Zg0LLK7/activity9.png", 
    "https://i.ibb.co.com/Nng1Gb57/activity10.png", 
    "https://i.ibb.co.com/sv3jKhQy/Elek-jpg.jpg",
    "https://i.ibb.co.com/4gKk7zdT/IMG-20230701-WA0009.jpg"
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % activities.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + activities.length) % activities.length);
  
  return (
    <div className="pt-24 pb-24 bg-primary-light min-h-screen">
      {/* Header Section */}
      <section className="px-6 mb-16 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl px-6 py-5 bg-primary-dark text-white rounded-full font-semibold">Galeri Kami</h1>
        </div>
      </section>      

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-dark rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl text-white mb-16">
            <span className="px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Activities & Innovation</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Jejak Visual Profesionalisme Kami</h2>
            <p className="text-white text-lg leading-relaxed">
              Selamat datang di Galeri Dokumentasi PT Yuvan Raja Alkesindo. Ruang ini merupakan arsip visual perjalanan kami dalam membangun inovasi dan kepercayaan. Di sini, Anda dapat melihat setiap pencapaian, kolaborasi strategis, dan komitmen kami dalam memberikan layanan terbaik bagi mitra dan pelanggan.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative group rounded-[2rem] overflow-hidden shadow-2xl bg-primary-dark">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeIndex}
                  src={activities[activeIndex]} 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[400px] md:h-[600px] object-contain bg-primary-dark"
                />
              </AnimatePresence>
              
              <button 
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 glass rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>
              <button 
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 glass rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="mt-8 flex gap-4 overflow-x-auto pb-4 px-2 no-scrollbar justify-center">
              {activities.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`relative shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all ${i === activeIndex ? 'ring-4 ring-blue-600 scale-105 z-10' : 'opacity-60 hover:opacity-100 shadow-md'}`}
                >
                  <img src={img} alt={`Activity ${i + 1}`} className="w-full h-full object-cover shadow-sm" />
                </button>
              ))}
            </div>
          </div>
          
          <p className="text-center mt-12 text-slate-500 font-medium italic">
            "Setiap gambar adalah bukti dedikasi kami terhadap kualitas."
          </p>
        </div>
      </section>
    </div>
  );
};
      
const Contact = () => {
  return (
    <div className="pt-24 pb-24 bg-sky-50 min-h-screen">
      {/* Banner Section */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden h-64 md:h-[400px] mb-12 relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1549227082-0ea18ce30397?auto=format&fit=crop&q=80&w=2070" 
              alt="Medical Support Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent flex items-center p-12">
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Response Timely</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Prioritas Respons Cepat</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Kami siap membantu kesuksesan bisnis Anda. Jika Anda memiliki pertanyaan mengenai layanan kami, membutuhkan konsultasi strategis, atau ingin menjalin kemitraan, tim profesional kami siap memberikan solusi terbaik. Hubungi kami melalui saluran di bawah ini, dan kami akan merespons permintaan Anda dalam waktu maksimal 24 jam kerja.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 md:col-span-4 bg-primary-dark p-6 rounded-2xl shadow-xl border border-white/5 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-150 duration-500"></div>
                  <div className="flex gap-5 items-start relative z-10">
                    <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-400 group-hover:text-primary-dark transition-colors duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Alamat Kantor</h4>
                      <p className="text-white text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                      <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="text-white font-bold text-xs mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                        LIHAT DI GOOGLE MAPS <ChevronRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-dark p-4 rounded-2xl shadow-xl border border-white/5 group flex flex-col items-center justify-center text-center relative overflow-hidden h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-500 group-hover:text-white transition-all transform group-hover:rotate-12">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-1 text-sm">WhatsApp</h4>
                    <p className="text-white text-[11px] mb-2">{CONTACT_INFO.phone}</p>
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="bg-white/10 text-white px-3 py-1 rounded-md font-bold text-[11px] uppercase tracking-wider hover:bg-green-500 transition-all border border-white/5">
                      Chat
                    </a>
                  </div>
                </div>

                <div className="bg-primary-dark p-4 rounded-2xl shadow-xl border border-white/5 group flex flex-col items-center justify-center text-center relative overflow-hidden h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-400 group-hover:text-primary-dark transition-all transform group-hover:-rotate-12">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-1 text-sm">Email</h4>
                    <p className="text-white text-[11px] mb-2 truncate w-full px-1">{CONTACT_INFO.email}</p>
                    <span className="text-[11px] text-white font-bold uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded">OFFICIAL</span>
                  </div>
                </div>

                <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="bg-primary-dark p-4 rounded-2xl shadow-xl border border-white/5 group flex flex-col items-center justify-center text-center relative overflow-hidden h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-3 group-hover:bg-gradient-to-tr group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-purple-500 group-hover:text-white transition-all">
                      <Instagram size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-1 text-sm">Instagram</h4>
                    <p className="text-white text-[11px]">@yuvan.alkesindo</p>
                  </div>
                </a>

                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="bg-primary-dark p-4 rounded-2xl shadow-xl border border-white/5 group flex flex-col items-center justify-center text-center relative overflow-hidden h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Facebook size={24} />
                    </div>
                    <h4 className="font-bold text-white mb-1 text-sm">Facebook</h4>
                    <p className="text-white text-[11px]">Yuvan Raja Alkesindo</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-sky-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200">
               <h3 className="text-2xl font-bold mb-8">Kirim Pesan</h3>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                     <input type="text" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" placeholder="Masukkan nama..." />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700">Nomor HP</label>
                     <input type="text" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" placeholder="0812..." />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700">Email</label>
                   <input type="email" className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors" placeholder="email@contoh.com" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700">Subjek</label>
                   <select className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors">
                     <option>Konsultasi Alat</option>
                     <option>Layanan Servis</option>
                     <option>Kemitraan</option>
                     <option>Lainnya</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700">Pesan</label>
                   <textarea className="w-full p-4 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 transition-colors h-32 resize-none" placeholder="Tuliskan pesan Anda..."></textarea>
                 </div>
                 <button className="w-full py-4 bg-primary-dark text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg active:scale-95">
                   Kirim Pesan Sekarang
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden h-96 shadow-xl border-4 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.090858178144!2d107.0390176!3d-6.2621066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e3f4347781d%3A0xe962635905581177!2sJl.%20Masjid%20Al-Mujahidin%20No.13%2C%20Setiadarma%2C%20Kec.%20Tambun%20Sel.%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017158!5e0!3m2!1sid!2sid!4v1714470000000!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export { Navbar, Footer, Home, About, Product, Activity, Contact };
