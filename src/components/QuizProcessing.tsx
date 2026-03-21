import { useEffect, useState } from "react";
import logo from "@/assets/logo-bruna-vieira.png";

interface QuizProcessingProps {
  onComplete: () => void;
}

const QuizProcessing = ({ onComplete }: QuizProcessingProps) => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 60);

    const timer = setTimeout(() => setShowButton(true), 3500);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-80" />
      <div className="w-12 h-px bg-primary/30 mb-8" />

      <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-3">
        Identificando seu padrão metabólico…
      </p>

      <p className="text-sm font-body text-muted-foreground text-center mb-8 max-w-sm">
        Cruzando suas respostas com padrões observados em mulheres que passaram pela Reprogramação Metabólica.
      </p>

      <div className="w-full max-w-xs mb-6">
        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary/60 transition-all duration-200 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-body text-muted-foreground/60 text-center mt-2">
          {progress < 100 ? "Preparando seu diagnóstico…" : "Diagnóstico pronto!"}
        </p>
      </div>

      {showButton && (
        <button
          onClick={onComplete}
          className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 animate-fade-in mt-4"
        >
          Ver meu diagnóstico →
        </button>
      )}
    </div>
  );
};

export default QuizProcessing;
