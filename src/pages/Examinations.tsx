import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

const Examinations = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Examination Management
        </h1>
        <Button className="bg-plp-green hover:bg-plp-green/90">
          Schedule New Batch
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  Manage
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Examinations;