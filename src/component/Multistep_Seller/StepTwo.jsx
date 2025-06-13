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
       <h1 className="text-2xl font-semibold pb-4">REVENUES</h1>
      <div className="flex gap-5 w-full ">
        <div className="w-1/2">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            name="lastFinancialYear"
            value={formData.lastFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.lastFinancialYear}
          />
        </div>
        <div className="w-1/2">
          <h1> Previous Financial Year(Rs)*</h1>
          <TextField
            name="prevFinancialYear"
            value={formData.prevFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prevFinancialYear}
          />
        </div>
      </div>
      <div className="flex gap-5 w-full ">
        <div className="w-1/2">
          <h1> Pre-previous Financial Year(Rs) </h1>
          <TextField
            name="prePrevFinancialYear"
            value={formData.prePrevFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prePrevFinancialYear}
          />
        </div>
        <div className="w-1/2">
          <h1>Trailing 12 months(Rs)</h1>
          <TextField
            name="trail12months"
            value={formData.trail12months}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.trail12months}
          />
        </div>
      </div>

      <div className="flex justify-between w-full ">
        <div className="w-[350px]">
          <h1>Last month(Rs)</h1>
          <TextField
            name="lastmonth"
            value={formData.lastmonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.lastmonth}
          />
        </div>
        <div className="w-[350px]">
          <h1>Previous month(Rs)</h1>
          <TextField
            name="prevMonth"
            value={formData.prevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prevMonth}
          />
        </div>
        <div className="w-[350px]">
          <h1>Pre-previous month(Rs)</h1>
          <TextField
            name="prePrevMonth"
            value={formData.prePrevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.prePrevMonth}
          />
        </div>
      </div>

      <div>{/* <h1>Open to Pre-revenue Business</h1> */}</div>
    </div>

    {/**Profits */}
    <div className="rounded-md py-[5%]">
      <h1 className="text-2xl font-semibold ">PROFITS(PAT)</h1>
      <div className="flex gap-5 w-full py-4 ">
        <div className="w-1/2">
          <h1> Last Financial year(Rs) </h1>
          <TextField
            name="PATlastFinancialYear"
            value={formData.PATlastFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATlastFinancialYear}
          />
        </div>
        <div className="w-1/2">
          <h1> Previous Financial Year(Rs)*</h1>
          <TextField
            name="PATprevFinancialYear"
            value={formData.PATprevFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATprevFinancialYear}
          />
        </div>
      </div>
      <div className="flex gap-5 w-full py-4">
        <div className="w-1/2">
          <h1> Pre-previous Financial Year(Rs) </h1>
          <TextField
            name="PATprePrevFinancialYear"
            value={formData.PATprePrevFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATprePrevFinancialYear}
          />
        </div>
        <div className="w-1/2">
          <h1>Trailing 12 months(Rs)</h1>
          <TextField
            name="PATtrailing12months"
            value={formData.PATtrailing12months}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATtrailing12months}
          />
        </div>
      </div>
      <div className="flex gap-5 w-full py-4">
        <div className="w-1/2">
          <h1>Last month(Rs)</h1>
          <TextField
            name="PATlastmonth"
            value={formData.PATlastmonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATlastmonth}
          />
        </div>
        <div className="w-1/2">
          <h1>Previous month(Rs)</h1>
          <TextField
            name="PATprevMonth"
            value={formData.PATprevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATprevMonth}
          />
        </div>
      </div>
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <h1>Pre-previous month(Rs)</h1>
          <TextField
            name="PATprePrevMonth"
            value={formData.PATprePrevMonth}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.PATprePrevMonth}
          />
        </div>
        <div className="w-1/2">
          <h1>EBITDA Margin (current) %</h1>
          <TextField
            name="EBITDA"
            value={formData.EBITDA}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.EBITDA}
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
            name="OCFlastFinancialYear"
            value={formData.OCFlastFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.OCFlastFinancialYear}
          />
        </div>
        <div className="w-1/2">
          <h1> Previous Financial Year(Rs)*</h1>
          <TextField
            name="OCFprevFinancialYear"
            value={formData.OCFprevFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.OCFprevFinancialYear}
          />
        </div>
      </div>
      <div className="flex w-full pr-5">
        <div className="w-1/2">
          <h1> Pre-previous Financial Year(Rs) </h1>
          <TextField
            name="OCFprePrevFinancialYear"
            value={formData.OCFprePrevFinancialYear}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.OCFprePrevFinancialYear}
          />
        </div>
      </div>
      {/**ASSETS */}
      <div>
        <h1 className="text-2xl font-semibold pt-[5%]">ASSESTS</h1>
        <div className="pt-4">
          <h1>Description of Key Assest/IP</h1>
          <TextField
            name="assestDesc"
            value={formData.assestDesc}
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            size="small"
            slotProps={{ inputLabel: { shrink: false } }}
            className="!w-full"
            error={errors.assestDesc}
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
              name="equity"
              value={formData.equity}
              onChange={handleChange}
              id="outlined-basic"
              variant="outlined"
              size="small"
              slotProps={{ inputLabel: { shrink: false } }}
              className="!w-full"
              error={errors.equity}
            />
          </div>
          <div className="w-1/2">
            <h1> Debt(Rs)*</h1>
            <TextField
              name="debt"
              value={formData.debt}
              onChange={handleChange}
              id="outlined-basic"
              variant="outlined"
              size="small"
              slotProps={{ inputLabel: { shrink: false } }}
              className="!w-full"
              error={errors.debt}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StepTwo;
