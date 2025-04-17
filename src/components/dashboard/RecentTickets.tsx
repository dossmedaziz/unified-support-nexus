
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tickets = [
  {
    id: "TK-1023",
    customer: "Sarah Johnson",
    subject: "Payment processing issue",
    status: "Open",
    channel: "WhatsApp",
    time: "10 min ago",
  },
  {
    id: "TK-1022",
    customer: "Michael Smith",
    subject: "Login authentication failed",
    status: "In Progress",
    channel: "Messenger",
    time: "32 min ago",
  },
  {
    id: "TK-1021",
    customer: "Jennifer Lee",
    subject: "Product return request",
    status: "Pending",
    channel: "Email",
    time: "1 hour ago",
  },
  {
    id: "TK-1020",
    customer: "David Wilson",
    subject: "Account upgrade assistance",
    status: "Open",
    channel: "In-App",
    time: "2 hours ago",
  },
];

export function RecentTickets() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle>Recent Tickets</CardTitle>
        <Button asChild variant="ghost" size="sm">
          <Link to="/tickets">
            View all
            <ExternalLink size={16} className="ml-1" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center justify-between p-3 border rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="font-medium text-sm">{ticket.subject}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-500">{ticket.customer}</p>
                    <span className="text-gray-300">•</span>
                    <p className="text-xs text-gray-500">{ticket.channel}</p>
                    <span className="text-gray-300">•</span>
                    <p className="text-xs text-gray-500">{ticket.time}</p>
                  </div>
                </div>
              </div>
              <Badge 
                variant={
                  ticket.status === "Open" ? "destructive" : 
                  ticket.status === "In Progress" ? "default" : 
                  "secondary"
                }
              >
                {ticket.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
