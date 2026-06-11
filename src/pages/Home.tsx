import { useEffect, useRef } from 'react';
import { Wifi, Brain, Smartphone, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import ImageCard from '../components/ui/ImageCard';
import SectionTitle from '../components/sections/SectionTitle';

export default function Home() {
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

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-beige-50">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Lush green tropical plants"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige-50/70 via-beige-50/40 to-transparent" />
        </div>

        <div className="absolute top-32 -right-16 w-80 h-80 rounded-full bg-sage-200 opacity-40 blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className="relative z-10 max-w-6xl mx-auto px-6 py-24 opacity-0 transition-opacity duration-1000"
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

            <p className="text-forest-500 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              An AI-driven IoT system for intelligent, everyday plant care that makes plant health transparent — in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/product">Understand Your Plants Today</Button>
              <Button to="/project" variant="secondary">Read the Story</Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-forest-400 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Sensor Intro */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="The Sensor"
            title="A single device that listens to your plant"
          />
          <p className="text-forest-600 leading-relaxed max-w-2xl mx-auto text-center">
            Planco's IoT sensor unit sits discreetly in your plant's pot, measuring five critical environmental parameters — soil moisture, light intensity, temperature, air humidity, and air pressure — every few seconds. The data streams wirelessly to an AI backend that translates raw numbers into clear, actionable care advice, so you always know exactly what your plant needs before visible symptoms appear.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="How It Works"
            title="From soil to insight"
            subtitle="Three seamless layers work together to give your plants a voice."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Sense',
                desc: 'The IoT sensor unit continuously monitors soil moisture, light, temperature, humidity, and air pressure with 95% accuracy.',
                img: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Brain,
                title: 'Analyze',
                desc: 'Data is transmitted via WLAN using a Publisher-Subscriber model to a backend where AI evaluates plant health status in real time.',
                img: 'https://images.pexels.com/photos/7318070/pexels-photo-7318070.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Smartphone,
                title: 'Act',
                desc: 'Receive individual care recommendations and automated warnings directly on your mobile app — before damage occurs.',
                img: 'https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map(({ icon, title, desc, img }) => (
              <ImageCard
                key={title}
                variant="vertical"
                icon={icon}
                image={img}
                imageAlt={title}
                title={title}
                paragraph={desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution Split */}
      <section className="py-24 bg-beige-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="The Challenge"
            title="Why most plants never reach their potential"
            subtitle="The gap between intention and outcome in everyday plant care."
          />

          <div className="space-y-6">
            <ImageCard
              variant="horizontal"
              image="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Wilting houseplant"
              title="Most indoor plants suffer in silence"
              paragraph="Millions of households face a common challenge: it's nearly impossible to accurately assess the individual needs of indoor plants. The result? Plants die from dehydration or root rot caused by overwatering — both entirely preventable. Without real-time data, even caring plant owners are guessing. That guesswork costs plants their lives."
              tags={["Overwatering", "Dehydration", "No Data"]}
            />
            <ImageCard
              variant="horizontal"
              image="https://images.pexels.com/photos/6930551/pexels-photo-6930551.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Thriving healthy plant"
              title="AI that speaks your plant's language"
              paragraph="Planco's IoT sensor unit sits discreetly in your plant's pot, measuring five critical environmental parameters every few seconds. The AI backend translates raw data into plain-language health reports and actionable care recommendations."
              tags={["IoT Sensor", "AI Analysis", "Real-time"]}
              reverse
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button to="/product" variant="ghost">Discover the full product</Button>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-24 bg-beige-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTitle
            label="The People Behind It"
            title="Built with passion and a little humor"
            subtitle="Four students united by a love for plants, technology, and an irreverent team culture."
          />
          <Button to="/team">Meet the Team</Button>
        </div>
      </section>
    </main>
  );
}
