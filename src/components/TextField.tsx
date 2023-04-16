interface textfield{
  label:string;
  inputProps:object;
  value:string;
  onChange:any;
}
const TextField = ({ label, inputProps, value, onChange }:textfield) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800">{label}</label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        {...inputProps}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default TextField;
