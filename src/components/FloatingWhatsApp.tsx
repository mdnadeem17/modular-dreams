import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918747818089"
      target="_blank" rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full inline-flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_4px_36px_rgba(37,211,102,0.6)]"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#25D366" }} />
      <MessageCircle className="h-6 w-6 text-white relative" />
    </motion.a>
  );
}
