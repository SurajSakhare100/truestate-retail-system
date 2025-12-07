import PaginationButton from "./PaginationButton";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const getPaginationRange = (current: number, total: number) => {
  const delta = 1;
  const pages: (number | string)[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  pages.push(1);

  if (left > 2) pages.push("…");

  for (let i = left; i <= right; i++) pages.push(i);

  if (right < total - 1) pages.push("…");

  if (total > 1) pages.push(total);

  return pages;
};

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 px-4 py-2 border-t border-gray-200">
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={i} className="px-2 text-gray-500">…</span>
        ) : (
          <PaginationButton
            key={p}
            page={p}
            isActive={p === currentPage}
            onClick={() => setCurrentPage(p as number)}
          />
        )
      )}
    </div>
  );
};

export default Pagination;
