import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [showThankYou, setShowThankYou] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99dv1tj", // EmailJS Service ID
        "template_oaqdjgw", // EmailJS Template ID
        form.current,
        { publicKey: "fo2Dk8mWkSrzxsw4i" }
      )
      .then(() => {
        setShowThankYou(true);
        setStatus("");
        e.target.reset();
      })
      .catch(() => setStatus("Failed to send message."));
  };

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 overflow-hidden"
    >
      <AnimatePresence>
        {!showThankYou && (
          <motion.div
            className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
          >
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="rounded-2xl overflow-hidden shadow-xl h-[485px]"
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.034922693942!2d51.53031157537092!3d25.28198853046906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c52a7b21d85d%3A0xbeab4c4c7b4ad721!2sBin%20Dirham%20Plaza!5e0!3m2!1sen!2sqa!4v1696789400351!5m2!1sen!2sqa"
                className="w-full h-[400px] md:h-full border-none"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col bg-linear-to-br from-gray-800 to-gray-900 rounded-2xl p-8 space-y-6 shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Contact Us
              </h2>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none text-white"
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none text-white"
              />
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Type your message..."
                className="p-3 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none resize-none text-white"
              ></textarea>

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
                Send Message
              </motion.button>

              {status && (
                <p className="text-center text-red-400 font-medium">{status}</p>
              )}
            </motion.form>
          </motion.div>
        )}

        {/* Thank You Screen */}
        {showThankYou && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-center items-center 
                       bg-linear-to-br from-blue-800 via-cyan-600 to-green-500 text-white rounded-2xl shadow-2xl"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
              className="w-24 h-24 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, duration: 0.8 }}
            >
              <circle
                fill="none"
                stroke="white"
                strokeWidth="6"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <motion.path
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M100.2 40.2l-46.9 46.9-21-21"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.svg>
            <h2 className="text-3xl font-bold mb-2">
              Message Sent Successfully!
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Returning to form in 5 seconds...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
