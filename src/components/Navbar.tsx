import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleLogoClick = () => {
    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);
    if (newClicks === 5) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setLogoClicks(0);
      }, 3000);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer select-none" onClick={handleLogoClick}>
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Leaf className={`h-6 w-6 ${showEasterEgg ? 'text-yellow-500 animate-spin' : 'text-primary'}`} />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">Lingo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-secondary hover:text-foreground transition-colors font-medium text-sm">Product</a>
            <a href="#how-it-works" className="text-secondary hover:text-foreground transition-colors font-medium text-sm">How it works</a>
            <a href="#features" className="text-secondary hover:text-foreground transition-colors font-medium text-sm">Features</a>
          </div>

          {/* Desktop CTAs & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2 rounded-full text-secondary hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="text-secondary hover:text-foreground font-medium text-sm px-3 py-2 transition-colors">Log in</button>
            <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm">
              Start Learning
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-foreground focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Easter Egg Toast */}
      {showEasterEgg && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-fade-in-up">
          🎉 Secret Unlocked: +50 Bonus XP!
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-inner">
            <a href="#product" className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg" onClick={() => setIsOpen(false)}>Product</a>
            <a href="#how-it-works" className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg" onClick={() => setIsOpen(false)}>How it works</a>
            <a href="#features" className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg" onClick={() => setIsOpen(false)}>Features</a>
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="w-full text-left px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg flex items-center justify-between"
            >
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="h-px bg-border my-2"></div>
            <button className="w-full text-left px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg">Log in</button>
            <button className="w-full bg-primary text-white px-3 py-3 text-base font-medium rounded-lg text-center mt-2 shadow-sm">Start Learning</button>
          </div>
        </div>
      )}
    </nav>
  );
}
