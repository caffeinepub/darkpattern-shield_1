import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';
import { quizQuestions, calculateScore, type QuizAnswers } from '@/lib/riskQuiz';

export default function PersonalDigitalRiskTestPage() {
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateScore> | null>(null);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    const score = calculateScore(answers);
    setResults(score);
    setShowResults(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setShowResults(false);
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allQuestionsAnswered = quizQuestions.every((q) => answers[q.id]);
  const progress = (Object.keys(answers).length / quizQuestions.length) * 100;

  if (showResults && results) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Results Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              {results.level === 'Low' && <CheckCircle className="h-16 w-16 text-green-500" />}
              {results.level === 'Moderate' && <Shield className="h-16 w-16 text-yellow-500" />}
              {results.level === 'High' && <AlertTriangle className="h-16 w-16 text-destructive" />}
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Your Digital Vulnerability Score</h1>
            <div className="flex items-center justify-center gap-4">
              <span className="text-6xl font-bold">{results.score}</span>
              <span className="text-2xl text-muted-foreground">/ 100</span>
            </div>
            <Badge
              variant={results.level === 'High' ? 'destructive' : 'default'}
              className="text-lg px-6 py-2"
            >
              {results.level} Vulnerability
            </Badge>
          </div>

          {/* Explanation */}
          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>What This Means</AlertTitle>
            <AlertDescription className="mt-2">{results.explanation}</AlertDescription>
          </Alert>

          {/* Personalized Safety Tips */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Your Personalized Safety Tips</CardTitle>
              <CardDescription>Follow these recommendations to improve your digital safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {results.tips.map((tip, index) => (
                <div key={index} className="flex gap-3 p-4 bg-accent/50 rounded-lg">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed pt-1">{tip}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Retake Button */}
          <div className="flex justify-center">
            <Button onClick={handleRetake} size="lg" variant="outline">
              <RotateCcw className="mr-2 h-5 w-5" />
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Personal Digital Risk Test</h1>
          <p className="text-lg text-muted-foreground">
            Answer 5 questions to discover your digital vulnerability score and get personalized safety tips
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>
              {Object.keys(answers).length} / {quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {quizQuestions.map((question, index) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle className="text-lg">
                  Question {index + 1}: {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[question.id] || ''}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                >
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-3">
                        <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                        <Label
                          htmlFor={`${question.id}-${option.value}`}
                          className="flex-1 cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button onClick={handleSubmit} disabled={!allQuestionsAnswered} size="lg" className="px-12">
            Calculate My Score
          </Button>
        </div>
      </div>
    </div>
  );
}
