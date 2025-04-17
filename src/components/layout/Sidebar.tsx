
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart2, 
  MessageSquare, 
  Ticket, 
  Users, 
  Settings, 
  Menu, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", path: "/", icon: BarChart2 },
  { name: "Inbox", path: "/inbox", icon: MessageSquare },
  { name: "Tickets", path: "/tickets", icon: Ticket },
  { name: "Team", path: "/team", icon: Users },
  { name: "Settings", path: "/settings", icon: Settings },
];

interface SidebarProps {
  onToggle?: (expanded: boolean) => void;
}

export function Sidebar({ onToggle }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  
  // Notify parent component when sidebar expands/collapses
  useEffect(() => {
    if (onToggle) {
      onToggle(expanded);
    }
  }, [expanded, onToggle]);

  return (
    <div 
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col bg-white border-r transition-all duration-300",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center p-4 border-b h-16">
        {expanded && (
          <h1 className="text-xl font-bold">Support Hub</h1>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("ml-auto")}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link 
                  to={item.path}
                  className={cn(
                    "flex items-center p-3 rounded-md transition-colors",
                    isActive 
                      ? "bg-blue-100 text-blue-600" 
                      : "text-gray-700 hover:bg-gray-100",
                    !expanded && "justify-center"
                  )}
                >
                  <Icon size={20} className={expanded ? "mr-3" : ""} />
                  {expanded && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
            A
          </div>
          {expanded && (
            <div className="ml-3">
              <p className="font-medium">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
