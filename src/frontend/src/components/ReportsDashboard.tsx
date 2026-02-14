import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useGetStats } from '@/hooks/useQueries';
import { AlertCircle, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

export default function ReportsDashboard() {
  const { data: stats, isLoading, error } = useGetStats();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reports Dashboard</CardTitle>
          <CardDescription>Community scam reporting statistics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Failed to load dashboard statistics</AlertDescription>
      </Alert>
    );
  }

  const formatScamType = (scamType: any): string => {
    if (!scamType) return 'Unknown';
    if (scamType.__kind__ === 'other') return scamType.other;
    return scamType.__kind__
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Reports Dashboard
        </CardTitle>
        <CardDescription>Community scam reporting statistics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-accent/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Total Reports</p>
            <p className="text-3xl font-bold">{stats?.totalReports?.toString() || '0'}</p>
          </div>
          <div className="p-4 rounded-lg bg-accent/50 border border-border">
            <p className="text-sm text-muted-foreground mb-1">Most Common Scam</p>
            {stats?.mostCommonScamType ? (
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="destructive" className="text-sm">
                  {formatScamType(stats.mostCommonScamType.scamType)}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  ({stats.mostCommonScamType.count.toString()} reports)
                </span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground mt-2">No reports yet</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
