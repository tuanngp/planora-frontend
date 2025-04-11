"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Calendar, 
  History, 
  MessageSquareText,
  PlusCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PlannerLayoutProps {
  children: React.ReactNode;
}

export function PlannerLayout({ children }: PlannerLayoutProps) {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Travel Planner</h1>
          <p className="text-muted-foreground">
            Create and manage your travel plans with AI-powered recommendations.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/planner/create" 
              className={cn(
                "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                isActive("/planner/create") && "text-foreground font-medium"
              )}
            >
              <PlusCircle className="h-4 w-4" />
              <span>Create Plan</span>
            </Link>
            <Link 
              href="/planner/history" 
              className={cn(
                "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                isActive("/planner/history") && "text-foreground font-medium"
              )}
            >
              <History className="h-4 w-4" />
              <span>History</span>
            </Link>
            <Link 
              href="/planner/travel-bot" 
              className={cn(
                "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                isActive("/planner/travel-bot") && "text-foreground font-medium"
              )}
            >
              <MessageSquareText className="h-4 w-4" />
              <span>TravelBot</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full">
            <Tabs defaultValue={
              isActive("/planner/create") 
                ? "create" 
                : isActive("/planner/history") 
                  ? "history" 
                  : isActive("/planner/travel-bot") 
                    ? "travel-bot" 
                    : "create"
            }>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="create" asChild>
                  <Link href="/planner/create" className="flex items-center gap-2 justify-center">
                    <PlusCircle className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only">Create</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="history" asChild>
                  <Link href="/planner/history" className="flex items-center gap-2 justify-center">
                    <History className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only">History</span>
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="travel-bot" asChild>
                  <Link href="/planner/travel-bot" className="flex items-center gap-2 justify-center">
                    <MessageSquareText className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only">TravelBot</span>
                  </Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/planner/create">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New Plan
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
} 