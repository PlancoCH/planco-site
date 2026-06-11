import { Star, Users, Heart, Laugh } from 'lucide-react';
import Button from '../components/ui/Button';
import PageTitle from '../components/sections/PageTitle';
import SectionTitle from '../components/sections/SectionTitle';

const members = [
  {
    name: 'Yannick Blatty',
    role: 'Project Lead',
    focus: 'Coordination & Communication',
    desc: 'Yannick kept the ship pointed in the right direction. As Project Lead he orchestrated all moving parts — from milestone tracking to stakeholder communication — ensuring the team never lost sight of the vision.',
    traits: ['Strategic thinking', 'Team cohesion', 'Communication'],
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    accent: 'bg-forest-DEFAULT',
  },
  {
    name: 'Marvin Hegi',
    role: 'Quality Guardian',
    focus: 'Testing, Quality & Documentation',
    desc: 'Marvin was the voice of rigor. He defined test cases, maintained documentation standards, and made sure every claim about Planco was backed by evidence. The 95% accuracy stat? That has Marvin\'s fingerprints on it.',
    traits: ['Test design', 'Documentation', 'Attention to detail'],
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    accent: 'bg-sage-400',
  },
  {
    name: 'Tobias Clausen',
    role: 'Analyst',
    focus: 'Analysis, Requirements & Risk Management',
    desc: 'Tobias translated ambiguity into clarity. He led requirements engineering, dissected risks before they materialized, and built the analytical foundation that gave every design decision a solid rationale.',
    traits: ['Risk analysis', 'Requirements', 'Systems thinking'],
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    accent: 'bg-amber-600',
  },
  {
    name: 'Nils Utiger',
    role: 'Tech Lead',
    focus: 'Technology & Migration (Hardware)',
    desc: 'Nils made the hardware breathe. He selected sensors, wired the IoT unit, set up the MQTT pipeline, and handled all technical migration challenges. If Planco measures something accurately, Nils built the part that measures it.',
    traits: ['IoT hardware', 'MQTT / WLAN', 'Systems integration'],
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    accent: 'bg-forest-600',
  },
];

const cultureValues = [
  {
    icon: Users,
    title: 'Respectful Collaboration',
    desc: 'Every idea received a fair hearing. Disagreements were resolved through structured discussion, never hierarchy.',
  },
  {
    icon: Heart,
    title: 'Shared Responsibility',
    desc: 'Ownership was collective. When something succeeded, the team celebrated together. When it failed, they fixed it together.',
  },
  {
    icon: Star,
    title: 'Commitment to Quality',
    desc: 'Good enough was never good enough. The team held each other to high standards throughout every project phase.',
  },
  {
    icon: Laugh,
    title: 'A Healthy Dose of Humor',
    desc: 'Levity made hard sprints bearable. Planco was built with plenty of laughter alongside the late nights.',
  },
];

export default function Team() {
  return (
    <main className="pt-16">
      <PageTitle
        label="The Team"
        title="Four people. One shared obsession."
        subtitle="Planco was built by a team that believed technology could genuinely help people connect with nature — and had a great time proving it."
      />

      {/* Team Members */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {members.map((member, i) => (
              <div
                key={member.name}
                className={`group grid md:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-beige-300 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-DEFAULT/10 transition-all duration-300 ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Photo */}
                <div className={`md:col-span-2 relative overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 opacity-30 ${member.accent}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest-900/80 to-transparent">
                    <div className={`inline-flex text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full text-white ${member.accent} mb-2`}>
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:col-span-3 bg-beige-50 p-8 md:p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <h3 className="font-serif text-3xl text-forest-800 mb-1">{member.name}</h3>
                  <p className="text-forest-DEFAULT font-medium text-sm mb-5">{member.focus}</p>
                  <p className="text-forest-600 leading-relaxed mb-6">{member.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.traits.map((trait) => (
                      <span
                        key={trait}
                        className="text-xs font-medium text-forest-600 bg-forest-DEFAULT/10 px-3 py-1 rounded-full border border-forest-DEFAULT/20"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-serif text-2xl md:text-3xl italic text-beige-100 text-center max-w-2xl">
            "A respectful, responsible, and humorous collaboration — exactly the kind of team you want to build something hard with."
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-beige-200">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            label="Team Culture"
            title="How we worked together"
            subtitle="The product was shaped by the culture. Here's what defined us."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-beige-50 rounded-2xl border border-beige-300 p-6 hover:border-forest-300 hover:shadow-lg hover:shadow-forest-DEFAULT/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-forest-DEFAULT/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-forest-DEFAULT" />
                </div>
                <h3 className="font-serif text-lg text-forest-800 mb-2">{title}</h3>
                <p className="text-forest-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-beige-50 text-center">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-forest-800 mb-4">Want to know how it all came together?</h2>
          <p className="text-forest-500 mb-8">Explore the project journey — five phases, one semester, and a lot of learning.</p>
          <Button to="/project">Read the Story</Button>
        </div>
      </section>
    </main>
  );
}
