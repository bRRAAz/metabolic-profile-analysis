import logo from "@/assets/logo-bruna-vieira.png";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";
import resultGraph from "@/assets/result-graph.jpg";
import resultScale from "@/assets/result-scale.jpg";
import resultBelly from "@/assets/result-belly.jpg";
import resultShorts from "@/assets/result-shorts.jpg";
import resultBeforeAfter from "@/assets/result-before-after.jpg";
import resultTestimonial from "@/assets/result-testimonial.jpg";
import resultWeightChart from "@/assets/result-weight-chart.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";

const PURCHASE_LINK = "https://pay.hub.la/lSMNtd205dgseLuAkY45";

const priceItems = [
  { name: "Planejamento alimentar com nutricionista", price: "R$ 350" },
  { name: "Cardápio personalizado para seu perfil", price: "R$ 280" },
  { name: "Protocolo metabólico estruturado", price: "R$ 400" },
  { name: "Suporte individual durante o processo", price: "R$ 400" },
];

const includesItems = [
  "Planejamento alimentar estruturado — o que comer, quanto e quando, adaptado ao seu metabolismo.",
  "Protocolo metabólico completo — sono, intestino e hidratação: os 3 pilares que regulam tudo.",
  "13 módulos gravados + desafios diários — sequência clara para seguir no seu ritmo.",
  "Receitas exclusivas — práticas, saborosas e pensadas para apoiar a reorganização metabólica.",
];

const highlightFeatures = [
  {
    emoji: "💬",
    title: "Suporte individual durante todo o processo",
    desc: "Você não vai estar sozinha. Tem alguém do outro lado para tirar suas dúvidas, fazer ajustes e te manter no caminho.",
  },
  {
    emoji: "🥗",
    title: "Cardápio personalizado para o seu perfil metabólico",
    desc: "Não é um cardápio genérico. É adaptado ao padrão metabólico identificado no seu diagnóstico.",
  },
  {
    emoji: "♾",
    title: "Acesso vitalício — sem prazo, sem pressão",
    desc: "O método fica disponível para sempre. Se precisar pausar, retomar ou recomeçar do zero, ele vai estar aqui. Sem prazo, sem pressão, sem perder o que você já conquistou.",
  },
];

const faqItems = [
  {
    q: "Esse método funciona mesmo para quem já tentou várias dietas?",
    a: "Sim. O Método Reprograme não é mais uma dieta. Ele foca na reorganização da base metabólica, que muitas vezes é o que impede o corpo de responder ao emagrecimento.",
  },
  {
    q: "Preciso seguir uma dieta muito restritiva?",
    a: "Não. O método foi criado para ser aplicável na rotina, com alimentação estruturada e sustentável.",
  },
  {
    q: "Em quanto tempo começo a perceber mudanças?",
    a: "Muitas mulheres começam a perceber melhora na energia, digestão e controle alimentar nas primeiras semanas.",
  },
  {
    q: "Vou ter acesso por quanto tempo?",
    a: "O acesso ao método é imediato e você poderá consultar o material sempre que precisar.",
  },
  {
    q: "Isso funciona para quem tem metabolismo lento?",
    a: "Sim. O método foi desenvolvido justamente para casos onde o metabolismo apresenta sinais de adaptação ou baixa resposta.",
  },
  {
    q: "E se eu não gostar? Tenho garantia?",
    a: "Sim, 7 dias de garantia total. Se perceber que o método não faz sentido para o seu caso, basta solicitar o reembolso. Sem perguntas, sem burocracia.",
  },
];

const GoldDivider = () => (
  <div className="w-16 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }} />
);

const GoldDotsDecor = () => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%))' }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(43 80% 55%)' }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(43 80% 55%)' }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(43 80% 55%)' }} />
    <div className="w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, hsl(43 80% 55%))' }} />
  </div>
);

const GoldCTA = ({ text }: { text: string }) => (
  <a
    href={PURCHASE_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full text-center px-10 py-5 font-body text-sm md:text-base font-bold tracking-[0.15em] uppercase rounded-lg animate-pulse-cta transition-all duration-500 hover:scale-[1.02]"
    style={{
      background: 'linear-gradient(135deg, hsl(43 80% 50%), hsl(43 70% 60%), hsl(43 80% 50%))',
      color: 'hsl(0 0% 5%)',
      boxShadow: '0 8px 32px hsl(43 80% 45% / 0.4), 0 2px 8px hsl(43 80% 45% / 0.2)',
    }}
  >
    {text}
  </a>
);

const ResultFinalLowTicket = () => {
  return (
    <div className="min-h-screen w-full" style={{ background: 'hsl(0 0% 6%)' }}>
      <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in min-h-screen" style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 90%)' }}>
        <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-8 opacity-90" />

        {/* Approval */}
        <div className="w-full p-6 rounded-lg text-center mb-6" style={{ border: '1px solid hsl(43 80% 45% / 0.3)', background: 'hsl(0 0% 10%)', boxShadow: '0 0 30px hsl(43 80% 45% / 0.08)' }}>
          <p className="text-xs font-body tracking-[0.25em] uppercase mb-2" style={{ color: 'hsl(0 0% 55%)' }}>
            Seu perfil foi aprovado
          </p>
          <span className="inline-block px-6 py-2 text-lg md:text-xl font-display font-bold rounded-full mb-4 animate-pulse-cta" style={{ background: 'hsl(43 80% 45% / 0.1)', color: 'hsl(43 80% 55%)', border: '1px solid hsl(43 80% 45% / 0.3)' }}>
            🎉 Parabéns!
          </span>
          <p className="text-sm font-body text-center leading-relaxed" style={{ color: 'hsl(0 0% 75%)' }}>
            Com base no seu diagnóstico, este é o seu primeiro passo. A reorganização da base metabólica é o que vai fazer a diferença — e você pode iniciar agora.
          </p>
        </div>

        <p className="text-sm font-body text-center leading-relaxed mb-6" style={{ color: 'hsl(0 0% 55%)' }}>
          Você já sabe o que é fazer tudo certo e não ter resultado. O problema nunca foi você. Foi a base — e é exatamente isso que o <span className="font-semibold" style={{ color: 'hsl(43 80% 55%)' }}>Reprograme reorganiza</span>.
        </p>

        <GoldDivider />

        {/* Method intro */}
        <div className="text-center mb-10">
          <p className="text-xs font-body tracking-[0.35em] uppercase mb-3" style={{ color: 'hsl(43 80% 55%)' }}>
            Método
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-1" style={{ color: 'hsl(43 80% 55%)' }}>
            Reprograme
          </h2>
          <GoldDotsDecor />
          <p className="text-sm font-body leading-relaxed mt-4" style={{ color: 'hsl(0 0% 60%)' }}>
            Volte a emagrecer, sem dieta restritiva, sem abrir mão da sua rotina. Com um planejamento alimentar inteligente, validado por nutricionista, tudo em uma única plataforma.
          </p>
        </div>

        {/* Price comparison */}
        <div className="w-full mb-6">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-5" style={{ color: 'hsl(43 80% 55%)' }}>
            O que você pagaria contratando separado:
          </p>
          <div className="space-y-2 mb-3">
            {priceItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 18%)' }}>
                <p className="text-sm font-body" style={{ color: 'hsl(0 0% 75%)' }}>{item.name}</p>
                <p className="text-base font-body font-semibold line-through" style={{ color: 'hsl(0 0% 50%)' }}>{item.price}</p>
              </div>
            ))}
            <div className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'hsl(0 0% 8%)', border: '2px solid hsl(0 60% 45%)' }}>
              <p className="text-base font-body font-bold" style={{ color: 'hsl(0 0% 90%)' }}>Total separado:</p>
              <p className="text-xl font-display font-bold line-through" style={{ color: 'hsl(0 65% 55%)' }}>R$ 1.430</p>
            </div>
          </div>
        </div>

        {/* Offer price block */}
        <div className="w-full p-8 rounded-xl text-center mb-8" style={{ background: 'hsl(0 0% 10%)', border: '2px solid hsl(43 80% 45% / 0.4)', boxShadow: '0 0 40px hsl(43 80% 45% / 0.1)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-xs font-body tracking-[0.25em] uppercase font-bold mb-1" style={{ color: 'hsl(43 80% 55%)' }}>
                Método Reprograme
              </p>
              <p className="text-xs font-body" style={{ color: 'hsl(0 0% 50%)' }}>Acesso imediato + vitalício</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-body line-through" style={{ color: 'hsl(0 0% 45%)' }}>R$ 1.430</p>
              <p className="text-5xl md:text-6xl font-display font-bold animate-pulse-cta" style={{ background: 'linear-gradient(135deg, hsl(43 80% 50%), hsl(43 65% 65%), hsl(43 80% 50%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                R$ 296
              </p>
              <p className="text-xs font-body" style={{ color: 'hsl(0 0% 45%)' }}>ou em até 12x no cartão</p>
            </div>
          </div>
        </div>

        <div className="w-full mb-3">
          <GoldCTA text="Quero emagrecer de verdade, agora →" />
        </div>

        <GoldDivider />

        {/* Highlight features */}
        <div className="w-full mb-10">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-6" style={{ color: 'hsl(43 80% 55%)' }}>
            O que faz a diferença
          </p>
          <div className="space-y-4">
            {highlightFeatures.map((feat, idx) => (
              <div key={idx} className="p-5 rounded-lg" style={{ background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 18%)' }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{feat.emoji}</span>
                  <div>
                    <h4 className="text-sm font-body font-semibold mb-1" style={{ color: 'hsl(0 0% 92%)' }}>{feat.title}</h4>
                    <p className="text-xs font-body leading-relaxed" style={{ color: 'hsl(0 0% 55%)' }}>{feat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Also included */}
        <div className="w-full mb-8">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-5" style={{ color: 'hsl(43 80% 55%)' }}>
            Também incluso
          </p>
          <div className="space-y-3">
            {includesItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-0.5 text-xs" style={{ color: 'hsl(43 80% 55%)' }}>◆</span>
                <p className="text-sm font-body leading-relaxed" style={{ color: 'hsl(0 0% 75%)' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus */}
        <div className="w-full p-5 rounded-lg mb-8" style={{ border: '1px solid hsl(43 80% 45% / 0.3)', background: 'hsl(0 0% 10%)', boxShadow: '0 0 30px hsl(43 80% 45% / 0.08)' }}>
          <p className="text-xs font-body tracking-[0.2em] uppercase text-center font-bold mb-2" style={{ color: 'hsl(43 80% 55%)' }}>
            🎁 Bônus Exclusivo
          </p>
          <p className="text-sm font-body text-center font-semibold mb-1" style={{ color: 'hsl(0 0% 92%)' }}>
            Guia da Ansiedade à Compulsão — Como Quebrar Esse Ciclo de Vez
          </p>
          <p className="text-xs font-body text-center" style={{ color: 'hsl(0 0% 55%)' }}>
            O maior sabotador da sua dieta não é a fome. É a ansiedade. Esse guia te mostra como quebrar esse ciclo, sem culpa.
          </p>
        </div>

        {/* Price + CTA */}
        <div className="w-full p-8 rounded-xl text-center mb-6" style={{ background: 'hsl(0 0% 10%)', border: '2px solid hsl(43 80% 45% / 0.4)', boxShadow: '0 0 40px hsl(43 80% 45% / 0.1)' }}>
          <p className="text-sm font-body line-through mb-1" style={{ color: 'hsl(0 65% 55%)' }}>De R$ 1.430</p>
          <p className="text-xs font-body mb-1" style={{ color: 'hsl(0 0% 50%)' }}>por apenas</p>
          <p className="text-5xl md:text-6xl font-display font-bold mb-1 animate-pulse-cta" style={{ background: 'linear-gradient(135deg, hsl(43 80% 50%), hsl(43 65% 65%), hsl(43 80% 50%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            R$ 296
          </p>
          <p className="text-base font-body font-semibold" style={{ color: 'hsl(43 80% 55%)' }}>12x R$ 30,08</p>
        </div>

        <div className="w-full mb-3">
          <GoldCTA text="Quero emagrecer de verdade, agora →" />
        </div>
        <div className="flex items-center justify-center gap-4 text-xs font-body mb-2" style={{ color: 'hsl(0 0% 50%)' }}>
          <span>✅ Acesso imediato</span>
          <span>♾ Acesso vitalício</span>
          <span>🛡 Garantia 7 dias</span>
        </div>

        {/* Guarantee */}
        <div className="w-full p-5 rounded-lg text-center mb-8" style={{ border: '1px solid hsl(43 80% 45% / 0.2)', background: 'hsl(0 0% 10%)' }}>
          <p className="text-sm font-body font-bold mb-2" style={{ color: 'hsl(43 80% 55%)' }}>🛡 Garantia de 7 dias, sem perguntas.</p>
          <p className="text-xs font-body leading-relaxed mb-2" style={{ color: 'hsl(0 0% 55%)' }}>
            Se perceber que o método não faz sentido para o seu caso nos primeiros 7 dias, basta solicitar o reembolso. Sem burocracia, sem questionamentos. O risco é todo nosso.
          </p>
          <p className="text-sm font-body font-semibold" style={{ color: 'hsl(43 80% 55%)' }}>
            Você não tem nada a perder, exceto os quilos que quer eliminar.
          </p>
        </div>

        <p className="text-xs font-body text-center mb-8" style={{ color: 'hsl(0 0% 40%)' }}>
          Acesso imediato após confirmação · Garantia de 7 dias
        </p>

        <GoldDivider />

        {/* Social Proof */}
        <div className="w-full mb-10">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-2" style={{ color: 'hsl(43 80% 55%)' }}>
            Resultados Reais
          </p>
          <p className="text-base font-display text-center mb-6" style={{ color: 'hsl(0 0% 90%)' }}>
            Transformações de quem já passou pelo método.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={antes} alt="Antes" className="w-full h-80 object-cover" />
              <p className="text-[10px] font-body text-center py-1.5 uppercase tracking-widest" style={{ color: 'hsl(43 80% 55% / 0.6)', background: 'hsl(0 0% 10%)' }}>Antes</p>
            </div>
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={depois} alt="Depois" className="w-full h-80 object-cover" />
              <p className="text-[10px] font-body text-center py-1.5 uppercase tracking-widest" style={{ color: 'hsl(43 80% 55% / 0.6)', background: 'hsl(0 0% 10%)' }}>Depois</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={resultTestimonial} alt="Depoimento" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={resultBeforeAfter} alt="Antes e Depois" className="w-full h-48 object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={resultScale} alt="Resultado balança" className="w-full h-90 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={resultBelly} alt="Resultado barriga" className="w-full h-90 object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={resultGraph} alt="Resultado na balança" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden gold-glow" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <img src={resultShorts} alt="Roupas folgadas" className="w-full h-80 object-cover" />
            </div>
          </div>

          <div className="rounded-lg overflow-hidden gold-glow mb-4" style={{ border: '1px solid hsl(0 0% 18%)' }}>
            <img src={resultWeightChart} alt="Transformação corporal" className="w-full max-h-80 object-cover" />
          </div>

          <GoldCTA text="Quero iniciar minha Reprogramação agora →" />
        </div>

        <GoldDivider />

        {/* FAQ */}
        <div className="w-full mb-10">
          <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-6" style={{ color: 'hsl(43 80% 55%)' }}>
            Perguntas Frequentes
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} style={{ borderColor: 'hsl(0 0% 18%)' }}>
                <AccordionTrigger className="text-sm font-body text-left py-4 hover:no-underline" style={{ color: 'hsl(0 0% 90%)' }}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-body leading-relaxed pb-4" style={{ color: 'hsl(0 0% 55%)' }}>
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="w-full mb-3">
          <GoldCTA text="Quero iniciar minha Reprogramação agora →" />
        </div>
        <p className="text-xs font-body text-center mb-8" style={{ color: 'hsl(0 0% 40%)' }}>
          Acesso imediato após confirmação · Garantia de 7 dias
        </p>

        {/* Footer */}
        <div className="text-center mt-8">
          <GoldDivider />
          <p className="text-xs font-body tracking-[0.2em] uppercase mb-2" style={{ color: 'hsl(43 80% 55% / 0.6)' }}>
            Método Reprograme
          </p>
          <p className="text-[10px] font-body" style={{ color: 'hsl(0 0% 35%)' }}>
            © Todos os direitos reservados.
          </p>
          <p className="text-[9px] font-body mt-1" style={{ color: 'hsl(0 0% 28%)' }}>
            *Os resultados apresentados são individuais e podem variar conforme o caso de cada paciente.
          </p>
        </div>
      </div >
    </div>
  );
};

export default ResultFinalLowTicket;
