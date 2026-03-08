import { useEffect, useState } from "react";
import logo from "@/assets/logo-bruna-vieira.png";

interface QuizProcessingProps {
  onComplete: () => void;
}

const steps = [
  "Histórico de dietas e resposta metabólica",
  "Sinais funcionais do metabolismo (sono, intestino e energia)",
  "Impacto comportamental e emocional na alimentação",
];

const QuizProcessing = ({ onComplete }: QuizProcessingProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setCurrentStep(i + 1), (i + 1) * 1200));
    });
    timers.push(setTimeout(() => setShowButton(true), steps.length * 1200 + 800));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-80" />

      <div className="w-12 h-px bg-primary/30 mb-8" />

      <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-3">
        Estamos analisando suas respostas…
      </p>

      <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-10">
        Sua análise de perfil metabólico está sendo processada
      </h2>

      <p className="text-sm font-body text-muted-foreground text-center mb-8">
        com base em três fatores principais:
      </p>

      <div className="w-full max-w-md space-y-4 mb-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 transition-all duration-700 ${
              idx < currentStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="text-primary/60 mt-0.5 text-xs">✦</span>
            <p className="text-sm font-body text-foreground/80">{step}</p>
          </div>
        ))}
      </div>

      {showButton ? (
        <button
          onClick={onComplete}
          className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 animate-fade-in"
        >
          Ver meu diagnóstico metabólico
        </button>
      ) : (
        <p className="text-xs font-body text-muted-foreground/60 animate-pulse">
          Gerando seu diagnóstico metabólico…
        </p>
      )}
    </div>
  );
};

export default QuizProcessing;
