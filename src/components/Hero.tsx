import LessonMockup from './LessonMockup';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              Learn a language.<br />
              <span className="text-primary">One small win at a time.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your AI language coach turns everyday practice into personalized, bite-sized lessons that actually stick.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/25">
                Start Learning &rarr;
              </button>
              <a href="#how-it-works" className="text-secondary hover:text-foreground font-medium flex items-center gap-2 group transition-colors">
                See how it works
                <span className="group-hover:translate-y-1 transition-transform">&darr;</span>
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm font-medium text-secondary/80">
              <span>Personalized practice</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>AI-powered lessons</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Learn at your pace</span>
            </div>
          </div>
          
          {/* Right Column: Interactive Mockup */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            {/* Decorative background elements for the mockup */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />
            
            <div className="relative z-10 w-full lg:w-11/12 xl:w-5/6">
              <LessonMockup />
            </div>
            
            {/* Floating decorative UI elements */}
            <div className="absolute top-10 -left-6 bg-surface p-3 rounded-2xl shadow-xl border border-border/50 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label="Fire">🔥</span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground leading-none">12 Day</span>
                  <span className="text-[10px] text-secondary font-medium uppercase tracking-wider">Streak</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
