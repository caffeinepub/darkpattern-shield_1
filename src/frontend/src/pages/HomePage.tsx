import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Shield, Search, FileText, Chrome } from 'lucide-react';
import { LogoWithWordmark } from '@/components/Branding';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with Background */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/smart-city-background.dim_1920x1080.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <LogoWithWordmark className="justify-center mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Protect Yourself from Digital Dark Patterns
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern social media platforms hide dangerous subscription traps in plain sight. Learn to
              identify and avoid them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/detector">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Check Offer Risk
                </Button>
              </Link>
              <Link to="/report">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                  <FileText className="mr-2 h-5 w-5" />
                  Report Scam
                </Button>
              </Link>
              <Link to="/risk-test">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                  <Shield className="mr-2 h-5 w-5" />
                  Know Your Risk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Real-Life Examples Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Common Dark Patterns You Should Know</h3>
            <p className="text-lg text-muted-foreground">
              These manipulative tactics are designed to trick you into unwanted subscriptions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive mt-1" />
                  <div>
                    <CardTitle className="text-xl">The ₹1 Trial Trap</CardTitle>
                    <CardDescription className="mt-2">Instagram & Facebook Ads</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  "Try our premium service for just ₹1!" — What they don't tell you clearly: After 3 days,
                  you'll be automatically charged ₹599/month. The cancellation process is hidden in tiny
                  text or requires calling customer service during limited hours.
                </p>
                <div className="mt-4 p-3 bg-destructive/10 rounded-md">
                  <p className="text-xs font-medium text-destructive">
                    Real Example: Beauty subscription boxes, streaming services, and "free trial" apps
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive mt-1" />
                  <div>
                    <CardTitle className="text-xl">Hidden Auto-Renewal</CardTitle>
                    <CardDescription className="mt-2">E-commerce & App Stores</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  "Get 50% off your first month!" — The subscription automatically renews at full price.
                  The "Cancel Subscription" button is buried in account settings, and you receive no
                  reminder before renewal. Some services make you confirm cancellation multiple times.
                </p>
                <div className="mt-4 p-3 bg-destructive/10 rounded-md">
                  <p className="text-xs font-medium text-destructive">
                    Real Example: Fitness apps, meal kit services, and online course platforms
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How We Help Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Search className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Detect Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Paste any offer text or ad link to instantly analyze hidden subscription traps and dark
                  patterns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Test Yourself</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Take our 5-question quiz to discover your digital vulnerability score and get personalized
                  safety tips
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>Report Scams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Help protect others by reporting scams you encounter. View community statistics and trends
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
