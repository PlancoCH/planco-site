import { Droplets, Sun, Thermometer, Wind, Gauge, Wifi, Brain, Smartphone, CheckCircle2, Zap, Shield, TrendingUp, Mail, Github } from 'lucide-react';
import Button from '../components/ui/Button';
import PageTitle from '../components/sections/PageTitle';
import SectionTitle from '../components/sections/SectionTitle';
import Quote from '../components/sections/Quote';
import FeatureCard from '../components/ui/FeatureCard';
import ImageGallery from '../components/ui/ImageGallery';

const sensors = [
  {
    icon: Droplets,
    name: 'Soil Moisture',
    desc: 'Capacitive sensing measures water availability at root level to detect both drought stress and overwatering conditions.',
  },
  {
    icon: Sun,
    name: 'Light Intensity (Lux)',
    desc: 'Ambient light measurement tracks the photosynthetically active radiation reaching the plant throughout the day.',
  },
  {
    icon: Thermometer,
    name: 'Temperature',
    desc: 'Continuous temperature monitoring identifies cold drafts, heat stress, and sub-optimal growing ranges for different plant species.',
  },
  {
    icon: Wind,
    name: 'Air Humidity',
    desc: 'Relative humidity tracking is especially relevant for tropical species that depend on specific microclimate conditions.',
  },
  {
    icon: Gauge,
    name: 'Air Pressure',
    desc: 'Barometric pressure data correlates with weather patterns, enabling the AI to anticipate environmental changes and adapt recommendations.',
    color: 'bg-forest-50 text-forest-DEFAULT border-forest-100',
    iconBg: 'bg-sage-100',
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: 'Health Status Analysis',
    desc: 'The AI model evaluates all sensor readings together, identifying patterns that indicate plant stress before visible symptoms appear.',
  },
  {
    icon: TrendingUp,
    title: 'Individual Care Recommendations',
    desc: 'Each plant receives tailored watering schedules, light adjustments, and environment tips based on species data and actual measurements.',
  },
  {
    icon: Zap,
    title: 'Automated Warnings',
    desc: 'Push notifications alert when conditions drift outside safe ranges, providing time to act before damage occurs.',
  },
  {
    icon: Shield,
    title: 'Publisher-Subscriber Architecture',
    desc: 'Data flows via WLAN from the sensor to the Laravel backend. PostgreSQL stores historical records for long-term trend analysis.',
  },
];

export default function Product() {
  return (
    <main className="pt-16">
      <PageTitle
        label="The System"
        title="IoT sensor hardware and AI-powered analysis"
        subtitle="Five environmental sensors. One AI analysis engine. One mobile application. A complete plant monitoring pipeline."
      />

      <ImageGallery
        images={[
          { src: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'IoT sensor in plant pot' },
          { src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sensor hardware components' },
          { src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Testing the sensor unit' },
          { src: 'https://images.pexels.com/photos/7318070/pexels-photo-7318070.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Mobile app interface' },
        ]}
      />

      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Sensor Array"
            title="Five senses for your plant"
            subtitle="Each parameter is critical. Together, they paint a complete picture of plant health."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sensors.map(({ icon: Icon, name, desc, color, iconBg }) => (
              <div
                key={name}
                className={`group rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${color}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-2 text-forest-800">{name}</h3>
                <p className="text-sm leading-relaxed text-forest-600">{desc}</p>
              </div>
            ))}

            {/* Connectivity card */}
            <div className="rounded-2xl border border-forest-200 bg-forest-DEFAULT p-6 hover:shadow-lg hover:shadow-forest-DEFAULT/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-forest-400 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-beige-100" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-beige-100">WLAN Connectivity</h3>
              <p className="text-sm leading-relaxed text-sage-200">
                All sensor data is transmitted wirelessly over WLAN to the Laravel backend. The ESP32 microcontroller handles connectivity natively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram (visual) */}
      <section className="py-24 bg-beige-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT mb-3 block">System Architecture</span>
              <h2 className="font-serif text-4xl text-forest-800 leading-tight mb-6">
                Publisher-Subscriber at its core
              </h2>
              <p className="text-forest-600 leading-relaxed mb-6">
                The hardware unit transmits sensor readings via WLAN to the Laravel backend, which handles data ingestion and storage in PostgreSQL. The AI analysis engine processes incoming data and serves structured health reports and alerts to the React-based mobile application.
              </p>
              <ul className="space-y-3">
                {[
                  'Sensor unit transmits data over WLAN',
                  'Laravel backend ingests and stores data in PostgreSQL',
                  'AI analysis engine evaluates plant health',
                  'React mobile app displays recommendations and alerts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-forest-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-forest-DEFAULT mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual flow */}
            <div className="space-y-4">
              {[
                { icon: Gauge, label: 'IoT Sensor Unit', sub: 'Measures 5 parameters', bg: 'bg-sage-100 border-sage-200' },
                { icon: Wifi, label: 'WLAN Transmission', sub: 'ESP32 connectivity', bg: 'bg-beige-100 border-beige-300', connector: true },
                { icon: Brain, label: 'Laravel Backend', sub: 'Data ingestion & AI analysis', bg: 'bg-forest-DEFAULT border-forest-400', dark: true },
                { icon: Smartphone, label: 'Mobile App', sub: 'Recommendations & alerts', bg: 'bg-sage-100 border-sage-200', connector: true },
              ].map(({ icon: Icon, label, sub, bg, dark, connector }, i) => (
                <div key={i} className="flex flex-col items-center">
                  {connector && (
                    <div className="w-px h-6 bg-forest-300 mb-1" />
                  )}
                  <div className={`w-full rounded-xl border px-6 py-4 flex items-center gap-4 ${bg} ${dark ? 'text-beige-100' : 'text-forest-700'}`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${dark ? 'bg-forest-400' : 'bg-white/60'}`}>
                      <Icon className={`w-5 h-5 ${dark ? 'text-beige-100' : 'text-forest-DEFAULT'}`} />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm ${dark ? 'text-beige-100' : 'text-forest-800'}`}>{label}</div>
                      <div className={`text-xs ${dark ? 'text-sage-200' : 'text-forest-500'}`}>{sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Artificial Intelligence"
            title="The analysis engine"
            subtitle="Raw sensor readings become actionable care intelligence through continuous AI evaluation."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map(({ icon, title, desc }) => (
              <FeatureCard key={title} icon={icon} title={title} description={desc} />
            ))}
          </div>
        </div>
      </section>

      <Quote
        text="95% measurement accuracy and a 20% reduction in plant mortality during our semester-long testing phase."
        image="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1600"
        imageAlt="Close up of healthy tropical plant leaves"
      />

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

      {/* Contact */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <SectionTitle
            label="Get in Touch"
            title="Interested in the project?"
            subtitle="We are happy to share more details about Planco. Reach out via email or check out our code on GitHub."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Button to="mailto:info@planco.ch" external>
              <Mail className="w-5 h-5" />
              info@planco.ch
            </Button>
            <Button to="https://github.com/PlancoCH/" external variant="secondary">
              <Github className="w-5 h-5" />
              github.com/PlancoCH
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
