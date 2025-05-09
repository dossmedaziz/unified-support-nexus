
import { useState } from "react";
import { Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  content: string;
  sender: "user" | "agent";
  timestamp: string;
  isAutoGenerated?: boolean;
};

// Mock conversation for a specific chat
const mockConversation: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      content: "Hello, I'm having trouble with my payment. It's not going through.",
      sender: "user",
      timestamp: "10:28 AM",
    },
    {
      id: "m2",
      content: "I've tried three different cards but keep getting an error.",
      sender: "user",
      timestamp: "10:29 AM",
    },
    {
      id: "m3",
      content: "I'm sorry to hear you're having trouble with your payment. Let me help you with that. Could you tell me what error message you're seeing?",
      sender: "agent",
      timestamp: "10:30 AM",
    },
    {
      id: "m4",
      content: "It says 'Transaction declined by issuer'",
      sender: "user",
      timestamp: "10:31 AM",
    },
    {
      id: "m5",
      content: "Thank you for that information. This usually means your bank is blocking the transaction. Let me suggest a few options to resolve this issue...",
      sender: "agent",
      timestamp: "10:32 AM",
      isAutoGenerated: true,
    },
  ],
  "2": [
    {
      id: "m1",
      content: "Hi, I needed help with logging in and your colleague helped me.",
      sender: "user",
      timestamp: "9:12 AM",
    },
    {
      id: "m2",
      content: "I'm all set now, thank you!",
      sender: "user",
      timestamp: "9:13 AM",
    },
    {
      id: "m3",
      content: "Glad to hear that the issue was resolved! Is there anything else I can help you with today?",
      sender: "agent",
      timestamp: "9:14 AM",
    },
    {
      id: "m4",
      content: "No that's all, thanks for your help!",
      sender: "user",
      timestamp: "9:15 AM",
    },
  ],
  "3": [
    {
      id: "m1",
      content: "Hi, I want to return the product I ordered last week.",
      sender: "user",
      timestamp: "Yesterday",
    },
    {
      id: "m2",
      content: "It doesn't work as described on your website.",
      sender: "user",
      timestamp: "Yesterday",
    },
    {
      id: "m3",
      content: "I'm sorry to hear that. I'd be happy to help with your return request. Could you provide your order number please?",
      sender: "agent",
      timestamp: "Yesterday",
      isAutoGenerated: true,
    },
  ],
};

// User data for the chat window header
const mockUsers: Record<string, { name: string; status: string; channel: string }> = {
  "1": { name: "Sarah Johnson", status: "online", channel: "WhatsApp" },
  "2": { name: "Michael Smith", status: "offline", channel: "Messenger" },
  "3": { name: "Jennifer Lee", status: "online", channel: "In-App" },
};

type ChatWindowProps = {
  chatId?: string;
};

export function ChatWindow({ chatId }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState("");
  
  if (!chatId) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <p>Select a conversation to start chatting</p>
      </div>
    );
  }
  
  const conversation = mockConversation[chatId] || [];
  const user = mockUsers[chatId];
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-blue-100 text-blue-600">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-medium">{user.name}</p>
            <div className="flex items-center">
              <span 
                className={cn(
                  "w-2 h-2 rounded-full mr-1.5",
                  user.status === "online" ? "bg-green-500" : "bg-gray-400"
                )}
              ></span>
              <span className="text-xs text-gray-500">{user.status}</span>
              <span className="text-gray-300 mx-1.5">•</span>
              <span className="text-xs text-gray-500">{user.channel}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Phone size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <Video size={18} />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical size={18} />
          </Button>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {conversation.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex",
              message.sender === "user" ? "justify-start" : "justify-end"
            )}
          >
            <div 
              className={cn(
                "max-w-[80%] rounded-lg p-3",
                message.sender === "user" 
                  ? "bg-gray-100 text-gray-800" 
                  : message.isAutoGenerated
                  ? "bg-green-100 text-gray-800 border border-green-200"
                  : "bg-blue-500 text-white"
              )}
            >
              {message.isAutoGenerated && (
                <div className="text-xs mb-1 text-green-600 font-medium">AI-generated response</div>
              )}
              <p className="text-sm">{message.content}</p>
              <div 
                className={cn(
                  "text-xs mt-1 text-right",
                  message.sender === "user" ? "text-gray-500" : message.isAutoGenerated ? "text-green-600" : "text-blue-100"
                )}
              >
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Message input */}
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip size={18} />
          </Button>
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            size="icon"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
