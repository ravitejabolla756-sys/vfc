import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Star, Utensils, Coffee, Leaf, Info, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import heroImage from "@/assets/hero-food.png";
import tiffinsImage from "@/assets/menu-tiffins.png";
import mealsImage from "@/assets/menu-meals.png";
import chineseImage from "@/assets/menu-chinese.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const menuItems = {
  tiffins: [
    { name: "Idly", type: "veg" },
    { name: "Puri", type: "veg" },
    { name: "Onion Bonda", type: "veg" },
    { name: "Mysore Bonda", type: "veg" },
    { name: "Vada / Garelu", type: "veg" },
    { name: "Plain Dosa", type: "veg" },
    { name: "Egg Dosa", type: "egg" },
    { name: "Upma Dosa", type: "veg" },
    { name: "Onion Dosa", type: "veg" },
    { name: "Pesara Dosa", type: "veg" },
    { name: "Pesara Upma Dosa", type: "veg" },
    { name: "Pesara Onion Dosa", type: "veg" },
    { name: "Pesara Egg Dosa", type: "egg" },
    { name: "Uttapam", type: "veg" },
  ],
  meals: [
    { name: "Kichidi", type: "veg" },
    { name: "Biryani", type: "chicken" },
    { name: "Chicken Curry", type: "chicken" },
    { name: "Chicken Fry", type: "chicken" },
    { name: "Boiled Eggs", type: "egg" },
  ],
  chinese: [
    { name: "Plain Noodles", type: "veg" },
    { name: "Egg Noodles", type: "egg" },
    { name: "Chicken Noodles", type: "chicken" },
    { name: "Gobi Noodles", type: "veg" },
    { name: "Egg Gobi Noodles", type: "egg" },
    { name: "Plain Rice", type: "veg" },
    { name: "Egg Rice", type: "egg" },
    { name: "Chicken Rice", type: "chicken" },
    { name: "Gobi Rice", type: "veg" },
    { name: "Egg Gobi Rice", type: "egg" },
    { name: "Gobi Manchurian", type: "veg" },
    { name: "Egg Gobi Manchurian", type: "egg" },
    { name: "Chilli Chicken", type: "chicken" },
  ]
};

const TypeBadge = ({ type }: { type: string }) => {
  if (type === "veg") return <Badge variant="outline" className="border-green-600 text-green-700 bg-green-50"><div className="w-2 h-2 rounded-full bg-green-600 mr-2" /> Veg</Badge>;
  if (type === "egg") return <Badge variant="outline" className="border-yellow-600 text-yellow-700 bg-yellow-50"><div className="w-2 h-2 rounded-full bg-yellow-600 mr-2" /> Egg</Badge>;
  return <Badge variant="outline" className="border-red-600 text-red-700 bg-red-50"><div className="w-2 h-2 rounded-full bg-red-600 mr-2" /> Chicken</Badge>;
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("tiffins");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleTimingClick = (tabId: string) => {
    setActiveTab(tabId);
    scrollToSection("menu");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-xl">
              VFC
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg md:text-xl leading-none text-primary">VFC</h1>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">Vanamali Food Court</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("menu")} className="text-sm font-medium hover:text-primary transition-colors">Menu</button>
            <button onClick={() => scrollToSection("location")} className="text-sm font-medium hover:text-primary transition-colors">Location</button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6" onClick={() => window.open("tel:+918247697490")}>
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-left py-2 font-medium border-b border-border/50">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-left py-2 font-medium border-b border-border/50">About</button>
              <button onClick={() => scrollToSection("menu")} className="text-left py-2 font-medium border-b border-border/50">Menu</button>
              <button onClick={() => scrollToSection("location")} className="text-left py-2 font-medium border-b border-border/50">Location</button>
              <Button className="w-full bg-primary" onClick={() => window.open("tel:+918247697490")}>Call Now</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6 text-center md:text-left"
          >
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-orange-200 px-4 py-1 text-sm rounded-full">
              Authentic Andhra Flavors
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-black leading-tight text-foreground tracking-tighter">
              Vanamali <br/>
              <span className="text-primary italic">Food Court</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
              Experience the homely taste of Vanamali Food Court. Fresh, hot, and delicious meals served with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-lg px-8 h-12" onClick={() => window.open("tel:+918247697490")}>
                <Phone className="w-5 h-5 mr-2" /> Order Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-orange-50 rounded-full text-lg px-8 h-12" onClick={() => window.open("https://www.google.com/maps/place/Vanamali+tea+and+tiffins/@15.4962642,80.0675981,17z", "_blank")}>
                <MapPin className="w-5 h-5 mr-2" /> View Location
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90 translate-y-4" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 transform rotate-2">
              <img 
                src={heroImage} 
                alt="South Indian Tiffins Spread" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating Cards */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-700">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Pure</p>
                <p className="font-serif font-bold text-lg">Fresh Ingredients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Timings */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <Info className="w-4 h-4" /> About Us
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">A Local Favorite for Every Meal</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Vanamali Tea and Tiffins is your go-to casual dining spot in Ongole. Whether you're dining solo, with a group, or grabbing a quick bite, we serve authentic South Indian flavors that feel like home.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Good for Kids</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Drive-through</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Wheelchair Accessible</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">NFC Payments</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="bg-orange-50 border-orange-100 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-2xl font-bold">Opening Hours</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div 
                      className="flex justify-between items-start pb-4 border-b border-orange-200/50 cursor-pointer hover:bg-white/50 transition-colors p-2 rounded-lg group"
                      onClick={() => handleTimingClick("tiffins")}
                    >
                      <div>
                        <p className="font-bold text-lg text-orange-900 group-hover:text-primary transition-colors">Morning Tiffins</p>
                        <p className="text-orange-700 text-sm">Idly, Dosa, Vada & more</p>
                      </div>
                      <Badge variant="secondary" className="bg-white text-orange-800 font-bold text-md px-3 py-1">6 AM - 11 AM</Badge>
                    </div>

                    <div 
                      className="flex justify-between items-start pb-4 border-b border-orange-200/50 cursor-pointer hover:bg-white/50 transition-colors p-2 rounded-lg group"
                      onClick={() => handleTimingClick("meals")}
                    >
                      <div>
                        <p className="font-bold text-lg text-orange-900 group-hover:text-primary transition-colors">Meals & Curries</p>
                        <p className="text-orange-700 text-sm">Biryani, Rice, Chicken</p>
                      </div>
                      <Badge variant="secondary" className="bg-white text-orange-800 font-bold text-md px-3 py-1">8 AM - 5 PM</Badge>
                    </div>

                    <div 
                      className="flex justify-between items-start cursor-pointer hover:bg-white/50 transition-colors p-2 rounded-lg group"
                      onClick={() => handleTimingClick("chinese")}
                    >
                      <div>
                        <p className="font-bold text-lg text-orange-900 group-hover:text-primary transition-colors">Noodles & Rice</p>
                        <p className="text-orange-700 text-sm">Fried Rice, Manchurian</p>
                      </div>
                      <Badge variant="secondary" className="bg-white text-orange-800 font-bold text-md px-3 py-1">12 PM - 11 PM</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-background relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100 border-orange-200">Our Menu</Badge>
            <h2 className="font-serif text-4xl font-bold mb-4">Delicious Offerings</h2>
            <p className="text-muted-foreground">From crispy dosas to spicy curries, we have something for every craving.</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 h-12 bg-orange-100/50 p-1">
              <TabsTrigger value="tiffins" className="text-md data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Morning Tiffins</TabsTrigger>
              <TabsTrigger value="meals" className="text-md data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Meals & Curries</TabsTrigger>
              <TabsTrigger value="chinese" className="text-md data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Chinese & Rice</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tiffins" className="mt-0">
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg h-48 md:h-64 relative">
                <img src={tiffinsImage} alt="Morning Tiffins" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white font-serif text-2xl font-bold">VFC - Morning Favorites</h3>
                </div>
              </div>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 grid gap-4 sm:grid-cols-2">
                  {menuItems.tiffins.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex justify-between items-center p-4 rounded-lg bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <TypeBadge type={item.type} />
                        <span className="font-medium text-lg group-hover:text-primary transition-colors">{item.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="meals" className="mt-0">
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg h-48 md:h-64 relative">
                <img src={mealsImage} alt="Meals and Curries" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white font-serif text-2xl font-bold">Hearty Meals</h3>
                </div>
              </div>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 grid gap-4 sm:grid-cols-2">
                  {menuItems.meals.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex justify-between items-center p-4 rounded-lg bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <TypeBadge type={item.type} />
                        <span className="font-medium text-lg group-hover:text-primary transition-colors">{item.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chinese" className="mt-0">
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg h-48 md:h-64 relative">
                <img src={chineseImage} alt="Chinese and Fried Rice" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white font-serif text-2xl font-bold">Wok Specials</h3>
                </div>
              </div>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 grid gap-4 sm:grid-cols-2">
                  {menuItems.chinese.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex justify-between items-center p-4 rounded-lg bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <TypeBadge type={item.type} />
                        <span className="font-medium text-lg group-hover:text-primary transition-colors">{item.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Why Dine With Us?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Family Friendly</h3>
              <p className="text-white/80 text-sm">Great atmosphere for groups and kids</p>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Quick Bites</h3>
              <p className="text-white/80 text-sm">Coffee, snacks & small plates</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Top Rated</h3>
              <p className="text-white/80 text-sm">Loved by locals in Ongole</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">Easy Ordering</h3>
              <p className="text-white/80 text-sm">Dine-in, Takeaway & Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Footer */}
      <section id="location" className="py-0 relative">
        <div className="grid md:grid-cols-2 bg-zinc-900 text-white">
          <div className="p-8 md:p-16 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Vanamali Food Court (VFC)</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">VFC - Ongole</h3>
                    <p className="text-zinc-400">Ongole, Andhra Pradesh, India</p>
                    <a 
                      href="https://www.google.com/maps/place/Vanamali+tea+and+tiffins/@15.4962642,80.0675981,17z" 
                      target="_blank" 
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-zinc-400">+91 82476 97490</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Open Daily</h3>
                    <p className="text-zinc-400">6:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-zinc-800" />
            
            <div className="pt-4">
              <p className="text-zinc-500 text-sm">© 2026 Vanamali Food Court (VFC). All rights reserved.</p>
              <div className="flex gap-4 mt-2 text-sm text-zinc-400">
                <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection("menu")} className="hover:text-primary transition-colors">Menu</button>
                <button onClick={() => scrollToSection("location")} className="hover:text-primary transition-colors">Location</button>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] md:h-auto w-full bg-zinc-800 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.299444458319!2d80.06540941485526!3d15.496264189235954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01e2c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sVanamali+tea+and+tiffins!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
          </div>
        </div>
      </section>
    </div>
  );
}
