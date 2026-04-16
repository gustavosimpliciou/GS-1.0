import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, MessageCircle, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ARTWORKS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  src: `${import.meta.env.BASE_URL}assets/art${i + 1}.jpg`,
  title: `Arte ${i + 1}`,
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

function ArtworkTile({ art }: { art: { src: string; title: string; id: number } }) {
  const [error, setError] = useState(false);
  const grad = gradients[(art.id - 1) % gradients.length];
  if (error) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${grad} flex flex-col items-center justify-center gap-2`}>
        <span className="text-white/20 font-medium tracking-[0.2em] uppercase text-xs">{art.title}</span>
        <div className="w-6 h-px bg-white/10"></div>
      </div>
    );
  }
  return (
    <img
      src={art.src}
      alt={art.title}
      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
          <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm tracking-wide">
            Portfólio 2024
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-foreground whitespace-nowrap">
            Gustavo Simplício
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide mb-10">
            Designer Gráfico <span className="text-primary/40 mx-2">|</span> Web Designer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Criando experiências digitais e visuais com precisão cirúrgica. 
            No cruzamento entre a arte visual e o desenvolvimento web, onde cada pixel conta uma história.
          </motion.p>
          <motion.div variants={itemVariants} className="mb-24">
            <Button size="lg" className="rounded-full px-8 py-6 text-base group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Trabalhos
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
              <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8">Sobre Mim</motion.h3>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sou designer gráfico e desenvolvedor web, especializado em criar experiências visuais que unem estética, funcionalidade e estratégia. Meu trabalho vai além do design: busco entender a essência de cada projeto para transformar ideias em soluções digitais que realmente geram impacto.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed mb-6">
                Atuo na criação de identidades visuais, artes digitais e interfaces modernas, sempre com foco em transmitir credibilidade, clareza e profissionalismo. No desenvolvimento web, construo sites responsivos, rápidos e bem estruturados, pensados para oferecer a melhor experiência ao usuário e fortalecer a presença online de marcas e negócios.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
                Acredito que um bom design não é apenas bonito — ele comunica, conecta e converte. Por isso, cada projeto que desenvolvo é pensado nos mínimos detalhes, unindo criatividade, tecnologia e estratégia para entregar resultados reais.
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
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-16 text-center">Portfólio Gráfico</motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {ARTWORKS.map((art) => (
                <motion.div 
                  key={art.id} 
                  variants={itemVariants}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-card border border-white/5 cursor-pointer"
                  onClick={() => setSelectedImage(art)}
                >
                  <ArtworkTile art={art} />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-medium tracking-wider">Ampliar</span>
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
            <motion.h3 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">Também desenvolvo sites</motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
              Da concepção visual ao código final. Interfaces fluidas, responsivas e otimizadas para converter.
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
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-10 text-center">Contato & Localização</motion.h3>
            <motion.div variants={itemVariants} className="flex flex-col space-y-6 bg-card/50 p-8 rounded-2xl border border-white/5">
              <div className="flex items-start text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-5 h-5 mr-4 mt-0.5 shrink-0 text-primary/50" />
                <span>Rua Dr. Valdevino Gregório de Andrade, 800 – Gramame, João Pessoa - PB</span>
              </div>
              <a href="mailto:gustavo.simplicioweb@gmail.com" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5 mr-4 shrink-0 text-primary/50" />
                <span>gustavo.simplicioweb@gmail.com</span>
              </a>
              <a href="https://wa.me/5583981926225" target="_blank" rel="noreferrer" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-5 h-5 mr-4 shrink-0 text-primary/50" />
                <span>+55 83 98192-6225</span>
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
          <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-8">Vamos criar algo notável?</motion.h3>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-12">
            Disponível para projetos freelance e parcerias estratégicas.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href="mailto:gustavo.simplicioweb@gmail.com">
              <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-white text-black hover:bg-white/90">
                Iniciar Conversa
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center text-muted-foreground/60 text-sm">
        <p>© {new Date().getFullYear()} Gustavo Jesus de França Simplício. Todos os direitos reservados.</p>
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
                alt={selectedImage.title} 
                className="max-w-full max-h-[85vh] object-contain rounded-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full aspect-video max-h-[80vh] bg-card border border-white/10 rounded-md flex-col items-center justify-center">
                 <span className="text-white/30 text-2xl tracking-widest uppercase">{selectedImage.title}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
