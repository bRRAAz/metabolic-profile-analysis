import { useState } from "react";
import logo from "@/assets/logo-bruna-vieira.png";
import { quizBlocks, INCOME_QUESTION_ID } from "@/data/quizData";

interface QuizLeadFormProps {
  answers: Record<number, number>;
  onSubmit: (data: { name: string; phone: string; email: string }) => void;
}

const QuizLeadForm = ({ answers, onSubmit }: QuizLeadFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const isValid = name.trim() && phone.trim() && email.trim();

  const handleSubmitDev = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, phone, email });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);

    const incomeQuestion = quizBlocks.flatMap(b => b.questions).find(q => q.id === INCOME_QUESTION_ID);
    const selectedIdx = answers[INCOME_QUESTION_ID];
    const rendaMensal = incomeQuestion && selectedIdx !== undefined
      ? incomeQuestion.options[selectedIdx].text
      : "Não respondido";

    console.log("Dados do Lead:", { nome: name, email, telefone: phone, renda: rendaMensal });

    try {
      const response = await fetch("https://apiquiz.brunavieiranutri.com.br/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: name, email, telefone: phone, renda_mensal: rendaMensal }),
      });
      if (!response.ok) throw new Error("Erro ao salvar lead.");
      onSubmit({ name, phone, email });
    } catch (error) {
      console.error("Erro na integração:", error);
      alert("Houve um erro ao enviar seus dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-80" />
      <div className="w-12 h-px bg-primary/30 mb-8" />

      <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-3">
        Encontramos o padrão que pode estar bloqueando o seu metabolismo.
      </h2>

      <p className="text-sm font-body text-muted-foreground text-center mb-10 max-w-sm leading-relaxed">
        Ele é específico para o seu caso. Para onde enviamos sua análise completa?
      </p>

      <form onSubmit={handleSubmitDev} className="w-full max-w-sm space-y-4">
        <div>
          <label className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Nome</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo"
            className="w-full px-4 py-3 border border-border bg-background text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors" />
        </div>
        <div>
          <label className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">E-mail</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com"
            className="w-full px-4 py-3 border border-border bg-background text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors" />
        </div>
        <div>
          <label className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">WhatsApp</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} placeholder="(00) 00000-0000"
            className="w-full px-4 py-3 border border-border bg-background text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors" />
        </div>

        <button type="submit" disabled={!isValid || loading}
          className={`w-full font-body text-sm tracking-[0.15em] uppercase px-10 py-5 mt-6 rounded-lg transition-all duration-500 font-bold ${isValid && !loading
            ? "animate-pulse-cta gold-cta-glow hover:scale-[1.02]"
            : "border border-border text-muted-foreground/40 cursor-not-allowed"
            }`}
          style={isValid && !loading ? {
            background: 'linear-gradient(135deg, hsl(43 80% 55%), hsl(43 70% 65%), hsl(43 80% 55%))',
            color: 'hsl(0 0% 5%)',
          } : undefined}
        >
          {loading ? "Enviando…" : "Ver meu diagnóstico personalizado →"}
        </button>
      </form>

      <p className="text-xs font-body text-muted-foreground/50 mt-6 text-center">
        🔒 Seus dados são 100% seguros. Sem spam.
      </p>
    </div>
  );
};

export default QuizLeadForm;
