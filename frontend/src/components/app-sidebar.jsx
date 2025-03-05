import { Calendar, Home, Inbox, Search, Settings, User } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Sample chat data
const chats = [
  {
    _id: 1,
    title: "doc_name_1",
  },
  {
    _id: 2,
    title: "doc_name_2",
  },
  {
    _id: 3,
    title: "doc_name_3",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white">
      <SidebarContent>
        {/* User Profile */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-center py-4">
            <UserButton />
          </SidebarGroupLabel>
        </SidebarGroup>

        {/* Chat History */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold px-4">Previous Chats</SidebarGroupLabel>
          <SidebarMenu className="flex flex-col gap-2 py-2">
            {chats.map((chat) => (
              <SidebarMenuItem
                key={chat._id}
                className="cursor-pointer px-4 py-2 rounded hover:bg-gray-700 transition"
                onClick={() => alert(`Open chat with ${chat.title}`)} // Replace with navigation logic
              >
                {chat.title}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
