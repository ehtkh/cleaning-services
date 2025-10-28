import { motion } from "framer-motion";
import sweeperImg from "../assets/sweeper.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-linear-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-gray-900 dark:to-black relative py-24 px-6 text-center overflow-hidden"
    >
      {/* Decorative glowing shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Aaiwa
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-4xl mx-auto text-gray-300 mb-14 text-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Aaiwa provides professional cleaning and maintenance solutions with
        premium‑grade equipment and skilled experts. Our mission is to deliver
        immaculate living and working spaces that refresh comfort, clarity, and
        confidence — extending across Qatar and London.
      </motion.p>

      {/* Animated office images */}
      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg shadow-cyan-400/20"
        >
          <img
            src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80"
            alt="Qatar Office"
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end justify-start p-4">
            <p className="text-cyan-300 font-semibold">Doha, Qatar</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg shadow-blue-400/20"
        >
          <img
            src={sweeperImg}
            alt="London Office"
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end justify-start p-4">
            <p className="text-blue-300 font-semibold">London, UK</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
