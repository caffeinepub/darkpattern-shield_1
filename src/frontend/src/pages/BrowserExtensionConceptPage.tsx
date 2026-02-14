import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Chrome, AlertTriangle, Shield, CheckCircle } from 'lucide-react';

export default function BrowserExtensionConceptPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Chrome className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Browser Extension Concept</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A vision for real-time protection against dark patterns while you browse
          </p>
          <Badge variant="outline" className="text-sm">
            Concept Demo - Not Yet Available
          </Badge>
        </div>

        {/* How It Would Work */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>How the Extension Would Work</CardTitle>
            <CardDescription>Real-time protection as you browse social media and e-commerce sites</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Automatic Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    The extension scans web pages in real-time for subscription trap keywords, hidden
                    auto-renewal clauses, and manipulative pricing tactics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Warnings</h3>
                  <p className="text-sm text-muted-foreground">
                    When you are about to click Buy Now or Start Trial on a risky offer, a warning popup
                    appears with risk level and key information you should know.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Smart Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Get actionable advice: set calendar reminders, check cancellation policies, or use
                    virtual payment cards for easy cancellation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visual Mockup */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Extension Warning Popup (Mockup)</CardTitle>
            <CardDescription>What you would see when the extension detects a risk</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mockup Image */}
            <div className="rounded-lg border-2 border-border overflow-hidden bg-accent/20">
              <img
                src="/assets/generated/extension-popup-mock.dim_1200x800.png"
                alt="Browser Extension Warning Popup Mockup"
                className="w-full h-auto"
              />
            </div>

            {/* Interactive Demo Card */}
            <div className="p-6 rounded-lg border-2 border-destructive bg-destructive/5 space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Subscription Trap Detected</h3>
                  <Badge variant="destructive" className="mb-3">
                    High Risk
                  </Badge>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">Warning Signs Found:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Auto-renewal after trial period</li>
                      <li>Hidden cancellation policy</li>
                      <li>Price increases from ₹1 to ₹599/month</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-3 bg-background rounded border">
                    <p className="text-sm font-medium mb-2">Recommended Actions:</p>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                      <li>Set a calendar reminder 1 day before trial ends</li>
                      <li>Test the cancellation process before subscribing</li>
                      <li>Use a virtual card that you can easily cancel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Features */}
        <Card>
          <CardHeader>
            <CardTitle>Planned Features</CardTitle>
            <CardDescription>What we envision for the full extension</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 rounded-lg bg-accent/50">
                <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Subscription Tracker</h4>
                  <p className="text-xs text-muted-foreground">
                    Keep track of all your active subscriptions and get renewal reminders
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg bg-accent/50">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Safe Site Verification</h4>
                  <p className="text-xs text-muted-foreground">
                    Check if websites have been reported for scams by the community
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg bg-accent/50">
                <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Price History</h4>
                  <p className="text-xs text-muted-foreground">
                    See if discounts are actually fake by checking historical pricing
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-4 rounded-lg bg-accent/50">
                <Chrome className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">One-Click Reporting</h4>
                  <p className="text-xs text-muted-foreground">
                    Report suspicious offers directly from the extension popup
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertTitle>Stay Tuned</AlertTitle>
          <AlertDescription>
            This extension is currently in the concept phase. We are working on bringing real-time protection
            to your browser. In the meantime, use our web-based detector and risk test to stay safe online.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
