import React from 'react';
import { Share2, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialShare = ({ title }) => {
    const url = window.location.href;
    const text = `Echa un vistazo a este protocolo de readaptación para ${title} en De Movement:`;

    const shareLinks = [
        {
            name: 'WhatsApp',
            icon: <MessageCircle size={20} />,
            href: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
            color: 'bg-[#25D366]'
        },
        {
            name: 'Twitter',
            icon: <Twitter size={20} />,
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
            color: 'bg-[#1DA1F2]'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: 'bg-[#0077B5]'
        }
    ];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `De Movement - ${title}`,
                    text: text,
                    url: url,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }
    };

    return (
        <div className="py-8 border-t border-b border-gray-100 flex flex-wrap items-center gap-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                <Share2 size={14} />
                Compartir protocolo
            </span>
            <div className="flex gap-3">
                {shareLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className={`${link.color} text-white p-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all`}
                        title={`Compartir en ${link.name}`}
                    >
                        {link.icon}
                    </motion.a>
                ))}
                {navigator.share && (
                    <button
                        onClick={handleShare}
                        className="bg-gray-900 text-white p-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                        title="Más opciones de compartido"
                    >
                        <Share2 size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SocialShare;
