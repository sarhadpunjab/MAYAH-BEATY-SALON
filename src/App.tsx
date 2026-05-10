import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Clock, ArrowRight, Scissors, Star } from 'lucide-react';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 15 } },
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white pb-12 sm:pb-0">
      {/* Navigation */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-light/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-end">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-wide text-brand-dark hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="ml-4 px-6 py-2.5 bg-brand-dark text-brand-light text-sm font-medium hover:bg-brand-accent transition-colors duration-300"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-brand-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-light pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-brand-dark"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 mx-auto w-full max-w-xs px-6 py-3 bg-brand-dark text-brand-light text-base font-medium hover:bg-brand-accent transition-colors duration-300"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
              alt="Salon Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-light/40 backdrop-blur-[2px]"></div>
          </div>
          
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 }
              }
            }}
            className="relative z-10 text-center max-w-3xl px-6"
          >
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-brand-dark mb-4">
              Premium Beauty & Hair Care
            </motion.p>
            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="font-serif text-6xl md:text-8xl lg:text-9xl font-light italic tracking-tight text-brand-dark mb-6">
              Mayah Mughal
            </motion.h1>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-brand-light hover:bg-brand-accent transition-colors duration-300 font-medium"
              >
                Explore Services <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
                Elevating Beauty,<br />Empowering You.
              </motion.h2>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-brand-dark/70 text-lg leading-relaxed mb-8">
                At Mayah Mughal Salon, we believe that true beauty comes from confidence. Our expert team is dedicated to providing personalized experiences that highlight your unique features. Using only premium products and the latest techniques, we transform your vision into reality.
              </motion.p>
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-serif text-3xl text-brand-accent mb-2">10+</h3>
                  <p className="text-sm text-brand-dark/60 uppercase tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-brand-accent mb-2">5k+</h3>
                  <p className="text-sm text-brand-dark/60 uppercase tracking-wider">Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-brand-dark/5">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" 
                  alt="Stylist at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-accent p-6 flex flex-col justify-center items-center text-center hidden md:flex">
                <Star className="text-brand-light mb-2" size={32} />
                <p className="font-serif text-brand-light text-xl">Award Winning Salon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 px-6 lg:px-8 bg-brand-dark/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={24} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <span className="font-serif text-2xl font-medium text-brand-dark">4.9</span>
              </div>
              <h2 className="font-serif text-4xl text-brand-dark mb-4">Client Love</h2>
              <p className="text-brand-dark/60 max-w-2xl mx-auto">Based on 994 authentic Google reviews from our beautiful clients.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "muxtech", time: "7 months ago", text: "Services inki bht axhi th meny rebon skin facial Lia insy aj .. ink worker friendly and joly h or after facial mere face py result bht awesome Aya 💖" },
                { name: "Sajida Baig", time: "7 months ago", text: "I took hair services from Maya saloon, results are amazing, I am fully satisfied with the results. Owner is very welcoming, will visit again." },
                { name: "Aimen", time: "2 months ago", text: "I came here from Shah faisal colony for facial amezjng result highly recomanded" },
                { name: "Sara Zaidi", time: "2 months ago", text: "I came here from quetta for rebonding highly recommended" },
                { name: "Humaa", time: "3 months ago", text: "Highly recomanded salon I came here for bridal services Osam" },
                { name: "Sumaira Naeem", time: "2 years ago", text: "I am a very old client of Mayah mem I take my skin and hairs services from there it's really awesome and affordable" },
              ].map((review, idx) => (
                <div key={idx} className="bg-brand-light p-8 shadow-sm border border-brand-dark/5 hover:border-brand-accent/30 transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-brand-accent fill-brand-accent" />
                    ))}
                  </div>
                  <p className="text-brand-dark/80 text-sm leading-relaxed mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center font-serif text-brand-dark">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-dark text-sm">{review.name}</h4>
                      <p className="text-xs text-brand-dark/50">{review.time} on Google</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-brand-dark py-24 md:py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-brand-light mb-4">Our Services</h2>
              <p className="text-brand-light/60 max-w-2xl mx-auto">Discover our range of bespoke treatments designed to rejuvenate and enhance your natural beauty.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Hair Cut & Styling', price: 'From Rs. 1,500', desc: 'Personalized cuts and styling tailored to your face shape and lifestyle.', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80' },
                { name: 'Color & Highlights', price: 'From Rs. 8,000', desc: 'Expert color plotting, balayage, and highlighting techniques.', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80' },
                { name: 'Bridal Packages', price: 'Custom', desc: 'Complete bridal hair and makeup services for your special day.', image: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800&q=80' },
                { name: 'Hair Treatments', price: 'From Rs. 3,000', desc: 'Nourishing and restorative treatments for healthy, vibrant hair.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80' },
                { name: 'Extensions', price: 'Consultation', desc: 'Premium quality hair extensions for volume and length.', image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80' },
                { name: 'Makeup Application', price: 'From Rs. 4,000', desc: 'Professional makeup for events, photoshoots, or everyday glam.', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80' },
              ].map((service, idx) => (
                <div key={idx} className="group overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="font-serif text-2xl text-brand-light">{service.name}</h3>
                      <span className="text-brand-accent font-medium">{service.price}</span>
                    </div>
                    <p className="text-brand-light/60">{service.desc}</p>
                    <button className="mt-6 flex items-center gap-2 text-brand-light text-sm tracking-widest uppercase hover:text-brand-accent transition-colors">
                      Book Now <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery / Instagram Section */}
        <section id="gallery" className="py-24 px-2">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-4xl text-brand-dark mb-2">Follow The Journey</h2>
            <p className="text-brand-dark/60 mb-12 flex items-center gap-2"><Instagram size={18} /> @mayahmughalsalon</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
              {[
                "https://images.pexels.com/photos/32010608/pexels-photo-32010608.jpeg?auto=compress&cs=tinysrgb&w=800",
                "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80"
              ].map((img, idx) => (
                <div key={idx} className="aspect-square bg-gray-100 overflow-hidden relative group">
                  <img src={img} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram className="text-brand-light" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#111] text-brand-light py-20 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">Mayah Mughal</h3>
            <p className="text-white/50 mb-6 max-w-sm">
              An exclusive sanctuary for hair and beauty, dedicated to delivering an unparalleled luxury experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex gap-3"><MapPin size={20} className="shrink-0 text-brand-accent mt-0.5" /> <span>Shop LG-134 Lower Ground Floor, RJ Mall Karachi<br/>Johar Mor Bridge, Gulistan-e-Johar<br/>Karachi, 75290</span></li>
              <li className="flex gap-3"><Phone size={20} className="shrink-0 text-brand-accent" /> 0300 2173363</li>
              <li className="flex gap-3"><MapPin size={20} className="shrink-0 text-brand-accent opacity-0" /> info@mayahmughalsalon.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest uppercase font-medium mb-6">Hours</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Monday</span> <span>12:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Tuesday</span> <span>12:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Wednesday</span> <span>12:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Thursday</span> <span>12:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Friday</span> <span>3:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span>12:00 PM - 10:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>3:00 PM - 10:00 PM</span></li>
            </ul>
          </div>

          <div className="h-full min-h-[300px] w-full rounded-md overflow-hidden bg-white/5 relative group cursor-pointer">
            <a 
              href="https://www.google.com/maps/place/Mayah+Mughal+Salon/@24.9025967,67.1146403,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb339934489dcdd:0xf4bf1dea2f639ec1!8m2!3d24.9025967!4d67.1146403!16s%2Fg%2F11q7dpftpj?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open Google Maps to Mayah Mughal Salon"
            >
              <div className="absolute inset-0 bg-[#111]/0 group-hover:bg-[#111]/40 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-light text-brand-dark px-6 py-3 rounded-full font-medium tracking-wide shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <MapPin size={18} className="text-brand-accent"/> Get Directions
                </span>
              </div>
            </a>
            <iframe
              src="https://maps.google.com/maps?q=Mayah+Mughal+Salon,+RJ+Mall,+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Mayah Mughal Salon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
