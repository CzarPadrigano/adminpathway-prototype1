import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
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
import { Switch } from "@/components/ui/switch";

const NotificationSettings = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your notification settings have been updated",
      duration: 3000,
    });
  };

  return (
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
              <Button onClick={handleSaveSettings}>
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
              <Button onClick={handleSaveSettings}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default NotificationSettings;