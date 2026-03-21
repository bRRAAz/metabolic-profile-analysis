import { ResultProfile, resultData } from "@/data/quizData";
import logo from "@/assets/logo-bruna-vieira.png";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";
import antesDepois from "@/assets/resultado-antes-depois.jpg";
import TabelaAntesDepois from "@/components/TabelaAntesDepois";
import TabelaPontosCegos from "@/components/TabelaPontosCegos";

interface QuizResultProps {
  profile: ResultProfile;
}

const GoldDivider = () => (
  <div className="w-16 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }} />
);

const SocialProof = () => (
  <div className="w-full mb-10 animate-fade-in">
    <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-6">
      Resultados reais de pacientes
    </p>
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="rounded-lg overflow-hidden border border-border gold-glow animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <img src={antes} alt="Antes do tratamento" className="w-full h-80 object-cover" />
        <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Antes</p>
      </div>
      <div className="rounded-lg overflow-hidden border border-border gold-glow animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        <img src={depois} alt="Depois do tratamento" className="w-full h-80 object-cover" />
        <p className="text-[10px] font-body text-primary/60 text-center py-1.5 uppercase tracking-widest bg-secondary">Depois</p>
      </div>
    </div>
    <div className="rounded-lg overflow-hidden border border-border gold-glow animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
      <img src={antesDepois} alt="Resultado da reprogramação metabólica" className="w-full h-64 object-cover" />
    </div>
  </div>
);

const FactorsSection = ({ factors }: { factors: { title: string; description: string }[] }) => (
  <div className="w-full mb-10 animate-fade-in">
    <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-6">
      Fatores identificados no seu perfil
    </p>
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
);

const QualifiedCTA = ({ data }: { data: typeof resultData.adaptativo }) => (
  <div className="w-full animate-fade-in">
    <div className="p-6 border border-primary/30 rounded-lg bg-primary/5 gold-glow mb-8">
      <div className="flex flex-col items-center gap-4">
        <span className="px-6 py-2.5 bg-primary/10 text-primary text-xs md:text-sm font-bold tracking-[0.25em] uppercase rounded-full animate-pulse-cta border border-primary/30">
          ✨ Parabéns! Seu perfil foi selecionado
        </span>
        <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
          Você apresenta perfil compatível para a <span className="font-semibold text-primary">Consulta Estratégica de Reprogramação Metabólica</span>.
        </p>
        <p className="text-sm font-body text-foreground/90 text-center leading-relaxed">
          Uma sessão individual, sem custo, onde analisamos profundamente o seu caso e estruturamos um plano personalizado.
        </p>
      </div>
    </div>

    <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-5">
      Nessa sessão eu vou
    </p>
    <div className="w-full border-t border-border/50 pt-5 mb-8">
      {data.sessionPoints.map((point, idx) => (
        <div key={idx} className="flex items-start gap-3 mb-3">
          <span className="text-primary mt-0.5 text-xs">✔</span>
          <p className="text-sm font-body text-foreground/80">{point}</p>
        </div>
      ))}
    </div>

    <p className="text-sm font-body text-muted-foreground text-center mb-2 leading-relaxed">
      Como acompanho um <span className="font-semibold text-primary">número reduzido de pacientes por ciclo</span>, a disponibilidade é limitada.
    </p>
    <p className="text-sm font-body text-foreground/90 text-center font-semibold mb-6">
      Se fizer sentido avançar, escolha seu horário abaixo.
    </p>

    <div className="flex flex-col items-center gap-3">
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-10 py-5 font-body text-sm md:text-base font-bold tracking-[0.15em] uppercase rounded-lg animate-pulse-cta transition-all duration-500 gold-cta-glow hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 70% 65%), hsl(43 80% 55%))',
          color: 'hsl(0 0% 5%)',
        }}
      >
        {data.cta}
      </a>
      <p className="text-xs font-body text-muted-foreground/60 text-center">
        Apenas alguns perfis são aprovados para essa etapa.
      </p>
    </div>
  </div>
);

const NonQualifiedCTA = ({ data }: { data: typeof resultData.nao_qualificada }) => (
  <div className="w-full animate-fade-in">
    <div className="p-6 border border-primary/30 rounded-lg bg-primary/5 gold-glow mb-8">
      <h3 className="text-lg md:text-xl font-display text-foreground text-center mb-4">
        Método Reprograme
      </h3>
      <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-2">
        O protocolo de 30 dias para reorganizar os pilares do seu metabolismo e voltar a ter resultados reais no emagrecimento.
      </p>
    </div>

    <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-5">
      O que você vai receber
    </p>

    <div className="w-full border-t border-border/50 pt-5 mb-6">
      {[
        "Planejamento alimentar estruturado — o que comer, quanto e quando",
        "Cardápio personalizado para o seu perfil metabólico",
        "Protocolo metabólico completo — sono, intestino e hidratação",
        "13 módulos gravados + desafios diários",
        "Receitas exclusivas pensadas para a reorganização metabólica",
        "Suporte individual durante todo o processo",
        "Acesso vitalício — sem prazo, sem pressão",
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 mb-3">
          <span className="text-primary mt-0.5 text-xs">✔</span>
          <p className="text-sm font-body text-foreground/80">{item}</p>
        </div>
      ))}
    </div>

    <div className="p-5 border border-primary/30 bg-primary/5 rounded-lg mb-6 gold-glow">
      <p className="text-xs font-body tracking-[0.2em] uppercase text-primary text-center font-bold mb-3">
        🎁 Bônus Exclusivo
      </p>
      <p className="text-sm font-body text-foreground text-center leading-relaxed font-semibold">
        Guia de Organização Metabólica
      </p>
      <p className="text-xs font-body text-muted-foreground text-center mt-1">
        Material complementar com estratégias práticas. Disponível apenas para quem iniciar agora.
      </p>
    </div>

    <div className="p-5 border border-border rounded-lg bg-secondary/50 mb-8 text-center">
      <p className="text-xs font-body text-muted-foreground line-through mb-1">De R$ 1.430</p>
      <p className="text-2xl font-display font-bold gold-gradient mb-1">R$ 296</p>
      <p className="text-xs font-body text-muted-foreground">ou em até 12x no cartão</p>
    </div>

    <div className="flex flex-col items-center gap-3">
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-10 py-5 font-body text-sm md:text-base font-bold tracking-[0.15em] uppercase rounded-lg animate-pulse-cta transition-all duration-500 gold-cta-glow hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 70% 65%), hsl(43 80% 55%))',
          color: 'hsl(0 0% 5%)',
        }}
      >
        {data.cta}
      </a>
      <div className="flex items-center justify-center gap-4 text-xs font-body text-muted-foreground">
        <span>✅ Acesso imediato</span>
        <span>♾ Acesso vitalício</span>
        <span>🛡 Garantia 7 dias</span>
      </div>
    </div>
  </div>
);

const QuizResult = ({ profile }: QuizResultProps) => {
  const data = resultData[profile];
  const isQualified = profile !== "nao_qualificada";

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-90 brightness-150" />

      <GoldDivider />

      {/* Title */}
      <p className="text-xs font-body tracking-[0.35em] uppercase text-primary mb-2">
        Seu Diagnóstico
      </p>
      <h2 className="text-2xl md:text-3xl font-display text-foreground text-center leading-snug mb-4">
        {data.title}
      </h2>

      {/* Profile label */}
      {isQualified && data.profileLabel && (
        <div className="mb-2">
          <span className="px-4 py-1.5 border border-primary/30 rounded-full text-xs font-body tracking-[0.2em] uppercase gold-gradient font-semibold">
            {data.profileLabel}
          </span>
        </div>
      )}
      {isQualified && data.profileSubtitle && (
        <p className="text-xs font-body text-muted-foreground mb-6 text-center">{data.profileSubtitle}</p>
      )}

      <GoldDivider />

      {/* Antes vs Depois table */}
      <div className="w-full mb-10 animate-fade-in">
        <TabelaAntesDepois />
      </div>

      {/* Text points */}
      <div className="w-full mb-8 space-y-3">
        {data.textPoints.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-primary/60 mt-1 text-[10px] shrink-0">●</span>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{point}</p>
          </div>
        ))}
      </div>

      {/* Social proof - after text, before factors */}
      <SocialProof />

      {/* Factors */}
      <FactorsSection factors={data.factors} />

      {/* Pontos Cegos table */}
      <div className="w-full mb-10 animate-fade-in">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-4">
          Análise personalizada do seu perfil metabólico
        </p>
        <TabelaPontosCegos />
      </div>

      <GoldDivider />

      {/* CTA section */}
      {isQualified ? <QualifiedCTA data={data} /> : <NonQualifiedCTA data={data} />}

      {/* Footer */}
      <div className="mt-16 text-center">
        <GoldDivider />
        <p className="text-[10px] font-body text-muted-foreground/40">
          © Reprogramação Metabólica. Todos os direitos reservados.
        </p>
        <p className="text-[9px] font-body text-muted-foreground/30 mt-1">
          *Os resultados apresentados são individuais e podem variar conforme o caso.
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
