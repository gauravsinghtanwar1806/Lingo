export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose your goal',
      description: 'Pick a language and tell Lingo what you want to improve.'
    },
    {
      number: '02',
      title: 'Practice with AI',
      description: 'Complete short exercises tailored to your current level.'
    },
    {
      number: '03',
      title: 'Build momentum',
      description: 'Track your progress and come back for your next small win.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Three steps. One better habit.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-surface rounded-full border-4 border-muted flex items-center justify-center mb-8 relative z-10 group-hover:border-primary transition-colors duration-500 shadow-sm">
                  <span className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-secondary leading-relaxed max-w-xs mx-auto text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
