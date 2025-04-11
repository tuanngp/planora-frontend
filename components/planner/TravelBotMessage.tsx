"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Check, Copy } from "lucide-react";
import ReactMarkdown from "react-markdown";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface TravelBotMessageProps {
  message: Message;
  isLatest?: boolean;
}

export function TravelBotMessage({ message, isLatest = false }: TravelBotMessageProps) {
  const [copied, setCopied] = React.useState(false);
  
  const isBot = message.sender === "bot";
  
  // Copy message content to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  // Format the time
  const timeAgo = formatDistanceToNow(message.timestamp, { addSuffix: true });
  
  return (
    <div className={cn(
      "flex w-full gap-3 p-4",
      isBot ? "bg-muted/50" : "",
      isLatest && isBot ? "rounded-lg border bg-muted/80" : ""
    )}>
      {/* Avatar */}
      {isBot ? (
        <Avatar className="h-8 w-8 mt-1">
          <AvatarImage src="/images/travelbot.png" alt="TravelBot" />
          <AvatarFallback className="bg-primary text-white">TB</AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-8" /> // Space for alignment
      )}
      
      {/* Message content */}
      <div className={cn("flex flex-col flex-1", isBot ? "" : "items-end")}>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">
            {isBot ? "TravelBot" : "You"}
          </p>
          <p className="text-xs text-muted-foreground">
            {timeAgo}
          </p>
        </div>
        
        <div className={cn(
          "mt-1 rounded-lg p-3 max-w-[85%]",
          isBot ? "bg-background border" : "bg-primary text-primary-foreground self-end"
        )}>
          {isBot ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown>
                {message.content}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="whitespace-pre-wrap break-words">
              {message.content}
            </p>
          )}
        </div>
        
        {/* Copy button for bot messages */}
        {isBot && (
          <button 
            onClick={copyToClipboard}
            className="self-end mt-1 p-1 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy message</span>
          </button>
        )}
      </div>
    </div>
  );
} 