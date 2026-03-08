import logo from "@/assets/logo-bruna-vieira.png";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-56 mb-12 opacity-90" />
      
      <div className="w-12 h-px bg-primary/30 mb-8" />
      
      <p className="text-xs font-body tracking-[0.35em] uppercase text-muted-foreground mb-4">
        Protocolo de Avaliação
      </p>
      
      <h1 className="text-3xl md:text-4xl font-display text-foreground text-center leading-tight mb-4">
        Análise de Perfil Metabólico
      </h1>
      
      <p className="text-base font-body text-muted-foreground text-center max-w-md mb-12 leading-relaxed">
        Descubra o que pode estar travando o seu metabolismo
      </p>

      <button
        onClick={onStart}
        className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
      >
        Iniciar Análise
      </button>

      <p className="text-xs font-body text-muted-foreground/60 mt-8">
        19 perguntas · Tempo estimado: 5 minutos
      </p>
    </div>
  );
};

export default QuizIntro;
