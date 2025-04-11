"use client";

import React from "react";
import { useCreatePlan, PlanFormStep } from "./CreatePlanContext";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/24/solid";

export function CreatePlanProgress() {
  const { currentStep } = useCreatePlan();

  const steps = [
    { key: PlanFormStep.BASIC_INFO, label: "Basic Info" },
    { key: PlanFormStep.PREFERENCES, label: "Preferences" },
    { key: PlanFormStep.BUDGET, label: "Budget" },
    { key: PlanFormStep.REVIEW, label: "Review" }
  ];

  const currentStepIndex = steps.findIndex(step => step.key === currentStep);

  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isCurrent = index === currentStepIndex;
          
          return (
            <React.Fragment key={step.key}>
              {/* Step circle */}
              <div className="relative flex flex-col items-center">
                <div
                  className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors",
                    isCompleted ? "bg-primary text-primary-foreground" : 
                    isCurrent ? "border-2 border-primary bg-background text-primary" : 
                    "border-2 border-muted bg-background text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span 
                  className={cn(
                    "mt-2 text-xs",
                    isCurrent ? "font-medium text-primary" : 
                    isCompleted ? "font-medium" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div 
                  className={cn(
                    "h-0.5 w-full max-w-[100px] transition-colors",
                    index < currentStepIndex ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
} 