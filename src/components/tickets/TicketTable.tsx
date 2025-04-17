import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MoreHorizontal, 
  ChevronDown, 
  MessageSquare, 
  Filter, 
  Eye, 
  Edit, 
  Trash 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type TicketStatus = "Open" | "In Progress" | "Pending" | "Resolved" | "Closed";

type Ticket = {
  id: string;
  subject: string;
  customer: {
    name: string;
    email: string;
  };
  channel: string;
  assignedTo?: string;
  priority: "Low" | "Medium" | "High" | "Urgent";
  status: TicketStatus;
  createdAt: string;
  updatedAt: string;
};

const mockTickets: Ticket[] = [
  {
    id: "TK-1023",
    subject: "Payment processing issue",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
    },
    channel: "WhatsApp",
    assignedTo: "Alex Martinez",
    priority: "High",
    status: "Open",
    createdAt: "2023-05-15T12:34:00Z",
    updatedAt: "2023-05-15T14:12:00Z",
  },
  {
    id: "TK-1022",
    subject: "Login authentication failed",
    customer: {
      name: "Michael Smith",
      email: "m.smith@example.com",
    },
    channel: "Messenger",
    assignedTo: "Taylor Wong",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2023-05-14T09:12:00Z",
    updatedAt: "2023-05-15T11:30:00Z",
  },
  {
    id: "TK-1021",
    subject: "Product return request",
    customer: {
      name: "Jennifer Lee",
      email: "j.lee@example.com",
    },
    channel: "Email",
    assignedTo: undefined,
    priority: "Medium",
    status: "Pending",
    createdAt: "2023-05-13T15:23:00Z",
    updatedAt: "2023-05-14T10:15:00Z",
  },
  {
    id: "TK-1020",
    subject: "Account upgrade assistance",
    customer: {
      name: "David Wilson",
      email: "d.wilson@example.com",
    },
    channel: "In-App",
    assignedTo: "Alex Martinez",
    priority: "Low",
    status: "Open",
    createdAt: "2023-05-12T11:45:00Z",
    updatedAt: "2023-05-13T09:22:00Z",
  },
  {
    id: "TK-1019",
    subject: "Missing order items",
    customer: {
      name: "Emily Davis",
      email: "emily.d@example.com",
    },
    channel: "WhatsApp",
    assignedTo: "Chris Johnson",
    priority: "High",
    status: "Resolved",
    createdAt: "2023-05-11T08:30:00Z",
    updatedAt: "2023-05-12T14:10:00Z",
  },
  {
    id: "TK-1018",
    subject: "Refund not processed",
    customer: {
      name: "Thomas Brown",
      email: "t.brown@example.com",
    },
    channel: "Email",
    assignedTo: "Taylor Wong",
    priority: "Urgent",
    status: "In Progress",
    createdAt: "2023-05-10T16:20:00Z",
    updatedAt: "2023-05-11T11:05:00Z",
  },
  {
    id: "TK-1017",
    subject: "Website feature not working",
    customer: {
      name: "Olivia Martinez",
      email: "o.martinez@example.com",
    },
    channel: "In-App",
    assignedTo: undefined,
    priority: "Medium",
    status: "Closed",
    createdAt: "2023-05-09T13:15:00Z",
    updatedAt: "2023-05-10T15:30:00Z",
  },
];

export function TicketTable() {
  const [statusFilter, setStatusFilter] = useState<TicketStatus | "All">("All");
  const navigate = useNavigate();
  
  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Resolved":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Closed":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low":
        return "bg-gray-100 text-gray-800";
      case "Medium":
        return "bg-blue-100 text-blue-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Urgent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  const filteredTickets = statusFilter === "All" 
    ? mockTickets
    : mockTickets.filter(ticket => ticket.status === statusFilter);
  
  const handleViewTicket = (ticketId: string) => {
    navigate(`/tickets/${ticketId}`);
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <Filter size={16} className="mr-1" />
              Status: {statusFilter}
              <ChevronDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setStatusFilter("All")}>
              All
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setStatusFilter("Open")}>
              Open
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("In Progress")}>
              In Progress
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Pending")}>
              Pending
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Resolved")}>
              Resolved
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setStatusFilter("Closed")}>
              Closed
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button>
          <MessageSquare size={16} className="mr-2" />
          New Ticket
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Channel</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTickets.map((ticket) => (
              <TableRow 
                key={ticket.id} 
                className="cursor-pointer hover:bg-purple-50"
                onClick={() => handleViewTicket(ticket.id)}
              >
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{ticket.customer.name}</div>
                    <div className="text-sm text-gray-500">{ticket.customer.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{ticket.channel}</Badge>
                </TableCell>
                <TableCell>
                  {ticket.assignedTo || (
                    <span className="text-gray-500 italic">Unassigned</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge className={getPriorityColor(ticket.priority)}>
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    className={cn(
                      "cursor-pointer",
                      getStatusColor(ticket.status as TicketStatus)
                    )}
                  >
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(ticket.updatedAt)}</TableCell>
                <TableCell onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewTicket(ticket.id)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit ticket
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
