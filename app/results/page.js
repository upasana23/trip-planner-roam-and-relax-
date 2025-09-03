"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown"; // 👈 Import

export default function ResultsPage() {
  const params = useSearchParams();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItinerary = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/trip/itinerary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            destination: params.get("destination"),
            duration: params.get("duration"),
            budget: params.get("budget"),
            tourType: params.get("tourType"),
            preference: params.get("preference"),
            guests: params.get("guests"),
          }),
        });
        const data = await response.json();
        setItinerary(data.suggestion);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [params]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Travel Itinerary</h1>
      {loading ? (
        <p>Generating itinerary...</p>
      ) : (
        <Card className="p-6">
          <div className="prose max-w-none">
            {/* 👇 Render itinerary as Markdown */}
            <ReactMarkdown>{itinerary}</ReactMarkdown>
          </div>
        </Card>
      )}
    </div>
  );
}
