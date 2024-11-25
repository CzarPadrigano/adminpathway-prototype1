import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Decisions = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all');

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

  const decisions = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
    name: `Juan Dela Cruz ${i}`,
    program: "BS Psychology",
    examScore: 85 + i,
    interviewStatus: "Passed",
    status: i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'accepted' : 'rejected'
  }));

  const filteredDecisions = decisions.filter(d => 
    filter === 'all' || d.status === filter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Decision Management
        </h1>
        <div className="flex space-x-2">
          <Button 
            variant={filter === 'pending' ? 'default' : 'outline'}
            onClick={() => setFilter('pending')}
          >
            <Clock className="mr-2 h-4 w-4" />
            Pending
          </Button>
          <Button 
            variant={filter === 'accepted' ? 'default' : 'outline'}
            onClick={() => setFilter('accepted')}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Accepted
          </Button>
          <Button 
            variant={filter === 'rejected' ? 'default' : 'outline'}
            onClick={() => setFilter('rejected')}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Rejected
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {filteredDecisions.map((decision) => (
            <div 
              key={decision.id} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-plp-green text-white flex items-center justify-center">
                  {decision.id}
                </div>
                <div>
                  <p className="font-medium">{decision.name}</p>
                  <p className="text-sm text-gray-600">{decision.program}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600">
                      Exam Score: {decision.examScore}/100
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-600">
                      Interview: {decision.interviewStatus}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {decision.status === 'pending' && (
                  <>
                    <Button 
                      variant="outline" 
                      className="border-green-500 text-green-500 hover:bg-green-50"
                      onClick={() => handleAccept(decision.id)}
                    >
                      Accept
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-50"
                      onClick={() => handleReject(decision.id)}
                    >
                      Reject
                    </Button>
                  </>
                )}
                {decision.status === 'accepted' && (
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-md">
                    Accepted
                  </span>
                )}
                {decision.status === 'rejected' && (
                  <span className="px-4 py-2 bg-red-100 text-red-800 rounded-md">
                    Rejected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Decisions;