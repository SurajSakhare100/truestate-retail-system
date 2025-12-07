import { RefreshCw } from "lucide-react";

interface RefreshButtonProps {
  onClick?: () => void;
}

const RefreshButton = ({ onClick }: RefreshButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-gray-100 rounded"
      title="Reset Filters"
    >
      <RefreshCw className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default RefreshButton;
