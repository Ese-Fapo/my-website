import React from "react";

const faqs = [
  {
    question: "A hospedagem está inclusa no valor?",
    answer:
      "Não. O serviço de hospedagem é oferecido à parte, onde disponibilizamos uma condição especial para clientes que fazem o site conosco. Você também pode contratar outra hospedagem ou utilizar a sua, caso já possua.",
  },

  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer:
      "Sim. Oferecemos planos de manutenção e suporte contínuo para garantir que seu site permaneça atualizado, seguro e funcionando perfeitamente após o lançamento.",
  },
  {
    question: "Vocês criam sites personalizados ou usam templates?",
    answer:
      "Criamos sites totalmente personalizados, desenvolvidos do zero para atender às necessidades específicas do seu negócio. Não utilizamos templates genéricos, garantindo que seu site seja único e alinhado à identidade da sua marca.",
  },
  {
    question: "Meu site irá aparecer no Google?",
    answer:
      " Sim. Todos os nossos sites são otimizados para SEO, utilizando as melhores práticas para garantir que seu site seja facilmente encontrado pelos motores de busca e tenha uma boa classificação no Google.",
  },
  {
    question: " Que informações preciso enviar para o meu site ser criado?",
    answer:
      "Para criar seu site, precisaremos de informações como o nome da sua empresa, descrição dos serviços ou produtos, logotipo, imagens que deseja incluir, e qualquer conteúdo específico que queira destacar. Também é útil compartilhar referências de design ou sites que você gosta para alinharmos a estética do seu site.",
  },
  {
    question: "Quanto tempo leva para criar um site?",
    answer:
      "Em média, de 2 a 4 semanas. O prazo varia conforme o escopo, número de páginas e integrações necessárias.",
  },
  {
    question: "O site será otimizado para celulares?",
    answer:
      "Sim. Todos os projetos são responsivos e pensados para oferecer a melhor experiência em qualquer dispositivo.",
  },
  {
    question: "Vocês fazem SEO?",
    answer:
      "Sim. Aplicamos SEO técnico e boas práticas de performance para ajudar seu site a ranquear no Google.",
  },
  {
    question: "Posso editar o conteúdo depois?",
    answer:
      "Sim. Podemos integrar um CMS ou treinar sua equipe para atualizações simples de conteúdo.",
  },
  {
    question: "Há suporte após o lançamento?",
    answer:
      "Sim. Oferecemos planos de manutenção e suporte contínuo, com atualizações e monitoramento.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Trabalhamos com PIX, cartão e boleto. Também oferecemos condições para projetos maiores.",
  },
  {
    question: "Quais tipos de sites que vocês desenvolvem?",
    answer:
      "Desenvolvemos sites institucionais, landing pages, e-commerce e aplicações web personalizadas, sempre focados em conversão e performance.",
  },
  {
    question: "Posso ver projetos anteriores?",
    answer:
      "Claro! Visite nossa seção de Portfólio para conferir alguns dos nossos trabalhos anteriores.",
  },
        {
    question: "Quais serviços adicionais vocês podem oferecer?",
    answer:
      "Oferecemos serviços como criação de conteúdo, marketing digital, integração com redes sociais, criação de logotipo, papel timbrado, cartão digital, desenvolvimento de aplicativos e consultoria em estratégias online. ",
        }
];

export const Faqs = () => {
  return (
    <section id="faqs" className="bg-black py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
            dúvidas
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-200/80">
            Respostas rápidas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        <div className="mt-10 space-y-4 sm:mt-12">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.35)] transition hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                {faq.question}
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
