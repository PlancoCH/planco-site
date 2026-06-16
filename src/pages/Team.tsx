import { Star, Users, Heart, Laugh } from "lucide-react";
import Button from "../components/ui/Button";
import ImageCard from "../components/ui/ImageCard";
import Quote from "../components/sections/Quote";
import PageTitle from "../components/sections/PageTitle";
import SectionTitle from "../components/sections/SectionTitle";

const members = [
  {
    name: "Yannick Blatty",
    role: "Project Lead",
    focus: "Coordination & Communication",
    desc: "Yannick kept the project on track. As Project Lead he orchestrated all moving parts — from milestone tracking to stakeholder communication — ensuring the team never lost sight of the vision.",
    traits: ["Strategic thinking", "Team cohesion", "Communication"],
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    accent: "bg-forest-DEFAULT",
  },
  {
    name: "Marvin Hegi",
    role: "Quality Guardian",
    focus: "Testing, Quality & Documentation",
    desc: "Marvin was the voice of rigor. He defined test cases, maintained documentation standards, and made sure every claim about Planco was backed by evidence. The 95% measurement accuracy is a result of his thorough testing.",
    traits: ["Test design", "Documentation", "Attention to detail"],
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    accent: "bg-sage-400",
  },
  {
    name: "Tobias Clausen",
    role: "Analyst",
    focus: "Analysis, Requirements & Risk Management",
    desc: "Tobias translated ambiguity into clarity. He led requirements engineering, identified risks before they materialized, and built the analytical foundation that gave every design decision a solid rationale.",
    traits: ["Risk analysis", "Requirements", "Systems thinking"],
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    accent: "bg-amber-600",
  },
  {
    name: "Nils Utiger",
    role: "Tech Lead",
    focus: "Technology & Migration (Hardware)",
    desc: "Nils made the hardware work. He selected sensors, assembled the IoT unit, configured the data pipeline, and handled all technical integration challenges. If Planco measures something accurately, Nils built the part that measures it.",
    traits: ["IoT hardware", "WLAN / Connectivity", "Systems integration"],
    img: "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    accent: "bg-forest-600",
  },
];

export default function Team() {
  return (
    <main className="pt-16">
      <PageTitle
        label="The Team"
        title="Four people. One shared project."
        subtitle="Planco was developed by a team that believed technology could genuinely help people connect with nature — and had a great time proving it."
      />

      {/* Team Members */}
      <section className="py-24 bg-beige-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {members.map((member, i) => (
              <ImageCard
                key={member.name}
                variant="horizontal"
                image={member.img}
                imageAlt={member.name}
                title={member.name}
                paragraph={member.desc}
                tags={member.traits}
                reverse={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-20 bg-beige-50 text-center">
        <div className="max-w-lg mx-auto px-6">
          <SectionTitle
            label="What We Built"
            title="Want to know how it all came together?"
            subtitle="Explore the project journey — five phases, one semester, and a lot of learning."
          />
          <Button to="/project">Project Journey</Button>
        </div>
      </section>
    </main>
  );
}
