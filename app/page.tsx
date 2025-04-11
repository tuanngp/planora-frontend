import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Compass, Globe, Map, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-500 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Perfect Trip with AI</h1>
            <p className="text-lg md:text-xl mb-6 text-indigo-100">
              Create personalized travel itineraries with AI-powered recommendations based on your preferences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Link href="/planner">Start Planning</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl">
              <img
                src="/placeholder-dashboard.jpg"
                alt="Planora Dashboard"
                className="rounded-md shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Planora</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Compass className="h-10 w-10 text-indigo-500" />}
              title="AI Planning"
              description="Get personalized travel itineraries created by AI based on your preferences and interests."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-indigo-500" />}
              title="Group Travel"
              description="Plan trips with friends and family. Share itineraries and vote on activities."
            />
            <FeatureCard
              icon={<Map className="h-10 w-10 text-indigo-500" />}
              title="Smart Booking"
              description="Find and book accommodations that fit your itinerary and budget seamlessly."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-indigo-500" />}
              title="Travel Bot"
              description="Get instant answers to your travel questions and real-time recommendations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-950/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join thousands of travelers who are creating their perfect trips with Planora.
          </p>
          <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600">
            <Link href="/register" className="flex items-center gap-2">
              Create Free Account <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-0 shadow-sm transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto text-primary">
          <Link href="#" className="flex items-center gap-1">
            Learn more <ArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
