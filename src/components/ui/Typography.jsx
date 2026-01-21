import React from 'react';

export const H1 = ({ children, className = '', light = false }) => (
    <h1 className={`text-[60px] md:text-[110px] font-black uppercase leading-[0.9] tracking-tighter ${light ? 'text-white' : 'text-gray-900'} ${className}`}>
        {children}
    </h1>
);

export const H2 = ({ children, className = '', center = false }) => (
    <h2 className={`text-4xl md:text-[64px] font-black uppercase leading-none tracking-tighter ${center ? 'text-center' : ''} text-gray-900 ${className}`}>
        {children}
    </h2>
);

export const SectionTitle = ({ subtitle, title, light = false }) => (
    <div className={`space-y-4 mb-20 ${light ? 'text-center' : ''}`}>
        {subtitle && (
            <span className={`font-black uppercase tracking-[0.2em] text-[13px] block ${light ? 'text-white/60' : 'text-[#4341EC]'}`}>
                {subtitle}
            </span>
        )}
        <H2 center={light}>{title}</H2>
    </div>
);
