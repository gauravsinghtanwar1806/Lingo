import { useState } from 'react';
import { Check, X, Star } from 'lucide-react';

export default function LessonMockup() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [xp, setXp] = useState(180);
  const [progress, setProgress] = useState(80);

  const options = [
    { id: 1, text: "Tengo tres libros", isCorrect: true },
    { id: 2, text: "Tengo dos libros", isCorrect: false },
    { id: 3, text: "Tengo cinco libros", isCorrect: false },
  ];

  const handleSelect = (id: number) => {
    if (isSubmitted) return;
    setSelectedOption(id);
  };

  const checkAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
    
    const selected = options.find(o => o.id === selectedOption);
    if (selected?.isCorrect) {
      setXp(prev => prev + 10);
      setProgress(100);
    }
  };

  const resetLesson = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setProgress(80);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-surface rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-border/60 overflow-hidden transform transition-transform hover:-translate-y-1 duration-500">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-muted">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl" role="img" aria-label="Spanish flag">🇪🇸</span>
            <span className="font-semibold text-foreground">Spanish</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-yellow-bg px-3 py-1 rounded-full border border-yellow-bg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-yellow-text">{xp} XP</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium text-secondary">
            <span>Lesson 04</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-secondary uppercase tracking-wider">Translate this sentence</p>
          <p className="text-2xl font-bold text-foreground">"I have three books."</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const showCorrect = isSubmitted && option.isCorrect;
            const showError = isSubmitted && isSelected && !option.isCorrect;
            
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={isSubmitted}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between group
                  ${!isSubmitted && !isSelected ? 'border-border hover:border-primary/40 bg-surface hover:bg-primary/5' : ''}
                  ${isSelected && !isSubmitted ? 'border-primary bg-primary/5 ring-4 ring-primary/10' : ''}
                  ${showCorrect ? 'border-green-500 bg-green-bg text-green-text' : ''}
                  ${showError ? 'border-red-400 bg-red-bg text-red-text' : ''}
                  ${isSubmitted && !showCorrect && !showError ? 'opacity-50 border-border bg-surface cursor-not-allowed' : ''}
                `}
              >
                <span className={`font-medium ${showCorrect ? 'text-green-text' : showError ? 'text-red-text' : 'text-foreground'}`}>
                  {option.text}
                </span>
                
                {/* Icons for feedback */}
                {showCorrect && <Check className="w-5 h-5 text-green-500" />}
                {showError && <X className="w-5 h-5 text-red-500" />}
                
                {/* Radio circle for unsubmitted state */}
                {!isSubmitted && (
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? 'border-primary' : 'border-border group-hover:border-primary/40'}
                  `}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Area */}
      <div className="p-6 pt-2">
        {!isSubmitted ? (
          <button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className={`w-full py-3.5 rounded-xl font-bold text-base transition-all duration-200 transform active:scale-[0.98]
              ${selectedOption !== null 
                ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20' 
                : 'bg-muted text-secondary cursor-not-allowed'}
            `}
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={resetLesson}
            className="w-full py-3.5 rounded-xl font-bold text-base transition-all duration-200 transform active:scale-[0.98] bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/10"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
