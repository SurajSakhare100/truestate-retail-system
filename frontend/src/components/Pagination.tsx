import PaginationButton from "./PaginationButton";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {
  // Generate page numbers dynamically
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 border-t border-gray-200">
      {pages.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isActive={page === currentPage}
          onClick={() => setCurrentPage(page)}
        />
      ))}
    </div>
  );
};

export default Pagination;
