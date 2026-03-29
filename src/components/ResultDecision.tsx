import { useState, useCallback } from "react";
import SectionTitle from "./SectionTitle";
import { ResultProfile } from "@/data/quizData";
import antes from "@/assets/resultado-antes.jpg";
import depois from "@/assets/resultado-depois.jpg";
import antesDepois from "@/assets/resultado-antes-depois.jpg";
import antesDepois2 from "@/assets/antesDepois2.jpeg";

interface ResultDecisionProps {
  profile: ResultProfile;
  onContinue: () => void;
}

const commitmentOptions = [
  { emoji: "🔥", text: "Sem sombra de dúvidas!" },
  { emoji: "✅", text: "Claro que sim!" },
  { emoji: "🙂", text: "Acho que sim" },
];

const ResultDecision = ({ profile, onContinue }: ResultDecisionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const isQualified = profile !== "nao_qualificada";

  const handleSelect = useCallback((idx: number) => {
    setSelected(idx);
    setTimeout(() => onContinue(), 600);
  }, [onContinue]);

  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-xl mx-auto animate-fade-in">
      <SectionTitle>{isQualified ? "Seu Diagnóstico" : "Próximo Passo"}</SectionTitle>

      {isQualified ? (
        <>
          <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-3">
            Com base em tudo que você respondeu, vou te mostrar como funciona a Reprogramação Metabólica.
          </h2>
          <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-8">
            O processo que ajuda mulheres com o seu perfil a reorganizar o metabolismo e voltar a ter resultados reais.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-3">
            Existe um caminho claro para reorganizar a base do seu metabolismo.
          </h2>
          <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-2">
            Foi exatamente para isso que desenvolvi um protocolo estruturado chamado:
          </p>
          <h3 className="text-2xl font-display text-primary font-bold mb-2">MÉTODO REPROGRAME</h3>
          <p className="text-sm font-body text-muted-foreground text-center leading-relaxed mb-8">
            O protocolo de 30 dias para reorganizar os pilares do seu metabolismo e voltar a ter resultados reais no emagrecimento.
          </p>
        </>
      )}

      {/* Result photos */}
      <div className="w-full mb-8">
        <p className="text-xs font-body tracking-[0.25em] uppercase text-primary text-center mb-4">
          Resultados de pacientes
        </p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={antes} alt="Antes" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={depois} alt="Depois" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="rounded-lg overflow-hidden border border-border gold-glow">
            <img src={antesDepois} alt="Antes" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden border border-border gold-glow bg-gray-100">
            <img
              src={antesDepois2}
              alt="Depois"
              className="w-full h-64 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-16 h-px mx-auto my-8" style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }} />

      {/* Commitment question */}
      <h3 className="text-lg md:text-xl font-display text-foreground text-center leading-relaxed mb-6">
        Você acredita que, com a orientação certa para reorganizar o seu metabolismo, seria capaz de finalmente destravar seu emagrecimento?
      </h3>

      <div className="w-full space-y-3">
        {commitmentOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left px-5 py-4 border text-sm font-body transition-all duration-300 rounded-lg flex items-center gap-3 ${selected === idx
              ? "border-primary/60 bg-primary/10 text-foreground"
              : "border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
              }`}
          >
            <span className="text-lg">{option.emoji}</span>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResultDecision;
