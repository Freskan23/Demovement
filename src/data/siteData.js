// Datos de Servicios - Contenido Completo y Profesional
export const servicios = {
    'readaptacion-deportiva': {
        title: 'Readaptación Deportiva',
        subtitle: 'Vuelve a tu Deporte con Confianza',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'La readaptación deportiva es el proceso de recuperación activa de una lesión mediante el ejercicio físico. No se trata solo de rehabilitar, sino de prepararte para volver a tu deporte con la misma o mayor capacidad que antes.',
        longDescription: `
            En DE MOVEMENT, entendemos que una lesión deportiva no es solo un problema físico, sino también un desafío mental. 
            Nuestro programa de readaptación deportiva está diseñado para llevarte desde el momento de la lesión hasta tu retorno completo a la competición.
            
            Trabajamos con deportistas de todos los niveles: desde aficionados que quieren volver a correr sin dolor, 
            hasta profesionales que necesitan volver a la élite con garantías.
        `,
        metodologia: [
            {
                fase: 'Fase 1: Evaluación Inicial',
                duracion: 'Sesión 1',
                desc: 'Realizamos una evaluación exhaustiva: entrevista clínica, análisis de movimiento, tests de fuerza y movilidad. Identificamos exactamente dónde estás y hacia dónde vamos.',
                objetivos: ['Diagnóstico funcional', 'Establecer baseline de capacidades', 'Definir objetivos SMART']
            },
            {
                fase: 'Fase 2: Protección Activa',
                duracion: 'Semanas 1-4',
                desc: 'Iniciamos el trabajo respetando los tiempos biológicos de curación. Ejercicios de bajo impacto que mantienen la movilidad y evitan la atrofia muscular.',
                objetivos: ['Mantener rango articular', 'Activación muscular controlada', 'Gestión de la inflamación']
            },
            {
                fase: 'Fase 3: Fortalecimiento Progresivo',
                duracion: 'Semanas 4-12',
                desc: 'Aumentamos progresivamente la carga. Trabajo de fuerza específico para las estructuras afectadas y las compensaciones desarrolladas.',
                objetivos: ['Recuperar fuerza máxima', 'Mejorar resistencia muscular', 'Corregir desequilibrios']
            },
            {
                fase: 'Fase 4: Preparación Específica',
                duracion: 'Semanas 12-16',
                desc: 'Introducimos gestos deportivos específicos. Simulamos las demandas de tu deporte en un entorno controlado.',
                objetivos: ['Trabajo pliométrico', 'Cambios de dirección', 'Gestos técnicos adaptados']
            },
            {
                fase: 'Fase 5: Retorno al Deporte',
                duracion: 'Semanas 16+',
                desc: 'Tests de alta y transición gradual a la actividad deportiva completa. Seguimiento durante las primeras semanas de vuelta.',
                objetivos: ['Superar criterios de alta', 'Integración con entrenamiento de equipo', 'Prevención de recaídas']
            }
        ],
        beneficios: [
            'Retorno más rápido y seguro al deporte',
            'Menor riesgo de recaída (hasta un 60% menos)',
            'Recuperación de la confianza en tu cuerpo',
            'Mejora de rendimiento post-lesión',
            'Aprendizaje de estrategias de prevención'
        ],
        paraQuien: [
            'Deportistas lesionados que quieren volver a competir',
            'Personas post-operadas (LCA, menisco, hombro...)',
            'Atletas con lesiones recurrentes',
            'Deportistas que sienten miedo al volver a su actividad'
        ],
        precio: 'Desde 60€/sesión',
        duracionSesion: '60 minutos',
        icon: 'activity'
    },
    'entrenamiento-personal': {
        title: 'Entrenamiento Personal',
        subtitle: 'Tu Objetivo, Nuestra Metodología',
        heroImage: '/imagenes/testimonios/testimonio-video-juanjo.jpg',
        description: 'Sesiones individuales 1:1 diseñadas específicamente para ti. No es un plan genérico: es un programa construido a partir de tu evaluación, tus objetivos y tu disponibilidad.',
        longDescription: `
            El entrenamiento personal en DE MOVEMENT es diferente. No somos un gimnasio comercial donde te dan una tabla y te dejan solo.
            
            Cada sesión está supervisada al 100% por un profesional colegiado. Corregimos técnica en tiempo real, 
            ajustamos cargas según tu estado del día y te enseñamos a entender tu cuerpo.
            
            Trabajamos con personas que valoran la calidad sobre la cantidad, que prefieren entrenar bien 2-3 días a la semana 
            que mal 6 días. Si buscas resultados reales y duraderos, este es tu lugar.
        `,
        metodologia: [
            {
                fase: 'Valoración Inicial',
                duracion: 'Primera sesión',
                desc: 'Evaluamos tu punto de partida: composición corporal, patrones de movimiento, fuerza, movilidad y objetivos.',
                objetivos: ['Conocer tu historial', 'Establecer métricas base', 'Diseñar tu plan']
            },
            {
                fase: 'Fase de Aprendizaje',
                duracion: 'Semanas 1-4',
                desc: 'Te enseñamos los patrones básicos de movimiento con técnica impecable. Sentadilla, peso muerto, press, dominadas...',
                objetivos: ['Dominar técnica', 'Crear hábito de entrenamiento', 'Adaptación neuromuscular']
            },
            {
                fase: 'Fase de Desarrollo',
                duracion: 'Semanas 4-12',
                desc: 'Aumentamos progresivamente la intensidad y el volumen. Aquí es donde empiezas a ver cambios reales.',
                objetivos: ['Ganancia de fuerza', 'Mejora de composición corporal', 'Aumento de capacidad de trabajo']
            },
            {
                fase: 'Fase de Especialización',
                duracion: 'Semanas 12+',
                desc: 'Personalizamos aún más el programa según tus objetivos específicos y preferencias de entrenamiento.',
                objetivos: ['Objetivos avanzados', 'Autonomía progresiva', 'Mantenimiento a largo plazo']
            }
        ],
        beneficios: [
            'Atención 100% personalizada',
            'Corrección técnica en tiempo real',
            'Programación basada en evidencia',
            'Seguimiento de progreso con métricas',
            'Flexibilidad horaria',
            'Sin esperas ni aglomeraciones'
        ],
        paraQuien: [
            'Personas que nunca han entrenado y quieren empezar bien',
            'Deportistas que quieren mejorar su rendimiento',
            'Personas con poco tiempo que buscan eficiencia',
            'Gente que se ha lesionado entrenando mal'
        ],
        precio: 'Desde 50€/sesión',
        duracionSesion: '60 minutos',
        icon: 'user'
    },
    'valoracion-funcional': {
        title: 'Valoración Funcional',
        subtitle: 'Conoce tu Punto de Partida',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Una evaluación exhaustiva de 75 minutos donde analizamos cómo te mueves, cuánta fuerza tienes, qué limitaciones presentas y qué riesgos de lesión existen. El punto de partida de cualquier plan serio.',
        longDescription: `
            "Si no lo mides, no lo puedes mejorar". La valoración funcional es el primer paso obligatorio para cualquier proceso de readaptación o entrenamiento.
            
            En 75 minutos, evaluamos todos los aspectos que determinan tu capacidad física: movilidad articular, patrones de movimiento, 
            fuerza relativa, equilibrio, coordinación y capacidad cardiovascular básica.
            
            Al finalizar, recibes un informe detallado con tus resultados, puntos fuertes, áreas de mejora y recomendaciones específicas.
            Este informe es la base sobre la que construimos tu programa personalizado.
        `,
        contenido: [
            {
                test: 'Entrevista Clínica',
                duracion: '15 min',
                desc: 'Historial de lesiones, objetivos, estilo de vida, nivel de actividad actual.'
            },
            {
                test: 'Análisis Postural',
                duracion: '10 min',
                desc: 'Evaluación de la alineación corporal en bipedestación y sedestación.'
            },
            {
                test: 'Movilidad Articular',
                duracion: '15 min',
                desc: 'Rangos de movimiento de tobillo, cadera, columna y hombro.'
            },
            {
                test: 'Patrones de Movimiento',
                duracion: '15 min',
                desc: 'Sentadilla, bisagra de cadera, zancada, empuje, tracción.'
            },
            {
                test: 'Tests de Fuerza',
                duracion: '15 min',
                desc: 'Fuerza de agarre, capacidad de salto, tests isométricos específicos.'
            },
            {
                test: 'Conclusiones y Plan',
                duracion: '5 min',
                desc: 'Resumen verbal de hallazgos y próximos pasos.'
            }
        ],
        entregables: [
            'Informe PDF detallado (8-10 páginas)',
            'Gráficos comparativos con población de referencia',
            'Identificación de factores de riesgo',
            'Recomendaciones específicas de trabajo',
            'Propuesta de programa personalizado'
        ],
        paraQuien: [
            'Cualquier persona que quiera empezar a entrenar',
            'Deportistas que quieren conocer sus debilidades',
            'Personas con dolores inespecíficos',
            'Atletas que buscan prevenir lesiones'
        ],
        precio: '90€',
        duracionSesion: '75 minutos',
        icon: 'clipboard'
    },
    'recuperacion-lesiones': {
        title: 'Recuperación de Lesiones',
        subtitle: 'El Movimiento como Medicina',
        heroImage: '/imagenes/testimonios/testimonio-video-mamen.jpg',
        description: 'Abordaje integral de lesiones musculoesqueléticas mediante el ejercicio terapéutico. Desde lumbalgias hasta tendinopatías, el movimiento controlado es tu mejor aliado.',
        longDescription: `
            El paradigma del reposo absoluto ha quedado obsoleto. La ciencia actual nos dice que el movimiento controlado 
            acelera la recuperación, reduce el dolor y previene la cronicidad.
            
            En DE MOVEMENT, trabajamos lesiones de todo tipo: lumbalgias, cervicalgias, tendinopatías (rotuliana, aquílea, codo), 
            dolor de hombro, fascitis plantar... Nuestro enfoque es activo: te enseñamos a moverte de forma que tu cuerpo se cure.
            
            Colaboramos con fisioterapeutas, médicos y traumatólogos. No sustituimos la atención sanitaria, la complementamos 
            ofreciendo la parte activa del proceso de recuperación.
        `,
        lesionesComunes: [
            {
                nombre: 'Lumbalgia / Dolor de Espalda',
                desc: 'Desensibilización, fortalecimiento de core, educación en dolor.'
            },
            {
                nombre: 'Tendinopatías',
                desc: 'Protocolos de carga progresiva: isometría, HSR, pliometría.'
            },
            {
                nombre: 'Dolor de Hombro',
                desc: 'Control escapular, fortalecimiento de manguito rotador.'
            },
            {
                nombre: 'Fascitis Plantar',
                desc: 'Trabajo de flexores del pie, gestión de carga en carrera.'
            },
            {
                nombre: 'Síndrome Patelofemoral',
                desc: 'Fortalecimiento de cuádriceps, control de rodilla.'
            }
        ],
        diferenciador: [
            'No hacemos terapia pasiva: tú eres el protagonista',
            'Enfoque biopsicosocial del dolor',
            'Educación para que entiendas tu lesión',
            'Colaboración con tu equipo sanitario',
            'Objetivos funcionales, no solo alivio del dolor'
        ],
        precio: 'Desde 55€/sesión',
        duracionSesion: '60 minutos',
        icon: 'heart'
    },
    'prevencion-lesiones': {
        title: 'Prevención de Lesiones',
        subtitle: 'La Mejor Lesión es la que No Ocurre',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Programas específicos para reducir el riesgo de lesiones en tu práctica deportiva. Identificamos tus factores de riesgo y los corregimos antes de que se conviertan en problema.',
        longDescription: `
            ¿Sabías que hasta el 70% de las lesiones deportivas son prevenibles? El problema es que la mayoría de deportistas 
            solo se preocupan de la prevención cuando ya se han lesionado.
            
            Nuestro programa de prevención analiza tus factores de riesgo específicos: desequilibrios musculares, 
            déficits de movilidad, patrones de movimiento incorrectos, mala gestión de cargas...
            
            Diseñamos un programa complementario a tu entrenamiento habitual que te hará más resistente y menos propenso a lesiones.
            Es especialmente útil para deportistas que han tenido lesiones recurrentes o que están aumentando su volumen de entrenamiento.
        `,
        factoresRiesgo: [
            'Desequilibrios musculares (cuádriceps/isquio, aductores/abductores)',
            'Déficits de movilidad articular',
            'Debilidad del core estabilizador',
            'Mala técnica de carrera o de gestos deportivos',
            'Incrementos bruscos de carga de entrenamiento',
            'Historial previo de lesiones'
        ],
        programa: [
            {
                componente: 'Valoración de Riesgo',
                desc: 'Tests específicos para identificar tus puntos débiles.'
            },
            {
                componente: 'Trabajo de Movilidad',
                desc: 'Rutinas específicas para las articulaciones más comprometidas.'
            },
            {
                componente: 'Fortalecimiento Preventivo',
                desc: 'Ejercicios para equilibrar musculatura y proteger articulaciones.'
            },
            {
                componente: 'Gestión de Cargas',
                desc: 'Te enseñamos a planificar tus entrenamientos para no pasarte.'
            }
        ],
        paraQuien: [
            'Corredores que aumentan kilometraje',
            'Deportistas de equipo (fútbol, baloncesto, pádel)',
            'Personas con historial de lesiones recurrentes',
            'Atletas en pretemporada'
        ],
        precio: 'Desde 50€/sesión',
        duracionSesion: '60 minutos',
        icon: 'shield'
    }
};

// Datos de Lesiones - Contenido Clínico Completo
export const lesiones = {
    rodilla: {
        title: 'Lesiones de Rodilla',
        description: 'La rodilla es una de las articulaciones más complejas y lesionadas del cuerpo. Nuestra especialización en readaptación de rodilla abarca desde lesiones ligamentosas hasta problemas degenerativos.',
        intro: 'La rodilla soporta entre 2 y 4 veces tu peso corporal en actividades cotidianas, y hasta 8 veces en deportes de impacto. Esta demanda la hace especialmente vulnerable a lesiones.',
        subcategorias: {
            lca: {
                title: 'Ligamento Cruzado Anterior (LCA)',
                description: 'Readaptación post-quirúrgica y conservadora para lesiones del LCA. Protocolos actualizados con la evidencia más reciente.',
                content: {
                    intro: 'La rotura del LCA es una de las lesiones más temidas por los deportistas. Afecta principalmente a deportes con cambios de dirección, saltos y contacto: fútbol, baloncesto, esquí, pádel... La buena noticia es que, con un proceso de readaptación adecuado, la mayoría de deportistas pueden volver a su nivel previo de actividad.',
                    estadisticas: [
                        '85-90% de los deportistas vuelven a hacer deporte después de una reconstrucción de LCA',
                        'El riesgo de re-rotura se reduce un 51% por cada mes que se retrasa el retorno al deporte (hasta los 9 meses)',
                        'Los programas de prevención pueden reducir el riesgo de lesión de LCA hasta un 50%'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Protección (Semanas 0-6)',
                            desc: 'Control de inflamación, recuperación del rango de movimiento completo, activación del cuádriceps. Objetivo: extensión completa y flexión >120°.',
                            ejercicios: ['Cuádriceps isométricos', 'Bombeos de tobillo', 'Deslizamientos de talón', 'Elevaciones de pierna recta']
                        },
                        {
                            title: 'Fase 2: Control (Semanas 6-12)',
                            desc: 'Normalización de la marcha, fortalecimiento progresivo, inicio de trabajo propioceptivo.',
                            ejercicios: ['Sentadillas parciales', 'Prensa de piernas', 'Step-ups', 'Equilibrio monopodal']
                        },
                        {
                            title: 'Fase 3: Fuerza (Semanas 12-20)',
                            desc: 'Desarrollo de fuerza máxima, simetría entre piernas, inicio de carrera en línea recta.',
                            ejercicios: ['Sentadilla completa', 'Peso muerto', 'Extensiones de cuádriceps', 'Curl de isquiotibiales']
                        },
                        {
                            title: 'Fase 4: Potencia (Semanas 20-28)',
                            desc: 'Trabajo pliométrico, cambios de dirección controlados, gestos deportivos adaptados.',
                            ejercicios: ['Saltos bipodales', 'Saltos unipodales', 'Cortes a 45° y 90°', 'Trabajo de agilidad']
                        },
                        {
                            title: 'Fase 5: Retorno (Semanas 28+)',
                            desc: 'Tests de alta, integración con entrenamiento de equipo, seguimiento de las primeras semanas.',
                            ejercicios: ['Entrenamiento específico de deporte', 'Partidos adaptados', 'Tests funcionales de alta']
                        }
                    ],
                    criteriosAlta: [
                        'Fuerza de cuádriceps >90% de la pierna sana',
                        'Fuerza de isquiotibiales >90% de la pierna sana',
                        'Índice de simetría en salto >90%',
                        'Superar batería de tests de cambio de dirección',
                        'Confianza psicológica en la rodilla'
                    ]
                }
            },
            menisco: {
                title: 'Lesiones de Menisco',
                description: 'Abordaje conservador y post-quirúrgico de lesiones meniscales. Diferenciamos entre meniscectomía parcial y reparación meniscal.',
                content: {
                    intro: 'Los meniscos son estructuras de fibrocartílago que actúan como amortiguadores entre el fémur y la tibia. Las lesiones meniscales son muy comunes, especialmente en deportistas y en población mayor de 40 años.',
                    tipos: [
                        'Rotura degenerativa: más común en >40 años, a menudo responde bien al tratamiento conservador.',
                        'Rotura traumática: típica de deportistas jóvenes, puede requerir cirugía.',
                        'Meniscectomía parcial: se retira la parte dañada, recuperación más rápida.',
                        'Reparación meniscal: se sutura el menisco, recuperación más lenta pero mejor pronóstico a largo plazo.'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Desensibilización',
                            desc: 'Reducir el dolor y la inflamación mediante movimiento controlado y ejercicios de bajo impacto.'
                        },
                        {
                            title: 'Fase 2: Movilidad y Carga',
                            desc: 'Recuperar el rango de movimiento completo e introducir carga progresiva.'
                        },
                        {
                            title: 'Fase 3: Fortalecimiento',
                            desc: 'Desarrollo de fuerza de cuádriceps, isquiotibiales y estabilizadores de cadera.'
                        },
                        {
                            title: 'Fase 4: Funcionalidad',
                            desc: 'Trabajo de equilibrio, propiocepción y gestos específicos del deporte.'
                        }
                    ]
                }
            }
        }
    },
    hombro: {
        title: 'Lesiones de Hombro',
        description: 'El hombro es la articulación más móvil del cuerpo, lo que la hace especialmente vulnerable. Nos especializamos en tendinopatías, inestabilidades y dolor de hombro inespecífico.',
        intro: 'El hombro sacrifica estabilidad por movilidad. Esta característica lo hace ideal para movimientos como lanzar o nadar, pero también más propenso a lesiones.',
        subcategorias: {
            'manguito-rotador': {
                title: 'Manguito Rotador',
                description: 'Tendinopatías, roturas parciales y completas del manguito rotador. Tratamiento conservador y post-quirúrgico.',
                content: {
                    intro: 'El manguito rotador está formado por cuatro músculos (supraespinoso, infraespinoso, redondo menor y subescapular) que estabilizan el hombro. Las tendinopatías de manguito son muy comunes, especialmente el supraespinoso.',
                    causas: [
                        'Movimientos repetitivos sobre la cabeza (voleibol, natación, tenis)',
                        'Debilidad de la musculatura escapular',
                        'Mala postura mantenida',
                        'Desequilibrio entre músculos anteriores y posteriores del hombro'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Control del Dolor',
                            desc: 'Ejercicios isométricos, modificación de actividad, educación. Evitar movimientos que provocan dolor.'
                        },
                        {
                            title: 'Fase 2: Activación Escapular',
                            desc: 'Trabajo de estabilizadores de escápula (trapecio, serrato, romboides). Fundamental para la mecánica del hombro.'
                        },
                        {
                            title: 'Fase 3: Fortalecimiento en Rango',
                            desc: 'Ejercicios de rotadores en rangos progresivos. Trabajo excéntrico y concéntrico.'
                        },
                        {
                            title: 'Fase 4: Integración',
                            desc: 'Ejercicios de empuje y tracción, trabajo sobre la cabeza controlado, gestos deportivos.'
                        }
                    ],
                    ejerciciosClave: [
                        'Rotación externa/interna con banda',
                        'Face pulls',
                        'Retracción escapular',
                        'YTW en banco inclinado',
                        'Push-up plus'
                    ]
                }
            }
        }
    },
    tobillo: {
        title: 'Lesiones de Tobillo',
        description: 'El esguince de tobillo es la lesión deportiva más frecuente. Nuestro enfoque va más allá del reposo: prevenimos la inestabilidad crónica que afecta al 40% de los esguinces mal tratados.',
        intro: 'Cada día se producen miles de esguinces de tobillo. El problema es que la mayoría se tratan solo con reposo y hielo, sin readaptación activa, lo que lleva a recaídas constantes.',
        subcategorias: {
            esguince: {
                title: 'Esguince de Tobillo',
                description: 'Abordaje de esguinces agudos y crónicos. Prevención de la inestabilidad crónica de tobillo.',
                content: {
                    intro: 'El esguince de tobillo afecta principalmente al ligamento lateral externo (peroneoastragalino anterior). Un mal manejo inicial puede derivar en inestabilidad crónica: esa sensación de que el tobillo "falla" al pisar en terreno irregular.',
                    mitos: [
                        'MITO: "Solo necesitas hielo y reposo" → REALIDAD: La carga temprana acelera la recuperación.',
                        'MITO: "Ya no duele, estoy curado" → REALIDAD: Pueden quedar déficits de propiocepción y fuerza.',
                        'MITO: "Es solo un esguince" → REALIDAD: Un esguince mal tratado predispone a más esguinces.'
                    ],
                    fases: [
                        {
                            title: 'Fase Aguda (0-7 días)',
                            desc: 'Protección relativa, carga temprana según tolerancia, movilidad activa. El reposo absoluto NO está recomendado.'
                        },
                        {
                            title: 'Fase Subaguda (1-3 semanas)',
                            desc: 'Normalización de la marcha, trabajo de movilidad, inicio de fortalecimiento.'
                        },
                        {
                            title: 'Fase de Estabilidad (3-6 semanas)',
                            desc: 'Entrenamiento propioceptivo intensivo: superficies inestables, ojos cerrados, perturbaciones.'
                        },
                        {
                            title: 'Fase de Impacto (6+ semanas)',
                            desc: 'Pliometría, carrera, cambios de dirección, retorno progresivo al deporte.'
                        }
                    ]
                }
            }
        }
    },
    espalda: {
        title: 'Lesiones de Espalda',
        description: 'El dolor de espalda afecta al 80% de la población en algún momento de su vida. Nuestro enfoque biopsicosocial aborda no solo el dolor, sino también los factores que lo perpetúan.',
        intro: 'La lumbalgia es la primera causa de discapacidad en el mundo. Sin embargo, la mayoría de casos no tienen una causa estructural grave y responden muy bien al movimiento.',
        subcategorias: {
            lumbar: {
                title: 'Dolor Lumbar',
                description: 'Gestión del dolor lumbar inespecífico, hernias discales y ciáticas. Enfoque activo y educación en dolor.',
                content: {
                    intro: 'El dolor lumbar inespecífico representa el 90% de los casos de dolor de espalda. Paradójicamente, las pruebas de imagen (resonancias, TACs) rara vez aportan información útil y pueden incluso empeorar el pronóstico al generar miedo.',
                    claves: [
                        'El dolor no es igual a daño: tu espalda es fuerte aunque duela.',
                        'El movimiento es la mejor medicina: evitar moverse empeora el dolor.',
                        'Los factores psicosociales son tan importantes como los físicos.',
                        'Las hernias discales son comunes en personas SIN dolor (hallazgos incidentales).'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Educación',
                            desc: 'Desmitificamos el dolor de espalda. Reducimos el miedo al movimiento. Entendemos qué NO es peligroso.'
                        },
                        {
                            title: 'Fase 2: Movimiento Gradual',
                            desc: 'Reintroducimos movimientos temidos de forma gradual y segura. Caminatas, extensiones, rotaciones.'
                        },
                        {
                            title: 'Fase 3: Fortalecimiento',
                            desc: 'Trabajo de core, peso muerto, sentadillas. Tu espalda se adapta a la carga y se vuelve más resistente.'
                        },
                        {
                            title: 'Fase 4: Autogestión',
                            desc: 'Te damos las herramientas para gestionar brotes futuros. Porque sí, pueden volver, pero ya sabrás qué hacer.'
                        }
                    ]
                }
            }
        }
    }
};

// Datos de Deportes - Contenido Específico
export const deportes = {
    futbol: {
        title: 'Fútbol',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Readaptación específica para futbolistas: sprints, cambios de dirección, golpeos y contacto. Desde categorías base hasta profesionales.',
        intro: 'El fútbol es el deporte con más lesiones totales debido a su popularidad. Las más comunes: lesiones de isquiotibiales, esguinces de tobillo y lesiones de LCA.',
        lesionesComunes: [
            { nombre: 'Lesión de Isquiotibiales', prevalencia: '17% de todas las lesiones', tiempoRecuperacion: '2-8 semanas' },
            { nombre: 'Esguince de Tobillo', prevalencia: '14% de todas las lesiones', tiempoRecuperacion: '2-6 semanas' },
            { nombre: 'Lesión de LCA', prevalencia: '4% de todas las lesiones', tiempoRecuperacion: '6-12 meses' },
            { nombre: 'Pubalgia', prevalencia: '8% de todas las lesiones', tiempoRecuperacion: '4-16 semanas' }
        ],
        programaPrevencion: [
            'Programa FIFA 11+: reduce lesiones un 30%',
            'Trabajo de isquiotibiales nórdico',
            'Entrenamiento de cambios de dirección',
            'Fortalecimiento de core y cadera'
        ]
    },
    running: {
        title: 'Running',
        heroImage: '/imagenes/testimonios/testimonio-video-mamen.jpg',
        description: 'Prevención y readaptación de lesiones típicas del corredor. Análisis de pisada, gestión de cargas y fortalecimiento específico.',
        intro: 'Entre el 30-50% de los corredores sufren al menos una lesión al año. La mayoría son lesiones por sobreuso que se pueden prevenir con una buena gestión de cargas.',
        lesionesComunes: [
            { nombre: 'Síndrome de la Cintilla Iliotibial', prevalencia: '12% de corredores', tiempoRecuperacion: '4-8 semanas' },
            { nombre: 'Fascitis Plantar', prevalencia: '10% de corredores', tiempoRecuperacion: '6-18 meses' },
            { nombre: 'Tendinopatía Aquílea', prevalencia: '11% de corredores', tiempoRecuperacion: '3-6 meses' },
            { nombre: 'Síndrome Patelofemoral', prevalencia: '17% de corredores', tiempoRecuperacion: '4-12 semanas' }
        ],
        programaPrevencion: [
            'Incrementos de carga máximo 10% semanal',
            'Trabajo de fuerza 2x por semana',
            'Ejercicios de pliometría ligera',
            'Trabajo de cadera y glúteos'
        ]
    },
    baloncesto: {
        title: 'Baloncesto',
        description: 'Readaptación post-lesión para jugadores de baloncesto: saltos, recepciones, pivotes y contacto.',
        lesionesComunes: [
            { nombre: 'Esguince de Tobillo', prevalencia: '25% de todas las lesiones' },
            { nombre: 'Lesión de LCA', prevalencia: '5% de todas las lesiones' },
            { nombre: 'Tendinopatía Rotuliana', prevalencia: '15% de todas las lesiones' }
        ]
    },
    crossfit: {
        title: 'CrossFit',
        description: 'Abordaje de lesiones comunes en CrossFit: hombro, lumbar y técnica de levantamientos olímpicos.',
        lesionesComunes: [
            { nombre: 'Dolor de Hombro', prevalencia: '25% de practicantes' },
            { nombre: 'Dolor Lumbar', prevalencia: '20% de practicantes' },
            { nombre: 'Lesiones de Muñeca', prevalencia: '10% de practicantes' }
        ]
    },
    tenis: {
        title: 'Tenis',
        description: 'Readaptación para tenistas: codo de tenista, hombro y extremidad inferior.',
        lesionesComunes: [
            { nombre: 'Epicondilitis (Codo de Tenista)', prevalencia: '40% de tenistas recreativos' },
            { nombre: 'Dolor de Hombro', prevalencia: '24% de tenistas' },
            { nombre: 'Lumbalgia', prevalencia: '15% de tenistas' }
        ]
    },
    padel: {
        title: 'Pádel',
        description: 'Prevención y recuperación de lesiones específicas del pádel: el deporte de moda con sus patologías particulares.',
        lesionesComunes: [
            { nombre: 'Epicondilitis', prevalencia: '35% de jugadores' },
            { nombre: 'Lumbalgia', prevalencia: '25% de jugadores' },
            { nombre: 'Lesiones de Rodilla', prevalencia: '15% de jugadores' }
        ]
    }
};
