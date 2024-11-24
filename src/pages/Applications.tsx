import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ApplicationCard from "@/components/applications/ApplicationCard";

const Applications = () => {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Successful",
      description: "The data has been exported successfully",
      duration: 3000,
    });
  };

  const applications = [1, 2, 3, 4, 5].map((i) => ({
    id: `A2024${i.toString().padStart(4, '0')}`,
    name: `Juan Dela Cruz ${i}`,
    program: "BS Psychology",
    status: "Pending Review",
    date: `March ${i + 10}, 2024`
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Applications Management
        </h1>
        <Button 
          className="bg-plp-green hover:bg-plp-green/90"
          onClick={handleExport}
        >
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search applications..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Applicant Name</th>
                <th className="text-left py-3 px-4">Program</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Date Applied</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <ApplicationCard key={application.id} {...application} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing 1-5 of 100 applications
          </p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Applications;