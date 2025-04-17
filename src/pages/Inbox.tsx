
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChatList } from "@/components/inbox/ChatList";
import { ChatWindow } from "@/components/inbox/ChatWindow";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Inbox() {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const isMobile = useIsMobile();
  const [showChat, setShowChat] = useState(false);
  
  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    if (isMobile) {
      setShowChat(true);
    }
  };
  
  const handleBackToList = () => {
    setShowChat(false);
  };
  
  return (
    <MainLayout>
      <div className="h-[calc(100vh-7rem)] bg-white border border-purple-200 rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div 
          className={cn(
            "border-r border-purple-200",
            isMobile ? (showChat ? "hidden" : "w-full") : "w-1/3"
          )}
        >
          <ChatList 
            onSelectChat={handleSelectChat} 
            selectedChatId={selectedChatId}
          />
        </div>
        <div 
          className={cn(
            isMobile ? (showChat ? "w-full" : "hidden") : "w-2/3"
          )}
        >
          {isMobile && showChat && (
            <div className="p-2 border-b border-purple-200">
              <Button variant="ghost" size="sm" onClick={handleBackToList}>
                <ArrowLeft size={16} className="mr-2" />
                Back to chats
              </Button>
            </div>
          )}
          <ChatWindow chatId={selectedChatId} />
        </div>
      </div>
    </MainLayout>
  );
}
