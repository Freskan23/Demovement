import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs component para navegación y SEO
 * @param {Array} items - Array de objetos {label, path}
 */
const Breadcrumbs = ({ items = [] }) => {
    const allItems = [{ label: 'Inicio', path: '/' }, ...items];

    // Schema Markup para breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://demovement.vercel.app${item.path}`
        }))
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm flex-wrap">
                    {allItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && (
                                <ChevronRight size={14} className="text-gray-400" />
                            )}
                            {index === allItems.length - 1 ? (
                                <span className="text-gray-600 font-medium flex items-center gap-2">
                                    {index === 0 && <Home size={14} />}
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 transition-colors"
                                >
                                    {index === 0 && <Home size={14} />}
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
