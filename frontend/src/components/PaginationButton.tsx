const PaginationButton = ({ page, isActive, onClick }:any) => {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 rounded ${
        isActive 
          ? 'bg-gray-900 text-white' 
          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
      }`}
    >
      {page}
    </button>
  );
};

export default PaginationButton;