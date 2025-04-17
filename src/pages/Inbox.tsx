
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ChatList } from "@/components/inbox/ChatList";
import { ChatWindow } from "@/components/inbox/ChatWindow";

export default function Inbox() {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  
  return (
    <MainLayout>
      <div className="h-[calc(100vh-7rem)] bg-white border rounded-lg overflow-hidden flex">
        <div className="w-1/3 border-r">
          <ChatList 
            onSelectChat={setSelectedChatId} 
            selectedChatId={selectedChatId}
          />
        </div>
        <div className="w-2/3">
          <ChatWindow chatId={selectedChatId} />
        </div>
      </div>
    </MainLayout>
  );
}
