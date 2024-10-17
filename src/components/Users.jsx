import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  return (
    <div>
      <h2 style={{ textAlign: "right", marginRight: "15px" }}>
        Total users: {users.length}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {users.map((user) => (
          <div
            style={{
              border: "2px solid gray",
              margin: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>User: {user.name}</h3>
            <p>username: {user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

/**
 * 1. Declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 */
