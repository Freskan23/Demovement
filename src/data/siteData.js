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
        subcategorias: {
            dolor_lumbar: {
                title: 'Dolor Lumbar',
                description: 'Lumbalgia, ciática y rigidez. Aprende a moverte sin miedo.',
                content: {
                    intro: 'El dolor lumbar suele venir acompañado de miedo: "me voy a romper", "tengo la espalda débil". Nada más lejos de la realidad. Tu espalda es fuerte y robusta, y necesita movimiento para estar sana.',
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
                    cta: 'Hablar con especialista en espalda'
                }
            },
            hernia_discal: {
                title: 'Hernia Discal',
                description: 'Diagnóstico de hernia o protusión. Evita la cirugía con ejercicio.',
                content: {
                    intro: 'Tener una hernia discal NO es una sentencia de por vida. De hecho, muchas hernias se reabsorben solas con el tiempo. Lo importante es tener una musculatura fuerte que proteja ese disco.',
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
                    cta: 'Evaluar mi hernia'
                }
            },
            cervical: {
                title: 'Dolor Cervical',
                description: 'Tensión cuello, hombros y dolor de cabeza tensional.',
                content: {
                    intro: 'El "cuello de texto" y el estrés se acumulan en tus cervicales. La solución no es solo masajear, es fortalecer la musculatura profunda del cuello para que tu cabeza "pese menos".',
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
                    cta: 'Aliviar mi cuello'
                }
            }
        }
    },
    hombro: {
        title: 'Hombro',
        description: 'Tendinitis, dolor al levantar el brazo, hombro congelado.',
        intro: 'El hombro necesita un equilibrio fino entre movilidad y estabilidad. Recuperamos ese equilibrio.',
        subcategorias: {
            manguito: {
                title: 'Manguito Rotador',
                description: 'Dolor e imposibilidad para levantar el brazo o dormir sobre ese lado.',
                content: {
                    intro: 'Muy común en mujeres +40 y deportistas de raqueta. A veces se confunde con "hombro congelado". El trabajo de fuerza suave es clave para dejar de sentir pinzamientos.',
                    mitos: [
                        'MITO: "No puedo mover el brazo nunca más" → REALIDAD: El movimiento controlado cura.',
                        'MITO: "La cirugía es la única opción" → REALIDAD: El tratamiento conservador (ejercicio) tiene tasas de éxito altísimas.',
                        'MITO: "Si cruje es malo" → REALIDAD: Los ruidos articulares sin dolor son normales.'
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
                    cta: 'Recuperar mi hombro'
                }
            }
        }
    },
    rodilla: {
        title: 'Rodilla',
        description: 'Lesiones de ligamentos, menisco o desgaste.',
        intro: 'La rodilla soporta gran carga. Recuperar su función es vital para volver a caminar o correr sin dolor.',
        subcategorias: {
            lca: {
                title: 'Ligamento Cruzado (LCA)',
                description: 'Recuperación tras operación o tratamiento conservador.',
                content: {
                    intro: 'La lesión más temida, pero con un camino muy claro. Sea operado o conservador, tu rodilla puede volver a ser estable y fuerte si respetamos los tiempos biológicos.',
                    mitos: [
                        'MITO: "No podré volver a esquiar/jugar" → REALIDAD: Con buena readaptación, la vuelta al deporte es el objetivo.',
                        'MITO: "La rodillera me protege" → REALIDAD: Tu mejor rodillera es tu cuádriceps.',
                        'MITO: "Cuanto antes corra, mejor" → REALIDAD: Las prisas son la causa #1 de recaída.'
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
                    cta: 'Plan recuperar rodilla'
                }
            },
            menisco: {
                title: 'Menisco',
                description: 'Dolor al girar o bloquear la rodilla. Recupera la función sin cirugía en la mayoría de casos.',
                content: {
                    intro: 'El menisco es el amortiguador de tu rodilla. Muchas roturas degenerativas NO necesitan operación, sino mejorar la estabilidad de la pierna y la absorción de impactos.',
                    mitos: [
                        'MITO: "Solo se cura operando" → REALIDAD: El ejercicio es igual de efectivo que la cirugía en la mayoría de roturas.',
                        'MITO: "Tengo un trozo suelto" → REALIDAD: Tu cuerpo puede adaptar la articulación perfectamente.',
                        'MITO: "No volveré a correr" → REALIDAD: Muchos corredores viven con roturas de menisco asintomáticas.'
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
                    cta: 'Valorar mi menisco'
                }
            },
            desgaste: {
                title: 'Artrosis / Desgaste',
                description: 'El movimiento es el mejor tratamiento para el desgaste articular.',
                content: {
                    intro: 'El desgaste es normal con la edad (como las canas). "Hueso contra hueso" suena terrible, pero el dolor disminuye drásticamente si tus músculos absorben el impacto en lugar de tu articulación.',
                    mitos: [
                        'MITO: "Si me muevo se desgasta más" → REALIDAD: El sedentarismo oxida la articulación; el movimiento la engrasa.',
                        'MITO: "Solo me queda la prótesis" → REALIDAD: Una buena musculatura puede retrasar o evitar la prótesis años.',
                        'MITO: "Debo dejar de hacer deporte" → REALIDAD: Debes adaptar el deporte, no abandonarlo.'
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
                    cta: 'Programa Artrosis'
                }
            }
        }
    },
    tobillo: {
        title: 'Tobillo',
        description: 'Esguinces crónicos, inestabilidad y recuperación post-fractura.',
        intro: 'El tobillo es tu conexión con el suelo. Si falla, todo lo que hay arriba (rodilla, cadera, espalda) sufrirá las consecuencias.',
        subcategorias: {
            esguince: {
                title: 'Esguince de Tobillo',
                description: 'Recuperación tras torceduras. Evita que se vuelva crónico.',
                content: {
                    intro: 'Un esguince mal curado es el primer paso para una inestabilidad crónica. No se trata solo de que baje la inflamación, sino de recuperar el control y los reflejos de tu tobillo.',
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
                    cta: 'Recuperar mi tobillo'
                }
            }
        }
    },
    cadera: {
        title: 'Cadera',
        description: 'Bursitis, choque femoroacetabular y molestias en el glúteo.',
        intro: 'La cadera es el motor de potencia de tu cuerpo. Unos glúteos fuertes son la mejor medicina para cualquier dolor de cadera o zona lumbar.',
        subcategorias: {
            bursitis: {
                title: 'Bursitis / Trocanteritis',
                description: 'Dolor en el lateral de la cadera, especialmente al dormir de lado.',
                content: {
                    intro: 'Lo que llamamos bursitis suele ser en realidad una tendinopatía de los glúteos. El reposo no lo cura; necesitamos fortalecer la zona para que soporte la carga.',
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
                    cta: 'Aliviar mi cadera'
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
