
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center px-6">
      <div className="flex-1 flex items-center">
        <div className="relative w-96">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search tickets, chats..." 
            className="pl-9 border-gray-200 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <Badge 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500"
          >
            3
          </Badge>
        </Button>
        
        <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
