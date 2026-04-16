import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, MessageCircle, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ARTWORKS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  src: `${import.meta.env.BASE_URL}assets/art${i + 1}.jpg`,
}));

const gradients = [
  "from-zinc-900 via-zinc-800 to-neutral-900",
  "from-stone-900 via-stone-800 to-zinc-900",
  "from-neutral-900 via-zinc-900 to-stone-800",
  "from-zinc-800 via-neutral-900 to-zinc-900",
  "from-stone-800 via-neutral-800 to-zinc-900",
  "from-zinc-900 via-stone-900 to-neutral-800",
  "from-neutral-800 via-zinc-900 to-stone-900",
  "from-stone-900 via-zinc-800 to-neutral-900",
];

function VideoPlayer() {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-gradient-to-tr from-zinc-900 to-neutral-900">
        <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
          <Play className="w-8 h-8 text-white/50 ml-1" />
        </div>
        <p className="text-white/20 text-sm tracking-widest uppercase">Web Design Showcase</p>
      </div>
    );
  }
  return (
    <video
      src={`${import.meta.env.BASE_URL}assets/video1.mp4`}
      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      autoPlay loop muted playsInline
      onError={() => setError(true)}
    />
  );
}

function ProfilePhoto() {
  const [error, setError] = useState(false);
  const src = `${import.meta.env.BASE_URL}assets/profile.jpg`;
  return (
    <div className="relative w-28 h-28 rounded-full ring-2 ring-white/10 ring-offset-4 ring-offset-background overflow-hidden bg-white/5 flex items-center justify-center shadow-xl">
      {!error ? (
        <img
          src={src}
          alt="Gustavo Simplício"
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <svg
          className="w-16 h-16 text-white/20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      )}
    </div>
  );
}

function ArtworkTile({ art, enlarge }: { art: { src: string; id: number }; enlarge: string }) {
  const [error, setError] = useState(false);
  const grad = gradients[(art.id - 1) % gradients.length];
  if (error) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${grad} flex flex-col items-center justify-center gap-2`}>
        <span className="text-white/20 font-medium tracking-[0.2em] uppercase text-xs">{art.id}</span>
        <div className="w-6 h-px bg-white/10"></div>
      </div>
    );
  }
  return (
    <>
      <img
        src={art.src}
        alt={`${enlarge} ${art.id}`}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; id: number } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

        <motion.div
          className="z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <ProfilePhoto />
          </motion.div>
          <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm tracking-wide">
            {t.badge}
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-foreground whitespace-nowrap">
            {t.hero.title}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide mb-10">
            {t.hero.subtitle} <span className="text-primary/40 mx-2">|</span> {t.hero.role2}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t.hero.description}
          </motion.p>
          <motion.div variants={itemVariants} className="mb-24">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-card/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div>
              <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8">{t.about.title}</motion.h3>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.about.p1}
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.about.p2}
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
                {t.about.p3}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-16 text-center">{t.portfolio.title}</motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ARTWORKS.map((art) => (
                <motion.div
                  key={art.id}
                  variants={itemVariants}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-card border border-white/5 cursor-pointer"
                  onClick={() => setSelectedImage(art)}
                >
                  <ArtworkTile art={art} enlarge={t.portfolio.enlarge} />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-medium tracking-wider">{t.portfolio.enlarge}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Design Section */}
      <section className="py-32 px-6 bg-card/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">{t.webDesign.title}</motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
              {t.webDesign.description}
            </motion.p>

            <motion.div variants={itemVariants} className="relative aspect-video rounded-2xl overflow-hidden bg-background border border-white/10 group cursor-pointer shadow-2xl">
              <VideoPlayer />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-10 text-center">{t.contact.title}</motion.h3>
            <motion.div variants={itemVariants} className="flex flex-col space-y-6 bg-card/50 p-8 rounded-2xl border border-white/5">
              <div className="flex items-start text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-5 h-5 mr-4 mt-0.5 shrink-0 text-primary/50" />
                <span>{t.contact.address}</span>
              </div>
              <a href={`mailto:${t.contact.email}`} className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 mr-4 shrink-0 text-primary/50" />
                <span>{t.contact.email}</span>
              </a>
              <a href="https://wa.me/5583981926225" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 mr-4 shrink-0 text-primary/50" />
                <span>{t.contact.phone}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-8">{t.cta.title}</motion.h3>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-12">
            {t.cta.description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href={`mailto:${t.contact.email}`}>
              <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-white text-black hover:bg-white/90">
                {t.cta.button}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-muted-foreground/60 text-sm">
        <p>© {new Date().getFullYear()} Gustavo Jesus de França Simplício. {t.footer}</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5583981926225"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-green-500 before:animate-ping"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={`${t.portfolio.artPrefix} ${selectedImage.id}`}
                className="max-w-full max-h-[85vh] object-contain rounded-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full aspect-video max-h-[80vh] bg-card border border-white/10 rounded-md flex-col items-center justify-center">
                <span className="text-white/30 text-2xl tracking-widest uppercase">{t.portfolio.artPrefix} {selectedImage.id}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
