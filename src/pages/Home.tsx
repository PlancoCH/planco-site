import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Wifi, Brain, Smartphone, ChevronDown, Droplets, Sun, Thermometer, Wind } from 'lucide-react';

const stats = [
  { value: '95%', label: 'Measurement Accuracy' },
  { value: '20%', label: 'Reduction in Plant Mortality' },
  { value: '5', label: 'Sensors in One Device' },
  { value: '4', label: 'Expert Team Members' },
];

const sensors = [
  { icon: Droplets, label: 'Soil Moisture', color: 'text-blue-500' },
  { icon: Sun, label: 'Light Intensity', color: 'text-amber-500' },
  { icon: Thermometer, label: 'Temperature', color: 'text-red-400' },
  { icon: Wind, label: 'Air & Humidity', color: 'text-sage-400' },
];

const pagePaths: Record<string, string> = {
  product: '/product',
  team: '/team',
  project: '/project',
};

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.add('opacity-100')),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleNav = (page: string) => {
    navigate(pagePaths[page]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-beige-50">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Lush green tropical plants"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige-50 via-beige-50/90 to-beige-50/60" />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-24 right-16 w-72 h-72 rounded-full bg-sage-100 opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-24 left-12 w-48 h-48 rounded-full bg-forest-200 opacity-30 blur-2xl pointer-events-none" />

        <div
          ref={heroRef}
          className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 opacity-0 transition-opacity duration-1000"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT bg-forest-DEFAULT/10 px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-DEFAULT animate-pulse" />
              AI-Driven IoT Plant Care
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-forest-800 leading-[1.1] mb-6 text-balance">
              Don't just measure data,{' '}
              <em className="not-italic text-forest-DEFAULT">listen to the plant.</em>
            </h1>

            <p className="text-forest-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              An AI-driven IoT system for intelligent, everyday plant care that makes plant health transparent — in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNav('product')}
                className="group inline-flex items-center gap-3 bg-forest-DEFAULT text-beige-100 font-semibold px-7 py-4 rounded-full hover:bg-forest-400 transition-all duration-300 hover:shadow-xl hover:shadow-forest-DEFAULT/25 active:scale-95"
              >
                Understand Your Plants Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNav('project')}
                className="inline-flex items-center gap-2 text-forest-600 font-medium px-7 py-4 rounded-full border border-forest-300 hover:border-forest-DEFAULT hover:text-forest-DEFAULT transition-all duration-300"
              >
                Read the Story
              </button>
            </div>

            {/* Sensor pills */}
            <div className="flex flex-wrap gap-3 mt-12">
              {sensors.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-beige-300 px-4 py-2 rounded-full text-sm text-forest-700"
                >
                  <Icon className={`w-4 h-4 ${color}`} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-forest-400 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-forest-DEFAULT py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl md:text-5xl font-bold text-beige-100 mb-1">
                  {value}
                </div>
                <div className="text-sage-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT">How It Works</span>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-800 mt-3 mb-4">
              From soil to insight
            </h2>
            <p className="text-forest-500 max-w-md mx-auto">
              Three seamless layers work together to give your plants a voice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: Wifi,
                title: 'Sense',
                desc: 'The IoT sensor unit continuously monitors soil moisture, light, temperature, humidity, and air pressure with 95% accuracy.',
                img: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                step: '02',
                icon: Brain,
                title: 'Analyze',
                desc: 'Data is transmitted via WLAN using a Publisher-Subscriber model to a backend where AI evaluates plant health status in real time.',
                img: 'https://images.pexels.com/photos/7318070/pexels-photo-7318070.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                step: '03',
                icon: Smartphone,
                title: 'Act',
                desc: 'Receive individual care recommendations and automated warnings directly on your mobile app — before damage occurs.',
                img: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map(({ step, icon: Icon, title, desc, img }) => (
              <div
                key={step}
                className="group bg-beige-50 rounded-2xl overflow-hidden border border-beige-300 hover:border-forest-300 hover:shadow-lg hover:shadow-forest-DEFAULT/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest-800/30" />
                  <span className="absolute top-4 left-4 font-serif text-5xl font-bold text-white/20">{step}</span>
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 bg-forest-DEFAULT/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-forest-DEFAULT" />
                  </div>
                  <h3 className="font-serif text-xl text-forest-800 mb-2">{title}</h3>
                  <p className="text-forest-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Split */}
      <section className="py-24 bg-beige-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3 block">The Problem</span>
              <h2 className="font-serif text-4xl text-forest-800 leading-tight mb-6">
                Most indoor plants suffer in silence
              </h2>
              <p className="text-forest-600 leading-relaxed mb-6">
                Millions of households face a common challenge: it's nearly impossible to accurately assess the individual needs of indoor plants. The result? Plants die from dehydration or root rot caused by overwatering — both entirely preventable.
              </p>
              <p className="text-forest-500 text-sm leading-relaxed">
                Without real-time data, even caring plant owners are guessing. That guesswork costs plants their lives.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wilting houseplant"
                className="rounded-2xl w-full object-cover h-80"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-beige-300 max-w-xs">
                <p className="text-xs text-forest-500 font-medium uppercase tracking-wider mb-1">Without Planco</p>
                <p className="text-forest-700 text-sm">"My pothos died again. I have no idea if I watered it too much or too little."</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
            <div className="relative order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/6930551/pexels-photo-6930551.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Thriving healthy plant"
                className="rounded-2xl w-full object-cover h-80"
              />
              <div className="absolute -bottom-6 -right-6 bg-forest-DEFAULT rounded-xl p-4 shadow-lg max-w-xs">
                <p className="text-xs text-sage-200 font-medium uppercase tracking-wider mb-1">With Planco</p>
                <p className="text-beige-100 text-sm">"Planco told me my Monstera needs water in 2 days. My plants have never been healthier."</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT mb-3 block">The Solution</span>
              <h2 className="font-serif text-4xl text-forest-800 leading-tight mb-6">
                AI that speaks your plant's language
              </h2>
              <p className="text-forest-600 leading-relaxed mb-6">
                Planco's IoT sensor unit sits discreetly in your plant's pot, measuring five critical environmental parameters every few seconds. The AI backend translates raw data into plain-language health reports and actionable care recommendations.
              </p>
              <button
                onClick={() => handleNav('product')}
                className="group inline-flex items-center gap-2 text-forest-DEFAULT font-semibold hover:gap-3 transition-all"
              >
                Discover the full product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-24 bg-beige-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT mb-3 block">The People Behind It</span>
          <h2 className="font-serif text-4xl md:text-5xl text-forest-800 mb-4">
            Built with passion and a little humor
          </h2>
          <p className="text-forest-500 max-w-lg mx-auto mb-10">
            Four students united by a love for plants, technology, and an irreverent team culture.
          </p>
          <button
            onClick={() => handleNav('team')}
            className="group inline-flex items-center gap-3 bg-forest-DEFAULT text-beige-100 font-semibold px-7 py-4 rounded-full hover:bg-forest-400 transition-all duration-300 hover:shadow-xl hover:shadow-forest-DEFAULT/25"
          >
            Meet the Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
