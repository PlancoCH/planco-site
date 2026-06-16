import { Leaf, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <main className="pt-16">
      <section className="relative py-24 bg-beige-50 overflow-hidden flex items-center min-h-[80vh]">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT bg-forest-DEFAULT/10 px-4 py-1.5 rounded-full inline-block mb-8">
            Error 404
          </span>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-sage-100 border border-sage-200 flex items-center justify-center">
              <Leaf className="w-10 h-10 text-forest-DEFAULT" />
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-forest-800 leading-tight mb-6 max-w-2xl mx-auto text-balance">
            This page does not exist
          </h1>

          <p className="text-forest-500 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            The page you are looking for has been moved, removed, or was never planted in the first place. Let us guide you back to familiar ground.
          </p>

          <Button to="/">
            Back to Home
          </Button>
        </div>
      </section>
    </main>
  );
}
