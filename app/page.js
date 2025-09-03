"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Search, Plane, Hotel, Car, Camera, Clock, DollarSign, Map, Heart } from "lucide-react";
import Carousel from "@/components/ui/carousel";

export default function HomePage() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [tourType, setTourType] = useState("");
  const [preference, setPreference] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    router.push(
      `/results?destination=${encodeURIComponent(destination)}&duration=${duration}&budget=${budget}&tourType=${tourType}&preference=${preference}&guests=${guests}`
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/hero1.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Plane className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-black text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>Roam & Relax</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost"
              onClick={() => router.push('/about')}
              className="text-white hover:text-secondary hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-200 font-medium"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              About Us
            </Button>
            <Button 
              variant="ghost"
              onClick={() => router.push('/contact')}
              className="text-white hover:text-secondary hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-200 font-medium"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Contact Us
            </Button>
            <Button 
              variant="ghost"
              onClick={() => router.push('/dashboard')}
              className="text-white hover:text-secondary hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-200 font-medium"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="max-w-4xl text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white">
            Discover Your Next <span className="block text-secondary">Adventure</span>
          </h2>
          <p className="text-xl text-white/90">Explore breathtaking destinations and unwind like never before</p>

          {/* Search Form */}
          <Card className="glass p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="text-sm flex items-center gap-2"><MapPin className="w-4 h-4" /> Destination</label>
                <Input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Where to?" />
              </div>
              <div>
                <label className="text-sm flex items-center gap-2"><Clock className="w-4 h-4" /> Duration</label>
                <Select onValueChange={setDuration}>
                  <SelectTrigger><SelectValue placeholder="Select days" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">1-3 days</SelectItem>
                    <SelectItem value="7">4-7 days</SelectItem>
                    <SelectItem value="14">1-2 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm flex items-center gap-2"><DollarSign className="w-4 h-4" /> Budget</label>
                <Input
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter budget amount"
                  type="number"
                  min="0"
                />
              </div>
              <div>
                <label className="text-sm flex items-center gap-2"><Map className="w-4 h-4" /> Tour Type</label>
                <Select onValueChange={setTourType}>
                  <SelectTrigger><SelectValue placeholder="Select tour type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure tour">Adventure Tour</SelectItem>
                    <SelectItem value="cultural & heritage tour">Cultural & Heritage Tour</SelectItem>
                    <SelectItem value="wildlife/nature tour">Wildlife/Nature Tour</SelectItem>
                    <SelectItem value="city sightseeing tour">City Sightseeing Tour</SelectItem>
                    <SelectItem value="educational tour">Educational Tour</SelectItem>
                    <SelectItem value="professional/business tour">Professional/Business Tour</SelectItem>
                    <SelectItem value="religious/pilgrimage tour">Religious/Pilgrimage Tour</SelectItem>
                    <SelectItem value="wellness & retreat tour">Wellness & Retreat Tour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm flex items-center gap-2"><Heart className="w-4 h-4" /> Preference</label>
                <Select onValueChange={setPreference}>
                  <SelectTrigger><SelectValue placeholder="Select preference" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beach">Beach</SelectItem>
                    <SelectItem value="mountain">Mountains</SelectItem>
                    <SelectItem value="city">City</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm flex items-center gap-2"><Users className="w-4 h-4" /> Guests</label>
                <Select onValueChange={setGuests}>
                  <SelectTrigger><SelectValue placeholder="Select guests" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" onClick={handleSearch} style={{ fontFamily: 'Quicksand, sans-serif' }}>
              <Search className="w-5 h-5 mr-2" /> Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              onClick={() => router.push('/dashboard')}
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Go to Dashboard
            </Button>
          </div>
          </Card>
        </div>
      </main>

      {/* Featured */}
      <section className="relative z-10 px-6 pb-20" id="featured">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-white text-center mb-12">Featured Destinations</h3>
          <Carousel slides={[
            { title: "Kyoto", button: "Explore Kyoto", src: "/kyoto.jpg", url: "https://www.google.com/search?q=Kyoto+travel+guide" },
            { title: "India", button: "Discover India", src: "/india.jpg", url: "https://www.google.com/search?q=India+travel+guide" },
            { title: "Morocco", button: "Discover Morocco", src: "/morocco.jpg", url: "https://www.google.com/search?q=Morocco+travel+guide" },
            { title: "York", button: "Explore York", src: "/york.jpg", url: "https://www.google.com/search?q=York+travel+guide" },
            { title: "Beach Getaway", button: "Find Beach Escapes", src: "/beach.jpg", url: "https://www.google.com/search?q=best+beach+destinations" },
          ]}/>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-xl font-bold" style={{ fontFamily: 'Quicksand, sans-serif' }}>Roam & Relax</h4>
              </div>
              <p className="text-gray-300">
                Your AI-powered travel companion for creating unforgettable adventures.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => router.push('/')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>Home</button></li>
                <li><button onClick={() => router.push('/trip-planner')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>Trip Planner</button></li>
                <li><button onClick={() => router.push('/dashboard')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>Dashboard</button></li>
                <li><button onClick={() => router.push('/login')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>Login</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => router.push('/contact')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>Contact Us</button></li>
                <li><button onClick={() => router.push('/about')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>About Us</button></li>
                <li><button onClick={() => router.push('/trip-planner')} className="hover:text-white transition-colors" style={{ fontFamily: 'Quicksand, sans-serif' }}>Help Center</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-semibold">F</span>
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-semibold">T</span>
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-sm font-semibold">I</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Roam & Relax. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
