import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3000/createUser", {
      email,
      username,
    }).then((response) => {
      setListOfUsers([...listOfUsers, response.data]);
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Email: {user.email}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div className="addUser">
        <input
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}>Add User</button>
      </div>
    </div>
  );
}

export default App;
