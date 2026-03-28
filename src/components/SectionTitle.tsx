interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => (
  <div className={`relative inline-block mb-2 ${className}`}>
    <p className="text-sm md:text-base font-display tracking-[0.35em] uppercase text-primary font-semibold relative z-10 px-1">
      {children}
    </p>
    <div
      className="absolute bottom-0 left-0 right-0 h-[40%] z-0 rounded-sm opacity-20"
      style={{ background: 'linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)' }}
    />
  </div>
);

export default SectionTitle;
