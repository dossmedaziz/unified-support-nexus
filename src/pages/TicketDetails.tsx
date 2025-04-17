
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { TicketDetailsView } from "@/components/tickets/TicketDetailsView";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TicketDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="mb-4 -ml-2 text-purple-600 hover:text-purple-800 hover:bg-purple-100"
          onClick={() => navigate('/tickets')}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Tickets
        </Button>
        
        <h1 className="text-2xl font-bold text-accent">Ticket Details</h1>
        <p className="text-purple-500 mt-1">View and manage ticket information</p>
      </div>
      
      <div className="rounded-card bg-white p-4 md:p-6 border-accent/20">
        <TicketDetailsView ticketId={id || ""} />
      </div>
    </MainLayout>
  );
}
