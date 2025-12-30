import { useState, useEffect } from 'react';
import { Link } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Attractions", href: "#attractions" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-xl font-bold shadow-lg group-hover:scale-105 transition-transform">
            G
          </div>
          <span className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-colors ${
             isScrolled || mobileMenuOpen ? "text-primary" : "text-white drop-shadow-md"
          }`}>
            Gir Forever Farm
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild
            variant={isScrolled ? "default" : "secondary"}
            className="rounded-full px-6 shadow-md hover:shadow-lg transition-all"
          >
            <a href="#contact">Book Now</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground/80 py-2 border-b border-border/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                 <a href="tel:9023618556" className="flex items-center gap-2 text-primary font-medium">
                    <Phone className="w-4 h-4" /> +91 90236 18556
                 </a>
                 <Button asChild className="w-full rounded-xl">
                   <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Book Your Stay</a>
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
