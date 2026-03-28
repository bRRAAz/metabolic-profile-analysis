import resultado7kg from "@/assets/resultado-7kg.jpg";
import SectionTitle from "./SectionTitle";

interface SocialProofBlockProps {
  onContinue: () => void;
}

const SocialProofBlock = ({ onContinue }: SocialProofBlockProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 max-w-xl mx-auto animate-fade-in">
    <SectionTitle>Resultado Real</SectionTitle>

    <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-3">
      As mudanças começam nas primeiras semanas.
    </h2>

    <p className="text-sm font-body text-muted-foreground text-center mb-8">
      Resultados reais de paciente após iniciar a Reprogramação Metabólica.
    </p>

    <div className="w-full rounded-lg overflow-hidden border border-border gold-glow mb-10">
      <img src={resultado7kg} alt="Resultado: -7kg em 15 dias" className="w-full" />
    </div>

    <button
      onClick={onContinue}
      className="font-body text-sm tracking-[0.15em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
    >
      Continuar diagnóstico →
    </button>
  </div>
);

export default SocialProofBlock;
