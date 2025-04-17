
import { MainLayout } from "@/components/layout/MainLayout";
import { TicketTable } from "@/components/tickets/TicketTable";
import { Smile } from "lucide-react";

export default function Tickets() {
  return (
    <MainLayout>
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <Smile className="h-7 w-7 text-accent" />
          <h1 className="text-2xl font-bold text-accent">Tickets</h1>
        </div>
        <p className="text-purple-500 mt-1">Manage and track support tickets for kids</p>
      </div>
      
      <div className="rounded-card bg-white p-4 md:p-6 border-accent/20">
        <TicketTable />
      </div>
    </MainLayout>
  );
}
