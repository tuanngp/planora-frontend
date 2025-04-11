import { Metadata } from "next";
import { PlannerLayout } from "@/components/planner/PlannerLayout";

export const metadata: Metadata = {
  title: "Travel Planner | Planora",
  description: "Create and manage your travel plans with AI-powered recommendations.",
};

export default function PlannerRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PlannerLayout>{children}</PlannerLayout>;
} 