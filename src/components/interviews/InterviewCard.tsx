import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, MessageSquare } from "lucide-react";

interface InterviewCardProps {
  id: number;
  applicantName: string;
  program: string;
  time: string;
  interviewer?: string;
}

const InterviewCard = ({ id, applicantName, program, time, interviewer }: InterviewCardProps) => {
  const { toast } = useToast();

  const handleStart = () => {
    toast({
      title: "Interview Started",
      description: `Interview with ${applicantName} has begun`,
      duration: 3000,
    });
  };

  const handleComplete = () => {
    toast({
      title: "Interview Completed",
      description: `Interview with ${applicantName} has been completed`,
      duration: 3000,
    });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-plp-green text-white flex items-center justify-center">
          <User className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium">{applicantName}</p>
          <p className="text-sm text-gray-600">{program}</p>
          <div className="flex items-center mt-1 space-x-4">
            <span className="text-sm text-gray-600 flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              {time}
            </span>
            {interviewer && (
              <span className="text-sm text-gray-600 flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                {interviewer}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          className="border-plp-green text-plp-green hover:bg-plp-green/10"
          onClick={handleStart}
        >
          Start
        </Button>
        <Button 
          variant="outline"
          onClick={handleComplete}
        >
          Complete
        </Button>
      </div>
    </div>
  );
};

export default InterviewCard;