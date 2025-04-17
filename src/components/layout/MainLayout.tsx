
import { ReactNode, useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
  const handleSidebarToggle = (expanded: boolean) => {
    setSidebarExpanded(expanded);
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onToggle={handleSidebarToggle} />
      <div 
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: sidebarExpanded ? '16rem' : '5rem' }}
      >
        <Header />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
