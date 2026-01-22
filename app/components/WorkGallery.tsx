import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const works = [
    {
        title: "The V Plan",
        description: "High-end corporate website focused on strategy, clarity, and strong brand positioning.",
        image: "/projects/vplan.png",
        url: "https://thevplan.com/",
        tags: ["Next.js", "Branding", "Corporate"],
        color: "from-blue-500/20",
    },
    {
        title: "Renta Container JJ",
        description: "Industrial service website optimized for lead generation and local SEO.",
        image: "/projects/rentacontainersjj.png",
        url: "https://rentacontainerjj.com/",
        tags: ["Web Design", "SEO", "Landing Page"],
        color: "from-orange-500/20",
    },
    {
        title: "LA-GIR",
        description: "Professional institutional website with a clean UI and performance-focused build.",
        image: "/projects/lagir.png",
        url: "https://www.la-gir.com/",
        tags: ["Full Stack", "UI/UX", "Performance"],
        color: "from-purple-500/20",
    },
    {
        title: "Praxmed Publishing",
        description: "Professional Landing Page for Praxmed Publishing showcasing services and resources.",
        image: "/projects/praxmed.png",
        url: "https://www.praxmedpublishing.com/",
        tags: ["Landing Page", "Full Stack", "Publishing"],
        color: "from-green-500/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
};

export default function WorkGallery() {
    return (
        <section id="my-work" className="bg-[#050505] min-h-screen text-white py-32 selection:bg-green-500/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Background Decorative Glow */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
                
                <header className="relative z-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-green-500 font-mono text-sm mb-4"
                    >
                        <span className="w-8 h-[1px] bg-green-500"></span>
                        SELECTED PROJECTS
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Work</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-xl text-lg leading-relaxed"
                    >
                        A curated selection of digital experiences where strategy meets 
                        high-performance development.
                    </motion.p>
                </header>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-2" // Changed to 2 columns for a more "premium" look
                >
                    {works.map((work, index) => (
                        <motion.a
                            key={index}
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative block rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors duration-500"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {/* Overlay on Image */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                
                                <div className="absolute top-4 right-4 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            <div className="relative p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {work.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/20 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                                    {work.title}
                                </h3>

                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                    {work.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}