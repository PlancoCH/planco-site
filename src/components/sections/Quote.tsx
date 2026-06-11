interface QuoteProps {
  text: string;
  image: string;
  imageAlt: string;
}

export default function Quote({ text, image, imageAlt }: QuoteProps) {
  return (
    <section className="relative h-80 overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-900/60" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <figure>
          <blockquote>
            <p className="font-serif text-2xl md:text-3xl italic text-beige-100 text-center max-w-2xl">
              "{text}"
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
