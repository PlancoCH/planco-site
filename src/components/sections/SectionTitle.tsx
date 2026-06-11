interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT bg-forest-DEFAULT/10 px-4 py-1.5 rounded-full inline-block mb-8">
        {label}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-forest-800 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-forest-500 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
