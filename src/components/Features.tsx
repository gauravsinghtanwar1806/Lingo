import { BrainCircuit, Clock, Trophy, MessageSquareText } from 'lucide-react';

const features = [
  {
    icon: BrainCircuit,
    title: 'AI-Powered Practice',
    description: 'Lessons adapt to your mistakes and give you focused practice where you need it most.'
  },
  {
    icon: Clock,
    title: 'Bite-Sized Lessons',
    description: 'Short sessions make it easier to build a language-learning habit that fits your day.'
  },
  {
    icon: Trophy,
    title: 'Gamified Progress',
    description: 'Earn XP, maintain your streak, and see your progress turn into momentum.'
  },
  {
    icon: MessageSquareText,
    title: 'Learn by Doing',
    description: 'Interactive exercises help you practice vocabulary, translation, listening, and comprehension.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Everything you need to keep learning.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-surface p-8 rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
