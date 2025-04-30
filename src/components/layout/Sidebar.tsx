
import {
  LogOut,
  Settings,
  UserCircle,
  UsersRound,
  MessageSquare,
  ChevronUp,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { AUTH_PATHS, USER_PATHS } from "@/navigation/paths";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { LogoutDialog } from "./logout-dialog";
import { useAuth } from "@/context/useAuth";
import { Ticket } from "lucide-react";

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [storedUser, setStoredUser] = useState<{
    full_name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "null");
    setStoredUser(userData);
  }, []);

  const user = {
    name: storedUser?.full_name,
    email: storedUser?.email || "",
    avatarUrl: "",
    initials: storedUser?.full_name
      ?.split(" ")
      .map((n) => n[0])
      .join(""),
  };

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-purple-200/70 shadow-sm">
      <SidebarHeader className="border-b border-purple-200/70 py-2">
        <a
          className="flex items-center justify-center py-5 px-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <img
              src="/classquiz_logo.png"
              alt="Company Logo"
              className="h-10 w-auto rounded-md"
            />
            <span className="font-bold text-xl text-[#4945BE] tracking-tight">ClassQuiz</span>
          </div>
          <div className="hidden group-data-[collapsible=icon]:flex justify-center items-center h-10 w-10 bg-[#4945BE] text-white text-xl font-bold rounded-md">
            CQ
          </div>
        </a>
      </SidebarHeader>
      <SidebarContent className="px-3 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname.startsWith(
                    `/${AUTH_PATHS.TEAMS}`
                  )}
                  onClick={() => navigate(`/${AUTH_PATHS.TEAMS}`)}
                  className="transition-all py-3 rounded-xl hover:bg-purple-100/80 data-[active=true]:bg-purple-200 data-[active=true]:text-[#4945BE]"
                >
                  <UsersRound size={20} className="text-[#4945BE]" />
                  <span className="font-medium text-base">Manage Teams</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname.startsWith(
                    `/${AUTH_PATHS.USERS}`
                  )}
                  onClick={() => navigate(`/${AUTH_PATHS.USERS}`)}
                  className="transition-all py-3 rounded-xl hover:bg-purple-100/80 data-[active=true]:bg-purple-200 data-[active=true]:text-[#4945BE]"
                >
                  <UserCircle size={20} className="text-[#4945BE]" />
                  <span className="font-medium text-base">Manage Users</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname.startsWith(
                    `/${AUTH_PATHS.CONVERSATIONS}`
                  )}
                  onClick={() => navigate(`/${AUTH_PATHS.CONVERSATIONS}`)}
                  className="transition-all py-3 rounded-xl hover:bg-purple-100/80 data-[active=true]:bg-purple-200 data-[active=true]:text-[#4945BE]"
                >
                  <MessageSquare size={20} className="text-[#4945BE]" />
                  <span className="font-medium text-base">Conversations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={location.pathname.startsWith(
                    `/${AUTH_PATHS.TICKETS}`
                  )}
                  onClick={() => navigate(`/${AUTH_PATHS.TICKETS}`)}
                  className="transition-all py-3 rounded-xl hover:bg-purple-100/80 data-[active=true]:bg-purple-200 data-[active=true]:text-[#4945BE]"
                >
                  <Ticket size={20} className="text-[#4945BE]" />
                  <span className="font-medium text-base">Tickets</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-purple-200/70 py-3 mb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="hover:bg-purple-100/80 rounded-xl">
                  <Avatar className="h-8 w-8 shrink-0 ring-2 ring-purple-200 ring-offset-1">
                    <AvatarImage src={user.avatarUrl} />
                    <AvatarFallback className="bg-[#4945BE] text-white font-medium">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-[#4945BE]">{user.name}</span>
                    <span className="text-xs text-purple-500 opacity-80 truncate max-w-[120px]">
                      {user.email}
                    </span>
                  </div>
                  <ChevronUp className="ml-auto h-4 w-4 text-[#4945BE] opacity-70" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] bg-white border-purple-200 shadow-md rounded-xl p-1"
              >
                <DropdownMenuItem
                  onClick={() => navigate(`/${USER_PATHS.PROFILE}`)}
                  className="rounded-lg cursor-pointer hover:bg-purple-100 transition-colors focus:bg-purple-100 focus:text-[#4945BE]"
                >
                  <UserCircle className="mr-2 h-4 w-4 text-[#4945BE]" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigate(`/${USER_PATHS.SETTINGS}`)}
                  className="rounded-lg cursor-pointer hover:bg-purple-100 transition-colors focus:bg-purple-100 focus:text-[#4945BE]"
                >
                  <Settings className="mr-2 h-4 w-4 text-[#4945BE]" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="rounded-lg cursor-pointer hover:bg-red-50 transition-colors focus:bg-red-50 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4 text-red-500" />
                  <span className="text-red-500">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <LogoutDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setStoredUser(null);
          setShowLogoutDialog(false);
          setIsAuthenticated(false);
        }}
      />
    </Sidebar>
  );
}
