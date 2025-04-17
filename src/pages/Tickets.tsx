
import { MainLayout } from "@/components/layout/MainLayout";
import { TicketTable } from "@/components/tickets/TicketTable";

export default function Tickets() {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple-700">Tickets</h1>
        <p className="text-purple-500">Manage and track customer support tickets</p>
      </div>
      
      <div className="bg-white p-4 md:p-6 rounded-lg border border-purple-200 shadow-sm">
        <TicketTable />
      </div>
    </MainLayout>
  );
}
