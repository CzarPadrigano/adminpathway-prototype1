import React from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap,
  Calendar,
  CheckSquare,
  Settings,
  LogOut
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: Users, label: "Applications", path: "/applications" },
    { icon: GraduationCap, label: "Examinations", path: "/examinations" },
    { icon: Calendar, label: "Interviews", path: "/interviews" },
    { icon: CheckSquare, label: "Decisions", path: "/decisions" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the system",
      duration: 3000,
    });
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-200">
          <img 
            src="/plp-logo.png" 
            alt="PLP Logo" 
            className="h-16 mx-auto"
          />
          <h1 className="text-plp-green text-center mt-2 font-semibold">
            Admin Portal
          </h1>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-plp-green text-white" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="flex items-center space-x-3 text-gray-600 hover:text-red-600 w-full px-4 py-2.5 rounded-lg transition-colors">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will be redirected to the login page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>
                  Logout
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 z-10">
      <div className="h-full flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold text-plp-green">
          Admission Management System
        </h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Admin User</span>
          <div className="h-8 w-8 rounded-full bg-plp-green text-white flex items-center justify-center">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main className="pl-64 pt-16 min-h-screen">
        <div className="p-6 animate-fadeIn">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;