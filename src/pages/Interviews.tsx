import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Interviews = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Interview Management
        </h1>
        <Button className="bg-plp-green hover:bg-plp-green/90">
          Schedule Interviews
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Interviews
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-plp-green text-white flex items-center justify-center">
                    {i}
                  </div>
                  <div>
                    <p className="font-medium">Juan Dela Cruz {i}</p>
                    <p className="text-sm text-gray-600">BS Psychology</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">9:{i}0 AM</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Start
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Schedule
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March {i + 14}, 2024</span>
                  </div>
                  <p className="font-medium mt-1">5 interviews scheduled</p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Interviews;