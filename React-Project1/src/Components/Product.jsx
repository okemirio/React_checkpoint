import React, { useState } from "react";

const Products = () => {
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSubmit = () => {
    if (firstName.trim()) {
      setSubmitted(true);
    }
  };

  const items = [
    {
      name: "Iphone",
      price: "$19.99",
      description: "This is a cool product that you will love!",
      imageUrl:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvbmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Samsung Galaxy",
      price: "$29.99",
      description: "Another great product!",
      imageUrl:
        "https://images.unsplash.com/photo-1713027420493-e675245ea725?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Google Pixel",
      price: "$39.99",
      description: "The best of Google in a phone!",
      imageUrl:
        "https://images.unsplash.com/photo-1635870723802-e88d76ae324e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "OnePlus",
      price: "$49.99",
      description: "Fast and smooth experience!",
      imageUrl:
        "https://images.unsplash.com/photo-1649515530664-7a3150983c7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lcGx1cyUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Sony Xperia",
      price: "$59.99",
      description: "A great device for media consumption!",
      imageUrl:
        "https://images.unsplash.com/photo-1626427329308-a5dab712aea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29ueSUyMHhwZXJpYSUyMHBob25lfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1626427329308-a5dab712aea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29ueSUyMHhwZXJpYSUyMHBob25lfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="product-list">
      {!submitted ? (
        <div>
          <h1>Welcome</h1>
          <h6>Please enter your name</h6>
          <input
            type="text"
            value={firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div>
          <h1>Hello, {firstName}</h1>
          {items.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.imageUrl} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="card-text">Price: {item.price}</p>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
