import React from "react";
import { Card } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  Calendar,
  CheckSquare,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  trend,
  trendUp = true
}: { 
  icon: any; 
  label: string; 
  value: string; 
  trend?: string;
  trendUp?: boolean;
}) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 mb-1">{label}</p>
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        {trend && (
          <div className={`flex items-center mt-2 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trendUp ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
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

const RecentActivityCard = ({ 
  title, 
  items 
}: { 
  title: string;
  items: Array<{
    id: number;
    title: string;
    subtitle: string;
    status?: string;
    statusColor?: string;
  }>;
}) => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      {title}
    </h3>
    <div className="space-y-4">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div>
            <p className="font-medium text-gray-900">
              {item.title}
            </p>
            <p className="text-sm text-gray-600">
              {item.subtitle}
            </p>
          </div>
          {item.status && (
            <span className={`px-3 py-1 text-sm ${item.statusColor} rounded-full`}>
              {item.status}
            </span>
          )}
        </div>
      ))}
    </div>
  </Card>
);

const Dashboard = () => {
  const recentApplications = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
    title: `Applicant ${i}`,
    subtitle: "Applied for BS Psychology",
    status: "Pending Review",
    statusColor: "bg-yellow-100 text-yellow-800"
  }));

  const upcomingExams = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
    title: `Batch ${i}`,
    subtitle: `March ${i + 14}, 2024 - 9:00 AM`,
    status: `${30 - i} slots`,
    statusColor: "bg-green-100 text-green-800"
  }));

  return (
    <div className="space-y-6 animate-fadeIn">
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
          trendUp={true}
        />
        <StatCard
          icon={GraduationCap}
          label="Pending Examinations"
          value="456"
          trend="-5% this week"
          trendUp={false}
        />
        <StatCard
          icon={Calendar}
          label="Scheduled Interviews"
          value="89"
          trend="+8% this week"
          trendUp={true}
        />
        <StatCard
          icon={CheckSquare}
          label="Decisions Made"
          value="678"
          trend="+15% this week"
          trendUp={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivityCard
          title="Recent Applications"
          items={recentApplications}
        />
        <RecentActivityCard
          title="Upcoming Examinations"
          items={upcomingExams}
        />
      </div>
    </div>
  );
};

export default Dashboard;