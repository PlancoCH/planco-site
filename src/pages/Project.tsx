import { Target, Map, Code2, TestTube, Presentation, Github, MessageSquare, Wifi, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectProps {
  onNavigate: (page: string) => void;
}

const phases = [
  {
    number: '01',
    icon: Target,
    name: 'Goal Development',
    duration: 'Weeks 1–2',
    desc: 'The team established a shared north star: make plant health transparent through accessible technology. This phase involved research into household plant care challenges, user need analysis, and the crystallization of Planco\'s core value proposition.',
    deliverables: ['Project charter', 'Vision statement', 'Initial stakeholder analysis', 'Problem space mapping'],
    img: 'https://images.pexels.com/photos/6913098/pexels-photo-6913098.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '02',
    icon: Map,
    name: 'Project Planning & Concept',
    duration: 'Weeks 3–4',
    desc: 'With the goal defined, the team designed the technical architecture. This phase produced the sensor selection rationale, the MQTT communication architecture, the AI analysis concept, and a fully scoped project plan with milestone dates.',
    deliverables: ['Technical architecture', 'Component selection', 'Risk register', 'Project schedule'],
    img: 'https://images.pexels.com/photos/7532152/pexels-photo-7532152.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '03',
    icon: Code2,
    name: 'Iterative Implementation',
    duration: 'Weeks 5–10',
    desc: 'The longest and most intensive phase. The hardware was assembled by Nils, the AI backend was developed, and the mobile app interface was built. Work progressed in two-week sprints with continuous integration via GitHub.',
    deliverables: ['IoT sensor unit', 'MQTT backend', 'AI analysis module', 'Mobile app (v1 & v2)'],
    img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '04',
    icon: TestTube,
    name: 'Testing & Optimization',
    duration: 'Weeks 11–13',
    desc: 'Marvin led a rigorous testing regime. Each sensor was calibrated and validated against reference instruments. The AI model was stress-tested with edge-case conditions. Results: 95% measurement accuracy and a 20% reduction in plant mortality vs. the control group.',
    deliverables: ['Test protocols', 'Accuracy benchmarks', 'Performance reports', 'Bug-fix sprints'],
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '05',
    icon: Presentation,
    name: 'Final Presentation',
    duration: 'Week 14',
    desc: 'The semester concluded with a live demonstration of the complete Planco system. The team presented their findings, the technical implementation, and the validated results to instructors and peers. The project received recognition for its ambition and execution quality.',
    deliverables: ['Final report', 'Live demo', 'Presentation deck', 'Lessons learned'],
    img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const tools = [
  {
    icon: MessageSquare,
    name: 'MS Teams',
    desc: 'Daily standups, sprint reviews, and all asynchronous communication happened here.',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    icon: Github,
    name: 'GitHub',
    desc: 'Version control, pull requests, and code review kept the codebase clean and collaborative.',
    color: 'text-forest-700 bg-forest-50 border-forest-200',
  },
  {
    icon: Wifi,
    name: 'MQTT / WLAN',
    desc: 'The Publisher-Subscriber protocol powering real-time data transmission from sensor to backend.',
    color: 'text-amber-700 bg-amber-50 border-amber-100',
  },
];

export default function Project({ onNavigate }: ProjectProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-beige-50 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT bg-forest-DEFAULT/10 px-4 py-1.5 rounded-full inline-block mb-8">
            The Story
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-forest-800 leading-tight mb-6 max-w-3xl mx-auto text-balance">
            From a classroom idea to a working plant intelligence system
          </h1>
          <p className="text-forest-500 text-lg max-w-xl mx-auto leading-relaxed">
            One semester. Five structured phases. Four students. This is how Planco was built.
          </p>

          {/* Timeline badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {phases.map((p) => (
              <div key={p.number} className="flex items-center gap-2 bg-white/80 border border-beige-300 px-4 py-2 rounded-full text-sm text-forest-600">
                <span className="font-semibold text-forest-DEFAULT">{p.number}</span>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context block */}
      <section className="py-16 bg-forest-DEFAULT">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '1 Semester', label: 'Project Duration', sub: '~14 weeks of work' },
              { value: '5 Phases', label: 'Structured Process', sub: 'From concept to presentation' },
              { value: '3 Tools', label: 'Tech Stack', sub: 'Teams, GitHub, MQTT' },
            ].map(({ value, label, sub }) => (
              <div key={label}>
                <div className="font-serif text-3xl font-bold text-beige-100 mb-1">{value}</div>
                <div className="text-sage-200 text-sm font-medium mb-1">{label}</div>
                <div className="text-forest-300 text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT mb-3 block">Project Phases</span>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-800">
              Five phases, one vision
            </h2>
          </div>

          <div className="space-y-6">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={phase.number}
                  className="group grid md:grid-cols-5 rounded-3xl overflow-hidden border border-beige-300 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-DEFAULT/10 transition-all duration-300"
                >
                  {/* Image */}
                  <div className={`md:col-span-2 relative overflow-hidden ${!isEven ? 'md:order-2' : ''}`}>
                    <img
                      src={phase.img}
                      alt={phase.name}
                      className="w-full h-52 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-forest-900/40" />
                    <span className="absolute top-6 left-6 font-serif text-6xl font-bold text-white/20">
                      {phase.number}
                    </span>
                    <div className="absolute bottom-6 left-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-sage-200 bg-forest-DEFAULT/70 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-3 bg-beige-50 p-8 md:p-10 ${!isEven ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-forest-DEFAULT/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-forest-DEFAULT" />
                      </div>
                      <h3 className="font-serif text-2xl text-forest-800">{phase.name}</h3>
                    </div>
                    <p className="text-forest-600 leading-relaxed mb-6">{phase.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-forest-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-DEFAULT flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-beige-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT mb-3 block">Tech Stack</span>
            <h2 className="font-serif text-4xl text-forest-800 mb-4">
              Built with the right tools
            </h2>
            <p className="text-forest-500 max-w-md mx-auto">
              Simple, proven tools chosen for reliability and team familiarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map(({ icon: Icon, name, desc, color }) => (
              <div
                key={name}
                className={`rounded-2xl border p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${color}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-3">{name}</h3>
                <p className="text-sm leading-relaxed opacity-80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 bg-beige-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-DEFAULT mb-3 block">What We Learned</span>
              <h2 className="font-serif text-4xl text-forest-800 leading-tight mb-6">
                A semester that changed how we think about plants and technology
              </h2>
              <p className="text-forest-600 leading-relaxed mb-6">
                Planco proved that IoT and AI don't need to be intimidating — they just need a real problem worth solving. The structured five-phase approach kept the team aligned and productive across 14 weeks without losing the creative energy that started it all.
              </p>
              <p className="text-forest-500 text-sm leading-relaxed mb-8">
                Beyond the technical outcomes, the team developed a deep respect for iterative development, honest testing, and the value of documentation as a communication tool — not just a bureaucratic formality.
              </p>
              <button
                onClick={() => handleNav('product')}
                className="group inline-flex items-center gap-3 bg-forest-DEFAULT text-beige-100 font-semibold px-7 py-4 rounded-full hover:bg-forest-400 transition-all duration-300 hover:shadow-xl hover:shadow-forest-DEFAULT/25"
              >
                Explore the Product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Thriving plant collection"
                className="rounded-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-forest-DEFAULT rounded-xl p-5 shadow-xl max-w-56">
                <div className="font-serif text-3xl font-bold text-beige-100 mb-1">20%</div>
                <div className="text-sage-200 text-xs uppercase tracking-wider">Reduction in plant mortality</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
