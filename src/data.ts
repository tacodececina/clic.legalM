import { Pillar, NewsArticle, CaseStudy } from './types';

export const PILLARS: Pillar[] = [
  {
    id: 'legal',
    name: 'Área Legal',
    tagline: 'Seguridad y Defensa Jurídica',
    description: 'Te brindamos soluciones legales claras y efectivas, protegiendo tus intereses con un enfoque humano y profesional en cada paso del proceso.',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800',
    services: [
      {
        id: 'familiar',
        title: 'Derecho Familiar',
        description: 'Divorcios, guarda y custodia, paternidad, pensiones y sucesiones.',
        longDescription: 'Te acompañamos en los procesos familiares más sensibles con empatía y rigor jurídico. Gestionamos divorcios, guarda y custodia, reconocimiento de paternidad, establecimiento de pensiones alimenticias y trámites de sucesiones testamentarias e intestamentarias.',
        icon: 'HeartHandshake',
        bullets: ['Divorcios', 'Guarda y custodia', 'Reconocimiento de paternidad', 'Pensiones alimenticias', 'Sucesiones'],
        estimatedTime: 'Variable según el proceso',
        deliverables: ['Asesoría personalizada', 'Representación en juzgados familiar']
      },
      {
        id: 'civil-mercantil',
        title: 'Civil y Mercantil',
        description: 'Elaboración de contratos y recuperación de activos.',
        longDescription: 'Protegemos tu patrimonio y aseguramos el cumplimiento de tus acuerdos comerciales. Redactamos contratos de arrendamiento y compraventa blindados, y gestionamos la recuperación ágil de activos, incluyendo el cobro de pagarés.',
        icon: 'Scale',
        bullets: ['Contratos de arrendamiento y compraventa', 'Recuperación de activos', 'Cobro de pagarés'],
        estimatedTime: 'Variable según el caso',
        deliverables: ['Contratos blindados', 'Gestión de cobranza extrajudicial y judicial']
      },
      {
        id: 'laboral',
        title: 'Derecho Laboral',
        description: 'Defensa ante despidos injustificados y riesgos de trabajo.',
        longDescription: 'Asesoría y representación para proteger los derechos de los trabajadores o prevenir riesgos en empresas. Manejamos defensas ante despidos injustificados y damos asesoría frente a accidentes o riesgos de trabajo.',
        icon: 'Briefcase',
        bullets: ['Defensa por despido injustificado', 'Asesoría en riesgos de trabajo', 'Conciliación laboral'],
        estimatedTime: 'Según plazos de conciliación/juicio',
        deliverables: ['Acompañamiento en Juntas', 'Estrategia de defensa']
      },
      {
        id: 'fiscal',
        title: 'Derecho Fiscal',
        description: 'Asesoría tributaria y defensa ante el SAT.',
        longDescription: 'Asesoría estratégica tributaria para empresas y particulares. Te defendemos ante auditorías del SAT e implementamos litigio fiscal preventivo para evitar sanciones.',
        icon: 'Shield',
        bullets: ['Asesoría estratégica tributaria', 'Defensa ante auditorías del SAT', 'Litigio fiscal preventivo'],
        estimatedTime: 'Continuo o por auditoría',
        deliverables: ['Estrategia fiscal', 'Recursos de revocación y nulidad']
      },
      {
        id: 'administrativo',
        title: 'Derecho Administrativo',
        description: 'Licencias, permisos e impugnación de multas.',
        longDescription: 'Gestionamos integralmente licencias y permisos de funcionamiento para tu negocio. Además, impugnamos multas y resoluciones administrativas injustas emitidas por autoridades.',
        icon: 'FileText',
        bullets: ['Licencias y permisos', 'Impugnación de multas', 'Resoluciones administrativas'],
        estimatedTime: 'Depende del trámite',
        deliverables: ['Licencias autorizadas', 'Recursos administrativos']
      },
      {
        id: 'penal',
        title: 'Derecho Penal',
        description: 'Defensa penal estratégica.',
        longDescription: 'Intervención rápida y defensa especializada ante delitos. Protegemos tu libertad y tus derechos fundamentales con estrategias penales sólidas.',
        icon: 'AlertCircle',
        bullets: ['Defensa ante delitos', 'Denuncias y querellas', 'Acompañamiento en fiscalía'],
        estimatedTime: 'Urgente / Plazos procesales',
        deliverables: ['Estrategia de defensa penal', 'Representación en audiencias']
      },
      {
        id: 'amparo',
        title: 'Juicios de Amparo',
        description: 'Protección de derechos fundamentales.',
        longDescription: 'Promoción de juicios de amparo para proteger tus derechos constitucionales frente a abusos o actos de autoridad que vulneren tus garantías.',
        icon: 'Award',
        bullets: ['Amparo directo', 'Amparo indirecto', 'Suspensión de actos'],
        estimatedTime: 'Plazos constitucionales',
        deliverables: ['Demanda de amparo', 'Seguimiento hasta resolución']
      }
    ],
    caseStudies: [
      {
        id: 'cs-legal-1',
        title: 'Resolución Ágil en Disputa Comercial',
        clientType: 'Pyme local',
        sector: 'Comercio',
        challenge: 'Conflicto por incumplimiento de contrato con un proveedor clave que amenazaba la operatividad del negocio.',
        solution: 'Implementamos una estrategia de mediación que evitó un largo juicio, renegociando términos justos.',
        result: 'Se restableció la operación en menos de 2 meses con acuerdos favorables para ambas partes.'
      }
    ]
  },
  {
    id: 'contable',
    name: 'Área Contable',
    tagline: 'Tranquilidad Administrativa',
    description: 'Mantenemos tus números en orden y al día. Te ayudamos a cumplir con tus obligaciones fiscales sin estrés, optimizando tus recursos de manera segura.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    services: [
      {
        id: 'estrategia-fiscal',
        title: 'Estrategia Fiscal',
        description: 'Planeación y organización de tu negocio.',
        longDescription: 'Desarrollamos una planificación fiscal a la medida para estructurar y organizar tu negocio de manera inteligente, asegurando la optimización legal de los recursos financieros.',
        icon: 'Percent',
        bullets: [
          'Planeación de negocio',
          'Organización financiera',
          'Estrategias de ahorro fiscal'
        ],
        estimatedTime: 'Diagnóstico en 2 semanas',
        deliverables: [
          'Plan de estrategia fiscal',
          'Estructura operativa'
        ]
      },
      {
        id: 'cumplimiento',
        title: 'Cumplimiento',
        description: 'Cumplimiento en tiempo y forma con obligaciones fiscales.',
        longDescription: 'Nos aseguramos de que cumplas a tiempo con tus obligaciones fiscales. Atendemos cualquier requerimiento de las autoridades y realizamos revisiones periódicas de tu buzón tributario.',
        icon: 'CheckCircle',
        bullets: [
          'Cumplimiento de obligaciones fiscales',
          'Atención a requerimientos del SAT',
          'Revisión constante del buzón tributario'
        ],
        estimatedTime: 'Mensual / Continuo',
        deliverables: [
          'Declaraciones presentadas',
          'Reporte de estatus del buzón'
        ]
      },
      {
        id: 'gestion-negocios',
        title: 'Gestión de Negocios',
        description: 'Planificación de recursos, nómina y facturación.',
        longDescription: 'Te ayudamos a planificar los recursos de tu empresa para impulsar su crecimiento. Gestionamos tu nómina, las obligaciones laborales, la facturación diaria y realizamos una regularización fiscal completa.',
        icon: 'FileSpreadsheet',
        bullets: [
          'Planificación de recursos empresariales',
          'Cálculo y gestión de nómina',
          'Facturación y obligaciones laborales',
          'Regularización fiscal completa'
        ],
        estimatedTime: 'Gestión mensual continua',
        deliverables: [
          'Recibos de nómina',
          'Facturas emitidas y reportes de regularización'
        ]
      }
    ],
    caseStudies: [
      {
        id: 'cs-contable-1',
        title: 'Regularización y Ahorro Fiscal',
        clientType: 'Emprendedor',
        sector: 'Servicios',
        challenge: 'Atraso de dos años en declaraciones con requerimientos pendientes por parte del SAT.',
        solution: 'Realizamos una auditoría express, regularizamos la situación y aplicamos deducciones omitidas previamente.',
        result: 'Se evitaron multas mayores y el cliente obtuvo saldo a favor en su declaración anual.'
      }
    ]
  },
  {
    id: 'psicologia',
    name: 'Área de Psicología',
    tagline: 'Acompañamiento en Procesos Críticos',
    description: 'Ofrecemos soporte psicológico clínico y pericial de primer nivel para resguardar la estabilidad emocional de personas y directivos en entornos judiciales y de alta presión organizativa.',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800',
    services: [
      {
        id: 'psicologia-forense',
        title: 'Soporte Psicológico Forense y Judicial',
        description: 'Elaboración de informes periciales, peritajes psicológicos y preparación para careos y juicios complejos.',
        longDescription: 'Actuamos en el ámbito legal-médico elaborando informes psicológicos forenses de alta rigurosidad científica para ser presentados como pruebas en juicios de familia, laborales o penales. Preparamos mental y emocionalmente a testigos o implicados para soportar interrogatorios tensos sin desmoronarse.',
        icon: 'HeartHandshake',
        bullets: [
          'Peritaje psicológico forense oficial (Custodia, incapacidades, daño moral)',
          'Evaluación de secuelas de estrés postraumático o mobbing',
          'Preparación cognitiva y emocional previa a comparecer ante tribunales',
          'Asesoramiento a abogados para interrogatorios cruzados'
        ],
        estimatedTime: '2 a 4 semanas para evaluaciones periciales',
        deliverables: [
          'Informe Pericial Psicológico formal firmado',
          'Sesiones de simulación de testimonios en sala judicial',
          'Recomendaciones de manejo del pánico escénico en juicio'
        ]
      },
      {
        id: 'crisis-corp',
        title: 'Manejo de Crisis Corporativas',
        description: 'Apoyo estratégico e intervención en crisis para directores generales y comités ante disrupciones mayores.',
        longDescription: 'Las reestructuraciones corporativas, fusiones o despidos masivos generan altos niveles de ansiedad laboral y conflicto interpersonal. Asistimos a directivos y departamentos de recursos humanos en la facilitación del cambio, manejo de la ansiedad por despido e intervención inmediata en casos de acoso laboral.',
        icon: 'Briefcase',
        bullets: [
          'Sesiones de desahogo de estrés en juntas directivas',
          'Talleres prácticos de liderazgo bajo escenarios de quiebra o fusión',
          'Mediación psicológica de conflictos entre fundadores o socios de alta dirección',
          'Protocolos preventivos de salud mental corporativa'
        ],
        estimatedTime: 'Personalizado (planes semanales o mensuales)',
        deliverables: [
          'Plan estratégico de salud mental empresarial',
          'Sesiones de mediación confidencial certificadas',
          'Línea de atención psicológica privada para personal'
        ]
      }
    ],
    caseStudies: [
      {
        id: 'cs-psico-1',
        title: 'Preparación psicológica forense para demanda colectiva',
        clientType: 'Grupo de Afectados por Fraude Financiero',
        sector: 'Finanzas / Litigio Civil',
        challenge: 'Afectados presentaban crisis de ansiedad y pánico severo antes de testificar frente a los abogados del fondo acusado.',
        solution: 'Diseñamos un protocolo clínico intensivo de 3 semanas que involucraba desensibilización sistemática por simulación y control de hiperventilación.',
        result: 'El 100% de los afectados logró prestar declaración de manera clara, articulada y con alta credibilidad procesal.'
      }
    ]
  }
];

export const PARTNERS = [
  'PARTNERSHIPS',
  'LEGALCORP',
  'TAX ADVISORS',
  'MINDS&LAW',
  'TECHTRUST'
];

export const NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'La nueva directiva de cumplimiento corporativo y su impacto penal en 2026',
    category: 'Legal',
    date: '10 Julio 2026',
    readTime: '5 min de lectura',
    excerpt: 'Los administradores que no cuenten con canales de denuncia éticos y supervisores externos de cumplimiento podrían afrontar consecuencias penales de forma directa.',
    author: 'Dra. Elena Ruiz',
    authorRole: 'Socia Principal de Derecho Corporativo',
    content: 'Las recientes modificaciones del Código Penal introducen nuevos estándares en materia de Compliance corporativo. A partir de este mes de julio, la omisión de un órgano interno independiente de supervisión financiera constituirá una presunción de dolo para el administrador general. Analizamos los pasos clave para auditar sus procedimientos actuales antes de incurrir en infracciones...'
  },
  {
    id: 'news-2',
    title: 'Optimización fiscal lícita en la era digital: Estrategias para empresas globales',
    category: 'Contabilidad',
    date: '04 Julio 2026',
    readTime: '7 min de lectura',
    excerpt: '¿Cómo las empresas multinacionales aprovechan la ley de startups y deducciones de software para reducir legalmente su impuesto sobre sociedades en más de un 15%?',
    author: 'Lic. Juan Manuel Prado',
    authorRole: 'Director de Consultoría Fiscal',
    content: 'El panorama fiscal digital requiere que la contabilidad no sea un registro reactivo, sino una planeación proactiva. Con la reciente Ley de Startups e Incentivos de Innovación, las inversiones de desarrollo interno en sistemas de IA pueden amortizarse de forma anticipada. Explicamos detalladamente cómo aplicar la deducción fiscal por I+D de manera segura ante Hacienda.'
  },
  {
    id: 'news-3',
    title: 'La salud mental detrás del estrado: El impacto emocional del litigio continuo',
    category: 'Psicología',
    date: '28 Junio 2026',
    readTime: '4 min de lectura',
    excerpt: 'La toma de decisiones bajo estrés agudo demerita la calidad probatoria y la lucidez estratégica de las organizaciones. Técnicas psicológicas aplicadas para ejecutivos.',
    author: 'Mtra. Sofía Altamirano',
    authorRole: 'Coordinadora de Psicología Judicial',
    content: 'La psicología forense no solo sirve como prueba científica en sala de juicio; es una herramienta de salvaguarda cognitiva. Los presidentes ejecutivos y abogados litigantes se enfrentan constantemente al "desgaste por empatía" y síndrome de burnout, lo cual altera su capacidad analítica. Implementar técnicas de meditación focalizada y anclajes emocionales resulta vital.'
  }
];

export const FAQS = [
  {
    q: '¿Cómo se integran el área legal y el área contable en Clic Legal?',
    a: 'Diseñamos estrategias holísticas. Por ejemplo, en una reestructuración corporativa (fusión o venta), nuestro equipo de abogados redacta las cláusulas contractuales blindadas mientras que nuestros auditores estructuran los estados contables y diseñan la planificación fiscal óptima para evitar impuestos innecesarios.'
  },
  {
    q: '¿Qué diferencia a su acompañamiento psicológico de una terapia tradicional?',
    a: 'Nuestra área de psicología cuenta con especialización forense y corporativa. Esto significa que está enfocada de manera pragmática y confidencial en procesos de crisis derivados de disputas legales complejos, juicios estresantes, herencias conflictivas o despidos masivos.'
  },
  {
    q: '¿La primera consulta o evaluación estratégica tiene costo?',
    a: 'Ofrecemos una evaluación estratégica inicial gratuita a través de nuestro formulario en línea o llamada telefónica. En esta sesión de 20 minutos analizamos la viabilidad y le asignamos un equipo interdisciplinario que preparará una propuesta económica formal.'
  }
];
