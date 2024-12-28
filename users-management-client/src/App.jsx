import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h2>Users Management System</h2>
      <h4>Numbers of Users: {users.length}</h4>
    </>
  );
}

export default App;
