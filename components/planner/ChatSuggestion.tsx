"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatSuggestionProps {
  text: string;
  onClick: (suggestion: string) => void;
  className?: string;
}

export function ChatSuggestion({ text, onClick, className }: ChatSuggestionProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "h-auto py-1.5 px-3 text-xs rounded-full",
        "whitespace-nowrap hover:bg-primary hover:text-primary-foreground",
        "transition-colors",
        className
      )}
      onClick={() => onClick(text)}
    >
      {text}
    </Button>
  );
}

interface ChatSuggestionGroupProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
  className?: string;
}

export function ChatSuggestionGroup({ 
  suggestions, 
  onSelect, 
  className 
}: ChatSuggestionGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {suggestions.map((suggestion, index) => (
        <ChatSuggestion
          key={index}
          text={suggestion}
          onClick={onSelect}
        />
      ))}
    </div>
  );
} 