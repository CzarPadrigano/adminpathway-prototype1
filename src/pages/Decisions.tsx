import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Clock, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Decisions = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleAccept = (id: number) => {
    toast({
      title: "Application Accepted",
      description: `Application ${id} has been accepted`,
      duration: 3000,
    });
  };

  const handleReject = (id: number) => {
    toast({
      title: "Application Rejected",
      description: `Application ${id} has been rejected`,
      duration: 3000,
    });
  };

  const decisions = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
    firstName: `Juan`,
    lastName: `Dela Cruz ${String.fromCharCode(65 + i)}`, // Different last names for sorting
    program: i % 2 === 0 ? "BS Psychology" : "BS Information Technology",
    examScore: 85 + i,
    interviewStatus: "Passed",
    status: i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'accepted' : 'rejected'
  }));

  const courses = [...new Set(decisions.map(d => d.program))];

  // Filter and sort logic
  const filteredDecisions = decisions
    .filter(d => 
      // Status filter
      (filter === 'all' || d.status === filter) &&
      // Search query
      (`${d.firstName} ${d.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
       d.program.toLowerCase().includes(searchQuery.toLowerCase())) &&
      // Course filter
      (courseFilter === "all" || d.program === courseFilter)
    )
    .sort((a, b) => {
      // Sort by last name
      const comparison = a.lastName.localeCompare(b.lastName);
      return sortOrder === "asc" ? comparison : -comparison;
    });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Decision Management
        </h1>
        <div className="flex space-x-2">
          <Button 
            variant={filter === 'pending' ? 'default' : 'outline'}
            onClick={() => setFilter('pending')}
          >
            <Clock className="mr-2 h-4 w-4" />
            Pending
          </Button>
          <Button 
            variant={filter === 'accepted' ? 'default' : 'outline'}
            onClick={() => setFilter('accepted')}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Accepted
          </Button>
          <Button 
            variant={filter === 'rejected' ? 'default' : 'outline'}
            onClick={() => setFilter('rejected')}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Rejected
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search by name or program..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Course Filter */}
            <Select value={courseFilter} onValueChange={setCourseFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Order */}
            <Select value={sortOrder} onValueChange={(value: "asc" | "desc") => setSortOrder(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by last name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">A-Z</SelectItem>
                <SelectItem value="desc">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredDecisions.map((decision) => (
            <div 
              key={decision.id} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-plp-green text-white flex items-center justify-center">
                  {decision.firstName[0]}
                </div>
                <div>
                  <p className="font-medium">{decision.firstName} {decision.lastName}</p>
                  <p className="text-sm text-gray-600">{decision.program}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600">
                      Exam Score: {decision.examScore}/100
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-600">
                      Interview: {decision.interviewStatus}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {decision.status === 'pending' && (
                  <>
                    <Button 
                      variant="outline" 
                      className="border-green-500 text-green-500 hover:bg-green-50"
                      onClick={() => handleAccept(decision.id)}
                    >
                      Accept
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-50"
                      onClick={() => handleReject(decision.id)}
                    >
                      Reject
                    </Button>
                  </>
                )}
                {decision.status === 'accepted' && (
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-md">
                    Accepted
                  </span>
                )}
                {decision.status === 'rejected' && (
                  <span className="px-4 py-2 bg-red-100 text-red-800 rounded-md">
                    Rejected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Decisions;