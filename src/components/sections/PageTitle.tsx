interface PageTitleProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageTitle({ label, title, subtitle }: PageTitleProps) {
  return (
    <section className="relative py-24 bg-beige-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT bg-forest-DEFAULT/10 px-4 py-1.5 rounded-full inline-block mb-8">
          {label}
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-forest-800 leading-tight mb-6 max-w-3xl mx-auto text-balance">
          {title}
        </h1>
        <p className="text-forest-500 text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
