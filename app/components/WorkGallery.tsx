import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const works = [
    {
        title: "The V Plan",
        description: "High-end corporate website focused on strategy, clarity, and strong brand positioning.",
        image: "/projects/vplan.png",
        url: "https://thevplan.com/",
        tags: ["Next.js", "Branding", "Corporate"],
    },
    {
        title: "Renta Container JJ",
        description: "Industrial service website optimized for lead generation and local SEO.",
        image: "/projects/rentacontainersjj.png",
        url: "https://rentacontainerjj.com/",
        tags: ["Web Design", "SEO", "Landing Page"],
    },
    {
        title: "LA-GIR",
        description: "Professional institutional website with a clean UI and performance-focused build.",
        image: "/projects/lagir.png",
        url: "https://www.la-gir.com/",
        tags: ["Full Stack", "UI/UX", "Performance"],
    },
    {
        title: "Praxmed Publishing",
        description: "Professional Landing Page for Praxmed Publishing showcasing services and resources.",
        image: "/projects/praxmed.png",
        url: "https://www.praxmedpublishing.com/",
        tags: ["Landing PAge", "Full Stack", "Publishing"],
    },
];


export default function WorkGallery() {
    return (
        <section className="bg-[#050505] min-h-screen text-white pb-32 selection:bg-green-500/30">
            <div className="max-w-7xl mx-auto px-6 pt-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    My Work
                </motion.h2>

                <p className="text-gray-400 max-w-2xl mb-14">
                    A selection of landing pages and full websites I’ve designed and developed
                    to help businesses grow and convert more users.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {works.map((work, index) => (
                        <motion.a
                            key={index}
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl overflow-hidden border border-white/10 hover:border-green-500/40 transition"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-semibold">{work.title}</h3>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition" />
                                </div>

                                <p className="text-sm text-gray-400 mb-4">{work.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {work.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
