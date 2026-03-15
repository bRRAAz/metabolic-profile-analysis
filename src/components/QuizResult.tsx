import { ResultProfile, resultData } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";
import antesDepois from "@/assets/resultado-antes-depois.jpg";
import depoisResultado from "@/assets/resultado-emagrecer.jpeg";
import TabelaAntesDepois from "@/components/TabelaAntesDepois";
import TabelaPontosCegos from "@/components/TabelaPontosCegos";

interface QuizResultProps {
  profile: ResultProfile;
}

const profileLabel: Record<ResultProfile, string> = {
  adaptativo: "Padrão Adaptativo Restritivo",
  inflamatorio: "Padrão Inflamatório Funcional",
  desregulacao: "Padrão de Desregulação Hormonal / Comportamental",
  nao_qualificada: "",
};

const DiagnosticIntro = () => (
  <div className="w-full mb-10 animate-fade-in">
    <h3 className="text-lg md:text-xl font-display text-foreground text-center leading-snug mb-6">
      Seu diagnóstico personalizado: este é exatamente o ponto cego que impede muitas mulheres de emagrecer…
    </h3>
    <TabelaAntesDepois />
    <p className="text-sm font-body text-muted-foreground leading-relaxed text-center mt-4">
      Muitas mulheres passam anos tentando resolver isso com dietas ou estratégias isoladas, sem perceber que o metabolismo precisa primeiro <span className="font-semibold text-foreground">reorganizar a base metabólica</span>.
    </p>
  </div>
);

const AnalisePersonalizada = () => (
  <div className="w-full mb-10 animate-fade-in">
    <p className="text-xs font-body tracking-[0.25em] uppercase text-muted-foreground text-center mb-4">
      Análise personalizada do seu perfil metabólico
    </p>
    <p className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-6">
      Essa análise foi feita cruzando suas respostas com padrões observados em centenas de mulheres acompanhadas no processo de <span className="font-semibold text-foreground">Reprogramação Metabólica</span>. Por isso, o resultado mostra exatamente o que costuma acontecer quando a base metabólica não está organizada — e o que muda quando ela é reorganizada corretamente.
    </p>
    <TabelaPontosCegos />
  </div>
);

const MetodoRepragrameSection = () => (
  <div className="w-full mb-10 animate-fade-in">
    <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />

    <h3 className="text-lg md:text-xl font-display text-foreground text-center leading-snug mb-4">
      Método Reprograme
    </h3>
    <p className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-6">
      Isso significa que existe um caminho claro para reorganizar os pilares do seu metabolismo e destravar sua resposta ao emagrecimento.
    </p>
    <p className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-8">
      E foi exatamente para isso que desenvolvi o <span className="font-semibold text-foreground">Método Reprograme</span> — um protocolo estruturado que ajuda mulheres a reorganizar o metabolismo de forma estratégica e voltar a ter resultados no emagrecimento.
    </p>

    <p className="text-xs font-body tracking-[0.25em] uppercase text-muted-foreground text-center mb-5">
      Ao iniciar agora, você vai receber
    </p>

    <div className="w-full border-t border-border/50 pt-5 mb-6">
      {[
        "Planejamento alimentar estruturado para reprogramar seu metabolismo em 30 dias, sabendo o que comer, quando comer e a quantidade certa",
        "Cardápio exclusivo para facilitar a aplicação no dia a dia",
        "Protocolo metabólico para ajustar sono, intestino e hidratação — pilares fundamentais para o metabolismo voltar a responder",
        "Direcionamento prático para reorganizar sua relação com a alimentação",
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 mb-3">
          <span className="text-primary mt-0.5 text-xs">✔</span>
          <p className="text-sm font-body text-foreground/80">{item}</p>
        </div>
      ))}
    </div>

    <div className="mx-auto p-5 border border-accent/30 bg-accent/5 rounded-lg shadow-sm mb-6">
      <p className="text-xs font-body tracking-[0.2em] uppercase text-primary text-center font-bold mb-3">
        Bônus Especial
      </p>
      <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
        Ao iniciar somente <span className="font-semibold text-primary">AGORA</span>, você também recebe:
      </p>
      <p className="text-sm font-body text-foreground text-center leading-relaxed mt-2 font-semibold">
        🎁 1 Sessão exclusiva com a Dra. Bruna Vieira
      </p>
      <p className="text-xs font-body text-muted-foreground text-center mt-1">
        Um encontro estratégico para orientar sua aplicação do método e potencializar seus resultados.
      </p>
    </div>

    <p className="text-sm font-body text-muted-foreground leading-relaxed text-center mb-2">
      Seu diagnóstico mostrou que seu metabolismo precisa primeiro reorganizar a base metabólica antes de responder ao emagrecimento de forma consistente.
    </p>
    <p className="text-sm font-body text-foreground/90 leading-relaxed text-center font-semibold">
      E você pode iniciar esse processo agora mesmo.
    </p>
  </div>
);

const QuizResult = ({ profile }: QuizResultProps) => {
  const data = resultData[profile];
  const isQualified = profile !== "nao_qualificada";

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-80" />

      <div className="w-12 h-px bg-primary/30 mb-8" />

      {/* Diagnostic Intro - common to all */}
      <DiagnosticIntro />

      {/* Profile label for qualified */}
      {isQualified && (
        <>
          <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-2">
            Resultado da Análise
          </p>
          {profileLabel[profile] && (
            <p className="text-xs font-body tracking-[0.2em] uppercase text-primary/70 mb-8">
              {profileLabel[profile]}
            </p>
          )}
        </>
      )}

      <h2 className="text-2xl md:text-3xl font-display text-foreground text-center leading-snug mb-8">
        {data.title}
      </h2>

      <div className="w-full mb-8 space-y-3">
        {data.textPoints.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-primary/40 mt-1 text-[10px] shrink-0">●</span>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{point}</p>
          </div>
        ))}
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
        <div className="w-full mb-10 space-y-3">
          {data.afterBullets.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <span className="text-primary/40 mt-1 text-[10px] shrink-0">●</span>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      )}

      {/* Social proof section */}
      <div className="w-full mb-10">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-muted-foreground text-center mb-6">
          Resultados reais de pacientes que passaram pela Reprogramação Metabólica
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

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="rounded-lg overflow-hidden shadow-sm border border-border/30 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <img src={antesDepois} alt="Antes do tratamento" className="w-full h-72 object-cover" />

          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-border/30 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <img src={depoisResultado} alt="Depois do tratamento" className="w-full h-72 object-cover" />

          </div>
        </div>
      </div>

      {/* Análise Personalizada - common to all */}
      <AnalisePersonalizada />

      {/* Qualified: Parabéns block */}
      {isQualified && (
        <div className="mx-auto mb-10 p-6 border border-primary/20 bg-primary/[0.02] rounded-lg shadow-sm animate-fade-in">
          <div className="flex flex-col items-center gap-3">
            <span className="px-6 py-2 bg-primary/10 text-primary text-xs md:text-sm font-bold tracking-[0.25em] uppercase rounded-full animate-pulse-cta border border-primary/20">
              Parabéns! Seu perfil foi selecionado
            </span>
            <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
              Com base na sua análise metabólica, seu perfil apresentou compatibilidade com a próxima etapa da Reprogramação Metabólica.
            </p>
            <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
              Apenas alguns perfis avançam para essa fase, pois acompanho um
              <span className="font-semibold text-primary"> número reduzido de pacientes por ciclo</span>,
              garantindo um acompanhamento realmente personalizado.
            </p>
            <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
              Como o seu perfil se alinha à minha metodologia, você poderá agora avançar para a Consulta Estratégica.
            </p>
          </div>
        </div>
      )}

      {/* Non-qualified: Método Reprograme section */}
      {!isQualified && <MetodoRepragrameSection />}

      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
    /* Estrutura */
    inline-block px-10 py-4 text-center
    font-body text-sm font-bold tracking-[0.2em] uppercase 
    
    /* Cores de Alto Contraste (Ex: Verde) */
    bg-emerald-600 text-white
    shadow-[0_10px_20px_rgba(5,150,105,0.4)]
    
    /* Animação e Interação */
    animate-pulse-cta
    hover:bg-emerald-500 hover:shadow-lg
    transition-all duration-500
    rounded-sm
  "
      >
        {data.cta}
      </a>

      {!isQualified && (
        <p className="text-xs font-body text-muted-foreground/60 text-center mt-4">
          Acesso imediato após a confirmação da inscrição.
        </p>
      )}
    </div>
  );
};

export default QuizResult;
