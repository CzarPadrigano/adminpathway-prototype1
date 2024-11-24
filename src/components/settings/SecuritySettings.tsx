import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SecuritySettings = () => {
  const { toast } = useToast();

  const handlePasswordChange = () => {
    toast({
      title: "Password Changed",
      description: "Your password has been changed successfully",
      duration: 3000,
    });
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
          <Input type="password" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            New Password
          </label>
          <Input type="password" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <Input type="password" />
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