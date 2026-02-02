// Datos de Servicios - Contenido Completo y Profesional
export const servicios = {
    'readaptacion-lesiones': {
        title: 'Readaptación de Lesiones',
        subtitle: 'Vuelve a Moverte Sin Dolor',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Proceso individualizado para personas con dolor o lesión. Recupera tu calidad de vida mediante el ejercicio guiado.',
        longDescription: `
            En DE MOVEMENT, entendemos que el dolor no es solo físico. Trabajamos contigo para superar el miedo al movimiento y recuperar tu confianza.
            
            No sustituimos a tu médico o fisio, colaboramos con ellos. Nosotros nos encargamos de la "fase activa": enseñarte a moverte de forma segura para que tu cuerpo se fortalezca y deje de doler.
        `,
        metodologia: [
            {
                fase: 'Paso 1: Entender',
                duracion: 'Sesión 1',
                desc: 'Analizamos cómo te mueves y qué te limita. Escuchamos tu historia y definimos objetivos reales.',
                objetivos: ['Valoración funcional', 'Objetivos personales', 'Plan de acción']
            },
            {
                fase: 'Paso 2: Activar',
                duracion: 'Inicial',
                desc: 'Ejercicios suaves y controlados para recuperar la confianza en tu cuerpo sin despertar dolor.',
                objetivos: ['Movilidad segura', 'Activación muscular', 'Reducción de miedo']
            },
            {
                fase: 'Paso 3: Fortalecer',
                duracion: 'Progresión',
                desc: 'Aumentamos la intensidad poco a poco. Tu cuerpo se adapta y se vuelve más resistente.',
                objetivos: ['Ganancia de fuerza', 'Mejorar capacidad', 'Vida diaria sin dolor']
            },
            {
                fase: 'Paso 4: Autonomía',
                duracion: 'Mantenimiento',
                desc: 'Te damos herramientas para que mantengas los resultados y sepas gestionar tu cuerpo a largo plazo.',
                objetivos: ['Hábitos saludables', 'Prevención', 'Libertad de movimiento']
            }
        ],
        beneficios: [
            'Recupera tu vida diaria sin limitaciones',
            'Pierde el miedo a moverte',
            'Atención 1:1 en espacio privado',
            'Profesionales que te escuchan y entienden',
            'Coordianción con tu equipo de salud'
        ],
        paraQuien: [
            'Mujeres y hombres con dolor de espalda recurrente',
            'Personas que han terminado la "rehabilitación" pero no están bien',
            'Gente que quiere evitar operarse o acaba de hacerlo',
            'Quienes buscan un entorno seguro y profesional'
        ],
        precio: 'Desde 60€/sesión',
        duracionSesion: '60 minutos',
        icon: 'heart'
    },
    'entrenamiento-salud': {
        title: 'Entrenamiento y Salud',
        subtitle: 'Invierte en tu Calidad de Vida',
        heroImage: '/imagenes/testimonios/testimonio-video-juanjo.jpg',
        description: 'Entrenamiento personal o en pareja orientado a la salud. Para quienes huyen de los gimnasios tradicionales y buscan un trato humano.',
        longDescription: `
            ¿Los gimnasios te parecen hostiles? ¿Te da miedo hacerte daño entrenando? No estás solo/a.
            
            Nuestro entrenamiento de salud está diseñado para personas reales. Sin competición, sin juicios y sin gritos. 
            Solo tú, tu entrenador y un plan adaptado a tu ritmo, tus necesidades y tu vida.
        `,
        metodologia: [
            {
                fase: 'Valoración',
                duracion: 'Inicio',
                desc: 'Conocemos tu punto de partida y tus necesidades específicas (osteoporosis, menopausia, falta de tiempo...).',
                objetivos: ['Salud ósea', 'Metabolismo', 'Bienestar general']
            },
            {
                fase: 'Adaptación',
                duracion: 'Primeras semanas',
                desc: 'Aprendes a ejercitarte con técnica perfecta. Te sentirás cómodo/a y seguro/a desde el primer día.',
                objetivos: ['Técnica correcta', 'Seguridad', 'Hábito']
            },
            {
                fase: 'Progreso',
                duracion: 'Continuo',
                desc: 'Mejoras tu fuerza y resistencia. Te sentirás con más energía y menos dolores cotidianos.',
                objetivos: ['Más energía', 'Menos fatiga', 'Cuerpo fuerte']
            }
        ],
        beneficios: [
            'Espacio privado y tranquilo',
            'Entrenadores empáticos y cualificados',
            'Adaptado a patologías (osteoporosis, embarazo...)',
            'Horarios flexibles',
            'Ambiente seguro y acogedor'
        ],
        paraQuien: [
            'Mujeres +40 en perimenopausia/menopausia',
            'Personas sedentarias que quieren empezar a cuidarse',
            'Embarazo y postparto',
            'Tercera edad que quiere mantener independencia'
        ],
        precio: 'Desde 50€/sesión',
        duracionSesion: '60 minutos',
        icon: 'user'
    },
    'grupos-reducidos': {
        title: 'Grupos Reducidos',
        subtitle: 'Entrena en Compañía, con Atención Personal',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Máximo 5 personas. Rutina individualizada para cada uno, pero compartiendo energía. Económico, divertido y efectivo.',
        longDescription: `
            La opción perfecta si buscas la calidad del entrenamiento personal con un coste menor y un ambiente más social.
            
            Aunque sea en grupo, TU plan es único. No hacemos "la clase de las 10". Cada persona hace SU rutina, supervisada 
            en todo momento por el entrenador.
        `,
        contenido: [
            {
                test: 'Individualización',
                duracion: 'Siempre',
                desc: 'Tu tabla de ejercicios es solo tuya, adaptada a tus dolencias y nivel.'
            },
            {
                test: 'Supervisión',
                duracion: 'Constante',
                desc: 'El entrenador corrige, motiva y adapta los ejercicios sobre la marcha.'
            },
            {
                test: 'Comunidad',
                duracion: 'Social',
                desc: 'Entrena con personas afines a ti, en un ambiente relajado y de apoyo mutuo.'
            }
        ],
        entregables: [
            'Plan mensual personalizado',
            'Evaluación trimestral de progreso',
            'Acceso a comunidad',
            'Corrección técnica constante'
        ],
        paraQuien: [
            'Quienes buscan una opción más económica',
            'Personas que les gusta entrenar acompañadas',
            'Mantenimiento tras una readaptación',
            'Mejora de condición física general'
        ],
        precio: 'Consultar tarifas',
        duracionSesion: '60 minutos',
        icon: 'users'
    },
    'valoracion-inicial': {
        title: 'Valoración Inicial',
        subtitle: 'El Primer Paso es Conocerte',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Imprescindible para empezar. 75 minutos para evaluar tu historia, tu cuerpo y tus objetivos. Sin esto, no entrenamos.',
        longDescription: `
            En DE MOVEMENT no dejamos nada al azar. Antes de sudar, necesitamos entender.
            
            Esta sesión es una conversación profunda sobre tu salud y una evaluación física detallada pero suave. 
            Queremos saber qué te duele, qué te preocupa y qué quieres conseguir.
        `,
        contenido: [
            {
                test: 'Tu Historia',
                duracion: '30 min',
                desc: 'Escuchamos tu trayectoria, lesiones previas y experiencias pasadas.'
            },
            {
                test: 'Tu Cuerpo',
                duracion: '30 min',
                desc: 'Tests de movilidad y fuerza adaptados a ti. Sin dolor, sin forzar.'
            },
            {
                test: 'Tu Plan',
                duracion: '15 min',
                desc: 'Te explicamos qué hemos visto y proponemos el camino a seguir.'
            }
        ],
        entregables: [
            'Informe de estado inicial',
            'Propuesta de trabajo clara',
            'Resolución de dudas y miedos',
            'Hoja de ruta personalizada'
        ],
        paraQuien: [
            'Todo el que quiera empezar en DE MOVEMENT',
            'Obligatorio para cualquier servicio'
        ],
        precio: '90€',
        duracionSesion: '75 minutos',
        icon: 'clipboard'
    }
};

// Datos de Lesiones - Contenido Clínico Completo
// Datos de Lesiones - Contenido Específico
export const lesiones = {
    espalda: {
        title: 'Espalda y Cuello',
        description: 'Dolor lumbar, cervical, hernias y molestias crónicas. Enfoque seguro para perder el miedo a moverse.',
        intro: 'El 80% de la población tendrá dolor de espalda alguna vez. En DE MOVEMENT te ayudamos a que el dolor no controle tu vida.',
        stats: [
            { label: 'Incidencia', value: '80%', text: 'de la población sufrirá dolor lumbar' },
            { label: 'Eficacia', value: '90%', text: 'mejoran con tratamiento activo' }
        ],
        highlights: [
            'Especialistas en Hernia Discal',
            'Protocolos de Descompresión Activa',
            'Prevención de Recaídas'
        ],
        subcategorias: {
            dolor_lumbar: {
                title: 'Dolor Lumbar',
                description: 'Lumbalgia, ciática y rigidez. Aprende a moverte sin miedo.',
                content: {
                    intro: 'El dolor lumbar suele venir acompañado de miedo: "me voy a romper", "tengo la espalda débil". Nada más lejos de la realidad. Tu espalda es fuerte y robusta, y necesita movimiento para estar sana.',
                    estadisticas: [
                        'El 80% de la población sufrirá dolor lumbar en algún momento de su vida',
                        'El reposo prolongado aumenta el riesgo de cronificación en un 50%',
                        'El ejercicio terapéutico reduce el dolor en un 70-80% de los casos',
                        'Solo el 1-2% de lumbalgias requieren cirugía'
                    ],
                    mitos: [
                        'MITO: "El reposo en cama es lo mejor" → REALIDAD: El movimiento acelera la recuperación',
                        'MITO: "Mi espalda está dañada" → REALIDAD: El dolor no significa daño estructural',
                        'MITO: "No puedo agacharme" → REALIDAD: Podemos enseñarte a hacerlo de forma segura',
                        'MITO: "Necesito una resonancia" → REALIDAD: Muchas veces no aporta información útil'
                    ],
                    claves: [
                        'Reducir el miedo al movimiento (kinesiofobia)',
                        'Fortalecer el core sin hacer abdominales tradicionales',
                        'Aprender patrones de movimiento seguros',
                        'Gestión del estrés y factores psicosociales',
                        'Progresión gradual hacia actividades de alta carga'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Confianza y Movilidad',
                            desc: 'El objetivo es reducir el miedo al movimiento. Trabajamos la movilidad pélvica y respiración sin dolor.',
                            ejemplos: ['Gato-Camello suave', 'Respiración diafragmática', 'Movilidad de cadera en suelo']
                        },
                        {
                            title: 'Fase 2: Estabilidad Central (Core)',
                            desc: 'Activación de la musculatura profunda que da soporte a tu columna. No se trata de hacer "abdominales", sino de generar estabilidad.',
                            ejemplos: ['Dead Bug', 'Plancha modificada', 'Bird-Dog']
                        },
                        {
                            title: 'Fase 3: Fuerza y Carga',
                            desc: 'Tu espalda necesita ser fuerte para soportar tu vida diaria. Introducimos peso de forma muy controlada.',
                            ejemplos: ['Peso muerto con kettlebell', 'Sentadilla goblet', 'Transporte de carga (Farm Walk)']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Mantenerse activo: caminar es tu mejor aliado.',
                            'Cambiar de postura frecuentemente si trabajas sentado.',
                            'Ejercicios de movilidad suave al levantarte.',
                            'Aplicar calor si sientes mucha tensión muscular.'
                        ],
                        no: [
                            'Reposo absoluto en cama (retrasará tu curación).',
                            'Evitar agacharte por miedo (te enseñamos cómo hacerlo bien).',
                            'Usar fajas lumbares todo el día (debilitan tu musculatura).',
                            'Esperar que el dolor desaparezca al 100% para empezar a moverte.'
                        ]
                    },
                    limites: 'Empezamos sin dolor o con molestia muy leve (<3/10). No buscamos "sufrir" para mejorar.',
                    criteriosAlta: [
                        'Dolor en reposo <2/10',
                        'Capacidad de levantar objetos del suelo sin miedo',
                        'Sentarse más de 1 hora sin molestias',
                        'Caminar 30+ minutos sin limitaciones',
                        'Retomar actividades deportivas'
                    ],
                    ejerciciosClave: [
                        'Dead Bug',
                        'Bird Dog',
                        'Plancha Frontal',
                        'Peso Muerto',
                        'Sentadilla Goblet',
                        'Farmer Walk'
                    ],
                    cta: 'Hablar con especialista en espalda',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/espalda_antes.png',
                        after: '/imagenes/lesiones/visualizer/espalda_despues.png'
                    }
                }
            },
            hernia_discal: {
                title: 'Hernia Discal',
                description: 'Diagnóstico de hernia o protusión. Evita la cirugía con ejercicio.',
                content: {
                    intro: 'Tener una hernia discal NO es una sentencia de por vida. De hecho, muchas hernias se reabsorben solas con el tiempo. Lo importante es tener una musculatura fuerte que proteja ese disco.',
                    estadisticas: [
                        'El 30-40% de personas sin dolor tienen hernias en resonancia',
                        'El 70-90% de hernias mejoran con tratamiento conservador',
                        'Las hernias pueden reabsorberse en 6-18 meses',
                        'Solo el 5-10% requieren cirugía'
                    ],
                    mitos: [
                        'MITO: "Hernia = cirugía obligatoria" → REALIDAD: El 90% mejora sin cirugía',
                        'MITO: "No puedo hacer ejercicio" → REALIDAD: El ejercicio es el mejor tratamiento',
                        'MITO: "La hernia se saldrá más" → REALIDAD: El movimiento controlado es seguro',
                        'MITO: "Siempre tendré dolor" → REALIDAD: La mayoría recupera vida normal'
                    ],
                    claves: [
                        'Evitar compresión excesiva en fase aguda',
                        'Fortalecer glúteos y core profundo',
                        'Aprender bisagra de cadera correcta',
                        'Gestión de cargas progresiva',
                        'Control de dolor irradiado (ciática)'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Descompresión y Alivio',
                            desc: 'Buscaremos posiciones que alivien la presión sobre el nervio y reduzcan la irradiación (ciática).',
                            ejemplos: ['Extensiones McKenzie (si tolera)', 'Tracciones suaves', 'Movilidad neurodinámica']
                        },
                        {
                            title: 'Fase 2: Fortalecimiento Isométrico',
                            desc: 'Generar tensión muscular sin mover la columna para proteger la zona lesionada.',
                            ejemplos: ['Plancha lateral isométrica', 'Press Pallof', 'Puente de glúteo']
                        },
                        {
                            title: 'Fase 3: Integración de Movimiento',
                            desc: 'Aprendes a disociar el movimiento de cadera del de columna. "Bisagra de cadera" es la clave.',
                            ejemplos: ['Bisagra de cadera en pared', 'Peso muerto rumano parcial']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Seguir las pautas de tu médico/neurocirujano.',
                            'Caminar distancias cortas y frecuentes.',
                            'Fortalecer glúteos (son el soporte de tu espalda).',
                            'Dormir con una almohada entre las piernas (si duermes de lado).'
                        ],
                        no: [
                            'Levantar objetos pesados lejos del cuerpo.',
                            'Movimientos bruscos de rotación con flexión (curvarse y girar).',
                            'Pasar más de 1 hora sentado sin levantarte.',
                            'Ejercicios de alto impacto (correr/saltar) en fase aguda.'
                        ]
                    },
                    limites: 'Evitamos estrictamente cualquier movimiento que aumente el dolor irradiado (hacia la pierna).',
                    criteriosAlta: [
                        'Sin dolor irradiado a la pierna',
                        'Fuerza simétrica en ambas piernas',
                        'Capacidad de sentarse sin molestias',
                        'Levantar 20kg del suelo de forma segura',
                        'Volver a deporte/actividad previa'
                    ],
                    ejerciciosClave: [
                        'Press Pallof',
                        'Plancha Lateral',
                        'Puente Glúteo',
                        'Bisagra de Cadera',
                        'Peso Muerto Rumano',
                        'McGill Big 3'
                    ],
                    cta: 'Evaluar mi hernia',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/espalda_antes.png',
                        after: '/imagenes/lesiones/visualizer/espalda_despues.png'
                    }
                }
            },
            cervical: {
                title: 'Dolor Cervical',
                description: 'Tensión cuello, hombros y dolor de cabeza tensional.',
                content: {
                    intro: 'El "cuello de texto" y el estrés se acumulan en tus cervicales. La solución no es solo masajear, es fortalecer la musculatura profunda del cuello para que tu cabeza "pese menos".',
                    estadisticas: [
                        'El 70% de personas tendrá dolor cervical alguna vez',
                        'La cabeza adelantada aumenta carga cervical hasta 27kg',
                        'El 60% de casos mejora con ejercicio en 4-6 semanas',
                        'El 45% de dolores de cabeza son de origen cervical'
                    ],
                    mitos: [
                        'MITO: "Debo hacer crujir el cuello" → REALIDAD: No aporta beneficio duradero',
                        'MITO: "Solo necesito masajes" → REALIDAD: El fortalecimiento es clave',
                        'MITO: "Es por estrés solamente" → REALIDAD: La postura y debilidad muscular influyen',
                        'MITO: "No puedo usar el ordenador" → REALIDAD: Con ergonomía correcta, sí puedes'
                    ],
                    claves: [
                        'Mejorar ergonomía del puesto de trabajo',
                        'Fortalecer flexores profundos del cuello',
                        'Trabajo escapular (base del cuello)',
                        'Reducir tiempo en dispositivos móviles',
                        'Gestión del estrés y tensión muscular'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Movilidad y Conciencia',
                            desc: 'Recuperar el rango de movimiento suave y aprender a colocar la cabeza sobre los hombros (no adelantada).',
                            ejemplos: ['Retracciones cervicales (doble mentón)', 'Rotaciones suaves']
                        },
                        {
                            title: 'Fase 2: Fortalecimiento Escapular',
                            desc: 'Tus cervicales sufren si tus hombros no trabajan. Fortalecemos la base del cuello.',
                            ejemplos: ['Remo en anillas', 'Y-T-W con bandas', 'Face pull']
                        },
                        {
                            title: 'Fase 3: Fuerza Cervical',
                            desc: 'Trabajo específico de los flexores profundos del cuello.',
                            ejemplos: ['Isométricos manuales', 'Flexión craneocervical en supino']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Ajustar la pantalla del ordenador a la altura de los ojos.',
                            'Hacer descansos visuales cada 20 minutos.',
                            'Ejercicios de doble mentón en el coche o sofá.',
                            'Fortalecer la espalda alta.'
                        ],
                        no: [
                            'Mirar el móvil agachando la cabeza (súbelo a la altura de los ojos).',
                            'Dormir boca abajo (fuerza mucha rotación).',
                            'Hacer giros bruscos de cuello ("crackearlo").',
                            'Aguantar la tensión sin moverte.'
                        ]
                    },
                    limites: 'Si tienes mareos o vértigos, avísanos inmediatamente para adaptar los ejercicios.',
                    criteriosAlta: [
                        'Sin dolor al girar la cabeza',
                        'Trabajar >2 horas sin molestias',
                        'Dormir sin despertarse por dolor',
                        'Fuerza cervical simétrica',
                        'Sin dolores de cabeza recurrentes'
                    ],
                    ejerciciosClave: [
                        'Retracción Cervical',
                        'Face Pull',
                        'Y-T-W',
                        'Remo Invertido',
                        'Flexión Craneocervical',
                        'Isométricos Cervicales'
                    ],
                    cta: 'Aliviar mi cuello',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/espalda_antes.png',
                        after: '/imagenes/lesiones/visualizer/espalda_despues.png'
                    }
                }
            }
        }
    },
    hombro: {
        title: 'Hombro',
        description: 'Tendinitis, dolor al levantar el brazo, hombro congelado.',
        intro: 'El hombro necesita un equilibrio fino entre movilidad y estabilidad. Recuperamos ese equilibrio.',
        stats: [
            { label: 'Éxito', value: '80%', text: 'de mejora sin cirugía' },
            { label: 'Frecuencia', value: '30%', text: 'afectados en población adulta' }
        ],
        highlights: [
            'Readaptación Manguito Rotador',
            'Movilidad Escapular Avanzada',
            'Hombro de Lanzador y Nadador'
        ],
        subcategorias: {
            manguito: {
                title: 'Manguito Rotador',
                description: 'Dolor e imposibilidad para levantar el brazo o dormir sobre ese lado.',
                content: {
                    intro: 'Muy común en mujeres +40 y deportistas de raqueta. A veces se confunde con "hombro congelado". El trabajo de fuerza suave es clave para dejar de sentir pinzamientos.',
                    estadisticas: [
                        'Afecta al 30% de personas mayores de 60 años',
                        'El 75-80% mejora con ejercicio terapéutico',
                        'Solo el 20% de roturas requieren cirugía',
                        'El fortalecimiento reduce el dolor en un 70%'
                    ],
                    mitos: [
                        'MITO: "No puedo mover el brazo nunca más" → REALIDAD: El movimiento controlado cura',
                        'MITO: "La cirugía es la única opción" → REALIDAD: El 80% mejora sin cirugía',
                        'MITO: "Si cruje es malo" → REALIDAD: Los ruidos sin dolor son normales',
                        'MITO: "Debo reposar el brazo" → REALIDAD: El reposo empeora la rigidez'
                    ],
                    claves: [
                        'Recuperar movilidad sin dolor antes que fuerza',
                        'Fortalecer estabilizadores escapulares',
                        'Evitar pinzamiento en elevaciones',
                        'Progresión muy gradual de cargas',
                        'Trabajo de movilidad torácica'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Rango Sin Dolor',
                            desc: 'Movilizaciones pasivas y asistidas. Recuperar grados de movimiento sin activar el dolor.',
                            ejemplos: ['Péndulos', 'Mesa de deslizamiento', 'Bastón asistido']
                        },
                        {
                            title: 'Fase 2: Estabilidad Escapular',
                            desc: 'El hombro necesita una base estable (la escápula) para moverse bien.',
                            ejemplos: ['Protracción en pared', 'Remo isométrico', 'Serrato anterior']
                        },
                        {
                            title: 'Fase 3: Fuerza Overhead',
                            desc: 'Volver a levantar el brazo por encima de la cabeza con carga.',
                            ejemplos: ['Press militar con mancuerna', 'Turkish Get Up parcial', 'Landmine Press']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Dormir del lado contrario al dolor (o boca arriba).',
                            'Mantener los codos pegados al cuerpo al cargar peso al principio.',
                            'Ejercicios de movilidad torácica (espalda alta).',
                            'Usar el brazo en rangos bajos (no anularlo por completo).'
                        ],
                        no: [
                            'Dormir con el brazo bajo la almohada (corta la circulación y pinza).',
                            'Levantar objetos pesados con el brazo estirado (momento de fuerza alto).',
                            'Hacer movimientos repetitivos por encima de la cabeza (limpiar cristales altos) en fase aguda.'
                        ]
                    },
                    limites: 'Evitamos la sensación de "pinzamiento" agudo. La molestia muscular es aceptable, el dolor articular no.',
                    criteriosAlta: [
                        'Elevar brazo sobre cabeza sin dolor',
                        'Dormir sobre el lado afectado',
                        'Fuerza simétrica en rotaciones',
                        'Realizar actividades overhead sin limitaciones',
                        'Retomar deporte de raqueta/natación'
                    ],
                    ejerciciosClave: [
                        'Péndulos',
                        'Rotación Externa con Banda',
                        'Serrato Anterior',
                        'Face Pull',
                        'Press Militar',
                        'Turkish Get Up'
                    ],
                    cta: 'Recuperar mi hombro',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/hombro_antes.png',
                        after: '/imagenes/lesiones/visualizer/hombro_despues.png'
                    }
                }
            }
        }
    },
    rodilla: {
        title: 'Rodilla',
        description: 'Lesiones de ligamentos, menisco o desgaste.',
        intro: 'La rodilla soporta gran carga. Recuperar su función es vital para volver a caminar o correr sin dolor.',
        stats: [
            { label: 'Deporte', value: '90%', text: 'vuelve a su nivel previo' },
            { label: 'Prevención', value: '3x', text: 'menos riesgo de relesión' }
        ],
        highlights: [
            'Expertos en Post-Operatorio LCA',
            'Tratamiento Meniscal Conservador',
            'Artrosis en Movimiento'
        ],
        subcategorias: {
            lca: {
                title: 'Ligamento Cruzado (LCA)',
                description: 'Recuperación tras operación o tratamiento conservador.',
                content: {
                    intro: 'La lesión más temida, pero con un camino muy claro. Sea operado o conservador, tu rodilla puede volver a ser estable y fuerte si respetamos los tiempos biológicos.',
                    estadisticas: [
                        'Tiempo medio de retorno al deporte: 9-12 meses',
                        'El 90% vuelve a actividad deportiva con buen protocolo',
                        'El riesgo de re-lesión baja del 20% al 5% con readaptación adecuada',
                        'La fuerza del cuádriceps es el predictor #1 de éxito'
                    ],
                    mitos: [
                        'MITO: "No podré volver a mi deporte" → REALIDAD: El 90% vuelve con protocolo adecuado',
                        'MITO: "La rodillera me protege" → REALIDAD: Tu cuádriceps es tu mejor protección',
                        'MITO: "A los 6 meses puedo volver" → REALIDAD: Depende de criterios funcionales, no tiempo',
                        'MITO: "Debo correr cuanto antes" → REALIDAD: Las prisas aumentan recaídas'
                    ],
                    claves: [
                        'Recuperar extensión completa (0°) desde día 1',
                        'Activación temprana del cuádriceps',
                        'Fuerza simétrica >90% antes de correr',
                        'Trabajo unipodal y control neuromuscular',
                        'Progresión: fuerza → pliometría → agilidad → deporte'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Extensión y Activación',
                            desc: 'Lo más importante es estirar la rodilla del todo y despertar el cuádriceps.',
                            ejemplos: ['Extensiones pasivas', 'Cuádriceps isométrico', 'Movilidad de rótula']
                        },
                        {
                            title: 'Fase 2: Carga y Fuerza',
                            desc: 'Empezamos a cargar peso. Sentadillas, peso muerto y trabajo unipodal.',
                            ejemplos: ['Sentadilla cajón', 'Puente unipodal', 'Subidas al cajón']
                        },
                        {
                            title: 'Fase 3: Impacto y Agilidad',
                            desc: 'Preparación para correr y saltar. Aterrizajes controlados.',
                            ejemplos: ['Saltos a la comba', 'Drop Jumps', 'Cambios de dirección previstos']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Trabajar la extensión completa desde el día 1.',
                            'Caminar con técnica correcta (sin cojear) antes de dejar las muletas.',
                            'Hielo si hay inflamación aguda tras el ejercicio.',
                            'Entrenar el resto del cuerpo (core, brazos, la otra pierna).'
                        ],
                        no: [
                            'Poner una almohada bajo la rodilla al dormir (provoca flexo).',
                            'Volver a correr antes de tener fuerza simétrica en las piernas.',
                            'Ignorar la inflamación persistente.',
                            'Pivotar o girar sobre la rodilla en fases tempranas.'
                        ]
                    },
                    limites: 'Respetamos estrictamente los plazos de cicatrización del injerto (si hay cirugía).',
                    criteriosAlta: [
                        'Extensión completa de rodilla (0°)',
                        'Fuerza del cuádriceps >90% vs pierna sana',
                        'Test de salto unipodal >90% simetría',
                        'Aterrizajes controlados sin colapso valgo',
                        'Criterios funcionales aprobados para RTS (Return to Sport)'
                    ],
                    ejerciciosClave: [
                        'Extensiones de Rodilla',
                        'Sentadilla a Cajón',
                        'Peso Muerto Unipodal',
                        'Nordic Hamstring',
                        'Drop Jumps',
                        'Cutting Drills'
                    ],
                    cta: 'Plan recuperar rodilla',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/rodilla_antes.png',
                        after: '/imagenes/lesiones/visualizer/rodilla_despues.png'
                    }
                }
            },
            menisco: {
                title: 'Menisco',
                description: 'Dolor al girar o bloquear la rodilla. Recupera la función sin cirugía en la mayoría de casos.',
                content: {
                    intro: 'El menisco es el amortiguador de tu rodilla. Muchas roturas degenerativas NO necesitan operación, sino mejorar la estabilidad de la pierna y la absorción de impactos.',
                    estadisticas: [
                        'El 60% de personas >65 años tienen roturas de menisco sin dolor',
                        'La cirugía de menisco NO es superior al ejercicio en roturas degenerativas',
                        'El 70-80% mejora con tratamiento conservador',
                        'La meniscectomía aumenta riesgo de artrosis a largo plazo'
                    ],
                    mitos: [
                        'MITO: "Solo se cura operando" → REALIDAD: El ejercicio es igual de efectivo en roturas degenerativas',
                        'MITO: "Tengo un trozo suelto" → REALIDAD: Tu cuerpo se adapta perfectamente',
                        'MITO: "No volveré a correr" → REALIDAD: Muchos corredores tienen roturas asintomáticas',
                        'MITO: "Debo evitar doblar la rodilla" → REALIDAD: El movimiento controlado la cura'
                    ],
                    claves: [
                        'Fortalecer cuádriceps e isquiotibiales',
                        'Mejorar control neuromuscular de rodilla',
                        'Reducir peso corporal si hay sobrepeso',
                        'Progresión gradual de impactos',
                        'Evitar giros bruscos en fase aguda'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Desinflamación y Nutrición',
                            desc: 'Movimiento sin carga para nutrir el cartílago y reducir la inflamación articular.',
                            ejemplos: ['Bicicleta estática sin resistencia', 'Movilidad pendular', 'Activación isométrica de cuádriceps']
                        },
                        {
                            title: 'Fase 2: Estabilidad y Propiocepción',
                            desc: 'Evitar que la rodilla "baile". Enseñar al cerebro a controlar la articulación.',
                            ejemplos: ['Equilibrio a una pierna sobre suelo firme', 'Sentadilla corta controlada', 'Peso muerto unipodal asistido']
                        },
                        {
                            title: 'Fase 3: Fuerza y Absorción',
                            desc: 'Proteger el menisco con una "prensa" muscular potente. Introducción gradual de impactos.',
                            ejemplos: ['Sentadilla búlgara', 'Prensa de piernas unilateral', 'Saltos controlados (Landing)']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Fortalecer cuádriceps e isquios (son tus amortiguadores).',
                            'Mantener un peso saludable para reducir la carga mecánica.',
                            'Usar calzado con buena amortiguación.',
                            'Actividad física regular de bajo impacto (caminar, nadar).'
                        ],
                        no: [
                            'Giros bruscos con el pie fijo en el suelo.',
                            'Sentadillas profundas (>90º) sin control previo.',
                            'Correr en asfalto duro en fase de inflamación aguda.',
                            'Ignorar el dolor punzante "de bloqueo".'
                        ]
                    },
                    limites: 'Evitamos el dolor de tipo "pinchazo" interno. La fatiga muscular es buena.',
                    criteriosAlta: [
                        'Sin dolor en giros controlados',
                        'Sin bloqueos articulares',
                        'Sentadilla profunda sin molestias',
                        'Correr sin inflamación posterior',
                        'Retomar actividades deportivas'
                    ],
                    ejerciciosClave: [
                        'Sentadilla Controlada',
                        'Peso Muerto Unipodal',
                        'Step Down Excéntrico',
                        'Sentadilla Búlgara',
                        'Saltos de Aterrizaje',
                        'Giros Progresivos'
                    ],
                    cta: 'Valorar mi menisco',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/rodilla_antes.png',
                        after: '/imagenes/lesiones/visualizer/rodilla_despues.png'
                    }
                }
            },
            desgaste: {
                title: 'Artrosis / Desgaste',
                description: 'El movimiento es el mejor tratamiento para el desgaste articular.',
                content: {
                    intro: 'El desgaste es normal con la edad (como las canas). "Hueso contra hueso" suena terrible, pero el dolor disminuye drásticamente si tus músculos absorben el impacto en lugar de tu articulación.',
                    estadisticas: [
                        'El 50% de personas >65 años tienen artrosis de rodilla',
                        'El ejercicio reduce el dolor en un 40-50%',
                        'La pérdida de 5kg reduce el dolor un 20%',
                        'El fortalecimiento puede retrasar la prótesis 5-10 años'
                    ],
                    mitos: [
                        'MITO: "Si me muevo se desgasta más" → REALIDAD: El movimiento lubrica la articulación',
                        'MITO: "Solo me queda la prótesis" → REALIDAD: El fortalecimiento puede retrasarla años',
                        'MITO: "Debo dejar de hacer deporte" → REALIDAD: Adapta, no abandones',
                        'MITO: "El dolor indica daño" → REALIDAD: El dolor mejora con ejercicio aunque haya desgaste'
                    ],
                    claves: [
                        'El movimiento genera líquido sinovial (lubricación)',
                        'Fortalecer para que el músculo absorba impacto',
                        'Control del peso corporal',
                        'Ejercicio de bajo impacto regular',
                        'Expectativas realistas y manejo del dolor'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Lubricación Articular',
                            desc: 'El movimiento genera líquido sinovial (el aceite de tus juntas). Engrasamos la rodilla.',
                            ejemplos: ['Movilidad activa sin peso', 'Caminar en piscina o llano', 'Bici suave']
                        },
                        {
                            title: 'Fase 2: Fuerza de Soporte',
                            desc: 'Construir músculo sin machacar la articulación para "liberar" al hueso de la carga.',
                            ejemplos: ['Isométricos de muro', 'Gomas elásticas', 'Subidas al cajón lentas']
                        },
                        {
                            title: 'Fase 3: Reincorporación Vida Activa',
                            desc: 'Caminar más, subir escaleras con seguridad y disfrutar de tu autonomía.',
                            ejemplos: ['Caminatas progresivas en desnivel', 'Subir escaleras con técnica de glúteo']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Movimiento diario constante (no "atracones" de fin de semana).',
                            'Calzado cómodo y flexible.',
                            'Entrenamiento de fuerza regular al menos 2-3 veces por semana.',
                            'Mantener la articulación caliente ante el frío.'
                        ],
                        no: [
                            'Inmovilidad absoluta (la rodilla se "pega").',
                            'Impactos de alta intensidad (saltos) sin preparación previa.',
                            'Ignorar el dolor que persiste más de 24h tras el ejercicio.',
                            'Reposo total salvo en crisis inflamatoria muy aguda.'
                        ]
                    },
                    limites: 'Respetamos el "dolor del día siguiente". Si al despertar estás mucho peor, bajamos la dosis.',
                    criteriosAlta: [
                        'Dolor en reposo <3/10',
                        'Caminar 30+ minutos sin molestias',
                        'Subir/bajar escaleras con normalidad',
                        'Realizar AVD sin limitaciones',
                        'Mantener calidad de vida activa'
                    ],
                    ejerciciosClave: [
                        'Bicicleta Estática',
                        'Natación/Aquagym',
                        'Sentadilla Isométrica',
                        'Step Ups Controlados',
                        'Caminatas Progresivas',
                        'Fortalecimiento General'
                    ],
                    cta: 'Programa Artrosis',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/rodilla_antes.png',
                        after: '/imagenes/lesiones/visualizer/rodilla_despues.png'
                    }
                }
            }
        }
    },
    tobillo: {
        title: 'Tobillo',
        description: 'Esguinces crónicos, inestabilidad y recuperación post-fractura.',
        intro: 'El tobillo es tu conexión con el suelo. Si falla, todo lo que hay arriba (rodilla, cadera, espalda) sufrirá las consecuencias.',
        stats: [
            { label: 'Recurrencia', value: '-70%', text: 'de riesgo con readaptación' },
            { label: 'Recuperación', value: '2-4', text: 'semanas para vida normal' }
        ],
        highlights: [
            'Estabilidad Crónica de Tobillo',
            'Propiocepción de Alto Nivel',
            'Vuelta al Trote Segura'
        ],
        subcategorias: {
            esguince: {
                title: 'Esguince de Tobillo',
                description: 'Recuperación tras torceduras. Evita que se vuelva crónico.',
                content: {
                    intro: 'Un esguince mal curado es el primer paso para una inestabilidad crónica. No se trata solo de que baje la inflamación, sino de recuperar el control y los reflejos de tu tobillo.',
                    estadisticas: [
                        'El 40% de esguinces mal tratados se vuelven crónicos',
                        'El riesgo de re-esguince es 3-4x mayor sin rehabilitación',
                        'La propiocepción se recupera en 6-8 semanas con ejercicio',
                        'El apoyo precoz reduce tiempo de recuperación un 50%'
                    ],
                    mitos: [
                        'MITO: "Debo inmovilizar 3 semanas" → REALIDAD: El apoyo precoz acelera la curación',
                        'MITO: "Si no duele, está curado" → REALIDAD: Falta recuperar estabilidad y reflejos',
                        'MITO: "Las tobilleras me protegen" → REALIDAD: Pueden debilitar si se usan crónicamente',
                        'MITO: "Nunca volverá a ser igual" → REALIDAD: Con buena rehab puede ser más fuerte'
                    ],
                    claves: [
                        'Movilización temprana y apoyo precoz',
                        'Trabajo intensivo de propiocepción',
                        'Recuperar dorsiflexión completa',
                        'Fortalecimiento de músculos estabilizadores',
                        'Progresión hacia cambios de dirección'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Movilidad y Desinflamación',
                            desc: 'Recuperar el rango de movimiento (especialmente la dorsiflexión) y drenar el edema.',
                            ejemplos: ['Dibujar el abecedario con el pie', 'Movilidad con banda elástica', 'Baños de contraste']
                        },
                        {
                            title: 'Fase 2: Equilibrio y Estabilidad',
                            desc: 'Reentrenar los receptores del tobillo (propiocepción) para que reaccionen a tiempo.',
                            ejemplos: ['Equilibrio a una pierna (Pata coja)', 'Estocadas con inestabilidad', 'Caminar sobre talones/puntas']
                        },
                        {
                            title: 'Fase 3: Retorno a la Carga',
                            desc: 'Impactos, saltos y cambios de dirección controlados.',
                            ejemplos: ['Skips', 'Pliometría lateral', 'Trote en terrenos variados']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Caminar en cuanto el dolor lo permita (apoyo precoz).',
                            'Trabajar el equilibrio desde la primera semana.',
                            'Fortalecer los músculos peroneos (laterales del tobillo).',
                            'Usar vendaje funcional o tobillera solo si es necesario para caminar.'
                        ],
                        no: [
                            'Reposo prolongado con el pie en alto sin moverlo.',
                            'Uso excesivo de antiinflamatorios (pueden frenar la cicatrización inicial).',
                            'Ignorar la sensación de que el tobillo "se va" o está débil.',
                            'Volver a jugar antes de recuperar el rango de movimiento completo.'
                        ]
                    },
                    limites: 'Evitamos la inestabilidad. Si el tobillo flaquea, el ejercicio es demasiado difícil.',
                    criteriosAlta: [
                        'Sin inflamación ni dolor en reposo',
                        'Equilibrio unipodal >30 segundos',
                        'Dorsiflexión simétrica respecto al otro pie',
                        'Saltos unipodales sin miedo ni dolor',
                        'Retorno completo a actividad deportiva'
                    ],
                    ejerciciosClave: [
                        'Abecedarios con el Pie',
                        'Equilibrio Unipodal',
                        'Calf Raises',
                        'Peroneos con Banda',
                        'Saltos Laterales',
                        'Agilidad en Escalera'
                    ],
                    cta: 'Recuperar mi tobillo',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/tobillo_antes.png',
                        after: '/imagenes/lesiones/visualizer/tobillo_despues.png'
                    }
                }
            }
        }
    },
    cadera: {
        title: 'Cadera',
        description: 'Bursitis, choque femoroacetabular y molestias en el glúteo.',
        intro: 'La cadera es el motor de potencia de tu cuerpo. Unos glúteos fuertes son la mejor medicina para cualquier dolor de cadera o zona lumbar.',
        stats: [
            { label: 'Eficacia', value: '90%', text: 'en tratamiento de bursitis' },
            { label: 'Mujeres', value: '4:1', text: 'ratio de afectación en cadera' }
        ],
        highlights: [
            'Tratamiento Trocanteritis',
            'Glúteo como Motor de Salud',
            'Movilidad Femoroacetabular'
        ],
        subcategorias: {
            bursitis: {
                title: 'Bursitis / Trocanteritis',
                description: 'Dolor en el lateral de la cadera, especialmente al dormir de lado.',
                content: {
                    intro: 'Lo que llamamos bursitis suele ser en realidad una tendinopatía de los glúteos. El reposo no lo cura; necesitamos fortalecer la zona para que soporte la carga.',
                    estadisticas: [
                        'Afecta principalmente a mujeres entre 40-60 años (ratio 4:1)',
                        'El 90% mejora con ejercicio terapéutico en 6-8 semanas',
                        'El fortalecimiento del glúteo medio reduce el dolor en un 80%',
                        'Dormir del lado afectado puede aumentar el dolor hasta un 60%'
                    ],
                    mitos: [
                        'MITO: "Es una inflamación de la bursa" → REALIDAD: En el 95% de casos es una tendinopatía del glúteo medio',
                        'MITO: "El reposo lo curará" → REALIDAD: El reposo debilita el tendón y prolonga el dolor',
                        'MITO: "Necesito infiltraciones" → REALIDAD: El ejercicio progresivo es más efectivo a largo plazo',
                        'MITO: "No puedo hacer ejercicio" → REALIDAD: El ejercicio controlado es la mejor medicina'
                    ],
                    claves: [
                        'Gestión de cargas: Evitar compresión lateral mientras fortalecemos',
                        'Fortalecimiento progresivo del glúteo medio y menor',
                        'Corrección de patrones de movimiento en actividades diarias',
                        'Control de factores agravantes (dormir de lado, cruzar piernas)',
                        'Paciencia: Los tendones tardan 12-16 semanas en adaptarse completamente'
                    ],
                    fases: [
                        {
                            title: 'Fase 1: Gestión de Carga',
                            desc: 'Evitar posturas que compriman el lateral de la cadera mientras empezamos a activar el glúteo.',
                            ejemplos: ['Almohada entre las piernas al dormir', 'Activación isométrica de glúteo medio']
                        },
                        {
                            title: 'Fase 2: Fortalecimiento Progresivo',
                            desc: 'Cargar el tendón poco a poco para que se vuelva resistente.',
                            ejemplos: ['Monster walk', 'Clamshells controlados', 'Plancha lateral modificada']
                        },
                        {
                            title: 'Fase 3: Integración Funcional',
                            desc: 'Llevar esa fuerza a movimientos del día a día.',
                            ejemplos: ['Subidas al cajón laterales', 'Sentadilla a una pierna (Step down)']
                        }
                    ],
                    semasforo: {
                        si: [
                            'Dormir con almohada entre las rodillas.',
                            'Fortalecer el glúteo medio y mayor.',
                            'Evitar cruzar las piernas al estar sentado.',
                            'Perder peso si es necesario para reducir presión.'
                        ],
                        no: [
                            'Dormir sobre el lado dolorido sin protección.',
                            'Estiramientos agresivos del lateral (pueden irritar más).',
                            'Permanecer de pie con el peso cargado en una sola cadera.',
                            'Ignorar el dolor que impide el descanso nocturno.'
                        ]
                    },
                    limites: 'Evitamos ejercicios que provoquen dolor sordo persistente después de entrenar.',
                    criteriosAlta: [
                        'Dormir de lado sin dolor',
                        'Subir escaleras sin cojera',
                        'Caminar más de 30 minutos sin molestias',
                        'Realizar sentadilla a una pierna con control',
                        'Volver a actividades deportivas sin restricciones'
                    ],
                    ejerciciosClave: [
                        'Monster Walk',
                        'Clamshells',
                        'Plancha Lateral',
                        'Step Down',
                        'Single Leg Deadlift',
                        'Sentadilla Isométrica'
                    ],
                    cta: 'Aliviar mi cadera',
                    visualizer: {
                        before: '/imagenes/lesiones/visualizer/cadera_antes.png',
                        after: '/imagenes/lesiones/visualizer/cadera_despues.png'
                    }
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
        subtitle: 'Salva tus rodillas y tobillos',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Readaptación post-lesión para jugadores de baloncesto: saltos, recepciones, pivotes y contacto. Recupera tu explosividad.',
        intro: 'El baloncesto es un deporte de alto impacto con constantes cambios de dirección y saltos. Tus articulaciones sufren si no tienes una buena base de fuerza y estabilidad.',
        lesionesComunes: [
            { nombre: 'Esguince de Tobillo', prevalencia: '25% de todas las lesiones', tiempoRecuperacion: '2-6 semanas' },
            { nombre: 'Lesión de LCA', prevalencia: '5% de todas las lesiones', tiempoRecuperacion: '6-9 meses' },
            { nombre: 'Tendinopatía Rotuliana', prevalencia: '15% de todas las lesiones', tiempoRecuperacion: '3-6 meses' },
            { nombre: 'Fascitis Plantar', prevalencia: '8% de todas las lesiones', tiempoRecuperacion: '3-12 meses' }
        ],
        programaPrevencion: [
            'Trabajo de propiocepción en fatiga',
            'Técnica de aterrizaje (Landing Mechanics)',
            'Fortalecimiento de glúteo medio',
            'Movilidad de tobillo (dorsiflexión)'
        ]
    },
    crossfit: {
        title: 'CrossFit',
        subtitle: 'Rendimiento sin Dolor',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Abordaje de lesiones comunes en CrossFit: hombro, lumbar y técnica de levantamientos olímpicos. Sigue entrenando mientras te recuperas.',
        intro: 'La alta intensidad requiere una técnica impecable. Muchas lesiones en CrossFit no son por el ejercicio en sí, sino por la fatiga y la pérdida de forma técnica.',
        lesionesComunes: [
            { nombre: 'Dolor de Hombro', prevalencia: '25% de practicantes', tiempoRecuperacion: '4-12 semanas' },
            { nombre: 'Dolor Lumbar', prevalencia: '20% de practicantes', tiempoRecuperacion: '2-8 semanas' },
            { nombre: 'Lesiones de Muñeca', prevalencia: '10% de practicantes', tiempoRecuperacion: '2-6 semanas' },
            { nombre: 'Rabdomiolisis (Grave)', prevalencia: 'Poco frecuente', tiempoRecuperacion: 'Médica inmediata' }
        ],
        programaPrevencion: [
            'Movilidad torácica y de hombro diaria',
            'Escalar ejercicios cuando la técnica falla',
            'Descanso activo y gestión del estrés',
            'Fortalecimiento accesorio (Core/Manguito)'
        ]
    },
    tenis: {
        title: 'Tenis',
        subtitle: 'Potencia y Control sin Molestias',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Readaptación para tenistas: codo de tenista, hombro y extremidad inferior. Vuelve a sacar con confianza.',
        intro: 'El tenis es un deporte asimétrico que exige mucho a tus articulaciones. El "codo de tenista" es famoso, pero el hombro y la espalda también sufren grandes cargas.',
        lesionesComunes: [
            { nombre: 'Epicondilitis (Codo)', prevalencia: '40% de tenistas', tiempoRecuperacion: '6-12 semanas' },
            { nombre: 'Dolor de Hombro', prevalencia: '24% de tenistas', tiempoRecuperacion: '4-12 semanas' },
            { nombre: 'Lumbalgia', prevalencia: '15% de tenistas', tiempoRecuperacion: '2-6 semanas' },
            { nombre: 'Rotura de Gemelo', prevalencia: '10% de tenistas veteranos', tiempoRecuperacion: '4-8 semanas' }
        ],
        programaPrevencion: [
            'Fortalecimiento de antebrazo y agarre',
            'Cadena cinética (fuerza desde las piernas)',
            'Movilidad de rotación torácica',
            'Gestión de volumen de saques'
        ]
    },
    padel: {
        title: 'Pádel',
        subtitle: 'Disfruta del Deporte de Moda',
        heroImage: '/imagenes/hero/hero-image.jpg',
        description: 'Prevención y recuperación de lesiones específicas del pádel: giros bruscos, paredes y remates. Juega sin dolor.',
        intro: 'El pádel parece lesivo, pero lo que lesiona es jugar 5 veces por semana sin preparación física previa. Te enseñamos a preparar tu cuerpo para la exigencia.',
        lesionesComunes: [
            { nombre: 'Epicondilitis', prevalencia: '35% de jugadores', tiempoRecuperacion: '6-12 semanas' },
            { nombre: 'Lumbalgia', prevalencia: '25% de jugadores', tiempoRecuperacion: '2-6 semanas' },
            { nombre: 'Lesiones de Gemelo', prevalencia: '20% de jugadores', tiempoRecuperacion: '3-8 semanas' },
            { nombre: 'Fascitis Plantar', prevalencia: '15% de jugadores', tiempoRecuperacion: '3-12 meses' }
        ],
        programaPrevencion: [
            'Calentamiento dinámico específico',
            'Fortalecimiento de piernas y glúteos',
            'Técnica de golpeo (evitar muñecazo)',
            'Elección correcta de pala y calzado'
        ]
    }
};

// Datos del Blog - Artículos iniciales
export const blog = [
    {
        id: 4,
        slug: 'readaptacion-activa-vs-reposo',
        title: 'Readaptación Activa vs Reposo: Qué Dice la Ciencia',
        excerpt: 'El viejo paradigma del reposo absoluto ya no funciona. Descubre por qué el movimiento controlado acelera tu recuperación hasta un 30% y previene el dolor crónico.',
        category: 'Readaptación',
        image: '/imagenes/blog/readaptacion-activa.jpg',
        readTime: '8 min lectura',
        date: '02 Feb 2026',
        featured: true
    },
    {
        id: 1,
        slug: 'dolor-espalda-recurrente',
        title: '¿Por qué tu dolor de espalda siempre vuelve? (y cómo evitarlo)',
        excerpt: 'Has ido al fisio, te han dado un masaje, se te ha pasado... y a las dos semanas estás igual. Descubre el eslabón perdido en tu recuperación.',
        category: 'Readaptación',
        image: '/imagenes/hero/hero-image.jpg',
        readTime: '4 min lectura',
        date: '22 Ene 2026'
    },
    {
        id: 2,
        slug: 'fuerza-mujeres-40',
        title: 'Fuerza en mujeres +40: El seguro de vida definitivo',
        excerpt: 'La osteoporosis y la pérdida de masa muscular no son inevitables. El entrenamiento de fuerza es la "pastilla" más potente que existe para tu salud futura.',
        category: 'Salud',
        image: '/imagenes/testimonios/testimonio-video-mamen.jpg',
        readTime: '5 min lectura',
        date: '15 Ene 2026'
    },
    {
        id: 3,
        slug: 'operacion-menisco-mitos',
        title: '¿Operarse de menisco? Lo que dicen los estudios',
        excerpt: 'La artroscopia de rodilla es una de las cirugías más comunes, pero ¿es siempre necesaria? Analizamos cuándo compensa y cuándo el ejercicio es superior.',
        category: 'Lesiones',
        image: '/imagenes/hero/hero-image.jpg',
        readTime: '6 min lectura',
        date: '10 Ene 2026'
    }
];

// Contenido completo de los artículos del Blog
export const blogPosts = {
    'readaptacion-activa-vs-reposo': {
        title: 'Readaptación Activa vs Reposo: Qué Dice la Ciencia',
        subtitle: 'El viejo paradigma que debes olvidar',
        image: '/imagenes/blog/readaptacion-activa.jpg',
        category: 'Readaptación',
        date: '02 Feb 2026',
        readTime: '8 min lectura',
        author: 'Equipo DeMovement',
        seo: {
            keyword: 'Readaptación activa vs reposo',
            description: 'Descubre por qué el reposo absoluto no funciona y cómo la readaptación activa acelera tu recuperación hasta un 30%. Guía basada en ciencia con semáforo de decisión.',
            lsi: ['Movilización temprana', 'recuperación funcional', 'circulación sanguínea', 'readaptación deportiva', 'reposo prolongado', 'atrofia muscular', 'rigidez articular', 'fases de recuperación'],
            intent: 'Decisión/Educación'
        },
        intro: `Hace años, cuando alguien se lesionaba, la receta era única: reposo absoluto. "Quédate quieto en la cama o el sofá y verás cómo se cura todo solo."

La realidad es diferente. Y más dolorosa.

El reposo prolongado no solo alarga tu recuperación: transforma una lesión aguda en un problema crónico. Músculos atrofiados, rigidez articular, dolores que persisten meses después de que "debería estar curado". Esa es la verdad incómoda del reposo absoluto.

Pero la ciencia moderna ha encontrado algo mejor.`,
        sections: [
            {
                title: 'Qué es realmente la Readaptación Activa',
                content: `La readaptación activa no significa volver a correr una maratón al día siguiente. No es arriesgar tu lesión "para ser valiente".

**La readaptación activa es movimiento controlado y progresivo desde el primer día.**

Es el acto de reintroducir movimiento adaptado a lo que tu cuerpo puede hacer en cada momento, no a lo que quieres que haga. No es reposar en completa inmovilidad. Es entrenar inteligentemente.`,
                comparison: {
                    reposo: 'Evitar todo movimiento',
                    readaptacion: 'Movimiento sin dolor → Fuerza → Potencia → Deporte específico'
                }
            },
            {
                title: 'La Evidencia: Datos Que Convencen',
                subtitle: 'La ciencia es clara. Te mostramos los números reales de estudios recientes:',
                evidencias: [
                    {
                        title: 'Acelera la Recuperación hasta 30%',
                        content: `Estudios demuestran que la movilización temprana (readaptación activa) acelera la recuperación funcional hasta 30% en comparación con el reposo pasivo.`,
                        stats: [
                            { label: 'Con reposo prolongado', value: '12 semanas para volver a actividad básica' },
                            { label: 'Con readaptación activa', value: '8-9 semanas para los mismos resultados' }
                        ],
                        conclusion: 'No son pocas semanas. Son meses de tu vida recuperando lo que te hace feliz.'
                    },
                    {
                        title: 'Estimula la Circulación Sanguínea',
                        content: `El movimiento estimula la circulación sanguínea en el área lesionada. Esa circulación lleva:`,
                        benefits: [
                            'Oxígeno a los tejidos dañados',
                            'Nutrientes para reconstruir músculos y tendones',
                            'Células de reparación que aceleran la curación',
                            'Eliminación de sustancias de desecho que causa rigidez'
                        ],
                        conclusion: 'El reposo, por el contrario, ralentiza la circulación. Tu cuerpo no "sana más rápido descansando." Sana mejor cuando hay movimiento controlado.'
                    },
                    {
                        title: 'Previene Dolores Crónicos',
                        content: `Este es el dato más importante: el reposo prolongado NO previene dolor crónico. Lo causa.`,
                        causes: [
                            'Atrofia muscular (pérdida de músculo que protege las articulaciones)',
                            'Rigidez articular (pérdida de rango de movimiento)',
                            'Sensibilización del nervio (el cuerpo "olvida" cómo procesar el movimiento normal)'
                        ],
                        conclusion: 'Resultado: Acabas con dolores crónicos que no tenías antes de la lesión. Con readaptación activa, los músculos se recuperan manteniendo su función. El cuerpo no "olvida" cómo moverse.'
                    },
                    {
                        title: 'Recupera la Función Deportiva (No Solo la Movilidad Básica)',
                        content: `Recuperar capacidad para caminar NO es lo mismo que recuperar capacidad para hacer deporte.`,
                        phases: [
                            { fase: 'Fase 1', desc: 'Movimiento sin dolor' },
                            { fase: 'Fase 2', desc: 'Desarrollo de fuerza' },
                            { fase: 'Fase 3', desc: 'Trabajo de potencia y velocidad' },
                            { fase: 'Fase 4', desc: 'Gestos deportivos específicos' }
                        ],
                        conclusion: 'Cada fase prepara tu cuerpo para la siguiente. El resultado: vuelves a tu deporte, no solo a tu vida cotidiana.'
                    }
                ]
            }
        ],
        semaforo: {
            title: 'El Semáforo: Cuándo SÍ Necesitas Reposo Absoluto',
            intro: 'Aquí viene lo importante: el reposo NO es malo en todos los casos.',
            levels: [
                {
                    color: 'rojo',
                    title: 'Reposo Necesario (Alto Riesgo)',
                    items: [
                        'Fracturas inestables que requieren cirugía inmediata',
                        'Fases agudas inflamatorias muy severas (primeras 24-72 horas en lesiones graves)',
                        'Contraindicación médica explícita del traumatólogo'
                    ],
                    note: 'En estos casos, el reposo protege. Es un escudo temporal mientras esperas cirugía o mientras baja la inflamación aguda.'
                },
                {
                    color: 'amarillo',
                    title: 'Reposo Limitado (Cuidado)',
                    items: [
                        'Primeros 2-3 días después de una lesión aguda',
                        'Cuando duele significativamente con el movimiento'
                    ],
                    note: 'Aquí el reposo sirve para controlar el dolor inicial y la inflamación. Pero no debe prolongarse indefinidamente.'
                },
                {
                    color: 'verde',
                    title: 'Readaptación Activa (La Mayoría de Casos)',
                    items: [
                        'Después de pasar la fase aguda (2-3 días)',
                        'Lesiones de tejidos blandos (esguinces, distensiones, tendinitis)',
                        'Post-operatorio (sí, incluso después de cirugía)',
                        'Cuando el dolor es tolerable con movimiento controlado'
                    ],
                    note: 'Aquí es donde sucede la magia de la recuperación real.'
                }
            ]
        },
        fuentes: {
            title: 'Lo Que Dice la Literatura Científica',
            intro: 'No nos lo inventamos. Estos son estudios reales:',
            studies: [
                'Movilización temprana vs reposo prolongado: Múltiples estudios de RCT (ensayos controlados aleatorizados) demuestran recuperación funcional más rápida con movimiento progresivo.',
                'Estrés mecánico en tejidos lesionados: Los estudios biomecánicos muestran que el estrés mecánico controlado es esencial para la organización correcta de fibras de colágeno durante la reparación.',
                'Prevención de rigidez articular: La inmovilización prolongada causa adhesiones de colágeno que limitan el rango de movimiento. Estos cambios son irreversibles si se prolongan.'
            ],
            sources: [
                'Training and Treatment (trainingandtreatment.es)',
                'Literatura científica en readaptación deportiva moderna',
                'Protocolos de centros de readaptación avanzada'
            ]
        },
        demovement: {
            title: 'Por Qué DeMovement Usa Readaptación Activa Desde el Día 1',
            intro: 'En DeMovement, entendemos que tu objetivo no es simplemente "no tener dolor." Es volver a tu deporte. Volver a lo que te hace feliz.',
            benefits: [
                'Evaluación biomecánica completa desde la primera visita',
                'Plan personalizado basado en tu fase de lesión',
                'Readaptación activa desde el primer día (adaptada a lo que tu cuerpo puede hacer)',
                'Progresión científica hacia tu objetivo deportivo',
                'Colaboración con tu equipo médico (traumatólogo, fisioterapeuta)'
            ],
            conclusion: 'No esperas en una cama. Trabajas. Y vuelves.'
        },
        tiempos: {
            title: '¿Cuánto Tiempo Realmente Toma?',
            intro: 'Una pregunta común: "¿Cuándo puedo volver a [tu deporte]?"',
            items: [
                { lesion: 'Lesiones de tejidos blandos (esguinces, distensiones)', tiempo: '4-8 semanas típicamente' },
                { lesion: 'Lesiones más complejas (menisco, ligamentos)', tiempo: '3-6 meses' },
                { lesion: 'Post-operatorio ACL', tiempo: '6-9 meses para retorno deportivo seguro' }
            ],
            note: 'Lo importante: Con readaptación activa, estos son los mínimos reales. Con reposo prolongado, son máximos que raramente se alcanzan.'
        },
        cta: {
            title: 'Tu Siguiente Paso',
            intro: 'No dejes que tu lesión se vuelva crónica.',
            message: 'La diferencia entre recuperarte en 8 semanas o 12 semanas no es solo tiempo. Es la diferencia entre volver más fuerte o volver con limitaciones.',
            highlight: 'Tu evaluación inicial es gratuita.',
            benefits: [
                'Analizamos tu lesión biomecánicamente',
                'Diseñamos tu plan de readaptación personalizado',
                'Te explicamos exactamente cuánto tiempo toma tu recuperación',
                'Empiezas a moverte (sin riesgo) desde el primer día'
            ],
            duration: '75 minutos',
            buttonText: 'Reserva tu valoración inicial gratuita',
            buttonLink: '/reservar/valoracion-inicial'
        },
        postscript: 'P.D.: Si tu traumatólogo ya te da el alta pero tú sigues con miedo, no es debilidad. Es un síntoma común post-lesión. En DeMovement sabemos cómo enseñarte a confiar en tu cuerpo de nuevo. Eso es parte de la readaptación.',
        faqs: [
            {
                question: '¿No es arriesgado moverse con una lesión?',
                answer: 'No. El riesgo es NO moverse. La atrofia muscular, la rigidez y el dolor crónico son más probables con reposo prolongado que con readaptación activa supervisada.'
            },
            {
                question: '¿Y si el dolor empeora con el movimiento?',
                answer: 'Es señal de que estamos progresando demasiado rápido O no estamos haciendo el movimiento correcto. Por eso la supervisión individual es crítica. En DeMovement ajustamos cada sesión según cómo respondes.'
            },
            {
                question: '¿Cuál es la diferencia con la fisioterapia tradicional?',
                answer: 'La fisioterapia tradicional trata de "recuperar movilidad." La readaptación deportiva te lleva más allá: te prepara para volver a tu deporte con confianza y seguridad.'
            }
        ]
    }
};
