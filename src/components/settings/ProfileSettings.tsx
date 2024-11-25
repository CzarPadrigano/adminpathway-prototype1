import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProfileSettings = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "Admin User",
    email: "admin@plp.edu.ph"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfileUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully",
      duration: 3000,
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <User className="mr-2" />
        Profile Settings
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <Input 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <Button 
          className="w-full bg-plp-green hover:bg-plp-green/90"
          onClick={handleProfileUpdate}
        >
          Update Profile
        </Button>
      </div>
    </Card>
  );
};

export default ProfileSettings;