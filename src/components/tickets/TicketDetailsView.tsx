
import { useState } from "react";
import { 
  CalendarClock, 
  MessageSquare, 
  User, 
  Tag, 
  Info, 
  FileText, 
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TicketPriority = "Low" | "Medium" | "High" | "Urgent";
type TicketStatus = "Open" | "In Progress" | "Pending" | "Resolved" | "Closed";

// Mock ticket data (would be fetched from API in production)
const getTicketData = (id: string) => {
  return {
    id: id || "TK-1023",
    subject: "Payment processing issue",
    description: "My monthly payment was declined even though my card has sufficient funds. I've tried three times but keep getting an error message.",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/placeholder.svg"
    },
    channel: "WhatsApp",
    assignedTo: null,
    priority: "High" as TicketPriority,
    status: "Open" as TicketStatus,
    createdAt: "2023-05-15T12:34:00Z",
    updatedAt: "2023-05-15T14:12:00Z",
    notes: [
      {
        id: "n1",
        text: "Called customer to get more details about the payment issue.",
        author: "Alex Martinez",
        timestamp: "2023-05-15T13:20:00Z"
      }
    ]
  };
};

interface TicketDetailsViewProps {
  ticketId: string;
}

export function TicketDetailsView({ ticketId }: TicketDetailsViewProps) {
  const ticket = getTicketData(ticketId);
  const [newNote, setNewNote] = useState("");
  const [isAssignedToMe, setIsAssignedToMe] = useState(false);
  
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
  
  const getPriorityColor = (priority: TicketPriority) => {
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
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  const handleSubmitNote = () => {
    if (newNote.trim()) {
      // In a real app, this would send to the backend
      toast({
        title: "Note added",
        description: "Your note has been added to the ticket",
      });
      setNewNote("");
    }
  };
  
  const handleAssignToMe = () => {
    // In a real app, this would send to the backend
    setIsAssignedToMe(true);
    toast({
      title: "Ticket assigned",
      description: "This ticket has been assigned to you",
    });
  };
  
  return (
    <div className="space-y-6">
      {/* Ticket Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-purple-900">{ticket.id}</span>
            <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
            <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
          </div>
          <h2 className="text-xl font-bold mt-1">{ticket.subject}</h2>
        </div>
        
        <Button 
          disabled={isAssignedToMe}
          onClick={handleAssignToMe}
          className="bg-primary hover:bg-primary/90"
        >
          <User className="mr-2 h-4 w-4" />
          {isAssignedToMe ? "Assigned to You" : "Assign to Me"}
        </Button>
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Customer & Ticket Info */}
        <div className="space-y-6">
          {/* Customer Info Card */}
          <Card className="overflow-hidden border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-purple-500" />
                <span>Customer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-lg">
                  {ticket.customer.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium">{ticket.customer.name}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Mail className="h-3 w-3 mr-1" />
                    {ticket.customer.email}
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-gray-500">Channel</span>
                  <Badge variant="outline" className="bg-blue-50">{ticket.channel}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Ticket Details Card */}
          <Card className="overflow-hidden border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5 text-purple-500" />
                <span>Ticket Info</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Created</span>
                  <span className="text-sm font-medium flex items-center">
                    <CalendarClock className="h-3 w-3 mr-1 text-purple-400" />
                    {formatDate(ticket.createdAt)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Updated</span>
                  <span className="text-sm font-medium">
                    {formatDate(ticket.updatedAt)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Assigned To</span>
                  <span className="text-sm font-medium">
                    {isAssignedToMe ? (
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">You</Badge>
                    ) : (
                      <span className="italic text-gray-400">Unassigned</span>
                    )}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Description & Notes */}
        <div className="md:col-span-2 space-y-6">
          {/* Description Card */}
          <Card className="overflow-hidden border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-500" />
                <span>Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-700">{ticket.description}</p>
            </CardContent>
          </Card>
          
          {/* Notes Section */}
          <Card className="overflow-hidden border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-purple-500" />
                <span>Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4 mb-4">
                {ticket.notes.map((note) => (
                  <div key={note.id} className="p-3 rounded-lg bg-purple-50 border border-purple-100">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-purple-800">{note.author}</span>
                      <span className="text-xs text-gray-500">{formatDate(note.timestamp)}</span>
                    </div>
                    <p className="text-gray-700">{note.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-2">
                <Textarea
                  placeholder="Add a note..."
                  className="min-h-[120px] rounded-lg border-purple-200 focus-visible:ring-purple-400"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-100 pt-4">
              <Button 
                onClick={handleSubmitNote} 
                disabled={!newNote.trim()}
                className="ml-auto"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Add Note
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
