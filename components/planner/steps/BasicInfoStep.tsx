"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useCreatePlan, Destination } from "../CreatePlanContext";
import { differenceInDays, format, addDays } from "date-fns";
import { CalendarIcon, MapPin, X, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Mock data for destination search (normally this would come from an API)
const mockDestinations = [
  { id: "hanoi", name: "Hanoi", image: "/destinations/hanoi.jpg" },
  { id: "hochiminh", name: "Ho Chi Minh City", image: "/destinations/hochiminh.jpg" },
  { id: "danang", name: "Da Nang", image: "/destinations/danang.jpg" },
  { id: "hue", name: "Hue", image: "/destinations/hue.jpg" },
  { id: "halong", name: "Ha Long Bay", image: "/destinations/halong.jpg" },
  { id: "phuquoc", name: "Phu Quoc Island", image: "/destinations/phuquoc.jpg" },
  { id: "dalat", name: "Da Lat", image: "/destinations/dalat.jpg" },
  { id: "nhatrang", name: "Nha Trang", image: "/destinations/nhatrang.jpg" },
  { id: "sapa", name: "Sapa", image: "/destinations/sapa.jpg" },
  { id: "muine", name: "Mui Ne", image: "/destinations/muine.jpg" },
];

// Form schema
const formSchema = z.object({
  destinationQuery: z.string().optional(),
  startDate: z.date({
    required_error: "Please select a start date",
  }),
  endDate: z.date({
    required_error: "Please select an end date",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function BasicInfoStep() {
  const { formData, updateFormData, goToNextStep, isStepValid } = useCreatePlan();
  const [destinationQuery, setDestinationQuery] = useState("");
  const [showDestinations, setShowDestinations] = useState(false);
  
  // Form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinationQuery: "",
      startDate: formData.startDate,
      endDate: formData.endDate,
    },
  });

  // Filter destinations based on search query
  const filteredDestinations = mockDestinations.filter(dest => 
    dest.name.toLowerCase().includes(destinationQuery.toLowerCase())
  );

  // Add a destination
  const addDestination = (destination: Destination) => {
    if (formData.destinations.length >= 5) {
      alert("You can add up to 5 destinations.");
      return;
    }
    
    if (!formData.destinations.find(d => d.id === destination.id)) {
      updateFormData("destinations", [...formData.destinations, destination]);
    }
    
    setDestinationQuery("");
    setShowDestinations(false);
  };

  // Remove a destination
  const removeDestination = (id: string) => {
    updateFormData(
      "destinations", 
      formData.destinations.filter(d => d.id !== id)
    );
  };

  // Date range helpers
  const onDateRangeChange = (field: "startDate" | "endDate", value: Date | undefined) => {
    if (!value) return;
    
    updateFormData(field, value);
    
    // Adjust end date if start date is after it
    if (field === "startDate" && formData.endDate && value > formData.endDate) {
      updateFormData("endDate", addDays(value, 1));
    }
  };

  // Trip duration
  const getTripDuration = () => {
    if (formData.startDate && formData.endDate) {
      return differenceInDays(formData.endDate, formData.startDate) + 1;
    }
    return 0;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Basic Information</h2>
        <p className="text-muted-foreground">
          Let's start with your destinations and travel dates.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <div className="space-y-6">
              {/* Destinations */}
              <div className="space-y-4">
                <FormLabel>Destinations</FormLabel>
                
                {/* Destination pills */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.destinations.map(destination => (
                    <div 
                      key={destination.id}
                      className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      <MapPin className="h-3 w-3" />
                      <span>{destination.name}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 hover:bg-secondary-foreground/10"
                        onClick={() => removeDestination(destination.id)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {destination.name}</span>
                      </Button>
                    </div>
                  ))}
                </div>
                
                {/* Destination search */}
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="destinationQuery"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="Search for a destination..."
                              className="pl-8"
                              value={destinationQuery}
                              onChange={(e) => {
                                setDestinationQuery(e.target.value);
                                setShowDestinations(e.target.value.length > 0);
                              }}
                              onFocus={() => setShowDestinations(destinationQuery.length > 0)}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          You can add up to 5 destinations.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Destination results */}
                  {showDestinations && (
                    <Card className="absolute top-full left-0 right-0 mt-1 z-10 max-h-[200px] overflow-auto">
                      <CardContent className="p-1">
                        {filteredDestinations.length === 0 ? (
                          <div className="p-2 text-sm text-muted-foreground">
                            No destinations found
                          </div>
                        ) : (
                          <div className="space-y-1">
                            {filteredDestinations.map(destination => (
                              <div
                                key={destination.id}
                                className="flex items-center gap-2 p-2 hover:bg-secondary rounded cursor-pointer text-sm"
                                onClick={() => addDestination(destination)}
                              >
                                <MapPin className="h-3 w-3" />
                                <span>{destination.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
              
              {/* Date Range */}
              <div className="space-y-4">
                <FormLabel>Travel Dates</FormLabel>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Start Date */}
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.startDate}
                              onSelect={(date) => onDateRangeChange("startDate", date)}
                              disabled={(date) => 
                                date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                (formData.endDate !== undefined && 
                                  differenceInDays(formData.endDate, date) > 30)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* End Date */}
                  <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.endDate}
                              onSelect={(date) => onDateRangeChange("endDate", date)}
                              disabled={(date) => 
                                (formData.startDate === undefined) ||
                                date < formData.startDate ||
                                (formData.startDate !== undefined &&
                                  differenceInDays(date, formData.startDate) > 30)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {formData.startDate && formData.endDate && (
                  <div className="text-sm font-medium">
                    Duration: {getTripDuration()} {getTripDuration() === 1 ? "day" : "days"}
                  </div>
                )}
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button 
          disabled={!isStepValid("basic")}
          onClick={goToNextStep}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
} 