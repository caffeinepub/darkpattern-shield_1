import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Info, Search, Shield } from 'lucide-react';
import { analyzeRisk, type RiskAnalysis } from '@/lib/riskDetector';

export default function SubscriptionTrapDetectorPage() {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState<RiskAnalysis | null>(null);

  const handleAnalyze = () => {
    if (inputText.trim()) {
      const result = analyzeRisk(inputText);
      setAnalysis(result);
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'High':
        return <AlertTriangle className="h-5 w-5" />;
      case 'Medium':
        return <Info className="h-5 w-5" />;
      case 'Low':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Shield className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Subscription Trap Detector</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste any offer text, ad copy, or promotional link to analyze potential subscription traps and
            hidden charges
          </p>
        </div>

        {/* Educational Note - Always Visible */}
        <Alert className="border-2">
          <Info className="h-4 w-4" />
          <AlertTitle>What are Dark Patterns?</AlertTitle>
          <AlertDescription>
            Dark patterns are manipulative design tricks used to make you sign up for subscriptions you don't
            want. Common tactics include hiding cancellation policies, using confusing language about
            auto-renewal, and burying important pricing information in fine print. Our detector scans for
            these red flags to help you make informed decisions.
          </AlertDescription>
        </Alert>

        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Analyze an Offer</CardTitle>
            <CardDescription>
              Paste the offer text, ad copy, or URL from social media ads, emails, or websites
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="offer-text">Offer Text or Link</Label>
              <Textarea
                id="offer-text"
                placeholder="Example: Try our premium service for just ₹1! Cancel anytime. After trial period, subscription continues at ₹599/month..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={6}
                className="resize-none"
              />
            </div>
            <Button onClick={handleAnalyze} disabled={!inputText.trim()} size="lg" className="w-full">
              <Search className="mr-2 h-5 w-5" />
              Analyze Risk
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {analysis && (
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getRiskIcon(analysis.level)}
                Risk Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Risk Level Badge */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Risk Level:</span>
                <Badge variant={getRiskColor(analysis.level)} className="text-lg px-4 py-1">
                  {analysis.level}
                </Badge>
              </div>

              {/* Warning Message */}
              <Alert variant={analysis.level === 'High' ? 'destructive' : 'default'}>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Analysis</AlertTitle>
                <AlertDescription className="mt-2">{analysis.message}</AlertDescription>
              </Alert>

              {/* Detected Keywords */}
              {analysis.detectedKeywords.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Detected Warning Signs:</p>
                  <div className="flex flex-wrap gap-2">
                    {analysis.detectedKeywords.map((keyword, index) => (
                      <Badge key={index} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="space-y-2 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm font-medium">Recommendations:</p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Read the full terms and conditions before signing up</li>
                  <li>Look for clear cancellation policies and test them</li>
                  <li>Set calendar reminders before trial periods end</li>
                  <li>Check your bank statements regularly for unexpected charges</li>
                  <li>Use virtual cards or payment methods that are easy to cancel</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
