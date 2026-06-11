import React from "react";
import KPI from "../KPI";
import {
  Users,
  Globe,
  Search,
  Megaphone,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const AnalyticsDashboard = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-4 gap-4">
          <KPI title="Total Leads" value={52} icon={BarChart3} />

          <KPI title="Website Leads" value={20} icon={Globe} />

          <KPI title="Meta Ads" value={15} icon={Megaphone} />

          <KPI title="Google Ads" value={17} icon={Search} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
