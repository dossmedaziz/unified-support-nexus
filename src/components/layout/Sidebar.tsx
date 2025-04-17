
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Home, 
  MessageSquare, 
  Ticket, 
  Users, 
  Settings, 
  Menu, 
  X,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", path: "/", icon: Home },
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
  const isMobile = useIsMobile();
  
  // Set initial state based on screen size
  useEffect(() => {
    setExpanded(!isMobile);
  }, [isMobile]);
  
  // Notify parent component when sidebar expands/collapses
  useEffect(() => {
    if (onToggle) {
      onToggle(expanded);
    }
  }, [expanded, onToggle]);

  return (
    <div 
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col transition-all duration-300",
        expanded ? "w-64" : "w-20",
        isMobile && !expanded ? "-translate-x-full" : "translate-x-0",
        "bg-gradient-to-b from-purple-100 to-blue-100 border-r border-purple-200"
      )}
    >
      <div className="flex items-center p-4 border-b border-purple-200 h-16">
        {expanded && (
          <div className="flex items-center">
            <Smile className="h-6 w-6 text-purple-500 mr-2" />
            <h1 className="text-xl font-bold text-purple-700">KidSupport</h1>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("ml-auto text-purple-700 hover:bg-purple-200 hover:text-purple-800")}
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
                      ? "bg-purple-200 text-purple-700" 
                      : "text-purple-600 hover:bg-purple-100",
                    !expanded && "justify-center"
                  )}
                >
                  <Icon size={20} className={expanded ? "mr-3" : ""} />
                  {expanded && <span className="font-medium">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-purple-200">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
            A
          </div>
          {expanded && (
            <div className="ml-3">
              <p className="font-medium text-purple-700">Admin User</p>
              <p className="text-xs text-purple-500">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
