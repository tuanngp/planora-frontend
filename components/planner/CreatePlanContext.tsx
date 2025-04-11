"use client";

import React, { createContext, useContext, useState } from "react";

// Define the steps in the form
export enum PlanFormStep {
  BASIC_INFO = "BASIC_INFO",
  PREFERENCES = "PREFERENCES",
  BUDGET = "BUDGET",
  REVIEW = "REVIEW"
}

export type Destination = {
  city: string;
  country: string;
};

export type TravelPreference = {
  accommodationType: string;
  transportationType: string;
  activities: string[];
  dietaryRestrictions?: string[];
  travelStyle: string;
}

export type BudgetInfo = {
  budgetType: "daily" | "total";
  amount: number;
  currency: string;
}

export type PlanFormData = {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  numTravelers: number;
  destination: Destination;
  preferences: TravelPreference;
  budget: BudgetInfo;
}

interface CreatePlanContextType {
  currentStep: PlanFormStep;
  formData: PlanFormData;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  updateFormData: (data: Partial<PlanFormData>) => void;
  resetForm: () => void;
}

// Initial form data
const initialFormData: PlanFormData = {
  title: "",
  startDate: null,
  endDate: null,
  numTravelers: 1,
  destination: {
    city: "",
    country: ""
  },
  preferences: {
    accommodationType: "hotel",
    transportationType: "public",
    activities: [],
    dietaryRestrictions: [],
    travelStyle: "balanced"
  },
  budget: {
    budgetType: "total",
    amount: 0,
    currency: "USD"
  }
};

// Create the context
const CreatePlanContext = createContext<CreatePlanContextType | undefined>(undefined);

// Create a hook to use the context
export function useCreatePlan() {
  const context = useContext(CreatePlanContext);
  if (!context) {
    throw new Error("useCreatePlan must be used within a CreatePlanProvider");
  }
  return context;
}

// Create a provider component
export function CreatePlanProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<PlanFormStep>(PlanFormStep.BASIC_INFO);
  const [formData, setFormData] = useState<PlanFormData>(initialFormData);

  // Get the next step based on the current step
  const getNextStep = (current: PlanFormStep): PlanFormStep => {
    switch (current) {
      case PlanFormStep.BASIC_INFO:
        return PlanFormStep.PREFERENCES;
      case PlanFormStep.PREFERENCES:
        return PlanFormStep.BUDGET;
      case PlanFormStep.BUDGET:
        return PlanFormStep.REVIEW;
      case PlanFormStep.REVIEW:
        return PlanFormStep.REVIEW; // Stay on review step
      default:
        return PlanFormStep.BASIC_INFO;
    }
  };

  // Get the previous step based on the current step
  const getPreviousStep = (current: PlanFormStep): PlanFormStep => {
    switch (current) {
      case PlanFormStep.REVIEW:
        return PlanFormStep.BUDGET;
      case PlanFormStep.BUDGET:
        return PlanFormStep.PREFERENCES;
      case PlanFormStep.PREFERENCES:
        return PlanFormStep.BASIC_INFO;
      case PlanFormStep.BASIC_INFO:
        return PlanFormStep.BASIC_INFO; // Stay on basic info step
      default:
        return PlanFormStep.BASIC_INFO;
    }
  };

  // Methods to navigate through steps
  const goToNextStep = () => {
    setCurrentStep(getNextStep(currentStep));
  };

  const goToPreviousStep = () => {
    setCurrentStep(getPreviousStep(currentStep));
  };

  // Method to update form data
  const updateFormData = (data: Partial<PlanFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  // Method to reset form
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(PlanFormStep.BASIC_INFO);
  };

  // Create the context value
  const contextValue: CreatePlanContextType = {
    currentStep,
    formData,
    goToNextStep,
    goToPreviousStep,
    updateFormData,
    resetForm
  };

  return (
    <CreatePlanContext.Provider value={contextValue}>
      {children}
    </CreatePlanContext.Provider>
  );
} 