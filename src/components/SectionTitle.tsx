interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => (
  <div className={`w-full mb-4 ${className}`}>
    <div className="w-full py-4 px-6 bg-foreground rounded-sm">
      <p className="text-base md:text-lg font-display tracking-[0.35em] uppercase text-primary font-semibold text-center">
        {children}
      </p>
    </div>
  </div>
);

export default SectionTitle;
