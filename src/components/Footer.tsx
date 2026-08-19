import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary/10 p-1.5 rounded-lg">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Lingo</span>
            </div>
            <p className="text-secondary font-medium">
              Your AI language coach.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#product" className="text-secondary hover:text-foreground font-medium transition-colors">Product</a>
            <a href="#how-it-works" className="text-secondary hover:text-foreground font-medium transition-colors">How it works</a>
            <a href="#features" className="text-secondary hover:text-foreground font-medium transition-colors">Features</a>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm font-medium">
            © 2026 Lingo. Built for curious learners.
          </p>
        </div>
      </div>
    </footer>
  );
}
