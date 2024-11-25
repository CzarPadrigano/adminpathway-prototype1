import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Decisions = () => {
  const { toast } = useToast();

  const handleAccept = (id: number) => {
    toast({
      title: "Application Accepted",
      description: `Application ${id} has been accepted`,
      duration: 3000,
    });
  };

  const handleReject = (id: number) => {
    toast({
      title: "Application Rejected",
      description: `Application ${id} has been rejected`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Decision Management
        </h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            Pending
          </Button>
          <Button variant="outline">
            <CheckCircle className="mr-2 h-4 w-4" />
            Accepted
          </Button>
          <Button variant="outline">
            <XCircle className="mr-2 h-4 w-4" />
            Rejected
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-plp-green text-white flex items-center justify-center">
                  {i}
                </div>
                <div>
                  <p className="font-medium">Juan Dela Cruz {i}</p>
                  <p className="text-sm text-gray-600">BS Psychology</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600">
                      Exam Score: 85/100
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-600">
                      Interview: Passed
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  className="border-green-500 text-green-500 hover:bg-green-50"
                  onClick={() => handleAccept(i)}
                >
                  Accept
                </Button>
                <Button 
                  variant="outline" 
                  className="border-red-500 text-red-500 hover:bg-red-50"
                  onClick={() => handleReject(i)}
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Decisions;