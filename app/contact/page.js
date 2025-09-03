"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plane, Mail, Phone, MapPin, Clock, MessageCircle, Send, Globe, Users, Award } from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

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
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about our services? Need help planning your next adventure? 
            We'd love to hear from you and help make your travel dreams come true.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Email Us</h4>
              <p className="text-gray-600 mb-4">
                Send us a message anytime and we'll respond within 24 hours.
              </p>
              <a 
                href="mailto:hello@roamandrelax.com" 
                className="text-primary hover:text-primary/80 font-medium"
              >
                hello@roamandrelax.com
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Call Us</h4>
              <p className="text-gray-600 mb-4">
                Prefer to talk? Our travel experts are here to help.
              </p>
              <a 
                href="tel:+1-555-123-4567" 
                className="text-secondary hover:text-secondary/80 font-medium"
              >
                +1 (555) 123-4567
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Support Hours</h4>
              <p className="text-gray-600 mb-4">
                We're here to help you 24/7, every day of the year.
              </p>
              <span className="text-green-600 font-medium">24/7 Support</span>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>

            {/* Office Information */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-800 mb-8">
                Our Office
              </h3>
              
              <Card className="p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Headquarters</h4>
                    <p className="text-gray-600">
                      123 Travel Street<br />
                      <br />
                      
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">International Office</h4>
                    <p className="text-gray-600">
                      456 Explorer Avenue<br />
                      Wanderlust District<br />
                      London, UK
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Support</h4>
                    <p className="text-gray-600">
                      Our dedicated team of travel experts is available 24/7 to assist you with any questions, 
                      booking modifications, or travel advice you might need.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                How quickly do you respond to inquiries?
              </h4>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours. For urgent matters, 
                you can call our 24/7 support line for immediate assistance.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Can you help with last-minute travel changes?
              </h4>
              <p className="text-gray-600">
                Absolutely! We understand that travel plans can change unexpectedly. 
                Our team is equipped to handle last-minute modifications and will work 
                to find the best solutions for your situation.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Do you offer support in multiple languages?
              </h4>
              <p className="text-gray-600">
                Yes! We provide customer support in English, Spanish, French, German, 
                and several other languages to serve our global community of travelers.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                What if I have an emergency while traveling?
              </h4>
              <p className="text-gray-600">
                We have a 24/7 emergency support line specifically for travelers who 
                encounter issues while on their trip. Our team can assist with 
                accommodation changes, transportation issues, and other urgent matters.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Planning?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Let our AI-powered platform create the perfect itinerary for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => router.push('/signup')}
            >
              Start Planning Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => router.push('/about')}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

