import { useEffect, useState } from "react";

interface ResultProcessing2Props {
  isQualified?: boolean;
  onComplete: () => void;
}

const ResultProcessing2 = ({ isQualified = true, onComplete }: ResultProcessing2Props) => {
  const [progress, setProgress] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1;
      });
    }, 50);

    const warningTimer = setTimeout(() => setShowWarning(true), 3000);
    const completeTimer = setTimeout(() => onComplete(), 5500);

    return () => {
      clearInterval(interval);
      clearTimeout(warningTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-6">
        {isQualified ? "Separando vaga na agenda para você" : "Preparando sua próxima etapa"}
      </p>

      <div className="w-full max-w-xs mb-4">
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-200 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, hsl(43 80% 55%), hsl(43 70% 65%))',
            }}
          />
        </div>
        <p className="text-xs font-body text-muted-foreground/60 text-center mt-2">
          {progress}%
        </p>
      </div>

      {showWarning && (
        <div className="mt-8 p-6 border border-primary/30 rounded-lg bg-primary/5 max-w-sm animate-fade-in text-center">
          <p className="text-sm font-body text-primary font-bold mb-2">⚠ Atenção</p>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-2">
            A Reprogramação Metabólica acompanha um <span className="font-semibold text-primary">número limitado de mulheres por ciclo</span>.
          </p>
          <p className="text-sm font-body text-foreground/80 leading-relaxed mb-2">
            Se você chegou até aqui, seu perfil tem potencial para avançar.
          </p>
          <p className="text-sm font-body text-foreground font-semibold">
            Não deixe para depois.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultProcessing2;
