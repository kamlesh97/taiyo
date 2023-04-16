import { useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../userSlice";
import  uuid4  from "uuid4";
const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({ firstName: "", lastName: "" ,active:''});

  const handleAdd = () => {
    setValues({ firstName: "", lastName: "" ,active:''});
    dispatch(
      addUser({
        id: uuid4(),
        firstName: values.firstName,
        lastName: values.lastName,
        active:values.active
      })
    );
    navigate("/");
    
  };
  return (
    <div className="mt-10 max-w-xl mx-auto   ">
      Create Contact Screeen
      <TextField
        label="First Name"
        inputProps={{ type: "text", placeholder: "enter First Name" }}
        value={values.firstName}
        onChange={(e:any) => setValues({ ...values, firstName: e.target.value })}
      />
      <TextField
        label="Last Name"
        inputProps={{ type: "text", placeholder: "enter Last Name" }}
        value={values.lastName}
        onChange={(e:any) => setValues({ ...values, lastName: e.target.value })}
      />
      Status
       <input
            value="Active"
            type='radio'
            defaultChecked={values.active ==="Active"}
            name='status'
            onChange={(e:any) => setValues({ ...values, active: 'Active'})}
          />
          Active
          <input
            value="InActive"
            type='radio'
            defaultChecked={values.active ==="InActive"}
            name='status'
            onChange={(e:any) => setValues({ ...values, active: 'InActive' })}
          />
          InActive
      <Button onClick={handleAdd}>Save Contact</Button>
    </div>
  );
};

export default Adduser;
