import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InterviewScheduleDialog = () => {
  const { toast } = useToast();

  const handleSchedule = () => {
    toast({
      title: "Interview Scheduled",
      description: "The interview has been scheduled successfully",
      duration: 3000,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-plp-green hover:bg-plp-green/90">
          Schedule Interviews
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule New Interview</DialogTitle>
          <DialogDescription>
            Schedule an interview with the following details
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label>Applicant</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select applicant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="juan">Juan Dela Cruz</SelectItem>
                <SelectItem value="maria">Maria Santos</SelectItem>
                <SelectItem value="pedro">Pedro Reyes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label>Date</label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <label>Time</label>
            <Input type="time" />
          </div>
          <div className="space-y-2">
            <label>Interviewer</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select interviewer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-santos">Dr. Santos</SelectItem>
                <SelectItem value="dr-cruz">Dr. Cruz</SelectItem>
                <SelectItem value="dr-reyes">Dr. Reyes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSchedule}>
            Schedule Interview
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewScheduleDialog;