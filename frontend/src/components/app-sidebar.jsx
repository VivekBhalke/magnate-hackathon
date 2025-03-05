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
  useEffect(()=>{
    // write api call
  },[])
  return (
    <Sidebar>
      <SidebarContent>
        {/* User Button */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex">
            <UserButton />
          </SidebarGroupLabel>
        </SidebarGroup>

        {/* Chat History */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl ">Previous Chats</SidebarGroupLabel>
          <SidebarMenu className="flex flex-col gap-1 py-2">
            {chats.map((chat) => (
              <SidebarMenuItem
                key={chat._id}
                className="cursor-pointer px-4"
                onClick={() => alert(`Open chat with ${chat.title}`)} // Replace with navigation logic
              >
                {chat.title} {/* This will display the chat title */}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
