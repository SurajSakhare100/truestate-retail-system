import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div className="flex-shrink-0 w-64 h-full">
        <Sidebar />
      </div>

      <div className="flex-1 h-full overflow-y-auto">
        <Dashboard />
      </div>
    </div>
  );
}
