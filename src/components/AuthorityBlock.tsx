import blocoAutoridade from "@/assets/bloco-autoridade.png";
import SectionTitle from "./SectionTitle";

interface AuthorityBlockProps {
  onContinue: () => void;
}

const AuthorityBlock = ({ onContinue }: AuthorityBlockProps) => (
  <div className="flex flex-col items-center min-h-screen px-6 py-12 max-w-xl mx-auto animate-fade-in">
    <SectionTitle className="mb-4">Por que isso acontece</SectionTitle>

    <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-2">
      Não é falta de força de vontade.
    </h2>
    <p className="text-lg md:text-xl font-display text-primary text-center mb-8">
      É biologia.
    </p>

    <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-8">
      Pesquisas em metabolismo feminino mostram que mulheres que passaram por ciclos repetidos de dieta desenvolvem um mecanismo chamado <span className="text-foreground font-semibold">adaptação metabólica</span> — onde o corpo literalmente aprende a resistir ao emagrecimento como forma de proteção.
    </p>

    <div className="w-full rounded-lg overflow-hidden border border-border gold-glow mb-8">
      <img src={blocoAutoridade} alt="Estudo sobre desregulações metabólicas" className="w-full" />
    </div>

    <div className="w-full space-y-3 mb-8">
      {[
        "Qualidade e quantidade de sono",
        "Funcionamento intestinal",
        "Inflamação metabólica silenciosa",
        "Histórico de dietas restritivas",
      ].map((item, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <span className="text-primary mt-0.5 text-xs">✦</span>
          <p className="text-sm font-body text-foreground/80">{item}</p>
        </div>
      ))}
    </div>

    <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-10">
      Quando esses pilares são reorganizados, o metabolismo volta a trabalhar <span className="text-primary font-semibold">a favor do emagrecimento</span>.
    </p>

    <button
      onClick={onContinue}
      className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
    >
      Continuar diagnóstico →
    </button>
  </div>
);

export default AuthorityBlock;
