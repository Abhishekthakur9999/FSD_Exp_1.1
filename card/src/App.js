import React from "react";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">
            Experiment-2: Card-Based Layout
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">
          Mountain Destinations Using React & Bootstrap
        </h2>

        <div className="row">
          {/* Mountain 1 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card shadow h-100 w-100">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt="Mountain Landscape"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Himalayas</h5>
                <p className="card-text">
                  The Himalayas are the highest mountain range in the world.
                </p>
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          {/* Mountain 2 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card shadow h-100 w-100">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                  alt="Mountain View"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Alps</h5>
                <p className="card-text">
                  The Alps stretch across several countries in Europe.
                </p>
                <button className="btn btn-success">Explore</button>
              </div>
            </div>
          </div>

          {/* Mountain 3 */}
          <div className="col-md-4 d-flex mb-4">
            <div className="card shadow h-100 w-100">
              <div className="img-box">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt="Snowy Mountains"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Rocky Mountains</h5>
                <p className="card-text">
                  The Rocky Mountains are a major mountain system in North America.
                </p>
                <button className="btn btn-warning">Discover</button>
              </div>
            </div>
          </div>
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
