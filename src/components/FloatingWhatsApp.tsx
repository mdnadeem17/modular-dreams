import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919999999999"
      target="_blank" rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground inline-flex items-center justify-center shadow-luxe hover:shadow-glow transition"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-40" />
      <MessageCircle className="h-6 w-6 relative" />
    </motion.a>
  );
}
