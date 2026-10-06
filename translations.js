// ==========================================================================
// MULTILINGUAL TRANSLATIONS (EN, ES, JA)
// ==========================================================================

const translations = {
  en: {
    // Nav
    nav_about: "About Me",
    nav_projects: "Projects",
    nav_community: "Community",
    nav_contact: "Contact",
    nav_connect: "Connect",

    // Hero
    hero_status: "Buenos Aires, Argentina &bull; Active in Cyber Defense &amp; DFIR",
    hero_name: "Paula <span class=\"highlight-text\">Villegas</span>",
    hero_role: "<span>Cybersecurity Analyst</span><span>&bull;</span><span>SOC &amp; Incident Response</span><span>&bull;</span><span>DFIR Enthusiast</span>",
    hero_lead: "Over 3.5 years of specialized experience in Security Operations Centers (SOC) collaborating with international teams in 24/7 monitoring, phishing triage, and incident response. Driven by a passion for Digital Forensics and Incident Response (DFIR), Human-AI defense collaboration, and community mentorship.",
    hero_cta_about: "View Career Trajectory",
    hero_cta_projects: "Technical Projects",
    hero_cta_community: "Community &amp; Talks",
    hero_cta_github: "GitHub @PuaBlue",
    hero_cta_linkedin: "LinkedIn Profile",
    hero_cta_ig: "Instagram @pua.blue",

    // Stats
    stat_soc_lbl: "Years of SOC Experience",
    stat_cert_lbl: "Verified Certifications",
    stat_speaker_lbl: "Featured Conference Speaker",
    stat_edu_lbl: "Computer Engineering (UNAJ)",

    // Section 1: About Me
    sec1_badge: "SECTION 01",
    sec1_title: "About Me",
    sec1_desc: "My professional journey across high-tempo SOC environments, engineering education, technical skillset, and defensive certifications.",
    about_summary_title: "Professional Summary",
    about_summary_p1: "I am a Cybersecurity Analyst with three and a half years of specialized experience in SOC environments, collaborating alongside multinational teams to deliver robust threat monitoring, alert triage, and incident response.",
    about_summary_p2: "My technical focus is propelled by a deep interest in <strong>Digital Forensics and Incident Response (DFIR)</strong> and the emerging synergy between AI agents and human analysts to accelerate triage without sacrificing forensic integrity.",
    about_summary_p3: "Deeply committed to continuous learning, I actively contribute to cybersecurity communities, lead mentoring initiatives for women in cyber defense, and speak at conferences to share knowledge and foster resilient digital ecosystems.",
    
    academic_degree_title: "Computer Engineering Degree",
    academic_degree_meta: "Universidad Nacional Arturo Jauretche (2021 — Present)",
    academic_degree_gpa: "GPA 3.7 &bull; 18 subjects passed",
    academic_prog_title: "Programmer Analyst Intermediate Degree",
    academic_prog_meta: "Strong foundations in algorithms, databases, and multi-language development",
    academic_prog_status: "Nearing completion",

    philosophy_title: "Security &amp; Growth Mindset:",
    philosophy_quote: "\"Effective defense requires proactive curiosity, relentless attention to anomalous signals, and empowering the community through shared knowledge.\"",

    lang_es: "🇪🇸 Spanish: Native",
    lang_en: "🇬🇧 English: Advanced (B2)",
    lang_ja: "🇯🇵 Japanese: Basic (JLPT N5)",

    // Competencies
    comp_title: "Technical Competencies",
    comp_siem_title: "Monitoring &amp; Orchestration",
    comp_siem_desc: "Splunk SIEM, Splunk SOAR, Cortex, OSSIM, FortiSIEM. Alert correlation, triage pipelines, and case lifecycle management.",
    comp_xdr_title: "Endpoint &amp; Extended Detection",
    comp_xdr_desc: "Palo Alto Cortex XDR, Microsoft Defender, Trend Micro. Process inspection, containment, and endpoint telemetry.",
    comp_dfir_title: "Investigation &amp; Reconnaissance",
    comp_dfir_desc: "Nessus vulnerability assessments, Maltego graph analysis, open-source intelligence (OSINT), and network traffic analysis.",
    comp_dev_title: "Databases &amp; Programming",
    comp_dev_desc: "SQL, NoSQL, Python (basic scripting &amp; automation), Java, C#, JavaScript. Foundations in software development lifecycle.",

    // Timeline
    timeline_title: "Career Trajectory Timeline",
    timeline_desc: "A chronological progression of operational experience, responsibilities, and team impact.",
    t1_role: "Cybersecurity Analyst",
    t1_date: "October 2025 — Present",
    t1_b1: "Monitor security events and execute structured incident response procedures leveraging Human-AI collaboration.",
    t1_b2: "Manage enterprise ticketing systems for comprehensive, auditable case tracking and root-cause documentation.",
    t1_b3: "Collaborate actively with global engineering and defense teams on complex case investigations and active phishing analysis.",
    t1_b4: "Utilize enterprise detection tools including Microsoft Defender, Cortex XDR, and Trend Micro.",

    t2_role: "Security Delivery Associate",
    t2_company: "Accenture AR &bull; Global Operations",
    t2_date: "January 2024 — October 2025",
    t2_b1: "Monitored, triaged, and prioritized high-volume security alerts utilizing Splunk SIEM and Splunk SOAR.",
    t2_b2: "Maintained incident management systems to ensure swift ticket escalation and strict SLA adherence.",
    t2_b3: "Applied actionable threat intelligence and newly released vulnerability reports directly into internal monitoring playbooks.",
    t2_b4: "Collaborated closely with global L2 analysts for in-depth forensics, investigations, and incident resolution.",
    t2_b5: "Facilitated onboarding, technical training, and mentoring support for new incoming team members.",

    t3_role: "Cybersecurity Analyst (CSIRT)",
    t3_company: "Ministry of Security of Argentine Nation",
    t3_date: "June 2023 — January 2024",
    t3_b1: "Monitored and investigated critical security incidents leveraging OSSIM and FortiSIEM platforms.",
    t3_b2: "Conducted systematic vulnerability assessments utilizing Nessus and OSINT reconnaissance techniques.",
    t3_b3: "Executed front-line incident response, event triage, and authored detailed technical briefing reports on findings.",

    cert_title: "Education &amp; Professional Certifications",
    cert_msft_title: "Microsoft Learn Badges",
    cert_msft_meta: "Official Badges &amp; Modules",
    cert_msft_status: "Verified Profile &bull; View Badges",
    msft_banner_title: "Microsoft Learn &bull; Badges &amp; Achievements",
    msft_banner_desc: "Continuous technical skilling in cybersecurity operations, threat protection, and Microsoft Defender / Azure architectures.",
    msft_banner_btn: "View Microsoft Badges",

    // Section 2: Technical Projects
    sec2_badge: "SECTION 02",
    sec2_title: "Technical Projects",
    sec2_desc: "Defensive engineering implementations, incident response tooling, detection correlation, and programming foundations.",

    github_banner_title: "Public Repositories on GitHub",
    github_banner_desc: "Explore my open-source security tools, detection logic, and development projects directly on GitHub.",
    github_banner_btn: "View GitHub @PuaBlue",

    p5_cat: "Technical Research",
    p5_title: "Human-AI Collaboration in SOC Incident Response",
    p5_desc: "Implementing and evaluating AI-assisted workflows in live SOC environments to automate first-pass phishing categorization, IOC extraction, and log aggregation while keeping seasoned analysts in the loop for nuanced forensic validation.",
    p5_link: "View Experience",

    p6_cat: "Defense Engineering",
    p6_title: "Multi-Platform SIEM Alert Correlation &amp; Threat Intel",
    p6_desc: "Operational expertise across Splunk, OSSIM, and FortiSIEM integrating real-time vulnerability advisories and threat intelligence feeds into detection rules, false-positive reduction routines, and enterprise escalation paths.",
    p6_link: "View Timeline",

    p7_cat: "Software &amp; Scripting",
    p7_title: "Programmer Analyst Foundations &amp; Automation",
    p7_desc: "Developing automation tools and investigative scripts leveraging Python, Java, C#, and SQL/NoSQL databases. Bridging the gap between software engineering architecture and defensive security controls.",
    p7_link: "Explore Repositories",

    // Section 3: Community & Initiatives
    sec3_badge: "SECTION 03",
    sec3_title: "Community &amp; Initiatives",
    sec3_desc: "Conference keynote speaking, mentorship for women in cybersecurity, educational content creation, and community leadership.",

    p1_cat: "Conference Speaker",
    p1_title: "\"Press Play: Level One of the Professional World\"",
    p1_desc: "Delivered a featured conference talk at Ekoparty 2025 focusing on career onboarding in cybersecurity, breaking into blue teaming, navigating technical growth curves, and turning entry-level SOC roles into long-term defensive trajectories.",
    p1_stat: "★ Ekoparty 2025 Speaker",
    p1_sub: "&bull; Career Navigation &amp; Blue Team Entry",
    p1_link: "View LinkedIn Talk Summary",

    p2_cat: "Mentorship &amp; Community",
    p2_title: "Bug Bounty Girls Club &amp; Women Hacks Panel",
    p2_desc: "Active volunteer at Bug Bounty Girls Club, co-creating technical content and mentoring women in Cyber Defense through the BlueOps Girls initiative. Selected to participate in the prestigious <strong>Women Hacks panel at Ekoparty 2026</strong> representing the club to foster diversity in threat analysis and defensive engineering.",
    p2_stat: "★ Women Hacks Panel @ Ekoparty 2026",
    p2_sub: "&bull; BlueOps Girls Mentor",
    p2_link: "View Community Profile",
    p2_link_site: "Official Website",
    p2_link_post: "View Presentation Post",

    p3_cat: "Community &amp; Diversity",
    p3_title: "SteamGirls Community &amp; Cyber Empowerment",
    p3_desc: "Active participant in the SteamGirls community, contributing to initiatives that empower women across STEAM disciplines and cybersecurity. Collaborating on networking, technical sessions, and community events at Ekoparty to support upcoming talent.",
    p3_stat: "★ SteamGirls Member",
    p3_sub: "&bull; STEAM &amp; Cyber Empowerment",
    p3_link: "View SteamGirls Post",

    p4_cat: "Content Creation &amp; Education",
    p4_title: "@pua.blue &bull; Cybersecurity Content &amp; Blue Teaming",
    p4_desc: "Creator of @pua.blue, an educational cybersecurity initiative on Instagram sharing insights on Blue Teaming, SOC operations, DFIR fundamentals, threat hunting, and encouraging women and newcomers to thrive in cyber defense.",
    p4_stat: "★ Educational Infosec Channel",
    p4_sub: "&bull; Community Growth &amp; Defense Tips",
    p4_link: "Follow @pua.blue on Instagram",

    // Section 4: Contact
    sec_contact_badge: "COMMUNICATIONS",
    sec_contact_title: "Get in Touch",
    sec_contact_desc: "Interested in discussing SOC/DFIR opportunities, speaking invitations, or community mentorship? Send a message directly to my inbox below.",

    contact_form_title: "Send a Direct Message",
    contact_form_inst: "Your email address is only used to reply to your inquiry. Messages are delivered straight to my personal inbox.",
    form_lbl_name: "Your Name / Organization",
    form_lbl_email: "Your Email",
    form_lbl_subject: "Subject / Purpose",
    form_opt_soc: "DFIR &amp; SOC Career Opportunity",
    form_opt_speaking: "Conference / Speaking Invitation (Ekoparty &amp; More)",
    form_opt_mentorship: "Community &amp; Mentorship (Bug Bounty Girls / SteamGirls)",
    form_opt_general: "General Professional Inquiry",
    form_lbl_msg: "Message",
    form_btn_send: "Send Message",
    form_anti_spam: "Bot-Protected Dispatch",

    contact_gh_title: "GitHub Profile",
    contact_gh_desc: "Public security repos &amp; code",
    contact_msft_title: "Microsoft Learn",
    contact_msft_desc: "Verified badges &amp; skilling achievements",
    contact_li_title: "LinkedIn Profile",
    contact_li_desc: "Connect, network, &amp; view recommendations",
    contact_ig_title: "Instagram (Content)",
    contact_ig_desc: "Cybersecurity education &amp; defensive tips",
    contact_loc_title: "Location &amp; Work Mode",
    contact_loc_val: "Buenos Aires, Argentina",
    contact_loc_desc: "Open to remote &amp; international engagements",
    contact_priv_title: "Privacy &amp; Security Note",
    contact_priv_desc: "Direct plaintext emails are obscured to mitigate automated bot scrapers and phishing harvesters. All submissions route securely to Paula's authenticated inbox.",

    // Footer
    footer_rights: "Cybersecurity &amp; DFIR Portfolio",
    footer_top: "Back to Top &uarr;"
  },

  es: {
    // Nav
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_community: "Comunidad",
    nav_contact: "Contacto",
    nav_connect: "Conectar",

    // Hero
    hero_status: "Buenos Aires, Argentina &bull; Activa en Ciberdefensa y DFIR",
    hero_name: "Paula <span class=\"highlight-text\">Villegas</span>",
    hero_role: "<span>Analista de Ciberseguridad</span><span>&bull;</span><span>SOC y Respuesta a Incidentes</span><span>&bull;</span><span>Entusiasta de DFIR</span>",
    hero_lead: "Más de 3.5 años de experiencia especializada en Centros de Operaciones de Seguridad (SOC), colaborando con equipos internacionales en monitoreo 24/7, triaje de phishing y respuesta a incidentes. Con gran interés en Informática Forense y Respuesta a Incidentes (DFIR), colaboración Human-AI en ciberdefensa y mentoría comunitaria.",
    hero_cta_about: "Ver Trayectoria Profesional",
    hero_cta_projects: "Proyectos Técnicos",
    hero_cta_community: "Comunidad y Charlas",
    hero_cta_github: "GitHub @PuaBlue",
    hero_cta_linkedin: "Perfil de LinkedIn",
    hero_cta_ig: "Instagram @pua.blue",

    // Stats
    stat_soc_lbl: "Años de Experiencia en SOC",
    stat_cert_lbl: "Certificaciones Verificadas",
    stat_speaker_lbl: "Oradora Destacada en Ekoparty",
    stat_edu_lbl: "Ingeniería en Informática (UNAJ)",

    // Section 1: About Me
    sec1_badge: "SECCIÓN 01",
    sec1_title: "Sobre mí",
    sec1_desc: "Mi recorrido profesional en entornos SOC de ritmo acelerado, formación en ingeniería, habilidades técnicas y certificaciones defensivas.",
    about_summary_title: "Resumen Profesional",
    about_summary_p1: "Soy Analista de Ciberseguridad con 3.5 años de experiencia especializada en entornos SOC, colaborando junto a equipos multinacionales en monitoreo de amenazas, triaje de alertas y respuesta a incidentes.",
    about_summary_p2: "Mi enfoque técnico se impulsa por un profundo interés en <strong>Informática Forense y Respuesta a Incidentes (DFIR)</strong> y la sinergia emergente entre agentes de IA y analistas humanos para acelerar el triaje preservando la integridad forense.",
    about_summary_p3: "Comprometida con el aprendizaje continuo, participo activamente en comunidades de ciberseguridad, lidero iniciativas de mentoría para mujeres en ciberdefensa y expongo en conferencias para compartir conocimiento y crear ecosistemas digitales resilientes.",

    academic_degree_title: "Ingeniería en Informática",
    academic_degree_meta: "Universidad Nacional Arturo Jauretche (2021 — Presente)",
    academic_degree_gpa: "Promedio 3.7 &bull; 18 materias aprobadas",
    academic_prog_title: "Analista Programador (Título Intermedio)",
    academic_prog_meta: "Sólidas bases en algoritmos, bases de datos y desarrollo en múltiples lenguajes",
    academic_prog_status: "Próxima a finalizar",

    philosophy_title: "Mentalidad de Seguridad y Crecimiento:",
    philosophy_quote: "\"Una defensa efectiva requiere curiosidad proactiva, atención rigurosa a las señales anómalas y empoderar a la comunidad mediante el conocimiento compartido.\"",

    lang_es: "🇪🇸 Español: Nativo",
    lang_en: "🇬🇧 Inglés: Avanzado (B2)",
    lang_ja: "🇯🇵 Japonés: Básico (JLPT N5)",

    // Competencies
    comp_title: "Competencias Técnicas",
    comp_siem_title: "Monitoreo y Orquestación",
    comp_siem_desc: "Splunk SIEM, Splunk SOAR, Cortex, OSSIM, FortiSIEM. Correlación de alertas, flujos de triaje y gestión del ciclo de vida de casos.",
    comp_xdr_title: "Detección de Endpoint y Extendida",
    comp_xdr_desc: "Palo Alto Cortex XDR, Microsoft Defender, Trend Micro. Inspección de procesos, contención y telemetría de endpoints.",
    comp_dfir_title: "Investigación y Reconocimiento",
    comp_dfir_desc: "Evaluaciones de vulnerabilidades con Nessus, análisis de grafos con Maltego, inteligencia de fuentes abiertas (OSINT) y análisis de tráfico de red.",
    comp_dev_title: "Bases de Datos y Programación",
    comp_dev_desc: "SQL, NoSQL, Python (scripting básico y automatización), Java, C#, JavaScript. Fundamentos en el ciclo de vida del software.",

    // Timeline
    timeline_title: "Línea de Tiempo de Trayectoria",
    timeline_desc: "Progresión cronológica de experiencia operativa, responsabilidades e impacto en equipos.",
    t1_role: "Analista de Ciberseguridad",
    t1_date: "Octubre 2025 — Presente",
    t1_b1: "Monitoreo de eventos de seguridad y ejecución de procedimientos de respuesta a incidentes con colaboración Human-AI.",
    t1_b2: "Gestión de sistemas de tickets para seguimiento exhaustivo y auditable de casos y documentación de causa raíz.",
    t1_b3: "Colaboración activa con equipos globales de ingeniería y defensa en investigaciones de casos complejos y análisis de phishing.",
    t1_b4: "Uso de herramientas empresariales de detección incluyendo Microsoft Defender, Cortex XDR y Trend Micro.",

    t2_role: "Asociada de Entrega de Seguridad",
    t2_company: "Accenture AR &bull; Operaciones Globales",
    t2_date: "Enero 2024 — Octubre 2025",
    t2_b1: "Monitoreo, triaje y priorización de alertas de alto volumen con Splunk SIEM y Splunk SOAR.",
    t2_b2: "Mantenimiento de sistemas de gestión de incidentes garantizando escalaciones rápidas y cumplimiento de SLAs.",
    t2_b3: "Aplicación de inteligencia de amenazas y reportes de vulnerabilidades a playbooks internos de monitoreo.",
    t2_b4: "Colaboración estrecha con analistas L2 globales para análisis forense detallado y resolución de incidentes.",
    t2_b5: "Facilitación del onboarding, capacitación técnica y mentoría para nuevos integrantes del equipo.",

    t3_role: "Analista de Ciberseguridad (CSIRT)",
    t3_company: "Ministerio de Seguridad de la Nación Argentina",
    t3_date: "Junio 2023 — Enero 2024",
    t3_b1: "Monitoreo e investigación de incidentes críticos de seguridad con plataformas OSSIM y FortiSIEM.",
    t3_b2: "Realización de evaluaciones sistemáticas de vulnerabilidades con Nessus y técnicas de reconocimiento OSINT.",
    t3_b3: "Ejecución de respuesta a incidentes en primera línea, triaje y redacción de informes técnicos detallados.",

    cert_title: "Educación y Certificaciones Profesionales",
    cert_msft_title: "Insignias de Microsoft Learn",
    cert_msft_meta: "Insignias y Módulos Oficiales",
    cert_msft_status: "Perfil Verificado &bull; Ver Insignias",
    msft_banner_title: "Microsoft Learn &bull; Insignias y Logros",
    msft_banner_desc: "Capacitación técnica continua en operaciones de ciberseguridad, inteligencia de amenazas y arquitecturas Microsoft Defender / Azure.",
    msft_banner_btn: "Ver Insignias de Microsoft",

    // Section 2: Technical Projects
    sec2_badge: "SECCIÓN 02",
    sec2_title: "Proyectos Técnicos",
    sec2_desc: "Implementaciones prácticas de ingeniería defensiva, herramientas de respuesta a incidentes, correlación en SIEM y desarrollo.",

    github_banner_title: "Repositorios Públicos en GitHub",
    github_banner_desc: "Explora mis herramientas de seguridad, lógica de detección y proyectos de código abierto en GitHub.",
    github_banner_btn: "Ver GitHub @PuaBlue",

    p5_cat: "Investigación Técnica",
    p5_title: "Colaboración Human-AI en Respuesta a Incidentes en SOC",
    p5_desc: "Implementación y evaluación de flujos asistidos por IA en entornos SOC reales para automatizar la categorización de phishing, extracción de IOCs y agregación de logs, manteniendo a analistas expertos en el proceso para validación forense.",
    p5_link: "Ver Experiencia",

    p6_cat: "Ingeniería Defensiva",
    p6_title: "Correlación de Alertas Multiplataforma en SIEM y Threat Intel",
    p6_desc: "Experiencia operativa en Splunk, OSSIM y FortiSIEM integrando avisos de vulnerabilidades en tiempo real y fuentes de inteligencia de amenazas en reglas de detección y reducción de falsos positivos.",
    p6_link: "Ver Línea de Tiempo",

    p7_cat: "Software y Scripting",
    p7_title: "Fundamentos de Analista Programador y Automatización",
    p7_desc: "Desarrollo de herramientas de automatización y scripts de investigación con Python, Java, C# y bases de datos SQL/NoSQL. Conectando la arquitectura de software con los controles defensivos de seguridad.",
    p7_link: "Explorar Repositorios",

    // Section 3: Community & Initiatives
    sec3_badge: "SECCIÓN 03",
    sec3_title: "Comunidad e Iniciativas",
    sec3_desc: "Charlas en conferencias, mentoría para mujeres en ciberseguridad, creación de contenido educativo y liderazgo comunitario.",

    p1_cat: "Oradora en Conferencia",
    p1_title: "\"Press Play: Nivel Uno del Mundo Profesional\"",
    p1_desc: "Charla destacada en Ekoparty 2025 sobre inserción laboral en ciberseguridad, inicio en blue teaming, curvas de aprendizaje técnico y cómo potenciar roles iniciales de SOC hacia trayectorias defensivas a largo plazo.",
    p1_stat: "★ Oradora en Ekoparty 2025",
    p1_sub: "&bull; Orientación Profesional e Inicio en Blue Team",
    p1_link: "Ver resumen de la charla en LinkedIn",

    p2_cat: "Mentoría y Comunidad",
    p2_title: "Bug Bounty Girls Club y Panel Women Hacks",
    p2_desc: "Voluntaria activa en Bug Bounty Girls Club, co-creando contenido técnico y mentoreando a mujeres en Ciberdefensa a través de la iniciativa BlueOps Girls. Seleccionada para participar en el prestigioso panel <strong>Women Hacks en Ekoparty 2026</strong> representando al club para impulsar la diversidad en análisis de amenazas e ingeniería defensiva.",
    p2_stat: "★ Panel Women Hacks @ Ekoparty 2026",
    p2_sub: "&bull; Mentora en BlueOps Girls",
    p2_link: "Ver Perfil Comunitario",
    p2_link_site: "Sitio Oficial",
    p2_link_post: "Ver Publicación del Panel",

    p3_cat: "Comunidad y Diversidad",
    p3_title: "Comunidad SteamGirls y Empoderamiento Cyber",
    p3_desc: "Participante activa en la comunidad SteamGirls, colaborando en iniciativas que empoderan a mujeres en disciplinas STEAM y ciberseguridad. Participación en networking, sesiones técnicas y actividades en Ekoparty para apoyar nuevos talentos.",
    p3_stat: "★ Miembro de SteamGirls",
    p3_sub: "&bull; Empoderamiento STEAM y Ciber",
    p3_link: "Ver Publicación de SteamGirls",

    p4_cat: "Creación de Contenido y Educación",
    p4_title: "@pua.blue &bull; Contenido de Ciberseguridad y Blue Team",
    p4_desc: "Creadora de @pua.blue, iniciativa educativa en Instagram sobre Blue Teaming, operaciones en SOC, fundamentos de DFIR, cacería de amenazas y motivación para que mujeres y principiantes crezcan en ciberdefensa.",
    p4_stat: "★ Canal Educativo de Infosec",
    p4_sub: "&bull; Crecimiento Comunitario y Tips Defensivos",
    p4_link: "Seguir @pua.blue en Instagram",

    // Section 4: Contact
    sec_contact_badge: "COMUNICACIONES",
    sec_contact_title: "Contacto",
    sec_contact_desc: "¿Interés en conversar sobre oportunidades en SOC/DFIR, invitaciones a conferencias o mentoría comunitaria? Envíame un mensaje directamente.",

    contact_form_title: "Enviar un Mensaje Directo",
    contact_form_inst: "Tu correo solo se utilizará para responder tu consulta. Los mensajes llegan directamente a mi casilla personal.",
    form_lbl_name: "Tu Nombre / Organización",
    form_lbl_email: "Tu Correo Electrónico",
    form_lbl_subject: "Asunto / Propósito",
    form_opt_soc: "Oportunidad Laboral en DFIR y SOC",
    form_opt_speaking: "Invitación a Conferencia / Charla (Ekoparty y más)",
    form_opt_mentorship: "Comunidad y Mentoría (Bug Bounty Girls / SteamGirls)",
    form_opt_general: "Consulta Profesional General",
    form_lbl_msg: "Mensaje",
    form_btn_send: "Enviar Mensaje",
    form_anti_spam: "Envío Protegido contra Bots",

    contact_gh_title: "Perfil de GitHub",
    contact_gh_desc: "Repositorios y código de seguridad",
    contact_msft_title: "Microsoft Learn",
    contact_msft_desc: "Insignias verificadas y logros de aprendizaje",
    contact_li_title: "Perfil de LinkedIn",
    contact_li_desc: "Conectar, crear redes y ver recomendaciones",
    contact_ig_title: "Instagram (Contenido)",
    contact_ig_desc: "Educación en ciberseguridad y tips defensivos",
    contact_loc_title: "Ubicación y Modalidad",
    contact_loc_val: "Buenos Aires, Argentina",
    contact_loc_desc: "Disponible para roles remotos e internacionales",
    contact_priv_title: "Nota de Privacidad y Seguridad",
    contact_priv_desc: "Los correos en texto plano están ofuscados para mitigar scrapers automatizados y cosechadores de phishing. Los envíos llegan de forma segura a la casilla autenticada de Paula.",

    // Footer
    footer_rights: "Portfolio de Ciberseguridad y DFIR",
    footer_top: "Volver arriba &uarr;"
  },

  ja: {
    // Nav
    nav_about: "私について",
    nav_projects: "プロジェクト",
    nav_community: "コミュニティ",
    nav_contact: "お問い合わせ",
    nav_connect: "連絡する",

    // Hero
    hero_status: "ブエノスアイレス、アルゼンチン &bull; サイバー防衛 &amp; DFIR 実務",
    hero_name: "Paula <span class=\"highlight-text\">Villegas</span>",
    hero_role: "<span>サイバーセキュリティアナリスト</span><span>&bull;</span><span>SOC / インシデント対応</span><span>&bull;</span><span>DFIR (フォレンジック)</span>",
    hero_lead: "国際チームと連携し、24時間365日の監視、フィッシングトリアージ、インシデント対応を行うSOC（セキュリティ運用センター）で3.5年以上の実務経験。デジタルフォレンジック・インシデントレスポンス（DFIR）、Human-AI協調防御、コミュニティ活動に注力。",
    hero_cta_about: "経歴を見る",
    hero_cta_projects: "技術プロジェクト",
    hero_cta_community: "コミュニティ・登壇",
    hero_cta_github: "GitHub @PuaBlue",
    hero_cta_linkedin: "LinkedIn プロフィール",
    hero_cta_ig: "Instagram @pua.blue",

    // Stats
    stat_soc_lbl: "年以上のSOC実務経験",
    stat_cert_lbl: "保有資格 (BTL1 / Cortex XDR)",
    stat_speaker_lbl: "Ekoparty 2025 登壇スピーカー",
    stat_edu_lbl: "UNAJ コンピュータエンジニアリング",

    // Section 1: About Me
    sec1_badge: "セクション 01",
    sec1_title: "私について",
    sec1_desc: "スピード感あるSOC環境での実務経験、エンジニアリング教育、技術スキル、および防衛資格。",
    about_summary_title: "専門概要",
    about_summary_p1: "多国籍チームと協力して脅威監視、アラートトリアージ、インシデント対応を行ってきた、実務経験3.5年以上のサイバーセキュリティアナリストです。",
    about_summary_p2: "専門領域は<strong>デジタルフォレンジックとインシデント対応（DFIR）</strong>、そしてフォレンジックの完全性を維持しながらトリアージを迅速化するAIエージェントとアナリストの協調に焦点を当てています。",
    about_summary_p3: "継続的な学習に努め、セキュリティコミュニティへの積極的な参加、女性のサイバー防衛メンターシップの推進、カンファレンス登壇を通じて知識の共有と安全なデジタル社会の構築に貢献しています。",

    academic_degree_title: "コンピュータエンジニアリング 学士課程",
    academic_degree_meta: "アルトゥーロ・ハウレチェ国立大学 (2021年 — 現在)",
    academic_degree_gpa: "GPA 3.7 &bull; 18科目修得済み",
    academic_prog_title: "プログラマーアナリスト 中間学位",
    academic_prog_meta: "アルゴリズム、データベース、複数言語での開発基盤を修得",
    academic_prog_status: "修了見込み",

    philosophy_title: "セキュリティと成長の理念:",
    philosophy_quote: "「真のサイバー防衛には、能動的な探求心、異常シグナルへの徹底した注視、そして共有された知見によるコミュニティの強化が不可欠です。」",

    lang_es: "🇪🇸 スペイン語: ネイティブ",
    lang_en: "🇬🇧 英語: 上級 (B2)",
    lang_ja: "🇯🇵 日本語: 基礎 (JLPT N5)",

    // Competencies
    comp_title: "保有スキル・専門技術",
    comp_siem_title: "監視・オーケストレーション",
    comp_siem_desc: "Splunk SIEM, Splunk SOAR, Cortex, OSSIM, FortiSIEM。アラート相関分析、トリアージパイプライン、ケース管理。",
    comp_xdr_title: "エンドポイント &amp; XDR",
    comp_xdr_desc: "Palo Alto Cortex XDR, Microsoft Defender, Trend Micro。プロセス調査、封じ込め、エンドポイントテレメトリ。",
    comp_dfir_title: "調査・脅威偵察",
    comp_dfir_desc: "Nessus 脆弱性診断、Maltego グラフ分析、OSINT（オープンソースインテリジェンス）、ネットワークトラフィック解析。",
    comp_dev_title: "データベース &amp; 開発言語",
    comp_dev_desc: "SQL, NoSQL, Python (スクリプト作成と自動化), Java, C#, JavaScript。ソフトウェア開発ライフサイクルの基礎知識。",

    // Timeline
    timeline_title: "職歴・経歴タイムライン",
    timeline_desc: "運用経験、主な職務、チームへの貢献実績の経時的推移。",
    t1_role: "サイバーセキュリティアナリスト",
    t1_date: "2025年10月 — 現在",
    t1_b1: "Human-AI協調によるセキュリティイベントの監視およびインシデント対応の実行。",
    t1_b2: "監査基準を満たすチケット管理システムでの包括的なケース追跡と根本原因の記録。",
    t1_b3: "複雑なインシデント調査およびフィッシング分析におけるグローバルチームとの協業。",
    t1_b4: "Microsoft Defender、Cortex XDR、Trend Micro等のエンタープライズ製品の運用。",

    t2_role: "セキュリティデリバリーアソシエイト",
    t2_company: "アクセンチュア アルゼンチン &bull; グローバル運用",
    t2_date: "2024年1月 — 2025年10月",
    t2_b1: "Splunk SIEM および Splunk SOAR を用いた大量セキュリティアラートの監視と優先順位付け。",
    t2_b2: "SLA遵守と迅速なエスカレーションを実現するインシデント管理。",
    t2_b3: "脅威インテリジェンスと最新脆弱性情報の監視プレイブックへの反映。",
    t2_b4: "インシデント解決および詳細なフォレンジック調査におけるグローバルL2アナリストとの連携。",
    t2_b5: "新任メンバー向けのオンボーディング、技術トレーニング、メンターシップの実施。",

    t3_role: "サイバーセキュリティアナリスト (CSIRT)",
    t3_company: "アルゼンチン国家治安省",
    t3_date: "2023年6月 — 2024年1月",
    t3_b1: "OSSIM および FortiSIEM プラットフォームを用いた重大インシデントの監視と調査。",
    t3_b2: "Nessus および OSINT 偵察手法を用いた体系的な脆弱性アセスメントの実施。",
    t3_b3: "初動インシデント対応、イベントトリアージ、調査結果に関する技術報告書の作成。",

    cert_title: "学歴・保有プロフェッショナル資格",
    cert_msft_title: "Microsoft Learn バッジ",
    cert_msft_meta: "公式バッジ &amp; 学習モジュール",
    cert_msft_status: "認定プロフィール &bull; バッジを見る",
    msft_banner_title: "Microsoft Learn &bull; バッジ &amp; アチーブメント",
    msft_banner_desc: "サイバーセキュリティ運用、脅威インテリジェンス、Microsoft Defender / Azure アーキテクチャに関する継続的な技術習得。",
    msft_banner_btn: "Microsoft バッジを見る",

    // Section 2: Technical Projects
    sec2_badge: "セクション 02",
    sec2_title: "技術プロジェクト",
    sec2_desc: "実践的な防衛工学、インシデント対応ツール、SIEM相関分析、および開発の取り組み。",

    github_banner_title: "GitHub パブリックリポジトリ",
    github_banner_desc: "セキュリティツール、脅威検知ロジック、開発リポジトリをGitHubで公開しています。",
    github_banner_btn: "GitHub @PuaBlue を見る",

    p5_cat: "技術研究",
    p5_title: "SOCインシデント対応におけるHuman-AI協調",
    p5_desc: "現場のSOC環境でAIを活用したワークフローを導入・検証。フィッシングの一次トリアージ、IoC抽出、ログ集約を自動化しつつ、専門アナリストが精度の高い検証を行う仕組みを構築。",
    p5_link: "職歴を見る",

    p6_cat: "防衛エンジニアリング",
    p6_title: "マルチSIEMアラート相関分析 &amp; 脅威インテリジェンス",
    p6_desc: "Splunk、OSSIM、FortiSIEMにおける運用知見。リアルタイム脆弱性情報と脅威インテリジェンスフィードを検知ルールに組み込み、誤検知低減とエスカレーションフローを最適化。",
    p6_link: "タイムラインを見る",

    p7_cat: "ソフトウェア &amp; 自動化",
    p7_title: "プログラマーアナリスト基盤 &amp; 自動化",
    p7_desc: "Python、Java、C#、SQL/NoSQLデータベースを活用した自動化ツールおよび調査スクリプトの開発。ソフトウェア工学と防衛セキュリティの統合。",
    p7_link: "リポジトリを見る",

    // Section 3: Community & Initiatives
    sec3_badge: "セクション 03",
    sec3_title: "コミュニティ・発信活動",
    sec3_desc: "カンファレンス基調講演、女性セキュリティ人材のメンターシップ、教育コンテンツ発信、共同コミュニティ活動。",

    p1_cat: "カンファレンススピーカー",
    p1_title: "「Press Play: プロフェッショナル世界へのレベル1」",
    p1_desc: "Ekoparty 2025にて、サイバーセキュリティ業界への参入、ブルーチーム業務の開始、技術的成長曲線の克服、初期SOC業務から長期的な防衛キャリアを築く方法について講演。",
    p1_stat: "★ Ekoparty 2025 登壇スピーカー",
    p1_sub: "&bull; キャリア形成とブルーチーム参入",
    p1_link: "LinkedInで講演内容を見る",

    p2_cat: "メンター・コミュニティ",
    p2_title: "Bug Bounty Girls Club &amp; Women Hacks パネル",
    p2_desc: "Bug Bounty Girls Clubのボランティアとして、BlueOps Girlsイニシアチブを通じた女性向け防衛コンテンツ作成およびメンターを担当。脅威分析と防衛工学の多様性を促進するため、同クラブの代表として<strong>Ekoparty 2026の「Women Hacks」パネル</strong>への登壇が決定。",
    p2_stat: "★ Ekoparty 2026 Women Hacks パネル登壇",
    p2_sub: "&bull; BlueOps Girls メンター",
    p2_link: "コミュニティ情報を見る",
    p2_link_site: "公式サイト",
    p2_link_post: "登壇告知の投稿を見る",

    p3_cat: "コミュニティ・多様性",
    p3_title: "SteamGirls コミュニティ &amp; サイバー推進",
    p3_desc: "SteamGirlsコミュニティのアクティブメンバーとして、STEAM分野およびサイバーセキュリティにおける女性のエンパワーメント活動に参加。Ekopartyでのネットワーキングやイベントを通じて次世代の人材育成を支援。",
    p3_stat: "★ SteamGirls メンバー",
    p3_sub: "&bull; STEAM &amp; サイバー支援",
    p3_link: "SteamGirlsの投稿を見る",

    p4_cat: "コンテンツ発信・教育",
    p4_title: "@pua.blue &bull; セキュリティ発信 &amp; ブルーチーム",
    p4_desc: "Instagramアカウント「@pua.blue」の運営者。ブルーチーム業務、SOCオペレーション、DFIRの基礎、スレットハンティングなどの知識を発信し、防衛分野で活躍する女性や初学者を支援。",
    p4_stat: "★ セキュリティ教育チャンネル",
    p4_sub: "&bull; 防衛ノウハウ &amp; コミュニティ育成",
    p4_link: "Instagramで @pua.blue をフォロー",

    // Section 4: Contact
    sec_contact_badge: "連絡先",
    sec_contact_title: "お問い合わせ",
    sec_contact_desc: "SOC/DFIR関連の業務、講演依頼、コミュニティメンターシップに関するご相談はお気軽にメッセージをお送りください。",

    contact_form_title: "メッセージを直接送信",
    contact_form_inst: "ご入力いただいたメールアドレスは返信のみに使用されます。メッセージは直接受信箱に届きます。",
    form_lbl_name: "お名前 / 組織名",
    form_lbl_email: "メールアドレス",
    form_lbl_subject: "件名 / ご用件",
    form_opt_soc: "DFIR &amp; SOC 採用・キャリアのご相談",
    form_opt_speaking: "カンファレンス・登壇のご依頼 (Ekoparty等)",
    form_opt_mentorship: "コミュニティ・メンターシップ (Bug Bounty Girls / SteamGirls)",
    form_opt_general: "一般的なお問い合わせ",
    form_lbl_msg: "メッセージ本文",
    form_btn_send: "メッセージを送信",
    form_anti_spam: "Bot対策保護送信",

    contact_gh_title: "GitHub プロフィール",
    contact_gh_desc: "公開リポジトリ・ソースコード",
    contact_msft_title: "Microsoft Learn",
    contact_msft_desc: "認定バッジおよび学習達成実績",
    contact_li_title: "LinkedIn プロフィール",
    contact_li_desc: "つながり・推薦文の確認",
    contact_ig_title: "Instagram (コンテンツ)",
    contact_ig_desc: "セキュリティ解説・防衛ノウハウ",
    contact_loc_title: "所在地・勤務形態",
    contact_loc_val: "ブエノスアイレス、アルゼンチン",
    contact_loc_desc: "リモートワーク・国際業務に対応",
    contact_priv_title: "プライバシー・セキュリティについて",
    contact_priv_desc: "ボットやフィッシング収集ツールによるメールアドレス収集を防ぐため、アドレスを難読化しています。送信内容は安全にPaulaの受信箱へ届きます。",

    // Footer
    footer_rights: "サイバーセキュリティ &amp; DFIR ポートフォリオ",
    footer_top: "トップに戻る &uarr;"
  }
};
