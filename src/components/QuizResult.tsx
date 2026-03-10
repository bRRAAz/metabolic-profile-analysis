import { ResultProfile, resultData } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";
import antesDepois from "@/assets/resultado-antes-depois.jpg";
import depoimento from "@/assets/resultado-depoimento.jpg";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";

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

      {profile !== "nao_qualificada" && profileLabel[profile] && (
        <p className="text-xs font-body tracking-[0.2em] uppercase text-primary/70 mb-8">
          {profileLabel[profile]}
        </p>
      )}

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

      {/* Social proof section */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-muted-foreground text-center mb-6">
          Resultados reais de pacientes
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="rounded-lg overflow-hidden shadow-sm border border-border/30 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <img src={antes} alt="Antes do tratamento" className="w-full h-72 object-cover" />
            <p className="text-[10px] font-body text-muted-foreground/60 text-center py-1.5 uppercase tracking-widest">Antes</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-border/30 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <img src={depois} alt="Depois do tratamento" className="w-full h-72 object-cover" />
            <p className="text-[10px] font-body text-muted-foreground/60 text-center py-1.5 uppercase tracking-widest">Depois</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-sm border border-border/30 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <img src={depoimento} alt="Depoimento de paciente" className="w-full h-64 object-cover" />
        </div>
      </div>

      {data.afterBullets && (
        <div className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-10 whitespace-pre-line">
          {data.afterBullets}
        </div>
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
