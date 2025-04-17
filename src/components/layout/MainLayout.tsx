
import { ReactNode, useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useIsMobile } from "@/hooks/use-mobile";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const isMobile = useIsMobile();
  
  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarExpanded(false);
    } else {
      setSidebarExpanded(true);
    }
  }, [isMobile]);
  
  const handleSidebarToggle = (expanded: boolean) => {
    setSidebarExpanded(expanded);
  };
  
  return (
    <div className="flex h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Sidebar onToggle={handleSidebarToggle} />
      <div 
        className="flex-1 transition-all duration-300"
        style={{ 
          marginLeft: isMobile ? '0' : (sidebarExpanded ? '16rem' : '5rem'),
          width: isMobile ? '100%' : 'auto'
        }}
      >
        <Header />
        <main className="p-4 md:p-6 overflow-auto">
          <div className="rounded-2xl bg-white shadow-sm border border-purple-100 p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
