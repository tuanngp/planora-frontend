"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useCreatePlan } from "../CreatePlanContext";
import { Compass, UtensilsCrossed, Building, Landmark, Mountain, ShoppingBag, Camera, Dumbbell } from "lucide-react";

// Travel preference categories
const preferenceOptions = [
  { id: "nature", label: "Nature", icon: <Mountain className="h-4 w-4" /> },
  { id: "history", label: "History", icon: <Landmark className="h-4 w-4" /> },
  { id: "relaxation", label: "Relaxation", icon: <Compass className="h-4 w-4" /> },
  { id: "food", label: "Food", icon: <UtensilsCrossed className="h-4 w-4" /> },
  { id: "shopping", label: "Shopping", icon: <ShoppingBag className="h-4 w-4" /> },
  { id: "photography", label: "Photography", icon: <Camera className="h-4 w-4" /> },
  { id: "sports", label: "Sports", icon: <Dumbbell className="h-4 w-4" /> },
  { id: "urban", label: "Urban", icon: <Building className="h-4 w-4" /> },
];

export function PreferencesStep() {
  const { formData, updateFormData, goToNextStep, goToPrevStep } = useCreatePlan();
  
  // Handler for preference checkbox change
  const handlePreferenceChange = (preference: string) => {
    const updatedPreferences = formData.preferences.includes(preference)
      ? formData.preferences.filter(p => p !== preference)
      : [...formData.preferences, preference];
    
    updateFormData("preferences", updatedPreferences);
  };
  
  // Handler for custom preferences text
  const handleCustomPreferencesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFormData("customPreferences", e.target.value);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Preferences & Activities</h2>
        <p className="text-muted-foreground">
          Tell us about your travel preferences to help us customize your plan.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Interest Categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">What are you interested in?</h3>
              <p className="text-sm text-muted-foreground">
                Select all that apply. This helps us recommend suitable activities and destinations.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {preferenceOptions.map(option => (
                  <div key={option.id} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={option.id}
                        checked={formData.preferences.includes(option.id)}
                        onCheckedChange={() => handlePreferenceChange(option.id)}
                      />
                      <label
                        htmlFor={option.id}
                        className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.icon}
                        {option.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Additional Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Tell us more about your travel style, specific activities, or special requests.
              </p>
              <Textarea
                placeholder="For example: I prefer local restaurants over tourist spots, I enjoy sunset photography, I'm interested in cooking classes..."
                value={formData.customPreferences}
                onChange={handleCustomPreferencesChange}
                className="min-h-[120px]"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={goToPrevStep}
        >
          Previous
        </Button>
        <Button onClick={goToNextStep}>
          Next Step
        </Button>
      </div>
    </div>
  );
} 