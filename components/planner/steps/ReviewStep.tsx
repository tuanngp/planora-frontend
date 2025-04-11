"use client";

import { useCreatePlan } from "../CreatePlanContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { formatPrice } from "@/lib/utils";
import { 
  MapPin, 
  Calendar, 
  TagIcon, 
  DollarSign, 
  ArrowRight, 
  Check,
  Loader2
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function ReviewStep() {
  const { formData, goToPrevStep, resetForm } = useCreatePlan();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate the trip duration
  const getTripDuration = () => {
    if (formData.startDate && formData.endDate) {
      const diffTime = Math.abs(formData.endDate.getTime() - formData.startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays + 1;
    }
    return 0;
  };
  
  // Calculate total trip budget
  const getTotalBudget = () => {
    if (formData.budgetType === "total") {
      return formData.budget;
    } else {
      return formData.budget * getTripDuration();
    }
  };
  
  // Handle plan submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to create a plan
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success handling
      toast.success("Your travel plan has been created successfully!");
      resetForm();
      router.push("/planner/history");
    } catch (error) {
      toast.error("Failed to create travel plan. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Review & Confirm</h2>
        <p className="text-muted-foreground">
          Review your travel plan details before finalizing.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Trip Overview */}
            <div className="p-4 bg-secondary/50 rounded-lg space-y-4">
              <h3 className="text-lg font-medium">Trip Overview</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Destinations</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.destinations.map(d => d.name).join(" → ")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Dates</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.startDate && formData.endDate ? (
                        <>
                          {format(formData.startDate, "MMM d, yyyy")} - {format(formData.endDate, "MMM d, yyyy")}
                          <span className="block text-xs">
                            ({getTripDuration()} days)
                          </span>
                        </>
                      ) : "Not specified"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <TagIcon className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Preferences</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.preferences.length > 0 
                        ? formData.preferences.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(", ")
                        : "None specified"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Budget</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.budgetType === "daily" ? (
                        <>
                          {formatPrice(formData.budget, { notation: "standard", currency: "VND" })} / day
                          <span className="block text-xs">
                            Total: {formatPrice(getTotalBudget(), { notation: "standard", currency: "VND" })}
                          </span>
                        </>
                      ) : (
                        formatPrice(formData.budget, { notation: "standard", currency: "VND" })
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Details */}
            {formData.customPreferences && (
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Additional Preferences</h3>
                <p className="text-sm text-muted-foreground border-l-2 border-primary/50 pl-3 py-2">
                  {formData.customPreferences}
                </p>
              </div>
            )}
            
            {/* What Happens Next */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-medium">What Happens Next?</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Planning</p>
                    <p className="text-xs text-muted-foreground">
                      Our AI will generate a detailed itinerary based on your preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Customization</p>
                    <p className="text-xs text-muted-foreground">
                      You can review and customize the generated plan to your liking.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Booking Recommendations</p>
                    <p className="text-xs text-muted-foreground">
                      Get recommendations for accommodations and activities within your budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={goToPrevStep}
          disabled={isSubmitting}
        >
          Previous
        </Button>
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Plan...
            </>
          ) : (
            <>
              Create Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
} 