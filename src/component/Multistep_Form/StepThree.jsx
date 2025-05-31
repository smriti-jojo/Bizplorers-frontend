import ReusableSelect from '../Dropdown';


const StepThree = ({ formData, handleChange,errors }) => {

    

  return(
  
  <div className="space-y-2">
      <h1 className='text-lg font-semibold'>Preferred Value multiple</h1>
    <div className="flex gap-[5%] w-full">
      
    <div className="w-[550px]">
      <h1>Metrics</h1>
      <ReusableSelect
      
        label="metric"
        name="metric"
        value={formData.metric}
        onChange={handleChange}
        options={['sales', 'profit']}
        className={`w-full px-3 py-2 border rounded `}
        width={550}
          error={errors.metric}
        
      />
    </div>
    <div>
      <h1>Enter Max Multiple</h1>
     <input
     label=''
      type="text"
      name="maxMultiple"
      placeholder=""
      value={formData.maxMultiple}
      onChange={handleChange}
      // className="w-[550px] px-3 py-2 border rounded"
      className={`w-[550px] px-3 py-2 my-2 border rounded ${
          errors.maxMultiple ? 'border-red-500 ' : 'border-gray-300'
        }`}
    />
  </div>
  </div>
  

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
