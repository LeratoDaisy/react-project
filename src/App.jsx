import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import AddUserForm from "./components/AddUserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  function addUser(newUser) {
    setUsers([newUser, ...users]);
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>User Directory</h1>

      <AddUserForm addUser={addUser} />

      <SearchBar search={search} setSearch={setSearch} />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      )}
    </div>
  );
}

export default App;