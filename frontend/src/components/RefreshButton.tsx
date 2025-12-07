import { RefreshCw } from "lucide-react";

interface RefreshButtonProps {
  onClick?: () => void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-[#F3F3F3] hover:bg-[#E0E0E0] rounded"
      title="Reset Filters"
    >
      <RefreshCw className="w-4 h-4 text-[#3A3A47]" />
    </button>
  );
};

export default RefreshButton;
