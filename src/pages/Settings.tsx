import React from "react";
import ProfileSettings from "@/components/settings/ProfileSettings";
import SecuritySettings from "@/components/settings/SecuritySettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import SystemSettings from "@/components/settings/SystemSettings";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileSettings />
        <SecuritySettings />
        <NotificationSettings />
        <SystemSettings />
      </div>
    </div>
  );
};

export default Settings;