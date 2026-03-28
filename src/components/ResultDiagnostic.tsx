import { ResultProfile, resultProfileData, lowTicketFactors } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";
import TabelaAntesDepois from "./TabelaAntesDepois";
import SectionTitle from "./SectionTitle";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";

interface ResultDiagnosticProps {
  profile: ResultProfile;
  onContinue: () => void;
}

const GoldDivider = () => (
  <div className="w-16 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }} />
);

const painItems = [
  "Ciclos repetidos de dieta e reganho de peso",
  "Sensação de que o metabolismo não responde",
  "Inchaço, fadiga e descontrole alimentar",
  "Frustração constante com o próprio corpo",
];

const futureItems = [
  "Metabolismo voltando a responder",
  "Mais energia no dia a dia",
  "Melhora digestiva",
  "Emagrecimento mais consistente",
];

const ResultDiagnostic = ({ profile, onContinue }: ResultDiagnosticProps) => {
  const isQualified = profile !== "nao_qualificada";
  const profileData = isQualified ? resultProfileData[profile as Exclude<ResultProfile, "nao_qualificada">] : null;
  const factors = profileData?.factors ?? lowTicketFactors;

  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-90" />

      <GoldDivider />

      {/* Title */}
      <SectionTitle>Seu Diagnóstico</SectionTitle>
      <h2 className="text-2xl md:text-3xl font-display text-foreground text-center leading-snug mb-4">
        Encontramos o que está travando o seu emagrecimento.
      </h2>
      <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-8 max-w-md">
        Com base nas suas respostas, identificamos sinais de desorganização na base do seu metabolismo. Seu corpo provavelmente está em modo de adaptação — o que dificulta o emagrecimento mesmo quando você se esforça.
      </p>

      <GoldDivider />

      {/* Antes vs Depois */}
      <div className="w-full mb-10">
        <TabelaAntesDepois />
      </div>

      {/* Profile-specific analysis - only for qualified */}
      {isQualified && profileData && (
        <>
          <div className="w-full mb-10">
            <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-4">
              Análise Personalizada do seu Metabolismo
            </p>
            <div className="p-6 border border-primary/30 rounded-lg bg-primary/5 gold-glow">
              <h3 className="text-sm md:text-base font-display font-bold text-primary uppercase tracking-wider mb-1">
                {profileData.analysisTitle}
              </h3>
              <p className="text-xs font-body text-muted-foreground mb-4 italic">
                {profileData.analysisSubtitle}
              </p>
              <p className="text-sm font-body text-foreground/80 leading-relaxed">
                {profileData.analysisText}
              </p>
            </div>
          </div>
          <GoldDivider />
        </>
      )}

      {/* Factors */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-6">
          Fatores identificados no seu perfil
        </p>
        {!isQualified && (
          <p className="text-sm font-body text-muted-foreground text-center mb-6 leading-relaxed">
            A partir das respostas que você deu no diagnóstico, identificamos alguns fatores que podem estar dificultando seu emagrecimento.
          </p>
        )}
        <div className="space-y-4">
          {factors.map((factor, idx) => (
            <div key={idx} className="p-5 border border-border rounded-lg bg-secondary/50 gold-glow">
              <div className="flex items-start gap-3">
                <span className="text-primary font-display text-2xl font-bold mt-[-2px]">0{idx + 1}</span>
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">{factor.title}</h4>
                  <p className="text-xs font-body text-muted-foreground leading-relaxed">{factor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <GoldDivider />

      {/* Social proof images */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-6">
          Resultados reais de pacientes
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg overflow-hidden border border-border gold-glow animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <img src={antes} alt="Antes do tratamento" className="w-full h-80 object-cover" />
            <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Antes</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <img src={depois} alt="Depois do tratamento" className="w-full h-80 object-cover" />
            <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Depois</p>
          </div>
        </div>
      </div>


      {/* Pain section */}
      <div className="w-full mb-8">
        <p className="text-sm font-body text-foreground text-center font-semibold mb-5">
          Se você não ajustar esses pontos metabólicos, é comum continuar enfrentando:
        </p>
        <div className="space-y-3">
          {painItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/10">
              <span className="text-destructive mt-0.5 text-xs font-bold">✕</span>
              <p className="text-sm font-body text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Future vision */}
      <div className="w-full mb-10">
        <p className="text-sm font-body text-foreground text-center font-semibold mb-5">
          Quando o metabolismo é reorganizado estrategicamente, muitas mulheres passam a experimentar:
        </p>
        <div className="space-y-3">
          {futureItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-primary/10" style={{ background: 'hsl(43 80% 55% / 0.05)' }}>
              <span className="text-primary mt-0.5 text-xs">✔</span>
              <p className="text-sm font-body text-foreground/80">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onContinue}
        className="w-full font-body text-sm md:text-base font-bold tracking-[0.15em] uppercase px-10 py-5 rounded-lg animate-pulse-cta transition-all duration-500 gold-cta-glow hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 70% 65%), hsl(43 80% 55%))',
          color: 'hsl(0 0% 5%)',
        }}
      >
        Continuar minha análise →
      </button>
    </div>
  );
};

export default ResultDiagnostic;
