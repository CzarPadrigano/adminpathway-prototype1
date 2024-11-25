import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SecuritySettings = () => {
  const { toast } = useToast();
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = () => {
    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "Password Changed",
      description: "Your password has been changed successfully",
      duration: 3000,
    });
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Lock className="mr-2" />
        Security Settings
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Current Password
          </label>
          <Input 
            type="password" 
            name="current"
            value={passwords.current}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            New Password
          </label>
          <Input 
            type="password"
            name="new"
            value={passwords.new}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <Input 
            type="password"
            name="confirm"
            value={passwords.confirm}
            onChange={handleChange}
          />
        </div>
        <Button 
          className="w-full bg-plp-green hover:bg-plp-green/90"
          onClick={handlePasswordChange}
        >
          Change Password
        </Button>
      </div>
    </Card>
  );
};

export default SecuritySettings;