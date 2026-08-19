export default function ProductShowcase() {
  return (
    <section id="product" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Learning that feels like progress.
          </h2>
          <p className="text-lg text-secondary">
            Every session is designed to keep you moving forward — without overwhelming you.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Main Showcase Card */}
          <div className="relative bg-muted/30 rounded-[2.5rem] p-4 md:p-8 border border-border/50 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-3xl rounded-full" />
            
            {/* Mock Dashboard UI */}
            <div className="relative bg-surface rounded-3xl border border-border/80 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">
              
              {/* Sidebar / Profile Area (Desktop) */}
              <div className="w-full md:w-64 bg-muted/20 border-r border-border/50 p-6 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-xl font-bold text-primary">
                    J
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Julien</div>
                    <div className="text-xs font-medium text-secondary">Learning French</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface p-3 rounded-xl border border-border shadow-sm">
                    <div className="text-xl mb-1" role="img" aria-label="Fire">🔥</div>
                    <div className="font-bold text-foreground">12</div>
                    <div className="text-[10px] text-secondary font-medium uppercase tracking-wider">Day Streak</div>
                  </div>
                  <div className="bg-surface p-3 rounded-xl border border-border shadow-sm">
                    <div className="text-xl mb-1 text-yellow-500">★</div>
                    <div className="font-bold text-foreground">240</div>
                    <div className="text-[10px] text-secondary font-medium uppercase tracking-wider">Total XP</div>
                  </div>
                </div>

                <div className="mt-auto hidden md:block space-y-2">
                  <div className="h-2 w-full bg-border rounded-full" />
                  <div className="h-2 w-3/4 bg-border rounded-full" />
                  <div className="h-2 w-5/6 bg-border rounded-full" />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 md:p-10 bg-surface">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground">Unit 2: Travel</h3>
                  <span className="text-sm font-medium text-secondary bg-muted px-3 py-1 rounded-full">Lesson 4 of 8</span>
                </div>

                <div className="space-y-4">
                  {/* Active Lesson Card */}
                  <div className="p-5 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between cursor-pointer group transition-all hover:bg-primary/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                        4
                      </div>
                      <div>
                        <div className="font-bold text-foreground group-hover:text-primary transition-colors">At the airport</div>
                        <div className="text-sm text-secondary">Vocabulary & Listening</div>
                      </div>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm shadow-sm transition-transform active:scale-95">
                      Start
                    </button>
                  </div>

                  {/* Upcoming Lesson Card */}
                  <div className="p-5 rounded-2xl border border-border bg-surface flex items-center justify-between opacity-75">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted text-secondary flex items-center justify-center font-bold text-lg">
                        5
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Booking a taxi</div>
                        <div className="text-sm text-secondary">Speaking practice</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-muted flex items-center justify-center" />
                  </div>

                  {/* Upcoming Lesson Card */}
                  <div className="p-5 rounded-2xl border border-border bg-surface flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted text-secondary flex items-center justify-center font-bold text-lg">
                        6
                      </div>
                      <div>
                        <div className="font-bold text-foreground">Review: Unit 2</div>
                        <div className="text-sm text-secondary">Comprehensive test</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-muted flex items-center justify-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
