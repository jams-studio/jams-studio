"use client";
import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptopCode, FaUsers } from "react-icons/fa";

export default function Features() {
  const features = [
    { title: "Cross-Platform Apps", description: "Seamless apps for iOS and Android.", icon: <FaMobileAlt className="h-12 w-12 text-[var(--color-yellow)]" /> },
    { title: "Websites for Businesses", description: "Professional, responsive websites.", icon: <FaLaptopCode className="h-12 w-12 text-[var(--color-yellow)]" /> },
    { title: "Custom Solutions", description: "Tailored digital solutions for your needs.", icon: <FaUsers className="h-12 w-12 text-[var(--color-yellow)]" /> },
  ];

  return (
    <section id="features" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-black text-center">Our Services</h2>
        <p className="mt-4 text-lg text-[#334155] text-center max-w-2xl mx-auto">
          We deliver high-quality digital products to help your business or club succeed.
        </p>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="card bg-white">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-black">{feature.title}</h3>
              <p className="text-[#334155]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
