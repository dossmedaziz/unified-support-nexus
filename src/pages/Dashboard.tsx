
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
import { useIsMobile } from "@/hooks/use-mobile";

export default function Dashboard() {
  const isMobile = useIsMobile();
  
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple-700">Dashboard</h1>
        <p className="text-purple-500">Overview of your support performance</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <StatsCard 
          title="Total Messages" 
          value="1,284" 
          icon={<MessageSquare size={18} className="text-blue-500" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          title="Active Users" 
          value="342" 
          icon={<UserCheck size={18} className="text-green-500" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard 
          title="Open Tickets" 
          value="32" 
          icon={<AlertCircle size={18} className="text-orange-500" />}
          trend={{ value: 2, isPositive: false }}
        />
        <StatsCard 
          title="Avg. Response Time" 
          value="14 min" 
          icon={<Clock size={18} className="text-purple-500" />}
          trend={{ value: 4, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-lg border border-purple-200 shadow-sm">
          <ChannelChart />
        </div>
        <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-lg border border-purple-200 shadow-sm">
          <ResponseTimeChart />
        </div>
        <div className="lg:col-span-4 bg-white p-4 md:p-6 rounded-lg border border-purple-200 shadow-sm">
          <RecentTickets />
        </div>
      </div>
    </MainLayout>
  );
}
