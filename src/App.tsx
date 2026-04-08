import React, { useState, useEffect } from 'react';
import { questions } from './PRPData';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  GraduationCap, 
  Moon, 
  Sun 
} from 'lucide-react';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string | boolean) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="app-container">
        <header>
          <button className="theme-toggle" onClick={toggleTheme} title="Cambiar tema">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <GraduationCap size={64} color="var(--accent-color)" style={{ marginBottom: '1rem' }} />
          <h1>Estudio Completado</h1>
          <p>Revisa tus resultados y consolida tus conocimientos sobre PRP.</p>
        </header>

        <div className="card results-card">
          <h2>Tu Puntuación</h2>
          <div className="score-display">{score} / {questions.length}</div>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            {score > 35 ? "¡Excelente! Tienes un dominio profundo de los protocolos de PRP." : 
             score > 25 ? "¡Buen trabajo! Has dominado la mayoría de los conceptos esenciales." :
             "Buen esfuerzo. Te recomendamos revisar las explicaciones técnicas para fortalecer tus bases."}
          </p>
          <button className="restart-button" onClick={resetQuiz}>
            <RotateCcw size={20} />
            Reiniciar Sesión de Estudio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header>
        <button className="theme-toggle" onClick={toggleTheme} title="Cambiar tema">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <h1>Plataforma PRP</h1>
        <p>Domina la Ciencia de la Regeneración Tisular Autóloga</p>
      </header>

      <div className="quiz-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>
          <span>PREGUNTA {currentQuestionIndex + 1} DE {questions.length}</span>
          <span style={{ textTransform: 'uppercase' }}>
            {currentQuestion.type === 'multiple-choice' ? 'Opción Múltiple' : 'Verdadero / Falso'}
          </span>
        </div>

        <h3 className="question-text">{currentQuestion.question}</h3>

        <div className="options-grid">
          {currentQuestion.type === 'multiple-choice' ? (
            currentQuestion.options?.map((option, index) => {
              const isCorrect = isAnswered && option === currentQuestion.correctAnswer;
              const isWrong = isAnswered && selectedAnswer === option && option !== currentQuestion.correctAnswer;
              
              return (
                <button
                  key={index}
                  className={`option-button ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''} ${selectedAnswer === option && !isAnswered ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{option}</span>
                    {isCorrect && <CheckCircle2 size={20} />}
                    {isWrong && <XCircle size={20} />}
                  </div>
                </button>
              );
            })
          ) : (
            [true, false].map((val) => {
              const optionLabel = val ? "Verdadero" : "Falso";
              const isCorrect = isAnswered && val === currentQuestion.correctAnswer;
              const isWrong = isAnswered && selectedAnswer === val && val !== currentQuestion.correctAnswer;

              return (
                <button
                  key={val.toString()}
                  className={`option-button ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''} ${selectedAnswer === val && !isAnswered ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(val)}
                  disabled={isAnswered}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{optionLabel}</span>
                    {isCorrect && <CheckCircle2 size={20} />}
                    {isWrong && <XCircle size={20} />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {isAnswered && (
          <div className="explanation-box">
            <h4>Información Clínica</h4>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <button 
          className="next-button" 
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestionIndex === questions.length - 1 ? "Finalizar Sesión" : "Siguiente Pregunta"}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
