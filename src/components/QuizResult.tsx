import { useState } from "react";
import { ResultProfile } from "@/data/quizData";
import ResultDiagnostic from "./ResultDiagnostic";
import ResultPostQuestion from "./ResultPostQuestion";
import ResultDecision from "./ResultDecision";
import ResultProcessing2 from "./ResultProcessing2";
import ResultSessionPoints from "./ResultSessionPoints";
import ResultFinalQualified from "./ResultFinalQualified";
import ResultFinalLowTicket from "./ResultFinalLowTicket";

type Phase = "diagnostic" | "q18" | "q19" | "decision" | "sessionPoints" | "processing2" | "final";

interface QuizResultProps {
  profile: ResultProfile;
}

const QuizResult = ({ profile }: QuizResultProps) => {
  const [phase, setPhase] = useState<Phase>("diagnostic");
  const isQualified = profile !== "nao_qualificada";

  const q18Data = isQualified
    ? {
        question: "Se você descobrir exatamente o que está bloqueando seu metabolismo e receber um plano para corrigir isso… isso faria diferença para você?",
        options: ["Sim, definitivamente faria", "Com certeza — é o que estou precisando", "Acho que sim, quero entender melhor"],
      }
    : {
        question: "Se existisse um plano claro para reorganizar seu metabolismo nos próximos 30 dias, você estaria disposta a começar agora?",
        options: ["Sim, quero começar", "Quero entender melhor", "Ainda estou avaliando"],
      };

  const q19Data = {
    question: "Se nos próximos 30 dias seu corpo começasse a responder… o que mudaria na sua vida?",
    options: ["Minha autoestima e confiança", "Minha saúde e qualidade de vida", "Minha relação com a alimentação", "Minha confiança e disposição diária"],
  };

  switch (phase) {
    case "diagnostic":
      return <ResultDiagnostic profile={profile} onContinue={() => setPhase("q18")} />;
    case "q18":
      return <ResultPostQuestion {...q18Data} onAnswer={() => setPhase("q19")} />;
    case "q19":
      return <ResultPostQuestion {...q19Data} onAnswer={() => setPhase("decision")} />;
    case "decision":
      return <ResultDecision profile={profile} onContinue={() => setPhase("processing2")} />;
    case "processing2":
      return <ResultProcessing2 onComplete={() => setPhase("final")} />;
    case "final":
      return isQualified ? <ResultFinalQualified profile={profile} /> : <ResultFinalLowTicket />;
  }
};

export default QuizResult;
