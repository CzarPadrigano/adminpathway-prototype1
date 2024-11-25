import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import ExamBatchCard from "@/components/examinations/ExamBatchCard";
import NewExamBatchDialog from "@/components/examinations/NewExamBatchDialog";
import {
  Dialog,
  DialogContent,
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

const Examinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProgram, setFilterProgram] = useState("");

  const examBatches = [1, 2, 3].map((i) => ({
    batchNumber: i,
    date: `March ${i + 14}, 2024`,
    time: "9:00 AM",
    availableSlots: 30 - i,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Examination Management
        </h1>
        <NewExamBatchDialog />
      </div>

      <Card className="p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input 
              placeholder="Search batches..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Filter Examinations</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label>Program</label>
                  <Select value={filterProgram} onValueChange={setFilterProgram}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bspsych">BS Psychology</SelectItem>
                      <SelectItem value="bsit">BS Information Technology</SelectItem>
                      <SelectItem value="bsba">BS Business Administration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label>Date Range</label>
                  <Input type="date" className="mb-2" placeholder="Start date" />
                  <Input type="date" placeholder="End date" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Reset</Button>
                <Button>Apply Filters</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {examBatches.map((batch) => (
            <ExamBatchCard key={batch.batchNumber} {...batch} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Examinations;