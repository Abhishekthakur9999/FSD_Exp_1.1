import React from "react";

function App() {

  // Card data with images
  const cardData = [
    {
      title: "Web Development",
      text: "Learn HTML, CSS, JavaScript and React.",
      image: "https://www.altys.com/images/web-development.jpg"
    },
    {
      title: "Data Structures",
      text: "Understand arrays, stacks, queues and trees.",
      image: "https://www.altys.com/images/data-structures.jpg"
    },
    {
      title: "Machine Learning",
      text: "Explore AI, ML algorithms and applications.",
      image: "https://www.altys.com/images/machine-learning.jpg"
    },
    {
      title: "Cloud Computing",
      text: "Learn AWS, Azure and cloud services.",
      image: "https://www.altys.com/images/cloud-computing.jpg"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Card-Based Layout Using Bootstrap
      </h2>

      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              
              {/* Card Image */}
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
              />

              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
