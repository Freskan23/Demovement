// Datos de documentación SEO por ruta
export const seoDocumentation = {
    '/': {
        tecnico: {
            title: 'Centro de Readaptación de Lesiones en Las Rozas | DeMovement',
            description: 'Especialistas en readaptación de lesiones en Las Rozas. A 5 min de Majadahonda. Programas 100% individualizados basados en ciencia y empatía.',
            keywords: ['readaptación deportiva Las Rozas', 'recuperación de lesiones Majadahonda', 'fisioterapia deportiva', 'centro readaptación Madrid'],
            canonical: 'https://demovement.es/',
            h1: 'Centro de Readaptación Científica y Rendimiento Deportivo',
            schema: ['LocalBusiness', 'MedicalBusiness'],
            openGraph: { type: 'website', image: 'hero principal' },
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Captar búsquedas locales de personas con lesiones buscando solución activa.',
            keywordsTarget: [
                { keyword: 'readaptación deportiva Las Rozas', razon: 'Intención de compra alta' },
                { keyword: 'recuperación lesiones Majadahonda', razon: 'Geolocalización cercana' },
                { keyword: 'volver a entrenar después de lesión', razon: 'Problema específico del cliente' }
            ],
            diferenciadores: [
                'Title incluye ubicación para captar SEO local',
                'Description menciona "100% individualizados" = diferenciador principal',
                'H1 posiciona como "científico" = credibilidad frente a competencia',
                'Schema LocalBusiness ayuda a aparecer en Google Maps y búsquedas locales'
            ]
        }
    },
    '/nosotros': {
        tecnico: {
            title: 'Nuestra Filosofía: Readaptación Basada en Ciencia | DeMovement',
            description: 'Conoce el método DeMovement: readaptación activa, atención individualizada y un equipo de especialistas en readaptación deportiva en Las Rozas.',
            keywords: ['método DeMovement', 'readaptación activa', 'filosofía readaptación', 'equipo readaptación Las Rozas'],
            canonical: 'https://demovement.es/nosotros',
            h1: 'Nuestra Filosofía',
            schema: ['AboutPage'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Generar confianza y diferenciación. Personas que comparan opciones antes de decidir.',
            keywordsTarget: [
                { keyword: 'método readaptación', razon: 'Posicionamiento como expertos' }
            ],
            diferenciadores: [
                'Title enfatiza "ciencia" = credibilidad frente a competencia',
                'Description menciona "atención individualizada" = no masificación',
                'Página clave en el journey: considera → confía → reserva'
            ]
        }
    },
    '/equipo': {
        tecnico: {
            title: 'Nuestro Equipo de Especialistas en Readaptación | DeMovement',
            description: 'Conoce a los profesionales de DeMovement: readaptadores deportivos, preparadores físicos y especialistas en recuperación funcional.',
            keywords: ['equipo readaptación deportiva', 'readaptadores Las Rozas', 'especialistas lesiones deportivas'],
            canonical: 'https://demovement.es/equipo',
            h1: 'Nuestro Equipo',
            schema: ['Person (por cada miembro)'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Humanizar la marca. El cliente quiere saber QUIÉN le va a tratar.',
            keywordsTarget: [
                { keyword: 'readaptadores Las Rozas', razon: 'Búsqueda de profesionales locales' }
            ],
            diferenciadores: [
                'Fotos reales con nombre = confianza',
                'Schema Person mejora visibilidad en búsquedas de nombre',
                'Títulos profesionales validan expertise'
            ]
        }
    },
    '/instalaciones': {
        tecnico: {
            title: 'Instalaciones de Readaptación y Entrenamiento | DeMovement Las Rozas',
            description: 'Centro equipado con tecnología de última generación para readaptación deportiva. Espacio de 200m² en Las Rozas con material especializado.',
            keywords: ['instalaciones readaptación Las Rozas', 'gimnasio readaptación', 'centro entrenamiento Las Rozas'],
            canonical: 'https://demovement.es/instalaciones',
            h1: 'Nuestras Instalaciones',
            schema: ['Place', 'LocalBusiness'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Mostrar que no es "la consulta de un fisio". Es un centro con equipamiento profesional.',
            keywordsTarget: [
                { keyword: 'centro entrenamiento Las Rozas', razon: 'Búsqueda de instalaciones' }
            ],
            diferenciadores: [
                'Metros cuadrados = el cliente no estará hacinado',
                '"Tecnología última generación" = diferenciador competitivo',
                'Fotos del espacio real reducen fricción de primera visita'
            ]
        }
    },
    '/contacto': {
        tecnico: {
            title: 'Contacto y Ubicación | DeMovement Las Rozas',
            description: 'Contacta con DeMovement. Estamos en Las Rozas, a 5 min de Majadahonda. Teléfono, email, WhatsApp y formulario de contacto.',
            keywords: ['contacto DeMovement', 'dirección readaptación Las Rozas', 'teléfono DeMovement'],
            canonical: 'https://demovement.es/contacto',
            h1: 'Contacto',
            schema: ['ContactPage', 'LocalBusiness con geo'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Facilitar el contacto. Múltiples vías = menos fricción.',
            keywordsTarget: [
                { keyword: 'contacto DeMovement', razon: 'Navegación directa' }
            ],
            diferenciadores: [
                'Mapa embebido para SEO local',
                'Múltiples CTAs (teléfono, WhatsApp, formulario)',
                'Horarios claros reducen llamadas innecesarias'
            ]
        }
    },
    '/servicios': {
        tecnico: {
            title: 'Servicios de Readaptación Deportiva | DeMovement',
            description: 'Readaptación de lesiones, entrenamiento personal, preparación física y programas de prevención. Servicios 100% personalizados en Las Rozas.',
            keywords: ['servicios readaptación', 'entrenamiento personal Las Rozas', 'readaptación lesiones', 'preparación física'],
            canonical: 'https://demovement.es/servicios',
            h1: 'Nuestros Servicios',
            schema: ['ItemList con servicios'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Página hub que distribuye tráfico a servicios específicos.',
            keywordsTarget: [
                { keyword: 'servicios readaptación', razon: 'Búsqueda general de servicios' },
                { keyword: 'entrenamiento personal Las Rozas', razon: 'Servicio específico + ubicación' }
            ],
            diferenciadores: [
                'Lista clara con precios = transparencia',
                'Cada servicio enlaza a página propia = más keywords',
                'CTAs visibles por cada servicio aumenta conversiones'
            ],
            interlinking: {
                enlazaA: ['/servicios/readaptacion-lesiones', '/servicios/entrenamiento-salud', '/servicios/grupos-reducidos', '/servicios/valoracion-inicial'],
                enlazadoDesde: ['/', '/lesiones', '/deportes'],
                anchorTextSugerido: 'ver todos nuestros servicios'
            }
        }
    },
    '/servicios/readaptacion-lesiones': {
        tecnico: {
            title: 'Readaptación de Lesiones Deportivas en Las Rozas | DeMovement',
            description: 'Programa de readaptación de lesiones personalizado. Vuelve a tu deporte más fuerte y sin dolor. Primera valoración gratuita.',
            keywords: ['readaptación lesiones Las Rozas', 'recuperación lesión deportiva', 'volver a entrenar lesión', 'readaptación funcional'],
            canonical: 'https://demovement.es/servicios/readaptacion-lesiones',
            h1: 'Readaptación de Lesiones',
            schema: ['Service', 'Product', 'MedicalBusiness'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'PÁGINA DE CONVERSIÓN PRINCIPAL. Captar personas con lesiones buscando solución activa.',
            keywordsTarget: [
                { keyword: 'readaptación lesiones Las Rozas', razon: 'Intención de compra muy alta + local' },
                { keyword: 'volver a entrenar después de lesión', razon: 'Dolor específico del cliente' },
                { keyword: 'recuperación lesión sin cirugía', razon: 'Alternativa a operación' }
            ],
            diferenciadores: [
                'Servicio estrella = máxima inversión SEO',
                'Schema Product muestra precio en SERPs',
                '"Primera valoración gratuita" = reducir objeciones',
                'Testimonios específicos de readaptación'
            ],
            interlinking: {
                enlazaA: ['/lesiones/rodilla/lca', '/lesiones/tobillo/esguince', '/lesiones/espalda/hernia-discal', '/blog/readaptacion-activa-vs-reposo'],
                enlazadoDesde: ['/servicios', '/lesiones', '/deportes', '/'],
                anchorTextSugerido: 'programa de readaptación personalizado'
            },
            featuredSnippets: ['¿Cuánto tarda una readaptación?', '¿Qué es la readaptación deportiva?']
        }
    },
    '/servicios/entrenamiento-salud': {
        tecnico: {
            title: 'Entrenamiento Personal para la Salud en Las Rozas | DeMovement',
            description: 'Entrenamiento personal adaptado a tus objetivos de salud. Mejora tu forma física con supervisión profesional. Las Rozas.',
            keywords: ['entrenamiento personal Las Rozas', 'entrenamiento salud', 'entrenador personal Majadahonda', 'fitness personalizado'],
            canonical: 'https://demovement.es/servicios/entrenamiento-salud',
            h1: 'Entrenamiento Personal para la Salud',
            schema: ['Service', 'Product'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Captar clientes que buscan entrenamiento personal sin necesariamente tener lesión.',
            keywordsTarget: [
                { keyword: 'entrenamiento personal Las Rozas', razon: 'Alta demanda local' },
                { keyword: 'entrenador personal cerca', razon: 'Búsqueda con intención local' }
            ],
            diferenciadores: [
                'Diferenciador: supervisión por profesionales de salud',
                'No es un gimnasio masificado',
                'Programa 100% individualizado'
            ],
            interlinking: {
                enlazaA: ['/precios', '/instalaciones', '/equipo'],
                enlazadoDesde: ['/servicios', '/'],
                anchorTextSugerido: 'entrenamiento personalizado'
            }
        }
    },
    '/servicios/grupos-reducidos': {
        tecnico: {
            title: 'Clases en Grupos Reducidos Las Rozas | DeMovement',
            description: 'Entrenamientos en grupos de máximo 6 personas. Atención personalizada a precio accesible. Las Rozas.',
            keywords: ['grupos reducidos Las Rozas', 'clases pequeñas entrenamiento', 'entrenamiento grupal personalizado'],
            canonical: 'https://demovement.es/servicios/grupos-reducidos',
            h1: 'Grupos Reducidos',
            schema: ['Service', 'Product'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Opción más económica para clientes sensibles al precio.',
            keywordsTarget: [
                { keyword: 'grupos reducidos Las Rozas', razon: 'Alternativa a individual' },
                { keyword: 'clases pequeñas entrenamiento', razon: 'Diferenciador vs gimnasios' }
            ],
            diferenciadores: [
                'Máximo 6 personas = sigue siendo personalizado',
                'Precio más accesible = amplía mercado',
                'Comunidad = retención de clientes'
            ],
            interlinking: {
                enlazaA: ['/precios', '/instalaciones'],
                enlazadoDesde: ['/servicios', '/precios'],
                anchorTextSugerido: 'entrenamientos en grupo reducido'
            }
        }
    },
    '/servicios/valoracion-inicial': {
        tecnico: {
            title: 'Valoración Inicial Gratuita | DeMovement Las Rozas',
            description: 'Primera visita gratuita de 45 minutos. Evaluación completa de tu estado físico y plan personalizado. Sin compromiso.',
            keywords: ['valoración inicial gratuita', 'primera visita fisio gratis', 'evaluación deportiva Las Rozas'],
            canonical: 'https://demovement.es/servicios/valoracion-inicial',
            h1: 'Valoración Inicial Gratuita',
            schema: ['Service', 'Offer'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Reducir fricción. La valoración gratuita es el gancho de conversión.',
            keywordsTarget: [
                { keyword: 'valoración gratuita Las Rozas', razon: 'Oferta irresistible' },
                { keyword: 'primera visita fisio gratis', razon: 'Captar indecisos' }
            ],
            diferenciadores: [
                '"Gratis" = palabra clave de alto CTR',
                '"Sin compromiso" = reduce barrera',
                '45 minutos = valor percibido alto'
            ],
            interlinking: {
                enlazaA: ['/reservar', '/como-funciona', '/primera-visita'],
                enlazadoDesde: ['/', '/servicios', '/precios'],
                anchorTextSugerido: 'reserva tu valoración gratuita'
            }
        }
    },
    '/precios': {
        tecnico: {
            title: 'Precios de Readaptación y Entrenamiento | DeMovement',
            description: 'Consulta nuestras tarifas de readaptación, entrenamiento personal y bonos. Precios transparentes sin sorpresas. Primera valoración gratuita.',
            keywords: ['precios readaptación Las Rozas', 'cuánto cuesta readaptación', 'tarifas entrenamiento personal'],
            canonical: 'https://demovement.es/precios',
            h1: 'Nuestros Precios',
            schema: ['PriceSpecification', 'Offer'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Transparencia total. El cliente quiere saber el precio antes de llamar.',
            keywordsTarget: [
                { keyword: 'precios readaptación Las Rozas', razon: 'Alta intención de compra' },
                { keyword: 'cuánto cuesta readaptación', razon: 'Búsqueda informacional pre-compra' }
            ],
            diferenciadores: [
                'Precios visibles = cualificación de leads (filtra quienes no pueden pagar)',
                '"Sin sorpresas" = reduce objeciones y genera confianza',
                '"Primera valoración gratuita" = call to action principal'
            ]
        }
    },
    '/blog': {
        tecnico: {
            title: 'Blog de Readaptación Deportiva | DeMovement',
            description: 'Artículos sobre readaptación de lesiones, entrenamiento, prevención y salud deportiva. Contenido basado en evidencia científica.',
            keywords: ['blog readaptación', 'artículos lesiones deportivas', 'consejos recuperación'],
            canonical: 'https://demovement.es/blog',
            h1: 'Blog',
            schema: ['Blog', 'ItemList'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Generar tráfico orgánico y autoridad temática.',
            keywordsTarget: [
                { keyword: 'blog readaptación', razon: 'Canal de contenido educativo' }
            ],
            diferenciadores: [
                'Blog = contenido fresco = señales de actividad a Google',
                'Artículos educativos captan tráfico top-of-funnel',
                'Posiciona como expertos en readaptación'
            ],
            estrategiaContenido: [
                { articulo: 'Readaptación Activa vs Reposo', keyword: 'readaptación activa vs reposo', estado: 'publicado' },
                { articulo: 'Por qué vuelve el dolor de espalda', keyword: 'por qué vuelve dolor espalda', estado: 'planificado' },
                { articulo: 'Operarse de menisco o no', keyword: 'operarse menisco sí o no', estado: 'planificado' },
                { articulo: 'Cuánto tarda recuperarse de rotura LCA', keyword: 'tiempo recuperación LCA', estado: 'planificado' },
                { articulo: 'Ejercicios para fascitis plantar', keyword: 'ejercicios fascitis plantar', estado: 'planificado' }
            ]
        }
    },
    '/blog/readaptacion-activa-vs-reposo': {
        tecnico: {
            title: 'Readaptación Activa vs Reposo: Qué Dice la Ciencia | DeMovement Blog',
            description: 'Descubre por qué el reposo absoluto no funciona y cómo la readaptación activa acelera tu recuperación hasta un 30%. Guía basada en ciencia.',
            keywords: ['readaptación activa', 'reposo vs movimiento', 'movilización temprana', 'recuperación funcional'],
            canonical: 'https://demovement.es/blog/readaptacion-activa-vs-reposo',
            h1: 'Readaptación Activa vs Reposo: Qué Dice la Ciencia',
            schema: ['Article', 'FAQPage'],
            robots: 'index, follow',
            openGraph: { type: 'article', image: '/imagenes/blog/readaptacion-activa-hero.webp' },
            twitterCards: 'summary_large_image'
        },
        negocio: {
            objetivo: 'Artículo pilar. Educa sobre el enfoque diferenciador de DeMovement.',
            keywordsTarget: [
                { keyword: 'readaptación activa vs reposo', razon: 'Keyword principal del artículo' },
                { keyword: 'por qué el reposo no funciona', razon: 'Búsqueda informacional' },
                { keyword: 'movilización temprana beneficios', razon: 'LSI keyword' }
            ],
            diferenciadores: [
                'Artículo pilar = contenido extenso y autoritativo',
                'Posiciona filosofía DeMovement (movimiento > reposo)',
                'FAQs = oportunidad de featured snippets',
                'Semáforo visual = contenido diferenciador'
            ],
            interlinking: {
                enlazaA: ['/servicios/readaptacion-lesiones', '/lesiones/tobillo/esguince', '/reservar'],
                enlazadoDesde: ['/blog', '/lesiones', '/servicios/readaptacion-lesiones'],
                anchorTextSugerido: 'por qué la readaptación activa funciona mejor'
            },
            featuredSnippets: ['¿Es mejor reposo o movimiento después de una lesión?', '¿Qué es la readaptación activa?']
        }
    },
    '/lesiones': {
        tecnico: {
            title: 'Lesiones Deportivas: Guía Completa de Tratamiento | DeMovement',
            description: 'Información sobre lesiones de rodilla, tobillo, hombro, espalda y cadera. Síntomas, tratamiento y readaptación basada en evidencia.',
            keywords: ['lesiones deportivas', 'tratamiento lesiones', 'readaptación lesiones', 'recuperación lesiones'],
            canonical: 'https://demovement.es/lesiones',
            h1: 'Lesiones que Tratamos',
            schema: ['ItemList', 'MedicalCondition'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Captar tráfico informacional. Personas buscando información sobre su lesión.',
            keywordsTarget: [
                { keyword: 'lesiones deportivas', razon: 'Alto volumen de búsqueda' },
                { keyword: 'tratamiento lesiones', razon: 'Intención de solución' },
                { keyword: 'síntomas lesión rodilla', razon: 'Featured snippet potencial' }
            ],
            diferenciadores: [
                'Contenido educativo = autoridad temática',
                'Cada lesión enlaza a página específica = SEO largo plazo',
                'Posiciona como expertos en lesiones deportivas'
            ],
            interlinking: {
                enlazaA: ['/lesiones/rodilla', '/lesiones/tobillo', '/lesiones/espalda', '/lesiones/hombro', '/lesiones/cadera'],
                enlazadoDesde: ['/', '/servicios/readaptacion-lesiones'],
                anchorTextSugerido: 'ver todas las lesiones que tratamos'
            },
            featuredSnippets: ['¿Cuáles son las lesiones deportivas más comunes?', 'Síntomas de X lesión']
        }
    },
    '/lesiones/rodilla/lca': {
        tecnico: {
            title: 'Rotura de LCA: Recuperación Sin y Con Cirugía | DeMovement',
            description: 'Guía completa sobre rotura de ligamento cruzado anterior. Síntomas, opciones de tratamiento, tiempos de recuperación y programa de readaptación.',
            keywords: ['rotura LCA', 'ligamento cruzado anterior', 'recuperación LCA', 'readaptación LCA sin cirugía'],
            canonical: 'https://demovement.es/lesiones/rodilla/lca',
            h1: 'Rotura de Ligamento Cruzado Anterior (LCA)',
            schema: ['MedicalCondition', 'FAQPage', 'HowTo'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Keyword de alto valor. Personas buscando solución específica para LCA.',
            keywordsTarget: [
                { keyword: 'rotura LCA recuperación', razon: 'Alta intención, problema grave' },
                { keyword: 'readaptación LCA sin cirugía', razon: 'Alternativa a operación' },
                { keyword: 'cuánto tarda recuperarse de rotura LCA', razon: 'Featured snippet' }
            ],
            diferenciadores: [
                'Contenido muy específico = alta intención de conversión',
                'HowTo Schema = aparecer en "Cómo recuperarse de..."',
                'Testimonios de pacientes con LCA = prueba social específica'
            ],
            interlinking: {
                enlazaA: ['/servicios/readaptacion-lesiones', '/casos-exito', '/reservar'],
                enlazadoDesde: ['/lesiones', '/lesiones/rodilla', '/deportes/futbol'],
                anchorTextSugerido: 'programa de readaptación para LCA'
            },
            featuredSnippets: ['¿Cuánto tarda recuperarse de rotura de LCA?', '¿Se puede recuperar un LCA sin cirugía?']
        }
    },
    '/lesiones/tobillo/esguince': {
        tecnico: {
            title: 'Esguince de Tobillo: Tratamiento y Readaptación | DeMovement',
            description: 'Guía completa sobre esguince de tobillo. Grados, síntomas, tratamiento y protocolo de readaptación para volver a tu deporte.',
            keywords: ['esguince tobillo', 'recuperación esguince', 'readaptación esguince tobillo', 'esguince grado 2'],
            canonical: 'https://demovement.es/lesiones/tobillo/esguince',
            h1: 'Esguince de Tobillo',
            schema: ['MedicalCondition', 'FAQPage'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Lesión muy común. Alto volumen de búsquedas.',
            keywordsTarget: [
                { keyword: 'esguince tobillo tratamiento', razon: 'Muy buscado' },
                { keyword: 'cuánto tarda curar esguince', razon: 'Featured snippet' },
                { keyword: 'esguince grado 2 recuperación', razon: 'Específico = alta intención' }
            ],
            diferenciadores: [
                'Lesión frecuente = mucho tráfico potencial',
                'Diferenciador: readaptación vs solo reposo',
                'Enlace fuerte a servicio de readaptación'
            ],
            interlinking: {
                enlazaA: ['/servicios/readaptacion-lesiones', '/blog/readaptacion-activa-vs-reposo'],
                enlazadoDesde: ['/lesiones', '/lesiones/tobillo', '/deportes/running', '/deportes/padel'],
                anchorTextSugerido: 'programa de readaptación para esguinces'
            }
        }
    },
    '/lesiones/espalda/dolor-lumbar': {
        tecnico: {
            title: 'Dolor Lumbar: Causas, Tratamiento y Ejercicios | DeMovement',
            description: 'Guía sobre dolor lumbar crónico y agudo. Causas, ejercicios, tratamiento y readaptación para eliminar el dolor de espalda.',
            keywords: ['dolor lumbar', 'dolor espalda baja', 'ejercicios dolor lumbar', 'tratamiento lumbalgia'],
            canonical: 'https://demovement.es/lesiones/espalda/dolor-lumbar',
            h1: 'Dolor Lumbar',
            schema: ['MedicalCondition', 'FAQPage', 'HowTo'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Altísimo volumen de búsqueda. Problema muy común.',
            keywordsTarget: [
                { keyword: 'dolor lumbar ejercicios', razon: 'Muy buscado, intención de solución' },
                { keyword: 'dolor espalda baja tratamiento', razon: 'Alto volumen' },
                { keyword: 'por qué me duele la espalda', razon: 'Búsqueda informacional' }
            ],
            diferenciadores: [
                'Problema masivo = mucho tráfico potencial',
                'Ejercicios en vídeo = valor añadido',
                'Diferenciador: enfoque activo vs pastillas/reposo'
            ],
            interlinking: {
                enlazaA: ['/servicios/readaptacion-lesiones', '/servicios/entrenamiento-salud'],
                enlazadoDesde: ['/lesiones', '/lesiones/espalda'],
                anchorTextSugerido: 'tratamiento activo para dolor lumbar'
            },
            featuredSnippets: ['¿Por qué me duele la espalda baja?', 'Ejercicios para dolor lumbar']
        }
    },
    '/deportes': {
        tecnico: {
            title: 'Readaptación por Deporte: Fútbol, Pádel, Running, CrossFit | DeMovement',
            description: 'Programas de readaptación específicos para tu deporte. Entendemos las demandas de cada actividad para devolverte a tu nivel.',
            keywords: ['readaptación deportiva', 'volver a jugar después de lesión', 'recuperación deportistas'],
            canonical: 'https://demovement.es/deportes',
            h1: 'Readaptación por Deporte',
            schema: ['ItemList'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Conectar con la identidad deportiva del cliente.',
            keywordsTarget: [
                { keyword: 'readaptación pádel Las Rozas', razon: 'Deporte muy popular en la zona' },
                { keyword: 'volver a jugar después de lesión', razon: 'Dolor específico del deportista' },
                { keyword: 'readaptación fútbol', razon: 'Deporte masivo' }
            ],
            diferenciadores: [
                'El cliente SE IDENTIFICA con su deporte',
                '"Readaptación pádel Las Rozas" = keyword muy específica y relevante',
                'Demuestra conocimiento profundo de cada deporte'
            ],
            interlinking: {
                enlazaA: ['/deportes/padel', '/deportes/futbol', '/deportes/running', '/deportes/crossfit'],
                enlazadoDesde: ['/', '/servicios/readaptacion-lesiones'],
                anchorTextSugerido: 'ver readaptación para tu deporte'
            }
        }
    },
    '/deportes/padel': {
        tecnico: {
            title: 'Readaptación de Lesiones de Pádel en Las Rozas | DeMovement',
            description: 'Lesiones frecuentes en pádel: epicondilitis, hombro, espalda, rodilla. Programas de readaptación específicos para jugadores de pádel.',
            keywords: ['lesiones pádel', 'readaptación pádel', 'epicondilitis pádel', 'codo de tenista pádel'],
            canonical: 'https://demovement.es/deportes/padel',
            h1: 'Readaptación para Pádel',
            schema: ['SportsActivityLocation', 'Service'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Pádel es el deporte más popular en Las Rozas. Alta demanda.',
            keywordsTarget: [
                { keyword: 'lesiones pádel Las Rozas', razon: 'Local + deporte popular' },
                { keyword: 'epicondilitis pádel tratamiento', razon: 'Lesión muy común en pádel' },
                { keyword: 'dolor codo pádel', razon: 'Síntoma específico' }
            ],
            diferenciadores: [
                'Pádel = deporte estrella en la zona',
                'Conocimiento específico del deporte = credibilidad',
                'Testimonios de jugadores de pádel'
            ],
            interlinking: {
                enlazaA: ['/servicios/readaptacion-lesiones', '/lesiones/tobillo/esguince'],
                enlazadoDesde: ['/deportes', '/'],
                anchorTextSugerido: 'readaptación especializada en pádel'
            }
        }
    },
    '/deportes/futbol': {
        tecnico: {
            title: 'Readaptación de Lesiones de Fútbol | DeMovement Las Rozas',
            description: 'Lesiones frecuentes en fútbol: LCA, menisco, isquios, tobillo. Readaptación para futbolistas profesionales y amateur.',
            keywords: ['lesiones fútbol', 'readaptación fútbol', 'rotura LCA fútbol', 'lesión isquios fútbol'],
            canonical: 'https://demovement.es/deportes/futbol',
            h1: 'Readaptación para Fútbol',
            schema: ['SportsActivityLocation', 'Service'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Fútbol = deporte masivo. Muchas lesiones.',
            keywordsTarget: [
                { keyword: 'readaptación fútbol', razon: 'Deporte masivo' },
                { keyword: 'lesión isquiotibiales fútbol', razon: 'Muy común' },
                { keyword: 'volver a jugar fútbol después de lesión', razon: 'Intención específica' }
            ],
            diferenciadores: [
                'Deporte con muchas lesiones = mucho tráfico',
                'Enlace fuerte a lesiones específicas (LCA, menisco)',
                'Testimonios de futbolistas'
            ],
            interlinking: {
                enlazaA: ['/lesiones/rodilla/lca', '/servicios/readaptacion-lesiones'],
                enlazadoDesde: ['/deportes'],
                anchorTextSugerido: 'readaptación para futbolistas'
            }
        }
    },
    '/deportes/running': {
        tecnico: {
            title: 'Readaptación de Lesiones de Running | DeMovement Las Rozas',
            description: 'Lesiones frecuentes en running: fascitis plantar, rodilla del corredor, periostitis. Vuelve a correr sin dolor.',
            keywords: ['lesiones running', 'readaptación corredores', 'fascitis plantar corredor', 'rodilla corredor'],
            canonical: 'https://demovement.es/deportes/running',
            h1: 'Readaptación para Running',
            schema: ['SportsActivityLocation', 'Service'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Running = comunidad muy activa buscando soluciones.',
            keywordsTarget: [
                { keyword: 'lesiones running', razon: 'Comunidad muy activa' },
                { keyword: 'fascitis plantar corredor', razon: 'Lesión muy común' },
                { keyword: 'volver a correr después de lesión', razon: 'Intención específica' }
            ],
            diferenciadores: [
                'Comunidad running muy activa online',
                'Lesiones por sobreuso = problema crónico',
                'Enfoque en prevención + readaptación'
            ],
            interlinking: {
                enlazaA: ['/lesiones/tobillo/esguince', '/servicios/readaptacion-lesiones'],
                enlazadoDesde: ['/deportes'],
                anchorTextSugerido: 'readaptación para corredores'
            }
        }
    },
    '/casos-exito': {
        tecnico: {
            title: 'Casos de Éxito y Testimonios | DeMovement',
            description: 'Historias reales de recuperación. Conoce cómo nuestros pacientes han vuelto a su deporte después de lesiones graves.',
            keywords: ['testimonios readaptación', 'casos éxito recuperación lesiones', 'opiniones DeMovement'],
            canonical: 'https://demovement.es/casos-exito',
            h1: 'Casos de Éxito',
            schema: ['Review', 'AggregateRating'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Prueba social. El cliente busca validación de que el método funciona.',
            keywordsTarget: [
                { keyword: 'opiniones DeMovement', razon: 'Búsqueda de reputación' },
                { keyword: 'testimonios readaptación', razon: 'Validación social' }
            ],
            diferenciadores: [
                'Testimonios reales con nombre y foto = credibilidad',
                'Vídeos = mucho más creíbles que texto',
                'Schema Review puede mostrar estrellas en SERPs'
            ]
        }
    },
    '/preguntas-frecuentes': {
        tecnico: {
            title: 'Preguntas Frecuentes sobre Readaptación | DeMovement',
            description: 'Respuestas a las dudas más comunes sobre readaptación deportiva, precios, horarios, primeras visitas y proceso de recuperación.',
            keywords: ['preguntas frecuentes readaptación', 'dudas readaptación deportiva'],
            canonical: 'https://demovement.es/preguntas-frecuentes',
            h1: 'Preguntas Frecuentes',
            schema: ['FAQPage'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Captar featured snippets y resolver objeciones antes de contacto.',
            keywordsTarget: [
                { keyword: 'preguntas frecuentes readaptación', razon: 'Captar dudas comunes' }
            ],
            diferenciadores: [
                'FAQPage Schema = aparecer en "Preguntas relacionadas" de Google',
                'Responde objeciones antes de que llamen',
                'Reduce carga en atención al cliente'
            ]
        }
    },
    '/como-funciona': {
        tecnico: {
            title: 'Cómo Funciona el Proceso de Readaptación | DeMovement',
            description: 'Entiende el proceso completo: desde tu primera valoración hasta volver a tu deporte. Paso a paso en DeMovement.',
            keywords: ['cómo funciona readaptación', 'proceso recuperación lesiones', 'fases readaptación'],
            canonical: 'https://demovement.es/como-funciona',
            h1: 'Cómo Funciona',
            schema: ['HowTo'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Educación del cliente. Reduce ansiedad de "no sé qué esperar".',
            keywordsTarget: [
                { keyword: 'cómo funciona readaptación', razon: 'Búsqueda informacional' }
            ],
            diferenciadores: [
                'HowTo Schema = aparecer en resultados enriquecidos de Google',
                'Claridad del proceso = más confianza para dar el paso',
                'Paso a paso visual reduce incertidumbre'
            ]
        }
    },
    '/primera-visita': {
        tecnico: {
            title: 'Tu Primera Visita: Qué Esperar | DeMovement',
            description: 'Todo lo que necesitas saber antes de tu primera visita a DeMovement. Qué traer, cuánto dura, qué incluye la valoración gratuita.',
            keywords: ['primera visita readaptación', 'qué esperar primera cita', 'valoración inicial gratuita'],
            canonical: 'https://demovement.es/primera-visita',
            h1: 'Tu Primera Visita',
            schema: ['HowTo', 'FAQPage'],
            robots: 'index, follow'
        },
        negocio: {
            objetivo: 'Reducir fricción de la primera visita. El cliente no sabe qué esperar.',
            keywordsTarget: [
                { keyword: 'primera visita readaptación', razon: 'Preparación del cliente' }
            ],
            diferenciadores: [
                '"Qué traer" = preparación reduce ansiedad',
                '"45 minutos" = gestión de expectativas de tiempo',
                'Fotos del proceso = familiarización antes de ir'
            ]
        }
    },
    '/reservar': {
        tecnico: {
            title: 'Reserva tu Valoración Inicial Gratuita | DeMovement',
            description: 'Reserva tu primera visita gratuita en DeMovement. Evaluación completa de 45 minutos sin compromiso. Las Rozas.',
            keywords: ['reservar readaptación Las Rozas', 'cita valoración', 'primera visita gratuita'],
            canonical: 'https://demovement.es/reservar',
            h1: 'Reserva tu Cita',
            schema: ['ReserveAction'],
            robots: 'noindex, follow'
        },
        negocio: {
            objetivo: 'Conversión. Esta es la página final del funnel de ventas.',
            keywordsTarget: [
                { keyword: 'reservar readaptación', razon: 'Máxima intención de conversión' }
            ],
            diferenciadores: [
                'Formulario simple = menos abandono',
                '"Sin compromiso" = reduce la barrera de entrada',
                'noindex para evitar canibalización de keywords más importantes'
            ]
        }
    },
    '/aviso-legal': {
        tecnico: {
            title: 'Aviso Legal | DeMovement',
            description: 'Información legal sobre DeMovement. Datos de la empresa, condiciones de uso y responsabilidad.',
            keywords: [],
            canonical: 'https://demovement.es/aviso-legal',
            h1: 'Aviso Legal',
            schema: [],
            robots: 'noindex, follow'
        },
        negocio: {
            objetivo: 'Cumplimiento legal obligatorio.',
            keywordsTarget: [],
            diferenciadores: [
                'Obligatorio por ley (LSSI)',
                'noindex porque no aporta valor SEO',
                'Cumplimiento genera confianza'
            ]
        }
    },
    '/politica-privacidad': {
        tecnico: {
            title: 'Política de Privacidad | DeMovement',
            description: 'Información sobre el tratamiento de datos personales en DeMovement según el RGPD.',
            keywords: [],
            canonical: 'https://demovement.es/politica-privacidad',
            h1: 'Política de Privacidad',
            schema: [],
            robots: 'noindex, follow'
        },
        negocio: {
            objetivo: 'Cumplimiento RGPD obligatorio.',
            keywordsTarget: [],
            diferenciadores: [
                'Obligatorio por RGPD',
                'noindex porque no aporta valor SEO',
                'Enlace en footer obligatorio'
            ]
        }
    },
    '/politica-cookies': {
        tecnico: {
            title: 'Política de Cookies | DeMovement',
            description: 'Información sobre el uso de cookies en la web de DeMovement.',
            keywords: [],
            canonical: 'https://demovement.es/politica-cookies',
            h1: 'Política de Cookies',
            schema: [],
            robots: 'noindex, follow'
        },
        negocio: {
            objetivo: 'Cumplimiento de normativa de cookies.',
            keywordsTarget: [],
            diferenciadores: [
                'Obligatorio por normativa cookies',
                'noindex porque no aporta valor SEO',
                'Complementa banner de cookies'
            ]
        }
    }
};

// Función para obtener documentación por ruta
export const getSeoDocByPath = (path) => {
    // Limpiar la ruta y buscar coincidencia
    const cleanPath = path.replace(/\/$/, '') || '/';
    return seoDocumentation[cleanPath] || null;
};
