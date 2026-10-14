(function () {
  const STORAGE_KEY = 'vitbcompany-lang';
  const DEFAULT = 'en';

  const dict = {
    en: {
      nav_home: 'Home', nav_services: 'Services', nav_about: 'About', nav_contact: 'Contact',
      eyebrow: 'Industrial montage · Romania',
      hero_title: 'Industrial installation & assembly',
      tagline: 'We install equipment, erect steel structures, lay pipelines and assemble production lines — and take care of dismantling, relocation and maintenance.',
      cta_services: 'Our services', cta_contact: 'Request a quote',
      hero_tag1: 'Safety first', hero_tag2: 'Precise assembly', hero_tag3: 'On schedule',
      home_scope: 'Scope of work', home_scope_title: 'What we do',
      s1_t: 'Equipment installation', s1_b: 'Positioning, levelling, anchoring and connection of industrial equipment and machinery.',
      s2_t: 'Steel structures', s2_b: 'Assembly of steel frames, platforms, supports, stairs and technological structures.',
      s3_t: 'Pipelines', s3_b: 'Installation of process and utility pipelines, supports and fittings.',
      s4_t: 'Production lines', s4_b: 'Assembly, alignment and connection of production and conveyor lines.',
      s5_t: 'Dismantling & relocation', s5_b: 'Careful dismantling, marking, transport preparation and re-assembly on a new site.',
      s6_t: 'Maintenance', s6_b: 'Scheduled inspections, adjustments and repair works on installed equipment and structures.',
      more: 'All services →',
      page_services: 'SERVICES',
      services_intro: 'Full-cycle industrial montage: from preparation and assembly to commissioning support and maintenance.',
      services_cta_title: 'Have a project?', services_cta_text: 'Describe the task — we will review it and get back to you.',
      page_about: 'ABOUT',
      about_intro: 'VitB Company is an industrial montage company working in Romania. Our approach is simple: do the job safely, precisely and on time.',
      a1_t: 'Safety', a1_b: 'Work is planned around safety rules, protective equipment and a safe workplace for everyone on site.',
      a2_t: 'Precision', a2_b: 'Measurements, alignment and quality checks at every stage of assembly.',
      a3_t: 'Deadlines', a3_b: 'A clear work plan agreed in advance and kept throughout the project.',
      a4_t: 'Own team & equipment', a4_b: 'We work with our own installation team and our own tools and equipment.',
      about_quote: 'Built right. Built safe. Built on time.',
      page_contact: 'CONTACT',
      contact_intro: 'Tell us about your project and we will get back to you.',
      form_name: 'Name', form_company: 'Company', form_phone: 'Phone', form_email: 'Email',
      form_service: 'Service type', form_choose: 'Select a service', form_other: 'Other',
      form_desc: 'Project description', form_submit: 'Send request',
      label_email: 'Email', label_phone: 'Phone', label_location: 'Location', value_location: 'Romania',
      contact_note: 'Include the type of work, the site location and the desired timeframe.',
      footer_tag: 'Industrial montage ◆ Romania',
    },
    ro: {
      nav_home: 'Acasă', nav_services: 'Servicii', nav_about: 'Despre', nav_contact: 'Contact',
      eyebrow: 'Montaj industrial · România',
      hero_title: 'Instalare și montaj industrial',
      tagline: 'Montăm echipamente, ridicăm structuri metalice, instalăm conducte și asamblăm linii de producție — și ne ocupăm de demontare, relocare și mentenanță.',
      cta_services: 'Serviciile noastre', cta_contact: 'Cere o ofertă',
      hero_tag1: 'Siguranță', hero_tag2: 'Montaj precis', hero_tag3: 'La termen',
      home_scope: 'Domeniu de lucru', home_scope_title: 'Ce facem',
      s1_t: 'Montaj echipamente', s1_b: 'Poziționare, nivelare, ancorare și racordare a echipamentelor și utilajelor industriale.',
      s2_t: 'Structuri metalice', s2_b: 'Montaj de cadre metalice, platforme, suporturi, scări și structuri tehnologice.',
      s3_t: 'Conducte', s3_b: 'Instalarea conductelor tehnologice și de utilități, a suporturilor și fitingurilor.',
      s4_t: 'Linii de producție', s4_b: 'Asamblarea, alinierea și racordarea liniilor de producție și a transportoarelor.',
      s5_t: 'Demontare și relocare', s5_b: 'Demontare atentă, marcare, pregătire pentru transport și remontare pe noul amplasament.',
      s6_t: 'Mentenanță', s6_b: 'Inspecții planificate, reglaje și lucrări de reparații la echipamente și structuri.',
      more: 'Toate serviciile →',
      page_services: 'SERVICII',
      services_intro: 'Montaj industrial complet: de la pregătire și asamblare la suport la punerea în funcțiune și mentenanță.',
      services_cta_title: 'Aveți un proiect?', services_cta_text: 'Descrieți lucrarea — o analizăm și revenim cu un răspuns.',
      page_about: 'DESPRE',
      about_intro: 'VitB Company este o companie de montaj industrial care activează în România. Abordarea noastră este simplă: lucrăm în siguranță, precis și la termen.',
      a1_t: 'Siguranță', a1_b: 'Lucrările sunt planificate respectând regulile de securitate, echipamentele de protecție și un loc de muncă sigur pentru toți.',
      a2_t: 'Precizie', a2_b: 'Măsurători, aliniere și verificări de calitate în fiecare etapă a montajului.',
      a3_t: 'Termene', a3_b: 'Un plan de lucru clar, stabilit în avans și respectat pe toată durata proiectului.',
      a4_t: 'Echipă și utilaje proprii', a4_b: 'Lucrăm cu propria echipă de montaj și cu sculele și echipamentele noastre.',
      about_quote: 'Montat corect. Montat sigur. Montat la timp.',
      page_contact: 'CONTACT',
      contact_intro: 'Spuneți-ne despre proiectul dumneavoastră și revenim cu un răspuns.',
      form_name: 'Nume', form_company: 'Companie', form_phone: 'Telefon', form_email: 'Email',
      form_service: 'Tip serviciu', form_choose: 'Alegeți un serviciu', form_other: 'Altele',
      form_desc: 'Descrierea proiectului', form_submit: 'Trimite cererea',
      label_email: 'Email', label_phone: 'Telefon', label_location: 'Locație', value_location: 'România',
      contact_note: 'Menționați tipul lucrării, locația șantierului și termenul dorit.',
      footer_tag: 'Montaj industrial ◆ România',
    },
    de: {
      nav_home: 'Start', nav_services: 'Leistungen', nav_about: 'Über uns', nav_contact: 'Kontakt',
      eyebrow: 'Industriemontage · Rumänien',
      hero_title: 'Industrielle Installation & Montage',
      tagline: 'Wir installieren Anlagen, errichten Stahlkonstruktionen, verlegen Rohrleitungen und montieren Produktionslinien — inklusive Demontage, Verlagerung und Wartung.',
      cta_services: 'Unsere Leistungen', cta_contact: 'Angebot anfragen',
      hero_tag1: 'Sicherheit zuerst', hero_tag2: 'Präzise Montage', hero_tag3: 'Termintreu',
      home_scope: 'Leistungsumfang', home_scope_title: 'Was wir tun',
      s1_t: 'Anlagenmontage', s1_b: 'Positionieren, Ausrichten, Verankern und Anschließen von Industrieanlagen und Maschinen.',
      s2_t: 'Stahlkonstruktionen', s2_b: 'Montage von Stahlrahmen, Bühnen, Stützen, Treppen und technologischen Konstruktionen.',
      s3_t: 'Rohrleitungen', s3_b: 'Verlegung von Prozess- und Versorgungsleitungen, Halterungen und Armaturen.',
      s4_t: 'Produktionslinien', s4_b: 'Montage, Ausrichtung und Anschluss von Produktions- und Förderlinien.',
      s5_t: 'Demontage & Verlagerung', s5_b: 'Sorgfältige Demontage, Kennzeichnung, Transportvorbereitung und Wiederaufbau am neuen Standort.',
      s6_t: 'Wartung', s6_b: 'Planmäßige Inspektionen, Einstellungen und Reparaturen an Anlagen und Konstruktionen.',
      more: 'Alle Leistungen →',
      page_services: 'LEISTUNGEN',
      services_intro: 'Industriemontage aus einer Hand: von Vorbereitung und Montage bis zur Unterstützung bei Inbetriebnahme und Wartung.',
      services_cta_title: 'Haben Sie ein Projekt?', services_cta_text: 'Beschreiben Sie die Aufgabe — wir prüfen sie und melden uns.',
      page_about: 'ÜBER UNS',
      about_intro: 'VitB Company ist ein Industriemontage-Unternehmen in Rumänien. Unser Ansatz ist einfach: sicher, präzise und termingerecht arbeiten.',
      a1_t: 'Sicherheit', a1_b: 'Die Arbeiten werden nach Sicherheitsregeln, mit Schutzausrüstung und für einen sicheren Arbeitsplatz geplant.',
      a2_t: 'Präzision', a2_b: 'Messungen, Ausrichtung und Qualitätskontrollen in jeder Montagephase.',
      a3_t: 'Termine', a3_b: 'Ein klarer, im Voraus abgestimmter Arbeitsplan, der während des gesamten Projekts eingehalten wird.',
      a4_t: 'Eigenes Team & Equipment', a4_b: 'Wir arbeiten mit eigenem Montageteam sowie eigenen Werkzeugen und Geräten.',
      about_quote: 'Richtig montiert. Sicher montiert. Pünktlich montiert.',
      page_contact: 'KONTAKT',
      contact_intro: 'Erzählen Sie uns von Ihrem Projekt — wir melden uns bei Ihnen.',
      form_name: 'Name', form_company: 'Firma', form_phone: 'Telefon', form_email: 'E-Mail',
      form_service: 'Leistungsart', form_choose: 'Leistung wählen', form_other: 'Sonstiges',
      form_desc: 'Projektbeschreibung', form_submit: 'Anfrage senden',
      label_email: 'E-Mail', label_phone: 'Telefon', label_location: 'Standort', value_location: 'Rumänien',
      contact_note: 'Bitte nennen Sie Art der Arbeiten, Standort und gewünschten Zeitrahmen.',
      footer_tag: 'Industriemontage ◆ Rumänien',
    },
    ru: {
      nav_home: 'Главная', nav_services: 'Услуги', nav_about: 'О нас', nav_contact: 'Контакты',
      eyebrow: 'Промышленный монтаж · Румыния',
      hero_title: 'Промышленный монтаж и сборка',
      tagline: 'Монтируем оборудование, металлоконструкции и трубопроводы, собираем производственные линии — а также выполняем демонтаж, перенос и обслуживание.',
      cta_services: 'Наши услуги', cta_contact: 'Запросить расчёт',
      hero_tag1: 'Безопасность', hero_tag2: 'Точный монтаж', hero_tag3: 'В срок',
      home_scope: 'Направления работ', home_scope_title: 'Что мы делаем',
      s1_t: 'Монтаж оборудования', s1_b: 'Установка, выверка, анкеровка и подключение промышленного оборудования и станков.',
      s2_t: 'Металлоконструкции', s2_b: 'Монтаж стальных каркасов, площадок, опор, лестниц и технологических конструкций.',
      s3_t: 'Трубопроводы', s3_b: 'Монтаж технологических и инженерных трубопроводов, опор и арматуры.',
      s4_t: 'Производственные линии', s4_b: 'Сборка, выверка и подключение производственных и конвейерных линий.',
      s5_t: 'Демонтаж и перенос', s5_b: 'Аккуратный демонтаж, маркировка, подготовка к перевозке и сборка на новом месте.',
      s6_t: 'Обслуживание', s6_b: 'Плановые осмотры, регулировка и ремонтные работы на оборудовании и конструкциях.',
      more: 'Все услуги →',
      page_services: 'УСЛУГИ',
      services_intro: 'Промышленный монтаж полного цикла: от подготовки и сборки до сопровождения пусконаладки и обслуживания.',
      services_cta_title: 'Есть проект?', services_cta_text: 'Опишите задачу — мы изучим её и свяжемся с вами.',
      page_about: 'О НАС',
      about_intro: 'VitB Company — компания промышленного монтажа, работающая в Румынии. Наш подход прост: безопасно, точно и в срок.',
      a1_t: 'Безопасность', a1_b: 'Работы планируются с соблюдением правил техники безопасности, со средствами защиты и безопасной организацией площадки.',
      a2_t: 'Точность', a2_b: 'Замеры, выверка и контроль качества на каждом этапе монтажа.',
      a3_t: 'Сроки', a3_b: 'Чёткий план работ, согласованный заранее и соблюдаемый на протяжении всего проекта.',
      a4_t: 'Своя бригада и техника', a4_b: 'Работаем собственной монтажной бригадой, своим инструментом и оборудованием.',
      about_quote: 'Смонтировано правильно. Безопасно. В срок.',
      page_contact: 'КОНТАКТЫ',
      contact_intro: 'Расскажите о вашем проекте — мы свяжемся с вами.',
      form_name: 'Имя', form_company: 'Компания', form_phone: 'Телефон', form_email: 'Email',
      form_service: 'Тип услуги', form_choose: 'Выберите услугу', form_other: 'Другое',
      form_desc: 'Описание проекта', form_submit: 'Отправить заявку',
      label_email: 'Email', label_phone: 'Телефон', label_location: 'Локация', value_location: 'Румыния',
      contact_note: 'Укажите вид работ, местоположение объекта и желаемые сроки.',
      footer_tag: 'Промышленный монтаж ◆ Румыния',
    },
  };

  function bustLinks() {
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) return;
      if (!/\.html(\?|$)/.test(href)) return;
      try {
        const url = new URL(href, location.href);
        url.searchParams.set('v', '7');
        const file = url.pathname.split('/').pop();
        a.setAttribute('href', file + '?' + url.searchParams.toString());
      } catch (_) {}
    });
  }

  function apply(lang) {
    const pack = dict[lang] || dict[DEFAULT];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
    window.__vitbApply = apply;
  }

  function init() {
    let lang = DEFAULT;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) lang = saved;
    } catch (_) {}
    window.__vitbApply = apply;
    apply(lang);
    bustLinks();
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
    }
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (!btn) return;
      e.preventDefault();
      const next = btn.getAttribute('data-lang');
      if (next && dict[next]) apply(next);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
