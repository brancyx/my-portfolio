"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const svcId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const tplId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const pubKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
    try {
      if (svcId) {
        await emailjs.send(svcId, tplId, form, pubKey);
      } else {
        await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ "form-name": "contact", ...form }).toString() });
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl overflow-hidden border border-gray-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Contact" className="w-full h-48 object-cover" />
              <div className="bg-green-600 p-6">
                <h3 className="text-white text-xl font-bold mb-3">More about me</h3>
                <p className="text-green-50 text-sm leading-relaxed">In an ideal day, I would like to work on building applications that are usable and scalable. When I&rsquo;m not programming, I would be cycling, catching up on financial news or spending time with my loved ones. I represent NTU&rsquo;s Hall 13 in Chess and Soccer — drop me a message if you fancy a game!</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-medium text-white mb-2">Connect With Me!</h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">I&rsquo;m actively looking for hackathon teammates! Open to new working styles. Drop me an email or join <a href="https://t.me/SandboxSG" className="text-blue-400 hover:text-blue-300 transition-colors">SandBox SG</a> for openings!</p>
            <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="form-name" value="contact" />
              {[{id:"name",label:"Name",type:"text",ph:"Your name"},{id:"email",label:"Email",type:"email",ph:"Your email"}].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-sm text-gray-400 mb-1 block">{f.label}</label>
                  <input type={f.type} id={f.id} name={f.id} required placeholder={f.ph} value={form[f.id as keyof typeof form]} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 rounded text-gray-100 py-2 px-3 outline-none transition-colors" />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-sm text-gray-400 mb-1 block">Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="Your message" value={form.message} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 rounded text-gray-100 py-2 px-3 outline-none transition-colors resize-none" />
              </div>
              <button type="submit" disabled={status === "sending"} className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white py-2 px-6 rounded transition-colors">
                {status === "sending" ? "Sending…" : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
              {status === "success" && <p className="flex items-center gap-2 text-green-400 text-sm"><CheckCircle className="w-4 h-4" /> Message sent!</p>}
              {status === "error" && <p className="flex items-center gap-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
