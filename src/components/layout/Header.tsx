
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Header() {
  const isMobile = useIsMobile();
  
  return (
    <header className="h-16 border-b border-purple-200 bg-white flex items-center px-4 md:px-6">
      {isMobile && (
        <Button variant="ghost" size="icon" className="mr-2 text-purple-700">
          <Menu size={20} />
        </Button>
      )}
      
      <div className="flex-1 flex items-center">
        <div className={cn("relative", isMobile ? "w-full" : "w-96")}>
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-400" size={18} />
          <Input 
            placeholder="Search tickets, chats..." 
            className="pl-9 border-purple-200 focus:border-purple-500 rounded-full"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-purple-700 hover:bg-purple-100">
          <Bell size={20} />
          <Badge 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-pink-500"
          >
            3
          </Badge>
        </Button>
        
        {!isMobile && <div className="h-8 w-[1px] bg-purple-200 mx-2"></div>}
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-sm">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
