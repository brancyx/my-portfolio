"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Inspirations() {
  return (
    <section id="inspirations" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-12">
          <Quote className="w-10 h-10 text-gray-400 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-2">Be Relentlessly Resourceful</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')" }} />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative px-8 py-16 text-center max-w-2xl mx-auto">
            <p className="text-gray-200 text-lg leading-relaxed italic">
              &ldquo;When you grow up, you tend to get told that the world is the way it is and your life is just to live your life inside the world. Try not to bash into the walls too much. Try to have a nice family life, have fun, save a little money. That&rsquo;s a very limited life. Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you&rsquo;ll never be the same again.&rdquo;
            </p>
            <p className="mt-6 text-white font-semibold">— Steve Jobs</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
