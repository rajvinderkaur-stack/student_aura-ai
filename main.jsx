// main.jsx — Complete Single‑File React + Vite App

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// -----------------------------
// Header Component
// -----------------------------
function Header() {
  return (
    <header style={styles.header}>
      <h1>My Single‑File React + Vite App</h1>
    </header>
  );
}

// -----------------------------
// Navigation Component
// -----------------------------
function Nav({ currentPage, setCurrentPage }) {
  return (
    <nav style={styles.nav}>
      {["Home", "About", "Contact"].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{
            ...styles.navButton,
            backgroundColor: currentPage === page ? "#444" : "#666",
          }}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}

// -----------------------------
// Page Components
// -----------------------------
function Home() {
  return (
    <section style={styles.section}>
      <h2>Home</h2>
      <p>This is a placeholder home page.</p>
    </section>
  );
}

function About() {
  return (
    <section style={styles.section}>
      <h2>About</h2>
      <p>All content is inside one file, including components and placeholders.</p>
    </section>
  );
}

function Contact() {
  return (
    <section style={styles.section}>
      <h2>Contact</h2>
      <p>Placeholder contact form:</p>
      <form style={styles.form}>
        <input placeholder="Your Name" style={styles.input} />
        <input placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Message" style={styles.textarea} />
        <button style={styles.submit}>Send</button>
      </form>
    </section>
  );
}

// -----------------------------
// Main App Component
// -----------------------------
function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={styles.app}>
      <Header />
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

// -----------------------------
// Styles (Inline for Single‑File)
// -----------------------------
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    color: "#fff",
    backgroundColor: "#222",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "20px",
  },
  nav: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  navButton: {
    padding: "10px 15px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  section: {
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
  },
  textarea: {
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    minHeight: "80px",
  },
  submit: {
    padding: "10px",
    backgroundColor: "#555",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

// -----------------------------
// Vite Root Bootstrap
// -----------------------------
createRoot(document.getElementById("root")).render(<App />);
