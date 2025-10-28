import { motion } from "framer-motion";
import homeCleaningIcon from "../assets/cleaning1.jpg";
import glassCleaningIcon from "../assets/cleaning2.jpg";
import pestControlIcon from "../assets/plastic.jpg";
import acMaintenanceIcon from "../assets/woman.jpg";

const services = [
  { name: "Home Cleaning", icon: homeCleaningIcon },
  { name: "Glass Cleaning", icon: glassCleaningIcon },
  { name: "Pest Control", icon: pestControlIcon },
  { name: "AC Maintenance", icon: acMaintenanceIcon },
  { name: "Laundry Service", icon: homeCleaningIcon },
  { name: "Kitchen Service", icon: glassCleaningIcon },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl font-bold text-center text-cyan-600 dark:text-blue-400 mb-12">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-64 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            <img
              src={s.icon}
              alt={`${s.name} icon`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
            <h3 className="absolute z-10 bottom-4 left-0 right-0 text-center text-2xl font-bold text-white drop-shadow">
              {s.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
