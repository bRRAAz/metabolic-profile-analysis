const cegosItems = [
  "Presas em ciclos repetidos de dieta e reganho de peso",
  'Sentindo que o metabolismo "travou"',
  "Inchaço, fadiga e descontrole alimentar",
  "Perdendo confiança no próprio corpo",
];

const reorganizadoItems = [
  "O corpo volta a responder ao emagrecimento",
  "O metabolismo recupera eficiência",
  "Energia mais estável e melhora no bem-estar",
  "Relação mais equilibrada com a alimentação",
  "Emagrecimento mais consistente e sustentável",
];

const TabelaPontosCegos = () => (
  <div className="w-full rounded-lg overflow-hidden border border-border shadow-sm gold-glow">
    <div className="grid grid-cols-2">
      <div className="px-4 py-3 text-center bg-destructive/10 border-b border-border">
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-sm">⚠️</span>
          <span className="text-[10px] md:text-xs font-display font-bold text-foreground uppercase leading-tight">Se esses pontos cegos não forem ajustados</span>
        </div>
        <p className="text-[9px] md:text-[10px] font-body text-muted-foreground">(quando a base metabólica continua desregulada)</p>
      </div>
      <div className="px-4 py-3 text-center border-b border-border" style={{ background: 'linear-gradient(135deg, hsl(43 80% 55% / 0.15), hsl(43 70% 70% / 0.1))' }}>
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-sm">✅</span>
          <span className="text-[10px] md:text-xs font-display font-bold text-primary uppercase leading-tight">Quando o metabolismo é reorganizado</span>
        </div>
        <p className="text-[9px] md:text-[10px] font-body text-muted-foreground">(quando o metabolismo é reprogramado estrategicamente)</p>
      </div>
    </div>

    <div className="relative h-0">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
        VS
      </div>
    </div>

    {cegosItems.map((cego, idx) => (
      <div key={idx} className="grid grid-cols-2 border-t border-border/50">
        <div className="bg-destructive/5 px-4 py-3 flex items-start gap-2">
          <span className="text-destructive mt-0.5 text-xs font-bold">✕</span>
          <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{cego}</p>
        </div>
        <div className="px-4 py-3 flex items-start gap-2" style={{ background: 'hsl(43 80% 55% / 0.05)' }}>
          <span className="text-primary mt-0.5 text-xs">✔</span>
          <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{reorganizadoItems[idx]}</p>
        </div>
      </div>
    ))}

    <div className="grid grid-cols-2 border-t border-border/50">
      <div className="bg-destructive/5 px-4 py-3">
        <p className="text-xs font-body text-muted-foreground leading-relaxed italic">
          O ponto mais importante é entender que isso não significa falta de esforço.
        </p>
      </div>
      <div className="px-4 py-3 flex items-start gap-2" style={{ background: 'hsl(43 80% 55% / 0.05)' }}>
        <span className="text-primary mt-0.5 text-xs">✔</span>
        <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{reorganizadoItems[4]}</p>
      </div>
    </div>
  </div>
);

export default TabelaPontosCegos;
