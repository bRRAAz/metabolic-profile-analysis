const antesItems = [
  "dificuldade para emagrecer mesmo tentando dieta",
  "sensação de que o metabolismo não responde",
  "oscilações de energia ao longo do dia",
  "episódios de descontrole alimentar ou compulsão",
  "inchaço, retenção ou intestino irregular",
  "frustração constante com o próprio corpo",
];

const depoisItems = [
  "metabolismo volta a responder ao emagrecimento",
  "energia mais estável ao longo do dia",
  "redução de inchaço e melhora digestiva",
  "relação mais equilibrada com a alimentação",
  "perda de peso mais consistente e sustentável",
  "mais confiança no próprio corpo",
];

const TabelaAntesDepois = () => (
  <div className="w-full rounded-lg overflow-hidden border border-border/30 shadow-sm">
    {/* Header */}
    <div className="grid grid-cols-2">
      <div className="bg-[hsl(0_30%_92%)] px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-base">⚠️</span>
          <span className="text-sm md:text-base font-display font-bold text-foreground tracking-wide uppercase">Antes</span>
        </div>
        <p className="text-[10px] md:text-xs font-body text-muted-foreground">(quando o metabolismo está desregulado)</p>
      </div>
      <div className="bg-[hsl(120_30%_92%)] px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-0.5">
          <span className="text-base">✅</span>
          <span className="text-sm md:text-base font-display font-bold text-foreground tracking-wide uppercase">Depois</span>
        </div>
        <p className="text-[10px] md:text-xs font-body text-muted-foreground">(quando o metabolismo é reprogramado)</p>
      </div>
    </div>

    {/* VS divider */}
    <div className="relative h-0">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-foreground text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
        VS
      </div>
    </div>

    {/* Rows */}
    {antesItems.map((antes, idx) => (
      <div key={idx} className="grid grid-cols-2 border-t border-border/20">
        <div className="bg-[hsl(0_20%_96%)] px-4 py-3 flex items-start gap-2">
          <span className="text-[hsl(30_60%_60%)] mt-1 text-[8px]">●</span>
          <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{antes}</p>
        </div>
        <div className="bg-[hsl(120_20%_96%)] px-4 py-3 flex items-start gap-2">
          <span className="text-[hsl(140_50%_40%)] mt-0.5 text-xs">✔</span>
          <p className="text-xs md:text-sm font-body text-foreground/80 leading-relaxed">{depoisItems[idx]}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TabelaAntesDepois;
