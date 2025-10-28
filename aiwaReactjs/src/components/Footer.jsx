import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-gray-900 dark:to-black py-14 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-extrabold mb-5 drop-shadow-md">
            Aaiwa Cleaning
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed drop-shadow-sm">
            Premium cleaning services with a commitment to quality, trust, and
            care. Serving Qatar and London with pride.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h4 className="text-lg font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-gray-300">
            {["Home", "Services", "About", "Contact"].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="hover:text-roseGold transition-transform duration-300 ease-in-out inline-block transform hover:scale-105"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-5">Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              className="px-5 py-3 rounded-md text-gray-900 bg-slate-700 grow placeholder-gray-400 focus:ring-2 focus:ring-roseGold transition"
              required
            />
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(0,255,255,0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg 
                     shadow-lg transition duration-300"
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        {/* Social Media */}
        <div className="mx-30 w-full">
          <h4 className="text-lg font-bold mb-5 mx-5">Follow Us</h4>
          <div className="flex space-x-6 text-gray-300">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-roseGold transition-transform transform hover:scale-110"
              tabIndex={0}
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-roseGold transition-transform transform hover:scale-110"
              tabIndex={0}
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-roseGold transition-transform transform hover:scale-110"
              tabIndex={0}
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-roseGold transition-transform transform hover:scale-110"
              tabIndex={0}
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-roseGold/40 pt-6 text-center text-sm text-gray-400 select-none">
        © 2025 Aaiwa LLC. All rights reserved.
      </div>
    </footer>
  );
}
