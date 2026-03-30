import { ResultProfile } from "@/data/quizData";
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
//import videoLink from "@/assets/VSL_3.mp4";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ResultFinalQualifiedProps {
  profile: ResultProfile;
}

const WHATSAPP_LINK = "https://wa.me/5511992923276?text=Olá!%20Acabei%20de%20fazer%20o%20diagnóstico%20metabólico%20e%20quero%20furar%20a%20fila%20para%20iniciar%20minha%20Reprogramação%20Metabólica!";
const videoLink = "https://www.youtube.com/embed/8n9j3ZsQeXo";
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

const GoldDotsDecor = () => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="w-12 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%))' }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(43 80% 55%)' }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(43 80% 55%)' }} />
    <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(43 80% 55%)' }} />
    <div className="w-12 h-px" style={{ background: 'linear-gradient(270deg, transparent, hsl(43 80% 55%))' }} />
  </div>
);

const GoldCTA = ({ text, href }: { text: string; href: string }) => (
  <a
    href={href}
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

const ResultFinalQualified = ({ profile }: ResultFinalQualifiedProps) => {
  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in min-h-screen" style={{ background: 'hsl(0 0% 6%)', color: 'hsl(0 0% 90%)' }}>
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-8 opacity-90" />

      {/* Confirmation */}
      <div className="w-full p-6 rounded-lg text-center mb-6" style={{ border: '1px solid hsl(43 80% 45% / 0.3)', background: 'hsl(0 0% 10%)', boxShadow: '0 0 30px hsl(43 80% 45% / 0.08)' }}>
        <p className="text-xs font-body tracking-[0.25em] uppercase mb-2" style={{ color: 'hsl(0 0% 55%)' }}>
          Cadastro Confirmado
        </p>
        <span className="inline-block px-6 py-2 text-lg md:text-xl font-display font-bold rounded-full mb-4 animate-pulse-cta" style={{ background: 'hsl(43 80% 45% / 0.1)', color: 'hsl(43 80% 55%)', border: '1px solid hsl(43 80% 45% / 0.3)' }}>
          🎉 Parabéns!
        </span>
        <h2 className="text-xl md:text-2xl font-display leading-snug mb-3" style={{ color: 'hsl(0 0% 95%)' }}>
          Seu perfil foi selecionado para avançar.
        </h2>
        <p className="text-sm font-body leading-relaxed" style={{ color: 'hsl(0 0% 60%)' }}>
          Nossa equipe vai entrar em contato pelo WhatsApp para apresentar os próximos passos da sua Reprogramação Metabólica. Fique de olho no celular.
        </p>
      </div>

      <p className="text-sm font-body text-center mb-3" style={{ color: 'hsl(0 0% 55%)' }}>
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
        className="text-xs font-body underline transition-colors mb-8"
        style={{ color: 'hsl(43 80% 55% / 0.8)' }}
      >
        Pular a fila e falar no WhatsApp
      </a>

      <GoldDivider />

      {/* Steps section */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-2" style={{ color: 'hsl(43 80% 55%)' }}>
          Enquanto Aguarda
        </p>
        <p className="text-sm font-body text-center mb-8" style={{ color: 'hsl(0 0% 55%)' }}>
          Seu acesso está sendo preparado. Siga os 3 passos abaixo para aproveitar melhor a próxima etapa.
        </p>

        {/* Step 1 */}
        <div className="p-5 rounded-lg mb-4" style={{ background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 18%)' }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-xl font-bold" style={{ color: 'hsl(43 80% 55%)' }}>01</span>
            <h4 className="text-sm font-body font-semibold" style={{ color: 'hsl(0 0% 92%)' }}>Fique atento ao seu celular</h4>
          </div>
          <p className="text-xs font-body leading-relaxed" style={{ color: 'hsl(0 0% 55%)' }}>
            Nossa equipe pode entrar em contato via WhatsApp ou ligação para orientar sobre a próxima etapa. Se receber uma ligação de número desconhecido, atenda — pode ser alguém do nosso time.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-5 rounded-lg mb-4" style={{ background: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 18%)' }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-xl font-bold" style={{ color: 'hsl(43 80% 55%)' }}>02</span>
            <h4 className="text-sm font-body font-semibold" style={{ color: 'hsl(0 0% 92%)' }}>Assista este conteúdo</h4>
          </div>
          <p className="text-xs font-body leading-relaxed mb-3" style={{ color: 'hsl(0 0% 55%)' }}>
            Separei um conteúdo explicando por que muitas mulheres não conseguem emagrecer mesmo fazendo dieta, como o metabolismo entra em modo de adaptação e quais são os pilares fundamentais da Reprogramação Metabólica.
          </p>
          {videoLink ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden" style={{ border: '1px solid hsl(0 0% 18%)' }}>
              <iframe src={videoLink} className="w-full h-full" allowFullScreen />
            </div>
          ) : (
            <div className="aspect-video w-full rounded-lg flex items-center justify-center" style={{ border: '1px solid hsl(0 0% 18%)', background: 'hsl(0 0% 8%)' }}>
              <p className="text-xs font-body" style={{ color: 'hsl(0 0% 35%)' }}>Vídeo em breve</p>
            </div>
          )}
        </div>

        {/* Step 3 - Premium CTA block */}
        <div className="p-6 rounded-xl mb-4" style={{ background: 'hsl(0 0% 10%)', border: '2px solid hsl(43 80% 45% / 0.3)', boxShadow: '0 0 40px hsl(43 80% 45% / 0.08)' }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-xl font-bold" style={{ color: 'hsl(43 80% 55%)' }}>03</span>
            <h4 className="text-sm font-body font-semibold" style={{ color: 'hsl(0 0% 92%)' }}>Quer pular a fila?</h4>
          </div>
          <p className="text-xs font-body leading-relaxed mb-4" style={{ color: 'hsl(0 0% 60%)' }}>
            Somente nesta página você pode entrar em contato direto com nossa equipe antes de esperarmos o contato. Se quiser entender agora como funciona a Reprogramação Metabólica para o seu caso, clique abaixo.
          </p>
          <GoldCTA text="Quero pular a fila →" href={WHATSAPP_LINK} />
          <p className="text-xs font-body text-center mt-3" style={{ color: 'hsl(0 0% 40%)' }}>
            Sessão gratuita · Sem compromisso · Vagas limitadas
          </p>
        </div>
      </div>

      <GoldDivider />

      {/* Social Proof */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-center mb-2" style={{ color: 'hsl(43 80% 55%)' }}>
          Resultados Reais
        </p>
        <p className="text-base font-display text-center mb-6" style={{ color: 'hsl(0 0% 90%)' }}>
          Veja o que outras mulheres estão conquistando.
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

        <GoldCTA text="Quero pular a fila →" href={WHATSAPP_LINK} />
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

      <div className="w-full mb-8">
        <GoldCTA text="Quero pular a fila →" href={WHATSAPP_LINK} />
        <p className="text-xs font-body text-center mt-3" style={{ color: 'hsl(0 0% 40%)' }}>
          Sessão gratuita · Sem compromisso
        </p>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <GoldDivider />
        <p className="text-xs font-body tracking-[0.2em] uppercase mb-2" style={{ color: 'hsl(43 80% 55% / 0.6)' }}>
          Reprogramação Metabólica
        </p>
        <p className="text-[10px] font-body" style={{ color: 'hsl(0 0% 35%)' }}>
          © Todos os direitos reservados.
        </p>
        <p className="text-[9px] font-body mt-1" style={{ color: 'hsl(0 0% 28%)' }}>
          *Os resultados apresentados são individuais e podem variar conforme o caso de cada paciente.
        </p>
      </div>
    </div>
  );
};

export default ResultFinalQualified;
