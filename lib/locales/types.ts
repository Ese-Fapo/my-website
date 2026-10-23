export type Locale = "pt" | "en" | "es"

export type TranslationSchema = {
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
    imageAlt: string
    imageCaption: string
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
    moreInvitation: string
    showMore: string
    showLess: string
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

