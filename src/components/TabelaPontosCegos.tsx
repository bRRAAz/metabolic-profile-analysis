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
  <div className="w-full rounded-lg overflow-hidden border border-border/30 shadow-sm">
    {/* Header */}
    <div className="grid grid-cols-2">
      <div className="px-4 py-3 text-center" style={{ background: 'linear-gradient(135deg, hsl(15 80% 55%), hsl(30 90% 55%))' }}>
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-sm">⚠️</span>
          <span className="text-[10px] md:text-xs font-display font-bold text-white uppercase leading-tight">Se esses pontos cegos não forem ajustados</span>
        </div>
        <p className="text-[9px] md:text-[10px] font-body text-white/80">(quando a base metabólica continua desregulada)</p>
      </div>
      <div className="px-4 py-3 text-center" style={{ background: 'linear-gradient(135deg, hsl(120 50% 40%), hsl(140 60% 45%))' }}>
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-sm">✅</span>
          <span className="text-[10px] md:text-xs font-display font-bold text-white uppercase leading-tight">Quando o metabolismo é reorganizado</span>
        </div>
        <p className="text-[9px] md:text-[10px] font-body text-white/80">(quando o metabolismo é reprogramado estrategicamente)</p>
      </div>
    </div>

    {/* VS divider */}
    <div className="relative h-0">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-foreground text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
        VS
      </div>
    </div>

    {/* Rows */}
    {cegosItems.map((cego, idx) => (
      <div key={idx} className="grid grid-cols-2 border-t border-border/20">
        <div className="bg-[hsl(0_20%_96%)] px-4 py-3 flex items-start gap-2">
          <span className="text-destructive mt-0.5 text-xs font-bold">✕</span>
          <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{cego}</p>
        </div>
        <div className="bg-[hsl(120_20%_96%)] px-4 py-3 flex items-start gap-2">
          <span className="text-[hsl(140_50%_40%)] mt-0.5 text-xs">✔</span>
          <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{reorganizadoItems[idx]}</p>
        </div>
      </div>
    ))}

    {/* Extra row for 5th reorganizado item */}
    <div className="grid grid-cols-2 border-t border-border/20">
      <div className="bg-[hsl(0_20%_96%)] px-4 py-3">
        <p className="text-xs font-body text-muted-foreground leading-relaxed italic">
          O ponto mais importante é entender que isso não significa falta de esforço.
        </p>
      </div>
      <div className="bg-[hsl(120_20%_96%)] px-4 py-3 flex items-start gap-2">
        <span className="text-[hsl(140_50%_40%)] mt-0.5 text-xs">✔</span>
        <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{reorganizadoItems[4]}</p>
      </div>
    </div>

  </div>
);

export default TabelaPontosCegos;
