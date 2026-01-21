// Datos de Servicios
export const servicios = {
    'readaptacion-deportiva': {
        title: 'Readaptación Deportiva',
        subtitle: 'Vuelve a tu Deporte',
        description: 'Protocolo científico para la recuperación funcional completa tras lesiones deportivas.',
        features: [
            'Evaluación biomecánica inicial',
            'Planificación individualizada',
            'Seguimiento de cargas y métricas',
            'Retorno gradual al deporte'
        ],
        icon: 'activity'
    },
    'entrenamiento-personal': {
        title: 'Entrenamiento Personal',
        subtitle: 'Sesiones 1:1',
        description: 'Entrenamiento individualizado adaptado a tus objetivos y condición física actual.',
        features: [
            'Valoración funcional inicial',
            'Programación personalizada',
            'Corrección técnica constante',
            'Seguimiento de progreso'
        ],
        icon: 'user'
    },
    'valoracion-funcional': {
        title: 'Valoración Funcional',
        subtitle: 'Análisis Completo',
        description: 'Evaluación exhaustiva de patrones de movimiento, fuerza y movilidad.',
        features: [
            'Test de movilidad articular',
            'Evaluación de patrones motores',
            'Análisis de fuerza relativa',
            'Informe detallado con recomendaciones'
        ],
        icon: 'clipboard'
    },
    'recuperacion-lesiones': {
        title: 'Recuperación de Lesiones',
        subtitle: 'Gestión del Dolor',
        description: 'Abordaje integral para la recuperación de lesiones musculoesqueléticas.',
        features: [
            'Evaluación inicial especializada',
            'Protocolos basados en evidencia',
            'Trabajo de fortalecimiento progresivo',
            'Colaboración con profesionales médicos'
        ],
        icon: 'heart'
    },
    'prevencion-lesiones': {
        title: 'Prevención de Lesiones',
        subtitle: 'Entrena sin Miedo',
        description: 'Programas específicos para reducir el riesgo de lesiones en tu práctica deportiva.',
        features: [
            'Identificación de factores de riesgo',
            'Trabajo de estabilidad y control motor',
            'Fortalecimiento de puntos débiles',
            'Educación en gestión de cargas'
        ],
        icon: 'shield'
    }
};

// Datos de Lesiones por Categoría
export const lesiones = {
    rodilla: {
        title: 'Lesiones de Rodilla',
        description: 'Especialización en readaptación de lesiones de rodilla.',
        subcategorias: {
            lca: {
                title: 'Ligamento Cruzado Anterior (LCA)',
                description: 'Readaptación post-cirugía y conservadora para lesiones de LCA.',
                content: {
                    intro: 'La rotura del LCA es una de las lesiones más comunes en deportistas. Nuestro protocolo de readaptación se basa en la evidencia científica más actual.',
                    fases: [
                        { title: 'Fase Inicial', desc: 'Control de inflamación y recuperación de rango articular.' },
                        { title: 'Fase de Fortalecimiento', desc: 'Trabajo progresivo de cuádriceps e isquiotibiales.' },
                        { title: 'Fase de Retorno', desc: 'Simulación de gestos deportivos y tests de alta.' }
                    ]
                }
            },
            menisco: {
                title: 'Lesiones de Menisco',
                description: 'Abordaje conservador y post-quirúrgico de lesiones meniscales.',
                content: {
                    intro: 'Las lesiones de menisco pueden gestionarse de forma conservadora o quirúrgica. Nuestro enfoque se adapta a cada caso.',
                    fases: [
                        { title: 'Fase de Protección', desc: 'Desensibilización y movilidad controlada.' },
                        { title: 'Fase de Carga', desc: 'Introducción progresiva de carga axial.' },
                        { title: 'Fase Funcional', desc: 'Trabajo específico de estabilidad y propiocepción.' }
                    ]
                }
            }
        }
    },
    hombro: {
        title: 'Lesiones de Hombro',
        description: 'Readaptación de patologías del complejo articular del hombro.',
        subcategorias: {
            'manguito-rotador': {
                title: 'Manguito Rotador',
                description: 'Tendinopatías y roturas del manguito rotador.',
                content: {
                    intro: 'El manguito rotador es una estructura fundamental para la estabilidad del hombro. Su readaptación requiere un trabajo meticuloso.',
                    fases: [
                        { title: 'Fase de Control', desc: 'Ejercicios isométricos y control escapular.' },
                        { title: 'Fase de Fuerza', desc: 'Fortalecimiento en rangos progresivos.' },
                        { title: 'Fase de Rendimiento', desc: 'Trabajo específico de lanzamiento o press.' }
                    ]
                }
            }
        }
    },
    tobillo: {
        title: 'Lesiones de Tobillo',
        description: 'Readaptación de esguinces e inestabilidad crónica de tobillo.',
        subcategorias: {
            esguince: {
                title: 'Esguince de Tobillo',
                description: 'Abordaje de esguinces agudos y crónicos.',
                content: {
                    intro: 'Los esguinces de tobillo son la lesión deportiva más frecuente. Un mal manejo inicial puede derivar en inestabilidad crónica.',
                    fases: [
                        { title: 'Fase Aguda', desc: 'Gestión de inflamación y carga temprana.' },
                        { title: 'Fase de Estabilidad', desc: 'Trabajo propioceptivo y de equilibrio.' },
                        { title: 'Fase de Impacto', desc: 'Pliometría y cambios de dirección.' }
                    ]
                }
            }
        }
    },
    espalda: {
        title: 'Lesiones de Espalda',
        description: 'Readaptación de lumbalgia, hernias y dolor crónico de espalda.',
        subcategorias: {
            lumbar: {
                title: 'Dolor Lumbar',
                description: 'Gestión del dolor lumbar inespecífico y patología discal.',
                content: {
                    intro: 'El dolor lumbar es la principal causa de discapacidad en el mundo. Nuestro enfoque biopsicosocial aborda todas las dimensiones del problema.',
                    fases: [
                        { title: 'Fase de Educación', desc: 'Desmitificar el dolor y reducir el miedo al movimiento.' },
                        { title: 'Fase de Movimiento', desc: 'Introducción de movimiento gradual y controlado.' },
                        { title: 'Fase de Fortalecimiento', desc: 'Trabajo de core y tolerancia a la carga.' }
                    ]
                }
            }
        }
    }
};

// Datos de Deportes
export const deportes = {
    futbol: {
        title: 'Fútbol',
        description: 'Readaptación específica para futbolistas: gestos de corte, sprint y contacto.',
        lesionesComunes: ['LCA', 'Isquiotibiales', 'Pubis']
    },
    running: {
        title: 'Running',
        description: 'Prevención y readaptación de lesiones típicas del corredor.',
        lesionesComunes: ['Fascitis plantar', 'Síndrome de la cinta iliotibial', 'Tendinopatía aquílea']
    },
    baloncesto: {
        title: 'Baloncesto',
        description: 'Readaptación post-lesión para baloncestistas: saltos, pivotes y contacto.',
        lesionesComunes: ['Esguince de tobillo', 'LCA', 'Tendinopatía rotuliana']
    },
    crossfit: {
        title: 'CrossFit',
        description: 'Abordaje de lesiones comunes en CrossFit y entrenamiento de alta intensidad.',
        lesionesComunes: ['Hombro', 'Lumbar', 'Muñeca']
    },
    tenis: {
        title: 'Tenis',
        description: 'Readaptación para tenistas: codo, hombro y extremidad inferior.',
        lesionesComunes: ['Epicondilitis', 'Hombro', 'Tobillo']
    },
    padel: {
        title: 'Pádel',
        description: 'Prevención y recuperación de lesiones específicas del pádel.',
        lesionesComunes: ['Epicondilitis', 'Lumbar', 'Rodilla']
    }
};
