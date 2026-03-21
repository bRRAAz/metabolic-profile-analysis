import { useState, useCallback } from "react";

interface ResultPostQuestionProps {
  question: string;
  options: string[];
  onAnswer: () => void;
}

const ResultPostQuestion = ({ question, options, onAnswer }: ResultPostQuestionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = useCallback((idx: number) => {
    setSelected(idx);
    setTimeout(() => onAnswer(), 500);
  }, [onAnswer]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 max-w-xl mx-auto animate-fade-in">
      <div className="w-12 h-px bg-primary/30 mb-8" />

      <h2 className="text-lg md:text-2xl font-display text-foreground text-center leading-relaxed mb-8">
        {question}
      </h2>

      <div className="w-full space-y-3">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`w-full text-left px-5 py-4 border text-sm font-body transition-all duration-300 rounded-sm ${
              selected === idx
                ? "bg-primary border-primary text-primary-foreground font-medium"
                : "bg-foreground border-foreground/80 text-background hover:border-primary/60"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResultPostQuestion;
