import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../firebase";
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Shop = () => {
    const [message, setMessage] = useState("");
    const [machine, setMachine] = useState("");
    const [showcase, setShowcase] = useState("");
    const [loader, setLoader] = useState(false);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const shop = params.get('info');

    useEffect(() => {
        //Runs only on the first render
        db.collection("info")
    .where("shop", "==", shop)
    .get()
    .then((querySnapshot) => {
    const resultContainer = document.getElementById("resultContainer");
    const machineContainer = document.getElementById("machineContainer");
    const showcaseContainer = document.getElementById("showcaseContainer");
    

    const dataArr = querySnapshot.docs.map((doc) => doc.data());

    // Now dataArr contains an array of each doc's data
    // You can loop through the array to create and display HTML elements for each document
    dataArr.forEach((data) => {
        // Create a new HTML element for each document
        const element = document.createElement("div");
        data.message && (element.textContent = data.message); // Assuming "name" is a field in your data
        const machineElement = document.createElement("div");
        data.machine && (machineElement.textContent = data.machine);
        const showcaseElement = document.createElement("div");
        data.showcase && (showcaseElement.textContent = data.showcase);

        // Append the new element to the container
        data.message && resultContainer.appendChild(element);
        data.machine && machineContainer.appendChild(machineElement);
        data.showcase && showcaseContainer.appendChild(showcaseElement);
    });
    })
    .catch((error) => {
    console.log("Error getting documents: ", error);
    });
      }, []);

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("info")
      .add({
        shop: shop,
        message: message,
        machine: machine,
        showcase: showcase
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍. Click on BACK to submit another entry");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setMessage("");
  };

    return (
        <div className="app_shop">
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="heading">{shop}</h2>
                <h3>Submit multiple entries for different machines/projects</h3>
                <div className="shop_info" id="resultContainer"></div>
                <div className="shop_info" id="machineContainer"></div>
                <div className="shop_info" id="showcaseContainer"></div>
                <label>Info</label>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label>Machine name and info</label>
                <textarea
                    placeholder="Machine model and properties"
                    value={machine}
                    onChange={(e) => setMachine(e.target.value)}
                ></textarea>
                <label>Showcase Project and info</label>
                <textarea
                    placeholder="Details about the project"
                    value={showcase}
                    onChange={(e) => setShowcase(e.target.value)}
                ></textarea>
                <div>
                    <button
                        className="button-proceed"
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
                        Submit
                    </button>
                    <Link to="/">
                    <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                        className="button-proceed"
                    >
                        Back
                    </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Shop;
