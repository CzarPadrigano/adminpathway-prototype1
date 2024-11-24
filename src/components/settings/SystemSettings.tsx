import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";
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

const SystemSettings = () => {
  const { toast } = useToast();

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
              <Button variant="outline">Run Backup</Button>
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
              <Button variant="outline">Clear Now</Button>
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
  );
};

export default SystemSettings;