import { QuizBlock } from "@/data/quizData";

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
}: QuizQuestionProps) => {
  const question = block.questions[questionIndex];

  return (
    <div className="flex flex-col min-h-screen px-6 py-12 max-w-xl mx-auto animate-fade-in">
      {/* Progress */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
            {block.subtitle}
          </p>
          <p className="text-xs font-body text-muted-foreground/60">
            {currentQuestionGlobal} / {totalQuestions}
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
      <h2 className="text-xl md:text-2xl font-display text-foreground leading-relaxed mb-10">
        {question.text}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3 flex-1">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(question.id, idx)}
            className={`text-left px-5 py-4 border text-sm font-body transition-all duration-300 ${
              selectedAnswer === idx
                ? "border-primary/60 bg-primary/5 text-foreground"
                : "border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-border/50">
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

        <button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className={`text-xs font-body tracking-[0.2em] uppercase px-8 py-3 border transition-all duration-500 ${
            selectedAnswer !== undefined
              ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-border text-muted-foreground/40 cursor-not-allowed"
          }`}
        >
          {currentQuestionGlobal === totalQuestions ? "Ver Resultado" : "Próxima →"}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
