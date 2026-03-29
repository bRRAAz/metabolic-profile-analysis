import { ResultProfile } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";
const resultGraph = "/images/result-graph.jpeg";
const resultScale = "/images/result-scale.jpeg";
const resultBelly = "/images/result-belly.jpeg";
const resultShorts = "/images/result-shorts.jpeg";
const resultBeforeAfter = "/images/result-before-after.jpeg";
const resultTestimonial = "/images/result-testimonial.jpeg";
const resultWeightChart = "/images/result-weight-chart.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ResultFinalQualifiedProps {
  profile: ResultProfile;
}

const WHATSAPP_LINK = "https://wa.me/5500000000000"; // TODO: Replace with actual WhatsApp number
const VIDEO_LINK = ""; // TODO: Replace with actual video link

const faqItems = [
  {
    q: "Essa análise metabólica é realmente gratuita?",
    a: "Sim. Essa análise inicial é 100% gratuita e sem compromisso. O objetivo é entender melhor seu histórico e identificar possíveis padrões metabólicos que podem estar dificultando seu emagrecimento. A partir disso, mostramos quais caminhos podem ajudar você a reorganizar seu metabolismo.",
  },
  {
    q: "Como funciona a próxima etapa?",
    a: "Após essa análise inicial, nossa equipe pode entrar em contato para orientar os próximos passos dentro do processo de Reprogramação Metabólica.",
  },
  {
    q: "Se eu não puder no horário sugerido, posso remarcar?",
    a: "Sim. Caso precise ajustar o horário, basta avisar nossa equipe para reagendar.",
  },
  {
    q: "Quanto tempo dura essa conversa inicial?",
    a: "Normalmente entre 20 e 30 minutos, dependendo do seu caso e das dúvidas que surgirem.",
  },
  {
    q: "Preciso preparar algo antes?",
    a: "Não. Apenas esteja em um local tranquilo para conversar e tenha em mente suas principais dificuldades relacionadas ao emagrecimento.",
  },
  {
    q: "Vou receber alguma orientação prática?",
    a: "Sim. Durante a conversa você receberá direcionamentos iniciais sobre os possíveis fatores metabólicos envolvidos no seu caso.",
  },
];

const GoldDivider = () => (
  <div className="w-16 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }} />
);

const GoldCTA = ({ text, href }: { text: string; href: string }) => (
  <a
    href={href}
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

const ResultFinalQualified = ({ profile }: ResultFinalQualifiedProps) => {
  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-8 opacity-90" />

      {/* Confirmation */}
      <div className="w-full p-6 border border-primary/30 rounded-lg bg-primary/5 gold-glow text-center mb-6">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-muted-foreground mb-2">
          Cadastro Confirmado
        </p>
        <span className="inline-block px-6 py-2 bg-primary/10 text-primary text-lg md:text-xl font-display font-bold rounded-full border border-primary/30 mb-4 animate-pulse-cta">
          🎉 Parabéns!
        </span>
        <h2 className="text-xl md:text-2xl font-display text-foreground leading-snug mb-3">
          Seu perfil foi selecionado para avançar.
        </h2>
        <p className="text-sm font-body text-muted-foreground leading-relaxed">
          Nossa equipe vai entrar em contato pelo WhatsApp para apresentar os próximos passos da sua Reprogramação Metabólica. Fique de olho no celular.
        </p>
      </div>

      <p className="text-sm font-body text-muted-foreground text-center mb-3">
        Seu cadastro foi concluído. Em até 12 horas um consultor falará com você!
      </p>

      {/* Main CTA */}
      <div className="w-full mb-3">
        <GoldCTA text="Quero falar com o time agora →" href={WHATSAPP_LINK} />
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-body text-primary/80 underline hover:text-primary transition-colors mb-8"
      >
        Pular a fila e falar no WhatsApp
      </a>

      <GoldDivider />

      {/* Steps section */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-2">
          Enquanto Aguarda
        </p>
        <p className="text-sm font-body text-muted-foreground text-center mb-8">
          Seu acesso está sendo preparado. Siga os 3 passos abaixo para aproveitar melhor a próxima etapa.
        </p>

        {/* Step 1 */}
        <div className="p-5 border border-border rounded-lg bg-secondary/50 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary font-display text-xl font-bold">01</span>
            <h4 className="text-sm font-body font-semibold text-foreground">Fique atento ao seu celular</h4>
          </div>
          <p className="text-xs font-body text-muted-foreground leading-relaxed">
            Nossa equipe pode entrar em contato via WhatsApp ou ligação para orientar sobre a próxima etapa. Se receber uma ligação de número desconhecido, atenda — pode ser alguém do nosso time.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-5 border border-border rounded-lg bg-secondary/50 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary font-display text-xl font-bold">02</span>
            <h4 className="text-sm font-body font-semibold text-foreground">Assista este conteúdo</h4>
          </div>
          <p className="text-xs font-body text-muted-foreground leading-relaxed mb-3">
            Separei um conteúdo explicando por que muitas mulheres não conseguem emagrecer mesmo fazendo dieta, como o metabolismo entra em modo de adaptação e quais são os pilares fundamentais da Reprogramação Metabólica.
          </p>
          {VIDEO_LINK ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
              <iframe src={VIDEO_LINK} className="w-full h-full" allowFullScreen />
            </div>
          ) : (
            <div className="aspect-video w-full rounded-lg border border-border/50 bg-secondary flex items-center justify-center">
              <p className="text-xs font-body text-muted-foreground/50">Vídeo em breve</p>
            </div>
          )}
        </div>

        {/* Step 3 */}
        <div className="p-5 border border-primary/20 rounded-lg bg-primary/5 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary font-display text-xl font-bold">03</span>
            <h4 className="text-sm font-body font-semibold text-foreground">Quer pular a fila?</h4>
          </div>
          <p className="text-xs font-body text-muted-foreground leading-relaxed mb-3">
            Somente nesta página você pode entrar em contato direto com nossa equipe antes de esperarmos o contato. Se quiser entender agora como funciona a Reprogramação Metabólica para o seu caso, clique abaixo.
          </p>
          <GoldCTA text="Quero pular a fila →" href={WHATSAPP_LINK} />
        </div>
      </div>

      <GoldDivider />

      {/* Social Proof */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-2">
          Resultados Reais
        </p>
        <p className="text-base font-display text-foreground text-center mb-6">
          Veja o que outras mulheres estão conquistando.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={antes} alt="Antes" className="w-full h-64 object-cover" />
            <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Antes</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={depois} alt="Depois" className="w-full h-64 object-cover" />
            <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Depois</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-border gold-glow mb-4">
          <img src={resultBeforeAfter} alt="Antes e Depois" className="w-full object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultScale} alt="Resultado na balança" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultShorts} alt="Resultado - roupas folgadas" className="w-full h-64 object-cover" />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-border gold-glow mb-4">
          <img src={resultBelly} alt="Transformação corporal" className="w-full object-cover" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultGraph} alt="Gráfico de evolução" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={resultWeightChart} alt="Evolução de peso" className="w-full h-64 object-cover" />
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-primary/30 gold-glow mb-6">
          <img src={resultTestimonial} alt="Depoimento de paciente" className="w-full object-cover" />
        </div>

        <GoldCTA text="Quero pular a fila →" href={WHATSAPP_LINK} />
      </div>

      <GoldDivider />

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

      <div className="w-full mb-8">
        <GoldCTA text="Quero pular a fila →" href={WHATSAPP_LINK} />
        <p className="text-xs font-body text-muted-foreground/60 text-center mt-3">
          Sessão gratuita · Sem compromisso
        </p>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <GoldDivider />
        <p className="text-xs font-body tracking-[0.2em] uppercase text-primary/60 mb-2">
          Reprogramação Metabólica
        </p>
        <p className="text-[10px] font-body text-muted-foreground/40">
          © Todos os direitos reservados.
        </p>
        <p className="text-[9px] font-body text-muted-foreground/30 mt-1">
          *Os resultados apresentados são individuais e podem variar conforme o caso de cada paciente.
        </p>
      </div>
    </div>
  );
};

export default ResultFinalQualified;
