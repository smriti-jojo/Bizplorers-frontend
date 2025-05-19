import ReusableSelect from "../Dropdown";
import { TextField } from "@mui/material";
import ReusableRadioButton from "../RadioButton";

const countryCityMap = {
  India: ["Delhi", "Mumbai", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  Germany: ["Berlin", "Munich", "Frankfurt"],
};

const StepTwo = ({ formData, handleChange, errors }) => (
  <div className="space-y-4">
    <div className="rounded-md ">
      <div className="flex gap-5 w-full ">
        <div className="w-1/2">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1> Previous Financial Year(Rs)*</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      <div className="flex gap-5 w-full ">
        <div className="w-1/2">
          <h1> Pre-previous Financial Year(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1>Trailing 12 months(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>

      <div className="flex justify-between w-full ">
        <div className="w-[350px]">
          <h1>Last month(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-[350px]">
          <h1>Previous month(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-[350px]">
          <h1>Pre-previous month(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>

      <div>
        {/* <h1>Open to Pre-revenue Business</h1> */}
        {/* <div className="px-3 py-5">
  <label className="block mb-2 font-medium">Open to Pre-revenue Business</label>
  <div className="flex gap-4">
    <label>
      <input
        type="radio"
        name="openToPreRevenue"
        value="YES"
        checked={formData.openToPreRevenue === 'YES'}
        onChange={handleChange}
        className="mr-1"
      />
      YES
    </label>
    <label>
      <input
        type="radio"
        name="openToPreRevenue"
        value="NO"
        checked={formData.openToPreRevenue === 'NO'}
        onChange={handleChange}
        className="mr-2"
      />
      NO
    </label>
  </div>
</div> */}

        {/* {formData.openToPreRevenue === 'NO' && (
  <>
   <label className="block mb-2 font-medium px-3">Open to Pre-breakeven businesses</label>
   <div className="flex gap-4 px-3">
    <label>
      <input
        type="radio"
        name="openToPreBreakeven"
        value="YES"
        checked={formData.openToPreBreakeven === 'YES'}
        onChange={handleChange}
        className="mr-1"
      />
      YES
    </label>
    <label>
      <input
        type="radio"
        name="openToPreBreakeven"
        value="NO"
        checked={formData.openToPreBreakeven === 'NO'}
        onChange={handleChange}
        className="mr-1"
      />
      NO
    </label>
  </div>
   <div className="flex gap-[5%] px-3 py-5">
         <TextField id="outlined-basic" label="Revenue Size(min)*" variant="outlined" size="small" className="!w-[350px]" />
      <TextField id="outlined-basic" label="Revenue Size(min)(max)*" variant="outlined" size="small" className="!w-[350px]"/>
      </div>

  </>
)} */}
      </div>
    </div>

    {/**Profits */}
    <div className="rounded-md py-[5%]">
      <h1 className="text-2xl font-semibold ">PROFITS(PAT)</h1>
      <div className="flex gap-5 w-full py-4 ">
        <div className="w-1/2">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1> Previous Financial Year(Rs)*</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      <div className="flex gap-5 w-full py-4">
        <div className="w-1/2">
          <h1> Pre-previous Financial Year(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1>Trailing 12 months(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      <div className="flex gap-5 w-full py-4">
        <div className="w-1/2">
          <h1>Last month(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1>Previous month(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <h1>Pre-previous month(Rs)</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1>EBITDA Margin (current) %</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
    </div>

    {/**Cashflow */}
    <div className="rounded-md">
      <h1 className="text-2xl font-semibold ">OPERATING CASH FLOW</h1>
      <div className="flex gap-5 w-full py-4 ">
        <div className="w-1/2">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1> Previous Financial Year(Rs)*</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      <div className="flex w-full pr-5">
        <div className="w-1/2">
          <h1> Pre-previous Financial Year(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      {/**ASSETS */}
      <div>
        <h1 className="text-2xl font-semibold pt-[5%]">ASSESTS</h1>
        <div className="pt-4">
          <h1>Description of Key Assest/IP</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
      {/**Sources */}
       <div>
        <h1 className="text-2xl font-semibold pt-[5%]">Sources Of Funds</h1>
          
        <div className="flex gap-5 w-full py-4 ">
         
        <div className="w-1/2">
          <h1> Equity(Rs) </h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
        <div className="w-1/2">
          <h1> Debt(Rs)*</h1>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
          />
        </div>
      </div>
        </div>
      </div>
    
  </div>
);

export default StepTwo;
