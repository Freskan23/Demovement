import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { lesiones } from '../../data/siteData';

const LesionCategoria = () => {
    const { slug } = useParams();
    const categoria = lesiones[slug];

    if (!categoria) {
        return <div className="p-20 text-center">Categoría no encontrada</div>;
    }

    return (
        <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
            <h1 className="text-5xl font-black mb-8">{categoria.title}</h1>
            <p className="text-xl mb-12">{categoria.description}</p>

            <div className="grid md:grid-cols-3 gap-8">
                {categoria.subcategorias && Object.entries(categoria.subcategorias).map(([subKey, subVal]) => (
                    <Link
                        key={subKey}
                        to={`/lesiones/${slug}/${subKey}`}
                        className="block p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-gray-100"
                    >
                        <h3 className="text-2xl font-black mb-4">{subVal.title}</h3>
                        <p className="text-gray-600">{subVal.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LesionCategoria;
