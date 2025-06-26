import ReusableSelect from '../Dropdown';


const StepOne = ({ formData, handleChange,errors,type }) => {

    

  return(
  
  <div className="space-y-4 px-[5%]">
    {/* <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    /> */}
     {/* <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded"
    /> */}
      
    <div className={`flex gap-[5%] w-full `}>
    <div>
<h1>Type of Buyer</h1>
       <div className="w-1/2">
      <ReusableSelect
      hiddenLabel
  id="filled-hidden-label-small"
        label="Type of Buyer"
        name="typeOfBuyer"
        value={formData.typeOfBuyer}
        onChange={handleChange}
        options={['Individual', 'Organization']}
        className={`w-full px-3  border rounded `}
        width={550}
          error={errors.typeOfBuyer}
        
      />
    </div>
    </div>
   
    <div className='pt-1 w-full'>
      <h1 className='pb-1'>Designation</h1>
     <input
      type="text"
      name="designation"
      placeholder="Enter Designation"
      value={formData.designation}
      onChange={handleChange}
      // className="w-[550px] px-3 py-2 border rounded"
      className={`w-full px-3 py-2 border rounded ${
          errors.designation ? 'border-red-500 ' : 'border-gray-300'
        }`}
    />
  </div>
  </div>
  <div>
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
  </div>
  <div>
      <h1>Buyer Linkedin Profile</h1>
     <input
      type="text"
      name="linkedinProfile"
      placeholder="Enter Linkedin Profile"
      value={formData.linkedinProfile}
      onChange={handleChange}
      // className="w-full px-3 py-2 border rounded"
      className={`w-full px-3 py-2 border rounded ${
          errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'
        }`}
    />
  </div>
</div>
)};

export default StepOne;
