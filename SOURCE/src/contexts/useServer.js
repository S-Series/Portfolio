import { createContext, useContext, useEffect, useState } from "react";

const ServerContext = createContext(null);
const API_BASE = "http://localhost:3001";

export function ServerProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ---------- READ (ALL USERS) ---------- */
  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch(`${API_BASE}/users`);
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  /* ---------- CREATE USER ---------- */
  const createUser = async (user) => {
    const res = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const newUser = await res.json();
    setUsers((prev) => [...prev, newUser]);
    return newUser;
  };

  /* ---------- UPDATE USER ---------- */
  const updateUser = async (id, updates) => {
    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    const updatedUser = await res.json();
    setUsers((prev) => prev.map((u) => (u.id === id ? updatedUser : u)));
    return updatedUser;
  };

  /* ---------- DELETE USER ---------- */
  const deleteUser = async (id) => {
    await fetch(`${API_BASE}/users/${id}`, {
      method: "DELETE",
    });

    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  /* ---------- CREATE CONTACT ---------- */
  const createContact = async (contact) => {
    const res = await fetch(`${API_BASE}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    return res.json();
  };

  /* ---------- READ CONTACTS BY USER ---------- */
  const fetchContactsByUser = async (userId) => {
    const res = await fetch(
      `${API_BASE}/contacts?userId=${userId}&_sort=createdAt&_order=desc`
    );
    return res.json();
  };

  /* ---------- INITIALIZE ---------- */
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ServerContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
        createUser,
        updateUser,
        deleteUser,
        createContact,
        fetchContactsByUser,
      }}>
      {children}
    </ServerContext.Provider>
  );
}

/* ---------- Custom Hook ---------- */
export function useServer() {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error("useServer must be used within ServerProvider");
  }
  return context;
}
