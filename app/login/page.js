"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft } from "lucide-react";
import { auth, storage } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
    
    // Clear general message when user types
    if (message) {
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      console.log("Attempting to login:", formData.email);
      const user = auth.checkUser(formData.email, formData.password);

      if (user) {
        console.log("Login successful:", user);
        storage.setUser(user);
        setMessage("Login successful! Redirecting to dashboard...");
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        console.log("Login failed: invalid credentials");
        setMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Demo user autofill and optional auto-login
  useEffect(() => {
    const isDemo = searchParams?.get("demo") === "1";
    if (isDemo) {
      setFormData({ email: "demo@example.com", password: "demo123" });
    }
  }, [searchParams]);

  const handleDemoLogin = async () => {
    setFormData({ email: "demo@example.com", password: "demo123" });
    // Short delay to ensure state set
    setTimeout(() => {
      const user = auth.checkUser("demo@example.com", "demo123");
      if (user) {
        storage.setUser(user);
        router.push('/dashboard');
      } else {
        setMessage("Demo user unavailable.");
      }
    }, 100);
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
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-serif font-black text-white">Roam & Relax</h1>
          </div>
          
          <Button 
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <Card className="glass p-8 max-w-md w-full transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white">Sign in to continue your journey</p>
          </div>

          {/* Message Display */}
          {message && (
            <div className={`mb-6 p-4 rounded-lg text-center ${
              message.includes('successful') 
                ? 'bg-green-500/20 border border-green-500/30 text-green-100' 
                : 'bg-red-500/20 border border-red-500/30 text-red-100'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                <Mail className="w-4 h-4 inline mr-2" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="bg-white/90 border-white/20 focus:bg-white focus:border-white transition-all duration-300 hover:bg-white/95"
                required
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="text-white mb-2 block">
                <Lock className="w-4 h-4 inline mr-2" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="bg-white/90 border-white/20 focus:bg-white focus:border-white transition-all duration-300 hover:bg-white/95 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-300 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
            <Button
              type="button"
              onClick={handleDemoLogin}
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login as Demo User
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white">
              Don't have an account?{" "}
              <button
                onClick={() => router.push('/signup')}
                className="text-secondary hover:text-secondary/80 underline transition-colors"
              >
                Sign up here
              </button>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
            <p className="text-blue-100 text-sm text-center mb-2">
              🧪 Demo Credentials:
            </p>
            <div className="text-center text-blue-100 text-sm space-y-1">
              <p><strong>Email:</strong> demo@example.com</p>
              <p><strong>Password:</strong> demo123</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
