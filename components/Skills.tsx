"use client";
import { motion } from "framer-motion";
import { Cpu, BadgeCheck } from "lucide-react";
import type { Skill } from "@/types";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16">
          <Cpu className="w-10 h-10 text-gray-400 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">Skills &amp; Technologies</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">Skillsets and technologies I have picked up through projects and internships, and continue to improve.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div key={skill._id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="bg-gray-800 rounded-xl p-5 flex items-start gap-4 border border-gray-700 hover:border-green-500/50 transition-colors">
              <BadgeCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium text-sm">{skill.category}</p>
                <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{skill.technologies}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
