/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  MapPin, 
  Clock, 
  Coffee, 
  Leaf, 
  Sparkles, 
  Camera, 
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail
} from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-forest/90 backdrop-blur-md text-cream border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="text-warm-yellow w-6 h-6" />
          <span className="font-serif text-2xl tracking-wider uppercase">R's Garden</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest">
          <a href="#about" className="hover:text-warm-yellow transition-colors">About</a>
          <a href="#experience" className="hover:text-warm-yellow transition-colors">Experience</a>
          <a href="#menu" className="hover:text-warm-yellow transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-warm-yellow transition-colors">Gallery</a>
          <a href="#visit" className="hover:text-warm-yellow transition-colors border border-cream px-4 py-2 hover:bg-cream hover:text-forest transition-all">Plan Your Escape</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-forest p-6 flex flex-col gap-4 text-center border-t border-cream/10 uppercase tracking-widest text-sm"
        >
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
          <a href="#visit" onClick={() => setIsOpen(false)} className="text-warm-yellow">Plan Your Escape</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
          alt="Garden Cafe" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 garden-overlay" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-warm-yellow uppercase tracking-[0.3em] text-sm mb-6 block font-sans">Escape the city</span>
          <h1 className="text-cream text-5xl md:text-8xl font-serif mb-8 leading-tight fairytale-glow">
            Your Fairytale Garden <br /> Escape in the City
          </h1>
          <p className="text-cream/80 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            A hidden sanctuary where coffee meets nature. Discover a secret garden tucked away in the heart of Puchong.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#visit" className="bg-warm-yellow text-forest px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-cream transition-colors">
              Plan Your Visit
            </a>
            <a href="#menu" className="border border-cream text-cream px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-cream hover:text-forest transition-colors">
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50"
      >
        <div className="w-px h-12 bg-cream/30 mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const SectionHeader = ({ subtitle, title, dark = false }: { subtitle: string, title: string, dark?: boolean }) => (
  <div className="text-center mb-16">
    <span className={`uppercase tracking-[0.3em] text-xs mb-4 block ${dark ? 'text-sage' : 'text-sage'}`}>{subtitle}</span>
    <h2 className={`text-4xl md:text-6xl font-serif ${dark ? 'text-cream' : 'text-forest'}`}>{title}</h2>
  </div>
);

const Experience = () => {
  const items = [
    {
      title: "Garden Dining",
      description: "Dine surrounded by lush greenery and the soothing sounds of nature.",
      image: "https://images.unsplash.com/photo-1466632311177-a355448f6ee2?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      title: "Animal Interaction",
      description: "A family-friendly experience with interactive animal feeding activities.",
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Photo Spots",
      description: "Highly Instagrammable corners designed for your perfect memories.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="Immersive Environment" title="The Experience" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-cream">
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="text-2xl font-serif">{item.title}</h3>
                </div>
              </div>
              <p className="text-coffee/70 font-sans leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignatureMenu = () => {
  return (
    <section id="menu" className="py-24 bg-forest text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sage uppercase tracking-[0.3em] text-xs mb-4 block">Signature Craft</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              The Art of <br /> Coffee & Taste
            </h2>
            <p className="text-cream/70 text-lg mb-12 font-sans leading-relaxed">
              Our signature Spanish Latte is more than just a drink—it's an experience. 
              Crafted with premium beans and a touch of fairytale magic, it's the perfect 
              companion for your garden escape.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-sage flex items-center justify-center shrink-0">
                  <Coffee className="text-sage w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Spanish Latte</h4>
                  <p className="text-cream/50 text-sm">Our customer favorite, balanced with creamy sweetness and bold espresso.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-sage flex items-center justify-center shrink-0">
                  <Sparkles className="text-sage w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Garden Brunch</h4>
                  <p className="text-cream/50 text-sm">Fresh, locally sourced ingredients served in a fairytale setting.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 border border-cream px-10 py-4 uppercase tracking-widest text-sm hover:bg-cream hover:text-forest transition-all">
              View Full Menu
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-cream/5">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000" 
                alt="Spanish Latte" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sage/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-warm-yellow/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisitUs = () => {
  return (
    <section id="visit" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeader subtitle="Find Us" title="Plan Your Escape" />
            <div className="space-y-12">
              <div className="flex gap-6">
                <MapPin className="text-sage w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-xl font-serif mb-2 uppercase tracking-widest">Location</h4>
                  <p className="text-coffee/70 font-sans">
                    Puchong, Selangor, Malaysia <br />
                    <span className="text-xs italic">(A hidden spot waiting to be discovered)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="text-sage w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-xl font-serif mb-2 uppercase tracking-widest">Operating Hours</h4>
                  <div className="text-coffee/70 font-sans space-y-1">
                    <p>Mon – Sun: 11:00 AM – 12:00 AM</p>
                    <p className="text-forest font-bold">Closed: Wednesday</p>
                    <p className="text-sm italic">Friday break: 1:20 PM – 2:20 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <Phone className="text-sage w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-xl font-serif mb-2 uppercase tracking-widest">Contact</h4>
                  <p className="text-coffee/70 font-sans">+60 12-345 6789</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-forest/5 p-8 md:p-12 border border-forest/10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-6">Reserve a Table</h3>
              <p className="text-coffee/60 mb-8 font-sans">
                Planning a special date or a family gathering? Let us prepare a magical corner for you.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-forest/10 px-4 py-3 focus:outline-none focus:border-sage" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-forest/10 px-4 py-3 focus:outline-none focus:border-sage" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="w-full bg-white border border-forest/10 px-4 py-3 focus:outline-none focus:border-sage" />
                  <input type="time" className="w-full bg-white border border-forest/10 px-4 py-3 focus:outline-none focus:border-sage" />
                </div>
                <button className="w-full bg-forest text-cream py-4 uppercase tracking-widest text-sm font-bold hover:bg-sage transition-colors">
                  Request Reservation
                </button>
              </form>
            </div>
            <Sparkles className="absolute -bottom-10 -right-10 w-48 h-48 text-forest/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-forest text-cream py-16 px-6 border-t border-cream/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-warm-yellow w-6 h-6" />
              <span className="font-serif text-3xl tracking-wider uppercase">R's Garden</span>
            </div>
            <p className="text-cream/60 max-w-sm font-sans leading-relaxed">
              A fairytale-themed garden cafe offering a unique escape from the city. 
              Where taste meets memories in a hidden sanctuary.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-cream/60 font-sans text-sm uppercase tracking-widest">
              <li><a href="#about" className="hover:text-warm-yellow transition-colors">About Us</a></li>
              <li><a href="#experience" className="hover:text-warm-yellow transition-colors">Experience</a></li>
              <li><a href="#menu" className="hover:text-warm-yellow transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-warm-yellow transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 uppercase tracking-widest">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-forest transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-forest transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-forest transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/40">
          <p>© 2026 R's Garden Cafe. All rights reserved.</p>
          <p>Designed for Fairytale Moments</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-sage selection:text-cream">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-cream relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <SectionHeader subtitle="Our Story" title="A Secret Escape" />
            <p className="text-xl md:text-2xl font-serif italic text-forest/80 mb-8 leading-relaxed">
              "A space that brings together taste and memories."
            </p>
            <p className="text-coffee/70 font-sans leading-relaxed text-lg">
              R’s Garden Cafe is more than just a place to eat. It is an immersive fairytale environment 
              surrounded by lush greenery and vintage decor. Located in Puchong, we offer a hidden 
              sanctuary for those looking to escape the city chaos and rediscover the magic in every sip.
            </p>
          </div>
          <Leaf className="absolute -top-20 -left-20 w-64 h-64 text-forest/5 rotate-45" />
          <Leaf className="absolute -bottom-20 -right-20 w-64 h-64 text-forest/5 -rotate-12" />
        </section>

        <Experience />
        <SignatureMenu />
        
        {/* Gallery Preview */}
        <section id="gallery" className="py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader subtitle="Visual Journey" title="Captured Moments" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square overflow-hidden bg-forest/10"
                >
                  <img 
                    src={`https://picsum.photos/seed/garden-cafe-${i}/600/600`} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="bg-forest text-cream px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-sage transition-colors">
                Follow our Instagram
              </button>
            </div>
          </div>
        </section>

        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
