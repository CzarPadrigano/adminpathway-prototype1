import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Users, Search, Filter } from "lucide-react";
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

const Examinations = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProgram, setFilterProgram] = useState("");

  const handleScheduleBatch = () => {
    toast({
      title: "Batch Scheduled",
      description: "New examination batch has been scheduled successfully",
      duration: 3000,
    });
  };

  const handleStartExam = (batchNumber: number) => {
    toast({
      title: "Examination Started",
      description: `Batch ${batchNumber} examination has been initiated`,
      duration: 3000,
    });
  };

  const handleViewDetails = (batchNumber: number) => {
    toast({
      title: "Details Loaded",
      description: `Viewing details for Batch ${batchNumber}`,
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Examination Management
        </h1>
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
              <Button variant="outline">Cancel</Button>
              <Button 
                className="bg-plp-green hover:bg-plp-green/90"
                onClick={handleScheduleBatch}
              >
                Schedule Batch
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
                <Button 
                  className="bg-plp-green hover:bg-plp-green/90"
                  onClick={() => {
                    toast({
                      title: "Filters Applied",
                      description: "The examination list has been filtered",
                      duration: 3000,
                    });
                  }}
                >
                  Apply Filters
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Batch {i}</h3>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>March {i + 14}, 2024</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>9:00 AM</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{30 - i} slots available</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                    Active
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Examination Batch {i} Details</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <h3 className="font-semibold">Schedule Information</h3>
                          <p>Date: March {i + 14}, 2024</p>
                          <p>Time: 9:00 AM</p>
                          <p>Venue: Room {i}01</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Capacity</h3>
                          <p>Total Slots: 30</p>
                          <p>Available Slots: {30 - i}</p>
                          <p>Registered: {i}</p>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button 
                          variant="outline"
                          onClick={() => handleViewDetails(i)}
                        >
                          Close
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1">
                        Manage
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Manage Examination Batch {i}</DialogTitle>
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
                        <div className="space-y-2">
                          <label>Add Notes</label>
                          <Input placeholder="Enter any additional notes" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button 
                          className="bg-plp-green hover:bg-plp-green/90"
                          onClick={() => handleStartExam(i)}
                        >
                          Start Examination
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Examinations;