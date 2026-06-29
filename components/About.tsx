"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Bio } from "@/types";

function Typewriter({ strings }: { strings: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 1100);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % strings.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, index, strings]);

  return <span className="text-green-400">{displayed}<span className="animate-pulse">|</span></span>;
}

export default function About({ bio }: { bio: Bio | null }) {
  const taglines = bio?.taglines ?? ["software engineer.", "business analyst.", "solutions architect."];
  return (
    <section id="about" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16 gap-12">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white mb-4">
            Hi, I&apos;m <strong>{bio?.name ?? "Brandon."}</strong>
          </h1>
          <p className="text-2xl sm:text-3xl font-medium text-white mb-6">
            I&apos;m an aspiring&nbsp;<Typewriter strings={taglines} />
          </p>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
            {bio?.about ?? <>Currently a penultimate-year undergraduate at <a href="https://www.ntu.edu.sg/" className="italic text-blue-400 hover:text-blue-300 transition-colors">NTU</a>, on track to graduate with a double degree in Computer Science and Business.</>}
          </p>
          <div className="flex gap-4">
            <a href={bio?.resumeUrl ?? "https://drive.google.com/drive/folders/1fWxvmtyWV690DL1TWufghBKdBJFjA-Zr?usp=sharing"} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors text-lg">View Resume</a>
            <Link href="/#projects" className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded transition-colors text-lg">See My Work</Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="flex-shrink-0 w-64 md:w-80">
          <Image src={bio?.photo ?? "/me3.png"} alt="Brandon Chen" width={400} height={400} className="rounded-2xl object-cover w-full" priority unoptimized />
        </motion.div>
      </div>
    </section>
  );
}
