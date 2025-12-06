export default function Pagination({ page, setPage, total }:any) {
  const pages = Math.ceil(total / 10);

  return (
    <div className="flex gap-2 mt-4">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 rounded border ${
            page === i + 1 ? "bg-black text-white" : "bg-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
