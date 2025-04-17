
import { MainLayout } from "@/components/layout/MainLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ChannelChart } from "@/components/dashboard/ChannelChart";
import { ResponseTimeChart } from "@/components/dashboard/ResponseTimeChart";
import { RecentTickets } from "@/components/dashboard/RecentTickets";
import { 
  MessageSquare, 
  UserCheck, 
  AlertCircle,
  Clock 
} from "lucide-react";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Overview of your support performance</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard 
          title="Total Messages" 
          value="1,284" 
          icon={<MessageSquare size={18} />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          title="Active Users" 
          value="342" 
          icon={<UserCheck size={18} />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard 
          title="Open Tickets" 
          value="32" 
          icon={<AlertCircle size={18} />}
          trend={{ value: 2, isPositive: false }}
        />
        <StatsCard 
          title="Avg. Response Time" 
          value="14 min" 
          icon={<Clock size={18} />}
          trend={{ value: 4, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <ChannelChart />
        <ResponseTimeChart />
        <RecentTickets />
      </div>
    </MainLayout>
  );
}
