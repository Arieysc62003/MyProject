import { phones } from "../data/PhonesData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowFatLeft } from "phosphor-react";
import "../css/Cart.css";

const Details = () => {
  let { id } = useParams();
  const data = phones.find((phone) => phone.phoneID == id);
  const [item] = useState(data);
  const addCart = (id) => {
    alert("add cart " + id);
  };

  return (
    <div className="app">
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
          <div className="continue-shopping">
            <Link to="/">
              <ArrowFatLeft width={20} height={20} />
              <span> Return Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
