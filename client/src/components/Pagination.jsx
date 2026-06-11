export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 4) {
      return Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3);

      if (totalPages > 4) {
        pages.push("...");
        pages.push(totalPages);
      }
    } else if (currentPage >= totalPages - 2) {
      pages.push(1);
      pages.push("...");

      for (
        let i = totalPages - 2;
        i <= totalPages;
        i++
      ) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push("...");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      pages.push(totalPages);
    }

    // pages.map((page)=>console.log("page - "+page))
    return pages;
  };

  const pages = getPages();
  // console.log(typeof currentPage, currentPage)

  return (
    <div className="flex fixed bottom-2 right-8 items-center justify-between mt-8">
      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev) => prev - 1)
          }
          className={`px-4 py-2 rounded-xl border transition-all ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="px-2 text-gray-500"
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`h-10 w-10 rounded-xl font-medium transition-all ${
                currentPage === page
                  ? "bg-gray-900 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => prev + 1)
          }
          className={`px-4 py-2 rounded-xl border transition-all ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}