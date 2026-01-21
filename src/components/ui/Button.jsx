import React from 'react';

// Utilidad simple para clases condicionales ya que clsx/tailwind-merge pueden no estar disponibles en el runtime si hay errores de build previos
const cn = (...classes) => classes.filter(Boolean).join(' ');

export const Button = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const variants = {
        primary: 'bg-[#4341EC] text-white shadow-lg shadow-[#4341EC]/30 hover:bg-[#4E36A3] uppercase',
        outline: 'border-2 border-[#4341EC] text-[#4341EC] hover:bg-[#4341EC] hover:text-white uppercase',
        ghost: 'text-gray-600 hover:text-[#4341EC] transition-colors',
        glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 uppercase',
    };

    const sizes = {
        sm: 'px-6 py-2 text-xs font-bold',
        md: 'px-9 py-[13px] text-[14px] font-black tracking-wider',
        lg: 'px-12 py-5 text-lg font-black tracking-widest',
    };

    return (
        <button
            className={`${cn(
                'rounded-xl font-bold transition-all transform active:scale-95 disabled:opacity-50 cursor-pointer',
                variants[variant],
                sizes[size]
            )} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
