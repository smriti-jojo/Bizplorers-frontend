
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import ReusableSelect from "../Dropdown";


const countryStateCityMap = {
  India: {
    Delhi: ["New Delhi", "Dwarka", "Rohini"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  },
  USA: {
    NewYork: ["New York City", "Buffalo", "Rochester"],
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Illinois: ["Chicago", "Springfield", "Naperville"],
  },
  Germany: {
    Berlin: ["Mitte", "Kreuzberg", "Prenzlauer Berg"],
    Bavaria: ["Munich", "Nuremberg", "Augsburg"],
    Hesse: ["Frankfurt", "Wiesbaden", "Kassel"],
  },
};

const StepOne = ({ formData, handleChange, errors ,type}) => {
  const [cofounderLinks, setCofounderLinks] = useState([""]);

  useEffect(() => {
    // Push to parent if needed
    handleChange({ target: { name: "cofounderLinks", value: cofounderLinks } });
  }, [cofounderLinks]);
  return (
    <div className="space-y-4 px-[5%]">
      <div className="py-2">
        <h1>Company Name</h1>
        <TextField
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          variant="outlined"
          size="small"
          className="!w-full"
          error={!!errors.company_name}
          helperText={errors.company_name}
        />
      </div>

      <div className="flex gap-5 w-full pb-2">
        {/* <div className="w-1/2">
          <h1>Entity Structure</h1>
          <ReusableSelect
          
            label="Entity Structure"
            name="entityStructure"
            value={formData.entityStructure}
            onChange={handleChange}
            options={["PartnerShip", "LLP", "Private Ltd", "Public Ltd"]}
            className={`!w-full py-2 border rounded`}
            error={errors.entityStructure}
            width={"100%"}
          />
        </div> */}
        <div className="w-1/2">
         <FormControl className={`${type==='modal'?'w-[550px]':'w-full'}`} error={!!errors.entityStructure} size="small">
         <InputLabel>Entity Structure</InputLabel>
          <Select
            labelId="entityStructure"
            label="Select Month"
            name="entityStructure"
            value={formData.entityStructure}
            onChange={handleChange}
         >
           {["PartnerShip", "LLP", "Private Ltd", "Public Ltd"].map((entity,index) => (
              <MenuItem key={index} value={entity}>
                {entity}
              </MenuItem>
            ))}
          </Select>
           
          {errors.entityStructure && <FormHelperText>{errors.entityStructure}</FormHelperText>}
        </FormControl>
    </div>
    <div className="w-1/2">
         <FormControl className={`${type==='modal'?'w-[550px]':'w-full'}`} error={!!errors.businessCategory} size="small">
         <InputLabel>Business Category</InputLabel>
          <Select
            labelId="businessCategory"
            label="Select businessCategory"
            name="businessCategory"
            value={formData.businessCategory}
            onChange={handleChange}
            
         >
            {[
              "E-commerce",
              "Offline Retail",
              "Fintech",
              "Edtech",
              "Saas",
              "Education & training",
              "Restaurant/café",
              "Mobile App",
            ].map((entity,index) => (
              <MenuItem key={index} value={entity}>
                {entity}
              </MenuItem>
            ))}
          </Select>
          {errors.businessCategory && <FormHelperText>{errors.businessCategory}</FormHelperText>}
        </FormControl>
        </div>
      </div>

      <div className="flex gap-5 w-full pb-2">
        <div className="w-1/2">
          <h1>Website Url</h1>
          <TextField
            name="website_url"
            value={formData.website_url}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="!w-full"
            error={errors.website_url}
          />
        </div>
        <div className="w-1/2">
          <h1>CIN</h1>
          <TextField
            name="CIN"
            value={formData.CIN}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="!w-full"
            error={!!errors.CIN}
            helperText={errors.CIN}
          />
        </div>
      </div>

      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <h1>Company Linkedin Page</h1>
          <TextField
            name="company_linkedin"
            value={formData.company_linkedin}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="!w-full"
            error={!!errors.company_linkedin}
            helperText={errors.company_linkedin}
          />
        </div>
     

<div className="w-1/2">
  <h1>Co-founders LinkedIn Profiles</h1>
  {cofounderLinks.map((link, index) => (
    <div key={index} className="flex space-x-2 mb-2">
      <TextField
        type="url"
        name={`cofounderLinks${index}`}
        value={link}
        onChange={(e) => {
          const updated = [...cofounderLinks];
          updated[index] = e.target.value;
          setCofounderLinks(updated);

          // Update parent form data
          handleChange({
            target: {
              name: "cofounderLinks",
              value: updated,
            },
          });
        }}
        placeholder="Enter LinkedIn URL"
        variant="outlined"
        size="small"
        className="!w-full"
        error={!!errors.cofounderLinks}
        helperText={index === 0 ? errors.cofounderLinks : ""}
      />

      {index === cofounderLinks.length - 1 ? (
        <button
          type="button"
          onClick={() => setCofounderLinks([...cofounderLinks, ""])}
          className="px-3 py-2 h-[40px] bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            const filtered = cofounderLinks.filter((_, i) => i !== index);
            setCofounderLinks(filtered);

            // Also update the formData
            handleChange({
              target: {
                name: "cofounderLinks",
                value: filtered,
              },
             
            });
          }}
          className="px-2 py-2 h-[40px] text-white rounded hover:bg-red-600"
        >
          ❌
        </button>
      )}
    </div>
  ))}
</div>

      </div>

      <div className="pb-2">
        <h1>Description about business</h1>
        <TextField
          name="description_business"
          value={formData.description_business}
          onChange={handleChange}
          multiline
          rows={3}
          variant="outlined"
          size="small"
          className="!w-full"
          error={!!errors.description_business}
          helperText={errors.description_business}
        />
      </div>

      <div className="flex justify-between w-full gap-4">
      
        <FormControl className="w-[350px]" error={!!errors.country} size="small">
          <InputLabel id="country-label">Select Country</InputLabel>
          <Select
            labelId="country-label"
            label="Select Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            {Object.keys(countryStateCityMap).map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          {errors.country && <FormHelperText>{errors.country}</FormHelperText>}
        </FormControl>

        
        <FormControl className="w-[350px]" error={!!errors.state} size="small">
          <InputLabel id="state-label">Select State</InputLabel>
          <Select
            labelId="state-label"
            label="Select State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled={!formData.country}
          >
            {formData.country &&
              Object.keys(countryStateCityMap[formData.country] || {}).map(
                (state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                )
              )}
          </Select>
          {errors.state && <FormHelperText>{errors.state}</FormHelperText>}
        </FormControl>

    
        <FormControl className="w-[350px]" error={!!errors.city} size="small">
          <InputLabel id="city-label">Select City</InputLabel>
          <Select
            labelId="city-label"
            label="Select City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.state}
          >
            {formData.country &&
              formData.state &&
              (countryStateCityMap[formData.country][formData.state] || []).map(
                (city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                )
              )}
          </Select>
          {errors.city && <FormHelperText>{errors.city}</FormHelperText>}
        </FormControl>
      </div>

       {/* <div className="flex justify-between w-full ">
    <div>
   <h1>Country</h1>
 <ReusableSelect
   label="Select Country"
 name="country"
 value={formData.country}
onChange={handleChange}
options={Object.keys(countryStateCityMap)}
className={`w-full py-2 border rounded `}
 error={errors.country}
 width={350}
 />
 </div>
 <div>
  <h1>State</h1>
   <ReusableSelect
 label="Select State"
name="state"
value={formData.state}
onChange={handleChange}
options={countryStateCityMap[formData.country] || []}
className={`w-full py-2 border rounded `}
error={errors.state}
width={350}
            
    /></div>
<div>
 <h1>City</h1>
 <ReusableSelect
 label="Select City"
name="city"
value={formData.city}
onChange={handleChange}
options={countryStateCityMap[formData.country][formData.state] || []}
className={`w-full py-2 border rounded `}
  error={errors.city}
width={350}
 />
 </div>
  </div> */}


       <div className="flex justify-between w-full gap-4 py-2">
        <div className="w-[350px]">
          <h1>Number of co-founders</h1>
          <TextField
            name="numcofounder"
            value={formData.numcofounder}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="!w-full"
            error={!!errors.numcofounder}
            helperText={errors.numcofounder}
          />
        </div>
        <div className="w-[350px]">
          <h1>Team Size</h1>
          <TextField
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="!w-full"
            error={!!errors.teamSize}
            helperText={errors.teamSize}
          />
        </div>
        <div className="w-[350px]">
          <h1>Number of Locations</h1>
          <TextField
            name="numLocation"
            value={formData.numLocation}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className="!w-full"
            error={!!errors.numLocation}
            helperText={errors.numLocation}
          />
        </div>
      </div> 
   

        <div className="w-full">
          <h1>Commencement of business </h1>
          <div className="flex gap-5">
            {/* <div>
              <ReusableSelect
                label="Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                options={["2025", "2024", "2023", "2022", "2021", "2020"]}
                className={`w-full py-2 border rounded`}
                error={errors.year}
                width={150}
              />
            </div> */}
              {/* <FormControl className="w-[350px]" error={!!errors.year} size="small">
         
          <Select
            labelId="year"
            label="Select Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
         >
             {["2025", "2024", "2023", "2022", "2021", "2020"].map((year,index) => (
              <MenuItem key={index} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
          {errors.year && <FormHelperText>{errors.year}</FormHelperText>}
        </FormControl>
           
               <FormControl className="w-[350px]" error={!!errors.month} size="small">
         
          <Select
            labelId="month"
            label="Select Month"
            name="month"
            value={formData.month}
            onChange={handleChange}
         >
           {[
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",               
                  "12",
                ].map((month,index) => (
              <MenuItem key={index} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
          {errors.month && <FormHelperText>{errors.month}</FormHelperText>}
        </FormControl> */}
        <div className="w-1/2">
        <FormControl className="w-full" error={!!errors.year} size="small">
  <InputLabel id="year-label">Select Year</InputLabel>
  <Select
    labelId="year-label"
    id="year"
    label="Select Year"
    name="year"
    value={formData.year}
    onChange={handleChange}
  >
    {["2025", "2024", "2023", "2022", "2021", "2020"].map((year, index) => (
      <MenuItem key={index} value={year}>
        {year}
      </MenuItem>
    ))}
  </Select>
  {errors.year && <FormHelperText>{errors.year}</FormHelperText>}
</FormControl>
</div>

<div className="w-1/2">
<FormControl className="w-full" error={!!errors.month} size="small">
  <InputLabel id="month-label">Select Month</InputLabel>
  <Select
    labelId="month-label"
    id="month"
    label="Select Month"
    name="month"
    value={formData.month}
    onChange={handleChange}
  >
    {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map(
      (month, index) => (
        <MenuItem key={index} value={month}>
          {month}
        </MenuItem>
      )
    )}
  </Select>
  {errors.month && <FormHelperText>{errors.month}</FormHelperText>}
</FormControl>
</div>

          </div>
        </div>
      </div>
    
  );
};

export default StepOne;
