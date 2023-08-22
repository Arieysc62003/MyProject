import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContinueShopping from "../components/ContinueShopping";

const Details = () => {
  let { id } = useParams();
  const [item, setItem] = useState();
  const addCart = () => {
    alert("add cart " + item.phoneId);
  };
  useEffect(() => {
    fetch(`https://localhost:5478/Phones/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
      });
  }, []);
  return (
    <div className="app">
      {item && (
        <div className="details" key={item.phoneId}>
          <div className="big-img">
            <img src={item.imageData} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{item.model}</h2>
              <span>{item.price}</span>
            </div>
            <p>{item.details}</p>
            <button className="cart" onClick={() => addCart(item.phoneID)}>
              Add to cart
            </button>
            <ContinueShopping message={"Return Shopping"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
