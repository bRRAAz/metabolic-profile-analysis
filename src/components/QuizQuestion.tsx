import { QuizBlock } from "@/data/quizData";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef, useCallback, useEffect } from "react";
import SectionTitle from "./SectionTitle";

interface QuizQuestionProps {
  block: QuizBlock;
  questionIndex: number;
  currentQuestionGlobal: number;
  totalQuestions: number;
  selectedAnswer: number | undefined;
  onAnswer: (questionId: number, optionIndex: number) => void;
  onNext: () => void;
  onPrev: () => void;
  canGoBack: boolean;
  showIntro?: boolean;
}

const QuizQuestion = ({
  block,
  questionIndex,
  currentQuestionGlobal,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrev,
  canGoBack,
  showIntro = false,
}: QuizQuestionProps) => {
  const question = block.questions[questionIndex];
  const isMobile = useIsMobile();
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onNextRef = useRef(onNext);

  useEffect(() => {
    onNextRef.current = onNext;
  }, [onNext]);

  const handleOptionClick = useCallback((idx: number) => {
    onAnswer(question.id, idx);
    if (isMobile) {
      if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = setTimeout(() => onNextRef.current(), 400);
    }
  }, [isMobile, onAnswer, question.id]);

  return (
    <div className="flex flex-col min-h-0 md:min-h-screen px-6 py-6 md:py-12 max-w-xl mx-auto animate-fade-in">
      {/* Intro header on first question */}
      {showIntro && (
        <div className="text-center mb-8">
          <SectionTitle>Reprogramação Metabólica</SectionTitle>
          <p className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Diagnóstico Metabólico Gratuito
          </p>
          <div className="w-12 h-px bg-primary/30 mx-auto mb-6" />
          <div className="w-full p-5 border border-primary/20 rounded-lg bg-primary/5 mb-2">
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-3">
              Existe apenas <span className="text-primary font-semibold">UM TIPO DE BLOQUEIO METABÓLICO</span> que impede muitas mulheres de emagrecer — mesmo fazendo dieta.
            </p>
            <p className="text-sm font-body text-foreground leading-relaxed">
              Em menos de 2 minutos, você vai descobrir o que pode estar impedindo seu corpo de responder ao emagrecimento.
            </p>
          </div>
          <div className="w-12 h-px bg-primary/30 mx-auto mt-4" />
        </div>
      )}

      {/* Progress */}
      <div className="mb-6 md:mb-10">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
            {block.subtitle}
          </p>
        </div>
        <div className="w-full h-px bg-border">
          <div
            className="h-px bg-primary/50 transition-all duration-700 ease-out"
            style={{ width: `${(currentQuestionGlobal / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg md:text-2xl font-display text-foreground leading-relaxed mb-6 md:mb-10">
        {question.text}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-2 md:gap-3 flex-1">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(idx)}
            className={`text-left px-4 py-3 md:px-5 md:py-4 border text-sm font-body transition-all duration-300 rounded-sm ${selectedAnswer === idx
              ? "bg-primary border-primary text-primary-foreground font-medium"
              : "bg-foreground border-foreground/80 text-background hover:border-primary/60"
              }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 md:mt-12 pt-4 md:pt-8 border-t border-border/50">
        {canGoBack ? (
          <button
            onClick={onPrev}
            className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Anterior
          </button>
        ) : (
          <div />
        )}
        {!isMobile && (
          <button
            onClick={onNext}
            disabled={selectedAnswer === undefined}
            className={`text-xs font-body tracking-[0.2em] uppercase px-8 py-3 border transition-all duration-500 ${selectedAnswer !== undefined
              ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-border text-muted-foreground/40 cursor-not-allowed"
              }`}
          >
            {currentQuestionGlobal === totalQuestions ? "Ver Resultado" : "Próxima →"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
