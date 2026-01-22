import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Componente SEO para meta tags dinámicos y Schema Markup
 * @param {string} title - Título de la página
 * @param {string} description - Descripción meta
 * @param {string} keywords - Palabras clave separadas por comas
 * @param {string} canonical - URL canónica
 * @param {object} schema - Schema Markup (JSON-LD)
 * @param {string} ogImage - Imagen Open Graph
 */
const SEOHead = ({
    title,
    description,
    keywords = '',
    canonical = '',
    schema = null,
    ogImage = '/imagenes/hero/hero-image.jpg'
}) => {
    const siteName = 'Demovement';
    const fullTitle = title.includes('Demovement') ? title : `${title} | ${siteName}`;
    const siteUrl = 'https://demovement.vercel.app';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : '';

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={fullCanonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            {canonical && <meta property="og:url" content={fullCanonical} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Schema Markup */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
