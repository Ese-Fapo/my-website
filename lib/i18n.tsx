"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Locale = "pt" | "en" | "es"

type TranslationSchema = {
  nav: {
    brandName: string
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
      pricing: string
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
    livePreviewTag: string
    livePreviewTitle: string
    livePreviewDescription: string
    livePreviewStatus: string
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
  pricing: {
    badge: string
    title: string
    description: string
    note: string
    cta: string
    discountLabel: string
    optionalBadge: string
    optionalSubtext: string
    items: Array<{
      title: string
      description: string
      price: string
      discountPercent?: number
      discountBadgeText?: string
      discountedPrice?: string
      features: Array<{ label: string; included: boolean }>
    }>
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
  reviews: {
    badge: string
    title: string
    description: string
    summaryLabel: string
    countLabel: string
    items: Array<{ name: string; business: string; text: string }>
  }
  localSeo: {
    badge: string
    title: string
    description: string
    cityLabel: string
    cities: string[]
    highlights: Array<{ title: string; description: string }>
    mapTitle: string
    mapDescription: string
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
      brandName: "Sites Profissionai",
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
        pricing: "Preços",
        contact: "Contato",
        blog: "Blog",
        portfolio: "Portfólio",
      },
    },
    home: {
      whatsappAria: "Falar no WhatsApp",
    },
    hero: {
      badge: "criação de sites em Santa Catarina",
      title: "Criamos sites profissionais",
      titleHighlight: "para sua empresa atrair mais clientes",
      description:
        "Desenvolvemos sites rápidos, responsivos e otimizados para o Google. Se você procura um profissional que faz site, ajudamos empresas de Florianópolis, São José, Joinville e Balneário Camboriú a gerar mais contatos e vendas.",
      primaryCta: "Quero meu site",
      secondaryCta: "Ver exemplos",
      livePreviewTag: "veja seu site",
      livePreviewTitle: "Veja seu site ao vivo",
      livePreviewDescription: "Nós enviamos um link para você acompanhar seu site enquanto ele está sendo feito. Você pode ver a qualquer hora, de qualquer lugar.",
      livePreviewStatus: "online",
      cards: [
        { label: "Mais clientes online", value: "Seu site trabalha por você" },
        { label: "Funciona no celular e computador", value: "Fácil de usar em qualquer tela" },
        { label: "Visual limpo e profissional", value: "Passa confiança para quem visita" },
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
      title: "Criamos sites simples que ajudam seu negócio a crescer.",
      paragraphs: [
        "Criamos sites rápidos, bonitos e fáceis de usar para sua empresa.",
        "Seu site ajuda mais pessoas a encontrar seu negócio no Google e falar com você.",
        "Atendemos empresas em Florianópolis, São José, Joinville e Balneário Camboriú com sites rápidos e SEO local (Visibilidade).",
      ],
      pills: ["Fácil de usar", "Mais clientes", "Site rápido"],
    },
    services: {
      badge: "serviços",
      title: "O que fazemos para o seu negócio",
      description: "Criamos soluções simples para ajudar sua empresa a crescer online.",
      items: [
        { title: "Site para empresa", description: "Um site bonito e profissional para mostrar seu negócio." },
        { title: "Landing page", description: "Uma página feita para receber mais mensagens e clientes." },
        { title: "Loja online", description: "Vendemos seus produtos com uma loja simples e segura." },
        { title: "Hospedagem e domínio", description: "Ajudamos você a colocar seu site no ar." },
        { title: "Site rápido", description: "Seu site abre rápido e funciona bem." },
        { title: "Suporte e manutenção", description: "Cuidamos do seu site depois que ele estiver pronto." },
        { title: "Google Business e Maps", description: "Integramos seu site ao Perfil da Empresa no Google e ao Google Maps para atrair clientes locais." },
        { title: "Logo e marca", description: "Criamos sua logo e a imagem da sua marca." },
      ],
    },
    pricing: {
      badge: "preços",
      title: "Valores iniciais dos serviços",
      description: "Veja uma faixa de investimento em real brasileiro para os serviços mais pedidos.",
      note: "Valores em BRL (R$) e podem variar de projeto para projeto, conforme as necessidades de cada cliente. Novos clientes ainda podem receber 20% de desconto no primeiro projeto.",
      cta: "Pedir orçamento",
      discountLabel: "desc.",
      optionalBadge: "opcional",
      optionalSubtext: "extra",
      items: [
        {
          title: "Landing page",
          description: "Página focada em conversão, WhatsApp e captação de leads.",
          price: "R$ 749",
          discountPercent: 33,
          discountBadgeText: "R$ 250",
          discountedPrice: "R$ 499",
          features: [
            { label: "Design responsivo", included: true },
            { label: "Botão para WhatsApp", included: true },
            { label: "Captação de leads", included: true },
            { label: "SEO básico (Visibilidade)", included: true },
            { label: "Entrega rápida", included: true },
            { label: "Painel de pedidos", included: false },
            { label: "Checkout online", included: false },
          ],
        },
        {
          title: "Site institucional",
          description: "Site profissional para apresentar sua empresa e serviços.",
          price: "R$ 1.500",
          features: [
            { label: "Até 5 páginas", included: true },
            { label: "SEO básico (Visibilidade)", included: true },
            { label: "Formulário de contato", included: true },
            { label: "Integração com WhatsApp", included: true },
            { label: "Layout profissional", included: true },
            { label: "Área do cliente", included: false },
            { label: "Carrinho de compras", included: false },
          ],
        },
        {
          title: "Loja virtual",
          description: "E-commerce com catálogo, carrinho e finalização de pedido.",
          price: "R$ 3.500",
          features: [
            { label: "Catálogo de produtos", included: true },
            { label: "Carrinho e checkout", included: true },
            { label: "Pagamento online", included: true },
            { label: "Gestão de pedidos", included: true },
            { label: "Cupons de desconto", included: true },
            { label: "App nativo", included: false },
            { label: "ERP avançado", included: false },
          ],
        },
        {
          title: "Suporte mensal",
          description: "Atualizações, pequenos ajustes e acompanhamento contínuo.",
          price: "R$ 300/mês",
          features: [
            { label: "Ajustes mensais", included: true },
            { label: "Atualização de conteúdo", included: true },
            { label: "Suporte técnico", included: true },
            { label: "Correções rápidas", included: true },
            { label: "Acompanhamento contínuo", included: true },
            { label: "Novo site completo", included: false },
            { label: "Redesign total", included: false },
          ],
        },
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
          title: "Site para escritório de contabilidade",
          description: "Site profissional para uma firma de contabilidade, com visual premium, apresentação clara dos serviços e foco em confiança, compliance e consultoria financeira.",
          image: "/images.web/accountant screenshoot.jpeg",
          link: "https://acc-busayo.vercel.app/",
        },
        {
          title: "Plataforma de educação",
          description: "Design premium, performance alta e SEO (Visibilidade) pronto para conversão.",
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
          description: "Design moderno, performance otimizada e SEO (Visibilidade) para atrair clientes locais.",
          image: "/images.web/image_berber.jpeg",
          link: "https://berber-shop-ruby.vercel.app/",
        },
        {
          title: "Mini e-commerce",
          description: "Design elegante, performance otimizada e SEO (Visibilidade) para atrair clientes.",
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
      whatsappIntro: "Olá! Vim pelo site e gostaria de um orçamento para meu projeto.",
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
        { question: "Meu site irá aparecer no Google?", answer: "Sim. Aplicamos boas práticas de SEO (Visibilidade) para melhorar o posicionamento nos buscadores." },
        { question: "Quanto tempo leva para criar um site?", answer: "Em média, de 2 a 4 semanas, conforme escopo e integrações." },
        { question: "O site será otimizado para celulares?", answer: "Sim. Todos os projetos são responsivos e adaptados para diferentes telas." },
        { question: "Que informações preciso enviar para o meu site ser criado?", answer: "Precisamos de informações sobre sua empresa, objetivos, público-alvo, preferências de design e conteúdo que deseja incluir no site." },
        { question: "Vocês oferecem serviços de SEO (Visibilidade) para melhorar o posicionamento do meu site?", answer: "Sim. Aplicamos técnicas de SEO (Visibilidade) on-page, como otimização de palavras-chave, meta tags, estrutura de URL e desempenho do site para melhorar a visibilidade nos motores de busca." },
        {question: "Vocês criam todos os tipos de sites? ", answer: "Desenvolvemos a maioria dos tipos de sites, incluindo sites institucionais, lojas virtuais, portfólios, blogs, landing pages e muito mais. No entanto, não criamos sites que promovam pornografia, drogas ilegais, práticas religiosas enganosas, discurso de ódio, golpes ou qualquer atividade ilegal ou prejudicial. Nosso objetivo é desenvolver soluções digitais profissionais, éticas e alinhadas a valores que gerem impacto positivo para empresas e para a sociedade. "},
        {question : "Quais serviços adicionais vocês podem oferecer? ", answer: "Oferecemos serviços como criação de conteúdo, marketing digital, integração com redes sociais, criação de logotipo, papel timbrado, cartão digital, desenvolvimento de aplicativos e consultoria em estratégias online. Esses serviços podem ser contratados junto com o desenvolvimento do site ou como complementos para fortalecer sua presença digital e alcançar melhores resultados."},
        {question : "Posso ver projetos anteriores? ", answer: "Claro! Visite nossa seção de Portfólio para conferir alguns dos nossos trabalhos anteriores. Temos uma variedade de projetos que demonstram nossa experiência em criar sites personalizados, responsivos e otimizados para diferentes setores e necessidades. Se quiser ver mais exemplos ou tiver interesse em um tipo específico de projeto, entre em contato conosco para que possamos compartilhar mais detalhes."},
        {question : "Quais tipos de sites que vocês desenvolvem? ", answer: "Desenvolvemos a maioria dos tipos de sites, incluindo sites institucionais, lojas virtuais, portfólios, blogs, landing pages e muito mais."},
        {question : "Quais formas de pagamento vocês aceitam? ", answer: "Aceitamos diversas formas de pagamento, incluindo cartões de crédito, boletos bancários e transferências eletrônicas."},
        {question : "Há suporte após o lançamento? ", answer: "Sim. Oferecemos suporte contínuo e planos de manutenção para garantir que seu site permaneça atualizado e seguro."},
        {question : "Posso editar o conteúdo depois?", answer: "Sim. Fornecemos acesso a um painel de administração intuitivo, onde você pode atualizar textos, imagens e outros conteúdos do seu site de forma fácil e rápida."},
        {question : "Vocês oferecem serviços de SEO (Visibilidade)?", answer: "Sim. Aplicamos técnicas de SEO (Visibilidade) on-page, como otimização de palavras-chave, meta tags, estrutura de URL e desempenho do site para melhorar a visibilidade nos motores de busca."},
        {question : "Vocês criam sites para quais setores?", answer: "Criamos sites personalizados para uma ampla variedade de setores, incluindo comércio eletrônico, educação, saúde, tecnologia, serviços profissionais, entretenimento e muito mais. Nosso objetivo é desenvolver soluções digitais que atendam às necessidades específicas de cada setor e ajudem nossos clientes a alcançar seus objetivos de negócios."},
        {question : "Quais são os prazos para desenvolvimento?", answer: "O prazo para desenvolvimento de um site pode variar dependendo da complexidade do projeto, número de páginas, funcionalidades e integrações necessárias. Em média, o processo leva de 2 a 4 semanas, mas projetos mais simples podem ser concluídos em menos tempo, enquanto projetos mais complexos podem levar um pouco mais. Durante a fase de briefing, discutiremos o escopo do projeto e forneceremos uma estimativa de prazo mais precisa com base nas suas necessidades específicas."},
      ],
    },
    reviews: {
      badge: "resultados reais",
      title: "Resultados reais de clientes",
      description: "Veja o que empresas atendidas em Santa Catarina dizem depois de lançar um site com a gente.",
      summaryLabel: "Nota média dos clientes",
      countLabel: "Baseado em 32 avaliações",
      items: [
        { name: "Emma Parker", business: "Loja de roupas", text: "My website looks great and I started getting more WhatsApp messages from new clients." },
        { name: "Daniel Brooks", business: "Barbearia", text: "The service was fast and my business looks much more professional online now." },
        { name: "Sofia Bennett", business: "Clínica estética", text: "People find my business more easily and trust my brand much more now." },
      ],
    },
    localSeo: {
      badge: "criação de sites em Santa Catarina",
      title: "Criação de Sites para Empresas em Florianópolis, São José, Joinville e Balneário Camboriú",
      description: "Desenvolvemos sites profissionais com SEO local (Visibilidade), Google Business Profile e Google Maps para empresas que querem atrair mais clientes em Santa Catarina.",
      cityLabel: "Principais cidades atendidas",
      cities: ["Florianópolis", "São José", "Joinville", "Balneário Camboriú"],
      highlights: [
        { title: "Mais Clientes Para Seu Negócio", description: "Criamos sites pensados para gerar contatos, orçamentos e vendas. Foco total em resultados para empresas locais." },
        { title: "Apareça no Google e no Maps", description: "Integramos seu site com Google Business Profile e Google Maps para aumentar sua visibilidade e atrair clientes da sua região." },
        { title: "SEO Local (Visibilidade) em Santa Catarina", description: "Otimização completa para seu site aparecer nas buscas por “criação de sites” em Florianópolis, São José e toda a região." },
      ],
      mapTitle: "Cobertura local em Santa Catarina",
      mapDescription: "Atendimento para empresas que buscam criação de sites em Florianópolis, São José, Joinville e Balneário Camboriú.",
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
      serviceItems: ["Sites institucionais", "Landing pages", "E-commerce", "SEO (Visibilidade) & Performance", "Manutenção"],
      contact: "Contato",
      remoteSupport: "Brasil • Atendimento remoto",
      rights: "Todos os direitos reservados.",
      privacy: "Política de privacidade",
      terms: "Termos de uso",
    },
  },
  en: {
    nav: {
      brandName: "Sites Profissionai",
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
        pricing: "Pricing",
        contact: "Contact",
        blog: "Blog",
        portfolio: "Portfolio",
      },
    },
    home: {
      whatsappAria: "Chat on WhatsApp",
    },
    hero: {
      badge: "website design in Santa Catarina",
      title: "We build professional websites",
      titleHighlight: "to help your business attract more clients",
      description:
        "We create fast, responsive, Google-friendly websites that help businesses in Florianópolis, São José, Joinville, and Balneário Camboriú generate more leads and sales.",
      primaryCta: "Get my website",
      secondaryCta: "See examples",
      livePreviewTag: "see your website",
      livePreviewTitle: "See your website live",
      livePreviewDescription: "We give you a link to watch your website as we build it. You can check it anytime, from anywhere.",
      livePreviewStatus: "online",
      cards: [
        { label: "Get more customers online", value: "Your website sells while you sleep" },
        { label: "Works on phone and computer", value: "Optimized for every device" },
        { label: "Looks clean and professional", value: "Captivating visuals that hold attention" },
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
      title: "We make simple websites that help your business grow.",
      paragraphs: [
        "We build fast, clean, easy-to-use websites for your business.",
        "Your website helps more people find you on Google and contact you.",
        "We create a site that shows your work clearly and helps bring in more Clients.",
      ],
      pills: ["Easy to use", "More clients", "Fast website"],
    },
    services: {
      badge: "services",
      title: "What we do for your business",
      description: "We make simple solutions to help your business grow online.",
      items: [
        { title: "Business website", description: "A clean, professional website for your business." },
        { title: "Landing page", description: "A page made to help you get more messages and clients." },
        { title: "Online store", description: "A simple and safe shop to sell your products online." },
        { title: "Hosting and domain", description: "We help put your website online." },
        { title: "Fast website", description: "Your website loads fast and works well." },
        { title: "Support and updates", description: "We take care of your website after it goes live." },
        { title: "Google Business and Maps", description: "We connect your website to Google Business Profile and Google Maps for stronger local visibility." },
        { title: "Logo and branding", description: "We create your logo and brand look." },
      ],
    },
    pricing: {
      badge: "pricing",
      title: "Starting prices for services",
      description: "Here is a BRL price guide for the services clients request most often.",
      note: "All prices are in Brazilian Real (R$) and may vary from project to project depending on each client's needs. New clients can still qualify for 20% off the first project.",
      cta: "Request a quote",
      discountLabel: "off",
      optionalBadge: "optional",
      optionalSubtext: "add-on",
      items: [
        {
          title: "Landing page",
          description: "A conversion-focused page with WhatsApp and lead capture.",
          price: "R$ 749",
          discountPercent: 33,
          discountBadgeText: "R$ 250",
          discountedPrice: "R$ 499",
          features: [
            { label: "Responsive design", included: true },
            { label: "WhatsApp button", included: true },
            { label: "Lead capture", included: true },
            { label: "Basic SEO (Visibility)", included: true },
            { label: "Fast delivery", included: true },
            { label: "Order dashboard", included: false },
            { label: "Online checkout", included: false },
          ],
        },
        {
          title: "Business website",
          description: "A professional website to present your company and services.",
          price: "R$ 1500",
          features: [
            { label: "Up to 5 pages", included: true },
            { label: "Basic SEO (Visibility)", included: true },
            { label: "Contact form", included: true },
            { label: "WhatsApp integration", included: true },
            { label: "Professional layout", included: true },
            { label: "Client portal", included: false },
            { label: "Shopping cart", included: false },
          ],
        },
        {
          title: "Online store",
          description: "E-commerce with catalog, cart, and checkout flow.",
          price: "R$ 3500",
          features: [
            { label: "Product catalog", included: true },
            { label: "Cart and checkout", included: true },
            { label: "Online payments", included: true },
            { label: "Order management", included: true },
            { label: "Discount coupons", included: true },
            { label: "Native app", included: false },
            { label: "Advanced ERP", included: false },
          ],
        },
        {
          title: "Monthly support",
          description: "Updates, minor improvements, and ongoing support.",
          price: "R$ 300/month",
          features: [
            { label: "Monthly adjustments", included: true },
            { label: "Content updates", included: true },
            { label: "Technical support", included: true },
            { label: "Quick fixes", included: true },
            { label: "Ongoing follow-up", included: true },
            { label: "Full new website", included: false },
            { label: "Full redesign", included: false },
          ],
        },
      ],
    },
    projects: {
      badge: "projects",
      title: "Recent projects",
      descriptionBeforePortfolio: "Check out some of our work. See our",
      portfolioLink: "full portfolio",
      descriptionAfterPortfolio: ". Ready to launch your project?",
      contactLink: "Let's build something amazing together!",
      loadMore: "Load more projects",
      loading: "Loading...",
      noMore: "Check out our portfolio for more projects.",
      cardCta: "View project →",
      items: [
        {
          title: "Accounting firm website",
          description: "A professional website for an accounting firm with a premium look, clear service presentation, and a strong focus on trust, compliance, and financial advisory support.",
          image: "/images.web/accountant screenshoot.jpeg",
          link: "https://acc-busayo.vercel.app/",
        },
        {
          title: "Education platform",
          description: "Premium design, high performance, and SEO (Visibility) ready for conversion.",
          image: "/images.web/sch-img.jpeg",
          link: "https://rockstarstudyabroad.com/index.html",
        },
        {
          title: "Restaurant app",
          description: "Complete app for online orders, dynamic menu management, and admin operations.",
          image: "/images.web/resturant.jpeg",
          link: "https://resturant-templete.vercel.app/",
        },
        {
          title: " E-commerce",
          description: "Elegant design, optimized performance, and SEO (Visibility) to attract customers.",
          image: "/images.web/e-commerce.jpeg",
          link: "https://dotman-s-store-3eax.vercel.app/",
        },
        {
          title: "Budget Shopping App",
          description: "An intuitive shopping app to organize lists, track spending in real time, and keep every purchase within budget.",
          image: "/images.web/budget.jpeg",
          link: "https://budget-eight-bay.vercel.app/",
        },
        {
          title: "Barbershop",
          description: "Modern design, optimized performance, and SEO (Visibility) to attract local customers.",
          image: "/images.web/image_berber.jpeg",
          link: "https://berber-shop-ruby.vercel.app/",
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
      whatsappIntro: "Hi! I came from the website and would like a quote for my project.",
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
        { question: "Will my website appear on Google?", answer: "Yes. We apply SEO (Visibility) best practices to improve visibility." },
        { question: "How long does it take to build a website?", answer: "On average, 2 to 4 weeks depending on scope and integrations." },
        { question: "Will the site be mobile optimized?", answer: "Yes. All projects are responsive and optimized for all devices." },
        { question: "What information do I need to provide to create my website?", answer: "We need information about your company, goals, target audience, design preferences, and the content you want to include on your website." },
        { question: "Do you offer SEO (Visibility) services to improve my website's ranking?", answer: "Yes. We apply on-page SEO (Visibility) techniques such as keyword optimization, meta tags, URL structure, and website performance to improve visibility in search engines." },
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
    reviews: {
      badge: "real results",
      title: "Real client results",
      description: "See what business owners say after launching a high-converting website with us.",
      summaryLabel: "Average client rating",
      countLabel: "Based on 32 reviews",
      items: [
        { name: "Emma Parker", business: "Fashion store", text: "My website looks great and I started getting more WhatsApp messages from new clients." },
        { name: "Daniel Brooks", business: "Barbershop", text: "The service was fast and my business looks much more professional online now." },
        { name: "Sofia Bennett", business: "Beauty clinic", text: "People find my business more easily and trust my brand much more now." },
      ],
    },
    localSeo: {
      badge: "website design in Santa Catarina",
      title: "Website Design for Businesses in Florianópolis, São José, Joinville, and Balneário Camboriú",
      description: "We create SEO (Visibility)-focused websites with Google Business Profile and Google Maps integration to help businesses attract more local customers across Santa Catarina.",
      cityLabel: "Main cities served",
      cities: ["Florianópolis", "São José", "Joinville", "Balneário Camboriú"],
      highlights: [
        { title: "More Customers for Your Business", description: "We create websites designed to generate leads, quote requests, and sales. Total focus on results for local businesses." },
        { title: "Show Up on Google and Maps", description: "We integrate your website with Google Business Profile and Google Maps to increase your visibility and attract customers from your area." },
        { title: "Local SEO (Visibility) in Santa Catarina", description: "Complete optimization to help your website appear in searches for “website design” and “site creation” in Florianópolis, São José, and across the region." },
      ],
      mapTitle: "Local coverage in Santa Catarina",
      mapDescription: "Digital presence for businesses looking for website design in Florianópolis, São José, Joinville, and Balneário Camboriú.",
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
      serviceItems: ["Business websites", "Landing pages", "E-commerce", "SEO (Visibility) & Performance", "Maintenance"],
      contact: "Contact",
      remoteSupport: "Brazil • Remote support",
      rights: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of use",
    },
  },
  es: {
    nav: {
      brandName: "Sites Profissionai",
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
        pricing: "Precios",
        contact: "Contacto",
        blog: "Blog",
        portfolio: "Portafolio",
      },
    },
    home: {
      whatsappAria: "Hablar por WhatsApp",
    },
    hero: {
      badge: "creación de sitios web en Santa Catarina",
      title: "Creamos sitios web profesionales",
      titleHighlight: "para atraer más clientes a tu negocio",
      description:
        "Desarrollamos sitios rápidos, responsivos y optimizados para Google, ayudando a empresas de Florianópolis, São José, Joinville y Balneário Camboriú a generar más contactos y ventas.",
      primaryCta: "Quiero mi sitio",
      secondaryCta: "Ver ejemplos",
      livePreviewTag: "mira tu sitio",
      livePreviewTitle: "Mira tu sitio en vivo",
      livePreviewDescription: "Te damos un enlace para ver tu sitio mientras lo estamos creando. Puedes revisarlo en cualquier momento y desde cualquier lugar.",
      livePreviewStatus: "online",
      cards: [
        { label: "Más clientes en internet", value: "Tu sitio trabaja por ti" },
        { label: "Funciona en celular y computadora", value: "Se ve bien en cualquier pantalla" },
        { label: "Se ve limpio y profesional", value: "Da confianza a tus clientes" },
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
      title: "Creamos sitios simples que ayudan a tu negocio a crecer.",
      paragraphs: [
        "Hacemos sitios rápidos, bonitos y fáciles de usar para tu negocio.",
        "Tu sitio ayuda a más personas a encontrarte en Google y escribirte.",
        "Creamos un sitio a tu medida para mostrar tu trabajo y traer más clientes.",
      ],
      pills: ["Fácil de usar", "Más clientes", "Sitio rápido"],
    },
    services: {
      badge: "servicios",
      title: "Lo que hacemos por tu negocio",
      description: "Creamos soluciones simples para ayudar a tu empresa a crecer en internet.",
      items: [
        { title: "Sitio para negocio", description: "Un sitio limpio y profesional para mostrar tu empresa." },
        { title: "Landing page", description: "Una página hecha para recibir más mensajes y clientes." },
        { title: "Tienda online", description: "Una tienda simple y segura para vender tus productos." },
        { title: "Hosting y dominio", description: "Te ayudamos a poner tu sitio en internet." },
        { title: "Sitio rápido", description: "Tu sitio carga rápido y funciona bien." },
        { title: "Soporte y mantenimiento", description: "Cuidamos tu sitio después de publicarlo." },
        { title: "Google Business y Maps", description: "Conectamos tu sitio con Google Business Profile y Google Maps para mejorar la visibilidad local." },
        { title: "Logo y marca", description: "Creamos tu logo y la imagen de tu marca." },
      ],
    },
    pricing: {
      badge: "precios",
      title: "Precios iniciales de los servicios",
      description: "Consulta una guía de inversión en real brasileño para los servicios más solicitados.",
      note: "Todos los valores están en real brasileño (R$) y pueden variar de un proyecto a otro según las necesidades de cada cliente. Los nuevos clientes aún pueden recibir 20% de descuento en el primer proyecto.",
      cta: "Solicitar presupuesto",
      discountLabel: "dto.",
      optionalBadge: "opcional",
      optionalSubtext: "extra",
      items: [
        {
          title: "Landing page",
          description: "Página enfocada en conversión, WhatsApp y captación de leads.",
          price: "R$ 749",
          discountPercent: 33,
          discountBadgeText: "R$ 250",
          discountedPrice: "R$ 499",
          features: [
            { label: "Diseño responsivo", included: true },
            { label: "Botón de WhatsApp", included: true },
            { label: "Captación de leads", included: true },
            { label: "SEO básico (Visibilidad)", included: true },
            { label: "Entrega rápida", included: true },
            { label: "Panel de pedidos", included: false },
            { label: "Checkout online", included: false },
          ],
        },
        {
          title: "Sitio institucional",
          description: "Sitio profesional para presentar tu empresa y servicios.",
          price: "R$ 1.500",
          features: [
            { label: "Hasta 5 páginas", included: true },
            { label: "SEO básico (Visibilidad)", included: true },
            { label: "Formulario de contacto", included: true },
            { label: "Integración con WhatsApp", included: true },
            { label: "Diseño profesional", included: true },
            { label: "Área de cliente", included: false },
            { label: "Carrito de compras", included: false },
          ],
        },
        {
          title: "Tienda online",
          description: "E-commerce con catálogo, carrito y finalización de pedido.",
          price: "R$ 3.500",
          features: [
            { label: "Catálogo de productos", included: true },
            { label: "Carrito y checkout", included: true },
            { label: "Pagos online", included: true },
            { label: "Gestión de pedidos", included: true },
            { label: "Cupones de descuento", included: true },
            { label: "App nativa", included: false },
            { label: "ERP avanzado", included: false },
          ],
        },
        {
          title: "Soporte mensual",
          description: "Actualizaciones, ajustes menores y acompañamiento continuo.",
          price: "R$ 300/mes",
          features: [
            { label: "Ajustes mensuales", included: true },
            { label: "Actualización de contenido", included: true },
            { label: "Soporte técnico", included: true },
            { label: "Correcciones rápidas", included: true },
            { label: "Acompañamiento continuo", included: true },
            { label: "Nuevo sitio completo", included: false },
            { label: "Rediseño total", included: false },
          ],
        },
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
          title: "Sitio web para firma contable",
          description: "Sitio profesional para una firma contable, con imagen premium, presentación clara de servicios y enfoque en confianza, cumplimiento y asesoría financiera.",
          image: "/images.web/accountant screenshoot.jpeg",
          link: "https://acc-busayo.vercel.app/",
        },
        {
          title: "Plataforma educativa",
          description: "Diseño premium, alto rendimiento y SEO (Visibilidad) listo para conversión.",
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
          description: "Diseño moderno, rendimiento optimizado y SEO (Visibilidad) para atraer clientes locales.",
          image: "/images.web/image_berber.jpeg",
          link: "https://berber-shop-ruby.vercel.app/",
        },
        {
          title: "Mini e-commerce",
          description: "Diseño elegante, rendimiento optimizado y SEO (Visibilidad) para atraer clientes.",
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
      whatsappIntro: "¡Hola! Vengo del sitio web y me gustaría solicitar un presupuesto para mi proyecto.",
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
        { question: "¿Mi sitio aparecerá en Google?", answer: "Sí. Aplicamos buenas prácticas de SEO (Visibilidad) para mejorar visibilidad." },
        { question: "¿Cuánto tiempo tarda crear un sitio?", answer: "En promedio, de 2 a 4 semanas, según alcance e integraciones." },
        { question: "¿El sitio estará optimizado para móviles?", answer: "Sí. Todos los proyectos son responsivos para cualquier dispositivo." },
        { question: "¿Qué información necesito proporcionar para crear mi sitio web?", answer: "Necesitamos información sobre su empresa, objetivos, público objetivo, preferencias de diseño y contenido que desea incluir en el sitio web." },
        { question: "¿Ofrecen servicios de SEO (Visibilidad) para mejorar el posicionamiento de mi sitio web?", answer: "Sí. Aplicamos técnicas de SEO (Visibilidad) on-page, como optimización de palabras clave, meta tags, estructura de URL y rendimiento del sitio para mejorar la visibilidad en los motores de búsqueda." },
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
    reviews: {
      badge: "resultados reales",
      title: "Resultados reales de clientes",
      description: "Mira lo que dicen los negocios después de lanzar su sitio con nosotros.",
      summaryLabel: "Nota media de clientes",
      countLabel: "Basado en 32 reseñas",
      items: [
        { name: "Emma Parker", business: "Tienda de ropa", text: "My website looks great and I started getting more WhatsApp messages from new clients." },
        { name: "Daniel Brooks", business: "Barbería", text: "The service was fast and my business looks much more professional online now." },
        { name: "Sofia Bennett", business: "Clínica estética", text: "People find my business more easily and trust my brand much more now." },
      ],
    },
    localSeo: {
      badge: "creación de sitios web en Santa Catarina",
      title: "Creación de Sitios Web para Empresas en Florianópolis, São José, Joinville y Balneário Camboriú",
      description: "Creamos sitios web optimizados para SEO local (Visibilidad), con integración con Google Business Profile y Google Maps, para ayudar a las empresas a atraer más clientes en Santa Catarina.",
      cityLabel: "Principales ciudades atendidas",
      cities: ["Florianópolis", "São José", "Joinville", "Balneário Camboriú"],
      highlights: [
        { title: "Más Clientes para Tu Negocio", description: "Creamos sitios pensados para generar contactos, presupuestos y ventas. Enfoque total en resultados para negocios locales." },
        { title: "Aparece en Google y en Maps", description: "Integramos tu sitio con Google Business Profile y Google Maps para aumentar tu visibilidad y atraer clientes de tu zona." },
        { title: "SEO Local (Visibilidad) en Santa Catarina", description: "Optimización completa para que tu sitio aparezca en búsquedas de “creación de sitios web” en Florianópolis, São José y toda la región." },
      ],
      mapTitle: "Cobertura local en Santa Catarina",
      mapDescription: "Presencia digital para empresas que buscan creación de sitios web en Florianópolis, São José, Joinville y Balneário Camboriú.",
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
      serviceItems: ["Sitios corporativos", "Landing pages", "E-commerce", "SEO (Visibilidad) y rendimiento", "Mantenimiento"],
      contact: "Contacto",
      remoteSupport: "Brasil • Atención remota",
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad",
      terms: "Términos de uso",
    },
  },
}

const LOCALE_STORAGE_KEY = "site-locale-preference"

const isSupportedLocale = (value: string | null): value is Locale => {
  return value === "pt" || value === "en" || value === "es"
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

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "pt"

  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)

    if (isSupportedLocale(storedLocale)) {
      return storedLocale
    }
  } catch {
    return getDeviceLanguage()
  }

  return getDeviceLanguage()
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("pt")
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setLocaleState(getInitialLocale())
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (!isHydrated) return

    const htmlLang = locale === "pt" ? "pt-BR" : locale
    document.documentElement.lang = htmlLang
  }, [locale, isHydrated])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    } catch {
      // Ignore storage errors and keep the in-memory locale.
    }
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
