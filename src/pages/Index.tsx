import { useState, useCallback } from "react";
import { quizBlocks, calculateResult, ResultProfile } from "@/data/quizData";
import QuizIntro from "@/components/QuizIntro";
import QuizQuestion from "@/components/QuizQuestion";
import QuizProcessing from "@/components/QuizProcessing";
import QuizLeadForm from "@/components/QuizLeadForm";
import QuizResult from "@/components/QuizResult";

const allQuestions = quizBlocks.flatMap((b) => b.questions);
const totalQuestions = allQuestions.length;

const Index = () => {
  const [phase, setPhase] = useState<"intro" | "quiz" | "processing" | "leadForm" | "result">("intro");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [resultProfile, setResultProfile] = useState<ResultProfile>("nao_qualificada");

  const currentQuestion = allQuestions[currentIdx];
  const currentBlock = quizBlocks.find((b) =>
    b.questions.some((q) => q.id === currentQuestion?.id)
  )!;
  const questionIndexInBlock = currentBlock?.questions.findIndex(
    (q) => q.id === currentQuestion?.id
  ) ?? 0;

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const handleNext = useCallback(() => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      const profile = calculateResult(answers);
      setResultProfile(profile);
      setPhase("processing");
    }
  }, [currentIdx, answers]);

  const handlePrev = useCallback(() => {
    if (currentIdx > 0) setCurrentIdx((i) => i - 1);
  }, [currentIdx]);

  if (phase === "intro") {
    return <QuizIntro onStart={() => setPhase("quiz")} />;
  }

  if (phase === "processing") {
    return <QuizProcessing onComplete={() => setPhase("leadForm")} />;
  }

  if (phase === "leadForm") {
    return <QuizLeadForm answers={answers} onSubmit={(data) => { console.log("Lead data:", data); setPhase("result"); }} />;
  }

  if (phase === "result") {
    return <QuizResult profile={resultProfile} />;
  }

  return (
    <QuizQuestion
      block={currentBlock}
      questionIndex={questionIndexInBlock}
      currentQuestionGlobal={currentIdx + 1}
      totalQuestions={totalQuestions}
      selectedAnswer={answers[currentQuestion.id]}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onPrev={handlePrev}
      canGoBack={currentIdx > 0}
    />
  );
};

export default Index;
