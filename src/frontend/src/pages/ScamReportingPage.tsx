import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { useSubmitReport } from '@/hooks/useQueries';
import ReportsDashboard from '@/components/ReportsDashboard';

type ScamCategory = 'Subscription Trap' | 'Fake Discount' | 'OTP Scam';

export default function ScamReportingPage() {
  const [scamText, setScamText] = useState('');
  const [screenshotDesc, setScreenshotDesc] = useState('');
  const [category, setCategory] = useState<ScamCategory | ''>('');
  const [showSuccess, setShowSuccess] = useState(false);

  const submitReportMutation = useSubmitReport();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scamText.trim() || !category) return;

    const fullDescription = screenshotDesc.trim()
      ? `${scamText}\n\nScreenshot Description: ${screenshotDesc}`
      : scamText;

    try {
      await submitReportMutation.mutateAsync({
        description: fullDescription,
        category: category as ScamCategory,
      });
      setShowSuccess(true);
      setScamText('');
      setScreenshotDesc('');
      setCategory('');
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit report:', error);
    }
  };

  const handleReset = () => {
    setScamText('');
    setScreenshotDesc('');
    setCategory('');
    setShowSuccess(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <FileText className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Report a Scam</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help protect others by reporting scams you've encountered. Your report contributes to community
            awareness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Report Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Submit a Report</CardTitle>
              <CardDescription>Provide details about the scam you encountered</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {showSuccess && (
                  <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      Report submitted successfully! Thank you for helping protect the community.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Error Message */}
                {submitReportMutation.isError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Failed to submit report. Please try again.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Scam Text */}
                <div className="space-y-2">
                  <Label htmlFor="scam-text">
                    Scam Text <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="scam-text"
                    placeholder="Describe the scam, paste the ad text, or provide details about what happened..."
                    value={scamText}
                    onChange={(e) => setScamText(e.target.value)}
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>

                {/* Screenshot Description */}
                <div className="space-y-2">
                  <Label htmlFor="screenshot-desc">Screenshot Description (Optional)</Label>
                  <Input
                    id="screenshot-desc"
                    placeholder="Describe any screenshots or visual evidence you have..."
                    value={screenshotDesc}
                    onChange={(e) => setScreenshotDesc(e.target.value)}
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">
                    Scam Category <span className="text-destructive">*</span>
                  </Label>
                  <Select value={category} onValueChange={(value) => setCategory(value as ScamCategory)}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Subscription Trap">Subscription Trap</SelectItem>
                      <SelectItem value="Fake Discount">Fake Discount</SelectItem>
                      <SelectItem value="OTP Scam">OTP Scam</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-3">
                  <Button
                    type="submit"
                    disabled={!scamText.trim() || !category || submitReportMutation.isPending}
                    className="flex-1"
                  >
                    {submitReportMutation.isPending ? 'Submitting...' : 'Submit Report'}
                  </Button>
                  {showSuccess && (
                    <Button type="button" variant="outline" onClick={handleReset}>
                      Submit Another
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Dashboard */}
          <div>
            <ReportsDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
