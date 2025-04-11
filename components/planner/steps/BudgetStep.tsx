"use client";

import { useCreatePlan } from "../CreatePlanContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

export function BudgetStep() {
  const { formData, updateFormData, goToNextStep, goToPrevStep } = useCreatePlan();
  const [inputValue, setInputValue] = useState(formData.budget > 0 ? formData.budget.toString() : "");
  
  // Budget range values for slider
  const minBudget = 1000000; // 1M VND
  const maxBudget = 50000000; // 50M VND
  
  // Calculate the number of days in the trip
  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 1;
    
    const diffTime = Math.abs(formData.endDate.getTime() - formData.startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1; // Include start and end day
  };
  
  const tripDays = calculateDays();
  
  // Handle budget type selection
  const handleBudgetTypeChange = (value: "total" | "daily") => {
    updateFormData("budgetType", value);
    
    // Adjust the budget value based on the new type
    if (value === "daily" && formData.budgetType === "total") {
      const dailyBudget = Math.round(formData.budget / tripDays);
      updateFormData("budget", dailyBudget);
      setInputValue(dailyBudget.toString());
    } else if (value === "total" && formData.budgetType === "daily") {
      const totalBudget = formData.budget * tripDays;
      updateFormData("budget", totalBudget);
      setInputValue(totalBudget.toString());
    }
  };
  
  // Handle budget value changes from input
  const handleBudgetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setInputValue(value);
    
    const numericValue = value ? parseInt(value, 10) : 0;
    updateFormData("budget", numericValue);
  };
  
  // Handle budget value changes from slider
  const handleSliderChange = (value: number[]) => {
    const budgetValue = value[0];
    updateFormData("budget", budgetValue);
    setInputValue(budgetValue.toString());
  };
  
  // Calculate total trip budget
  const getTotalBudget = () => {
    if (formData.budgetType === "total") {
      return formData.budget;
    } else {
      return formData.budget * tripDays;
    }
  };
  
  // Calculate budget breakdown
  const accommodationBudget = Math.round(getTotalBudget() * 0.4); // 40%
  const foodBudget = Math.round(getTotalBudget() * 0.3); // 30%
  const transportBudget = Math.round(getTotalBudget() * 0.2); // 20%
  const otherBudget = Math.round(getTotalBudget() * 0.1); // 10%

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Budget</h2>
        <p className="text-muted-foreground">
          Set your travel budget to help us create a plan that fits your financial preferences.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-8">
            {/* Budget Type Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Budget Type</h3>
              <RadioGroup 
                value={formData.budgetType} 
                onValueChange={(value) => handleBudgetTypeChange(value as "total" | "daily")}
                className="flex flex-col space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="total" id="total" />
                  <Label htmlFor="total">Total trip budget</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily">Daily budget</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Budget Amount */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">
                {formData.budgetType === "total" ? "Total Budget" : "Daily Budget"}
              </h3>
              <div className="flex items-center">
                <Input
                  type="text"
                  value={inputValue ? formatPrice(parseInt(inputValue), { notation: "standard", currency: "VND" }) : ""}
                  onChange={handleBudgetInputChange}
                  className="text-lg font-medium"
                  placeholder={formData.budgetType === "total" ? "Ex: 15,000,000 VND" : "Ex: 2,000,000 VND"}
                />
              </div>
              
              <Slider
                value={[formData.budget]}
                min={minBudget}
                max={maxBudget}
                step={100000}
                onValueChange={handleSliderChange}
                className="py-4"
              />
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatPrice(minBudget, { notation: "standard", currency: "VND" })}</span>
                <span>{formatPrice(maxBudget, { notation: "standard", currency: "VND" })}</span>
              </div>
            </div>
            
            {/* Budget Breakdown */}
            {formData.budget > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Estimated Breakdown</h3>
                <p className="text-sm text-muted-foreground">
                  This is how your budget might be distributed during your {tripDays}-day trip.
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accommodation (40%)</span>
                    <span className="font-medium">{formatPrice(accommodationBudget, { notation: "standard", currency: "VND" })}</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm">Food & Dining (30%)</span>
                    <span className="font-medium">{formatPrice(foodBudget, { notation: "standard", currency: "VND" })}</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm">Transportation (20%)</span>
                    <span className="font-medium">{formatPrice(transportBudget, { notation: "standard", currency: "VND" })}</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm">Activities & Others (10%)</span>
                    <span className="font-medium">{formatPrice(otherBudget, { notation: "standard", currency: "VND" })}</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Trip Budget</span>
                    <span className="text-lg font-bold">{formatPrice(getTotalBudget(), { notation: "standard", currency: "VND" })}</span>
                  </div>
                  {formData.budgetType === "daily" && (
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">Daily Budget</span>
                      <span className="font-medium">{formatPrice(formData.budget, { notation: "standard", currency: "VND" })}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
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
        <Button 
          onClick={goToNextStep}
          disabled={formData.budget <= 0}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
} 