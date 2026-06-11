import { Droplets, Sun, Thermometer, Wind, Gauge, Wifi, Brain, Smartphone, CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import PageTitle from '../components/sections/PageTitle';
import SectionTitle from '../components/sections/SectionTitle';

const sensors = [
  {
    icon: Droplets,
    name: 'Soil Moisture',
    desc: 'Precision capacitive sensing detects water availability at root level, preventing both drought stress and root rot.',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Sun,
    name: 'Light Intensity (Lux)',
    desc: 'Ambient light measurement ensures your plants receive optimal photosynthesis conditions throughout the day.',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Thermometer,
    name: 'Temperature',
    desc: 'Continuous temperature monitoring detects harmful cold drafts, heat stress, or sub-optimal growing ranges.',
    color: 'bg-red-50 text-red-600 border-red-100',
    iconBg: 'bg-red-100',
  },
  {
    icon: Wind,
    name: 'Air Humidity',
    desc: 'Relative humidity tracking helps plants thrive in their preferred microclimate, especially tropical species.',
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    iconBg: 'bg-teal-100',
  },
  {
    icon: Gauge,
    name: 'Air Pressure',
    desc: 'Barometric pressure data correlates with weather patterns, helping the AI anticipate and adapt care recommendations.',
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
    title: 'Automated Early Warnings',
    desc: 'Push notifications alert you when conditions drift outside safe ranges, giving you time to act before damage occurs.',
  },
  {
    icon: Shield,
    title: 'Publisher-Subscriber Architecture',
    desc: 'Data flows via MQTT over WLAN from sensor to backend in real time. Reliable, low-latency, and designed for always-on monitoring.',
  },
];

export default function Product() {
  return (
    <main className="pt-16">
      <PageTitle
        label="The Product"
        title="An IoT & AI system that gives plants a voice"
        subtitle="Five sensors. One AI brain. One mobile app. Complete plant health transparency."
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
                All data is transmitted wirelessly via MQTT over WLAN to the backend in milliseconds — no cables, no hassle.
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
                The Planco hardware unit acts as the MQTT publisher, continuously broadcasting sensor readings to the backend broker. The AI service subscribes to the data stream, processes it, and pushes structured health reports and alerts to the mobile app.
              </p>
              <ul className="space-y-3">
                {[
                  'Sensor unit publishes to MQTT broker over WLAN',
                  'Backend AI subscribes and analyzes in real time',
                  'Mobile app receives personalized push notifications',
                  'Feedback loop improves recommendations over time',
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
                { icon: Wifi, label: 'MQTT / WLAN', sub: 'Pub-Sub transmission', bg: 'bg-beige-100 border-beige-300', connector: true },
                { icon: Brain, label: 'AI Backend', sub: 'Health analysis & scoring', bg: 'bg-forest-DEFAULT border-forest-400', dark: true },
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
            title="The brain behind the leaves"
            subtitle="Raw numbers become actionable care intelligence through continuous AI analysis."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-beige-50 rounded-2xl border border-beige-300 p-8 hover:border-forest-300 hover:shadow-lg hover:shadow-forest-DEFAULT/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-forest-DEFAULT/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-forest-DEFAULT" />
                </div>
                <h3 className="font-serif text-xl text-forest-800 mb-3">{title}</h3>
                <p className="text-forest-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-72 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Close up of healthy tropical plant leaves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/50 flex items-center justify-center">
          <blockquote className="text-center px-6">
            <p className="font-serif text-2xl md:text-3xl italic text-beige-100 max-w-2xl">
              "95% measurement accuracy and a 20% reduction in plant mortality during our semester-long testing phase."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-beige-50 text-center">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-forest-800 mb-4">Curious about the team?</h2>
          <p className="text-forest-500 mb-8">Meet the four engineers who built Planco from idea to working prototype.</p>
          <Button to="/team">Meet the Team</Button>
        </div>
      </section>
    </main>
  );
}
