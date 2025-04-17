
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Edit, Trash, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Agent" | "Supervisor";
  status: "Active" | "Inactive";
  joined: string;
  messagesHandled: number;
  ticketsResolved: number;
};

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Martinez",
    email: "alex.m@company.com",
    role: "Admin",
    status: "Active",
    joined: "Jan 12, 2023",
    messagesHandled: 842,
    ticketsResolved: 156,
  },
  {
    id: "2",
    name: "Taylor Wong",
    email: "taylor.w@company.com",
    role: "Supervisor",
    status: "Active",
    joined: "Mar 5, 2023",
    messagesHandled: 951,
    ticketsResolved: 203,
  },
  {
    id: "3",
    name: "Chris Johnson",
    email: "chris.j@company.com",
    role: "Agent",
    status: "Active",
    joined: "May 18, 2023",
    messagesHandled: 753,
    ticketsResolved: 142,
  },
  {
    id: "4",
    name: "Jordan Smith",
    email: "jordan.s@company.com",
    role: "Agent",
    status: "Inactive",
    joined: "Feb 22, 2023",
    messagesHandled: 256,
    ticketsResolved: 62,
  },
  {
    id: "5",
    name: "Morgan Lee",
    email: "morgan.l@company.com",
    role: "Agent",
    status: "Active",
    joined: "Jul 14, 2023",
    messagesHandled: 645,
    ticketsResolved: 121,
  },
];

export default function Team() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Team Management</h1>
          <p className="text-gray-500">Manage your support team members and permissions</p>
        </div>
        <Button>
          <UserPlus size={16} className="mr-2" />
          Add Team Member
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Messages Handled</TableHead>
              <TableHead>Tickets Resolved</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      member.role === "Admin" ? "default" : 
                      member.role === "Supervisor" ? "secondary" : "outline"
                    }
                  >
                    {member.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={member.status === "Active" ? "default" : "destructive"}
                    className={
                      member.status === "Active" ? "bg-green-100 text-green-800 hover:bg-green-200" : undefined
                    }
                  >
                    {member.status}
                  </Badge>
                </TableCell>
                <TableCell>{member.joined}</TableCell>
                <TableCell>{member.messagesHandled.toLocaleString()}</TableCell>
                <TableCell>{member.ticketsResolved.toLocaleString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
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
    </MainLayout>
  );
}
