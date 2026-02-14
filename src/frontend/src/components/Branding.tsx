import { Shield } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/assets/generated/darkpattern-shield-logo.dim_512x512.png"
      alt="DarkPattern Shield Logo"
      className={className}
    />
  );
}

export function LogoWithWordmark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="h-12 w-12" />
      <div>
        <h1 className="text-2xl font-bold tracking-tight">DarkPattern Shield</h1>
        <p className="text-sm text-muted-foreground">Public Safety Awareness</p>
      </div>
    </div>
  );
}
