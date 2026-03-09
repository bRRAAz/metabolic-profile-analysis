import logo from "@/assets/logo-bruna-vieira.png";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 animate-fade-in">
      <img src={logo} alt="Bruna Vieira Nutricionista" className="w-44 md:w-56 mb-8 opacity-90" />

      <div className="w-12 h-px bg-primary/30 mb-6" />

      <div className="max-w-lg text-center mb-6">
        <h1 className="text-xl md:text-2xl font-display text-foreground leading-relaxed">
          Seu metabolismo pode estar bloqueado
        </h1>
        <p className="text-sm md:text-base font-body text-muted-foreground mt-2 leading-relaxed">
          — e a maioria das mulheres só percebe depois de anos tentando emagrecer.
        </p>
      </div>

      <p className="text-sm font-body text-muted-foreground/80 text-center max-w-sm mb-10 leading-relaxed">
        Esse teste identifica os principais padrões metabólicos que dificultam o emagrecimento em mulheres.
      </p>

      <button
        onClick={onStart}
        className="font-body text-xs md:text-sm tracking-[0.15em] uppercase px-8 py-4 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
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
