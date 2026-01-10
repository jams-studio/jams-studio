"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-heading font-bold mb-6 text-black">
          Get In Touch
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg max-w-2xl mx-auto mb-8 text-[#334155]">
          Interested in working with us? Send us a message and we’ll get back to you promptly.
        </motion.p>
        <form className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input type="text" placeholder="Name" className="p-3 rounded-md border border-[#1F2937]" />
          <input type="email" placeholder="Email" className="p-3 rounded-md border border-[#1F2937]" />
          <textarea placeholder="Message" className="sm:col-span-2 p-3 rounded-md border border-[#1F2937]"></textarea>
          <motion.button whileHover={{ y: -2, scale: 1.05 }} className="sm:col-span-2 btn bg-gradient-to-r from-[#F59E0B] to-[#FBC94D] text-white">
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
