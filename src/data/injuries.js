export const injuries = {
    'rodilla-lca': {
        title: 'Readaptación de Rodilla',
        subtitle: 'LCA y Menisco',
        heroImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
        content: {
            intro: 'Las lesiones de rodilla, especialmente la rotura del Ligamento Cruzado Anterior (LCA) y las lesiones de menisco, representan uno de los mayores desafíos en el mundo de la readaptación deportiva. En Demovement, entendemos que una lesión de rodilla no es solo un problema biomecánico: es un proceso que afecta tu confianza, tu identidad deportiva y tu calidad de vida. Nuestro enfoque va más allá de la recuperación básica; trabajamos para que recuperes no solo la función, sino también la seguridad psicológica necesaria para volver a disfrutar de tu actividad sin limitaciones ni miedo a una recaída.',
            description: 'El ligamento cruzado anterior es una de las estructuras más importantes para la estabilidad de la rodilla, especialmente durante movimientos de rotación, desaceleración y cambios de dirección. Su rotura, ya sea parcial o completa, requiere un proceso de readaptación meticuloso que respete los tiempos biológicos de cicatrización mientras prepara progresivamente todas las estructuras implicadas: musculatura, propiocepción, control motor y tolerancia al impacto. Las lesiones de menisco, por su parte, pueden ser igual de limitantes, especialmente cuando comprometen la capacidad de carga o generan bloqueos articulares.',
            symptoms: [
                { title: 'Inestabilidad Articular', desc: 'Sensación de que la rodilla "se va" o "cede" durante actividades cotidianas o deportivas, especialmente en giros o cambios de dirección.' },
                { title: 'Inflamación Persistente', desc: 'Hinchazón que aparece tras actividad física, indicando una sobrecarga de las estructuras de la rodilla que aún no están preparadas.' },
                { title: 'Dolor al Cargar Peso', desc: 'Molestias al subir escaleras, ponerse en cuclillas o realizar movimientos que impliquen flexión profunda de rodilla.' },
                { title: 'Pérdida de Rango de Movimiento', desc: 'Dificultad para extender o flexionar completamente la rodilla, muchas veces asociada a rigidez post-quirúrgica o protección muscular.' },
                { title: 'Debilidad Muscular', desc: 'Atrofia visible del cuádriceps, especialmente del vasto medial oblicuo (VMO), fundamental para la estabilidad rotuliana y el control de la rodilla.' }
            ],
            causes: [
                { title: 'Mecanismos de Lesión No Contacto', desc: 'La mayoría de roturas de LCA ocurren sin contacto directo, durante aterrizajes con valgo de rodilla, giros bruscos o desaceleraciones mal controladas. Deportes como fútbol, baloncesto y esquí presentan mayor incidencia.' },
                { title: 'Déficits de Control Motor', desc: 'Patrones de movimiento inadecuados, como el colapso en valgo (rodillas hacia dentro), aumentan dramáticamente el riesgo de lesión. La falta de control de cadera y core son factores predisponentes clave.' },
                { title: 'Factores Anatómicos y Hormonales', desc: 'La anatomía de la escotadura intercondílea, el ángulo Q y factores hormonales (especialmente en mujeres) pueden aumentar la predisposición a lesiones de LCA.' },
                { title: 'Traumatismos Directos', desc: 'Golpes laterales sobre la rodilla o hiperextensiones forzadas pueden causar lesiones de menisco o roturas parciales de ligamentos.' }
            ],
            whyUs: [
                { title: 'Evaluación Biomecánica Completa', desc: 'No nos limitamos a evaluar tu rodilla de forma aislada. Analizamos toda tu cadena cinética: desde el apoyo del pie hasta el control de cadera y core. Utilizamos valoraciones funcionales basadas en evidencia científica para identificar déficits específicos y asimetrías que puedan comprometer tu recuperación o aumentar el riesgo de relesión.' },
                { title: 'Criterios Objetivos de Progresión', desc: 'Cada fase de tu readaptación está guiada por criterios objetivos y validados científicamente. No avanzamos por tiempo, sino por capacidades demostradas. Medimos fuerza (ratios de simetría entre piernas), control neuromuscular, capacidad de salto y tests funcionales específicos de tu deporte.' },
                { title: 'Proximidad y Accesibilidad', desc: 'Ubicados estratégicamente en Las Rozas, a menos de 5 minutos de Majadahonda, facilitamos que tu proceso de readaptación sea constante y progresivo sin que la distancia sea una barrera. Sabemos que la adherencia al tratamiento es fundamental para el éxito.' },
                { title: 'Enfoque Multidisciplinar', desc: 'Trabajamos en coordinación con tu cirujano ortopédico y fisioterapeuta para asegurar que cada fase del proceso está optimizada. Nuestra especialización es el puente entre la fisioterapia y el retorno al deporte de alto rendimiento.' }
            ],
            process: [
                { title: 'FASE 1: Post-quirúrgica Inmediata (Semanas 0-2)', desc: 'Control del dolor y la inflamación, protección de la reconstrucción, activación temprana del cuádriceps.' },
                { title: 'FASE 2: Restauración Funcional (Semanas 2-6)', desc: 'Recuperación del rango de movimiento y marcha normal sin muletas.' },
                { title: 'FASE 3: Fortalecimiento Avanzado (Semanas 6-12)', desc: 'Ejercicios unilaterales y trabajo excéntrico específico.' },
                { title: 'FASE 4: Retorno al Movimiento Deportivo (Semanas 12-20)', desc: 'Reintroducción de carrera y agilidad.' },
                { title: 'FASE 5: Retorno al Deporte Competitivo (Semanas 20-28+)', desc: 'Integración en entrenamientos y tests de alta exigencia.' }
            ],
            prevention: [
                { title: 'Calentamiento Neuromuscular', desc: 'Protocolos como FIFA 11+ o PEP.' },
                { title: 'Fortalecimiento de Cadena Posterior', desc: 'Énfasis en isquiotibiales y glúteos.' },
                { title: 'Corrección de Patrones', desc: 'Evitar el valgo dinámico mediante feedback.' }
            ],
            faq: [
                { question: '¿Cuándo puedo volver a correr?', answer: 'Entre las semanas 12-16, sujeto a criterios de fuerza y estabilidad.' },
                { question: '¿Cuánto tiempo hasta volver al deporte?', answer: 'Generalmente entre 9-12 meses para competición segura.' }
            ],
            calculator: {
                baseWeeks: 24,
                factors: {
                    severity: [
                        { label: 'Grado I (Distensión)', multiplier: 0.6 },
                        { label: 'Grado II (Rotura Parcial)', multiplier: 1.0 },
                        { label: 'Grado III (Rotura Completa)', multiplier: 1.5 }
                    ],
                    compliance: [
                        { label: 'Alta (3+ sesiones/sem)', multiplier: 0.8 },
                        { label: 'Media (1-2 sesiones/sem)', multiplier: 1.2 }
                    ]
                }
            },
            test: {
                title: '¿Tengo inestabilidad de rodilla?',
                questions: [
                    { q: '¿Sientes que la rodilla "cede" al girar?', score: 3 },
                    { q: '¿Tienes inflamación tras caminar mucho?', score: 1 },
                    { q: '¿Evitas correr por miedo a que falle?', score: 2 },
                    { q: '¿Has tenido más de 2 episodios de fallo?', score: 4 }
                ],
                thresholds: [
                    { min: 0, max: 2, result: 'Baja probabilidad de inestabilidad crónica.' },
                    { min: 3, max: 6, result: 'Inestabilidad moderada. Necesitas valoración.' },
                    { min: 7, max: 10, result: 'Alta probabilidad. Readaptación urgente.' }
                ]
            }
        }
    },
    'espalda-lumbalgia': {
        title: 'Readaptación de Espalda',
        subtitle: 'Hernia Discal y Lumbalgia',
        heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
        content: {
            intro: 'El dolor lumbar es una de las causas más frecuentes de limitación funcional. Apostamos por la carga progresiva y el movimiento inteligente.',
            description: 'Abordamos hernias y lumbalgias restaurando la función y reduciendo la sensibilización del sistema nervioso.',
            symptoms: [
                { title: 'Dolor Lumbar', desc: 'Molestia en la zona baja.' },
                { title: 'Ciática', desc: 'Dolor que irradia por la pierna.' }
            ],
            causes: [
                { title: 'Sedentarismo', desc: 'Falta de estabilidad del core.' }
            ],
            whyUs: [
                { title: 'Enfoque Biopsicosocial', desc: 'Entendemos que el dolor no es solo biomecánico.' }
            ],
            process: [
                { title: 'Fase 1: Gestión del Dolor', desc: 'Desensibilización y educación.' },
                { title: 'Fase 2: Movilidad', desc: 'Restauración de rangos controlados.' }
            ],
            prevention: [
                { title: 'Fortalecimiento Core', desc: 'Rutina regular 2-3 veces/sem.' }
            ],
            faq: [
                { question: '¿Debo evitar movimientos?', answer: 'No, el objetivo es recuperar toda la capacidad.' }
            ],
            calculator: {
                baseWeeks: 8,
                factors: {
                    severity: [
                        { label: 'Agudo (<4 semanas)', multiplier: 0.7 },
                        { label: 'Subagudo', multiplier: 1.0 },
                        { label: 'Crónico', multiplier: 1.4 }
                    ],
                    lifestyle: [
                        { label: 'Activo', multiplier: 0.9 },
                        { label: 'Sedentario', multiplier: 1.3 }
                    ]
                }
            },
            test: {
                title: 'Test de Salud Lumbar',
                questions: [
                    { q: '¿Sufres rigidez al levantarte?', score: 1 },
                    { q: '¿El dolor baja por tu pierna?', score: 4 },
                    { q: '¿Te cuesta estar sentado?', score: 2 },
                    { q: '¿Tienes miedo a agacharte?', score: 3 }
                ],
                thresholds: [
                    { min: 0, max: 3, result: 'Dolor mecánico simple.' },
                    { min: 4, max: 7, result: 'Lumbalgia persistente. Trabajar core.' },
                    { min: 8, max: 10, result: 'Posible compromiso discal.' }
                ]
            }
        }
    },
    'hombro-rotador': {
        title: 'Readaptación de Hombro',
        subtitle: 'Manguito Rotador',
        heroImage: 'https://images.unsplash.com/photo-1571019623452-e25f992334f1?q=80&w=2070&auto=format&fit=crop',
        content: {
            intro: 'El hombro requiere control escapular y movilidad torácica. Abordamos tendinopatías y roturas.',
            description: 'Estabilizamos la cabeza humeral y optimizamos el ritmo escapulohumeral.',
            symptoms: [
                { title: 'Arco Doloroso', desc: 'Dolor al elevar el brazo lateralmente.' }
            ],
            causes: [
                { title: 'Sobreuso Overhead', desc: 'Microtraumatismos repetitivos.' }
            ],
            whyUs: [
                { title: 'Análisis Escapular', desc: 'Miramos la cinemática de la escápula.' }
            ],
            process: [
                { title: 'Fase 1: Protección', desc: 'Isométricos para analgesia.' }
            ],
            prevention: [
                { title: 'Rotación Externa', desc: 'Fortalecimiento infraespinoso.' }
            ],
            faq: [
                { question: '¿Necesito cirugía?', answer: 'No siempre, muchas roturas responden a ejercicio.' }
            ],
            calculator: {
                baseWeeks: 12,
                factors: {
                    severity: [
                        { label: 'Tendinosis', multiplier: 1.2 },
                        { label: 'Rotura Parcial', multiplier: 1.5 }
                    ],
                    activity: [
                        { label: 'Deporte Raqueta', multiplier: 1.3 },
                        { label: 'Media', multiplier: 1.0 }
                    ]
                }
            },
            test: {
                title: '¿Es tu manguito rotador?',
                questions: [
                    { q: '¿Te duele al dormir de lado?', score: 3 },
                    { q: '¿Pinchazos al peinarte?', score: 2 },
                    { q: '¿Has perdido fuerza?', score: 3 }
                ],
                thresholds: [
                    { min: 0, max: 4, result: 'Pinzamiento leve.' },
                    { min: 5, max: 8, result: 'Tendinopatía moderada.' }
                ]
            }
        }
    },
    'tobillo-esguince': {
        title: 'Readaptación de Tobillo',
        subtitle: 'Esguinces Crónicos',
        heroImage: 'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?q=80&w=2074&auto=format&fit=crop',
        content: {
            intro: 'El 70% de esguinces mal curados derivan en inestabilidad crónica. Recuperamos tu estabilidad y confianza.',
            description: 'Trabajamos los ligamentos laterales y la propiocepción profunda.',
            symptoms: [
                { title: 'Inestabilidad', desc: 'Sensación de que el pie "cede".' }
            ],
            causes: [
                { title: 'Inversión Forzada', desc: 'Torcedura brusca del pie.' }
            ],
            whyUs: [
                { title: 'Propiocepción Progresiva', desc: 'Ejercicios dinámicos y reactivos.' }
            ],
            process: [
                { title: 'Fase 1: PEACE & LOVE', desc: 'Control de inflamación inicial.' }
            ],
            prevention: [
                { title: 'Ejercicios Peroneos', desc: 'Clave para frenar la inversión.' }
            ],
            faq: [
                { question: '¿Cuándo volver a correr?', answer: 'Cuando el apoyo unipodal sea estable.' }
            ],
            calculator: {
                baseWeeks: 6,
                factors: {
                    severity: [
                        { label: 'Grado I', multiplier: 0.7 },
                        { label: 'Grado II', multiplier: 1.1 },
                        { label: 'Grado III', multiplier: 1.6 }
                    ],
                    history: [
                        { label: 'Primero', multiplier: 0.9 },
                        { label: 'Recurrente', multiplier: 1.4 }
                    ]
                }
            },
            test: {
                title: '¿Tienes inestabilidad crónica?',
                questions: [
                    { q: '¿Se te ha torcido más de una vez?', score: 3 },
                    { q: '¿Te da miedo correr en campo?', score: 2 },
                    { q: '¿Notas el tobillo "suelto"?', score: 3 }
                ],
                thresholds: [
                    { min: 0, max: 3, result: 'Tobillo sano.' },
                    { min: 4, max: 8, result: 'ICT detectada.' }
                ]
            }
        }
    }
};
