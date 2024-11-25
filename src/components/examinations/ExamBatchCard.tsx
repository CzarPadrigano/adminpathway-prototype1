import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExamBatchCardProps {
  batchNumber: number;
  date: string;
  time: string;
  availableSlots: number;
}

const ExamBatchCard = ({ batchNumber, date, time, availableSlots }: ExamBatchCardProps) => {
  const { toast } = useToast();

  const handleStartExam = () => {
    toast({
      title: "Examination Started",
      description: `Batch ${batchNumber} examination has been initiated`,
      duration: 3000,
    });
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">Batch {batchNumber}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <Clock className="h-4 w-4 mr-2" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <Users className="h-4 w-4 mr-2" />
              <span>{availableSlots} slots available</span>
            </div>
          </div>
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
            Active
          </span>
        </div>
        <div className="flex space-x-2">
          <Dialog>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Manage Examination Batch {batchNumber}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label>Update Status</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleStartExam}>
                  Start Examination
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default ExamBatchCard;