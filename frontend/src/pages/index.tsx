import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home(){

  return (
  <div>
   <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
  )
}