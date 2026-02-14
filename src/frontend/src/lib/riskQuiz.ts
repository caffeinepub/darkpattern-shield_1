export interface QuizQuestion {
  id: string;
  question: string;
  options: Array<{ value: string; label: string; score: number }>;
}

export interface QuizAnswers {
  [questionId: string]: string;
}

export interface QuizResults {
  score: number;
  level: 'Low' | 'Moderate' | 'High';
  explanation: string;
  tips: [string, string, string];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'How often do you read the cancellation policy before signing up for a free trial?',
    options: [
      { value: 'always', label: 'Always - I read it thoroughly', score: 0 },
      { value: 'sometimes', label: 'Sometimes - If I remember', score: 20 },
      { value: 'rarely', label: 'Rarely - It is too long', score: 40 },
      { value: 'never', label: 'Never - I just click Accept', score: 60 },
    ],
  },
  {
    id: 'q2',
    question: 'When you see a "₹1 trial" offer on social media, what do you do?',
    options: [
      { value: 'research', label: 'Research the company and read reviews first', score: 0 },
      { value: 'check-terms', label: 'Check what happens after the trial period', score: 10 },
      { value: 'click-sometimes', label: 'Click if it looks interesting', score: 40 },
      { value: 'click-immediately', label: 'Click immediately - it is only ₹1!', score: 60 },
    ],
  },
  {
    id: 'q3',
    question: 'How often do you check your bank statements for unexpected subscription charges?',
    options: [
      { value: 'weekly', label: 'Weekly or more often', score: 0 },
      { value: 'monthly', label: 'Monthly when the statement arrives', score: 15 },
      { value: 'rarely', label: 'Rarely - only when I notice something wrong', score: 40 },
      { value: 'never', label: 'Never - I trust all charges are correct', score: 60 },
    ],
  },
  {
    id: 'q4',
    question: 'Have you ever forgotten to cancel a free trial and been charged?',
    options: [
      { value: 'never', label: 'Never - I set calendar reminders', score: 0 },
      { value: 'once', label: 'Once, but I learned my lesson', score: 20 },
      { value: 'few-times', label: 'A few times - it happens', score: 40 },
      { value: 'many-times', label: 'Many times - I lose track', score: 60 },
    ],
  },
  {
    id: 'q5',
    question: 'When an ad says "Cancel Anytime", how easy do you think it actually is?',
    options: [
      {
        value: 'skeptical',
        label: 'I am skeptical - I test the cancellation process first',
        score: 0,
      },
      { value: 'check-reviews', label: 'I check reviews to see if others had issues', score: 10 },
      { value: 'trust-mostly', label: 'I mostly trust it - they said anytime', score: 40 },
      { value: 'trust-completely', label: 'I completely trust it - why would they lie?', score: 60 },
    ],
  },
];

export function calculateScore(answers: QuizAnswers): QuizResults {
  let totalScore = 0;
  const answerValues: { [key: string]: number } = {};

  quizQuestions.forEach((question) => {
    const answer = answers[question.id];
    if (answer) {
      const option = question.options.find((opt) => opt.value === answer);
      if (option) {
        totalScore += option.score;
        answerValues[question.id] = option.score;
      }
    }
  });

  // Normalize to 0-100 scale (max possible score is 300)
  const normalizedScore = Math.round((totalScore / 300) * 100);

  let level: 'Low' | 'Moderate' | 'High';
  let explanation: string;
  let tips: [string, string, string];

  if (normalizedScore <= 30) {
    level = 'Low';
    explanation =
      'Great job! You have strong digital safety habits and are well-protected against subscription traps. You understand the importance of reading terms, checking cancellation policies, and staying vigilant. Keep up these excellent practices!';
    tips = [
      'Continue setting calendar reminders for all trial periods to maintain your perfect track record.',
      'Share your knowledge with friends and family who may be less aware of these risks.',
      'Stay updated on new dark pattern tactics by following consumer protection resources.',
    ];
  } else if (normalizedScore <= 60) {
    level = 'Moderate';
    explanation =
      'You have some good habits, but there is room for improvement. You are aware of subscription traps but may not always take the necessary precautions. With a few adjustments to your online behavior, you can significantly reduce your vulnerability.';
    tips = [
      'Start reading cancellation policies before every trial signup - it only takes 2 minutes and can save you hundreds of rupees.',
      'Set up automatic calendar reminders 2 days before any trial period ends to give yourself time to cancel.',
      'Review your bank statements weekly to catch unauthorized charges early when they are easier to dispute.',
    ];
  } else {
    level = 'High';
    explanation =
      'Your current habits put you at high risk for subscription traps and hidden charges. Many people fall into these traps, but with awareness and simple changes, you can protect yourself. The good news is that recognizing the problem is the first step to solving it!';
    tips = [
      'URGENT: Check your bank statements right now for any recurring charges you do not recognize. Cancel them immediately.',
      'Before clicking any free trial offer, ask yourself: Do I really need this? and Have I researched this company? Wait 24 hours before signing up.',
      'Use virtual credit cards or payment services that let you create one-time card numbers for trials - this prevents automatic renewals entirely.',
    ];
  }

  return {
    score: normalizedScore,
    level,
    explanation,
    tips,
  };
}
