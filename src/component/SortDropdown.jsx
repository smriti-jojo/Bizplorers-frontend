import React from "react";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <select
      className="border p-2 rounded"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="Newest">Date listed: Newest</option>
      <option value="Oldest">Date listed: Oldest</option>
    </select>
  );
};

export default SortDropdown;
