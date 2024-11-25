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

const NewExamBatchDialog = () => {
  const { toast } = useToast();

  const handleScheduleBatch = () => {
    toast({
      title: "Batch Scheduled",
      description: "New examination batch has been scheduled successfully",
      duration: 3000,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-plp-green hover:bg-plp-green/90">
          Schedule New Batch
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule New Examination Batch</DialogTitle>
          <DialogDescription>
            Set up a new examination batch with the following details
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label>Date</label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <label>Time</label>
            <Input type="time" />
          </div>
          <div className="space-y-2">
            <label>Capacity</label>
            <Input type="number" placeholder="Enter number of slots" />
          </div>
          <div className="space-y-2">
            <label>Venue</label>
            <Input placeholder="Enter examination venue" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleScheduleBatch}>
            Schedule Batch
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewExamBatchDialog;