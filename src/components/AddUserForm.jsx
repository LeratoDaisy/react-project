import { useState } from "react";

function AddUserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) return;

    addUser({
      id: Date.now(),
      name,
      email,
      company: {
        name: "New Company",
      },
    });

    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Add User</button>
    </form>
  );
}

export default AddUserForm;