
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// function getStyles(name, selectedItems, theme) {
//   return {
//     fontWeight: selectedItems.includes(name)
//       ? theme.typography.fontWeightMedium
//       : theme.typography.fontWeightRegular,
//   };
// }

// export default function ReusableSelect({
//   label,
//    name,
//   options,
//   multiple = false,
//   value,
//   onChange,
//   width,
//   error = false,
// }) {
//   const theme = useTheme();

//   return (
//     <FormControl sx={{ my:1, width }} error={error}>
//        {/* <InputLabel id={`${label}-label`}>{label}</InputLabel> */}
//       {/* <Select
//         labelId={`${label}-label`}
//         id={`${label}-select`}
//         name={name}
//         multiple={multiple}
//         value={value}
//         onChange={onChange}
//         input={multiple ? <OutlinedInput label={label} /> : undefined}
//         MenuProps={MenuProps}
//         label={label}
//         renderValue={
//           multiple
//             ? (selected) => (
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
//                   {selected.map((val) => (
//                     <span
//                       key={val}
//                       style={{
//                         padding: '2px 8px',
//                         backgroundColor: '#1976d2',
//                         color: '#fff',
//                         borderRadius: 4,
//                         fontSize: 12,
//                       }}
//                     >
//                       {val}
//                     </span>
//                   ))}
//                 </div>
//               )
//             : undefined
//         }
//       >
//         {!multiple && <MenuItem value="" disabled><em>Select {label}</em></MenuItem>}
     
//         {options.map((option) => (
//           <MenuItem
//             key={option}
//             value={option}
//             style={multiple ? getStyles(option, value, theme) : undefined}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Select> */}
//       <Select
// //  displayEmpty
// //      inputProps={{ 'aria-label': 'Without label' }}
// variant='outlined'
//       size='small'
//   labelId={`${label}-label`}
//   id={`${label}-select`}
//   name={name}
//   multiple={multiple}
//   value={value}
//   onChange={onChange}
//   input={multiple ? <OutlinedInput /> : undefined}
//   MenuProps={MenuProps}
//   label=''
//   renderValue={
//     multiple
//       ? (selected) => (
//         //  {(selected.length === 0)? <em>Placeholder</em>;
            
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
//             {selected.map((val) => (
//               <span
//                 key={val}
//                 style={{
//                   padding: '2px 8px',
//                   backgroundColor: '#1976d2',
//                   color: '#fff',
//                   borderRadius: 4,
//                   fontSize: 12,
//                 }}
//               >
//                 {val}
//               </span>
//             ))}
//           </div>
//         )
//       : undefined
//   }
// >
//   {!multiple && (
//     <MenuItem value="" disabled>
//       <em>Select {label}</em>
//     </MenuItem>
//   )}
//   {options.map((option) => (
//     <MenuItem
//       key={option}
//       value={option}
//       style={multiple ? getStyles(option, value, theme) : undefined}
//     >
//       {option}
//     </MenuItem>
//   ))}
// </Select>

//     </FormControl>
//   );
// }

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// // --- helpers -------------------------------------------------------------
// const isObjectOption = (opt) =>
//   typeof opt === "object" && opt !== null && "value" in opt;

// const optionValue = (opt) => (isObjectOption(opt) ? opt.value : opt);
// const optionLabel = (opt) => (isObjectOption(opt) ? opt.label : opt);

// const getStyles = (val, selected, theme) => ({
//   fontWeight: selected.includes(val)
//     ? theme.typography.fontWeightMedium
//     : theme.typography.fontWeightRegular,
// });
// // ------------------------------------------------------------------------

// export default function ReusableSelect({
//   label,
//   name,
//   options,
//   multiple = false,
//   value,
//   onChange,
//   width,
//   error = false,
// }) {
//   const theme = useTheme();

//   return (
//     <FormControl sx={{ my: 1, width }} error={error}>
//       <Select
//         variant="outlined"
//         size="small"
//         labelId={`${label}-label`}
//         id={`${label}-select`}
//         name={name}
//         multiple={multiple}
//         value={value}
//         // onChange={onChange}
//         onChange={(e) => {
//   const selectedValue = e.target.value;
//   onChange({
//     target: {
//       name,
//       value: selectedValue,
//     },
//   });
// }}

//         input={multiple ? <OutlinedInput /> : undefined}
//         MenuProps={MenuProps}
//         renderValue={
//           multiple
//             ? (selected) => (
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
//                   {selected.map((val) => (
//                     <span
//                       key={val}
//                       style={{
//                         padding: "2px 8px",
//                         backgroundColor: "#1976d2",
//                         color: "#fff",
//                         borderRadius: 4,
//                         fontSize: 12,
//                       }}
//                     >
//                       {optionLabel(
//                         options.find((opt) => optionValue(opt) === val) ?? val
//                       )}
//                     </span>
//                   ))}
//                 </div>
//               )
//             : (selected) =>
//                 optionLabel(
//                   options.find((opt) => optionValue(opt) === selected) ??
//                     selected
//                 )
//         }
//       >
//         {!multiple && (
//           <MenuItem value="" disabled>
//             <em>Select {label}</em>
//           </MenuItem>
//         )}

//         {options.map((opt) => {
//           const val = optionValue(opt);
//           return (
//             <MenuItem
//               key={val}
//               value={val}
//               style={multiple ? getStyles(val, value, theme) : undefined}
//             >
//               {optionLabel(opt)}
//             </MenuItem>
//           );
//         })}
//       </Select>
//     </FormControl>
//   );
// }
import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Helpers
const isObjectOption = (opt) =>
  typeof opt === "object" && opt !== null && "value" in opt;

const optionValue = (opt) => (isObjectOption(opt) ? opt.value : opt);
const optionLabel = (opt) => (isObjectOption(opt) ? opt.label : opt);

const getStyles = (val, selected, theme) => ({
  fontWeight: selected.includes(val)
    ? theme.typography.fontWeightMedium
    : theme.typography.fontWeightRegular,
});

export default function ReusableSelect({
  label,
  name,
  options,
  multiple = false,
  value,
  onChange,
  width,
  error = false,
}) {
  const theme = useTheme();

  // Remove duplicates by value
  // const uniqueOptions = [
  //   ...new Map(options.map((opt) => [optionValue(opt), opt])).values(),
  // ];

  const uniqueOptions = [
  ...new Map((options || []).map((item) => [optionValue(item), item])).values(),
];

  return (
    <FormControl sx={{ my: 1, width }} error={error}>
      <Select
        variant="outlined"
        size="small"
        labelId={`${label}-label`}
        id={`${label}-select`}
        name={name}
        multiple={multiple}
        value={value}
        onChange={(e) => {
          const selectedValue = e.target.value;
          console.log("selectedValue---reusableselct----",selectedValue)
          onChange({
            target: {
              name,
              value: selectedValue,
            },
          });
        }}
        input={multiple ? <OutlinedInput /> : undefined}
        MenuProps={MenuProps}
        renderValue={
          multiple
            ? (selected) => (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {selected.map((val) => (
                    <span
                      key={val}
                      style={{
                        padding: "2px 8px",
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        borderRadius: 4,
                        fontSize: 12,
                      }}
                    >
                      {optionLabel(
                        uniqueOptions.find((opt) => optionValue(opt) === val) ??
                          val
                      )}
                    </span>
                  ))}
                </div>
              )
            : (selected) =>
                optionLabel(
                  uniqueOptions.find((opt) => optionValue(opt) === selected) ??
                    selected
                )
        }
      >
        {!multiple && (
          <MenuItem value="" disabled>
            <em>Select {label}</em>
          </MenuItem>
        )}

        {uniqueOptions.map((opt) => {
          const val = optionValue(opt);
          return (
            <MenuItem
              key={val}
              value={val}
              style={multiple ? getStyles(val, value, theme) : undefined}
            >
              {optionLabel(opt)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
