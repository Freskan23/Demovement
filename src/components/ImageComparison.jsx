import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImageComparison = ({ before, after, label = "Desliza para visualizar la transición de la lesión a la estabilidad mecánica." }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef(null);

    const handleMove = (client) => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = client - containerRect.left;
        const pos = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
        setSliderPos(pos);
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    return (
        <div className="w-full max-w-2xl mx-auto my-16 select-none">
            <div
                ref={containerRef}
                className="relative aspect-[4/5] rounded-[40px] overflow-hidden cursor-ew-resize group shadow-2xl bg-white"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* Image After (Blue - Right/Below) */}
                <img
                    src={after}
                    alt="Después"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Image Before (Red - Left/Above) */}
                <div
                    className="absolute inset-0 overflow-hidden border-r-2 border-white/50"
                    style={{ width: `${sliderPos}%` }}
                >
                    <img
                        src={before}
                        alt="Antes"
                        className="absolute inset-0 w-full h-full object-cover max-w-none"
                        style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
                    />
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-primary/20 group-hover:scale-110 transition-transform">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-4 bg-primary/40 rounded-full" />
                            <div className="w-0.5 h-4 bg-primary/40 rounded-full" />
                        </div>
                    </div>
                </div>

            </div>

            {label && (
                <p className="text-center text-gray-400 text-sm font-medium mt-6 italic">
                    {label}
                </p>
            )}
        </div>
    );
};

export default ImageComparison;
