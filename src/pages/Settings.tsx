import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Mail, 
  Lock,
  Bell,
  Shield,
  Database
} from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <User className="mr-2" />
            Profile Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input defaultValue="Admin User" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input defaultValue="admin@plp.edu.ph" />
            </div>
            <Button className="w-full bg-plp-green hover:bg-plp-green/90">
              Update Profile
            </Button>
          </div>
        </Card>

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
            <Button className="w-full bg-plp-green hover:bg-plp-green/90">
              Change Password
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Bell className="mr-2" />
            Notification Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <Button variant="outline">Configure</Button>
            </div>
            <div className="flex items-center justify-between">
              <span>System Alerts</span>
              <Button variant="outline">Configure</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Database className="mr-2" />
            System Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Backup Database</span>
              <Button variant="outline">Run Backup</Button>
            </div>
            <div className="flex items-center justify-between">
              <span>Clear Cache</span>
              <Button variant="outline">Clear Now</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;