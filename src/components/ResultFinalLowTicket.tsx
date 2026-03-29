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
    desc: "O método fica disponível para sempre. Você pode voltar sempre que precisar revisar, ajustar ou recomeçar.",
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

const GoldCTA = ({ text }: { text: string }) => (
  <a
    href={PURCHASE_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full text-center px-10 py-5 font-body text-sm md:text-base font-bold tracking-[0.15em] uppercase rounded-lg animate-pulse-cta transition-all duration-500 gold-cta-glow hover:scale-[1.02]"
    style={{
      background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 70% 65%), hsl(43 80% 55%))',
      color: 'hsl(0 0% 5%)',
    }}
  >
    {text}
  </a>
);

const ResultFinalLowTicket = () => {
  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-8 opacity-90" />

      {/* Approval */}
      <div className="w-full p-6 border border-primary/30 rounded-lg bg-primary/5 gold-glow text-center mb-6">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-muted-foreground mb-2">
          Seu perfil foi aprovado
        </p>
        <span className="inline-block px-6 py-2 bg-primary/10 text-primary text-lg md:text-xl font-display font-bold rounded-full border border-primary/30 mb-4 animate-pulse-cta">
          🎉 Parabéns!
        </span>
        <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
          Com base no seu diagnóstico, este é o seu primeiro passo. A reorganização da base metabólica é o que vai fazer a diferença — e você pode iniciar agora.
        </p>
      </div>

      <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-6">
        Você poderia continuar tentando sozinha. Mais uma dieta, mais uma frustração, mais meses sem resultado. Ou pode <span className="text-primary font-semibold">reorganizar a base agora</span> — com um método criado para mulheres com o seu perfil.
      </p>

      <GoldDivider />

      {/* Method intro */}
      <div className="text-center mb-8">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary mb-2">Método</p>
        <h2 className="text-3xl font-display text-primary font-bold mb-2">REPROGRAME</h2>
        <p className="text-sm font-body text-muted-foreground leading-relaxed">
          O protocolo de 30 dias para reorganizar os pilares do seu metabolismo e voltar a ter resultados reais no emagrecimento.
        </p>
      </div>

      {/* Price comparison */}
      <div className="w-full mb-8">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-4">
          O que você pagaria contratando separado
        </p>
        <div className="space-y-2 mb-4">
          {priceItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-secondary/30">
              <p className="text-sm font-body text-foreground/80">{item.name}</p>
              <p className="text-base font-body font-semibold line-through" style={{ color: 'hsl(0 72% 50%)' }}>{item.price}</p>
            </div>
          ))}
          <div className="flex items-center justify-between p-4 border-2 border-foreground/20 rounded-lg bg-foreground/5">
            <p className="text-base font-body text-foreground font-bold">Total separado:</p>
            <p className="text-lg font-body font-bold line-through" style={{ color: 'hsl(0 72% 50%)' }}>R$ 1.430</p>
          </div>
        </div>
      </div>

      {/* Offer price */}
      <div className="w-full p-8 border-2 border-primary/40 rounded-xl bg-foreground text-center mb-8 gold-glow">
        <p className="text-sm font-body tracking-[0.25em] uppercase text-primary font-bold mb-3">
          ✨ Método Reprograme — Tudo incluso
        </p>
        <p className="text-xs font-body text-primary-foreground/60 mb-2">Acesso imediato + vitalício</p>
        <p className="text-lg font-body font-bold line-through mb-2" style={{ color: 'hsl(0 72% 55%)' }}>De R$ 1.430</p>
        <p className="text-xs font-body text-primary-foreground/60 mb-1">por apenas</p>
        <p className="text-5xl md:text-6xl font-display font-bold gold-gradient mb-2 animate-pulse-cta">R$ 296</p>
        <p className="text-sm font-body text-primary-foreground/50">ou em até 12x no cartão</p>
      </div>

      <GoldDivider />

      {/* Highlight features */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-6">
          O que faz a diferença
        </p>
        <div className="space-y-4">
          {highlightFeatures.map((feat, idx) => (
            <div key={idx} className="p-5 border border-border rounded-lg bg-secondary/50">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{feat.emoji}</span>
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">{feat.title}</h4>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Also included */}
      <div className="w-full mb-8">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-5">
          Também incluso
        </p>
        <div className="space-y-3">
          {includesItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-primary mt-0.5 text-xs">◆</span>
              <p className="text-sm font-body text-foreground/80 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bonus */}
      <div className="w-full p-5 border border-primary/30 bg-primary/5 rounded-lg mb-8 gold-glow">
        <p className="text-xs font-body tracking-[0.2em] uppercase text-primary text-center font-bold mb-2">
          🎁 Bônus Exclusivo
        </p>
        <p className="text-sm font-body text-foreground text-center font-semibold mb-1">
          Guia de Organização Metabólica
        </p>
        <p className="text-xs font-body text-muted-foreground text-center">
          Material complementar com estratégias práticas para aplicar o método com mais facilidade no dia a dia. Disponível apenas para quem iniciar agora.
        </p>
      </div>

      {/* Price + CTA */}
      <div className="w-full p-6 border-2 border-primary/40 rounded-xl bg-foreground text-center mb-6 gold-glow">
        <p className="text-base font-body font-bold line-through mb-1" style={{ color: 'hsl(0 72% 55%)' }}>De R$ 1.430</p>
        <p className="text-xs font-body text-primary-foreground/60 mb-1">por apenas</p>
        <p className="text-5xl md:text-6xl font-display font-bold gold-gradient mb-1 animate-pulse-cta">R$ 296</p>
        <p className="text-sm font-body text-primary-foreground/50">ou em até 12x no cartão</p>
      </div>

      <div className="w-full mb-3">
        <GoldCTA text="Quero iniciar minha Reprogramação agora →" />
      </div>
      <div className="flex items-center justify-center gap-4 text-xs font-body text-muted-foreground mb-2">
        <span>✅ Acesso imediato</span>
        <span>♾ Acesso vitalício</span>
        <span>🛡 Garantia 7 dias</span>
      </div>

      {/* Guarantee */}
      <div className="w-full p-5 border border-primary/20 rounded-lg bg-primary/5 text-center mb-8">
        <p className="text-sm font-body text-primary font-bold mb-2">🛡 Garantia de 7 dias, sem perguntas.</p>
        <p className="text-xs font-body text-muted-foreground leading-relaxed">
          Se perceber que o método não faz sentido para o seu caso nos primeiros 7 dias, basta solicitar o reembolso. Sem burocracia, sem questionamentos. O risco é todo nosso.
        </p>
      </div>

      <div className="w-full mb-3">
        <GoldCTA text="Quero iniciar minha Reprogramação agora →" />
      </div>
      <p className="text-xs font-body text-muted-foreground/60 text-center mb-8">
        Acesso imediato após confirmação · Garantia de 7 dias
      </p>

      <GoldDivider />

      {/* Social Proof */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-2">
          Resultados Reais
        </p>
        <p className="text-base font-display text-foreground text-center mb-6">
          Transformações de quem já passou pelo método.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={antes} alt="Antes" className="w-full h-80 object-cover" />
            <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Antes</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={depois} alt="Depois" className="w-full h-80 object-cover" />
            <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Depois</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultTestimonial} alt="Antes" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultBeforeAfter} alt="Depois" className="w-full h-48 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultScale} alt="Antes" className="w-full h-90 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultBelly} alt="Depois" className="w-full h-90 object-cover" />
          </div>
        </div>


        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultGraph} alt="Resultado na balança" className="w-full h-80 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultShorts} alt="Roupas folgadas" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-border gold-glow mb-4">
          <img src={resultWeightChart} alt="Transformação corporal" className="w-full max-h-80 object-cover" />
        </div>

        <GoldCTA text="Quero iniciar minha Reprogramação agora →" />
      </div>



      <GoldDivider />

      {/* FAQ */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-6">
          Perguntas Frequentes
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/50">
              <AccordionTrigger className="text-sm font-body text-foreground text-left py-4 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="w-full mb-3">
        <GoldCTA text="Quero iniciar minha Reprogramação agora →" />
      </div>
      <p className="text-xs font-body text-muted-foreground/60 text-center mb-8">
        Acesso imediato após confirmação · Garantia de 7 dias
      </p>

      {/* Footer */}
      <div className="text-center mt-8">
        <GoldDivider />
        <p className="text-xs font-body tracking-[0.2em] uppercase text-primary/60 mb-2">
          Método Reprograme
        </p>
        <p className="text-[10px] font-body text-muted-foreground/40">
          © Todos os direitos reservados.
        </p>
        <p className="text-[9px] font-body text-muted-foreground/30 mt-1">
          *Os resultados apresentados são individuais e podem variar conforme o caso de cada paciente.
        </p>
      </div>
    </div >
  );
};

export default ResultFinalLowTicket;
