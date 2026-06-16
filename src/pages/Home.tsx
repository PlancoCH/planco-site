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
            src="https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg"
            alt="Lush green tropical plants"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige-200/70 via-beige-200/40 to-transparent" />
        </div>

        <div className="absolute top-32 -right-16 w-80 h-80 rounded-full bg-sage-200 opacity-40 blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className="relative z-10 max-w-6xl mx-auto px-6 py-24 opacity-0 transition-opacity duration-1000"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT bg-forest-DEFAULT/10 px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-DEFAULT animate-pulse" />
              Student Research Project
            </span>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-forest-800 leading-[1.1] mb-6 text-balance">
              Don't just measure data,{' '}
              <em className="not-italic text-forest-DEFAULT">listen to the plant.</em>
            </h1>

            <p className="text-forest-500 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              A student research project exploring how IoT sensor technology and artificial intelligence can make plant health transparent and understandable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/product">Explore the Hardware</Button>
              <Button to="/project" variant="secondary">Project Journey</Button>


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
            title="Custom-built IoT hardware"
          />
          <ImageCard
            variant="horizontal"
            image="https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=800"
            imageAlt="Planco IoT sensor unit"
            title="Five sensors, one compact device"
            paragraph="Built around an ESP32 microcontroller, the sensor unit integrates a capacitive soil moisture probe, ambient light sensor, temperature and humidity sensor, and a barometric pressure sensor. It connects via WLAN and transmits readings to the Laravel backend at regular intervals."
            tags={["Soil Moisture", "Light (Lux)", "Temperature", "Humidity", "Air Pressure"]}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="System Overview"
            title="From soil to insight"
            subtitle="Three integrated layers form the data pipeline from sensor to user."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Sense',
                desc: 'The IoT sensor unit continuously monitors soil moisture, light, temperature, humidity, and air pressure.',
                img: 'https://images.pexels.com/photos/9709224/pexels-photo-9709224.jpeg',
              },
              {
                icon: Brain,
                title: 'Analyze',
                desc: 'Sensor data is transmitted via WLAN to a Laravel backend where AI evaluates plant health status.',
                img: 'https://images.pexels.com/photos/6280508/pexels-photo-6280508.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                icon: Smartphone,
                title: 'Act',
                desc: 'A React-based mobile application displays individual care recommendations and automated warnings based on the AI analysis.',
                img: 'https://images.pexels.com/photos/6912816/pexels-photo-6912816.jpeg?auto=compress&cs=tinysrgb&w=600',
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
            label="Problem Statement"
            title="Why most plants never reach their potential"
            subtitle="Understanding the gap between intention and outcome in everyday plant care."
          />

          <div className="space-y-6">
            <ImageCard
              variant="horizontal"
              image="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Wilting houseplant"
              title="The difficulty of accurate plant care"
              paragraph="Households everywhere face a common challenge: it is nearly impossible to accurately assess the individual needs of indoor plants without measurement tools. The result is often dehydration or root rot caused by overwatering — both entirely preventable. Without reliable data, care decisions are based on guesswork."
              tags={["Overwatering", "Dehydration", "No Data"]}
            />
            <ImageCard
              variant="horizontal"
              image="https://images.pexels.com/photos/6912821/pexels-photo-6912821.jpeg?auto=compress&cs=tinysrgb&w=800"
              imageAlt="Thriving healthy plant"
              title="A data-driven approach to plant health"
              paragraph="Planco places a custom IoT sensor unit in the plant's pot, measuring five critical environmental parameters at regular intervals. The AI backend translates raw sensor data into plain-language health reports and actionable care recommendations, bridging the gap between data and practical plant care."
              tags={["IoT Sensor", "AI Analysis", "Real-time"]}
              reverse
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button to="/product" variant="ghost">Learn more about the system</Button>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-24 bg-beige-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTitle
            label="The People Behind It"
            title="Built with passion and a little humor"
            subtitle="Four students collaborating on an interdisciplinary project combining hardware, software, and AI."
          />
          <Button to="/team">Meet the Team</Button>
        </div>
      </section>
    </main>
  );
}
