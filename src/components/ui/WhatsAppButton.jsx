import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = '34690285023';
    const message = 'Hola, me gustaría recibir más información sobre vuestros protocolos de readaptación.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] group"
            title="Contactar por WhatsApp"
        >
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <p className="text-gray-900 font-black text-[10px] uppercase tracking-widest">¿Dudas? Escríbenos</p>
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-t border-r border-gray-100" />
            </div>

            {/* Button */}
            <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-shadow group-hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)]">
                <MessageCircle size={32} className="text-white fill-white" />

                {/* Ping Animation */}
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 -z-10" />
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
