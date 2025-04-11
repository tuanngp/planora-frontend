"use client";

import { CreatePlanProvider } from "@/components/planner/CreatePlanContext";
import { CreatePlanProgress } from "@/components/planner/CreatePlanProgress";
import { BasicInfoStep } from "@/components/planner/steps/BasicInfoStep";
import { PreferencesStep } from "@/components/planner/steps/PreferencesStep";
import { BudgetStep } from "@/components/planner/steps/BudgetStep";
import { ReviewStep } from "@/components/planner/steps/ReviewStep";
import { useCreatePlan, PlanFormStep } from "@/components/planner/CreatePlanContext";

// Wrapper component to render the appropriate step based on the current step in the context
function StepRenderer() {
  const { currentStep } = useCreatePlan();
  
  switch (currentStep) {
    case PlanFormStep.BASIC_INFO:
      return <BasicInfoStep />;
    case PlanFormStep.PREFERENCES:
      return <PreferencesStep />;
    case PlanFormStep.BUDGET:
      return <BudgetStep />;
    case PlanFormStep.REVIEW:
      return <ReviewStep />;
    default:
      return <BasicInfoStep />;
  }
}

export default function CreatePlanPage() {
  return (
    <CreatePlanProvider>
      <div className="container max-w-4xl mx-auto py-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create Your Travel Plan</h1>
            <p className="text-muted-foreground">
              Let us help you create a personalized travel plan based on your preferences.
            </p>
          </div>
          
          <CreatePlanProgress />
          
          <div className="py-4">
            <StepRenderer />
          </div>
        </div>
      </div>
    </CreatePlanProvider>
  );
} 