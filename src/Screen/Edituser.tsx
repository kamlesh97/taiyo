import { useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../userSlice";

const Edituser = () => {
  const users = useSelector((store: any) => store.users);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser =
    users && users.filter((user: any) => user.id == params.id);

  const { firstName, lastName, active } = existingUser[0];
  const [values, setValues] = useState({ firstName, lastName, active });

  const handleAdd = () => {
    setValues({ firstName: "", lastName: "", active: "" });
    dispatch(
      editUser({
        id: params.id,
        firstName: values.firstName,
        lastName: values.lastName,
        active: values.active,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-xl mx-auto   ">
      Edit Contact Screen
      <TextField
        label="First Name"
        inputProps={{ type: "text", placeholder: "enter First Name" }}
        value={values.firstName}
        onChange={(e: any) =>
          setValues({ ...values, firstName: e.target.value })
        }
      />
      <TextField
        label="Last Name"
        inputProps={{ type: "text", placeholder: "enter Last Name" }}
        value={values.lastName}
        onChange={(e: any) =>
          setValues({ ...values, lastName: e.target.value })
        }
      />
      Status
      <input
        value="Active"
        type="radio"
        defaultChecked={values.active === "Active"}
        name="status"
        onChange={(e: any) => setValues({ ...values, active: "Active" })}
      />
      Active
      <input
        value="InActive"
        type="radio"
        defaultChecked={values.active === "InActive"}
        name="status"
        onChange={(e: any) => setValues({ ...values, active: "InActive" })}
      />
      InActive
      <Button onClick={handleAdd}>Save Edited Contact</Button>
    </div>
  );
};

export default Edituser;
