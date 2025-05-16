const Confirmation = ({ formData }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Confirm Your Details</h3>
    <ul className="text-sm space-y-2">
      <li><strong>First Name:</strong> {formData.firstName}</li>
      <li><strong>Last Name:</strong> {formData.lastName}</li>
      <li><strong>Email:</strong> {formData.email}</li>
      <li><strong>Gender:</strong> {formData.gender}</li>
    </ul>
  </div>
);

export default Confirmation;
