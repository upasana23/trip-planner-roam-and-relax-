"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function TripPlannerPage() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
    itinerary: null,
    accommodation: null,
    foodGuide: null,
    travelTips: null,
  });

  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    interests: "",
    budget: "medium",
    cuisine_preferences: "",
    season: "summer",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTripPlan = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert interests string to array
      const interestsArray = formData.interests.split(',').map(i => i.trim());

      // Fetch itinerary
      const itineraryRes = await fetch("/api/trip/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          interests: interestsArray,
        }),
      });
      const itineraryData = await itineraryRes.json();

      // Fetch accommodation
      const accommodationRes = await fetch("/api/trip/accommodation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: formData.destination,
        }),
      });
      const accommodationData = await accommodationRes.json();

      // Fetch food guide
      const foodGuideRes = await fetch("/api/trip/food-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: formData.destination,
          cuisine_preferences: formData.cuisine_preferences,
        }),
      });
      const foodGuideData = await foodGuideRes.json();

      // Fetch travel tips
      const travelTipsRes = await fetch("/api/trip/travel-tips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination: formData.destination,
          season: formData.season,
        }),
      });
      const travelTipsData = await travelTipsRes.json();

      setResults({
        itinerary: itineraryData.suggestion,
        accommodation: accommodationData.suggestion,
        foodGuide: foodGuideData.suggestion,
        travelTips: travelTipsData.suggestion,
      });
    } catch (error) {
      console.error("Error generating trip plan:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Trip Planner</h1>
      
      <Card className="p-6 mb-8">
        <form onSubmit={generateTripPlan} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g., Paris, France"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (days)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder="e.g., 5"
                required
                min="1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interests">Interests (comma-separated)</Label>
              <Input
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                placeholder="e.g., art, food, history"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="budget">Budget</option>
                <option value="medium">Medium</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cuisine_preferences">Cuisine Preferences</Label>
              <Input
                id="cuisine_preferences"
                name="cuisine_preferences"
                value={formData.cuisine_preferences}
                onChange={handleInputChange}
                placeholder="e.g., vegetarian, local cuisine"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="season">Season</Label>
              <select
                id="season"
                name="season"
                value={formData.season}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Generating Trip Plan..." : "Generate Trip Plan"}
          </Button>
        </form>
      </Card>

      {Object.entries(results).map(([key, value]) => {
        if (!value) return null;
        return (
          <Card key={key} className="p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {value}
              </pre>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
