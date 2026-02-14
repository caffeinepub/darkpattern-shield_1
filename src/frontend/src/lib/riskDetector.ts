export interface RiskAnalysis {
  level: 'Low' | 'Medium' | 'High';
  message: string;
  detectedKeywords: string[];
}

const HIGH_RISK_KEYWORDS = [
  'auto-renew',
  'auto renew',
  'automatically renew',
  'subscription',
  'recurring',
  'trial',
  'free trial',
  '₹1',
  'rs 1',
  'rs. 1',
  '/month',
  'per month',
  '/year',
  'cancel anytime',
  'no commitment',
];

const MEDIUM_RISK_KEYWORDS = [
  'limited time',
  'offer expires',
  'act now',
  'hurry',
  'only today',
  'special price',
  'discount',
  'save',
  'exclusive',
  'members only',
];

export function analyzeRisk(text: string): RiskAnalysis {
  const lowerText = text.toLowerCase();
  const detectedHigh: string[] = [];
  const detectedMedium: string[] = [];

  // Check for high-risk keywords
  HIGH_RISK_KEYWORDS.forEach((keyword) => {
    if (lowerText.includes(keyword.toLowerCase())) {
      detectedHigh.push(keyword);
    }
  });

  // Check for medium-risk keywords
  MEDIUM_RISK_KEYWORDS.forEach((keyword) => {
    if (lowerText.includes(keyword.toLowerCase())) {
      detectedMedium.push(keyword);
    }
  });

  // Determine risk level
  if (detectedHigh.length >= 3) {
    return {
      level: 'High',
      message:
        'HIGH RISK: This offer contains multiple subscription trap indicators. Be extremely cautious! Look for hidden auto-renewal clauses, difficult cancellation processes, and price increases after trial periods. We strongly recommend reading the full terms and conditions before proceeding.',
      detectedKeywords: detectedHigh,
    };
  } else if (detectedHigh.length >= 1) {
    return {
      level: 'Medium',
      message:
        'MEDIUM RISK: This offer shows some warning signs of potential subscription traps. Before proceeding, verify the cancellation policy, check for auto-renewal terms, and set reminders for any trial period end dates. Make sure you understand the full pricing structure.',
      detectedKeywords: [...detectedHigh, ...detectedMedium],
    };
  } else if (detectedMedium.length >= 2) {
    return {
      level: 'Medium',
      message:
        'MEDIUM RISK: This offer uses urgency tactics that may pressure you into quick decisions. Take your time to research the offer, read reviews, and verify the legitimacy before committing. Legitimate offers will still be available after you have done your research.',
      detectedKeywords: detectedMedium,
    };
  } else {
    return {
      level: 'Low',
      message:
        'LOW RISK: No major red flags detected in this offer. However, always practice safe browsing habits: read terms and conditions, verify the seller, and keep records of your transactions. Stay vigilant even with low-risk offers.',
      detectedKeywords: [...detectedHigh, ...detectedMedium],
    };
  }
}
