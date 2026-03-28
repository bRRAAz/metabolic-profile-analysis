import { ResultProfile, resultProfileData } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";

interface ResultSessionPointsProps {
  profile: ResultProfile;
  onContinue: () => void;
}

const GoldDivider = () => (
  <div className="w-16 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }} />
);

const ResultSessionPoints = ({ profile, onContinue }: ResultSessionPointsProps) => {
  const profileData = resultProfileData[profile as Exclude<ResultProfile, "nao_qualificada">];
  if (!profileData) return null;

  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-8 opacity-90" />

      <p className="text-xs font-body tracking-[0.35em] uppercase text-primary mb-2">
        Reprogramação Metabólica
      </p>

      <GoldDivider />

      <div className="w-full mb-8">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-4">
          Próximo passo recomendado
        </p>
        <div className="p-6 border border-primary/30 rounded-lg bg-primary/5 gold-glow mb-6">
          <p className="text-sm font-body text-foreground/90 text-center leading-relaxed mb-2">
            Você apresenta perfil compatível para a <span className="font-semibold text-primary">Consulta Estratégica de Reprogramação Metabólica</span>.
          </p>
          <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
            Uma sessão individual, sem custo, onde analisamos profundamente o seu caso e estruturamos um plano personalizado para restaurar sua resposta metabólica.
          </p>
        </div>

        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-5">
          Durante a sua consulta, nosso time especializado vai
        </p>
        <div className="space-y-4">
          {profileData.sessionPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-primary mt-0.5 text-xs">◆</span>
              <div>
                <p className="text-sm font-body text-foreground font-semibold">{point.title}</p>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GoldDivider />

      {/* CTA */}
      <button
        onClick={onContinue}
        className="w-full font-body text-sm md:text-base font-bold tracking-[0.15em] uppercase px-10 py-5 rounded-lg animate-pulse-cta transition-all duration-500 gold-cta-glow hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 70% 65%), hsl(43 80% 55%))',
          color: 'hsl(0 0% 5%)',
        }}
      >
        Quero minha consulta gratuita →
      </button>
      <p className="text-xs font-body text-muted-foreground/60 text-center mt-3">
        Sessão gratuita · Sem compromisso · Vagas limitadas por ciclo
      </p>
    </div>
  );
};

export default ResultSessionPoints;
