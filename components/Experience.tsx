"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";
import type { Experience } from "@/types";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16">
          <Users className="w-10 h-10 text-gray-400 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">Work Experience</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div key={exp._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-700/80 rounded-xl p-6 border border-gray-600 hover:border-gray-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src={exp.logo} alt={exp.company} fill className="object-contain rounded-full" unoptimized />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium">{exp.position}</h3>
                  <p className="text-green-500 text-sm uppercase italic tracking-wide">{exp.company}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">{exp.brief}</p>
              {exp.details && exp.details.length > 1 && (
                <ul className="mt-3 space-y-1.5">
                  {exp.details.map((d, j) => <li key={j} className="text-gray-400 text-sm flex gap-2"><span className="text-green-500 mt-0.5">•</span><span>{d}</span></li>)}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
