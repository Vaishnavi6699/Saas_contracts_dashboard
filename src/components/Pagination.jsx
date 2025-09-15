import React from "react";

export default function Pagination({ page, setPage, pageCount }) {
  if (pageCount <= 1) return null;
  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-1 border rounded" onClick={() => setPage(p => Math.max(1, p-1))}>Prev</button>
      <span>Page {page} of {pageCount}</span>
      <button className="px-3 py-1 border rounded" onClick={() => setPage(p => Math.min(pageCount, p+1))}>Next</button>
    </div>
  );
}
