import { Metadata } from "next";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  MapPin, 
  Users, 
  Clock, 
  DollarSign, 
  Share2, 
  Download, 
  Printer, 
  MoreHorizontal,
  Edit,
  Copy,
  Sun,
  CloudRain,
  Cloud,
  Thermometer,
  CheckCircle2,
  Circle,
  Utensils,
  Landmark,
  Car,
  MapIcon
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

interface PlanDetailsProps {
  params: {
    id: string;
  };
}

// Mock plan data (in a real app, this would come from an API or database)
const mockPlan = {
  id: "plan1",
  title: "Hanoi Adventure",
  destination: "Hanoi, Vietnam",
  startDate: "2024-05-15",
  endDate: "2024-05-20",
  travelers: 2,
  status: "upcoming",
  totalDays: 6,
  totalActivities: 12,
  totalBudget: 15000000, // VND
  weather: [
    { day: "May 15", condition: "sunny", high: 32, low: 24, icon: Sun },
    { day: "May 16", condition: "sunny", high: 33, low: 25, icon: Sun },
    { day: "May 17", condition: "rainy", high: 30, low: 24, icon: CloudRain },
    { day: "May 18", condition: "cloudy", high: 29, low: 23, icon: Cloud },
    { day: "May 19", condition: "rainy", high: 28, low: 22, icon: CloudRain },
    { day: "May 20", condition: "cloudy", high: 31, low: 24, icon: Cloud },
  ],
  checklist: [
    { id: "item1", text: "Book flight tickets", checked: true },
    { id: "item2", text: "Reserve accommodation", checked: true },
    { id: "item3", text: "Apply for visa", checked: true },
    { id: "item4", text: "Purchase travel insurance", checked: false },
    { id: "item5", text: "Exchange currency", checked: false },
    { id: "item6", text: "Pack essentials", checked: false },
  ],
  days: [
    {
      date: "2024-05-15",
      activities: [
        { 
          id: "act1", 
          time: "08:00", 
          title: "Breakfast at Pho Bat Dan", 
          type: "food", 
          duration: "1 hour",
          location: "49 Bat Dan Street, Hang Bo, Hoan Kiem",
          notes: "Arrive early to avoid long lines.",
          cost: 100000,
        },
        { 
          id: "act2", 
          time: "09:30", 
          title: "Visit Temple of Literature", 
          type: "attraction", 
          duration: "1.5 hours",
          location: "58 Quoc Tu Giam Street, Dong Da",
          notes: "Vietnam's first national university, built in 1070.",
          cost: 30000,
        },
        { 
          id: "act3", 
          time: "11:30", 
          title: "Travel to Hoan Kiem Lake", 
          type: "transport", 
          duration: "30 minutes",
          location: "Hoan Kiem District",
          notes: "Take a Grab car or taxi.",
          cost: 40000,
        },
        { 
          id: "act4", 
          time: "12:00", 
          title: "Lunch at Bun Cha Huong Lien", 
          type: "food", 
          duration: "1 hour",
          location: "24 Le Van Huu Street, Hai Ba Trung",
          notes: "Famous spot where Obama ate with Anthony Bourdain.",
          cost: 120000,
        },
      ]
    },
    {
      date: "2024-05-16",
      activities: [
        { 
          id: "act5", 
          time: "07:00", 
          title: "Morning Walk at West Lake", 
          type: "activity", 
          duration: "1 hour",
          location: "Tay Ho District",
          notes: "Beautiful views in the morning.",
          cost: 0,
        },
        { 
          id: "act6", 
          time: "08:30", 
          title: "Breakfast at Pho Thin", 
          type: "food", 
          duration: "1 hour",
          location: "13 Lo Duc Street, Hai Ba Trung",
          notes: "One of the best pho places in Hanoi.",
          cost: 80000,
        },
      ]
    },
  ]
};

function getActivityIcon(type: string) {
  switch (type) {
    case "food":
      return <Utensils className="h-4 w-4" />;
    case "attraction":
      return <Landmark className="h-4 w-4" />;
    case "transport":
      return <Car className="h-4 w-4" />;
    case "activity":
      return <MapIcon className="h-4 w-4" />;
    default:
      return <Calendar className="h-4 w-4" />;
  }
}

function getActivityColor(type: string) {
  switch (type) {
    case "food":
      return "text-orange-500";
    case "attraction":
      return "text-blue-500";
    case "transport":
      return "text-purple-500";
    case "activity":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
}

export const metadata: Metadata = {
  title: `${mockPlan.title} | Planora`,
  description: `View your travel plan for ${mockPlan.destination}`,
};

export default function PlanDetailsPage({ params }: PlanDetailsProps) {
  const { id } = params;
  
  // In a real app, you would fetch the plan data based on the ID
  // For this example, we'll use mock data and return 404 if the ID doesn't match
  
  if (id !== "plan1") {
    notFound();
  }
  
  // Format date range for display
  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const endMonth = endDate.toLocaleString('default', { month: 'short' });
    
    if (startMonth === endMonth) {
      return `${startMonth} ${startDate.getDate()}-${endDate.getDate()}, ${startDate.getFullYear()}`;
    } else {
      return `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}, ${startDate.getFullYear()}`;
    }
  };
  
  // Format price in VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="container max-w-7xl mx-auto py-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{mockPlan.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span>{mockPlan.destination}</span>
              <span className="mx-1">•</span>
              <Calendar className="h-4 w-4" />
              <span>{formatDateRange(mockPlan.startDate, mockPlan.endDate)}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Plan
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Copy className="h-4 w-4" />
                  Duplicate
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Overview and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan Stats */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trip Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Duration</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{mockPlan.totalDays} days</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Travelers</span>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{mockPlan.travelers}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Activities</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{mockPlan.totalActivities}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Budget</span>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{formatPrice(mockPlan.totalBudget)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Weather Forecast */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Weather Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockPlan.weather.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <day.icon className="h-5 w-5 text-blue-500" />
                        <span className="text-sm">{day.day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-red-500" />
                        <span className="text-sm">{day.high}°C</span>
                        <span className="text-xs text-muted-foreground">/</span>
                        <Thermometer className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">{day.low}°C</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Preparation Checklist */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Preparation Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockPlan.checklist.map((item) => (
                    <div key={item.id} className="flex items-start space-x-2">
                      <Checkbox id={item.id} defaultChecked={item.checked} />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor={item.id}
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                            item.checked ? 'line-through text-muted-foreground' : ''
                          }`}
                        >
                          {item.text}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="text-xs">
                  + Add Item
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-2 border-b">
                <Tabs defaultValue="itinerary">
                  <TabsList>
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="map">Map</TabsTrigger>
                    <TabsTrigger value="budget">Budget</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="p-4">
                <TabsContent value="itinerary" className="mt-0 space-y-6">
                  {mockPlan.days.map((day, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="font-semibold text-lg">
                        Day {index + 1}: {new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </h3>
                      
                      <div className="space-y-2">
                        {day.activities.map((activity) => (
                          <Card key={activity.id} className="overflow-hidden">
                            <div className="flex border-l-4 border-blue-500">
                              <div className="py-3 px-4 text-center border-r">
                                <div className="text-sm font-semibold">{activity.time}</div>
                                <div className="text-xs text-muted-foreground">{activity.duration}</div>
                              </div>
                              
                              <CardContent className="py-3 px-4 flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                  <div>
                                    <h4 className="font-medium">{activity.title}</h4>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                      <MapPin className="h-3 w-3" />
                                      <span>{activity.location}</span>
                                    </div>
                                    {activity.notes && (
                                      <p className="text-xs mt-2 text-muted-foreground">
                                        {activity.notes}
                                      </p>
                                    )}
                                  </div>
                                  
                                  <div className="flex items-center gap-2 text-xs">
                                    <Badge variant="outline" className="text-xs">
                                      {activity.type}
                                    </Badge>
                                    {activity.cost > 0 && (
                                      <Badge variant="secondary" className="text-xs">
                                        {formatPrice(activity.cost)}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </CardContent>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="map" className="mt-0">
                  <div className="h-[600px] bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive map will be displayed here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="budget" className="mt-0">
                  <div className="h-[600px] bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Budget breakdown will be displayed here</p>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 