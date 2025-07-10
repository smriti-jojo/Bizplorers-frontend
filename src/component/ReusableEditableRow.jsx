import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select, Checkbox, ListItemText } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


const EditableRow = ({ label, value, editable, onChange, type = "text", options = [], multiple = false }) => {
  const renderView = () => <p>{Array.isArray(value) ? value.join(", ") : value || "—"}</p>;

  const renderEdit = () => {
    if (options.length > 0) {
      return multiple ? (
        <Select
          multiple
          value={value}
          onChange={(e) => onChange(e.target.value)}
          renderValue={(selected) => selected.join(", ")}
          className="min-w-[200px] h-10"
        >
          {options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              <Checkbox checked={value.includes(opt)} />
              <ListItemText primary={opt} />
            </MenuItem>
          ))}
        </Select>
      ) : (
        <Select value={value} onChange={(e) => onChange(e.target.value)} className="min-w-[200px] h-10">
          {options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      );
    }

    if (type === "textarea") {
      return (
        <textarea
          className="border rounded px-2 py-1 w-full md:w-[60%]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    }

    return (
      <input
        className="border rounded px-2 py-1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  };

  return (
    <div className="flex gap-5 items-start flex-wrap my-2">
      <h1 className="font-semibold flex items-center">
        <CheckBoxIcon className="!text-green-600 mr-1" />
        {label}:
      </h1>
      {editable ? renderEdit() : renderView()}
    </div>
  );
};
export default EditableRow;