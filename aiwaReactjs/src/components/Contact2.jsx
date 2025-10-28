import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99dv1tj", // EmailJS Service ID
        "template_oaqdjgw", // EmailJS Template ID
        form.current,
        { publicKey: "fo2Dk8mWkSrzxsw4i" } // EmailJS Public Key
      )
      .then(
        () => {
          setShowThankYou(true);
          setStatus("");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  // Auto-dismiss thank-you screen after 5 seconds
  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => setShowThankYou(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 overflow-hidden"
    >
      {/* Contact Section */}
      <AnimatePresence>
        {!showThankYou && (
          <motion.div
            className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left - Google Map */}
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

            {/* Right - Contact Form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your@email.com"
                  className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
              >
                Send Message
              </motion.button>

              {status && (
                <p className="text-center text-red-600 font-medium">{status}</p>
              )}
            </motion.form>
          </motion.div>
        )}

        {/* Thank You Screen */}
        {showThankYou && (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col justify-center items-center bg-linear-to-br from-blue-600 via-cyan-500 to-green-400 text-white rounded-2xl shadow-2xl"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.2 130.2"
              className="w-24 h-24 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, duration: 0.7 }}
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
                transition={{ duration: 1, delay: 0.4 }}
              />
            </motion.svg>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold mb-2"
            >
              Message Sent Successfully!
            </motion.h2>
            <p className="text-blue-50 mb-8 text-lg">
              Thank you for reaching out. We’ll get in touch soon!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowThankYou(false)}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Back to Contact Form
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
