import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useContext } from "react"
import { UserDataContext } from "../context/userContext"
import { Routes, Route } from "react-router-dom"
import Upload from "./upload_page"
import Lawyers from "./lawyers_page"
import Assistant from "./assistant_page"
import Navbar from "../components/navbar"
import Summary from "./view_summary"
const Dashboard = () => {
    const data = useContext(UserDataContext)
    console.log(data.email)
    return (
        <div className="flex w-full">
            <SidebarProvider className="w-full">
                <AppSidebar />

                <div className="flex">
                    <div className="flex flex-col">
                        <Navbar />
                        <div className="flex-1 p-4">
                            <Routes>
                                <Route path="/" element={<Upload />} />
                                <Route path="/lawyers" element={<Lawyers />} />
                                <Route path="/assistant" element={<Assistant />} />
                                <Route path="/summary" element={<Summary/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </div>
    )
}

export default Dashboard
