import React, { useState, useEffect } from "react";
import "../app.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [shop, setShop] = useState("Metal");
  const infoToPass = 'Hello, World!';
  const url = `/shop?info=${encodeURIComponent(shop)}`;

  return (
    <form className="form" 
      // onSubmit={handleSubmit}
    >
      <h1>Shop Info 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label for="shops">Choose a shop: </label>
      <select name="shops" id="shops" onChange={(e) => setShop(e.target.value)}>
        <option value="Metal">Metal</option>
        <option value="Wood">Wood</option>
        <option value="Cafe">Cafe</option>
        <option value="LaserCutting">Laser Cutting & Engraving</option>
        <option value="Ceramics">Ceramics</option>
        <option value="Electronics">Electronics</option>
        <option value="3D-Printing">3D-Printing</option>
        <option value="TestingLab">Testing Lab</option>
        <option value="Showcase">Showcase Area</option>
        <option value="RapidProto">Adv Rapid Prototyping</option>
      </select>
      
      <Link to={url}>
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        className="button-proceed"
      >
        Proceed
      </button>
      </Link>
    </form>
  );
};

export default Contact;
