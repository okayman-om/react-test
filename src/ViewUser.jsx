import { useState } from "react";

const ViewUser = () => {
  const [users, setUser] = useState([
    {
      id: 1,
      name: "Ricardo Genus",
      username: "sec_ric"
    },
    {
      id: 2,
      name: "James Murray",
      username: "jame_murr"
    }
  ]);

  console.log(users.length);
  users.map((user) => console.log(user.name));

  return (
    <div className="card">
      <h2 className="card-header">View User</h2>
      <div className="card-body">
        <ul className="list-group">
          {users.length > 0
            ? users.map((user) => <h2>{user.name}</h2>)
            : "No users found"}
        </ul>
      </div>
    </div>
  );
};

export default ViewUser;
