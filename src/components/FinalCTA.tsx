export default function FinalCTA() {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-foreground rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-background mb-6 leading-tight">
              Your next language lesson is only a few minutes away.
            </h2>
            <p className="text-xl text-muted/80 mb-10 max-w-2xl mx-auto">
              Start small. Stay consistent. Let Lingo handle the rest.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(132,204,22,0.5)]">
              Start Learning &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
