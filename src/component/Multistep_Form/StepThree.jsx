import ReusableSelect from '../Dropdown';


const StepThree = ({ formData, handleChange,errors }) => {

    

  return(
  
  <div className="space-y-4">
      <h1>Preferred Value multiple</h1>
    <div className="flex gap-[5%] w-full">
      
    <div className="w-[550px]">
      <ReusableSelect
      
        label="metric"
        name="metric"
        value={formData.metric}
        onChange={handleChange}
        options={['Sales', 'Profit']}
        className={`w-full px-3 py-2 border rounded `}
        width={550}
          error={errors.metric}
        
      />
    </div>
    <div>
      {/* <h1>Preferred Value multiple</h1> */}
     <input
     label='Max Multiple'
      type="text"
      name="maxMultiple"
      placeholder="Enter Max Multiple"
      value={formData.maxMultiple}
      onChange={handleChange}
      // className="w-[550px] px-3 py-2 border rounded"
      className={`w-[550px] px-3 py-2 border rounded ${
          errors.maxMultiple ? 'border-red-500 ' : 'border-gray-300'
        }`}
    />
  </div>
  </div>
  {/* <div>
    <h1>Description of Individual/Organization</h1>
    <textarea
    type="textbox"
    name="description"
    rows={4}
      placeholder="Enter Description"
      value={formData.description}
      onChange={handleChange}
       className={`w-full px-3 py-2 border rounded ${
          errors.description ? 'border-red-500' : 'border-gray-300'
        }`}
      />
  </div> */}
  {/* <div>
      <h1>Buyer Linkedin Profile</h1>
     <input
      type="text"
      name="linkedIn"
      placeholder="Enter Linkedin Profile"
      value={formData.linkedIn}
      onChange={handleChange}
      // className="w-full px-3 py-2 border rounded"
      className={`w-full px-3 py-2 border rounded ${
          errors.linkedIn ? 'border-red-500' : 'border-gray-300'
        }`}
    />
  </div> */}
  <h1>Preferred Arrangement</h1>
  <div className="w-[550px]">
      <ReusableSelect
      multiple
        label="Preferred Arrangement"
        name="preferredArrangement"
        value={formData.preferredArrangement}
        onChange={handleChange}
        options={["Cash", "Stock", "Royalty","Acquihire"]}
        className={`w-full px-3 py-2 border rounded `}
        width={550}
          error={errors.preferredArrangement}
        
      />
    </div>
</div>
)};

export default StepThree;
