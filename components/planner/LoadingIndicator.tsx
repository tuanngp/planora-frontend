"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingIndicatorProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function LoadingIndicator({ 
  size = 'md', 
  text = 'Loading...', 
  className 
}: LoadingIndicatorProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  };
  
  return (
    <div className={cn(
      "flex flex-col items-center justify-center gap-2",
      className
    )}>
      <Loader2 className={cn(
        sizeClasses[size],
        "animate-spin text-primary"
      )} />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

interface LoadingStateProps {
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  height?: string;
  className?: string;
}

export function LoadingState({
  isLoading,
  children,
  fallback,
  height = "h-48",
  className
}: LoadingStateProps) {
  if (!isLoading) {
    return <>{children}</>;
  }
  
  return (
    <div className={cn(
      "w-full flex items-center justify-center",
      height,
      className
    )}>
      {fallback || <LoadingIndicator />}
    </div>
  );
} 