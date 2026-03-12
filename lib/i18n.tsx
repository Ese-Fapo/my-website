"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Locale = "pt" | "en" | "es"

type TranslationSchema = {
  nav: {
    brandSub: string
    openMenu: string
    closeMenu: string
    menuTitle: string
    scheduleCall: string
    start: string
    links: {
      home: string
      about: string
      projects: string
      services: string
      contact: string
      blog: string
      portfolio: string
    }
  }
  home: {
    whatsappAria: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    primaryCta: string
    secondaryCta: string
    cards: Array<{ label: string; value: string }>
  }
  about: {
    imageAlt: string
    stats: {
      projects: string
      experience: string
      reviews: string
    }
    badge: string
    title: string
    paragraphs: string[]
    pills: string[]
  }
  services: {
    badge: string
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  projects: {
    badge: string
    title: string
    descriptionBeforePortfolio: string
    portfolioLink: string
    descriptionAfterPortfolio: string
    contactLink: string
    loadMore: string
    loading: string
    noMore: string
    cardCta: string
    items: Array<{ title: string; description: string; image: string; link: string }>
  }
  contact: {
    timelineBadge: string
    timelineTitle: string
    timelineDescription: string
    timelineSteps: Array<{ title: string; description: string }>
    formTitle: string
    formDescription: string
    labels: {
      name: string
      email: string
      phone: string
      segment: string
      budget: string
      message: string
      extraServices: string
      paidTraffic: string
      digitalMarketing: string
      submit: string
    }
    placeholders: {
      name: string
      email: string
      phone: string
      segment: string
      budget: string
      message: string
    }
    budgetOptions: string[]
    yes: string
    no: string
    whatsappIntro: string
    whatsappFields: {
      name: string
      email: string
      phone: string
      segment: string
      budget: string
      paidTraffic: string
      digitalMarketing: string
      message: string
    }
  }
  faqs: {
    badge: string
    title: string
    description: string
    items: Array<{ question: string; answer: string }>
  }
  footer: {
    ctaTag: string
    ctaTitle: string
    ctaButton: string
    brandText: string
    navigation: string
    navigationLinks: {
      about: string
      services: string
      projects: string
      faqs: string
      contact: string
    }
    services: string
    serviceItems: string[]
    contact: string
    remoteSupport: string
    rights: string
    privacy: string
    terms: string
  }
}

const translations: Record<Locale, TranslationSchema> = {
  pt: {
    nav: {
      brandSub: "Desenvolvedores",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      menuTitle: "Menu",
      scheduleCall: "Agendar ligação",
      start: "Começar",
      links: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        services: "Serviços",
        contact: "Contato",
        blog: "Blog",
        portfolio: "Portfólio",
      },
    },
    home: {
      whatsappAria: "Falar no WhatsApp",
    },
    hero: {
      badge: "agência de sites premium",
      title: "Construímos sites de alta conversão que",
      titleHighlight: "fazem seu negócio crescer.",
      description:
        "Nosso time de especialistas cria sites incríveis, rápidos e fáceis de usar, que atraem tráfego e aumentam conversões. Vamos levar sua presença online para o próximo nível.",
      primaryCta: "Criar meu site agora",
      secondaryCta: "Ver nossos projetos",
      cards: [
        { label: "criado para converter", value: "Seu site vende enquanto você dorme" },
        { label: "mobile first", value: "Otimizado para todos os dispositivos" },
        { label: "design envolvente", value: "Visuais cativantes que prendem a atenção" },
      ],
    },
    about: {
      imageAlt: "equipe da agência colaborando",
      stats: {
        projects: "projetos",
        experience: "experiência",
        reviews: "avaliações",
      },
      badge: "Sobre nós",
      title: "Criamos sites que transformam ideias em crescimento.",
      paragraphs: [
        "A Bem Site Developer é uma agência de desenvolvimento web focada em criar sites de alto desempenho que geram resultados reais. Desenvolvemos websites rápidos, responsivos, seguros e pensados para oferecer a melhor experiência ao usuário.",
        "Unimos design moderno, tecnologia atual e estratégias de SEO para que seu site não apenas tenha uma ótima aparência, mas também seja encontrado no Google e converta visitantes em clientes.",
        "Seja um site institucional, landing page, e-commerce ou aplicação web personalizada, entregamos soluções sob medida para o seu negócio — nada de modelos genéricos. Na Bem Site Developer, sua presença online se transforma em um ativo que impulsiona o crescimento da sua marca.",
      ],
      pills: ["UX em primeiro lugar", "Foco em conversão", "Rápido como um raio"],
    },
    services: {
      badge: "serviços",
      title: "Tudo o que um desenvolvedor web entrega",
      description: "Soluções completas para criar, escalar e converter com uma presença digital de alto nível.",
      items: [
        { title: "Sites institucionais", description: "Presença profissional, performance alta e experiência premium para sua marca." },
        { title: "Landing pages", description: "Páginas focadas em conversão com CTA estratégico e copy persuasiva." },
        { title: "E-commerce", description: "Lojas rápidas, seguras e integradas com pagamentos e logística." },
        { title: "Hospedagem e domínio", description: "Serviço de hospedagem com alto desempenho, estabilidade e segurança, além de gerenciamento completo de domínio." },
        { title: "Site otimizado", description: "Páginas rápidas e otimizadas para melhor desempenho e experiência do usuário." },
        { title: "Manutenção e suporte", description: "Atualizações contínuas, segurança e acompanhamento pós-lançamento." },
        { title: "Integrações", description: "Conectamos seu site a CRM, automações, WhatsApp e ferramentas de marketing." },
        { title: "Criação de logo e branding", description: "Identidade visual, logotipo e paleta de cores para fortalecer sua marca." },
      ],
    },
    projects: {
      badge: "projetos",
      title: "Projetos recentes",
      descriptionBeforePortfolio: "Confira alguns exemplos do nosso trabalho. Veja o nosso",
      portfolioLink: "portfólio completo",
      descriptionAfterPortfolio: ". Quer tirar o seu projeto do papel?",
      contactLink: "Vamos criar algo incrível juntos!",
      loadMore: "Carregar mais projetos",
      loading: "Carregando...",
      noMore: "Confira nosso portfólio para ver mais projetos.",
      cardCta: "Ver projeto →",
      items: [
        {
          title: "Plataforma de educação",
          description: "Design premium, performance alta e SEO pronto para conversão.",
          image: "/images.web/sch-img.jpeg",
          link: "https://rockstarstudyabroad.com/index.html",
        },
        {
          title: "App de Lista de Compras com Orçamento",
          description: "Interface intuitiva para organizar compras, acompanhar gastos em tempo real e manter o orçamento sob controle.",
          image: "/images.web/budget.jpeg",
          link: "https://budget-eight-bay.vercel.app/",
        },
        {
          title: "Barbearia",
          description: "Design moderno, performance otimizada e SEO para atrair clientes locais.",
          image: "/images.web/image_berber.jpeg",
          link: "https://berber-shop-ruby.vercel.app/",
        },
        {
          title: "Mini e-commerce",
          description: "Design elegante, performance otimizada e SEO para atrair clientes.",
          image: "/images.web/e-commerce.jpeg",
          link: "https://dotman-s-store-3eax.vercel.app/",
        },
        {
          title: "App full stack para restaurante",
          description: "Aplicação completa para pedidos online, cardápio dinâmico e gestão administrativa.",
          image: "/images.web/resturant.jpeg",
          link: "#",
        },
        {
          title: "Blog tech",
          description: "Conteúdo escalável, performance e navegação fluida.",
          image: "/images.web/diffrent-screen.jpg",
          link: "https://tech-blog-i77h.vercel.app/",
        },
      ],
    },
    contact: {
      timelineBadge: "linha do tempo",
      timelineTitle: "Como desenvolvemos seu projeto",
      timelineDescription: "Transparência total em cada etapa — do briefing ao lançamento.",
      timelineSteps: [
        { title: "Briefing e estratégia", description: "Entendemos seu negócio, metas e público para montar o plano ideal." },
        { title: "Design e conteúdo", description: "Criamos a identidade visual e textos que comunicam valor." },
        { title: "Desenvolvimento", description: "Transformamos o design em um site rápido, responsivo e seguro." },
        { title: "Lançamento e suporte", description: "Publicação, testes finais e acompanhamento pós-lançamento." },
      ],
      formTitle: "Falar com Especialista!",
      formDescription: "Preencha o formulário e fale com um especialista sobre o seu projeto.",
      labels: {
        name: "Nome",
        email: "E-mail",
        phone: "Telefone / WhatsApp",
        segment: "Segmento",
        budget: "Faixa de investimento estimada",
        message: "Como podemos ajudar?",
        extraServices: "Serviços adicionais (opcionais):",
        paidTraffic: "Tráfego pago",
        digitalMarketing: "Marketing digital",
        submit: "Enviar mensagem →",
      },
      placeholders: {
        name: "Digite seu nome",
        email: "Digite seu melhor e-mail",
        phone: "Informe seu telefone",
        segment: "Qual segmento da sua empresa?",
        budget: "Investimento para o projeto",
        message: "Conte-nos sobre sua empresa, seus objetivos e o que espera do seu site.",
      },
      budgetOptions: ["Até R$ 1.000", "R$ 1.000 a R$ 2.000", "R$ 2.000 a R$ 3.000", "R$ 3.000 a R$ 4.000", "R$ 4.000 a R$ 5.000", "Acima de R$ 5.000"],
      yes: "Sim",
      no: "Não",
      whatsappIntro: "Olá! Gostaria de falar sobre meu projeto.",
      whatsappFields: {
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        segment: "Segmento",
        budget: "Investimento",
        paidTraffic: "Tráfego pago",
        digitalMarketing: "Marketing digital",
        message: "Mensagem",
      },
    },
    faqs: {
      badge: "dúvidas",
      title: "Perguntas frequentes",
      description: "Respostas rápidas para as dúvidas mais comuns sobre nossos serviços.",
      items: [
        { question: "A hospedagem está inclusa no valor?", answer: "Não. A hospedagem é cobrada à parte, mas oferecemos condição especial para clientes que fazem o site conosco." },
        { question: "Vocês oferecem suporte após o lançamento?", answer: "Sim. Temos planos de manutenção e suporte contínuo para manter seu site atualizado e seguro." },
        { question: "Vocês criam sites personalizados ou usam templates?", answer: "Criamos sites personalizados, desenvolvidos do zero para as necessidades do seu negócio." },
        { question: "Meu site irá aparecer no Google?", answer: "Sim. Aplicamos boas práticas de SEO para melhorar o posicionamento nos buscadores." },
        { question: "Quanto tempo leva para criar um site?", answer: "Em média, de 2 a 4 semanas, conforme escopo e integrações." },
        { question: "O site será otimizado para celulares?", answer: "Sim. Todos os projetos são responsivos e adaptados para diferentes telas." },
        { question: "Que informações preciso enviar para o meu site ser criado?", answer: "Precisamos de informações sobre sua empresa, objetivos, público-alvo, preferências de design e conteúdo que deseja incluir no site." },
        { question: "Vocês oferecem serviços de SEO para melhorar o posicionamento do meu site?", answer: "Sim. Aplicamos técnicas de SEO on-page, como otimização de palavras-chave, meta tags, estrutura de URL e desempenho do site para melhorar a visibilidade nos motores de busca." },
        {question: "Vocês criam todos os tipos de sites? ", answer: "Desenvolvemos a maioria dos tipos de sites, incluindo sites institucionais, lojas virtuais, portfólios, blogs, landing pages e muito mais. No entanto, não criamos sites que promovam pornografia, drogas ilegais, práticas religiosas enganosas, discurso de ódio, golpes ou qualquer atividade ilegal ou prejudicial. Nosso objetivo é desenvolver soluções digitais profissionais, éticas e alinhadas a valores que gerem impacto positivo para empresas e para a sociedade. "},
        {question : "Quais serviços adicionais vocês podem oferecer? ", answer: "Oferecemos serviços como criação de conteúdo, marketing digital, integração com redes sociais, criação de logotipo, papel timbrado, cartão digital, desenvolvimento de aplicativos e consultoria em estratégias online. Esses serviços podem ser contratados junto com o desenvolvimento do site ou como complementos para fortalecer sua presença digital e alcançar melhores resultados."},
        {question : "Posso ver projetos anteriores? ", answer: "Claro! Visite nossa seção de Portfólio para conferir alguns dos nossos trabalhos anteriores. Temos uma variedade de projetos que demonstram nossa experiência em criar sites personalizados, responsivos e otimizados para diferentes setores e necessidades. Se quiser ver mais exemplos ou tiver interesse em um tipo específico de projeto, entre em contato conosco para que possamos compartilhar mais detalhes."},
        {question : "Quais tipos de sites que vocês desenvolvem? ", answer: "Desenvolvemos a maioria dos tipos de sites, incluindo sites institucionais, lojas virtuais, portfólios, blogs, landing pages e muito mais."},
        {question : "Quais formas de pagamento vocês aceitam? ", answer: "Aceitamos diversas formas de pagamento, incluindo cartões de crédito, boletos bancários e transferências eletrônicas."},
        {question : "Há suporte após o lançamento? ", answer: "Sim. Oferecemos suporte contínuo e planos de manutenção para garantir que seu site permaneça atualizado e seguro."},
        {question : "Posso editar o conteúdo depois?", answer: "Sim. Fornecemos acesso a um painel de administração intuitivo, onde você pode atualizar textos, imagens e outros conteúdos do seu site de forma fácil e rápida."},
        {question : "Vocês oferecem serviços de SEO?", answer: "Sim. Aplicamos técnicas de SEO on-page, como otimização de palavras-chave, meta tags, estrutura de URL e desempenho do site para melhorar a visibilidade nos motores de busca."},
        {question : "Vocês criam sites para quais setores?", answer: "Criamos sites personalizados para uma ampla variedade de setores, incluindo comércio eletrônico, educação, saúde, tecnologia, serviços profissionais, entretenimento e muito mais. Nosso objetivo é desenvolver soluções digitais que atendam às necessidades específicas de cada setor e ajudem nossos clientes a alcançar seus objetivos de negócios."},
        {question : "Quais são os prazos para desenvolvimento?", answer: "O prazo para desenvolvimento de um site pode variar dependendo da complexidade do projeto, número de páginas, funcionalidades e integrações necessárias. Em média, o processo leva de 2 a 4 semanas, mas projetos mais simples podem ser concluídos em menos tempo, enquanto projetos mais complexos podem levar um pouco mais. Durante a fase de briefing, discutiremos o escopo do projeto e forneceremos uma estimativa de prazo mais precisa com base nas suas necessidades específicas."},



      ],
    },
    footer: {
      ctaTag: "pronto para acelerar?",
      ctaTitle: "Vamos criar sua próxima experiência digital",
      ctaButton: "Falar com um especialista →",
      brandText: "Criamos experiências digitais rápidas, bonitas e focadas em conversão.",
      navigation: "Navegação",
      navigationLinks: {
        about: "Sobre",
        services: "Serviços",
        projects: "Projetos",
        faqs: "Dúvidas",
        contact: "Contato",
      },
      services: "Serviços",
      serviceItems: ["Sites institucionais", "Landing pages", "E-commerce", "SEO & Performance", "Manutenção"],
      contact: "Contato",
      remoteSupport: "Brasil • Atendimento remoto",
      rights: "Todos os direitos reservados.",
      privacy: "Política de privacidade",
      terms: "Termos de uso",
    },
  },
  en: {
    nav: {
      brandSub: "Developers",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menuTitle: "Menu",
      scheduleCall: "Schedule a call",
      start: "Get started",
      links: {
        home: "Home",
        about: "About",
        projects: "Projects",
        services: "Services",
        contact: "Contact",
        blog: "Blog",
        portfolio: "Portfolio",
      },
    },
    home: {
      whatsappAria: "Chat on WhatsApp",
    },
    hero: {
      badge: "premium web agency",
      title: "We build high-converting websites that",
      titleHighlight: "help your business grow.",
      description:
        "Our team creates beautiful, fast, easy-to-use websites that attract traffic and increase conversions. Let’s take your online presence to the next level.",
      primaryCta: "Build my website now",
      secondaryCta: "View our projects",
      cards: [
        { label: "built to convert", value: "Your website sells while you sleep" },
        { label: "mobile first", value: "Optimized for every device" },
        { label: "engaging design", value: "Captivating visuals that hold attention" },
      ],
    },
    about: {
      imageAlt: "agency team collaborating",
      stats: {
        projects: "projects",
        experience: "experience",
        reviews: "reviews",
      },
      badge: "About us",
      title: "We build websites that turn ideas into growth.",
      paragraphs: [
        "Bem Site Developer is a web development agency focused on high-performance websites that generate real results.",
        "We combine modern design, current technology, and SEO strategies so your website both looks great and gets found on Google.",
        "From institutional websites and landing pages to e-commerce and custom web apps, we deliver tailor-made solutions for your business.",
      ],
      pills: ["UX first", "Conversion focused", "Lightning fast"],
    },
    services: {
      badge: "services",
      title: "Everything a web developer delivers",
      description: "Complete solutions to build, scale, and convert with a premium digital presence.",
      items: [
        { title: "Business websites", description: "Professional presence, high performance, and premium experience for your brand." },
        { title: "Landing pages", description: "Conversion-focused pages with strategic CTA and persuasive copy." },
        { title: "E-commerce", description: "Fast, secure stores integrated with payments and logistics." },
        { title: "Hosting and domain", description: "Reliable hosting with high-performance servers and complete domain management." },
        { title: "Optimized website", description: "Fast pages optimized for performance and user experience." },
        { title: "Maintenance and support", description: "Ongoing updates, security, and post-launch support." },
        { title: "Integrations", description: "We connect your website to CRM, automations, WhatsApp, and marketing tools." },
        { title: "Logo and branding", description: "Visual identity, logo creation, and color palette for stronger brand presence." },
      ],
    },
    projects: {
      badge: "projects",
      title: "Recent projects",
      descriptionBeforePortfolio: "Check out some of our work. See our",
      portfolioLink: "full portfolio",
      descriptionAfterPortfolio: ". Ready to launch your project?",
      contactLink: "Let’s build something amazing together!",
      loadMore: "Load more projects",
      loading: "Loading...",
      noMore: "Check out our portfolio for more projects.",
      cardCta: "View project →",
      items: [
        {
          title: "Education platform",
          description: "Premium design, high performance, and SEO ready for conversion.",
          image: "/images.web/sch-img.jpeg",
          link: "https://rockstarstudyabroad.com/index.html",
        },
        {
          title: "Budget Shopping App",
          description: "An intuitive shopping app to organize lists, track spending in real time, and keep every purchase within budget.",
          image: "/images.web/budget.jpeg",
          link: "https://budget-eight-bay.vercel.app/",
        },
        {
          title: "Barbershop",
          description: "Modern design, optimized performance, and SEO to attract local customers.",
          image: "/images.web/image_berber.jpeg",
          link: "https://berber-shop-ruby.vercel.app/",
        },
        {
          title: "Mini e-commerce",
          description: "Elegant design, optimized performance, and SEO to attract customers.",
          image: "/images.web/e-commerce.jpeg",
          link: "https://dotman-s-store-3eax.vercel.app/",
        },
        {
          title: "Full-stack restaurant app",
          description: "Complete app for online orders, dynamic menu management, and admin operations.",
          image: "/images.web/resturant.jpeg",
          link: "https://resturant-templete.vercel.app/",
        },
        {
          title: "Tech blog",
          description: "Scalable content, strong performance, and smooth navigation.",
          image: "/images.web/diffrent-screen.jpg",
          link: "https://tech-blog-i77h.vercel.app/",
        },
      ],
    },
    contact: {
      timelineBadge: "timeline",
      timelineTitle: "How we build your project",
      timelineDescription: "Total transparency in every step — from briefing to launch.",
      timelineSteps: [
        { title: "Briefing and strategy", description: "We understand your business, goals, and audience to define the ideal plan." },
        { title: "Design and content", description: "We craft visual identity and content that communicates value." },
        { title: "Development", description: "We turn design into a fast, responsive, and secure website." },
        { title: "Launch and support", description: "Publishing, final tests, and post-launch follow-up." },
      ],
      formTitle: "Talk to a specialist!",
      formDescription: "Fill out the form and talk to a specialist about your project.",
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone / WhatsApp",
        segment: "Industry",
        budget: "Estimated budget range",
        message: "How can we help?",
        extraServices: "Additional services (optional):",
        paidTraffic: "Paid traffic",
        digitalMarketing: "Digital marketing",
        submit: "Send message →",
      },
      placeholders: {
        name: "Enter your name",
        email: "Enter your best email",
        phone: "Enter your phone",
        segment: "What is your business industry?",
        budget: "Project investment",
        message: "Tell us about your company, goals, and what you expect from your website.",
      },
      budgetOptions: ["Up to R$ 1,000", "R$ 1,000 to R$ 2,000", "R$ 2,000 to R$ 3,000", "R$ 3,000 to R$ 4,000", "R$ 4,000 to R$ 5,000", "Above R$ 5,000"],
      yes: "Yes",
      no: "No",
      whatsappIntro: "Hi! I would like to talk about my project.",
      whatsappFields: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        segment: "Industry",
        budget: "Budget",
        paidTraffic: "Paid traffic",
        digitalMarketing: "Digital marketing",
        message: "Message",
      },
    },
    faqs: {
      badge: "faq",
      title: "Frequently asked questions",
      description: "Quick answers to the most common questions about our services.",
      items: [
        { question: "Is hosting included in the price?", answer: "No. Hosting is charged separately, but we offer special conditions for clients who build their website with us." },
        { question: "Do you offer support after launch?", answer: "Yes. We offer maintenance and ongoing support plans." },
        { question: "Do you build custom websites or use templates?", answer: "We build fully custom websites from scratch for your business needs." },
        { question: "Will my website appear on Google?", answer: "Yes. We apply SEO best practices to improve visibility." },
        { question: "How long does it take to build a website?", answer: "On average, 2 to 4 weeks depending on scope and integrations." },
        { question: "Will the site be mobile optimized?", answer: "Yes. All projects are responsive and optimized for all devices." },
        { question: "What information do I need to provide to create my website?", answer: "We need information about your company, goals, target audience, design preferences, and the content you want to include on your website." },
        { question: "Do you offer SEO services to improve my website's ranking?", answer: "Yes. We apply on-page SEO techniques such as keyword optimization, meta tags, URL structure, and website performance to improve visibility in search engines." },
        { question: "Do you create all types of websites?", answer: "We develop most types of websites, including business websites, online stores, portfolios, blogs, landing pages, and more. However, we do not create websites that promote pornography, illegal drugs, deceptive religious practices, hate speech, scams, or any illegal or harmful activities. Our goal is to develop professional, ethical digital solutions aligned with values that generate positive impact for businesses and society." },
        { question: "What additional services can you offer?", answer: "We offer services such as content creation, digital marketing, social media integration, logo creation, letterhead, digital business cards, app development, and online strategy consulting. These services can be contracted along with website development or as complements to strengthen your digital presence and achieve better results." },
        { question: "Can I see previous projects?", answer: "Of course! Visit our Portfolio section to check out some of our previous work. We have a variety of projects that demonstrate our experience in creating custom, responsive, and optimized websites for different sectors and needs. If you'd like to see more examples or are interested in a specific type of project, contact us so we can share more details." },
        { question: "What types of websites do you develop?", answer: "We develop most types of websites, including business websites, online stores, portfolios, blogs, landing pages, and more." },
        { question: "What payment methods do you accept?", answer: "We accept various payment methods, including credit cards, bank slips, and electronic transfers." },
        { question: "Can I edit the content later?", answer: "Yes. We provide access to an intuitive admin panel where you can easily and quickly update texts, images, and other content on your website." },
        { question: "Which industries do you create websites for?", answer: "We create custom websites for a wide variety of industries, including e-commerce, education, healthcare, technology, professional services, entertainment, and more. Our goal is to develop digital solutions that meet the specific needs of each industry and help our clients achieve their business goals." },
        { question: "What are the development timelines?", answer: "The timeline for website development can vary depending on project complexity, number of pages, features, and necessary integrations. On average, the process takes 2 to 4 weeks, but simpler projects can be completed faster, while more complex projects may take a bit longer. During the briefing phase, we will discuss the project scope and provide a more accurate timeline estimate based on your specific needs." },

      ],
    },
    footer: {
      ctaTag: "ready to grow?",
      ctaTitle: "Let’s build your next digital experience",
      ctaButton: "Talk to a specialist →",
      brandText: "We build fast, beautiful digital experiences focused on conversion.",
      navigation: "Navigation",
      navigationLinks: {
        about: "About",
        services: "Services",
        projects: "Projects",
        faqs: "FAQ",
        contact: "Contact",
      },
      services: "Services",
      serviceItems: ["Business websites", "Landing pages", "E-commerce", "SEO & Performance", "Maintenance"],
      contact: "Contact",
      remoteSupport: "Brazil • Remote support",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
  },
  es: {
    nav: {
      brandSub: "Desarrolladores",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      menuTitle: "Menú",
      scheduleCall: "Agendar llamada",
      start: "Empezar",
      links: {
        home: "Inicio",
        about: "Sobre",
        projects: "Proyectos",
        services: "Servicios",
        contact: "Contacto",
        blog: "Blog",
        portfolio: "Portafolio",
      },
    },
    home: {
      whatsappAria: "Hablar por WhatsApp",
    },
    hero: {
      badge: "agencia web premium",
      title: "Construimos sitios de alta conversión que",
      titleHighlight: "hacen crecer tu negocio.",
      description:
        "Nuestro equipo crea sitios increíbles, rápidos y fáciles de usar que atraen tráfico y aumentan conversiones.",
      primaryCta: "Crear mi sitio ahora",
      secondaryCta: "Ver nuestros proyectos",
      cards: [
        { label: "hecho para convertir", value: "Tu sitio vende mientras duermes" },
        { label: "mobile first", value: "Optimizado para todos los dispositivos" },
        { label: "diseño envolvente", value: "Visuales cautivadores que retienen atención" },
      ],
    },
    about: {
      imageAlt: "equipo de la agencia colaborando",
      stats: {
        projects: "proyectos",
        experience: "experiencia",
        reviews: "reseñas",
      },
      badge: "Sobre nosotros",
      title: "Creamos sitios que convierten ideas en crecimiento.",
      paragraphs: [
        "Bem Site Developer es una agencia de desarrollo web enfocada en sitios de alto rendimiento que generan resultados reales.",
        "Combinamos diseño moderno, tecnología actual y estrategias SEO para que tu sitio luzca increíble y sea encontrado en Google.",
        "Desde sitios corporativos y landing pages hasta e-commerce y apps web personalizadas, entregamos soluciones a medida.",
      ],
      pills: ["UX primero", "Enfoque en conversión", "Rápido como un rayo"],
    },
    services: {
      badge: "servicios",
      title: "Todo lo que ofrece un desarrollador web",
      description: "Soluciones completas para crear, escalar y convertir con una presencia digital de alto nivel.",
      items: [
        { title: "Sitios corporativos", description: "Presencia profesional, alto rendimiento y experiencia premium para tu marca." },
        { title: "Landing pages", description: "Páginas enfocadas en conversión con CTA estratégico y copy persuasivo." },
        { title: "E-commerce", description: "Tiendas rápidas y seguras integradas con pagos y logística." },
        { title: "Hosting y dominio", description: "Hosting estable y seguro con gestión completa de dominio." },
        { title: "Sitio optimizado", description: "Páginas rápidas y optimizadas para rendimiento y experiencia de usuario." },
        { title: "Mantenimiento y soporte", description: "Actualizaciones continuas, seguridad y seguimiento post-lanzamiento." },
        { title: "Integraciones", description: "Conectamos tu sitio con CRM, automatizaciones, WhatsApp y marketing." },
        { title: "Logo y branding", description: "Identidad visual, creación de logotipo y paleta de colores para fortalecer tu marca." },
      ],
    },
    projects: {
      badge: "proyectos",
      title: "Proyectos recientes",
      descriptionBeforePortfolio: "Mira algunos ejemplos de nuestro trabajo. Revisa nuestro",
      portfolioLink: "portafolio completo",
      descriptionAfterPortfolio: ". ¿Listo para lanzar tu proyecto?",
      contactLink: "¡Creemos algo increíble juntos!",
      loadMore: "Cargar más proyectos",
      loading: "Cargando...",
      noMore: "Revisa nuestro portafolio para ver más proyectos.",
      cardCta: "Ver proyecto →",
      items: [
        {
          title: "Plataforma educativa",
          description: "Diseño premium, alto rendimiento y SEO listo para conversión.",
          image: "/images.web/sch-img.jpeg",
          link: "https://rockstarstudyabroad.com/index.html",
        },
        {
          title: "App de Compras con Presupuesto",
          description: "App intuitiva para organizar compras, seguir gastos en tiempo real y mantener cada compra dentro del presupuesto.",
          image: "/images.web/budget.jpeg",
          link: "https://budget-eight-bay.vercel.app/",
        },
        {
          title: "Barbería",
          description: "Diseño moderno, rendimiento optimizado y SEO para atraer clientes locales.",
          image: "/images.web/image_berber.jpeg",
          link: "https://berber-shop-ruby.vercel.app/",
        },
        {
          title: "Mini e-commerce",
          description: "Diseño elegante, rendimiento optimizado y SEO para atraer clientes.",
          image: "/images.web/e-commerce.jpeg",
          link: "https://dotman-s-store-3eax.vercel.app/",
        },
        {
          title: "App full stack para restaurante",
          description: "Aplicación completa para pedidos en línea, menú dinámico y gestión administrativa.",
          image: "/images.web/resturant.jpeg",
          link: "#",
        },
        {
          title: "Blog tech",
          description: "Contenido escalable, rendimiento y navegación fluida.",
          image: "/images.web/diffrent-screen.jpg",
          link: "https://tech-blog-i77h.vercel.app/",
        },
      ],
    },
    contact: {
      timelineBadge: "línea de tiempo",
      timelineTitle: "Cómo desarrollamos tu proyecto",
      timelineDescription: "Transparencia total en cada etapa — del briefing al lanzamiento.",
      timelineSteps: [
        { title: "Briefing y estrategia", description: "Entendemos tu negocio, metas y público para definir el plan ideal." },
        { title: "Diseño y contenido", description: "Creamos identidad visual y textos que comunican valor." },
        { title: "Desarrollo", description: "Transformamos el diseño en un sitio rápido, responsivo y seguro." },
        { title: "Lanzamiento y soporte", description: "Publicación, pruebas finales y seguimiento post-lanzamiento." },
      ],
      formTitle: "¡Habla con un especialista!",
      formDescription: "Completa el formulario y habla con un especialista sobre tu proyecto.",
      labels: {
        name: "Nombre",
        email: "Correo",
        phone: "Teléfono / WhatsApp",
        segment: "Segmento",
        budget: "Rango de inversión estimado",
        message: "¿Cómo podemos ayudarte?",
        extraServices: "Servicios adicionales (opcionales):",
        paidTraffic: "Tráfico pago",
        digitalMarketing: "Marketing digital",
        submit: "Enviar mensaje →",
      },
      placeholders: {
        name: "Ingresa tu nombre",
        email: "Ingresa tu mejor correo",
        phone: "Ingresa tu teléfono",
        segment: "¿Cuál es el segmento de tu empresa?",
        budget: "Inversión del proyecto",
        message: "Cuéntanos sobre tu empresa, objetivos y lo que esperas de tu sitio web.",
      },
      budgetOptions: ["Hasta R$ 1.000", "R$ 1.000 a R$ 2.000", "R$ 2.000 a R$ 3.000", "R$ 3.000 a R$ 4.000", "R$ 4.000 a R$ 5.000", "Más de R$ 5.000"],
      yes: "Sí",
      no: "No",
      whatsappIntro: "¡Hola! Me gustaría hablar sobre mi proyecto.",
      whatsappFields: {
        name: "Nombre",
        email: "Correo",
        phone: "Teléfono",
        segment: "Segmento",
        budget: "Inversión",
        paidTraffic: "Tráfico pago",
        digitalMarketing: "Marketing digital",
        message: "Mensaje",
      },
    },
    faqs: {
      badge: "preguntas",
      title: "Preguntas frecuentes",
      description: "Respuestas rápidas a las dudas más comunes sobre nuestros servicios.",
      items: [
        { question: "¿El hosting está incluido en el precio?", answer: "No. El hosting se cobra aparte, pero ofrecemos condiciones especiales para clientes." },
        { question: "¿Ofrecen soporte después del lanzamiento?", answer: "Sí. Tenemos planes de mantenimiento y soporte continuo." },
        { question: "¿Crean sitios personalizados o usan plantillas?", answer: "Creamos sitios totalmente personalizados desde cero." },
        { question: "¿Mi sitio aparecerá en Google?", answer: "Sí. Aplicamos buenas prácticas de SEO para mejorar visibilidad." },
        { question: "¿Cuánto tiempo tarda crear un sitio?", answer: "En promedio, de 2 a 4 semanas, según alcance e integraciones." },
        { question: "¿El sitio estará optimizado para móviles?", answer: "Sí. Todos los proyectos son responsivos para cualquier dispositivo." },
        { question: "¿Qué información necesito proporcionar para crear mi sitio web?", answer: "Necesitamos información sobre su empresa, objetivos, público objetivo, preferencias de diseño y contenido que desea incluir en el sitio web." },
        { question: "¿Ofrecen servicios de SEO para mejorar el posicionamiento de mi sitio web?", answer: "Sí. Aplicamos técnicas de SEO on-page, como optimización de palabras clave, meta tags, estructura de URL y rendimiento del sitio para mejorar la visibilidad en los motores de búsqueda." },
        { question: "¿Crean todos los tipos de sitios web?", answer: "Desarrollamos la mayoría de los tipos de sitios web, incluidos sitios corporativos, tiendas virtuales, portafolios, blogs, landing pages y más. Sin embargo, no creamos sitios que promuevan pornografía, drogas ilegales, prácticas religiosas engañosas, discurso de odio, estafas o cualquier actividad ilegal o perjudicial. Nuestro objetivo es desarrollar soluciones digitales profesionales, éticas y alineadas con valores que generen un impacto positivo para las empresas y la sociedad." },
        { question: "¿Qué servicios adicionales pueden ofrecer?", answer: "Ofrecemos servicios como creación de contenido, marketing digital, integración con redes sociales, creación de logotipo, papel membretado, tarjeta digital, desarrollo de aplicaciones y consultoría en estrategias online. Estos servicios pueden contratarse junto con el desarrollo del sitio web o como complementos para fortalecer su presencia digital y lograr mejores resultados." },
        { question: "¿Puedo ver proyectos anteriores?", answer: "¡Claro! Visite nuestra sección de Portafolio para ver algunos de nuestros trabajos anteriores. Tenemos una variedad de proyectos que demuestran nuestra experiencia en crear sitios web personalizados, responsivos y optimizados para diferentes sectores y necesidades. Si desea ver más ejemplos o está interesado en un tipo específico de proyecto, contáctenos para que podamos compartir más detalles." },
        { question: "¿Qué tipos de sitios web desarrollan?", answer: "Desarrollamos la mayoría de los tipos de sitios web, incluidos sitios corporativos, tiendas virtuales, portafolios, blogs, landing pages y más." },
        { question: "¿Qué formas de pago aceptan?", answer: "Aceptamos diversas formas de pago, incluidas tarjetas de crédito, boletos bancarios y transferencias electrónicas." },
        { question: "¿Puedo editar el contenido después?", answer: "Sí. Proporcionamos acceso a un panel de administración intuitivo, donde puede actualizar textos, imágenes y otros contenidos de su sitio web de forma fácil y rápida." },
        { question: "¿Para qué sectores crean sitios web?", answer: "Creamos sitios web personalizados para una amplia variedad de sectores, incluidos comercio electrónico, educación, salud, tecnología, servicios profesionales, entretenimiento y más. Nuestro objetivo es desarrollar soluciones digitales que satisfagan las necesidades específicas de cada sector y ayuden a nuestros clientes a alcanzar sus objetivos comerciales." },
        { question: "¿Cuáles son los plazos de desarrollo?", answer: "El plazo para el desarrollo de un sitio web puede variar según la complejidad del proyecto, número de páginas, funcionalidades e integraciones necesarias. En promedio, el proceso toma de 2 a 4 semanas, pero proyectos más simples pueden completarse en menos tiempo, mientras que proyectos más complejos pueden tardar un poco más. Durante la fase de briefing, discutiremos el alcance del proyecto y proporcionaremos una estimación de plazo más precisa según sus necesidades específicas." },
      ],
    },
    footer: {
      ctaTag: "¿listo para acelerar?",
      ctaTitle: "Creemos tu próxima experiencia digital",
      ctaButton: "Hablar con un especialista →",
      brandText: "Creamos experiencias digitales rápidas, bonitas y enfocadas en conversión.",
      navigation: "Navegación",
      navigationLinks: {
        about: "Sobre",
        services: "Servicios",
        projects: "Proyectos",
        faqs: "Preguntas",
        contact: "Contacto",
      },
      services: "Servicios",
      serviceItems: ["Sitios corporativos", "Landing pages", "E-commerce", "SEO y rendimiento", "Mantenimiento"],
      contact: "Contacto",
      remoteSupport: "Brasil • Atención remota",
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
    },
  },
}

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const getDeviceLanguage = (): Locale => {
  if (typeof window === "undefined") return "pt"
  
  const browserLang = navigator.language || navigator.languages?.[0] || "pt"
  const langCode = browserLang.split("-")[0].toLowerCase()
  
  const supportedLocales: Locale[] = ["pt", "en", "es"]
  if (supportedLocales.includes(langCode as Locale)) {
    return langCode as Locale
  }
  
  return "pt"
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "pt"
    
    const storedLocale = window.localStorage.getItem("site-locale") as Locale | null
    if (storedLocale && translations[storedLocale]) {
      return storedLocale
    }
    
    return getDeviceLanguage()
  })

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("site-locale") as Locale | null
    if (storedLocale && translations[storedLocale]) {
      setLocaleState(storedLocale)
    } else {
      const deviceLang = getDeviceLanguage()
      setLocaleState(deviceLang)
    }
  }, [])

  useEffect(() => {
    const htmlLang = locale === "pt" ? "pt-BR" : locale
    document.documentElement.lang = htmlLang
    window.localStorage.setItem("site-locale", locale)
  }, [locale])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
  }

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
