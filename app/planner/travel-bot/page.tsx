import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Sparkles, MessagesSquare, MessageSquareText, Info, Clock, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "TravelBot | Planora",
  description: "AI-powered travel assistant to help plan your perfect trip",
};

type MessageType = "user" | "bot";

interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}

// Mock conversation data
const mockMessages: Message[] = [
  {
    id: "1",
    type: "bot",
    content: "👋 Hello! I'm TravelBot, your AI travel assistant. How can I help you plan your trip today?",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: "2",
    type: "user",
    content: "What are some good places to visit in Hanoi?",
    timestamp: new Date(Date.now() - 3500000),
  },
  {
    id: "3",
    type: "bot",
    content: "Hanoi, the capital of Vietnam, offers many fascinating attractions! Here are some must-visit places:\n\n1. **Hoan Kiem Lake & Ngoc Son Temple** - A peaceful lake in the heart of the city\n2. **Old Quarter** - Historic district with narrow streets and traditional shops\n3. **Temple of Literature** - Vietnam's first national university\n4. **Ho Chi Minh Mausoleum** - Final resting place of Vietnam's revolutionary leader\n5. **Hoa Lo Prison Museum** - Historical site from French colonial period\n6. **Vietnam Museum of Ethnology** - Learn about Vietnam's diverse ethnic groups\n7. **Train Street** - Famous narrow street with a train running through\n\nWould you like specific recommendations for any of these places?",
    timestamp: new Date(Date.now() - 3400000),
  },
  {
    id: "4", 
    type: "user",
    content: "Tell me more about Train Street. Is it safe to visit?",
    timestamp: new Date(Date.now() - 1000000),
  },
  {
    id: "5",
    type: "bot",
    content: "Train Street (Ngo 224 Le Duan) is a narrow residential street in Hanoi where a working train track runs extremely close to buildings. It became a popular tourist spot for photos.\n\n**Important safety note**: In 2019, authorities restricted access to parts of Train Street due to safety concerns. Some sections were closed to tourists, with barricades erected to prevent access when trains pass.\n\nIf you visit:\n- Follow all local regulations and safety barriers\n- Only view from designated safe areas\n- Never stand on the tracks when trains are approaching\n- Visit with a local guide who knows the current status\n\nThe train passes at specific times of day, so timing your visit is important. Would you like information about alternative photo spots in Hanoi?",
    timestamp: new Date(Date.now() - 900000),
  },
];

// Suggestions for quick replies
const suggestions = [
  "What's the best time to visit Vietnam?",
  "Recommend a 3-day itinerary for Hanoi",
  "Budget-friendly food options in Hanoi",
  "How to get from Hanoi to Ha Long Bay?",
];

function ChatMessage({ message }: { message: Message }) {
  const isBot = message.type === "bot";
  
  return (
    <div className={cn(
      "flex gap-3 mb-4", 
      isBot ? "justify-start" : "justify-end"
    )}>
      {isBot && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/images/travelbot-avatar.png" />
          <AvatarFallback className="bg-primary text-primary-foreground">TB</AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "rounded-lg p-3 max-w-[80%]",
        isBot ? "bg-secondary" : "bg-primary text-primary-foreground"
      )}>
        <div className="whitespace-pre-line">
          {message.content}
        </div>
        <div className={cn(
          "text-xs mt-1",
          isBot ? "text-muted-foreground" : "text-primary-foreground/70"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {!isBot && (
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-secondary">You</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

export default function TravelBotPage() {
  return (
    <div className="container max-w-6xl mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-[calc(100vh-10rem)]">
            <CardHeader className="pb-3 border-b">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/images/travelbot-avatar.png" />
                  <AvatarFallback className="bg-primary text-primary-foreground">TB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">TravelBot</CardTitle>
                  <CardDescription>Your AI travel assistant</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
              <div className="space-y-4">
                {mockMessages.map(message => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-3 border-t">
              <div className="w-full space-y-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {suggestions.map((suggestion, index) => (
                    <Button key={index} variant="outline" size="sm" className="text-xs">
                      {suggestion}
                    </Button>
                  ))}
                </div>
                
                <form className="flex items-center w-full gap-2">
                  <Input
                    placeholder="Ask TravelBot about your trip..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </form>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="hidden lg:block">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  TravelBot Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <MessageSquareText className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Natural Conversations</p>
                    <p className="text-xs text-muted-foreground">
                      Ask questions naturally about destinations, activities, and travel tips.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Local Knowledge</p>
                    <p className="text-xs text-muted-foreground">
                      Get insights about attractions, local customs, and hidden gems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Itinerary Planning</p>
                    <p className="text-xs text-muted-foreground">
                      Request customized day-by-day travel plans based on your preferences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                  Travel Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm space-y-3">
                  <p><span className="font-medium">Hanoi Weather:</span> Best visited from October to December or March to April for pleasant temperatures.</p>
                  <p><span className="font-medium">Currency:</span> Vietnamese Dong (VND). ATMs are widely available in cities.</p>
                  <p><span className="font-medium">Transportation:</span> Grab is convenient for getting around cities. Motorbike taxis (xe om) are also common.</p>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-3">
                <Button variant="outline" className="w-full text-sm">
                  <MessagesSquare className="h-4 w-4 mr-2" />
                  Ask about specific travel tips
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 