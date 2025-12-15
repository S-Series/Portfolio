import { useState, useEffect } from "react";
import { useProfile } from "../contexts/useProfile";
import { useServer } from "../contexts/useServer";

import "./_page.css";
import "./Contact.css";

const API = "http://localhost:3001";

export default function Contact() {
  const { user, login, logout } = useProfile();
  const { createContact, fetchContactsByUser } = useServer();

  // auth mode: "login" | "register"
  const [mode, setMode] = useState("login");

  // auth fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [authError, setAuthError] = useState(null);

  // contact fields
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetchContactsByUser(user.id).then(setContacts);
  }, [user]);

  /* ---------- LOGIN ---------- */
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError(null);

    const res = await fetch(
      `${API}/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (data.length === 0) {
      setAuthError("Invalid email or password");
      return;
    }

    login(data[0]); // context + localStorage
  };

  /* ---------- REGISTER ---------- */
  const handleRegister = async (e) => {
    e.preventDefault();
    setAuthError(null);

    const check = await fetch(`${API}/users?email=${email}`);
    const exists = await check.json();
    if (exists.length > 0) {
      setAuthError("Email already exists");
      return;
    }

    const res = await fetch(`${API}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        name,
        role: "user",
      }),
    });

    const newUser = await res.json();
    login(newUser);
  };

  /* ---------- SEND CONTACT ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSending(true);

    await createContact({
      userId: user.id,
      email: user.email,
      message,
      createdAt: new Date().toISOString(),
    });

    setMessage("");
    setSending(false);
    alert("문의가 전송되었습니다.");
    window.location.reload();
  };

  /* =================== RENDER =================== */

  return (
    <div className="page-body contact-page">
      {/* ---------- NOT LOGGED IN ---------- */}
      {!user && (
        <div className="contact-auth">
          <p>문의는 로그인한 사용자만 가능합니다.</p>

          {mode === "login" && (
            <form onSubmit={handleLogin} className="input-form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {authError && <p className="error">{authError}</p>}

              <button type="submit">Login</button>

              <p className="switch" onClick={() => setMode("register")}>
                No account? Register
              </p>
            </form>
          )}

          {mode === "register" && (
            <form onSubmit={handleRegister} className="input-form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {authError && <p className="error">{authError}</p>}

              <button type="submit">Register</button>

              <p className="switch" onClick={() => setMode("login")}>
                Already have an account? Login
              </p>
            </form>
          )}
        </div>
      )}

      {/* ---------- LOGGED IN ---------- */}
      {user && (
        <>
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Contact</h2>
            <div className="contact-user">
              <span>
                Logined by: <em>{user.email}</em>
              </span>
              <button onClick={logout}>Log out</button>
            </div>

            <textarea
              placeholder="문의 내용을 입력하세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </button>
          </form>

          <h2>Contact History</h2>
          <div className="contact-items">
            {contacts.length === 0 && (
              <span className="empty">아직 작성한 문의가 없습니다.</span>
            )}

            {contacts.map((item) => (
              <div key={item.id} className="contact-item">
                <div className="contact-meta">
                  {new Date(item.createdAt).toLocaleString()}
                </div>
                <div className="contact-message">{item.message}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
