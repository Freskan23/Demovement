import React from 'react';

export const Container = ({ children, className = '', clean = false }) => {
    return (
        <div className={`${clean ? '' : 'max-w-[1240px] px-4 sm:px-6 lg:px-8'} mx-auto ${className}`}>
            {children}
        </div>
    );
};
