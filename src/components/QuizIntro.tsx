import logo from "@/assets/logo-bruna-vieira.png";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-56 mb-12 opacity-90" />

      <div className="w-12 h-px bg-primary/30 mb-8" />

      <h1 className="text-2xl md:text-3xl font-display text-foreground text-center leading-tight mb-6">
        Seu metabolismo pode estar bloqueado — e a maioria das mulheres só percebe depois de anos tentando emagrecer.
      </h1>

      <p className="text-base font-body text-muted-foreground text-center max-w-md mb-12 leading-relaxed">
        Esse teste identifica os principais padrões metabólicos que dificultam o emagrecimento em mulheres.
      </p>

      <button
        onClick={onStart}
        className="font-body text-sm tracking-[0.2em] uppercase px-10 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
      >
        Descobrir meu perfil metabólico
      </button>

      <p className="text-xs font-body text-muted-foreground/60 mt-8">
        Tempo estimado: 5 minutos
      </p>
    </div>
  );
};

export default QuizIntro;
