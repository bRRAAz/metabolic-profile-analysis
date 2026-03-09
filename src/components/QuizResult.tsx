import { ResultProfile, resultData } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";

interface QuizResultProps {
  profile: ResultProfile;
}

const profileLabel: Record<ResultProfile, string> = {
  adaptativo: "Padrão Adaptativo Restritivo",
  inflamatorio: "Padrão Inflamatório Funcional",
  desregulacao: "Padrão de Desregulação Hormonal / Comportamental",
  nao_qualificada: "",
};

const QuizResult = ({ profile }: QuizResultProps) => {
  const data = resultData[profile];

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-80" />

      <div className="w-12 h-px bg-primary/30 mb-8" />

      {profile !== "nao_qualificada" && (
        <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-2">
          Resultado da Análise
        </p>
      )}

      <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-2">
        Resultado da Análise
      </p>

      <p className="text-xs font-body tracking-[0.2em] uppercase text-primary/70 mb-8">
        {profileLabel[profile]}
      </p>

      <h2 className="text-2xl md:text-3xl font-display text-foreground text-center leading-snug mb-8">
        {data.title}
      </h2>

      <div className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-8 whitespace-pre-line">
        {data.text}
      </div>

      <div className="w-full border-t border-border/50 pt-6 mb-6">
        {data.bullets.map((bullet, idx) => (
          <div key={idx} className="flex items-start gap-3 mb-3">
            <span className="text-primary/50 mt-0.5 text-xs">✦</span>
            <p className="text-sm font-body text-foreground/80">{bullet}</p>
          </div>
        ))}
      </div>

      {data.afterBullets && (
        <div className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-10 whitespace-pre-line">
          {data.afterBullets}
        </div>
      )}

      {profile !== "nao_qualificada" && (
        <p className="text-xs font-body text-muted-foreground/60 text-center mb-4 italic">
          Como acompanho número reduzido de pacientes por ciclo, a disponibilidade é limitada. Se fizer sentido avançar, escolha seu horário abaixo.
        </p>
      )}

      {profile !== "nao_qualificada" && (
        <p className="text-xs font-body text-muted-foreground/50 text-center mb-8">
          Apenas alguns perfis são aprovados para essa etapa.
        </p>
      )}

      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 text-center"
      >
        {data.cta}
      </a>
    </div>
  );
};

export default QuizResult;
