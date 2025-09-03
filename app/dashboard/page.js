"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Map, Camera, Hotel, LogOut, Plus, Heart, Calendar, Star, Globe, ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import { storage } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Destination Insights state
  const [destinationQuery, setDestinationQuery] = useState("");
  const [insightLoading, setInsightLoading] = useState(false);
  const [insightError, setInsightError] = useState("");
  const [insight, setInsight] = useState(null); // { title, description, extract, thumbnail }

  useEffect(() => {
    const loggedInUser = storage.getUser();
    if (!loggedInUser) {
      router.push('/login');
      return;
    }
    setUser(loggedInUser);
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    storage.clearUser();
    router.push('/');
  };

  const recentTrips = [
    { id: 1, destination: "Kyoto, Japan", date: "Dec 15-22, 2024", status: "Planned", rating: 5 },
    { id: 2, destination: "Morocco", date: "Jan 10-17, 2025", status: "Planning", rating: 4 },
  ];

  const quickActions = [
    { icon: Plus, title: "Plan New Trip", description: "Create a new itinerary", href: "/trip-planner", color: "bg-blue-500", external: false },
    { icon: Map, title: "View Trips", description: "See all your plans", href: "/trip-planner", color: "bg-green-500", external: false },
    { icon: Camera, title: "Food Guide", description: "Discover local cuisine", href: "https://www.google.com/maps/search/restaurants", color: "bg-orange-500", external: true },
    { icon: Hotel, title: "Travel Tips", description: "Expert advice", href: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html", color: "bg-purple-500", external: true },
  ];

  const buildExternalLink = (type, q) => {
    const query = encodeURIComponent(q);
    switch (type) {
      case 'googleTravel':
        return `https://www.google.com/travel/search?q=${query}`;
      case 'youtube':
        return `https://www.youtube.com/results?search_query=${query}+travel+guide`;
      case 'booking':
        return `https://www.booking.com/searchresults.html?ss=${query}`;
      case 'skyscanner':
        return `https://www.skyscanner.net/transport/flights-to/${query}`;
      case 'maps':
        return `https://www.google.com/maps/search/${query}`;
      default:
        return `https://www.google.com/search?q=${query}`;
    }
  };

  const fetchDestinationInsight = async (q) => {
    if (!q.trim()) return;
    setInsight(null);
    setInsightError("");
    setInsightLoading(true);
    try {
      // Wikipedia summary API (no key required)
      const title = encodeURIComponent(q.trim());
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
      if (!res.ok) throw new Error('No summary found');
      const data = await res.json();
      setInsight({
        title: data.title,
        description: data.description,
        extract: data.extract,
        thumbnail: data.thumbnail?.source || "",
      });
    } catch (e) {
      setInsightError("No information found. Try a different destination.");
    } finally {
      setInsightLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-serif font-black text-primary">Roam & Relax</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.fullName}!</span>
              <Button variant="outline" onClick={handleLogout} className="flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.fullName}! ✈️</h2>
          <p className="text-gray-600">Ready to plan your next adventure?</p>
        </div>

        {/* Destination Insights */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2"><Globe className="w-5 h-5" /> Destination Insights</h3>
          <Card className="p-6 hover-lift">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  className="w-full h-11 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter a city or place (e.g., Kyoto, Japan)"
                  value={destinationQuery}
                  onChange={(e) => setDestinationQuery(e.target.value)}
                  onKeyDown={(e)=>{ if(e.key==='Enter'){ fetchDestinationInsight(destinationQuery);} }}
                />
              </div>
              <Button onClick={() => fetchDestinationInsight(destinationQuery)} className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Get Insights
              </Button>
            </div>

            {insightLoading && (
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span>Fetching information…</span>
              </div>
            )}

            {insightError && (
              <p className="text-red-600">{insightError}</p>
            )}

            {insight && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900">{insight.title}{insight.description ? ` – ${insight.description}` : ''}</h4>
                  <p className="text-gray-700 mt-2 whitespace-pre-line">{insight.extract}</p>

                  {/* Quick Links */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <a href={buildExternalLink('googleTravel', insight.title)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 px-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                      Google Travel <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a href={buildExternalLink('youtube', insight.title)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 px-3 rounded-md bg-red-600 text-white hover:bg-red-700 transition">
                      YouTube Guides <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a href={buildExternalLink('booking', insight.title)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 px-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">
                      Hotels (Booking) <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a href={buildExternalLink('skyscanner', insight.title)} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-10 px-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
                      Flights (Skyscanner) <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                <div>
                  {insight.thumbnail ? (
                    <img src={insight.thumbnail} alt={insight.title} className="w-full h-48 object-cover rounded-lg shadow" />
                  ) : (
                    <div className="w-full h-48 rounded-lg bg-gray-100 grid place-items-center text-gray-500">No image</div>
                  )}
                </div>
              </div>
            )}
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift cursor-pointer group"
                onClick={() => action.external ? window.open(action.href, '_blank', 'noopener,noreferrer') : router.push(action.href)}
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h4>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Helpful Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-5 hover-lift">
              <h4 className="font-semibold text-gray-900 mb-2">Travel Advisories</h4>
              <p className="text-gray-600 text-sm mb-3">Check advisories before you go.</p>
              <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center">U.S. Travel Advisories <ExternalLink className="w-4 h-4 ml-1"/></a>
            </Card>
            <Card className="p-5 hover-lift">
              <h4 className="font-semibold text-gray-900 mb-2">Currency Converter</h4>
              <p className="text-gray-600 text-sm mb-3">Get live exchange rates.</p>
              <a href="https://www.xe.com/currencyconverter/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center">XE Converter <ExternalLink className="w-4 h-4 ml-1"/></a>
            </Card>
            <Card className="p-5 hover-lift">
              <h4 className="font-semibold text-gray-900 mb-2">Local Weather</h4>
              <p className="text-gray-600 text-sm mb-3">Forecasts for your trip.</p>
              <a href="https://www.weather.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center">Weather.com <ExternalLink className="w-4 h-4 ml-1"/></a>
            </Card>
            <Card className="p-5 hover-lift">
              <h4 className="font-semibold text-gray-900 mb-2">Maps</h4>
              <p className="text-gray-600 text-sm mb-3">Navigate and explore.</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center">Google Maps <ExternalLink className="w-4 h-4 ml-1"/></a>
            </Card>
          </div>
        </section>

        {/* Recent Trips */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Trips</h3>
            <Button onClick={() => router.push('/trip-planner')} className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Trip</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentTrips.map((trip) => (
              <Card key={trip.id} className="p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{trip.destination}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    trip.status === 'Planned' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {trip.status}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{trip.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < trip.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({trip.rating}/5)</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button variant="outline" className="w-full" onClick={() => router.push(`/trip-planner?id=${trip.id}`)}>
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Travel Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600">Trips Planned</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Trips Completed</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">Countries Visited</div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
