import { Target, Map, Code2, TestTube, Presentation, Github, Codepen, Server } from 'lucide-react';
import Button from '../components/ui/Button';
import ImageCard from '../components/ui/ImageCard';
import PageTitle from '../components/sections/PageTitle';
import SectionTitle from '../components/sections/SectionTitle';

const phases = [
  {
    number: '01',
    icon: Target,
    name: 'Goal Development',
    duration: 'Weeks 1–2',
    desc: 'The team established a shared vision: make plant health transparent through accessible technology. This phase covered research into household plant care challenges, user need analysis, and the definition of Planco\'s core value proposition.',
    deliverables: ['Project charter', 'Vision statement', 'Stakeholder analysis', 'Problem space mapping'],
    img: 'https://images.pexels.com/photos/6913098/pexels-photo-6913098.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '02',
    icon: Map,
    name: 'Project Planning & Concept',
    duration: 'Weeks 3–4',
    desc: 'With the goal defined, the team designed the technical architecture. This phase produced the sensor selection rationale, the communication architecture with a Laravel backend and PostgreSQL database, the AI analysis concept, and a fully scoped project plan with milestones.',
    deliverables: ['Technical architecture', 'Component selection', 'Risk register', 'Project schedule'],
    img: 'https://images.pexels.com/photos/7532152/pexels-photo-7532152.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '03',
    icon: Code2,
    name: 'Iterative Implementation',
    duration: 'Weeks 5–10',
    desc: 'The longest and most intensive phase. The hardware was assembled by Nils, the AI backend was developed, and the mobile app interface was built. Work progressed in two-week sprints with continuous integration via GitHub.',
    deliverables: ['IoT sensor unit', 'Laravel backend', 'AI analysis module', 'Mobile app (v1 & v2)'],
    img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '04',
    icon: TestTube,
    name: 'Testing & Optimization',
    duration: 'Weeks 11–13',
    desc: 'Marvin led a rigorous testing regime. Each sensor was calibrated and validated against reference instruments. The AI model was stress-tested with edge-case conditions. Results showed 95% measurement accuracy and a 20% reduction in plant mortality versus the control group.',
    deliverables: ['Test protocols', 'Accuracy benchmarks', 'Performance reports', 'Bug-fix sprints'],
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    number: '05',
    icon: Presentation,
    name: 'Final Presentation',
    duration: 'Week 14',
    desc: 'The semester concluded with a live demonstration of the complete Planco system. The team presented the findings, technical implementation, and validated results to instructors and peers.',
    deliverables: ['Final report', 'Live demo', 'Presentation deck', 'Lessons learned'],
    img: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const tools = [
  {
    icon: Codepen,
    name: 'React',
    desc: 'The mobile app frontend was built with React, delivering a fast and responsive user experience.',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
  {
    icon: Github,
    name: 'GitHub',
    desc: 'Version control, pull requests, and code review kept the codebase clean and collaborative.',
    color: 'text-forest-700 bg-forest-50 border-forest-200',
  },
  {
    icon: Server,
    name: 'Laravel',
    desc: 'PHP backend framework handling data ingestion, AI analysis coordination, and serving the API consumed by the mobile app.',
    color: 'text-red-700 bg-red-50 border-red-100',
  },
];

export default function Project() {
  return (
    <main className="pt-16">
      <PageTitle
        label="The Story"
        title="From a classroom idea to a working plant monitoring system"
        subtitle="One semester. Five structured phases. Four students. Here is how Planco was developed."
      />

      {/* Phases */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Project Phases"
            title="Five phases, one vision"
          />

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <ImageCard
                key={phase.number}
                variant="horizontal"
                icon={phase.icon}
                image={phase.img}
                imageAlt={phase.name}
                title={phase.name}
                paragraph={phase.desc}
                tags={phase.deliverables}
                reverse={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-beige-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Tech Stack"
            title="Built with the right tools"
            subtitle="Proven technologies chosen for reliability and team familiarity."
          />

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
      <section className="py-20 bg-beige-50 text-center">
        <div className="max-w-lg mx-auto px-6">
                    <SectionTitle
                      label="The Outcome"
                      title="A working prototype and a semester of learning"
                      subtitle="Planco demonstrated that a structured, collaborative approach can turn an ambitious idea into a real, functioning system in just 14 weeks."
                    />
                    <Button to="/product">Explore the System</Button>
          
        </div>
      </section>
    </main>
  );
}
