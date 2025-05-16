import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';

const ReusableRadioButton = ({ value, onChange, error }) => {
  return (
    <FormControl component="fieldset" error={Boolean(error)} sx={{ mb: 2 }}>
      <FormLabel component="legend">Open to Pre-revenue Business</FormLabel>
      <RadioGroup
        row
        name="openToPreRevenue"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
    // {value=="No" && ()}
  );
};

export default ReusableRadioButton;
