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
    subtitle: string
    highlights: string[]
    secondaryDescription: string
    bottomTitle: string
    bottomText: string
    popularBadge: string
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
      popular?: boolean
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
    items: Array<{
      title: string
      description: string
      image: string
      link: string
      recent?: boolean
    }>
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
    items: Array<{ question: string; answer: string; answerLink?: { href: string; label: string } }>
  }
  reviews: {
    badge: string
    title: string
    description: string
    summaryLabel: string
    countLabel: string
    sourceLabel: string
    previousLabel: string
    nextLabel: string
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
    cnpj: string
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
      badge: "Prazer em te conhecer",
      title: "Design e desenvolvimento de websites com mais de 6 anos de experiência",
      paragraphs: [
        "Sou Ese Victor, designer e desenvolvedor web com mais de seis anos criando sites rápidos, bonitos e fáceis de usar para empresas em Santa Catarina.",
        "Desde uma landing page simples até um site institucional profissional ou loja virtual, ajudo empresas de Florianópolis, São José, Joinville e Balneário Camboriú a atrair mais clientes e vender mais.",
        "Meu foco é design limpo, SEO local e performance rápida para que seu site carregue bem e converta visitantes em clientes.",
      ],
      pills: ["Portfólio", "Avaliações do Google"],
    },
    services: {
      badge: "serviços",
      title: "O que fazemos para o seu negócio",
      description: "Criamos soluções simples para ajudar sua empresa a crescer online. Cada projeto é pensado para sua marca, com design responsivo, SEO local e foco em resultados práticos para atrair clientes.",
      items: [
        { title: "Site para empresa", description: "Um site bonito e profissional para mostrar seu negócio e conquistar clientes com clareza e confiança." },
        { title: "Landing page", description: "Uma página feita para receber mais mensagens e clientes, com foco em conversão e oferta clara." },
        { title: "Loja online", description: "Vendemos seus produtos com uma loja simples e segura, organizada para facilitar compras e destacar seu catálogo." },
        { title: "Hospedagem e domínio", description: "Ajudamos você a colocar seu site no ar, registrando domínios e configurando hospedagem estável." },
        { title: "Site rápido", description: "Seu site abre rápido e funciona bem em qualquer dispositivo, com performance otimizada para melhor experiência." },
        { title: "Suporte e manutenção", description: "Cuidamos do seu site depois que ele estiver pronto, com atualizações, correções e melhorias contínuas." },
        { title: "Google Business e Maps", description: "Integramos seu site ao Perfil da Empresa no Google e ao Google Maps para atrair clientes locais e aparecer nas buscas." },
        { title: "Logo e marca", description: "Criamos sua logo e a imagem da sua marca com identidade visual coerente para fortalecer sua presença." },
      ],
    },
    pricing: {
      badge: "preços",
      title: "Valores iniciais para serviços",
      description: "Veja valores iniciais e opções de pacote que ajudam empresas locais a vender, agendar e crescer online.",
      subtitle: "Escolha o plano certo para sua presença digital com transparência e resultados.",
      highlights: [
        "Entrega rápida e segura",
        "WhatsApp integrado e formulário de contato",
        "Design pensado para conversão local",
      ],
      secondaryDescription: "Cada projeto inclui conteúdo otimizado, atenção ao SEO local e suporte inicial direto com nossa equipe.",
      bottomTitle: "Quer um plano sob medida?",
      bottomText: "Fale no WhatsApp e receba um orçamento personalizado com prazo, escopo e suporte claro desde o primeiro contato.",
      popularBadge: "Mais popular",
      note: "Valores em BRL (R$) e podem variar de projeto para projeto, conforme as necessidades de cada cliente. O suporte mensal é cobrado separadamente, com orçamento personalizado para cada necessidade.",
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
          price: "",
          popular: true,
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
          price: "",
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
          description: "Suporte contínuo para seu site e ajustes conforme sua empresa cresce, cobrados por demanda.",
          price: "",
          features: [
            { label: "Ajustes mensais", included: true },
            { label: "Atualização de conteúdo", included: true },
            { label: "Suporte técnico", included: true },
            { label: "Correções rápidas", included: true },
            { label: "Monitoramento de performance", included: true },
            { label: "Segurança e backup", included: true },
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
      loadMore: "Ver mais",
      loading: "Carregando...",
      noMore: "Confira nosso portfólio para ver mais projetos.",
      cardCta: "Ver projeto →",
      items: [
        {
          title: "Multi Vendo E-commerce",
          description: "A multi vendo website where shops can upload  products for sale",
          image: "/images.web/deliver-app.png",
          link: "https://petman.store/",
          recent: true,
        },
        {
          title: "Site para restaurante",
          description: "Site moderno para restaurante, com cardápio bonito, layout elegante e informações essenciais para clientes conhecerem o espaço e entrarem em contato.",
          image: "/images.web/resturante.png",
          link: "https://darkgoldenrod-toad-190001.hostingersite.com/",
          recent: true,
        },
        {
          title: "Site para fotografia",
          description: "Site elegante para fotógrafo, com portfólio visual, apresentação de serviços e contato rápido para transformar visitantes em novos clientes.",
          image: "/images.web/photographer-website.jpeg",
          link: "https://soulacephotography.com/",
          recent: true,
        },
        
        {
          title: "Portfólio profissional",
          description: "Portfólio moderno e responsivo para apresentar serviços, projetos e informações de contato com visual claro, elegante e focado em gerar confiança.",
          image: "/images.web/portfiolo.jpeg",
          link: "https://ese-faps-xbvb.vercel.app/",
          recent: true,
        },
      
        {
          title: "Real Park Sapateria e Costureira",
          description: "Consertos, ajustes e serviços rápidos em um só lugar. Sapataria, costura, foto 3x4, chaveiro e xerox com atendimento prático para o seu dia a dia.",
          image: "/images.web/sapaterio-screenhot.jpeg",
          link: "https://www.sapatariarealpark.com.br/",
          recent: true,
        },
         {
          title: "Site para Carpinteiro",
          description: "Site profissional para carpinteiro, apresentando serviços de marcenaria, portfólio de trabalhos e contato direto.",
          image: "/images.web/carpenter.jpeg",
          link: "https://carpenter-friend.vercel.app/",
        },
        {
          title: "Site para escritório de contabilidade",
          description: "Site profissional para uma firma de contabilidade, com visual premium, apresentação clara dos serviços e foco em confiança, compliance e consultoria financeira.",
          image: "/images.web/accountant screenshoot.jpeg",
          link: "https://busayo-acct.vercel.app/",
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
          recent: true,
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
        {
          title: "Fantastic Hair",
          description: "Loja online de perucas e extensões com identidade premium, vendas via WhatsApp e imagem elegante.",
          image: "/images.web/cabelo screenshot.jpeg",
          link: "https://fantastichair.com.br/",
          recent: true,
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
      description: "Respostas claras para as dúvidas mais comuns sobre criação de sites, prazos, suporte, SEO (Visibilidade), domínio, hospedagem e tudo o que você precisa saber antes de começar seu projeto.",
      items: [
        { question: "A hospedagem está inclusa no valor?", answer: "Não. A hospedagem é cobrada à parte porque cada projeto pode precisar de recursos diferentes. Mesmo assim, orientamos você na escolha da melhor opção, ajudamos na configuração e oferecemos condições especiais para clientes que fazem o site conosco." },
        { question: "Vocês oferecem suporte após o lançamento?", answer: "Sim. Depois que o site vai ao ar, podemos cuidar de atualizações, pequenos ajustes, correções, monitoramento e melhorias contínuas. Assim, seu site continua seguro, rápido e alinhado ao crescimento da sua empresa." },
        { question: "Vocês criam sites personalizados ou usam templates?", answer: "Criamos sites personalizados de acordo com o objetivo, identidade e público do seu negócio. Podemos usar referências visuais para acelerar decisões, mas o layout, conteúdo e estrutura são pensados para a sua marca." },
        { question: "Meu site irá aparecer no Google?", answer: "Sim. Construímos o site com boas práticas de SEO (Visibilidade), incluindo estrutura organizada, títulos, descrições, performance e conteúdo pensado para buscas. O resultado depende também da concorrência e da continuidade da estratégia, mas o site já nasce preparado para ser encontrado." },
        { question: "Quanto tempo leva para criar um site?", answer: "Em média, de 5 dias a 4 semanas, conforme o número de páginas, conteúdo, revisões e integrações necessárias. Projetos menores podem sair mais rápido, enquanto lojas virtuais ou sistemas com funcionalidades específicas podem exigir mais tempo." },
        { question: "O site será otimizado para celulares?", answer: "Sim. Todos os projetos são responsivos e pensados para funcionar bem em celulares, tablets e computadores. Também cuidamos de botões, formulários, leitura e velocidade para que o visitante consiga entrar em contato sem dificuldade." },
        { question: "Que informações preciso enviar para o meu site ser criado?", answer: "Precisamos de informações sobre sua empresa, objetivos, público-alvo, preferências de design e conteúdo que deseja incluir no site." },
        { question: "Vocês oferecem serviços de SEO (Visibilidade) para melhorar o posicionamento do meu site?", answer: "Sim. Aplicamos técnicas de SEO (Visibilidade) on-page, como otimização de palavras-chave, meta tags, estrutura de URL e desempenho do site para melhorar a visibilidade nos motores de busca." },
        {question: "Vocês criam todos os tipos de sites? ", answer: "Desenvolvemos a maioria dos tipos de sites, incluindo sites institucionais, lojas virtuais, portfólios, blogs, landing pages e muito mais. No entanto, não criamos sites que promovam pornografia, drogas ilegais, práticas religiosas enganosas, discurso de ódio, golpes ou qualquer atividade ilegal ou prejudicial. Nosso objetivo é desenvolver soluções digitais profissionais, éticas e alinhadas a valores que gerem impacto positivo para empresas e para a sociedade. "},
        {question : "Quais serviços adicionais vocês podem oferecer? ", answer: "Oferecemos serviços como criação de conteúdo, marketing digital, integração com redes sociais, criação de logotipo, papel timbrado, cartão digital, desenvolvimento de aplicativos e consultoria em estratégias online. Esses serviços podem ser contratados junto com o desenvolvimento do site ou como complementos para fortalecer sua presença digital e alcançar melhores resultados."},
        {question : "Posso ver projetos anteriores? ", answer: "Claro! Visite nossa seção de Portfólio para conferir alguns dos nossos trabalhos anteriores. Temos uma variedade de projetos que demonstram nossa experiência em criar sites personalizados, responsivos e otimizados para diferentes setores e necessidades. Se quiser ver mais exemplos ou tiver interesse em um tipo específico de projeto, entre em contato conosco para que possamos compartilhar mais detalhes.", answerLink: { href: "/#projects", label: "Ver seção de projetos" }},
        {question : "Quais tipos de sites que vocês desenvolvem? ", answer: "Desenvolvemos a maioria dos tipos de sites, incluindo sites institucionais, lojas virtuais, portfólios, blogs, landing pages e muito mais."},
        {question : "Quais formas de pagamento vocês aceitam? ", answer: "Aceitamos Pix, cartão de crédito, boleto bancário e transferência eletrônica. Também podemos parcelar no cartão em um número combinado de vezes sem juros, dependendo do valor do projeto e das condições definidas na proposta."},
        {question : "Há suporte após o lançamento? ", answer: "Sim. Oferecemos suporte contínuo e planos de manutenção para garantir que seu site permaneça atualizado e seguro."},
        {question : "Posso editar o conteúdo depois?", answer: "Sim. Fornecemos acesso a um painel de administração intuitivo, onde você pode atualizar textos, imagens e outros conteúdos do seu site de forma fácil e rápida."},
        {question : "Vocês oferecem serviços de SEO (Visibilidade)?", answer: "Sim. Aplicamos técnicas de SEO (Visibilidade) on-page, como otimização de palavras-chave, meta tags, estrutura de URL e desempenho do site para melhorar a visibilidade nos motores de busca."},
        {question : "Vocês criam sites para quais setores?", answer: "Criamos sites personalizados para uma ampla variedade de setores, incluindo comércio eletrônico, educação, saúde, tecnologia, serviços profissionais, entretenimento e muito mais. Nosso objetivo é desenvolver soluções digitais que atendam às necessidades específicas de cada setor e ajudem nossos clientes a alcançar seus objetivos de negócios."},
        {question : "Quais são os prazos para desenvolvimento?", answer: "O prazo para desenvolvimento de um site pode variar dependendo da complexidade do projeto, número de páginas, funcionalidades e integrações necessárias. Em média, o processo leva de 5 dias a 4 semanas, mas projetos mais simples podem ser concluídos em menos tempo, enquanto projetos mais complexos podem levar um pouco mais. Durante a fase de briefing, discutiremos o escopo do projeto e forneceremos uma estimativa de prazo mais precisa com base nas suas necessidades específicas."},
        { question: "Vocês ajudam com domínio e e-mail profissional?", answer: "Sim. Podemos orientar no registro do domínio, configuração de DNS, conexão com a hospedagem e criação de e-mail profissional. Se você já tiver domínio, analisamos o acesso atual e fazemos a conexão com segurança." },
        { question: "Preciso ter textos e imagens prontos antes de começar?", answer: "Não obrigatoriamente. Se você já tiver fotos, logo e textos, usamos esse material como base. Se ainda não tiver, podemos ajudar a organizar as informações, sugerir estrutura de conteúdo e criar textos mais claros para apresentar seus serviços." },
        { question: "Vocês fazem loja virtual com pagamento online?", answer: "Sim. Criamos lojas virtuais com catálogo, carrinho, checkout e integração com meios de pagamento, quando o projeto exige. Durante o briefing, definimos produtos, frete, formas de pagamento, páginas legais e o fluxo ideal para seus clientes comprarem com confiança." },
        { question: "O que acontece depois que eu aprovo o orçamento?", answer: "Após a aprovação, alinhamos o escopo, coletamos materiais, definimos a estrutura das páginas e iniciamos o design. Você acompanha as etapas, envia feedback e aprova antes do lançamento para garantir que o site esteja fiel à sua marca e aos seus objetivos." },
        { question: "Quantas revisões posso solicitar?", answer: "O número de revisões depende do pacote e do escopo aprovado. Normalmente incluímos rodadas de ajustes para revisar textos, imagens, seções e detalhes visuais antes do lançamento, garantindo que o resultado final esteja alinhado com o que foi combinado." },
        { question: "O valor pode mudar durante o projeto?", answer: "O valor aprovado permanece o mesmo para o escopo combinado. Só haverá alteração se você solicitar novas páginas, funcionalidades extras, integrações adicionais ou mudanças grandes fora do planejamento inicial. Nesse caso, avisamos antes e enviamos um novo orçamento para aprovação." },
        { question: "O site será meu depois de pronto?", answer: "Sim. Depois da entrega e do pagamento combinado, o site pertence ao cliente. Também orientamos sobre acessos importantes, domínio, hospedagem e administração para que você tenha controle sobre sua presença digital." },
        { question: "Vocês integram o site com WhatsApp, redes sociais e ferramentas externas?", answer: "Sim. Podemos integrar WhatsApp, Instagram, Facebook, Google Maps, formulários, ferramentas de análise, pixels de anúncios e outras plataformas conforme a necessidade do projeto. Essas integrações ajudam a transformar visitantes em contatos e clientes." },
        { question: "Como faço para começar?", answer: "O primeiro passo é entrar em contato pelo WhatsApp ou formulário. Vamos entender seu negócio, objetivos, tipo de site desejado, prazo e orçamento. Depois disso, enviamos uma proposta clara com escopo, etapas e próximos passos." },
        { question: "Preciso pagar tudo antes do projeto começar?", answer: "Não necessariamente. A forma de pagamento é combinada na proposta. Em muitos casos, trabalhamos com uma entrada para iniciar o projeto e o restante dividido conforme as etapas ou entregue próximo ao lançamento." },
        { question: "Vocês fazem reuniões durante o projeto?", answer: "Sim. Podemos alinhar por WhatsApp, chamada de vídeo ou mensagens, conforme for mais prático para você. O objetivo é tirar dúvidas, confirmar decisões importantes e manter o projeto avançando com clareza." },
        { question: "Meu site terá certificado de segurança SSL?", answer: "Sim. Configuramos o site para usar HTTPS/SSL quando a hospedagem oferece esse recurso. Isso ajuda a proteger a navegação, melhora a confiança do visitante e é importante para boas práticas de SEO (Visibilidade)." },
        { question: "Vocês ajudam a melhorar um site que já existe?", answer: "Sim. Podemos avaliar seu site atual e sugerir melhorias de design, velocidade, conteúdo, SEO (Visibilidade), responsividade e conversão. Dependendo do estado do projeto, podemos ajustar o site existente ou recomendar uma nova versão." },
        { question: "Posso contratar apenas uma landing page?", answer: "Sim. A landing page é uma boa opção quando você precisa divulgar um serviço, campanha, produto ou oferta específica. Ela pode ter foco em WhatsApp, formulário, captação de leads, tráfego pago ou conversão local." },
      ],
    },
    reviews: {
      badge: "resultados reais",
      title: "Resultados reais de clientes",
      description: "Veja o que empresas atendidas em Santa Catarina dizem depois de lançar um site com a gente.",
      summaryLabel: "Nota média dos clientes",
      countLabel: "Baseado em 42 avaliações do Google",
      sourceLabel: "Avaliações do Google",
      previousLabel: "Avaliação anterior",
      nextLabel: "Próxima avaliação",
      items: [
        { name: "Emma Parker", business: "Loja de roupas", text: "My website looks great and I started getting more WhatsApp messages from new clients." },
        { name: "Daniel Brooks", business: "Barbearia", text: "The service was fast and my business looks much more professional online now." },
        { name: "Sofia Bennett", business: "Clínica estética", text: "People find my business more easily and trust my brand much more now." },
        { name: "Mariana Souza", business: "Salão de beleza", text: "O site ficou elegante, rápido e muito fácil para minhas clientes agendarem pelo WhatsApp." },
        { name: "Carlos Mendes", business: "Restaurante", text: "Depois do novo site, ficou muito mais simples mostrar o cardápio e receber pedidos de novos clientes." },
        { name: "Ana Ribeiro", business: "Consultoria", text: "A apresentação da minha empresa ficou mais profissional e os contatos pelo formulário aumentaram." },
        { name: "Bruno Almeida", business: "Sapataria", text: "Gostei muito da organização do projeto. O site mostra meus serviços com clareza e passa confiança." },
        { name: "Juliana Costa", business: "Loja online", text: "Minha loja ficou bonita no celular e meus clientes conseguem encontrar os produtos sem dificuldade." },
        { name: "Rafael Martins", business: "Marcenaria", text: "O portfólio dos meus trabalhos ficou excelente e agora envio o link para todos os novos orçamentos." },
        { name: "Patricia Gomes", business: "Clínica de saúde", text: "O site ficou limpo, rápido e transmite exatamente a seriedade que eu precisava para a clínica." },
        { name: "Lucas Ferreira", business: "Fotografia", text: "As fotos ganharam destaque e o site carrega muito bem. Ficou perfeito para apresentar meu trabalho." },
        { name: "Camila Rocha", business: "Educação", text: "Conseguimos explicar melhor nossos cursos e recebemos mensagens mais qualificadas depois do lançamento." },
        { name: "Thiago Oliveira", business: "Serviços locais", text: "Atendimento claro, entrega rápida e um site que realmente ajuda os clientes a entenderem o que oferecemos." },
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
      cnpj: "CNPJ: 45.041.116/0001-07",
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
      badge: "Nice to meet you",
      title: "Experienced website design and development built on 6+ years of results",
      paragraphs: [
        "I’m Ese Victor, a web designer and developer with over six years of experience creating fast, beautiful, and easy-to-use websites for businesses in Santa Catarina.",
        "From a simple landing page to a professional business website or online store, I create sites that help companies in Florianópolis, São José, Joinville, and Balneário Camboriú attract more clients and close more sales.",
        "My focus is clean design, local SEO, and fast performance so your website looks great, loads quickly, and converts visitors into customers.",
      ],
      pills: ["Portfolio", "Google reviews"],
    },
    services: {
      badge: "services",
      title: "What we do for your business",
      description: "We make simple solutions to help your business grow online. Every project is tailored to your brand with responsive design, local SEO, and a focus on converting visitors into customers.",
      items: [
        { title: "Business website", description: "A clean, professional website for your business that builds credibility and helps you stand out online." },
        { title: "Landing page", description: "A page made to help you get more messages and clients, designed for clear offers and fast lead capture." },
        { title: "Online store", description: "A simple and safe shop to sell your products online, with a user-friendly catalog and checkout flow." },
        { title: "Hosting and domain", description: "We help put your website online by setting up reliable hosting and registering your domain." },
        { title: "Fast website", description: "Your website loads fast and works well on every device, with performance tuned for better engagement." },
        { title: "Support and updates", description: "We take care of your website after it goes live with updates, fixes, and ongoing improvements." },
        { title: "Google Business and Maps", description: "We connect your website to Google Business Profile and Google Maps to improve local visibility and search presence." },
        { title: "Logo and branding", description: "We create your logo and brand look with a consistent identity that helps your business feel professional." },
      ],
    },
    pricing: {
      badge: "pricing",
      title: "Starting prices for services",
      description: "Explore starting prices and package options designed to help local businesses sell, book, and grow online.",
      subtitle: "Pick the right web package for a polished online presence that attracts customers.",
      highlights: [
        "Fast delivery with clear scope",
        "WhatsApp and lead capture ready",
        "Design built to convert visitors",
      ],
      secondaryDescription: "Every package includes mobile-first design, starter SEO, and a smooth handoff so your site launches with confidence.",
      bottomTitle: "Need a custom plan?",
      bottomText: "Message us on WhatsApp to get a personalized quote with timelines, goals, and direct support from our team.",
      popularBadge: "Most popular",
      note: "All prices are in Brazilian Real (R$) and may vary from project to project depending on each client's needs. Monthly support is priced separately and quoted individually.",
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
          price: "",
          popular: true,
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
          price: "",
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
          description: "Ongoing site care and updates priced per request, so your plan grows with your business.",
          price: "",
          features: [
            { label: "Monthly adjustments", included: true },
            { label: "Content updates", included: true },
            { label: "Technical support", included: true },
            { label: "Quick fixes", included: true },
            { label: "Performance monitoring", included: true },
            { label: "Security and backups", included: true },
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
      loadMore: "See more",
      loading: "Loading...",
      noMore: "Check out our portfolio for more projects.",
      cardCta: "View project →",
      items: [
        {
          title: "Multi Vendo E-commerce",
          description: "A Multi Vendo website where shops can upload products for sale.",
          image: "/images.web/deliver-app.png",
          link: "https://petman.store/",
          recent: true,
        },
        {
          title: "Photography website",
          description: "An elegant website for a photographer, with a visual portfolio, service presentation, and fast contact flow to turn visitors into new clients.",
          image: "/images.web/photographer-website.jpeg",
          link: "https://soulacephotography.com/",
          recent: true,
        },
        {
          title: "Restaurant website",
          description: "A modern restaurant website with a beautiful menu layout, polished presentation, and clear restaurant information for visitors.",
          image: "/images.web/resturante.png",
          link: "https://darkgoldenrod-toad-190001.hostingersite.com/",
          recent: true,
        },
        {
          title: "Professional portfolio",
          description: "A modern responsive portfolio for presenting services, projects, and contact information with a clean, elegant design built to create trust.",
          image: "/images.web/portfiolo.jpeg",
          link: "https://ese-faps-xbvb.vercel.app/",
          recent: true,
        },
       
         {
          title: "Carpenter Website",
          description: "Professional website for a carpenter, showcasing woodworking services, project portfolio, and direct contact.",
          image: "/images.web/carpenter.jpeg",
          link: "https://carpenter-friend.vercel.app/",
        },
        {
          title: "Accounting firm website",
          description: "A professional website for an accounting firm with a premium look, clear service presentation, and a strong focus on trust, compliance, and financial advisory support.",
          image: "/images.web/accountant screenshoot.jpeg",
          link: "https://busayo-acct.vercel.app/",
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
          link: "#",
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
          title: "Real Park Sapateria e Costureira",
          description: "Quick shoe repair, sewing, 3x4 photos, key cutting and Xerox with practical service for your daily needs.",
          image: "/images.web/sapaterio-screenhot.jpeg",
          link: "https://www.sapatariarealpark.com.br/",
          recent: true,
        },
        {
          title: "Tech blog",
          description: "Scalable content, strong performance, and smooth navigation.",
          image: "/images.web/diffrent-screen.jpg",
          link: "https://tech-blog-i77h.vercel.app/",
        },
        {
          title: "Fantastic Hair",
          description: "Premium wig and hair extension shop with polished branding and fast WhatsApp ordering.",
          image: "/images.web/cabelo screenshot.jpeg",
          link: "https://fantastichair.com.br/",
          recent: true,
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
      description: "Clear answers to the most common questions about website design, timelines, support, SEO (Visibility), domain setup, hosting, and everything you need to know before starting your project.",
      items: [
        { question: "Is hosting included in the price?", answer: "No. Hosting is charged separately because each project may need different resources. We still guide you toward the best option, help with setup, and offer special conditions for clients who build their website with us." },
        { question: "Do you offer support after launch?", answer: "Yes. After the website goes live, we can handle updates, small adjustments, fixes, monitoring, and ongoing improvements. This keeps your website secure, fast, and aligned with your business as it grows." },
        { question: "Do you build custom websites or use templates?", answer: "We build custom websites based on your business goals, identity, and audience. We can use visual references to speed up decisions, but the layout, content, and structure are planned for your brand." },
        { question: "Will my website appear on Google?", answer: "Yes. We build with SEO (Visibility) best practices, including organized structure, titles, descriptions, performance, and search-focused content. Results also depend on competition and ongoing strategy, but your website starts prepared to be found." },
        { question: "How long does it take to build a website?", answer: "On average, 5 days to 4 weeks depending on the number of pages, content, revisions, and required integrations. Smaller projects can be delivered faster, while online stores or websites with specific features may take longer." },
        { question: "Will the site be mobile optimized?", answer: "Yes. Every project is responsive and designed to work well on phones, tablets, and desktops. We also pay attention to buttons, forms, readability, and loading speed so visitors can contact you easily." },
        { question: "What information do I need to provide to create my website?", answer: "We need information about your company, goals, target audience, design preferences, and the content you want to include on your website." },
        { question: "Do you offer SEO (Visibility) services to improve my website's ranking?", answer: "Yes. We apply on-page SEO (Visibility) techniques such as keyword optimization, meta tags, URL structure, and website performance to improve visibility in search engines." },
        { question: "Do you create all types of websites?", answer: "We develop most types of websites, including business websites, online stores, portfolios, blogs, landing pages, and more. However, we do not create websites that promote pornography, illegal drugs, deceptive religious practices, hate speech, scams, or any illegal or harmful activities. Our goal is to develop professional, ethical digital solutions aligned with values that generate positive impact for businesses and society." },
        { question: "What additional services can you offer?", answer: "We offer services such as content creation, digital marketing, social media integration, logo creation, letterhead, digital business cards, app development, and online strategy consulting. These services can be contracted along with website development or as complements to strengthen your digital presence and achieve better results." },
        { question: "Can I see previous projects?", answer: "Of course! Visit our Portfolio section to check out some of our previous work. We have a variety of projects that demonstrate our experience in creating custom, responsive, and optimized websites for different sectors and needs. If you'd like to see more examples or are interested in a specific type of project, contact us so we can share more details.", answerLink: { href: "/#projects", label: "View project section" } },
        { question: "What types of websites do you develop?", answer: "We develop most types of websites, including business websites, online stores, portfolios, blogs, landing pages, and more." },
        { question: "What payment methods do you accept?", answer: "We accept Pix, credit cards, bank slips, and electronic transfers. We can also split card payments into an agreed number of interest-free installments, depending on the project value and the conditions defined in the proposal." },
        { question: "Can I edit the content later?", answer: "Yes. We provide access to an intuitive admin panel where you can easily and quickly update texts, images, and other content on your website." },
        { question: "Which industries do you create websites for?", answer: "We create custom websites for a wide variety of industries, including e-commerce, education, healthcare, technology, professional services, entertainment, and more. Our goal is to develop digital solutions that meet the specific needs of each industry and help our clients achieve their business goals." },
        { question: "What are the development timelines?", answer: "The timeline for website development can vary depending on project complexity, number of pages, features, and necessary integrations. On average, the process takes 5 days to 4 weeks, but simpler projects can be completed faster, while more complex projects may take a bit longer. During the briefing phase, we will discuss the project scope and provide a more accurate timeline estimate based on your specific needs." },
        { question: "Can you help with domain and professional email setup?", answer: "Yes. We can guide domain registration, DNS setup, hosting connection, and professional email configuration. If you already have a domain, we review the current access and connect everything carefully." },
        { question: "Do I need to have text and images ready before starting?", answer: "Not necessarily. If you already have photos, a logo, and text, we use them as a starting point. If you do not, we can help organize your information, suggest the content structure, and create clearer copy to present your services." },
        { question: "Do you build online stores with online payments?", answer: "Yes. We build online stores with product catalogs, carts, checkout, and payment integrations when the project requires it. During briefing, we define products, shipping, payment methods, legal pages, and the best purchase flow for your customers." },
        { question: "What happens after I approve the quote?", answer: "After approval, we confirm the scope, collect materials, define the page structure, and begin the design. You follow the steps, send feedback, and approve the website before launch so it reflects your brand and goals." },
        { question: "How many revisions can I request?", answer: "The number of revisions depends on the approved package and scope. We usually include adjustment rounds to review copy, images, sections, and visual details before launch, making sure the final result matches what was agreed." },
        { question: "Can the price change during the project?", answer: "The approved price stays the same for the agreed scope. It only changes if you request new pages, extra features, additional integrations, or major changes outside the original plan. If that happens, we let you know first and send a new quote for approval." },
        { question: "Will I own the website after it is finished?", answer: "Yes. After delivery and the agreed payment, the website belongs to the client. We also guide you through important access details, domain, hosting, and administration so you have control over your digital presence." },
        { question: "Can you integrate the website with WhatsApp, social media, and external tools?", answer: "Yes. We can integrate WhatsApp, Instagram, Facebook, Google Maps, forms, analytics tools, ad pixels, and other platforms depending on the project needs. These integrations help turn visitors into leads and customers." },
        { question: "How do I get started?", answer: "The first step is to contact us through WhatsApp or the form. We will understand your business, goals, website type, timeline, and budget. Then we send a clear proposal with scope, steps, and next actions." },
        { question: "Do I need to pay everything before the project starts?", answer: "Not necessarily. The payment structure is defined in the proposal. In many cases, we work with an initial deposit to start the project and the remaining amount divided by milestones or paid near launch." },
        { question: "Do you hold meetings during the project?", answer: "Yes. We can align through WhatsApp, video calls, or messages, depending on what is most practical for you. The goal is to answer questions, confirm important decisions, and keep the project moving clearly." },
        { question: "Will my website have an SSL security certificate?", answer: "Yes. We configure the website to use HTTPS/SSL when the hosting provider supports it. This helps protect browsing, improves visitor trust, and supports SEO (Visibility) best practices." },
        { question: "Can you improve a website I already have?", answer: "Yes. We can review your current website and suggest improvements for design, speed, content, SEO (Visibility), responsiveness, and conversion. Depending on the project condition, we can improve the existing site or recommend a new version." },
        { question: "Can I hire you for only a landing page?", answer: "Yes. A landing page is a good option when you need to promote a specific service, campaign, product, or offer. It can focus on WhatsApp, forms, lead capture, paid traffic, or local conversion." },

      ],
    },
    reviews: {
      badge: "real results",
      title: "Real client results",
      description: "See what business owners say after launching a high-converting website with us.",
      summaryLabel: "Average client rating",
      countLabel: "Based on 42 Google reviews",
      sourceLabel: "Google reviews",
      previousLabel: "Previous review",
      nextLabel: "Next review",
      items: [
        { name: "Emma Parker", business: "Fashion store", text: "My website looks great and I started getting more WhatsApp messages from new clients." },
        { name: "Daniel Brooks", business: "Barbershop", text: "The service was fast and my business looks much more professional online now." },
        { name: "Sofia Bennett", business: "Beauty clinic", text: "People find my business more easily and trust my brand much more now." },
        { name: "Mariana Souza", business: "Beauty salon", text: "The website looks elegant, loads fast, and makes it very easy for clients to book through WhatsApp." },
        { name: "Carlos Mendes", business: "Restaurant", text: "After the new website, it became much easier to show our menu and receive orders from new customers." },
        { name: "Ana Ribeiro", business: "Consulting firm", text: "My company presentation feels more professional, and contacts through the form have increased." },
        { name: "Bruno Almeida", business: "Shoe repair shop", text: "I really liked how organized the project was. The website explains my services clearly and builds trust." },
        { name: "Juliana Costa", business: "Online store", text: "My store looks beautiful on mobile, and customers can find products without any difficulty." },
        { name: "Rafael Martins", business: "Woodworking", text: "The portfolio of my work looks excellent, and now I send the link with every new quote." },
        { name: "Patricia Gomes", business: "Healthcare clinic", text: "The website is clean, fast, and communicates exactly the level of professionalism I needed for the clinic." },
        { name: "Lucas Ferreira", business: "Photography", text: "The photos stand out beautifully and the website loads very well. It is perfect for presenting my work." },
        { name: "Camila Rocha", business: "Education", text: "We can explain our courses much better now and started receiving more qualified messages after launch." },
        { name: "Thiago Oliveira", business: "Local services", text: "Clear communication, fast delivery, and a website that really helps customers understand what we offer." },
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
      cnpj: "CNPJ: 45.041.116/0001-07",
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
      badge: "Mucho gusto",
      title: "Diseño y desarrollo web con más de 6 años de experiencia",
      paragraphs: [
        "Soy Ese Victor, diseñador y desarrollador web con más de seis años creando sitios rápidos, atractivos y fáciles de usar para empresas en Santa Catarina.",
        "Desde una landing page simple hasta un sitio institucional profesional o una tienda online, ayudo a empresas de Florianópolis, São José, Joinville y Balneário Camboriú a atraer más clientes y cerrar más ventas.",
        "Mi enfoque es diseño limpio, SEO local y rendimiento rápido para que tu sitio cargue bien y convierta visitantes en clientes.",
      ],
      pills: ["Portafolio", "Reseñas de Google"],
    },
    services: {
      badge: "servicios",
      title: "Lo que hacemos por tu negocio",
      description: "Creamos soluciones simples para ayudar a tu empresa a crecer en internet. Cada proyecto se adapta a tu marca con diseño responsive, SEO local y enfoque en convertir visitantes en clientes.",
      items: [
        { title: "Sitio para negocio", description: "Un sitio limpio y profesional para mostrar tu empresa y generar confianza en tus clientes." },
        { title: "Landing page", description: "Una página hecha para recibir más mensajes y clientes, con una oferta clara y llamada a la acción rápida." },
        { title: "Tienda online", description: "Una tienda simple y segura para vender tus productos, con catálogo fácil de navegar y pago confiable." },
        { title: "Hosting y dominio", description: "Te ayudamos a poner tu sitio en internet con hosting estable y registro de dominio incluido." },
        { title: "Sitio rápido", description: "Tu sitio carga rápido y funciona bien en cualquier dispositivo, con rendimiento optimizado para mejores resultados." },
        { title: "Soporte y mantenimiento", description: "Cuidamos tu sitio después de publicarlo, con actualizaciones, correcciones y mejoras continuas." },
        { title: "Google Business y Maps", description: "Conectamos tu sitio con Google Business Profile y Google Maps para mejorar tu visibilidad local." },
        { title: "Logo y marca", description: "Creamos tu logo y la imagen de tu marca con identidad coherente para fortalecer tu presencia." },
      ],
    },
    pricing: {
      badge: "precios",
      title: "Precios iniciales de los servicios",
      description: "Consulta precios base y opciones de paquete diseñadas para ayudar a empresas locales a vender, agendar y crecer online.",
      subtitle: "Elige el plan adecuado para una presencia digital confiable que atraiga clientes.",
      highlights: [
        "Entrega rápida y segura",
        "WhatsApp y captación de leads listos",
        "Diseño pensado para convertir",
      ],
      secondaryDescription: "Cada paquete incluye diseño móvil, SEO inicial y apoyo directo para que tu sitio se lance con seguridad.",
      bottomTitle: "¿Necesitas un plan personalizado?",
      bottomText: "Envíanos un mensaje por WhatsApp y recibe un presupuesto hecho a medida con plazos claros y soporte directo.",
      popularBadge: "Más popular",
      note: "Todos los valores están en real brasileño (R$) y pueden variar de un proyecto a otro según las necesidades de cada cliente. El soporte mensual se cobra por separado y se cotiza individualmente.",
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
          price: "",
          popular: true,
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
          price: "",
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
          description: "Cuidado continuo para tu sitio y ajustes según crece tu negocio, con tarifa a medida.",
          price: "",
          features: [
            { label: "Ajustes mensuales", included: true },
            { label: "Actualización de contenido", included: true },
            { label: "Soporte técnico", included: true },
            { label: "Correcciones rápidas", included: true },
            { label: "Monitoreo de rendimiento", included: true },
            { label: "Seguridad y respaldos", included: true },
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
      loadMore: "Ver más",
      loading: "Cargando...",
      noMore: "Revisa nuestro portafolio para ver más proyectos.",
      cardCta: "Ver proyecto →",
      items: [
        {
          title: "Multi Vendo E-commerce",
          description: "Sitio Multi Vendo donde las tiendas pueden subir productos para vender.",
          image: "/images.web/deliver-app.png",
          link: "https://petman.store/",
          recent: true,
        },
        {
          title: "Sitio web para fotografía",
          description: "Sitio elegante para fotógrafo, con portafolio visual, presentación de servicios y contacto rápido para convertir visitantes en nuevos clientes.",
          image: "/images.web/photographer-website.jpeg",
          link: "https://soulacephotography.com/",
          recent: true,
        },
        {
          title: "Sitio web para restaurante",
          description: "Sitio moderno para restaurante, con un menú atractivo, diseño elegante e información clara para que los clientes conozcan el lugar y contacten.",
          image: "/images.web/resturante.png",
          link: "https://darkgoldenrod-toad-190001.hostingersite.com/",
          recent: true,
        },
        {
          title: "Portafolio profesional",
          description: "Portafolio moderno y responsivo para presentar servicios, proyectos e información de contacto con un diseño limpio, elegante y enfocado en generar confianza.",
          image: "/images.web/portfiolo.jpeg",
          link: "https://ese-faps-xbvb.vercel.app/",
          recent: true,
        },
        
        {
          title: "Sitio web para Carpintero",
          description: "Sitio profesional para carpintero, presentando servicios de carpintería, portafolio de trabajos y contacto directo.",
          image: "/images.web/carpenter.jpeg",
          link: "https://carpenter-friend.vercel.app/",
        },
        {
          title: "Sitio web para firma contable",
          description: "Sitio profesional para una firma contable, con imagen premium, presentación clara de servicios y enfoque en confianza, cumplimiento y asesoría financiera.",
          image: "/images.web/accountant screenshoot.jpeg",
          link: "https://busayo-acct.vercel.app/",
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
          recent: true,
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
          title: "Real Park Sapateria e Costureira",
          description: "Reparaciones rápidas, ajustes y servicios en un solo lugar. Zapatería, costura, foto 3x4, llaves y Xerox con atención práctica para tu día a día.",
          image: "/images.web/sapaterio-screenhot.jpeg",
          link: "https://www.sapatariarealpark.com.br/",
          recent: true,
        },
        {
          title: "Blog tech",
          description: "Contenido escalable, rendimiento y navegación fluida.",
          image: "/images.web/diffrent-screen.jpg",
          link: "https://tech-blog-i77h.vercel.app/",
        },
        {
          title: "Fantastic Hair",
          description: "Tienda online de pelucas y extensiones con presencia premium y contacto rápido por WhatsApp.",
          image: "/images.web/cabelo screenshot.jpeg",
          link: "https://fantastichair.com.br/",
          recent: true,
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
      description: "Respuestas claras a las dudas más comunes sobre creación de sitios web, plazos, soporte, SEO (Visibilidad), dominio, hosting y todo lo que necesitas saber antes de comenzar tu proyecto.",
      items: [
        { question: "¿El hosting está incluido en el precio?", answer: "No. El hosting se cobra aparte porque cada proyecto puede necesitar recursos diferentes. Aun así, te orientamos para elegir la mejor opción, ayudamos con la configuración y ofrecemos condiciones especiales para clientes que desarrollan su sitio con nosotros." },
        { question: "¿Ofrecen soporte después del lanzamiento?", answer: "Sí. Después de publicar el sitio, podemos encargarnos de actualizaciones, pequeños ajustes, correcciones, monitoreo y mejoras continuas. Así tu sitio se mantiene seguro, rápido y alineado con el crecimiento de tu negocio." },
        { question: "¿Crean sitios personalizados o usan plantillas?", answer: "Creamos sitios personalizados según los objetivos, la identidad y el público de tu negocio. Podemos usar referencias visuales para acelerar decisiones, pero el diseño, el contenido y la estructura se planifican para tu marca." },
        { question: "¿Mi sitio aparecerá en Google?", answer: "Sí. Construimos el sitio con buenas prácticas de SEO (Visibilidad), incluyendo estructura organizada, títulos, descripciones, rendimiento y contenido pensado para búsquedas. Los resultados también dependen de la competencia y de la estrategia continua, pero tu sitio nace preparado para ser encontrado." },
        { question: "¿Cuánto tiempo tarda crear un sitio?", answer: "En promedio, de 5 días a 4 semanas, según el número de páginas, contenido, revisiones e integraciones necesarias. Proyectos más pequeños pueden entregarse más rápido, mientras que tiendas online o sitios con funcionalidades específicas pueden requerir más tiempo." },
        { question: "¿El sitio estará optimizado para móviles?", answer: "Sí. Todos los proyectos son responsivos y están pensados para funcionar bien en celulares, tablets y computadoras. También cuidamos botones, formularios, lectura y velocidad para que el visitante pueda contactarte sin dificultad." },
        { question: "¿Qué información necesito proporcionar para crear mi sitio web?", answer: "Necesitamos información sobre su empresa, objetivos, público objetivo, preferencias de diseño y contenido que desea incluir en el sitio web." },
        { question: "¿Ofrecen servicios de SEO (Visibilidad) para mejorar el posicionamiento de mi sitio web?", answer: "Sí. Aplicamos técnicas de SEO (Visibilidad) on-page, como optimización de palabras clave, meta tags, estructura de URL y rendimiento del sitio para mejorar la visibilidad en los motores de búsqueda." },
        { question: "¿Crean todos los tipos de sitios web?", answer: "Desarrollamos la mayoría de los tipos de sitios web, incluidos sitios corporativos, tiendas virtuales, portafolios, blogs, landing pages y más. Sin embargo, no creamos sitios que promuevan pornografía, drogas ilegales, prácticas religiosas engañosas, discurso de odio, estafas o cualquier actividad ilegal o perjudicial. Nuestro objetivo es desarrollar soluciones digitales profesionales, éticas y alineadas con valores que generen un impacto positivo para las empresas y la sociedad." },
        { question: "¿Qué servicios adicionales pueden ofrecer?", answer: "Ofrecemos servicios como creación de contenido, marketing digital, integración con redes sociales, creación de logotipo, papel membretado, tarjeta digital, desarrollo de aplicaciones y consultoría en estrategias online. Estos servicios pueden contratarse junto con el desarrollo del sitio web o como complementos para fortalecer su presencia digital y lograr mejores resultados." },
        { question: "¿Puedo ver proyectos anteriores?", answer: "¡Claro! Visite nuestra sección de Portafolio para ver algunos de nuestros trabajos anteriores. Tenemos una variedad de proyectos que demuestran nuestra experiencia en crear sitios web personalizados, responsivos y optimizados para diferentes sectores y necesidades. Si desea ver más ejemplos o está interesado en un tipo específico de proyecto, contáctenos para que podamos compartir más detalles.", answerLink: { href: "/#projects", label: "Ver sección de proyectos" } },
        { question: "¿Qué tipos de sitios web desarrollan?", answer: "Desarrollamos la mayoría de los tipos de sitios web, incluidos sitios corporativos, tiendas virtuales, portafolios, blogs, landing pages y más." },
        { question: "¿Qué formas de pago aceptan?", answer: "Aceptamos Pix, tarjeta de crédito, boleto bancario y transferencia electrónica. También podemos dividir el pago con tarjeta en un número acordado de cuotas sin interés, según el valor del proyecto y las condiciones definidas en la propuesta." },
        { question: "¿Puedo editar el contenido después?", answer: "Sí. Proporcionamos acceso a un panel de administración intuitivo, donde puede actualizar textos, imágenes y otros contenidos de su sitio web de forma fácil y rápida." },
        { question: "¿Para qué sectores crean sitios web?", answer: "Creamos sitios web personalizados para una amplia variedad de sectores, incluidos comercio electrónico, educación, salud, tecnología, servicios profesionales, entretenimiento y más. Nuestro objetivo es desarrollar soluciones digitales que satisfagan las necesidades específicas de cada sector y ayuden a nuestros clientes a alcanzar sus objetivos comerciales." },
        { question: "¿Cuáles son los plazos de desarrollo?", answer: "El plazo para el desarrollo de un sitio web puede variar según la complejidad del proyecto, número de páginas, funcionalidades e integraciones necesarias. En promedio, el proceso toma de 5 días a 4 semanas, pero proyectos más simples pueden completarse en menos tiempo, mientras que proyectos más complejos pueden tardar un poco más. Durante la fase de briefing, discutiremos el alcance del proyecto y proporcionaremos una estimación de plazo más precisa según sus necesidades específicas." },
        { question: "¿Ayudan con dominio y correo profesional?", answer: "Sí. Podemos orientar el registro del dominio, la configuración de DNS, la conexión con el hosting y la creación de correo profesional. Si ya tienes dominio, revisamos el acceso actual y conectamos todo con cuidado." },
        { question: "¿Necesito tener textos e imágenes listos antes de empezar?", answer: "No necesariamente. Si ya tienes fotos, logo y textos, usamos ese material como base. Si todavía no los tienes, podemos ayudarte a organizar la información, sugerir la estructura del contenido y crear textos más claros para presentar tus servicios." },
        { question: "¿Hacen tiendas online con pagos en línea?", answer: "Sí. Creamos tiendas online con catálogo, carrito, checkout e integración con medios de pago cuando el proyecto lo requiere. Durante el briefing, definimos productos, envío, formas de pago, páginas legales y el mejor flujo de compra para tus clientes." },
        { question: "¿Qué sucede después de aprobar el presupuesto?", answer: "Después de la aprobación, confirmamos el alcance, recopilamos materiales, definimos la estructura de las páginas y comenzamos el diseño. Tú acompañas las etapas, envías comentarios y apruebas el sitio antes del lanzamiento para asegurar que refleje tu marca y tus objetivos." },
        { question: "¿Cuántas revisiones puedo solicitar?", answer: "El número de revisiones depende del paquete y del alcance aprobado. Normalmente incluimos rondas de ajustes para revisar textos, imágenes, secciones y detalles visuales antes del lanzamiento, asegurando que el resultado final esté alineado con lo acordado." },
        { question: "¿El precio puede cambiar durante el proyecto?", answer: "El precio aprobado se mantiene para el alcance acordado. Solo cambia si solicitas nuevas páginas, funcionalidades extra, integraciones adicionales o cambios grandes fuera del plan inicial. En ese caso, avisamos antes y enviamos un nuevo presupuesto para aprobación." },
        { question: "¿El sitio será mío después de estar listo?", answer: "Sí. Después de la entrega y del pago acordado, el sitio pertenece al cliente. También te orientamos sobre accesos importantes, dominio, hosting y administración para que tengas control sobre tu presencia digital." },
        { question: "¿Pueden integrar el sitio con WhatsApp, redes sociales y herramientas externas?", answer: "Sí. Podemos integrar WhatsApp, Instagram, Facebook, Google Maps, formularios, herramientas de análisis, píxeles de anuncios y otras plataformas según las necesidades del proyecto. Estas integraciones ayudan a convertir visitantes en contactos y clientes." },
        { question: "¿Cómo puedo empezar?", answer: "El primer paso es contactarnos por WhatsApp o por el formulario. Vamos a entender tu negocio, objetivos, tipo de sitio, plazo y presupuesto. Después enviamos una propuesta clara con alcance, etapas y próximos pasos." },
        { question: "¿Necesito pagar todo antes de comenzar el proyecto?", answer: "No necesariamente. La forma de pago se define en la propuesta. En muchos casos, trabajamos con un anticipo para iniciar el proyecto y el resto dividido por etapas o pagado cerca del lanzamiento." },
        { question: "¿Hacen reuniones durante el proyecto?", answer: "Sí. Podemos alinear por WhatsApp, videollamada o mensajes, según lo que sea más práctico para ti. El objetivo es resolver dudas, confirmar decisiones importantes y mantener el proyecto avanzando con claridad." },
        { question: "¿Mi sitio tendrá certificado de seguridad SSL?", answer: "Sí. Configuramos el sitio para usar HTTPS/SSL cuando el proveedor de hosting ofrece ese recurso. Esto ayuda a proteger la navegación, mejora la confianza del visitante y apoya las buenas prácticas de SEO (Visibilidad)." },
        { question: "¿Pueden mejorar un sitio que ya tengo?", answer: "Sí. Podemos revisar tu sitio actual y sugerir mejoras de diseño, velocidad, contenido, SEO (Visibilidad), responsividad y conversión. Según el estado del proyecto, podemos mejorar el sitio existente o recomendar una nueva versión." },
        { question: "¿Puedo contratar solo una landing page?", answer: "Sí. Una landing page es una buena opción cuando necesitas promocionar un servicio, campaña, producto u oferta específica. Puede enfocarse en WhatsApp, formulario, captación de leads, tráfico pago o conversión local." },
      ],
    },
    reviews: {
      badge: "resultados reales",
      title: "Resultados reales de clientes",
      description: "Mira lo que dicen los negocios después de lanzar su sitio con nosotros.",
      summaryLabel: "Nota media de clientes",
      countLabel: "Basado en 42 reseñas de Google",
      sourceLabel: "Reseñas de Google",
      previousLabel: "Reseña anterior",
      nextLabel: "Siguiente reseña",
      items: [
        { name: "Emma Parker", business: "Tienda de ropa", text: "My website looks great and I started getting more WhatsApp messages from new clients." },
        { name: "Daniel Brooks", business: "Barbería", text: "The service was fast and my business looks much more professional online now." },
        { name: "Sofia Bennett", business: "Clínica estética", text: "People find my business more easily and trust my brand much more now." },
        { name: "Mariana Souza", business: "Salón de belleza", text: "El sitio quedó elegante, rápido y muy fácil para que mis clientas agenden por WhatsApp." },
        { name: "Carlos Mendes", business: "Restaurante", text: "Después del nuevo sitio, fue mucho más simple mostrar el menú y recibir pedidos de nuevos clientes." },
        { name: "Ana Ribeiro", business: "Consultoría", text: "La presentación de mi empresa se ve más profesional y aumentaron los contactos por el formulario." },
        { name: "Bruno Almeida", business: "Zapatería", text: "Me gustó mucho la organización del proyecto. El sitio muestra mis servicios con claridad y genera confianza." },
        { name: "Juliana Costa", business: "Tienda online", text: "Mi tienda se ve muy bien en celular y mis clientes encuentran los productos sin dificultad." },
        { name: "Rafael Martins", business: "Carpintería", text: "El portafolio de mis trabajos quedó excelente y ahora envío el enlace en cada nuevo presupuesto." },
        { name: "Patricia Gomes", business: "Clínica de salud", text: "El sitio quedó limpio, rápido y transmite exactamente la seriedad que necesitaba para la clínica." },
        { name: "Lucas Ferreira", business: "Fotografía", text: "Las fotos tienen mucho destaque y el sitio carga muy bien. Quedó perfecto para presentar mi trabajo." },
        { name: "Camila Rocha", business: "Educación", text: "Ahora explicamos mejor nuestros cursos y recibimos mensajes más calificados después del lanzamiento." },
        { name: "Thiago Oliveira", business: "Servicios locales", text: "Comunicación clara, entrega rápida y un sitio que realmente ayuda a los clientes a entender lo que ofrecemos." },
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
      cnpj: "CNPJ: 45.041.116/0001-07",
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
