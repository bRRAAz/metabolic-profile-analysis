import { useState, useCallback } from "react";
import { quizBlocks, calculateResult, ResultProfile, AUTHORITY_AFTER_INDEX, SOCIAL_PROOF_AFTER_INDEX } from "@/data/quizData";
import QuizQuestion from "@/components/QuizQuestion";
import AuthorityBlock from "@/components/AuthorityBlock";
import SocialProofBlock from "@/components/SocialProofBlock";
import QuizProcessing from "@/components/QuizProcessing";
import QuizLeadForm from "@/components/QuizLeadForm";
import QuizResult from "@/components/QuizResult";

const allQuestions = quizBlocks.flatMap((b) => b.questions);
const totalQuestions = allQuestions.length;

type Phase = "quiz" | "authority" | "socialProof" | "processing" | "leadForm" | "result";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("quiz");
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
    if (currentIdx >= totalQuestions - 1) {
      const profile = calculateResult(answers);
      setResultProfile(profile);
      setPhase("processing");
      return;
    }

    const nextIdx = currentIdx + 1;
    setCurrentIdx(nextIdx);

    // Check for interstitials AFTER advancing
    if (currentIdx === AUTHORITY_AFTER_INDEX) {
      setPhase("authority");
      return;
    }
    if (currentIdx === SOCIAL_PROOF_AFTER_INDEX) {
      setPhase("socialProof");
      return;
    }
  }, [currentIdx, answers]);

  const handlePrev = useCallback(() => {
    if (currentIdx > 0) setCurrentIdx((i) => i - 1);
  }, [currentIdx]);

  if (phase === "authority") {
    return <AuthorityBlock onContinue={() => setPhase("quiz")} />;
  }

  if (phase === "socialProof") {
    return <SocialProofBlock onContinue={() => setPhase("quiz")} />;
  }

  if (phase === "processing") {
    return <QuizProcessing onComplete={() => setPhase("leadForm")} />;
  }

  if (phase === "leadForm") {
    return (
      <QuizLeadForm
        answers={answers}
        onSubmit={() => setPhase("result")}
      />
    );
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
      showIntro={currentIdx === 0}
    />
  );
};

export default Index;
