import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../userSlice";
const UserList = () => {
  const users = useSelector((store: any) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id: number) => {
    dispatch(deleteUser({ id }));
  };
  const renderCard = () =>
    users.map((user: any) => (
      <div
        className="bg-gray-300 p-5 flex items-center justify-between"
        key={user.id}
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.firstName}</h3>
          <span className="font-normal text-gray-600">{user.lastName}</span>
          <p className="font-normal text-gray-600">Status : {user.active}</p>
        </div>
        <div>
          <Link to={`/edit/${user.id}`}>
            {" "}
            <button>edit</button>
          </Link>{" "}
          <button onClick={() => handleDelete(user.id)}> delete</button>
        </div>
      </div>
    ));
  return (
    <div>
      <h2 className="pb-10 text-xl text-gray-700">Contact</h2>
      <Button onClick={() => navigate("/add")}>Create Contact</Button>

      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            no Contact found please add contact from create conact Button
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
