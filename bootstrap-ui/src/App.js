import React from "react";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">

      {/* Header */}
      <div className="container py-4">
        <h2 className="fw-bold">
          Exp 2.1 - Designing UI using Bootstrap Components
        </h2>
        <hr />
        <p>
          In this experiment, a responsive contact form UI is created using
          Bootstrap. The layout focuses on simplicity, alignment, and
          accessibility while maintaining a modern design aesthetic.
        </p>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand fw-bold">UI Experiment</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <span className="nav-link text-white">Home</span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">Features</span>
              </li>
              <li className="nav-item">
                <span className="nav-link text-white">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <div className="container d-flex justify-content-center align-items-center my-5">
        <div className="card shadow-lg p-4" style={{ width: "420px" }}>
          <h4 className="text-center text-primary mb-3">Contact Us</h4>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button className="btn btn-primary w-100">
            Send Message
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
