import React from 'react';
import { Link } from 'react-router-dom';
import { lesiones } from '../../data/siteData';

const LesionesIndex = () => {
    return (
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black mb-12 uppercase">Nuestras Especialidades</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(lesiones).map(([key, val]) => (
                    <Link
                        key={key}
                        to={`/lesiones/${key}`}
                        className="block bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-xl hover:border-primary transition-all group"
                    >
                        <h2 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{val.title}</h2>
                        <p className="text-gray-600 font-medium">{val.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LesionesIndex;
