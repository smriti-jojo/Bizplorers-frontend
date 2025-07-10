import React from 'react'

 const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
  <div className="border-t pt-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
      <h2 className="text-xl font-bold">{title}</h2>
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>
    {isOpen && <div className="mt-4">{children}</div>}
  </div>
);

export default CollapsibleSection
