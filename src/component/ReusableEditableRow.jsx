import React, { useState, useEffect } from "react";
import { Button, MenuItem, Select, Checkbox, ListItemText } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


// const EditableRow = ({ label, value, editable, onChange, type = "text", options = [], multiple = false }) => {
//   const renderView = () => <p>{Array.isArray(value) ? value.join(", ") : value || "—"}</p>;

//   const renderEdit = () => {
//     if (options.length > 0) {
//       return multiple ? (
//         <Select
//           multiple
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           renderValue={(selected) => selected.join(", ")}
//           className="min-w-[200px] h-10"
//         >
//           {options.map((opt) => (
//             <MenuItem key={opt} value={opt}>
//               <Checkbox checked={value.includes(opt)} />
//               <ListItemText primary={opt} />
//             </MenuItem>
//           ))}
//         </Select>
//       ) : (
//         <Select value={value} onChange={(e) => onChange(e.target.value)} className="min-w-[200px] h-10">
//           {options.map((opt) => (
//             <MenuItem key={opt} value={opt}>
//               {opt}
//             </MenuItem>
//           ))}
//         </Select>
//       );
//     }

//     if (type === "textarea") {
//       return (
//         <textarea
//           className="border rounded px-2 py-1 w-full md:w-[60%]"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       );
//     }

//     return (
//       <input
//         className="border rounded px-2 py-1"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     );
//   };

//   return (
//     <div className="flex gap-5 items-start flex-wrap my-2">
//       <h1 className="font-semibold flex items-center">
//         <CheckBoxIcon className="!text-green-600 mr-1" />
//         {label}:
//       </h1>
//       {editable ? renderEdit() : renderView()}
//     </div>
//   );
// };





// const EditableRow = ({
//   label,
//   value,
//   editable,
//   onChange,
//   textarea,
//   dropdownOptions,
//   multiple = false, // Optional prop to indicate if dropdown is multi-select
// }) => {
//   const isDropdown = !!dropdownOptions;
//   const isMultiSelect = multiple;

//   return (
//     <div className="flex gap-5 items-start flex-wrap my-2">
//       <h1 className="font-semibold flex items-center">
//         <CheckBoxIcon className="!text-green-600 mr-1" />
//         <span>{label}:</span>
//       </h1>

//       {editable ? (
//         isDropdown ? (
//           <select
//             multiple={isMultiSelect}
//             className="border rounded px-2 py-1 w-full md:w-1/2"
//             value={
//               isMultiSelect
//                 ? Array.isArray(value)
//                   ? value.map((v) => (typeof v === "object" ? v.id : v))
//                   : []
//                 : typeof value === "object"
//                 ? value?.id || ""
//                 : value || ""
//             }
//             onChange={(e) => {
//               if (isMultiSelect) {
//                 const selected = Array.from(e.target.selectedOptions).map((opt) => {
//                   const matched = dropdownOptions.find((o) => o.id?.toString() === opt.value);
//                   return matched || opt.value;
//                 });
//                 onChange(selected);
//               } else {
//                 const selectedId = e.target.value;
//                 const selectedOption = dropdownOptions.find(
//                   (opt) => opt.id?.toString() === selectedId
//                 );
//                 onChange(selectedOption || selectedId);
//               }
//             }}
//           >
//             <option value="">Select</option>
//             {dropdownOptions.map((opt) => {
//               const val = typeof opt === "object" ? opt.id : opt;
//               const label = typeof opt === "object" ? opt.label : opt;
//               return (
//                 <option key={val} value={val}>
//                   {label}
//                 </option>
//               );
//             })}
//           </select>
//         ) : textarea ? (
//           <textarea
//             className="border rounded px-2 py-1 w-full md:w-[60%]"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//         ) : (
//           <input
//             className="border rounded px-2 py-1"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//         )
//       ) : (
//         <p>
//           {Array.isArray(value)
//             ? value.map((v) => (typeof v === "object" ? v.label : v)).join(", ")
//             : typeof value === "object"
//             ? value?.label || "—"
//             : value || "—"}
//         </p>
//       )}
//     </div>
//   );
// };
// const EditableRow = ({
//   label,
//   value,
//   editable,
//   onChange,
//   type = "text",
//   options = [],
//   multiple = false,
// }) => {
//   /* ---------- helpers ---------- */
//   const getId   = (opt) => (typeof opt === "string" ? opt : opt.id);
//   const getText = (opt) => (typeof opt === "string" ? opt : opt.label ?? opt.value);

//   /* ---------- VIEW mode ---------- */
//   const renderView = () => {
//     if (Array.isArray(value)) return <p>{value.map(getText).join(", ") || "—"}</p>;
//     if (typeof value === "object") return <p>{getText(value) || "—"}</p>;
//     return <p>{value || "—"}</p>;
//   };

//   /* ---------- EDIT mode ---------- */
//   const renderEdit = () => {
//     /* textarea or free‑text ---------------------------------- */
//     if (options.length === 0) {
//       if (type === "textarea") {
//         return (
//           <textarea
//             className="border rounded px-2 py-1 w-full md:w-[60%]"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           />
//         );
//       }
//       return (
//         <input
//           className="border rounded px-2 py-1"
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//         />
//       );
//     }

//     /* dropdown (single / multi) ------------------------------ */
//     if (multiple) {
//       const selectedIds = (value || []).map(getId);
//       return (
//         <Select
//           multiple
//           value={selectedIds}
//           onChange={(e) => {
//             const newVals = options.filter((o) =>
//               e.target.value.includes(getId(o))
//             );
//             onChange(newVals);
//           }}
//           renderValue={(selected) =>
//             selected
//               .map((id) => getText(options.find((o) => getId(o) === id)))
//               .join(", ")
//           }
//           className="min-w-[200px] h-10"
//         >
//           {options.map((opt) => {
//             const id = getId(opt);
//             return (
//               <MenuItem key={id} value={id}>
//                 <Checkbox checked={selectedIds.includes(id)} />
//                 <ListItemText primary={getText(opt)} />
//               </MenuItem>
//             );
//           })}
//         </Select>
//       );
//     }

//     /* single‑select ------------------------------------------ */
//     const currentId = value ? getId(value) : "";
//     return (
//       <Select
//         value={currentId}
//         onChange={(e) => {
//           const selected = options.find((o) => getId(o) === e.target.value);
//           onChange(selected);
//         }}
//         className="min-w-[200px] h-10"
//       >
//         {options.map((opt) => {
//           const id = getId(opt);
//           return (
//             <MenuItem key={id} value={id}>
//               {getText(opt)}
//             </MenuItem>
//           );
//         })}
//       </Select>
//     );
//   };

//   /* ---------- JSX row wrapper ---------- */
//   return (
//     <div className="flex gap-5 items-start flex-wrap my-2">
//       <h1 className="font-semibold flex items-center">
//         <CheckBoxIcon className="!text-green-600 mr-1" />
//         {label}:
//       </h1>
//       {editable ? renderEdit() : renderView()}
//     </div>
//   );
// };


const EditableRow = ({
  label,
  value,
  editable,
  onChange,
  type = "text",
  options = [],
  multiple = false,
}) => {
  const getId = (opt) => (typeof opt === "string" ? opt : opt?.id?.toString?.() || "");
  const getText = (opt) =>
    typeof opt === "string" ? opt : opt?.label ?? opt?.name ?? opt?.value ?? "";

  const renderView = () => {
    if (Array.isArray(value)) {
      return <p>{value.map(getText)?.join(", ") || "—"}</p>;
    }
    if (typeof value === "object") {
      return <p>{getText(value) || "—"}</p>;
    }
    return <p>{value || "—"}</p>;
  };

  const renderEdit = () => {
    // Free input or textarea
    if (options.length === 0) {
      if (type === "textarea") {
        return (
          <textarea
            className="border rounded px-2 py-1 w-full md:w-[60%]"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      }
      return (
        <input
          className="border rounded px-2 py-1"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    }

    // Multi-select
    if (multiple) {
      const selectedIds = Array.isArray(value)
        ? value.map((v) => getId(v).toString())
        : [];

      return (
        <Select
          multiple
          value={selectedIds}
          onChange={(e) => {
            const selected = options.filter((o) =>
              e.target.value.includes(getId(o).toString())
            );
            onChange(selected);
          }}
          renderValue={(selected) =>
            selected
              .map((id) => {
                const match = options.find((o) => getId(o) === id);
                return getText(match);
              })
             ?.join(", ")
          }
          className="min-w-[200px] h-10"
        >
          {options.map((opt) => {
            const id = getId(opt).toString();
            return (
              <MenuItem key={id} value={id}>
                <Checkbox checked={selectedIds.includes(id)} />
                <ListItemText primary={getText(opt)} />
              </MenuItem>
            );
          })}
        </Select>
      );
    }

    // Single-select
    const currentId = value ? getId(value).toString() : "";

    return (
      <Select
        value={currentId}
        onChange={(e) => {
          const selected = options.find((o) => getId(o).toString() === e.target.value);
          onChange(selected || e.target.value);
        }}
        className="min-w-[200px] h-10"
      >
        {options.map((opt) => {
          const id = getId(opt).toString();
          return (
            <MenuItem key={id} value={id}>
              {getText(opt)}
            </MenuItem>
          );
        })}
      </Select>
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