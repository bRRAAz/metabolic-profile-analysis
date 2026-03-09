import { useState } from "react";
import logo from "@/assets/logo-bruna-vieira.png";

interface QuizLeadFormProps {
  onSubmit: (data: { name: string; phone: string; email: string }) => void;
}

const QuizLeadForm = ({ onSubmit }: QuizLeadFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = name.trim() && phone.trim() && email.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);

    // ============================================================
    // TODO: Integração com Brevo (ou outro CRM)
    // Descomente e ajuste o código abaixo para enviar os dados.
    //
    // try {
    //   const response = await fetch("https://api.brevo.com/v3/contacts", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "api-key": "SUA_API_KEY_AQUI",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       attributes: {
    //         FIRSTNAME: name,
    //         PHONE: phone,
    //       },
    //       listIds: [2], // ID da lista no Brevo
    //       updateEnabled: true,
    //     }),
    //   });
    //   if (!response.ok) throw new Error("Erro ao enviar para Brevo");
    // } catch (error) {
    //   console.error("Erro na integração Brevo:", error);
    // }
    // ============================================================

    onSubmit({ name, phone, email });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-40 mb-10 opacity-80" />

      <div className="w-12 h-px bg-primary/30 mb-8" />

      <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-3">
        Último passo
      </p>

      <h2 className="text-xl md:text-2xl font-display text-foreground text-center leading-snug mb-4">
        Preencha seus dados para ver o resultado
      </h2>

      <p className="text-sm font-body text-muted-foreground text-center mb-10 max-w-sm">
        Seus dados serão usados apenas para enviar o seu diagnóstico personalizado.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">
            Nome
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            className="w-full px-4 py-3 border border-border bg-background text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">
            Telefone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className="w-full px-4 py-3 border border-border bg-background text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
          />
        </div>

        <div>
          <label className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full px-4 py-3 border border-border bg-background text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={!isValid || loading}
          className={`w-full font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border transition-all duration-500 mt-6 ${
            isValid && !loading
              ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-border text-muted-foreground/40 cursor-not-allowed"
          }`}
        >
          {loading ? "Enviando…" : "Ver meu resultado"}
        </button>
      </form>
    </div>
  );
};

export default QuizLeadForm;
