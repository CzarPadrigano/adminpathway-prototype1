import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Applications = () => {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Successful",
      description: "The data has been exported successfully",
      duration: 3000,
    });
  };

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
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium">Juan Dela Cruz {i}</p>
                      <p className="text-sm text-gray-600">ID: A2024{i.toString().padStart(4, '0')}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">BS Psychology</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                      Pending Review
                    </span>
                  </td>
                  <td className="py-3 px-4">March {i + 10}, 2024</td>
                  <td className="py-3 px-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Application Details</DialogTitle>
                          <DialogDescription>
                            <div className="mt-4 space-y-4">
                              <div>
                                <h3 className="font-semibold">Personal Information</h3>
                                <p>Name: Juan Dela Cruz {i}</p>
                                <p>Application ID: A2024{i.toString().padStart(4, '0')}</p>
                                <p>Program: BS Psychology</p>
                                <p>Status: Pending Review</p>
                              </div>
                              <div>
                                <h3 className="font-semibold">Academic Background</h3>
                                <p>High School: Sample High School</p>
                                <p>GPA: 90.5</p>
                              </div>
                              <div className="pt-4 flex justify-end space-x-2">
                                <Button variant="outline">Reject</Button>
                                <Button 
                                  className="bg-plp-green hover:bg-plp-green/90"
                                  onClick={() => {
                                    toast({
                                      title: "Application Approved",
                                      description: "The application has been approved successfully",
                                      duration: 3000,
                                    });
                                  }}
                                >
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
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