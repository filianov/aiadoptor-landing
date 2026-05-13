const header = document.querySelector("[data-header]");
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const languageButtons = document.querySelectorAll("[data-lang]");
const contactEmail = "aiadoptor@gmail.com";
const languagePaths = {
  en: "/",
  de: "/de/",
  ru: "/ru/",
  uk: "/uk/",
};

const translations = {
  en: {
    "meta.title": "AIAdoptor | AI Workflow Studio in Vienna | ChatGPT & AI Automation",
    "meta.description":
      "AIAdoptor helps international business professionals and small businesses in Vienna save time and automate repetitive work with practical AI workflows.",
    "brand.aria": "AIadaptor home",
    "brand.tagline": "Vienna AI workflows",
    "brand.footerTagline": "Practical AI workflows",
    "nav.aria": "Main navigation",
    "nav.audience": "For whom",
    "nav.workflows": "Workflows",
    "nav.offers": "Offers",
    "nav.why": "Why",
    "language.aria": "Language",
    "cta.short": "Book review",
    "cta.review": "Book Free 20-Min AI Workflow Review",
    "cta.workshop": "Join AI Starter Workshop",
    "hero.imageAlt": "Modern Vienna workspace with laptop, documents and workflow boards",
    "hero.eyebrow": "AI workflow creation studio in Vienna",
    "hero.motto": "AIAdoptor is a studio for creating practical AI workflows.",
    "hero.title": "Save Hours Every Week with Practical AI Workflows",
    "hero.copy":
      "AIAdoptor helps international professionals and small businesses automate recurring work — emails, documents, client communication, reports, and daily operations — in English, Russian, or Ukrainian.",
    "hero.cta.review": "Book a Free AI-Workflow Review",
    "hero.cta.workshop": "Join the Free AI-Starter Workshop",
    "hero.microcopy": "No coding. No complex setup. Just practical AI workflows for your real daily tasks.",
    "hero.signalsAria": "Service highlights",
    "hero.languages": "Languages",
    "hero.freeReview": "Free review",
    "hero.localContext": "Local context",
    "intro.aria": "Positioning",
    "intro.line": "You probably do not need “more AI tools”. You need practical AI workflows.",
    "intro.agents": "AI agents",
    "intro.automation": "Automation",
    "intro.reliability": "Reliability checks",
    "audience.eyebrow": "Who is this for?",
    "audience.title": "For people who want to optimize their current processes with artificial intelligence.",
    "audience.cards.expats.title": "Expats in Austria",
    "audience.cards.expats.copy": "Adapting to life, work, paperwork, German and communication norms.",
    "audience.cards.professionals.title": "Professionals",
    "audience.cards.professionals.copy": "Using AI for productivity, writing, research, reporting and decisions.",
    "audience.cards.business.title": "Small business owners",
    "audience.cards.business.copy": "Automating routine emails, follow-ups, documents and customer replies.",
    "audience.cards.founders.title": "Consultants and founders",
    "audience.cards.founders.copy": "Building repeatable workflows for delivery, sales, analysis and operations.",
    "audience.cards.communities.title": "English, Russian and Ukrainian speakers",
    "audience.cards.communities.copy": "Getting AI help in the language that makes the work faster and clearer.",
    "workflows.eyebrow": "What we fix",
    "workflows.title": "We turn messy everyday work into reusable AI workflows",
    "workflows.copy":
      "The goal is not to collect tools. The goal is to save time and improve the quality of communication, documents and decisions.",
    "workflows.aria": "AI workflow areas",
    "workflows.items.emails": "Emails",
    "workflows.items.german": "German learning",
    "workflows.items.job": "CV / LinkedIn / job search",
    "workflows.items.summaries": "Document summaries",
    "workflows.items.reports": "Reports and presentations",
    "workflows.items.customers": "Customer replies",
    "workflows.items.sales": "Sales follow-up",
    "workflows.items.research": "Market research",
    "workflows.items.finance": "Finance / business analysis",
    "workflows.items.quality": "AI hallucination and quality checks",
    "seo.eyebrow": "AI workflow consulting in Vienna",
    "seo.title": "ChatGPT, AI agents and automation for repetitive work",
    "seo.copy":
      "AIAdoptor helps international professionals and small businesses build practical AI workflows for everyday tasks: emails, documents, reports, customer follow-up, research, job search and business communication.",
    "seo.aria": "SEO service areas",
    "seo.items.consulting": "ChatGPT consulting in Vienna",
    "seo.items.automation": "AI automation for small business",
    "seo.items.agents": "AI agents for routine workflows",
    "seo.items.audit": "AI workflow audit and implementation",
    "seo.items.languages": "English, Russian and Ukrainian AI consulting",
    "seo.items.reliability": "AI hallucination and reliability checks",
    "offers.eyebrow": "Three ways to start",
    "offers.title": "Choose the level of implementation you need",
    "offers.resultLabel": "Result:",
    "offers.starter.for": "For expats, professionals and entrepreneurs.",
    "offers.starter.result": "your first personal AI workflow.",
    "offers.starter.link": "Join workshop",
    "offers.audit.for": "For small businesses and professionals.",
    "offers.audit.result": "map of your repetitive tasks + AI automation plan.",
    "offers.audit.link": "Book audit",
    "offers.sprint.for": "For small businesses.",
    "offers.sprint.price": "from €3 000",
    "offers.sprint.result": "implemented AI workflow / assistant + documentation + training.",
    "offers.sprint.link": "Discuss sprint",
    "why.eyebrow": "Why AIadaptor",
    "why.title": "Technical enough to build, business-minded enough to make it useful",
    "why.items.programming": "Programming background",
    "why.items.finance": "Finance and business analysis background",
    "why.items.ai": "Experience with ChatGPT, prompting, vibe coding and AI agents",
    "why.items.languages": "English / Russian / Ukrainian communication",
    "why.items.vienna": "Vienna-based",
    "why.items.ragmetrics": "Partner / representative of Ragmetrics, focused on AI hallucination and reliability",
    "why.items.business": "Building AIadaptor itself as a one-person AI-powered business",
    "experiment.eyebrow": "Public experiment",
    "experiment.title": "Building a One-Person AI-Powered Business in Vienna",
    "experiment.copy":
      "AIadaptor is not only a consulting service. It is also a live experiment: can one person build and operate a serious AI-powered business using agents, automation, vibe coding and reliable AI workflows?",
    "book.eyebrow": "Free 20-minute review",
    "book.title": "Want to understand where AI can save time in your work or business?",
    "book.copy": "Book a free 20-minute AI Workflow Review.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.email": "Email",
    "form.topic": "What should AI help with?",
    "form.options.email": "Emails and business communication",
    "form.options.docs": "Documents, reports or presentations",
    "form.options.job": "German, CV, LinkedIn or job search",
    "form.options.customer": "Customer replies or sales follow-up",
    "form.options.business": "Small business automation",
    "form.options.quality": "AI hallucination and quality checks",
    "form.status": "Your email app is opening with the review request.",
    "footer.privacy": "Privacy Policy",
    "footer.location": "Vienna, Austria",
    "partner.aria": "RAGmetrics partner",
    "partner.logoAlt": "RagMetrics logo",
    "partner.text": "Certified RAGmetrics partner in Europe",
    "partner.cta": "Explore RAGmetrics Solutions",
    "mail.subject": "Free 20-min AI Workflow Review",
    "mail.greeting": "Hi AIadaptor,",
    "mail.request": "I would like to book a free 20-minute AI Workflow Review.",
    "mail.name": "Name",
    "mail.email": "Email",
    "mail.topic": "Topic",
    "mail.signoff": "Best",
  },
  de: {
    "meta.title": "AIAdoptor | AI-Workflow-Studio in Wien | ChatGPT & AI-Automatisierung",
    "meta.description":
      "AIAdoptor hilft internationalen Business Professionals und kleinen Unternehmen in Wien, Zeit zu sparen und repetitive Arbeit mit praktischen AI-Workflows zu automatisieren.",
    "brand.aria": "AIadaptor Startseite",
    "brand.tagline": "AI-Workflows in Wien",
    "brand.footerTagline": "Praktische AI-Workflows",
    "nav.aria": "Hauptnavigation",
    "nav.audience": "Für wen",
    "nav.workflows": "Workflows",
    "nav.offers": "Angebote",
    "nav.why": "Warum",
    "language.aria": "Sprache",
    "cta.short": "Review buchen",
    "cta.review": "Kostenlosen 20-Min-AI-Workflow-Review buchen",
    "cta.workshop": "AI Starter Workshop beitreten",
    "hero.imageAlt": "Moderner Arbeitsplatz in Wien mit Laptop, Dokumenten und Workflow-Boards",
    "hero.eyebrow": "Studio für die Erstellung von AI-Workflows in Wien",
    "hero.motto": "AIAdoptor ist ein Studio für die Erstellung praktischer AI-Workflows.",
    "hero.title": "Spare jede Woche Stunden mit praktischen AI-Workflows",
    "hero.copy":
      "AIAdoptor hilft internationalen Fachleuten und kleinen Unternehmen, wiederkehrende Arbeit zu automatisieren — E-Mails, Dokumente, Kundenkommunikation, Berichte und tägliche Abläufe — auf Englisch, Russisch oder Ukrainisch.",
    "hero.cta.review": "Kostenlosen AI-Workflow-Review buchen",
    "hero.cta.workshop": "Am kostenlosen AI-Starter-Workshop teilnehmen",
    "hero.microcopy": "Kein Coding. Kein komplexes Setup. Nur praktische AI-Workflows für deine echten täglichen Aufgaben.",
    "hero.signalsAria": "Service-Highlights",
    "hero.languages": "Sprachen",
    "hero.freeReview": "Kostenloser Review",
    "hero.localContext": "Lokaler Kontext",
    "intro.aria": "Positionierung",
    "intro.line": "Du brauchst wahrscheinlich nicht “mehr AI-Tools”. Du brauchst praktische AI-Workflows.",
    "intro.agents": "AI-Agenten",
    "intro.automation": "Automatisierung",
    "intro.reliability": "Qualitätschecks",
    "audience.eyebrow": "Für wen ist das?",
    "audience.title": "Für Menschen, die ihre aktuellen Prozesse mit künstlicher Intelligenz optimieren möchten.",
    "audience.cards.expats.title": "Expats in Österreich",
    "audience.cards.expats.copy": "Ankommen in Alltag, Arbeit, Dokumenten, Deutsch und Kommunikationsnormen.",
    "audience.cards.professionals.title": "Fachleute",
    "audience.cards.professionals.copy": "AI für Produktivität, Schreiben, Recherche, Reporting und Entscheidungen nutzen.",
    "audience.cards.business.title": "Kleine Unternehmen",
    "audience.cards.business.copy": "Routine-E-Mails, Follow-ups, Dokumente und Kundenantworten automatisieren.",
    "audience.cards.founders.title": "Consultants und Gründer",
    "audience.cards.founders.copy": "Wiederholbare Workflows für Delivery, Sales, Analyse und Operations bauen.",
    "audience.cards.communities.title": "Englisch-, Russisch- und Ukrainischsprachige",
    "audience.cards.communities.copy": "AI-Unterstützung in der Sprache bekommen, die die Arbeit schneller und klarer macht.",
    "workflows.eyebrow": "Was wir lösen",
    "workflows.title": "Wir verwandeln chaotische Alltagsarbeit in wiederverwendbare AI-Workflows",
    "workflows.copy":
      "Das Ziel ist nicht, Tools zu sammeln. Das Ziel ist, Zeit zu sparen und die Qualität von Kommunikation, Dokumenten und Entscheidungen zu verbessern.",
    "workflows.aria": "AI-Workflow-Bereiche",
    "workflows.items.emails": "E-Mails",
    "workflows.items.german": "Deutsch lernen",
    "workflows.items.job": "CV / LinkedIn / Jobsuche",
    "workflows.items.summaries": "Dokument-Zusammenfassungen",
    "workflows.items.reports": "Berichte und Präsentationen",
    "workflows.items.customers": "Kundenantworten",
    "workflows.items.sales": "Sales-Follow-up",
    "workflows.items.research": "Marktrecherche",
    "workflows.items.finance": "Finanz- / Business-Analyse",
    "workflows.items.quality": "AI-Halluzinationen und Qualitätschecks",
    "seo.eyebrow": "AI-Workflow-Beratung in Wien",
    "seo.title": "ChatGPT, AI-Agenten und Automatisierung für repetitive Arbeit",
    "seo.copy":
      "AIAdoptor hilft internationalen Fachleuten und kleinen Unternehmen, praktische AI-Workflows für Alltagsaufgaben aufzubauen: E-Mails, Dokumente, Berichte, Kunden-Follow-up, Recherche, Jobsuche und Business-Kommunikation.",
    "seo.aria": "SEO-Servicebereiche",
    "seo.items.consulting": "ChatGPT-Beratung in Wien",
    "seo.items.automation": "AI-Automatisierung für kleine Unternehmen",
    "seo.items.agents": "AI-Agenten für Routine-Workflows",
    "seo.items.audit": "AI-Workflow-Audit und Implementierung",
    "seo.items.languages": "AI-Beratung auf Englisch, Russisch und Ukrainisch",
    "seo.items.reliability": "AI-Halluzinationen und Zuverlässigkeitschecks",
    "offers.eyebrow": "Drei Wege zum Start",
    "offers.title": "Wähle den Implementierungsgrad, den du brauchst",
    "offers.resultLabel": "Ergebnis:",
    "offers.starter.for": "Für Expats, Fachleute und Unternehmer.",
    "offers.starter.result": "dein erster persönlicher AI-Workflow.",
    "offers.starter.link": "Workshop buchen",
    "offers.audit.for": "Für kleine Unternehmen und Fachleute.",
    "offers.audit.result": "Karte deiner wiederkehrenden Aufgaben + AI-Automatisierungsplan.",
    "offers.audit.link": "Audit buchen",
    "offers.sprint.for": "Für kleine Unternehmen.",
    "offers.sprint.price": "ab €3 000",
    "offers.sprint.result": "implementierter AI-Workflow / Assistent + Dokumentation + Training.",
    "offers.sprint.link": "Sprint besprechen",
    "why.eyebrow": "Warum AIadaptor",
    "why.title": "Technisch genug zum Bauen, geschäftlich genug, damit es nützlich wird",
    "why.items.programming": "Programmierhintergrund",
    "why.items.finance": "Hintergrund in Finance und Business-Analyse",
    "why.items.ai": "Erfahrung mit ChatGPT, Prompting, Vibe Coding und AI-Agenten",
    "why.items.languages": "Kommunikation auf Englisch / Russisch / Ukrainisch",
    "why.items.vienna": "In Wien basiert",
    "why.items.ragmetrics": "Partner / Vertreter von Ragmetrics, mit Fokus auf AI-Halluzinationen und Zuverlässigkeit",
    "why.items.business": "AIadaptor selbst wird als One-Person-AI-powered Business aufgebaut",
    "experiment.eyebrow": "Öffentliches Experiment",
    "experiment.title": "Aufbau eines One-Person-AI-Powered Business in Wien",
    "experiment.copy":
      "AIadaptor ist nicht nur ein Beratungsservice. Es ist auch ein Live-Experiment: Kann eine Person mit Agenten, Automatisierung, Vibe Coding und zuverlässigen AI-Workflows ein ernsthaftes AI-gestütztes Business aufbauen und betreiben?",
    "book.eyebrow": "Kostenloser 20-Minuten-Review",
    "book.title": "Möchtest du verstehen, wo AI in deiner Arbeit oder deinem Business Zeit sparen kann?",
    "book.copy": "Buche einen kostenlosen 20-minütigen AI Workflow Review.",
    "form.name": "Name",
    "form.namePlaceholder": "Dein Name",
    "form.email": "E-Mail",
    "form.topic": "Wobei soll AI helfen?",
    "form.options.email": "E-Mails und Geschäftskommunikation",
    "form.options.docs": "Dokumente, Berichte oder Präsentationen",
    "form.options.job": "Deutsch, CV, LinkedIn oder Jobsuche",
    "form.options.customer": "Kundenantworten oder Sales-Follow-up",
    "form.options.business": "Automatisierung im kleinen Unternehmen",
    "form.options.quality": "AI-Halluzinationen und Qualitätschecks",
    "form.status": "Deine E-Mail-App öffnet sich mit der Review-Anfrage.",
    "footer.privacy": "Datenschutzerklärung",
    "footer.location": "Wien, Österreich",
    "partner.aria": "RAGmetrics Partner",
    "partner.logoAlt": "RagMetrics Logo",
    "partner.text": "Zertifizierter RAGmetrics Partner in Europa",
    "partner.cta": "RAGmetrics Solutions ansehen",
    "mail.subject": "Kostenloser 20-Min-AI-Workflow-Review",
    "mail.greeting": "Hallo AIadaptor,",
    "mail.request": "Ich möchte einen kostenlosen 20-minütigen AI Workflow Review buchen.",
    "mail.name": "Name",
    "mail.email": "E-Mail",
    "mail.topic": "Thema",
    "mail.signoff": "Viele Grüße",
  },
  ru: {
    "meta.title": "AIAdoptor | Студия AI-воркфлоу в Вене | ChatGPT и AI-автоматизация",
    "meta.description":
      "AIAdoptor помогает международным бизнес-профессионалам и малому бизнесу в Вене экономить время и автоматизировать повторяющуюся работу с помощью практических AI-воркфлоу.",
    "brand.aria": "Главная AIadaptor",
    "brand.tagline": "AI-воркфлоу в Вене",
    "brand.footerTagline": "Практические AI-воркфлоу",
    "nav.aria": "Главная навигация",
    "nav.audience": "Для кого",
    "nav.workflows": "Воркфлоу",
    "nav.offers": "Офферы",
    "nav.why": "Почему",
    "language.aria": "Язык",
    "cta.short": "Записаться",
    "cta.review": "Записаться на бесплатный 20-мин AI Workflow Review",
    "cta.workshop": "Присоединиться к AI Starter Workshop",
    "hero.imageAlt": "Современное рабочее место в Вене с ноутбуком, документами и workflow-досками",
    "hero.eyebrow": "Студия создания AI-воркфлоу в Вене",
    "hero.motto": "AIAdoptor — это студия создания практических AI-воркфлоу.",
    "hero.title": "Экономьте часы каждую неделю с практическими AI-процессами",
    "hero.copy":
      "AIAdoptor помогает международным специалистам и малому бизнесу автоматизировать повторяющуюся работу — письма, документы, коммуникацию с клиентами, отчеты и ежедневные операционные задачи — на английском, русском или украинском.",
    "hero.cta.review": "Записаться на бесплатный AI-Workflow Review",
    "hero.cta.workshop": "Присоединиться к бесплатному AI-Starter Workshop",
    "hero.microcopy": "Без кода. Без сложной настройки. Только практические AI-процессы для ваших реальных ежедневных задач.",
    "hero.signalsAria": "Ключевые преимущества",
    "hero.languages": "Языка",
    "hero.freeReview": "Бесплатный разбор",
    "hero.localContext": "Локальный контекст",
    "intro.aria": "Позиционирование",
    "intro.line": "Скорее всего, вам не нужно “еще больше AI-инструментов”. Вам нужны практические AI-воркфлоу.",
    "intro.agents": "AI-агенты",
    "intro.automation": "Автоматизация",
    "intro.reliability": "Проверка качества",
    "audience.eyebrow": "Для кого это?",
    "audience.title": "Для людей, которые хотят оптимизировать свои текущие процессы при помощи искусственного интеллекта.",
    "audience.cards.expats.title": "Экспаты в Австрии",
    "audience.cards.expats.copy": "Адаптация к жизни, работе, документам, немецкому и нормам коммуникации.",
    "audience.cards.professionals.title": "Профессионалы",
    "audience.cards.professionals.copy": "AI для продуктивности, письма, исследований, отчетности и решений.",
    "audience.cards.business.title": "Владельцы малого бизнеса",
    "audience.cards.business.copy": "Автоматизация писем, follow-up, документов и ответов клиентам.",
    "audience.cards.founders.title": "Консультанты и фаундеры",
    "audience.cards.founders.copy": "Повторяемые процессы для delivery, продаж, анализа и операционки.",
    "audience.cards.communities.title": "Англо-, русско- и украиноязычные сообщества",
    "audience.cards.communities.copy": "AI-помощь на языке, на котором работа становится быстрее и понятнее.",
    "workflows.eyebrow": "Какие боли решаем",
    "workflows.title": "Превращаем хаотичную повседневную работу в повторяемые AI-воркфлоу",
    "workflows.copy":
      "Цель не в том, чтобы собирать инструменты. Цель — экономить время и повышать качество коммуникации, документов и решений.",
    "workflows.aria": "Направления AI-воркфлоу",
    "workflows.items.emails": "Письма",
    "workflows.items.german": "Изучение немецкого",
    "workflows.items.job": "CV / LinkedIn / поиск работы",
    "workflows.items.summaries": "Саммари документов",
    "workflows.items.reports": "Отчеты и презентации",
    "workflows.items.customers": "Ответы клиентам",
    "workflows.items.sales": "Sales follow-up",
    "workflows.items.research": "Исследование рынка",
    "workflows.items.finance": "Финансовый / бизнес-анализ",
    "workflows.items.quality": "AI-галлюцинации и проверка качества",
    "seo.eyebrow": "AI-консалтинг и workflow-автоматизация в Вене",
    "seo.title": "ChatGPT, AI-агенты и автоматизация повторяющейся работы",
    "seo.copy":
      "AIAdoptor помогает международным специалистам и малому бизнесу создавать практические AI-воркфлоу для повседневных задач: писем, документов, отчетов, клиентского follow-up, исследований, поиска работы и деловой коммуникации.",
    "seo.aria": "SEO-направления услуг",
    "seo.items.consulting": "ChatGPT-консалтинг в Вене",
    "seo.items.automation": "AI-автоматизация для малого бизнеса",
    "seo.items.agents": "AI-агенты для рутинных процессов",
    "seo.items.audit": "AI Workflow Audit и внедрение",
    "seo.items.languages": "AI-консалтинг на английском, русском и украинском",
    "seo.items.reliability": "Проверка AI-галлюцинаций и надежности",
    "offers.eyebrow": "Три продукта",
    "offers.title": "Выберите уровень внедрения, который вам нужен",
    "offers.resultLabel": "Результат:",
    "offers.starter.for": "Для экспатов, специалистов и предпринимателей.",
    "offers.starter.result": "ваш первый персональный AI-воркфлоу.",
    "offers.starter.link": "Записаться на workshop",
    "offers.audit.for": "Для малого бизнеса и профессионалов.",
    "offers.audit.result": "карта повторяющихся задач + план AI-автоматизации.",
    "offers.audit.link": "Заказать аудит",
    "offers.sprint.for": "Для малого бизнеса.",
    "offers.sprint.price": "от €3 000",
    "offers.sprint.result": "внедренный AI-воркфлоу / ассистент + документация + обучение.",
    "offers.sprint.link": "Обсудить sprint",
    "why.eyebrow": "Почему AIadaptor",
    "why.title": "Обладаем достаточными техническими навыками, чтобы построить AI-процесс, и достаточным бизнес-опытом, чтобы это было полезно на практике.",
    "why.items.programming": "Бэкграунд в программировании",
    "why.items.finance": "Бэкграунд в финансах и бизнес-анализе",
    "why.items.ai": "Опыт с ChatGPT, prompting, vibe coding и AI-агентами",
    "why.items.languages": "Коммуникация на английском / русском / украинском",
    "why.items.vienna": "Базируется в Вене",
    "why.items.ragmetrics": "Партнер / представитель Ragmetrics, фокус на AI-галлюцинациях и надежности",
    "why.items.business": "AIadaptor строится как one-person AI-powered business",
    "experiment.eyebrow": "Публичный эксперимент",
    "experiment.title": "Строим AI-powered бизнес одного человека в Вене",
    "experiment.copy":
      "AIadaptor — это не только консалтинг. Это живой эксперимент: может ли один человек построить и вести серьезный AI-powered бизнес с помощью агентов, автоматизации, vibe coding и надежных AI-воркфлоу?",
    "book.eyebrow": "Бесплатный 20-минутный разбор",
    "book.title": "Хотите понять, где AI может экономить время в вашей работе или бизнесе?",
    "book.copy": "Запишитесь на бесплатный 20-минутный AI Workflow Review.",
    "form.name": "Имя",
    "form.namePlaceholder": "Ваше имя",
    "form.email": "Email",
    "form.topic": "С чем должен помочь AI?",
    "form.options.email": "Письма и деловая коммуникация",
    "form.options.docs": "Документы, отчеты или презентации",
    "form.options.job": "Немецкий, CV, LinkedIn или поиск работы",
    "form.options.customer": "Ответы клиентам или sales follow-up",
    "form.options.business": "Автоматизация малого бизнеса",
    "form.options.quality": "AI-галлюцинации и проверка качества",
    "form.status": "Открывается ваше email-приложение с подготовленной заявкой.",
    "footer.privacy": "Политика конфиденциальности",
    "footer.location": "Вена, Австрия",
    "partner.aria": "Партнер RAGmetrics",
    "partner.logoAlt": "Логотип RAGmetrics",
    "partner.text": "Сертифицированный партнер RAGmetrics в Европе",
    "partner.cta": "Перейти в RAGmetrics Solutions",
    "mail.subject": "Бесплатный 20-мин AI Workflow Review",
    "mail.greeting": "Здравствуйте, AIadaptor,",
    "mail.request": "Я хочу записаться на бесплатный 20-минутный AI Workflow Review.",
    "mail.name": "Имя",
    "mail.email": "Email",
    "mail.topic": "Тема",
    "mail.signoff": "С уважением",
  },
  uk: {
    "meta.title": "AIAdoptor | Студія AI-воркфлоу у Відні | ChatGPT і AI-автоматизація",
    "meta.description":
      "AIAdoptor допомагає міжнародним бізнес-професіоналам і малому бізнесу у Відні економити час та автоматизувати повторювану роботу за допомогою практичних AI-воркфлоу.",
    "brand.aria": "Головна AIadaptor",
    "brand.tagline": "AI-воркфлоу у Відні",
    "brand.footerTagline": "Практичні AI-воркфлоу",
    "nav.aria": "Головна навігація",
    "nav.audience": "Для кого",
    "nav.workflows": "Воркфлоу",
    "nav.offers": "Пропозиції",
    "nav.why": "Чому",
    "language.aria": "Мова",
    "cta.short": "Записатися",
    "cta.review": "Записатися на безкоштовний 20-хв AI Workflow Review",
    "cta.workshop": "Приєднатися до AI Starter Workshop",
    "hero.imageAlt": "Сучасне робоче місце у Відні з ноутбуком, документами та workflow-дошками",
    "hero.eyebrow": "Студія створення AI-воркфлоу у Відні",
    "hero.motto": "AIAdoptor — це студія створення практичних AI-воркфлоу.",
    "hero.title": "Економте години щотижня з практичними AI-процесами",
    "hero.copy":
      "AIAdoptor допомагає міжнародним фахівцям і малому бізнесу автоматизувати повторювану роботу — листи, документи, комунікацію з клієнтами, звіти та щоденні операційні задачі — англійською, російською або українською.",
    "hero.cta.review": "Записатися на безкоштовний AI-Workflow Review",
    "hero.cta.workshop": "Приєднатися до безкоштовного AI-Starter Workshop",
    "hero.microcopy": "Без коду. Без складного налаштування. Лише практичні AI-процеси для ваших реальних щоденних задач.",
    "hero.signalsAria": "Ключові переваги",
    "hero.languages": "Мови",
    "hero.freeReview": "Безкоштовний розбір",
    "hero.localContext": "Локальний контекст",
    "intro.aria": "Позиціонування",
    "intro.line": "Найімовірніше, вам не потрібно “ще більше AI-інструментів”. Вам потрібні практичні AI-воркфлоу.",
    "intro.agents": "AI-агенти",
    "intro.automation": "Автоматизація",
    "intro.reliability": "Перевірка якості",
    "audience.eyebrow": "Для кого це?",
    "audience.title": "Для людей, які хочуть оптимізувати свої поточні процеси за допомогою штучного інтелекту.",
    "audience.cards.expats.title": "Експати в Австрії",
    "audience.cards.expats.copy": "Адаптація до життя, роботи, документів, німецької та норм комунікації.",
    "audience.cards.professionals.title": "Фахівці",
    "audience.cards.professionals.copy": "AI для продуктивності, письма, досліджень, звітності та рішень.",
    "audience.cards.business.title": "Власники малого бізнесу",
    "audience.cards.business.copy": "Автоматизація листів, follow-up, документів і відповідей клієнтам.",
    "audience.cards.founders.title": "Консультанти та фаундери",
    "audience.cards.founders.copy": "Повторювані процеси для delivery, продажів, аналізу та операційки.",
    "audience.cards.communities.title": "Англо-, російсько- та україномовні спільноти",
    "audience.cards.communities.copy": "AI-допомога мовою, якою робота стає швидшою та зрозумілішою.",
    "workflows.eyebrow": "Які проблеми вирішуємо",
    "workflows.title": "Перетворюємо хаотичну щоденну роботу на повторювані AI-воркфлоу",
    "workflows.copy":
      "Мета не в тому, щоб збирати інструменти. Мета — економити час і покращувати якість комунікації, документів і рішень.",
    "workflows.aria": "Напрями AI-воркфлоу",
    "workflows.items.emails": "Листи",
    "workflows.items.german": "Вивчення німецької",
    "workflows.items.job": "CV / LinkedIn / пошук роботи",
    "workflows.items.summaries": "Самарі документів",
    "workflows.items.reports": "Звіти та презентації",
    "workflows.items.customers": "Відповіді клієнтам",
    "workflows.items.sales": "Sales follow-up",
    "workflows.items.research": "Дослідження ринку",
    "workflows.items.finance": "Фінансовий / бізнес-аналіз",
    "workflows.items.quality": "AI-галюцинації та перевірка якості",
    "seo.eyebrow": "AI-консалтинг і workflow-автоматизація у Відні",
    "seo.title": "ChatGPT, AI-агенти та автоматизація повторюваної роботи",
    "seo.copy":
      "AIAdoptor допомагає міжнародним фахівцям і малому бізнесу створювати практичні AI-воркфлоу для повсякденних задач: листів, документів, звітів, клієнтського follow-up, досліджень, пошуку роботи та бізнес-комунікації.",
    "seo.aria": "SEO-напрями послуг",
    "seo.items.consulting": "ChatGPT-консалтинг у Відні",
    "seo.items.automation": "AI-автоматизація для малого бізнесу",
    "seo.items.agents": "AI-агенти для рутинних процесів",
    "seo.items.audit": "AI Workflow Audit і впровадження",
    "seo.items.languages": "AI-консалтинг англійською, російською та українською",
    "seo.items.reliability": "Перевірка AI-галюцинацій і надійності",
    "offers.eyebrow": "Три продукти",
    "offers.title": "Оберіть рівень впровадження, який вам потрібен",
    "offers.resultLabel": "Результат:",
    "offers.starter.for": "Для експатів, фахівців і підприємців.",
    "offers.starter.result": "ваш перший персональний AI-воркфлоу.",
    "offers.starter.link": "Записатися на workshop",
    "offers.audit.for": "Для малого бізнесу та професіоналів.",
    "offers.audit.result": "карта повторюваних задач + план AI-автоматизації.",
    "offers.audit.link": "Замовити аудит",
    "offers.sprint.for": "Для малого бізнесу.",
    "offers.sprint.price": "від €3 000",
    "offers.sprint.result": "впроваджений AI-воркфлоу / асистент + документація + навчання.",
    "offers.sprint.link": "Обговорити sprint",
    "why.eyebrow": "Чому AIadaptor",
    "why.title": "Маємо достатні технічні навички, щоб побудувати AI-процес, і достатній бізнес-досвід, щоб це було корисно на практиці.",
    "why.items.programming": "Бекграунд у програмуванні",
    "why.items.finance": "Бекграунд у фінансах і бізнес-аналізі",
    "why.items.ai": "Досвід із ChatGPT, prompting, vibe coding та AI-агентами",
    "why.items.languages": "Комунікація англійською / російською / українською",
    "why.items.vienna": "Базується у Відні",
    "why.items.ragmetrics": "Партнер / представник Ragmetrics, фокус на AI-галюцинаціях і надійності",
    "why.items.business": "AIadaptor будується як one-person AI-powered business",
    "experiment.eyebrow": "Публічний експеримент",
    "experiment.title": "Будуємо AI-powered бізнес однієї людини у Відні",
    "experiment.copy":
      "AIadaptor — це не лише консалтинг. Це живий експеримент: чи може одна людина побудувати й вести серйозний AI-powered бізнес за допомогою агентів, автоматизації, vibe coding і надійних AI-воркфлоу?",
    "book.eyebrow": "Безкоштовний 20-хвилинний розбір",
    "book.title": "Хочете зрозуміти, де AI може економити час у вашій роботі чи бізнесі?",
    "book.copy": "Запишіться на безкоштовний 20-хвилинний AI Workflow Review.",
    "form.name": "Ім'я",
    "form.namePlaceholder": "Ваше ім'я",
    "form.email": "Email",
    "form.topic": "З чим має допомогти AI?",
    "form.options.email": "Листи та бізнес-комунікація",
    "form.options.docs": "Документи, звіти або презентації",
    "form.options.job": "Німецька, CV, LinkedIn або пошук роботи",
    "form.options.customer": "Відповіді клієнтам або sales follow-up",
    "form.options.business": "Автоматизація малого бізнесу",
    "form.options.quality": "AI-галюцинації та перевірка якості",
    "form.status": "Відкривається ваш email-додаток із підготовленою заявкою.",
    "footer.privacy": "Політика конфіденційності",
    "footer.location": "Відень, Австрія",
    "partner.aria": "Партнер RAGmetrics",
    "partner.logoAlt": "Логотип RAGmetrics",
    "partner.text": "Сертифікований партнер RAGmetrics у Європі",
    "partner.cta": "Перейти до RAGmetrics Solutions",
    "mail.subject": "Безкоштовний 20-хв AI Workflow Review",
    "mail.greeting": "Вітаю, AIadaptor,",
    "mail.request": "Я хочу записатися на безкоштовний 20-хвилинний AI Workflow Review.",
    "mail.name": "Ім'я",
    "mail.email": "Email",
    "mail.topic": "Тема",
    "mail.signoff": "З повагою",
  },
};

function detectInitialLanguage() {
  const path = window.location.pathname.replace(/\/+$/, "/");
  if (path === "/de/") return "de";
  if (path === "/ru/") return "ru";
  if (path === "/uk/") return "uk";
  if (path === "/") return "en";
  return localStorage.getItem("aiadaptor-language") || "en";
}

let currentLang = detectInitialLanguage();

function getTranslation(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || "";
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  localStorage.setItem("aiadaptor-language", currentLang);
  document.documentElement.lang = currentLang;
  document.title = getTranslation("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((value) => value.trim());
      element.setAttribute(attribute, getTranslation(key));
    });
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function buildMailto(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const topic = contactForm.elements.topic.selectedOptions[0].textContent;
  const subject = encodeURIComponent(getTranslation("mail.subject"));
  const body = encodeURIComponent(
    `${getTranslation("mail.greeting")}\n\n${getTranslation("mail.request")}\n\n${getTranslation("mail.name")}: ${name}\n${getTranslation("mail.email")}: ${email}\n${getTranslation("mail.topic")}: ${topic}\n\n${getTranslation("mail.signoff")},\n${name}`
  );

  return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
applyLanguage(currentLang);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    localStorage.setItem("aiadaptor-language", lang);

    if (window.location.protocol !== "file:" && languagePaths[lang] && window.location.pathname !== languagePaths[lang]) {
      window.location.href = languagePaths[lang];
      return;
    }

    applyLanguage(lang);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    window.location.href = buildMailto(formData);
    formStatus.textContent = getTranslation("form.status");
    contactForm.reset();
  });
}
