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
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const { toast } = useToast();

  const handleProfileUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully",
      duration: 3000,
    });
  };

  const handlePasswordChange = () => {
    toast({
      title: "Password Changed",
      description: "Your password has been changed successfully",
      duration: 3000,
    });
  };

  const handleBackup = () => {
    toast({
      title: "Backup Started",
      description: "Database backup has been initiated",
      duration: 3000,
    });
  };

  const handleClearCache = () => {
    toast({
      title: "Cache Cleared",
      description: "System cache has been cleared successfully",
      duration: 3000,
    });
  };

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
            <Button 
              className="w-full bg-plp-green hover:bg-plp-green/90"
              onClick={handleProfileUpdate}
            >
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
            <Button 
              className="w-full bg-plp-green hover:bg-plp-green/90"
              onClick={handlePasswordChange}
            >
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
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <span>Email Notifications</span>
                  <Button variant="outline">Configure</Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Email Notification Settings</DialogTitle>
                  <DialogDescription>
                    Configure your email notification preferences
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Application Updates</div>
                      <div className="text-sm text-gray-500">
                        Receive notifications about new applications
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Examination Alerts</div>
                      <div className="text-sm text-gray-500">
                        Get notified about upcoming examinations
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    onClick={() => {
                      toast({
                        title: "Settings Saved",
                        description: "Your notification settings have been updated",
                        duration: 3000,
                      });
                    }}
                  >
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <span>System Alerts</span>
                  <Button variant="outline">Configure</Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>System Alert Settings</DialogTitle>
                  <DialogDescription>
                    Configure your system alert preferences
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Critical Alerts</div>
                      <div className="text-sm text-gray-500">
                        Receive notifications about system critical events
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Maintenance Updates</div>
                      <div className="text-sm text-gray-500">
                        Get notified about system maintenance
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    onClick={() => {
                      toast({
                        title: "Settings Saved",
                        description: "Your system alert settings have been updated",
                        duration: 3000,
                      });
                    }}
                  >
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Database className="mr-2" />
            System Settings
          </h3>
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <span>Backup Database</span>
                  <Button variant="outline" onClick={handleBackup}>Run Backup</Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Database Backup</DialogTitle>
                  <DialogDescription>
                    Start a new backup of the database
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-500">
                    This will create a complete backup of the database. The process may take several minutes.
                  </p>
                </div>
                <DialogFooter>
                  <Button onClick={handleBackup}>
                    Start Backup
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <span>Clear Cache</span>
                  <Button variant="outline" onClick={handleClearCache}>Clear Now</Button>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Clear System Cache</DialogTitle>
                  <DialogDescription>
                    Clear the system cache to free up resources
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-gray-500">
                    This will clear all temporary files and cached data. The system may be slower for a few minutes while the cache rebuilds.
                  </p>
                </div>
                <DialogFooter>
                  <Button onClick={handleClearCache}>
                    Clear Cache
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;