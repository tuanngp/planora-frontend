import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { MapPin, Users, Calendar, MoreVertical, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Plan History | Planora",
  description: "View your past and upcoming travel plans.",
};

// Mock data for plans
const mockPlans = [
  {
    id: "plan1",
    title: "Hanoi Adventure",
    destination: "Hanoi, Vietnam",
    startDate: "2024-05-15",
    endDate: "2024-05-20",
    travelers: 2,
    status: "upcoming",
    image: "/images/hanoi.jpg",
  },
  {
    id: "plan2",
    title: "Ho Chi Minh City Weekend",
    destination: "Ho Chi Minh City, Vietnam",
    startDate: "2024-03-10",
    endDate: "2024-03-12",
    travelers: 1,
    status: "completed",
    image: "/images/hochiminh.jpg",
  },
  {
    id: "plan3",
    title: "Da Nang Beach Trip",
    destination: "Da Nang, Vietnam",
    startDate: "2024-01-05",
    endDate: "2024-01-12",
    travelers: 4,
    status: "completed",
    image: "/images/danang.jpg",
  },
  {
    id: "plan4",
    title: "Hue Cultural Experience",
    destination: "Hue, Vietnam",
    startDate: "2023-11-20",
    endDate: "2023-11-25",
    travelers: 2,
    status: "completed",
    image: "/images/hue.jpg",
  },
  {
    id: "plan5",
    title: "Phu Quoc Island Retreat",
    destination: "Phu Quoc, Vietnam",
    startDate: "2024-06-10",
    endDate: "2024-06-17",
    travelers: 3,
    status: "draft",
    image: "/images/phuquoc.jpg",
  },
];

function formatDateRange(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const startMonth = start.toLocaleString('default', { month: 'short' });
  const endMonth = end.toLocaleString('default', { month: 'short' });
  
  if (startMonth === endMonth) {
    return `${startMonth} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
  } else {
    return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${start.getFullYear()}`;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "upcoming":
      return "bg-blue-500";
    case "completed":
      return "bg-green-500";
    case "draft":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
}

export default function HistoryPage() {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-8">
        {/* Header & Statistics */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Your Travel Plans</h1>
            <p className="text-muted-foreground">
              View and manage your past and upcoming travel plans
            </p>
          </div>
          <Button asChild>
            <Link href="/planner/create">Create New Plan</Link>
          </Button>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{mockPlans.length}</CardTitle>
              <CardDescription>Total Plans</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">
                {mockPlans.filter(p => p.status === "upcoming").length}
              </CardTitle>
              <CardDescription>Upcoming Trips</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">
                {mockPlans.filter(p => p.status === "completed").length}
              </CardTitle>
              <CardDescription>Completed Trips</CardDescription>
            </CardHeader>
          </Card>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search plans..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPlans.map((plan) => (
            <Card key={plan.id} className="overflow-hidden">
              <div className="relative h-40 bg-muted">
                {/* You would use Next.js Image component here in a real implementation */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url(${plan.image})`,
                    backgroundSize: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <Badge className={`${getStatusColor(plan.status)} text-white border-none`}>
                    {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 pb-0">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{plan.destination}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{formatDateRange(plan.startDate, plan.endDate)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{plan.travelers} {plan.travelers === 1 ? "traveler" : "travelers"}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-4">
                <Button variant="outline" asChild>
                  <Link href={`/planner/${plan.id}`}>View Plan</Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 