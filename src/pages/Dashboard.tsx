import React from "react";
import { Card } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  Calendar,
  CheckSquare,
  TrendingUp,
  Clock
} from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  trend 
}: { 
  icon: any; 
  label: string; 
  value: string; 
  trend?: string;
}) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 mb-1">{label}</p>
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        {trend && (
          <div className="flex items-center mt-2 text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span className="text-sm">{trend}</span>
          </div>
        )}
      </div>
      <div className="h-12 w-12 rounded-lg bg-plp-green bg-opacity-10 flex items-center justify-center">
        <Icon size={24} className="text-plp-green" />
      </div>
    </div>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock size={20} />
          <span>Last updated: 5 minutes ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Applications"
          value="1,234"
          trend="+12% this week"
        />
        <StatCard
          icon={GraduationCap}
          label="Pending Examinations"
          value="456"
        />
        <StatCard
          icon={Calendar}
          label="Scheduled Interviews"
          value="89"
        />
        <StatCard
          icon={CheckSquare}
          label="Decisions Made"
          value="678"
          trend="+5% this week"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Applications
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Applicant {i}
                  </p>
                  <p className="text-sm text-gray-600">
                    Applied for BS Psychology
                  </p>
                </div>
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                  Pending Review
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Examinations
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Batch {i}
                  </p>
                  <p className="text-sm text-gray-600">
                    March {i + 14}, 2024 - 9:00 AM
                  </p>
                </div>
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                  {30 - i} slots left
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;