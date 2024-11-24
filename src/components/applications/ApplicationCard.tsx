import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ApplicationCardProps {
  id: string;
  name: string;
  program: string;
  status: string;
  date: string;
}

const ApplicationCard = ({ id, name, program, status, date }: ApplicationCardProps) => {
  const { toast } = useToast();

  const handleApprove = () => {
    toast({
      title: "Application Approved",
      description: "The application has been approved successfully",
      duration: 3000,
    });
  };

  const handleReject = () => {
    toast({
      title: "Application Rejected",
      description: "The application has been rejected",
      duration: 3000,
    });
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-600">ID: {id}</p>
        </div>
      </td>
      <td className="py-3 px-4">{program}</td>
      <td className="py-3 px-4">
        <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
          {status}
        </span>
      </td>
      <td className="py-3 px-4">{date}</td>
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
                    <p>Name: {name}</p>
                    <p>Application ID: {id}</p>
                    <p>Program: {program}</p>
                    <p>Status: {status}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Academic Background</h3>
                    <p>High School: Sample High School</p>
                    <p>GPA: 90.5</p>
                  </div>
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" onClick={handleReject}>
                      Reject
                    </Button>
                    <Button 
                      className="bg-plp-green hover:bg-plp-green/90"
                      onClick={handleApprove}
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
  );
};

export default ApplicationCard;