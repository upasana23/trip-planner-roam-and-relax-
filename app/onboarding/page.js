"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, DollarSign, Camera, Globe } from "lucide-react"

const preferredAreas = [
  "Sea / Beach 🏖️",
  "Mountains / Hills 🏔️",
  "Historical Sites 🏛️",
  "Cultural Attractions 🎭",
  "Wildlife / Safari 🦁",
  "Nature / Eco Parks 🌿",
  "Urban City Life 🏙️",
  "Religious / Pilgrimage ⛪🕌🛕",
]

<<<<<<< HEAD
const tourTypes = [
  "Adventure Tour",
  "Cultural & Heritage Tour",
  "Wildlife/Nature Tour",
  "City Sightseeing Tour",
  "Educational Tour",
  "Professional/Business Tour",
  "Religious/Pilgrimage Tour",
  "Wellness & Retreat Tour",
]
=======
const tourTypes = ["Family", "Honeymoon", "Solo Travel", "Adventure", "Business", "Group Tour", "Luxury", "Budget"]
>>>>>>> 38cd313caeb7d897cf8c36e8044ac6411404b315

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    days: "",
    budget: "",
    preferredAreas: [] ,
    tourType: "",
    image: null ,
  })

  const handleAreaToggle = (area) => {
    setFormData((prev) => ({
      ...prev,
      preferredAreas: prev.preferredAreas.includes(area)
        ? prev.preferredAreas.filter((a) => a !== area)
        : [...prev.preferredAreas, area],
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/beach.jpg')" }}>
      <div className="min-h-screen bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Wayfarer Branding & Progress */}
            <div className="bg-orange-50 p-8 lg:p-10 flex flex-col justify-between min-h-[500px] lg:min-h-[600px]">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-black">Roam and Relax</span>
              </div>

              {/* Progress Steps */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Personal Information</h3>
                      <p className="text-sm text-gray-600">Help us get to know you better</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Travel Preferences</h3>
                      <p className="text-sm text-gray-600">Share with us your travel style</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Welcome Aboard!</h3>
                      <p className="text-sm text-gray-600">Please confirm your email</p>
                    </div>
                  </div>
                </div>


              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
                    Log in
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side - Travel Planning Form */}
            <div className="p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">TRAVEL PLANNING</p>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Create Your Itinerary</h2>
                <p className="text-slate-600">
                  Tell us about your dream destination and we&apos;ll create a personalized travel plan for you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Destination Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from" className="text-base font-medium text-slate-900">
                      From
                    </Label>
                    <Input
                      id="from"
                      placeholder="Your departure city"
                      value={formData.from}
                      onChange={(e) => setFormData((prev) => ({ ...prev, from: e.target.value }))}
                      className="h-12 border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to" className="text-base font-medium text-slate-900">
                      To
                    </Label>
                    <Input
                      id="to"
                      placeholder="Your destination"
                      value={formData.to}
                      onChange={(e) => setFormData((prev) => ({ ...prev, to: e.target.value }))}
                      className="h-12 border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500/10"
                    />
                  </div>
                </div>

                {/* Days and Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="days" className="text-base font-medium text-slate-900">
                      Number of Days
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        id="days"
                        type="number"
                        placeholder="7"
                        value={formData.days}
                        onChange={(e) => setFormData((prev) => ({ ...prev, days: e.target.value }))}
                        className="h-12 pl-10 border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500/10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-base font-medium text-slate-900">
                      Budget (USD)
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input
                        id="budget"
                        type="number"
                        placeholder="2000"
                        value={formData.budget}
                        onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                        className="h-12 pl-10 border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Areas */}
                <div className="space-y-3">
                  <Label className="text-base font-medium text-slate-900">Preferred Areas</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {preferredAreas.map((area) => (
                      <Badge
                        key={area}
                        variant={formData.preferredAreas.includes(area) ? "default" : "outline"}
                        className={`cursor-pointer p-3 text-sm justify-center hover:scale-105 transition-all ${
                          formData.preferredAreas.includes(area)
                            ? "bg-sky-500 hover:bg-sky-600 text-white border-sky-500"
                            : "border-2 border-slate-200 hover:border-sky-500 text-slate-700"
                        }`}
                        onClick={() => handleAreaToggle(area)}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tour Type */}
                <div className="space-y-2">
                  <Label htmlFor="tour-type" className="text-base font-medium text-slate-900">
                    Tour Type
                  </Label>
                  <Select
                    value={formData.tourType}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, tourType: value }))}
                  >
                    <SelectTrigger className="h-12 border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500/10">
                      <SelectValue placeholder="Select tour type" />
                    </SelectTrigger>
                    <SelectContent>
                      {tourTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base rounded-lg transition-all hover:scale-[1.02] shadow-lg"
                >
                  Generate Itinerary
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
