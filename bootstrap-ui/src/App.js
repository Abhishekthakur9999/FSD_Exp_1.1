import React from "react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            React + Bootstrap UI
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">
          Famous Tourist Places Using React & Bootstrap
        </h2>

        <div className="row">
          {/* Taj Mahal */}
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
                className="card-img-top"
                alt="Taj Mahal"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Taj Mahal</h5>
                <p className="card-text">
                  Located in Agra, India, the Taj Mahal is a symbol of love.
                </p>
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          {/* Eiffel Tower */}
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"
                className="card-img-top"
                alt="Eiffel Tower"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Eiffel Tower</h5>
                <p className="card-text">
                  The Eiffel Tower is a famous landmark in Paris, France.
                </p>
                <button className="btn btn-success">Explore</button>
              </div>
            </div>
          </div>

          {/* Statue of Liberty */}
          <div className="col-md-4">
            <div className="card shadow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
                className="card-img-top"
                alt="Statue of Liberty"
                height="200"
              />
              <div className="card-body">
                <h5 className="card-title">Statue of Liberty</h5>
                <p className="card-text">
                  A symbol of freedom located in New York, USA.
                </p>
                <button className="btn btn-warning">Discover</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-5">
          <h3>Contact Form</h3>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <button className="btn btn-primary">Submit</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-5">
        © 2026 UI Design Lab – Bootstrap
      </footer>
    </div>
  );
}

export default App;
