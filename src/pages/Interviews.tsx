import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import InterviewScheduleDialog from "@/components/interviews/InterviewScheduleDialog";
import InterviewCard from "@/components/interviews/InterviewCard";

const Interviews = () => {
  const todayInterviews = [
    {
      id: 1,
      applicantName: "Juan Dela Cruz 1",
      program: "BS Psychology",
      time: "9:00 AM",
      interviewer: "Dr. Santos"
    },
    {
      id: 2,
      applicantName: "Juan Dela Cruz 2",
      program: "BS Psychology",
      time: "10:00 AM",
      interviewer: "Dr. Cruz"
    },
    {
      id: 3,
      applicantName: "Juan Dela Cruz 3",
      program: "BS Psychology",
      time: "11:00 AM",
      interviewer: "Dr. Reyes"
    }
  ];

  const upcomingSchedule = [
    {
      id: 1,
      date: "March 15, 2024",
      count: 5
    },
    {
      id: 2,
      date: "March 16, 2024",
      count: 3
    },
    {
      id: 3,
      date: "March 17, 2024",
      count: 4
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Interview Management
        </h1>
        <InterviewScheduleDialog />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Today's Interviews
          </h3>
          <div className="space-y-4">
            {todayInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Schedule
          </h3>
          <div className="space-y-4">
            {upcomingSchedule.map((schedule) => (
              <div 
                key={schedule.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{schedule.date}</span>
                  </div>
                  <p className="font-medium mt-1">{schedule.count} interviews scheduled</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Interviews;