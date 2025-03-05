import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useContext } from "react"
import { UserDataContext } from "../context/userContext"
const Dashboard = () => {
    const data = useContext(UserDataContext)
    console.log(data.email)
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarTrigger />
            </SidebarProvider>
        </div>
    )
}

export default Dashboard
