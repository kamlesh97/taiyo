import { useState } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../userSlice";
interface User{
  id: number;
  firstName: string;
  lastName: string;
  active: string;
}

const Edituser = () => {
  const users = useSelector((store: any) => store.users);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser:User[] = users.filter((user:any) => user.id == params.id);

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
      <h2 className="pb-10 text-xl text-gray-700">Edit Contact Screen</h2>
      <TextField
        label="First Name"
        inputProps={{ type: "text", placeholder: "enter First Name" }}
        value={values.firstName}
        onChange={(e: any) =>
          setValues({ ...values, firstName: e.target.value })
        }

      />
      <br />
      <TextField
        label="Last Name"
        inputProps={{ type: "text", placeholder: "enter Last Name" }}
        value={values.lastName}
        onChange={(e: any) =>
          setValues({ ...values, lastName: e.target.value })
        }
      />
      <br />
      Status :{" "}
      <input
        value="Active"
        type="radio"
        defaultChecked={values.active === "Active"}
        name="status"
        onChange={(e: any) => setValues({ ...values, active: "Active" })}
        required
      />{" "}
      Active{" "}
      <input
        value="InActive"
        type="radio"
        defaultChecked={values.active === "InActive"}
        name="status"
        onChange={(e: any) => setValues({ ...values, active: "InActive" })}
        required
      />{" "}
      InActive
      <br />
      <Button onClick={handleAdd}>Save Edited Contact</Button>
    </div>
  );
};

export default Edituser;
