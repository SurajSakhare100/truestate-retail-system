import { ChevronDown } from "lucide-react";

const SidebarHeader = () => {
  return (
    <div className="p-2 rounded-lg bg-white border border-gray-300 mb-4">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          className="w-10 h-10 rounded-md"
          alt="logo"
        />

        <div className="leading-tight">
          <div className="text-base font-semibold text-gray-900">Vault</div>
          <div className="text-sm text-gray-500">Anurag Yadav</div>
        </div>

        <ChevronDown className="w-4 h-4 text-gray-500 ml-auto" />
      </div>
    </div>
  );
};

export default SidebarHeader;
