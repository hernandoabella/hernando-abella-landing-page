"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiTerminal, FiAward } from "react-icons/fi";
import Image from "next/image";

interface ServiceTestimonial {
  client: string;
  role: string;
  service: string;
  content: string;
  avatar: string;
  stats?: string;
}

const serviceTestimonials: ServiceTestimonial[] = [
  {
    client: "Alex Rivera",
    role: "Senior Fullstack Dev",
    service: "Architecture Review",
    content: "The deep dive into our Python backend was eye-opening. We reduced our API latency by 40% following the refactoring patterns suggested. Truly a masterclass in clean code.",
    avatar: "/client-1.jpg",
    stats: "40% Latency Reduction"
  },
  {
    client: "Sarah Jenkins",
    role: "Startup Founder",
    service: "MVP Development",
    content: "Building a scalable product from scratch is daunting. Having an expert who understands both the business logic and high-performance Python was our biggest competitive advantage.",
    avatar: "/client-2.jpg",
    stats: "Launched in 6 Weeks"
  },
  {
    client: "Marco Chen",
    role: "Engineering Manager",
    service: "Team Mentorship",
    content: "Our junior developers improved their code quality significantly in just one month. The focus on algorithms and design patterns was exactly what our team needed to level up.",
    avatar: "/client-3.jpg",
    stats: "12+ Devs Mentored"
  }
];

const ServiceTestimonials = () => {
  return (
    <section className="py-24 bg-[#030303] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Solutions that <br />
              <span className="text-green-500 italic">Scale.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Beyond books, I help companies and developers solve complex technical challenges through specialized services.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-colors group">
            Book a Service <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-green-500/40 transition-all duration-500"
            >
              {/* Service Tag */}
              <div className="flex items-center gap-2 mb-8">
                <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <FiTerminal size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{t.service}</span>
              </div>

              {/* Content */}
              <p className="text-xl font-medium leading-relaxed mb-8 text-zinc-200">
                "{t.content}"
              </p>

              {/* Impact Stat */}
              {t.stats && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10 text-green-400 text-xs font-bold mb-8">
                  <FiAward /> {t.stats}
                </div>
              )}

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
                  <Image 
                    src={t.avatar} 
                    alt={t.client} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${t.client}&background=22c55e&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.client}</h4>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="font-black text-2xl tracking-tighter italic">TECH-CORP</span>
            <span className="font-black text-2xl tracking-tighter italic">DEV_STUDIO</span>
            <span className="font-black text-2xl tracking-tighter italic">CLOUD.LABS</span>
            <span className="font-black text-2xl tracking-tighter italic">ALGO_METRICS</span>
        </div>

      </div>
    </section>
  );
};

export default ServiceTestimonials;