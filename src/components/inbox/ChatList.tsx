
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ChatItem = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  status: "online" | "offline";
  channel: "whatsapp" | "messenger" | "in-app";
  avatar?: string;
};

const mockChats: ChatItem[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    lastMessage: "I'm having trouble with my payment",
    time: "10:32 AM",
    unread: 3,
    status: "online",
    channel: "whatsapp",
  },
  {
    id: "2",
    name: "Michael Smith",
    lastMessage: "Thanks for your help!",
    time: "9:15 AM",
    unread: 0,
    status: "offline",
    channel: "messenger",
  },
  {
    id: "3",
    name: "Jennifer Lee",
    lastMessage: "Can I get a refund for my order?",
    time: "Yesterday",
    unread: 2,
    status: "online",
    channel: "in-app",
  },
  {
    id: "4",
    name: "David Wilson",
    lastMessage: "I need to upgrade my subscription",
    time: "Yesterday",
    unread: 0,
    status: "offline",
    channel: "whatsapp",
  },
  {
    id: "5",
    name: "Emily Davis",
    lastMessage: "Where is my order?",
    time: "Tuesday",
    unread: 0,
    status: "offline",
    channel: "messenger",
  },
];

const getChannelColor = (channel: string) => {
  switch (channel) {
    case "whatsapp":
      return "bg-green-500";
    case "messenger":
      return "bg-blue-500";
    case "in-app":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

const getChannelName = (channel: string) => {
  switch (channel) {
    case "whatsapp":
      return "WhatsApp";
    case "messenger":
      return "Messenger";
    case "in-app":
      return "In-App";
    default:
      return channel;
  }
};

type ChatListProps = {
  onSelectChat: (chatId: string) => void;
  selectedChatId?: string;
};

export function ChatList({ onSelectChat, selectedChatId }: ChatListProps) {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredChats = filter 
    ? mockChats.filter(chat => chat.channel === filter)
    : mockChats;
  
  return (
    <div className="border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">Inbox</h2>
        <div className="flex space-x-2 mt-3">
          <Badge 
            className={cn(
              "cursor-pointer",
              filter === null ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-200 hover:bg-gray-300 text-gray-800" 
            )}
            onClick={() => setFilter(null)}
          >
            All
          </Badge>
          <Badge 
            className={cn(
              "cursor-pointer",
              filter === "whatsapp" ? "bg-green-500 hover:bg-green-600" : "bg-gray-200 hover:bg-gray-300 text-gray-800" 
            )}
            onClick={() => setFilter("whatsapp")}
          >
            WhatsApp
          </Badge>
          <Badge 
            className={cn(
              "cursor-pointer",
              filter === "messenger" ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-200 hover:bg-gray-300 text-gray-800" 
            )}
            onClick={() => setFilter("messenger")}
          >
            Messenger
          </Badge>
          <Badge 
            className={cn(
              "cursor-pointer",
              filter === "in-app" ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-200 hover:bg-gray-300 text-gray-800" 
            )}
            onClick={() => setFilter("in-app")}
          >
            In-App
          </Badge>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto divide-y">
        {filteredChats.map((chat) => (
          <div 
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={cn(
              "p-4 hover:bg-gray-50 cursor-pointer transition-colors",
              selectedChatId === chat.id && "bg-blue-50"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {chat.avatar ? (
                    <img 
                      src={chat.avatar} 
                      alt={chat.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 font-medium">
                      {chat.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div 
                  className={cn(
                    "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white",
                    chat.status === "online" ? "bg-green-500" : "bg-gray-400"
                  )}
                ></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500 flex-shrink-0">{chat.time}</span>
                </div>
                
                <div className="flex items-center mt-1">
                  <span 
                    className={cn(
                      "w-2 h-2 rounded-full mr-1.5",
                      getChannelColor(chat.channel)
                    )}
                  ></span>
                  <span className="text-xs text-gray-500 mr-1.5">
                    {getChannelName(chat.channel)}
                  </span>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
              </div>
              
              {chat.unread > 0 && (
                <div className="ml-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {chat.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
