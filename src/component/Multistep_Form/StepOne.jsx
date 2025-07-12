import ReusableSelect from '../Dropdown';


const StepOne = ({ formData, handleChange,errors,type ,registerData,handleRegisterChange}) => {

  const picklists=localStorage.getItem("picklists");
   const parsedPicklists=JSON.parse(picklists);
   console.log("parsedPicklists-----",parsedPicklists);
   console.log("parsedPicklistsbuyerrr-----",parsedPicklists[8]);

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
   
    {/* <div className={`flex gap-[5%] w-full `}>
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
      {/* <h1 className='pb-1'>Designation</h1> */}
       {/* <h1 className='pb-1'>Profile Headline</h1>
     <input
      type="text"
      name="designation"
      placeholder="Enter Profile Headline"
      value={formData.designation}
      onChange={handleChange} */}
      {/* // className="w-[550px] px-3 py-2 border rounded"
      className={`w-full px-3 py-2 border rounded ${
          errors.designation ? 'border-red-500 ' : 'border-gray-300'
        }`}
    /> */}
  {/* </div>
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
  </div>  */}
  <>
  {type === "modal" ? (
    <>
    <div className='flex gap-3 w-full'>
      <div className='w-1/3'>
        <h1>Full Name</h1>
     <input
          name="name"
          type="text"
          placeholder="Enter Full Name"
          value={registerData.name}
          onChange={handleRegisterChange}
          // className="w-full border rounded-md p-2"
           className={`w-full border rounded-md p-2 ${
    errors.name ? 'border-red-500' : 'border-gray-300'
  }`}
          required
          
        />
        </div>
        <div className='w-1/3'>
           <h1>Email</h1>
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          value={registerData.email}
          onChange={handleRegisterChange}
          // className="w-full border rounded-md p-2"
           className={`w-full border rounded-md p-2 ${
    errors.email ? 'border-red-500' : 'border-gray-300'
  }`}
          required
           
        />
        </div>
        <div className='w-1/3'>
           <h1>Mobile Number</h1>
        <input
          name="phone"
          type="tel"
          placeholder="Enter Mobile Number"
          value={registerData.phone}
          onChange={handleRegisterChange}
          // className="w-full border rounded-md p-2"
           className={`w-full border rounded-md p-2 ${
    errors.phone ? 'border-red-500' : 'border-gray-300'
  }`}
          required
         
        />
        </div>
        </div>
       
      <div className="flex gap-[5%] w-full">
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
              // options={['Individual', 'Organization']}
            options={parsedPicklists[8]?.values?.map((item) => ({
  id: item.id,
  label: item.value
}))}
              className="w-full px-3 border rounded"
              width={550}
              error={errors.typeOfBuyer}
            />
          </div>
        </div>

        <div className="pt-1 w-full">
          <h1 className="pb-1">Profile Headline</h1>
          <input
            type="text"
            name="designation"
            placeholder="Enter Profile Headline"
            value={formData.designation}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.designation ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
      </div>

      <div>
        <h1>Description of Individual/Organization</h1>
        <textarea
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
          className={`w-full px-3 py-2 border rounded ${
            errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      </div>
    </>
  ) : (
    <>
      <div className="flex gap-[5%] w-full">
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
              className="w-full px-3 border rounded"
              width={550}
              error={errors.typeOfBuyer}
            />
          </div>
        </div>

        <div className="pt-1 w-full">
          <h1 className="pb-1">Profile Headline</h1>
          <input
            type="text"
            name="designation"
            placeholder="Enter Profile Headline"
            value={formData.designation}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded ${
              errors.designation ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
      </div>

      <div>
        <h1>Description of Individual/Organization</h1>
        <textarea
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
          className={`w-full px-3 py-2 border rounded ${
            errors.linkedinProfile ? 'border-red-500' : 'border-gray-300'
          }`}
        />
      </div>
    </>
  )}
</>

</div>
)};

export default StepOne;
