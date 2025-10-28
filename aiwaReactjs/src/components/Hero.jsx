import { motion } from "framer-motion";
import heroVideo from "../assets/heroVideo.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center h-[485px] 
                 overflow-hidden text-center text-white 
                 bg-linear-to-br from-gray-900 via-blue-900 to-black"
    >
      {/* Background video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500 mb-6">
          From Phone to Front Door
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          Bringing spotless services — quick, reliable, and premium. Your
          comfort begins here.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(0,255,255,0.6)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full 
                     shadow-lg transition duration-300"
        >
          <a href="#contact">Book Now</a>
        </motion.button>
      </motion.div>

      {/* Floating linear orb decorations */}
      <motion.div
        className="absolute -top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scroll indicator animation */}
      <motion.div
        className="absolute bottom-6 text-gray-400 text-sm tracking-wider"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
}
