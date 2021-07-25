import { useState } from "react";

const TheForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    return console.log("message", name, username);
  };
  return (
    <div className="card">
      <h1 className="card-header">Add User</h1>
      <div className="card-body">
        <form action="">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              // value={name}
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={onSubmit}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default TheForm;
