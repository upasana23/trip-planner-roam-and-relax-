"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plane, Map, Heart, Users, Globe, Award, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-gray-800">Roam & Relax</h1>
            </div>
            <Button 
              variant="outline" 
              onClick={() => router.push('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6">
            About <span className="text-primary">Roam & Relax</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're revolutionizing the way people plan and experience their travels through 
            cutting-edge AI technology and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              onClick={() => router.push('/signup')}
              className="bg-primary hover:bg-primary/90"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => router.push('/contact')}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                To democratize travel planning by making personalized, AI-powered itineraries 
                accessible to everyone, regardless of their travel experience or budget.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every journey should be unique, memorable, and perfectly 
                tailored to the traveler's dreams and preferences.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-6">
                To become the world's most trusted AI travel companion, helping millions 
                of people discover new destinations and create unforgettable memories.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where travel planning is effortless, intelligent, 
                and always leads to extraordinary experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-gray-800 mb-6">What We Do</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Roam & Relax combines the power of artificial intelligence with deep travel expertise 
              to create personalized travel experiences that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Planning</h4>
              <p className="text-gray-600">
                Our advanced AI analyzes your preferences, budget, and travel style to create 
                perfectly tailored itineraries in seconds.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Local Expertise</h4>
              <p className="text-gray-600">
                Access to insider knowledge and hidden gems that only locals know about, 
                ensuring authentic and unique experiences.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Personal Touch</h4>
              <p className="text-gray-600">
                Every itinerary is crafted with care, considering your unique preferences 
                and ensuring memories that last a lifetime.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Trusted Partners</h4>
              <p className="text-gray-600">
                We work with carefully vetted accommodation providers, tour operators, 
                and local guides to ensure quality and reliability.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Community Driven</h4>
              <p className="text-gray-600">
                Learn from fellow travelers, share experiences, and discover new destinations 
                through our growing community of adventure seekers.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Award-Winning Service</h4>
              <p className="text-gray-600">
                Recognized for innovation in travel technology and exceptional customer service 
                by industry leaders and satisfied travelers worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-serif font-bold text-gray-800 mb-8">Our Story</h3>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Roam & Relax was born from a simple observation: planning the perfect trip was 
              either too time-consuming or too expensive for most people. Our founders, avid 
              travelers themselves, experienced the frustration of spending countless hours 
              researching destinations, only to miss out on hidden gems and authentic experiences.
            </p>
            <p>
              In 2024, we set out to change that. We combined cutting-edge AI technology 
              with deep travel expertise to create a platform that could plan personalized 
              trips in minutes, not hours. Our AI learns from millions of travel experiences, 
              local insights, and user preferences to craft itineraries that feel hand-picked.
            </p>
            <p>
              Today, we're proud to have helped thousands of travelers discover new destinations, 
              create unforgettable memories, and experience the world in ways they never thought possible. 
              Our mission continues: to make extraordinary travel accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-600">Destinations Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of travelers who have already discovered the magic of AI-powered travel planning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => router.push('/signup')}
            >
              Get Started Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => router.push('/contact')}
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

