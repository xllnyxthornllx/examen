import React, { useState } from 'react';
import { questions, Question } from './PRPData';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, GraduationCap } from 'lucide-react';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

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
          <GraduationCap size={48} color="#3498db" />
          <h1>Study Complete</h1>
          <p>Review your results and solidify your knowledge of Platelet-Rich Plasma.</p>
        </header>

        <div className="card results-card">
          <h2>Your Score</h2>
          <div className="score-display">{score} / {questions.length}</div>
          <p style={{ marginBottom: '20px' }}>
            {score > 35 ? "Excellent! You have a deep understanding of PRP protocols." : 
             score > 25 ? "Great job! You've mastered most of the essential concepts." :
             "Good effort. We recommend reviewing the technical explanations to strengthen your foundation."}
          </p>
          <button className="restart-button" onClick={resetQuiz}>
            <RotateCcw size={18} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            Restart Study Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header>
        <h1>PRP Study Platform</h1>
        <p>Master the Science of Autologous Tissue Regeneration</p>
      </header>

      <div className="quiz-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#7f8c8d', fontSize: '0.9rem' }}>
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{currentQuestion.type === 'multiple-choice' ? 'Multiple Choice' : 'True/False'}</span>
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
                    {isCorrect && <CheckCircle2 size={18} color="#27ae60" />}
                    {isWrong && <XCircle size={18} color="#c0392b" />}
                  </div>
                </button>
              );
            })
          ) : (
            [true, false].map((val) => {
              const optionLabel = val ? "True" : "False";
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
                    {isCorrect && <CheckCircle2 size={18} color="#27ae60" />}
                    {isWrong && <XCircle size={18} color="#c0392b" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {isAnswered && (
          <div className="explanation-box">
            <h4>Clinical Insight</h4>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <button 
          className="next-button" 
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestionIndex === questions.length - 1 ? "Finish Session" : "Next Question"}
          <ChevronRight size={18} style={{ verticalAlign: 'middle', marginLeft: '8px' }} />
        </button>
      </div>
    </div>
  );
};

export default App;