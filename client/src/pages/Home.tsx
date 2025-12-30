import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageGallery } from "@/components/ImageGallery";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Wifi, 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  Trees, 
  Waves, 
  Gamepad2, 
  Wind,
  Coffee,
  Instagram,
  Facebook
} from "lucide-react";

export default function Home() {
  const attractions = [
    { name: "Kankai Banej Temple", dist: "32 km", icon: "🛕" },
    { name: "Devaliya Safari", dist: "20 km", icon: "🦁" },
    { name: "Tulsi Shyam Temple", dist: "85 km", icon: "🕉️" },
    { name: "Sasan National Park Safari", dist: "10 km", icon: "🚙" },
    { name: "Jamjir Waterfall", dist: "37 km", icon: "🌊" },
    { name: "Diu", dist: "10 km", icon: "🏖️" },
    { name: "Somnath Temple", dist: "45 km", icon: "🔱" },
  ];

  const amenities = [
    { icon: Waves, title: "Swimming Pool", desc: "Crystal clear pool for relaxation" },
    { icon: Gamepad2, title: "Kids Playground", desc: "Safe play area for children" },
    { icon: Wind, title: "AC Rooms", desc: "Comfortable air-conditioned stay" },
    { icon: Trees, title: "Nature Walkways", desc: "Lush green paths for morning walks" },
    { icon: Car, title: "Ample Parking", desc: "Secure parking space for vehicles" },
    { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet" },
  ];

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/farm-path.jpeg" 
            alt="Beautiful farm pathway" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm md:text-base font-medium mb-6"
          >
            Welcome to Paradise
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 drop-shadow-xl"
          >
            The Gir <span className="text-accent">Forever</span> Farm
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light"
          >
            Experience nature's serenity in the heart of Gir. A perfect getaway for peace, luxury, and wildlife.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white border-none shadow-xl hover:scale-105 transition-transform">
              <a href="#contact">Book Your Stay</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-primary shadow-lg hover:scale-105 transition-transform">
              <a href="#gallery">View Gallery</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading 
                title="A Sanctuary in Nature" 
                subtitle="About Us" 
                centered={false} 
              />
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Nestled in the lush greenery of Gir, <strong className="text-primary font-semibold">The Gir Forever Farm</strong> offers an escape from the chaos of city life. We are located at Borvar (Gir), Taluka Talala, in the majestic Gir Somnath district.
                </p>
                <p>
                  Whether you are looking for a peaceful retreat, a family vacation, or a base to explore the famous Asiatic Lions, our farm provides the perfect blend of rustic charm and modern comfort.
                </p>
                <p>
                  Wake up to the sound of birds, walk through mango orchards, and experience the authentic hospitality of Kathiawar.
                </p>
                <div className="pt-4 flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-accent">100%</span>
                    <span className="text-sm font-medium uppercase tracking-wide">Pure Nature</span>
                  </div>
                  <div className="w-px bg-border h-12" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-accent">24/7</span>
                    <span className="text-sm font-medium uppercase tracking-wide">Service</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                <img 
                  src="/images/exterior.jpeg" 
                  alt="Farm House" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border/50 hidden md:block">
                <p className="font-display italic text-lg text-primary">"A home away from home, amidst the lions."</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xs">V</div>
                  <span className="text-sm font-bold text-foreground">Vimalbhai, Owner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading title="Premium Amenities" subtitle="Comfort & Joy" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-primary text-primary-foreground relative">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading title="Life at the Farm" subtitle="Gallery" light />
          <div className="mt-12">
            <ImageGallery />
          </div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section id="attractions" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Explore Nearby" subtitle="Attractions" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {attractions.map((place, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{place.icon}</span>
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {place.dist}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{place.name}</h3>
                </div>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 absolute bottom-0 left-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section id="contact" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Get in Touch" subtitle="Visit Us" />
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Address</h4>
                      <p className="text-muted-foreground">At: Borvar (Gir), Taluka: Talala,<br/>District: Gir Somnath, Gujarat</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+91 90236 18556 (Vimalbhai)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Email</h4>
                      <p className="text-muted-foreground"><a href="mailto:girfarmforever@gmail.com" className="hover:text-primary transition-colors">girfarmforever@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2 rounded-2xl shadow-lg border border-border/50 h-[300px] overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps?q=21.114465,70.5760779&z=17&hl=en&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Farm Location"
                ></iframe>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold">G</div>
                 <span className="font-display text-xl font-bold">Gir Forever Farm</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Your gateway to nature. Experience the wild beauty of Gir with the comfort of luxury hospitality.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-6 text-white">Location</h4>
              <p className="text-white/60 text-sm mb-2">Borvar (Gir), Taluka Talala</p>
              <p className="text-white/60 text-sm mb-2">Dist. Gir Somnath, Gujarat</p>
              <p className="text-primary font-bold mt-4">+91 90236 18556</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-xs">
            <p>&copy; {new Date().getFullYear()} The Gir Forever Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
