import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate credentials here
    toast({
      title: "Login Successful",
      description: "Welcome back to PLP Admin Portal",
      duration: 3000,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <img 
            src="/plp-logo.png" 
            alt="PLP Logo" 
            className="h-24 mx-auto"
          />
          <h1 className="text-2xl font-bold text-plp-green">
            PLP Admin Portal
          </h1>
          <p className="text-gray-600">
            Sign in to access the admission management system
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input 
              type="email" 
              placeholder="admin@plp.edu.ph" 
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-plp-green hover:bg-plp-green/90"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;